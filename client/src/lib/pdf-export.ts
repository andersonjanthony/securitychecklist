import { ChecklistState } from '@/hooks/useChecklistState';
import { checklistData } from '@/lib/checklist-data';

declare global {
  interface Window {
    jsPDF: any;
  }
}

export const exportToPDF = (checklistState: ChecklistState) => {
  // Load jsPDF from CDN if not already loaded
  if (!window.jsPDF) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = () => generatePDF(checklistState);
    document.head.appendChild(script);
  } else {
    generatePDF(checklistState);
  }
};

const generatePDF = (checklistState: ChecklistState) => {
  const { jsPDF } = window;
  const doc = new jsPDF();
  
  // PDF Configuration
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const lineHeight = 7;
  let yPosition = margin;
  
  // Title
  doc.setFontSize(20);
  doc.setTextColor(1, 118, 211); // Salesforce blue
  doc.text('Salesforce Security Hardening Checklist', margin, yPosition);
  yPosition += 15;
  
  // Subtitle and date
  doc.setFontSize(12);
  doc.setTextColor(102, 102, 102);
  doc.text('Security Assessment Report', margin, yPosition);
  yPosition += 7;
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPosition);
  yPosition += 15;
  
  // Progress Summary
  const progress = calculateProgress(checklistState);
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Progress Summary', margin, yPosition);
  yPosition += 10;
  
  doc.setFontSize(11);
  doc.text(`Total Items: ${progress.total}`, margin, yPosition);
  yPosition += 6;
  doc.text(`Completed: ${progress.completed}`, margin, yPosition);
  yPosition += 6;
  doc.text(`Progress: ${progress.percentage}%`, margin, yPosition);
  yPosition += 15;
  
  // Group items by section
  const sections = groupItemsBySection();
  
  sections.forEach(section => {
    // Check if we need a new page
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }
    
    // Section header
    doc.setFontSize(14);
    doc.setTextColor(3, 46, 97); // Salesforce dark blue
    doc.text(section.name, margin, yPosition);
    yPosition += 10;
    
    // Section progress
    const sectionProgress = calculateSectionProgress(section.items, checklistState);
    doc.setFontSize(10);
    doc.setTextColor(102, 102, 102);
    doc.text(`${sectionProgress.completed}/${sectionProgress.total} items completed`, margin, yPosition);
    yPosition += 8;
    
    // Group by subsection
    const subsections = groupItemsBySubsection(section.items);
    
    subsections.forEach(subsection => {
      // Check if we need a new page
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = margin;
      }
      
      // Subsection header
      doc.setFontSize(12);
      doc.setTextColor(1, 118, 211);
      doc.text(subsection.name, margin + 5, yPosition);
      yPosition += 8;
      
      // Items
      subsection.items.forEach(item => {
        // Check if we need a new page
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = margin;
        }
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        
        // Checkbox symbol
        const isCompleted = checklistState[item.id] || false;
        const checkbox = isCompleted ? '☑' : '☐';
        doc.text(checkbox, margin + 10, yPosition);
        
        // Priority badge
        if (item.priority === 'critical') {
          doc.setTextColor(217, 0, 27);
          doc.text('[CRITICAL]', margin + 18, yPosition);
          doc.setTextColor(0, 0, 0);
        } else if (item.priority === 'high') {
          doc.setTextColor(255, 149, 0);
          doc.text('[HIGH]', margin + 18, yPosition);
          doc.setTextColor(0, 0, 0);
        }
        
        // Item text
        const textStartX = item.priority === 'critical' || item.priority === 'high' ? margin + 38 : margin + 18;
        const maxWidth = pageWidth - textStartX - margin;
        const lines = doc.splitTextToSize(item.title, maxWidth);
        
        lines.forEach((line: string, index: number) => {
          if (yPosition > pageHeight - 15) {
            doc.addPage();
            yPosition = margin;
          }
          doc.text(line, textStartX, yPosition + (index * lineHeight));
        });
        
        yPosition += lines.length * lineHeight + 3;
      });
      
      yPosition += 5;
    });
    
    yPosition += 10;
  });
  
  // Save the PDF
  const fileName = `salesforce-security-checklist-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};

const calculateProgress = (checklistState: ChecklistState) => {
  const total = checklistData.length;
  const completed = Object.values(checklistState).filter(Boolean).length;
  const percentage = Math.round((completed / total) * 100);
  
  return { total, completed, percentage };
};

const calculateSectionProgress = (items: typeof checklistData, checklistState: ChecklistState) => {
  const total = items.length;
  const completed = items.filter(item => checklistState[item.id]).length;
  
  return { total, completed };
};

const groupItemsBySection = () => {
  const sections = new Map();
  
  checklistData.forEach(item => {
    if (!sections.has(item.section)) {
      sections.set(item.section, []);
    }
    sections.get(item.section).push(item);
  });
  
  return Array.from(sections.entries()).map(([name, items]) => ({
    name,
    items
  }));
};

const groupItemsBySubsection = (items: typeof checklistData) => {
  const subsections = new Map();
  
  items.forEach(item => {
    if (!subsections.has(item.subsection)) {
      subsections.set(item.subsection, []);
    }
    subsections.get(item.subsection).push(item);
  });
  
  return Array.from(subsections.entries()).map(([name, items]) => ({
    name,
    items
  }));
};
