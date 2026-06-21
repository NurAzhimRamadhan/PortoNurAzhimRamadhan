import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Magnetic button — moves slightly toward cursor, with smooth spring.
 * Honors prefers-reduced-motion via Framer Motion's MotionConfig (consumer side).
 */
export default function MagneticButton({
  as = 'button',
  href,
  children,
  className = '',
  variant = 'primary',
  onClick,
  testid,
  target,
  rel,
  ariaLabel,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const max = 18;
    x.set(Math.max(-max, Math.min(max, dx * 0.25)));
    y.set(Math.max(-max, Math.min(max, dy * 0.25)));
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-[15px] font-medium transition-all duration-300 will-change-transform';
  const variants = {
    primary:
      'bg-white text-ink-950 hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_10px_30px_-10px_rgba(168,85,247,0.5)]',
    accent:
      'bg-accent-2 text-white hover:bg-accent-1 shadow-[0_0_0_1px_rgba(168,85,247,0.5),0_10px_30px_-10px_rgba(168,85,247,0.7)]',
    ghost:
      'bg-white/[0.04] text-white border border-white/15 hover:bg-white/[0.08] hover:border-white/25 backdrop-blur',
    outline:
      'bg-transparent text-white border border-white/20 hover:border-accent-3/60 hover:text-accent-3',
  };

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  const motionProps = {
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    whileTap: { scale: 0.97 },
    'data-testid': testid,
    'aria-label': ariaLabel,
  };

  if (as === 'a') {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={cls}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      className={cls}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
