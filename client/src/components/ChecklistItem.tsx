import { ChecklistItemData } from '@/lib/checklist-data';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface ChecklistItemProps {
  item: ChecklistItemData;
  isChecked: boolean;
  onToggle: (itemId: string) => void;
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

export const ChecklistItem = ({ item, isChecked, onToggle }: ChecklistItemProps) => {
  const handleChange = () => {
    onToggle(item.id);
  };

  return (
    <div className={cn(
      "flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors",
      item.priority === 'critical' && "bg-red-50 border-l-4 border-red-600",
      item.priority === 'high' && "bg-orange-50 border-l-4 border-orange-500"
    )}>
      <Checkbox
        id={item.id}
        checked={isChecked}
        onCheckedChange={handleChange}
        className="mt-1"
      />
      <label 
        htmlFor={item.id} 
        className="flex-1 text-gray-800 cursor-pointer text-sm leading-relaxed"
      >
        {(item.priority === 'critical' || item.priority === 'high') && (
          <span className={cn(
            "text-xs px-2 py-1 rounded mr-2 font-medium",
            priorityColors[item.priority]
          )}>
            {priorityLabels[item.priority]}
          </span>
        )}
        {item.title}
      </label>
    </div>
  );
};
