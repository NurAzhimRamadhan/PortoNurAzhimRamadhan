import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function StatCounter({
  value = 0,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className = '',
  testid,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setN(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} data-testid={testid}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
