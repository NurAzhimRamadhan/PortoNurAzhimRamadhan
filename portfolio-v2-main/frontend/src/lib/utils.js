import { useEffect, useRef, useState } from 'react';

/**
 * Scroll position tracker that uses rAF throttling and only re-renders
 * when crossing a threshold. Prevents per-pixel re-renders.
 *
 * @param {number} threshold - Y offset that flips the boolean state.
 * @returns {boolean} - Whether the user has scrolled past the threshold.
 */
export function useScrolledPast(threshold = 40) {
  const [past, setPast] = useState(false);
  const rafRef = useRef(0);
  const lastRef = useRef(false);

  useEffect(() => {
    const compute = () => {
      const isPast = window.scrollY > threshold;
      if (isPast !== lastRef.current) {
        lastRef.current = isPast;
        setPast(isPast);
      }
      rafRef.current = 0;
    };
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [threshold]);
  return past;
}

// Backwards-compatible scroll-y hook (still available, but use sparingly).
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let rafId = 0;
    const update = () => {
      setY(window.scrollY);
      rafId = 0;
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return y;
}

export function useMediaQuery(query) {
  const [match, setMatch] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatch(e.matches);
    setMatch(mq.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, [query]);
  return match;
}

export function smoothScrollTo(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
