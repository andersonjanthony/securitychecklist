import { useState, useEffect } from 'react';
import { checklistData } from '@/lib/checklist-data';
import { useSessionSync } from './useSessionSync';

export interface ChecklistState {
  [itemId: string]: boolean;
}

export const useChecklistState = () => {
  const [checklistState, setChecklistState] = useState<ChecklistState>({});
  const { sessionId, isLoading, saveChecklistState, loadUserData } = useSessionSync();

  // Load state from database when session is ready
  useEffect(() => {
    if (!isLoading && sessionId) {
      loadUserData().then(data => {
        if (data?.checklistState) {
          setChecklistState(data.checklistState);
        }
      });
    }
  }, [sessionId, isLoading, loadUserData]);

  // Save state to database whenever it changes (debounced)
  useEffect(() => {
    if (!sessionId || isLoading) return;
    
    const timeoutId = setTimeout(() => {
      saveChecklistState(checklistState);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [checklistState, sessionId, isLoading, saveChecklistState]);

  const toggleItem = (itemId: string) => {
    setChecklistState(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const clearAllProgress = () => {
    setChecklistState({});
  };

  const getProgress = (exclusionState?: { excludedSections: Set<string>; excludedItems: Set<string> }) => {
    const allItems = checklistData;
    
    // Filter out excluded items and items in excluded sections
    const activeItems = exclusionState ? 
      allItems.filter(item => 
        !exclusionState.excludedItems.has(item.id) && 
        !exclusionState.excludedSections.has(item.section)
      ) : allItems;
    
    const total = activeItems.length;
    const completed = activeItems.filter(item => checklistState[item.id]).length;
    return {
      total,
      completed,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  const getSectionProgress = (sectionName: string, exclusionState?: { excludedSections: Set<string>; excludedItems: Set<string> }) => {
    const sectionItems = checklistData.filter(item => item.section === sectionName);
    
    // Filter out excluded items if exclusion state is provided
    const activeItems = exclusionState ? 
      sectionItems.filter(item => !exclusionState.excludedItems.has(item.id)) : 
      sectionItems;
    
    const total = activeItems.length;
    const completed = activeItems.filter(item => checklistState[item.id]).length;
    return { total, completed };
  };

  return {
    checklistState,
    toggleItem,
    clearAllProgress,
    getProgress,
    getSectionProgress
  };
};
