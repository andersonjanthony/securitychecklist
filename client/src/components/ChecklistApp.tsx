import { useState } from 'react';
import { ChecklistHeader } from './ChecklistHeader';
import { SearchAndFilters } from './SearchAndFilters';
import { ChecklistSection } from './ChecklistSection';
import { InstructionPanel } from './InstructionPanel';
import { useChecklistState } from '@/hooks/useChecklistState';
import { useExclusionState } from '@/hooks/useExclusionState';
import { getAllSections, ChecklistItemData } from '@/lib/checklist-data';
import { exportToPDF } from '@/lib/pdf-export';
import { InfoIcon } from 'lucide-react';

export const ChecklistApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'complete' | 'incomplete'>('all');
  const [selectedItem, setSelectedItem] = useState<ChecklistItemData | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);
  
  const { checklistState, toggleItem, clearAllProgress, getProgress, getSectionProgress } = useChecklistState();
  const { 
    exclusionState,
    toggleSectionExclusion, 
    toggleItemExclusion, 
    clearAllExclusions, 
    isSectionExcluded, 
    isItemExcluded 
  } = useExclusionState();

  const progress = getProgress({ excludedSections: exclusionState.excludedSections, excludedItems: exclusionState.excludedItems });
  const sections = getAllSections();

  const handleExportPDF = () => {
    exportToPDF(checklistState);
  };

  const handleShowInstructions = (item: ChecklistItemData) => {
    setSelectedItem(item);
    setShowInstructions(true);
  };

  const handleCloseInstructions = () => {
    setShowInstructions(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ChecklistHeader
        progress={progress}
        onExportPDF={handleExportPDF}
        onClearProgress={clearAllProgress}
      />

      <main className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Progress Card */}
          <div className="sm:hidden mb-6 bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-sf-dark-blue">
                Progress: {progress.percentage}%
              </div>
              <div className="text-sm text-gray-600">
                {progress.completed} of {progress.total} items
              </div>
            </div>
          </div>

          <SearchAndFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filter={filter}
            onFilterChange={setFilter}
            onClearProgress={clearAllProgress}
            onClearExclusions={clearAllExclusions}
            onExportPDF={handleExportPDF}
          />

          {/* Introduction Card */}
          <div className="bg-sf-light-blue border border-sf-blue rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <InfoIcon className="text-sf-blue text-xl mt-1 w-5 h-5" />
              <div>
                <h3 className="font-semibold text-sf-dark-blue mb-2">Important Information</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  This comprehensive checklist helps you systematically secure your Salesforce organization. 
                  Work through each section methodically, prioritizing high-risk items (marked in red). 
                  Remember to test all changes in a sandbox environment first and document your security 
                  configurations for compliance purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <ChecklistSection
                key={section}
                sectionName={section}
                sectionIndex={index}
                checklistState={checklistState}
                sectionProgress={getSectionProgress(section, { excludedSections: exclusionState.excludedSections, excludedItems: exclusionState.excludedItems })}
                onToggleItem={toggleItem}
                onShowInstructions={handleShowInstructions}
                onToggleItemExclusion={toggleItemExclusion}
                onToggleSectionExclusion={toggleSectionExclusion}
                isSectionExcluded={isSectionExcluded(section)}
                isItemExcluded={isItemExcluded}
                searchQuery={searchQuery}
                filter={filter}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Instruction Panel */}
      {selectedItem && (
        <InstructionPanel
          item={selectedItem}
          isOpen={showInstructions}
          onClose={handleCloseInstructions}
        />
      )}
    </div>
  );
};
