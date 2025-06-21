import { useState, useEffect, useCallback } from 'react';
import { apiRequest } from '@/lib/queryClient';

export const useSessionSync = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize session
  useEffect(() => {
    const initSession = async () => {
      try {
        // Check if we have a session ID in localStorage
        let storedSessionId = localStorage.getItem('salesforce-security-session-id');
        
        const response = await apiRequest<{ sessionId: string; session: any }>({
          url: '/api/session',
          method: 'GET',
          headers: storedSessionId ? { 'X-Session-ID': storedSessionId } : {}
        });
        
        const newSessionId = response.sessionId;
        setSessionId(newSessionId);
        localStorage.setItem('salesforce-security-session-id', newSessionId);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to initialize session:', error);
        setIsLoading(false);
      }
    };

    initSession();
  }, []);

  const saveChecklistState = useCallback(async (checklistState: Record<string, boolean>) => {
    if (!sessionId) return;
    
    try {
      await apiRequest({
        url: '/api/checklist-state',
        method: 'POST',
        headers: { 'X-Session-ID': sessionId },
        body: checklistState
      });
    } catch (error) {
      console.error('Failed to save checklist state:', error);
    }
  }, [sessionId]);

  const saveExclusionState = useCallback(async (exclusionState: { excludedSections: string[]; excludedItems: string[] }) => {
    if (!sessionId) return;
    
    try {
      await apiRequest({
        url: '/api/exclusion-state',
        method: 'POST',
        headers: { 'X-Session-ID': sessionId },
        body: exclusionState
      });
    } catch (error) {
      console.error('Failed to save exclusion state:', error);
    }
  }, [sessionId]);

  const loadUserData = useCallback(async () => {
    if (!sessionId) return null;
    
    try {
      const response = await apiRequest<{
        checklistState: Record<string, boolean>;
        exclusionState: { excludedSections: string[]; excludedItems: string[] };
      }>({
        url: '/api/user-data',
        method: 'GET',
        headers: { 'X-Session-ID': sessionId }
      });
      
      return response;
    } catch (error) {
      console.error('Failed to load user data:', error);
      return null;
    }
  }, [sessionId]);

  return {
    sessionId,
    isLoading,
    saveChecklistState,
    saveExclusionState,
    loadUserData
  };
};