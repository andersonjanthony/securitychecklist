import { useState } from 'react';
import { ChevronDown, ChevronUp, MinusCircle, Plus } from 'lucide-react';
import { ChecklistItem } from './ChecklistItem';
import { getSubsections, getSubsectionItems, ChecklistItemData } from '@/lib/checklist-data';
import { ChecklistState } from '@/hooks/useChecklistState';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChecklistSectionProps {
  sectionName: string;
  sectionIndex: number;
  checklistState: ChecklistState;
  sectionProgress: { total: number; completed: number };
  onToggleItem: (itemId: string) => void;
  onShowInstructions: (item: ChecklistItemData) => void;
  onToggleItemExclusion: (itemId: string) => void;
  onToggleSectionExclusion: (sectionName: string) => void;
  isSectionExcluded: boolean;
  isItemExcluded: (itemId: string) => boolean;
  searchQuery?: string;
  filter?: 'all' | 'complete' | 'incomplete';
}

export const ChecklistSection = ({ 
  sectionName, 
  sectionIndex, 
  checklistState, 
  sectionProgress,
  onToggleItem,
  onShowInstructions,
  onToggleItemExclusion,
  onToggleSectionExclusion,
  isSectionExcluded,
  isItemExcluded,
  searchQuery = '',
  filter = 'all'
}: ChecklistSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(sectionIndex === 0); // First section expanded by default
  const subsections = getSubsections(sectionName);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowItem = (itemTitle: string, itemId: string) => {
    // Search filter
    if (searchQuery && !itemTitle.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Completion filter
    const isCompleted = checklistState[itemId] || false;
    if (filter === 'complete' && !isCompleted) return false;
    if (filter === 'incomplete' && isCompleted) return false;

    return true;
  };

  return (
    <div className={cn(
      "bg-white rounded-lg shadow-sm border border-gray-200",
      isSectionExcluded && "opacity-60 bg-gray-50"
    )}>
      <div 
        className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={toggleExpanded}
      >
        <div className="flex items-center justify-between">
          <h2 className={cn(
            "text-xl font-semibold",
            isSectionExcluded ? "text-gray-500 line-through" : "text-sf-dark-blue"
          )}>
            {sectionIndex + 1}. {sectionName}
          </h2>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onToggleSectionExclusion(sectionName);
              }}
              className={cn(
                "h-8 w-8 p-0",
                isSectionExcluded ? "hover:bg-blue-100 text-blue-600" : "hover:bg-orange-100 text-orange-600"
              )}
              title={isSectionExcluded ? "Include section" : "Exclude section"}
            >
              {isSectionExcluded ? <Plus className="w-4 h-4" /> : <MinusCircle className="w-4 h-4" />}
            </Button>
            <span className="text-sm text-gray-600">
              {sectionProgress.completed}/{sectionProgress.total} items
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="section-content">
          {subsections.map((subsection, index) => {
            const subsectionItems = getSubsectionItems(sectionName, subsection);
            const visibleItems = subsectionItems.filter(item => 
              shouldShowItem(item.title, item.id)
            );

            if (visibleItems.length === 0) return null;

            return (
              <div 
                key={`${sectionName}-${subsection}`} 
                className={cn(
                  "p-4",
                  index < subsections.length - 1 && "border-b border-gray-100"
                )}
              >
                <h3 className="text-lg font-medium text-sf-blue mb-4">{subsection}</h3>
                <div className="space-y-3">
                  {visibleItems.map(item => (
                    <ChecklistItem
                      key={item.id}
                      item={item}
                      isChecked={checklistState[item.id] || false}
                      isExcluded={isItemExcluded(item.id)}
                      onToggle={onToggleItem}
                      onShowInstructions={onShowInstructions}
                      onToggleExclusion={onToggleItemExclusion}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
