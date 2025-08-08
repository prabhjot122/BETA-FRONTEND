import { useState, useEffect } from 'react';

/**
 * A custom React hook that tracks whether a media query is matched.
 * @param {string} query - The CSS media query string to watch.
 * @returns {boolean} - True if the query matches, otherwise false.
 */
// FIX 3: Add the 'string' type to the query parameter
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}