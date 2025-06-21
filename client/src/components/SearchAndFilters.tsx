import { Search, RotateCcw, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filter: 'all' | 'complete' | 'incomplete';
  onFilterChange: (filter: 'all' | 'complete' | 'incomplete') => void;
  onClearProgress: () => void;
  onClearExclusions: () => void;
  onExportPDF: () => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
}

export const SearchAndFilters = ({
  searchQuery,
  onSearchChange,
  filter,
  onFilterChange,
  onClearProgress,
  onClearExclusions,
  onExportPDF,
  onExpandAll,
  onCollapseAll
}: SearchAndFiltersProps) => {
  const handleClearProgress = () => {
    if (confirm('Are you sure you want to clear all progress? This action cannot be undone.')) {
      onClearProgress();
    }
  };

  const handleClearExclusions = () => {
    if (confirm('Are you sure you want to include all currently excluded items and sections?')) {
      onClearExclusions();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search checklist items..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Filter Buttons and Actions */}
      <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('all')}
            className="text-xs sm:text-sm"
          >
            All Items
          </Button>
          <Button
            variant={filter === 'incomplete' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('incomplete')}
            className="text-xs sm:text-sm"
          >
            Incomplete
          </Button>
          <Button
            variant={filter === 'complete' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilterChange('complete')}
            className="text-xs sm:text-sm"
          >
            Complete
          </Button>
        </div>

        {/* Section Controls */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onExpandAll}
            className="flex items-center gap-1 text-xs sm:text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
          >
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Expand All</span>
            <span className="sm:hidden">Expand</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onCollapseAll}
            className="flex items-center gap-1 text-xs sm:text-sm"
          >
            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Collapse All</span>
            <span className="sm:hidden">Collapse</span>
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearProgress}
            className="flex items-center gap-1 text-xs sm:text-sm"
          >
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Clear Progress</span>
            <span className="sm:hidden">Clear</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearExclusions}
            className="flex items-center gap-1 text-xs sm:text-sm"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Show All</span>
            <span className="sm:hidden">Show</span>
          </Button>
        </div>
      </div>
    </div>
  );
};