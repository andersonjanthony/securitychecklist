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

  const getProgress = () => {
    const totalItems = checklistData.length;
    const completedItems = Object.values(checklistState).filter(Boolean).length;
    const percentage = Math.round((completedItems / totalItems) * 100);
    
    return {
      total: totalItems,
      completed: completedItems,
      percentage
    };
  };

  const getSectionProgress = (sectionName: string) => {
    const sectionItems = checklistData.filter(item => item.section === sectionName);
    const completedItems = sectionItems.filter(item => checklistState[item.id]).length;
    
    return {
      total: sectionItems.length,
      completed: completedItems
    };
  };

  return {
    checklistState,
    toggleItem,
    clearAllProgress,
    getProgress,
    getSectionProgress
  };
};
