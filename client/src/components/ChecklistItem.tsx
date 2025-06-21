import { ChecklistItemData } from '@/lib/checklist-data';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Info, MinusCircle, Plus } from 'lucide-react';

interface ChecklistItemProps {
  item: ChecklistItemData;
  isChecked: boolean;
  isExcluded: boolean;
  onToggle: (itemId: string) => void;
  onShowInstructions: (item: ChecklistItemData) => void;
  onToggleExclusion: (itemId: string) => void;
}

const priorityColors = {
  critical: 'bg-red-600 text-white',
  high: 'bg-orange-500 text-white',
  medium: 'bg-blue-100 text-blue-800',
  low: 'bg-gray-100 text-gray-800'
};

const priorityLabels = {
  critical: 'CRITICAL',
  high: 'HIGH',
  medium: 'MEDIUM',
  low: 'LOW'
};

export const ChecklistItem = ({ 
  item, 
  isChecked, 
  isExcluded, 
  onToggle, 
  onShowInstructions, 
  onToggleExclusion 
}: ChecklistItemProps) => {
  const handleChange = () => {
    onToggle(item.id);
  };

  const handleInstructionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onShowInstructions(item);
  };

  const handleExclusionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleExclusion(item.id);
  };

  return (
    <div className={cn(
      "flex items-start space-x-3 p-3 rounded-lg transition-colors",
      isExcluded ? "bg-gray-100 opacity-60" : "hover:bg-gray-50",
      !isExcluded && item.priority === 'critical' && "bg-red-50 border-l-4 border-red-600",
      !isExcluded && item.priority === 'high' && "bg-orange-50 border-l-4 border-orange-500"
    )}>
      <Checkbox
        id={item.id}
        checked={isChecked}
        onCheckedChange={handleChange}
        className="mt-1"
        disabled={isExcluded}
      />
      <label 
        htmlFor={item.id} 
        className={cn(
          "flex-1 text-sm leading-relaxed cursor-pointer",
          isExcluded ? "text-gray-500 line-through" : "text-gray-800"
        )}
      >
        {!isExcluded && (item.priority === 'critical' || item.priority === 'high') && (
          <span className={cn(
            "text-xs px-2 py-1 rounded mr-2 font-medium",
            priorityColors[item.priority]
          )}>
            {priorityLabels[item.priority]}
          </span>
        )}
        {item.title}
      </label>
      
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleInstructionsClick}
          className="h-8 w-8 p-0 hover:bg-sf-light-blue"
          title="View instructions"
        >
          <Info className="w-4 h-4 text-sf-blue" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleExclusionClick}
          className={cn(
            "h-8 w-8 p-0",
            isExcluded ? "hover:bg-blue-100 text-blue-600" : "hover:bg-orange-100 text-orange-600"
          )}
          title={isExcluded ? "Include item" : "Exclude item"}
        >
          {isExcluded ? <Plus className="w-4 h-4" /> : <MinusCircle className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};
