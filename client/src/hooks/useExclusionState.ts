import { useState, useEffect } from 'react';

export interface ExclusionState {
  excludedSections: Set<string>;
  excludedItems: Set<string>;
}

export const useExclusionState = () => {
  const [exclusionState, setExclusionState] = useState<ExclusionState>({
    excludedSections: new Set(),
    excludedItems: new Set()
  });

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('salesforce-security-checklist-exclusions');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        setExclusionState({
          excludedSections: new Set(parsedState.excludedSections || []),
          excludedItems: new Set(parsedState.excludedItems || [])
        });
      } catch (error) {
        console.error('Failed to parse saved exclusion state:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const stateToSave = {
      excludedSections: Array.from(exclusionState.excludedSections),
      excludedItems: Array.from(exclusionState.excludedItems)
    };
    localStorage.setItem('salesforce-security-checklist-exclusions', JSON.stringify(stateToSave));
  }, [exclusionState]);

  const toggleSectionExclusion = (sectionName: string) => {
    setExclusionState(prev => {
      const newExcludedSections = new Set(prev.excludedSections);
      if (newExcludedSections.has(sectionName)) {
        newExcludedSections.delete(sectionName);
      } else {
        newExcludedSections.add(sectionName);
      }
      return {
        ...prev,
        excludedSections: newExcludedSections
      };
    });
  };

  const toggleItemExclusion = (itemId: string) => {
    setExclusionState(prev => {
      const newExcludedItems = new Set(prev.excludedItems);
      if (newExcludedItems.has(itemId)) {
        newExcludedItems.delete(itemId);
      } else {
        newExcludedItems.add(itemId);
      }
      return {
        ...prev,
        excludedItems: newExcludedItems
      };
    });
  };

  const clearAllExclusions = () => {
    setExclusionState({
      excludedSections: new Set(),
      excludedItems: new Set()
    });
  };

  const isSectionExcluded = (sectionName: string) => {
    return exclusionState.excludedSections.has(sectionName);
  };

  const isItemExcluded = (itemId: string) => {
    return exclusionState.excludedItems.has(itemId);
  };

  return {
    exclusionState,
    toggleSectionExclusion,
    toggleItemExclusion,
    clearAllExclusions,
    isSectionExcluded,
    isItemExcluded
  };
};