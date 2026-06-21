import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the element matching `location.hash` after the route renders.
 * Falls back to top-of-page when there is no hash.
 * Placed once inside the Router but outside Routes so it runs on every navigation.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait one frame so the target route has mounted its sections.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
      return () => cancelAnimationFrame(raf);
    }
    // No hash: jump to top instantly (but only on path change).
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
