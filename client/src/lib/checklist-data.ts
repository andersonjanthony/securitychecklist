export interface ChecklistItemData {
  id: string;
  section: string;
  subsection: string;
  title: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  instructions: string;
  references: string[];
}

// Import the comprehensive data from checklist-full-data
import { checklistData as fullChecklistData } from './checklist-full-data';

// Export the full data directly
export const checklistData: ChecklistItemData[] = fullChecklistData;

export const getSectionItems = (sectionName: string) => {
  return checklistData.filter(item => item.section === sectionName);
};

export const getSubsectionItems = (sectionName: string, subsectionName: string) => {
  return checklistData.filter(item => 
    item.section === sectionName && item.subsection === subsectionName
  );
};

export const getAllSections = () => {
  const sections = [...new Set(checklistData.map(item => item.section))];
  return sections;
};

export const getSubsections = (sectionName: string) => {
  const subsections = [...new Set(
    checklistData
      .filter(item => item.section === sectionName)
      .map(item => item.subsection)
  )];
  return subsections;
};