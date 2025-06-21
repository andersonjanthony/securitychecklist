import { useState, useEffect } from 'react';
import { checklistData } from '@/lib/checklist-data';

export interface ChecklistState {
  [itemId: string]: boolean;
}

export const useChecklistState = () => {
  const [checklistState, setChecklistState] = useState<ChecklistState>({});

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('salesforce-security-checklist');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        setChecklistState(parsedState);
      } catch (error) {
        console.error('Failed to parse saved checklist state:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('salesforce-security-checklist', JSON.stringify(checklistState));
  }, [checklistState]);

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
