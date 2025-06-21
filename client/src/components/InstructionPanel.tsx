import { ChecklistItemData } from '@/lib/checklist-data';
import { X, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface InstructionPanelProps {
  item: ChecklistItemData;
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionPanel = ({ item, isOpen, onClose }: InstructionPanelProps) => {
  if (!isOpen) return null;

  const priorityColors = {
    critical: 'bg-red-100 text-red-800 border-red-200',
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    medium: 'bg-blue-100 text-blue-800 border-blue-200',
    low: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const priorityLabels = {
    critical: 'CRITICAL',
    high: 'HIGH',
    medium: 'MEDIUM',
    low: 'LOW'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-sf-blue" />
            <div>
              <h2 className="text-xl font-semibold text-sf-dark-blue">Implementation Guide</h2>
              <p className="text-sm text-gray-600">{item.section} → {item.subsection}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-start space-x-3 mb-4">
                <span className={`text-xs px-3 py-1 rounded-full font-medium border ${priorityColors[item.priority]}`}>
                  {priorityLabels[item.priority]}
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{item.title}</h3>
            </div>

            <div>
              <h4 className="text-md font-semibold text-sf-dark-blue mb-3">Step-by-Step Instructions</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                {item.instructions ? (
                  <div className="space-y-2">
                    {item.instructions.split('\n').map((step, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-sm text-gray-700 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <BookOpen className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>Detailed instructions will be added soon.</p>
                    <p className="text-sm">Check the references below for guidance.</p>
                  </div>
                )}
              </div>
            </div>

            {item.references && item.references.length > 0 && (
              <div>
                <h4 className="text-md font-semibold text-sf-dark-blue mb-3">References & Documentation</h4>
                <div className="space-y-2">
                  {item.references.map((reference, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-sf-light-blue rounded-lg">
                      <ExternalLink className="w-4 h-4 text-sf-blue flex-shrink-0" />
                      <span className="text-sm text-gray-700">{reference}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-yellow-800 mb-2">⚠️ Important Note</h4>
              <p className="text-sm text-yellow-700">
                Always test these configurations in a sandbox environment before implementing in production. 
                Make sure to backup your current settings and document any changes for compliance purposes.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="border-t p-4 flex justify-end">
          <Button onClick={onClose} className="bg-sf-blue hover:bg-sf-dark-blue">
            Close Guide
          </Button>
        </div>
      </div>
    </div>
  );
};