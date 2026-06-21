import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable section header with mono overline, large display title,
 * optional subtitle, and gradient divider.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  testid,
}) {
  const isCenter = align === 'center';
  return (
    <div
      className={`mb-14 md:mb-20 ${isCenter ? 'text-center mx-auto max-w-3xl' : ''}`}
      data-testid={testid}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-mono-accent text-accent-3 mb-4"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-accent-3/60" />
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
