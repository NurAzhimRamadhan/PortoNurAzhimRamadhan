import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function StatCounter({
  value = 0,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className = '',
  testid,
  isDecimal = false,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) =>
        setN(isDecimal ? Math.round(latest * 100) / 100 : Math.floor(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration, isDecimal]);

  const display = isDecimal ? n.toFixed(2) : n;

  return (
    <span ref={ref} className={className} data-testid={testid}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
