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

        <ScrollArea className="flex-1 p-6 max-h-[60vh]">
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
              <h4 className="text-md font-semibold text-sf-dark-blue mb-3">Step-by-Step Implementation Guide</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                {item.instructions ? (
                  <div className="prose prose-sm max-w-none">
                    {item.instructions.split('\n').map((line, index) => {
                      if (line.trim() === '') return <br key={index} />;
                      
                      // Handle numbered steps
                      if (/^\d+\./.test(line.trim())) {
                        return (
                          <div key={index} className="mb-4 p-3 bg-white border-l-4 border-blue-500 rounded-r shadow-sm">
                            <p className="font-semibold text-blue-900 mb-2 flex items-center">
                              <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold text-center leading-6 mr-3">
                                {line.trim().match(/^(\d+)\./)?.[1]}
                              </span>
                              {line.trim().replace(/^\d+\.\s*/, '')}
                            </p>
                          </div>
                        );
                      }
                      
                      // Handle bullet points
                      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                        return (
                          <div key={index} className="mb-2 ml-4">
                            <p className="text-blue-800 flex items-start">
                              <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {line.trim().substring(1).trim()}
                            </p>
                          </div>
                        );
                      }
                      
                      // Handle sub-bullet points (more indented)
                      if (line.startsWith('  ') && (line.trim().startsWith('•') || line.trim().startsWith('-'))) {
                        return (
                          <div key={index} className="mb-1 ml-8">
                            <p className="text-blue-700 text-sm flex items-start">
                              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {line.trim().substring(1).trim()}
                            </p>
                          </div>
                        );
                      }
                      
                      // Handle section headers (lines with colons)
                      if (line.includes(':') && !line.trim().startsWith('•') && !line.trim().startsWith('-') && !line.trim().startsWith('http')) {
                        return (
                          <div key={index} className="mb-3 mt-4">
                            <p className="font-medium text-blue-900 border-b border-blue-300 pb-1">{line.trim()}</p>
                          </div>
                        );
                      }
                      
                      // Regular text
                      return (
                        <p key={index} className="text-blue-800 mb-2 leading-relaxed">{line}</p>
                      );
                    })}
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
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                      <ExternalLink className="h-4 w-4 text-gray-500 flex-shrink-0" />
                      <a 
                        href={reference} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-sm break-all"
                      >
                        {reference}
                      </a>
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