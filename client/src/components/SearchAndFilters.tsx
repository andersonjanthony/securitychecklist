import { Search, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filter: 'all' | 'complete' | 'incomplete';
  onFilterChange: (filter: 'all' | 'complete' | 'incomplete') => void;
  onClearProgress: () => void;
  onExportPDF: () => void;
}

export const SearchAndFilters = ({
  searchQuery,
  onSearchChange,
  filter,
  onFilterChange,
  onClearProgress,
  onExportPDF
}: SearchAndFiltersProps) => {
  const handleClearProgress = () => {
    if (confirm('Are you sure you want to clear all progress? This action cannot be undone.')) {
      onClearProgress();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 p-4 border border-gray-200">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search checklist items..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => onFilterChange('all')}
            className="whitespace-nowrap"
          >
            All Items
          </Button>
          <Button
            variant={filter === 'incomplete' ? 'default' : 'outline'}
            onClick={() => onFilterChange('incomplete')}
            className="whitespace-nowrap"
          >
            Incomplete
          </Button>
          <Button
            variant={filter === 'complete' ? 'default' : 'outline'}
            onClick={() => onFilterChange('complete')}
            className="whitespace-nowrap"
          >
            Complete
          </Button>
        </div>
      </div>
      <div className="mt-4 sm:hidden">
        <div className="flex space-x-2">
          <Button onClick={onExportPDF} className="flex-1">
            Export PDF
          </Button>
          <Button variant="outline" onClick={handleClearProgress}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};
