import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data.js';

export default function TechStack() {
  // duplicate for seamless marquee
  const items = [...techStack, ...techStack];

  return (
    <section
      id="tech-stack"
      className="relative py-20 md:py-28 overflow-hidden border-y border-white/5"
      aria-label="Technology stack marquee"
      data-testid="tech-stack-section"
    >
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="font-mono-accent text-white/45">
            · Tech I work with
          </div>
          <div className="font-mono-accent text-white/30">
            22+ tools · {new Date().getFullYear()}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />

        <div
          className="flex gap-3 animate-marquee will-change-transform hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="inline-flex items-center rounded-full bg-white/[0.03] border border-white/10 text-white/75 px-4 py-2 text-sm hover:bg-accent-2/15 hover:border-accent-3/40 hover:text-white transition-all duration-300"
              data-testid={i < techStack.length ? `tech-chip-${t.toLowerCase().replace(/\s+/g, '-')}` : undefined}
            >
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent-3" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Static grid below marquee on larger screens */}
      <div className="container mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
        >
          {techStack.map((t) => (
            <div
              key={`grid-${t}`}
              className="rounded-2xl glass p-4 flex items-center justify-center text-center text-sm text-white/75 hover:bg-accent-2/10 hover:border-accent-3/40 hover:text-white transition-all duration-300"
            >
              {t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
