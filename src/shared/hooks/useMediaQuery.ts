import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const handleMatchChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(media.matches);
    media.addEventListener('change', handleMatchChange);

    return () => media.removeEventListener('change', handleMatchChange);
  }, [query]);

  return matches;
};

// https://usehooks-ts.com/react-hook/use-media-query
