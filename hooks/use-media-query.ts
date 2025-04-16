"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Create the media query
    const media = window.matchMedia(query);
    
    // Initial check
    setMatches(media.matches);
    
    // Create a handler to update state
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add the listener
    media.addEventListener("change", listener);
    
    // Cleanup on unmount
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);
  
  return matches;
} 