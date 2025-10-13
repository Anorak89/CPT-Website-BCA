"use client";

import { useEffect } from "react";

export default function GlobalDebugger() {
  useEffect(() => {
    console.log('🔍 [GLOBAL DEBUG] Global debugger initialized');
    console.log('🔍 [GLOBAL DEBUG] Environment:', process.env.NODE_ENV);
    console.log('🔍 [GLOBAL DEBUG] User agent:', navigator.userAgent);
    console.log('🔍 [GLOBAL DEBUG] Current domain:', window.location.hostname);
    console.log('🔍 [GLOBAL DEBUG] Protocol:', window.location.protocol);
    
    // Global error handler
    const handleError = (event: ErrorEvent) => {
      console.error('❌ [GLOBAL DEBUG] Global error caught:', event.error);
      console.error('❌ [GLOBAL DEBUG] Error message:', event.message);
      console.error('❌ [GLOBAL DEBUG] Error filename:', event.filename);
      console.error('❌ [GLOBAL DEBUG] Error line number:', event.lineno);
      console.error('❌ [GLOBAL DEBUG] Error column number:', event.colno);
    };

    // Global unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('❌ [GLOBAL DEBUG] Unhandled promise rejection:', event.reason);
      console.error('❌ [GLOBAL DEBUG] Promise:', event.promise);
    };

    // Network request monitoring
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const url = args[0];
      console.log('🔍 [GLOBAL DEBUG] Fetch request:', url);
      
      return originalFetch.apply(this, args)
        .then(response => {
          console.log('🔍 [GLOBAL DEBUG] Fetch response for', url, ':', {
            status: response.status,
            ok: response.ok,
            url: response.url,
            type: response.type
          });
          return response;
        })
        .catch(error => {
          console.error('❌ [GLOBAL DEBUG] Fetch error for', url, ':', error);
          throw error;
        });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Navigation monitoring
    const handleLocationChange = () => {
      console.log('🔍 [GLOBAL DEBUG] Location changed to:', window.location.href);
      console.log('🔍 [GLOBAL DEBUG] Pathname:', window.location.pathname);
      console.log('🔍 [GLOBAL DEBUG] Search:', window.location.search);
      console.log('🔍 [GLOBAL DEBUG] Hash:', window.location.hash);
    };

    // Monitor for navigation changes
    const pushState = history.pushState;
    const replaceState = history.replaceState;
    
    history.pushState = function(...args) {
      pushState.apply(history, args);
      setTimeout(handleLocationChange, 0);
    };
    
    history.replaceState = function(...args) {
      replaceState.apply(history, args);
      setTimeout(handleLocationChange, 0);
    };
    
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('popstate', handleLocationChange);
      window.fetch = originalFetch;
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);

  return null;
}