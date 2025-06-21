import { useState, useEffect } from 'react';
import { useSessionSync } from './useSessionSync';

export interface ExclusionState {
  excludedSections: Set<string>;
  excludedItems: Set<string>;
}

export const useExclusionState = () => {
  const [exclusionState, setExclusionState] = useState<ExclusionState>({
    excludedSections: new Set(),
    excludedItems: new Set()
  });
  const { sessionId, isLoading, saveExclusionState, loadUserData } = useSessionSync();

  // Load state from database when session is ready
  useEffect(() => {
    if (!isLoading && sessionId) {
      loadUserData().then(data => {
        if (data?.exclusionState) {
          setExclusionState({
            excludedSections: new Set(data.exclusionState.excludedSections || []),
            excludedItems: new Set(data.exclusionState.excludedItems || [])
          });
        }
      });
    }
  }, [sessionId, isLoading, loadUserData]);

  // Save state to database whenever it changes (debounced)
  useEffect(() => {
    if (!sessionId || isLoading) return;
    
    const timeoutId = setTimeout(() => {
      const stateToSave = {
        excludedSections: Array.from(exclusionState.excludedSections),
        excludedItems: Array.from(exclusionState.excludedItems)
      };
      saveExclusionState(stateToSave);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [exclusionState, sessionId, isLoading, saveExclusionState]);

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