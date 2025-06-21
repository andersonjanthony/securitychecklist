import { Download, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChecklistHeaderProps {
  progress: {
    total: number;
    completed: number;
    percentage: number;
  };
  onExportPDF: () => void;
  onClearProgress: () => void;
}

export const ChecklistHeader = ({ progress, onExportPDF, onClearProgress }: ChecklistHeaderProps) => {
  const handleClearProgress = () => {
    if (confirm('Are you sure you want to clear all progress? This action cannot be undone.')) {
      onClearProgress();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl sm:text-2xl font-bold text-sf-dark-blue">
              Salesforce Security Checklist
            </h1>
            <div className="hidden sm:flex items-center space-x-2">
              <div className="bg-sf-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                {progress.completed}/{progress.total}
              </div>
              <div className="text-sm text-gray-600">
                {progress.percentage}% Complete
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={onExportPDF}
              className="hidden sm:flex items-center space-x-2 bg-sf-blue hover:bg-sf-dark-blue"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </Button>
            <Button
              onClick={handleClearProgress}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Clear All</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="bg-gray-200 h-1">
        <div 
          className="bg-sf-blue h-1 transition-all duration-300" 
          style={{ width: `${progress.percentage}%` }}
        />
      </div>
    </header>
  );
};
