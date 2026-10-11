import { useEffect, useState } from 'react';

/**
 * Tracks `prefers-reduced-motion` so the auto-scrolling rails can freeze for
 * visitors who asked for less motion (and can be toggled back on by hand).
 */
export function useReducedMotionFlag() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
