import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Megaphone, Cpu } from 'lucide-react';
import { profileData } from '../data.js';

const ICONS = {
  academic: GraduationCap,
  leadership: Megaphone,
  tech: Cpu,
};

export default function Pillars() {
  return (
    <section
      className="relative py-16 md:py-24"
      aria-label="Portfolio pillars"
      data-testid="pillars-section"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-mono-accent text-accent-3 mb-4 flex items-center gap-2"
        >
          <span className="h-px w-8 bg-accent-3/60" />
          Three pillars
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tightest leading-[1.05] max-w-3xl"
        >
          One portfolio,{' '}
          <span className="font-serif-display italic text-accent-3">three</span>{' '}
          parallel growth tracks.
        </motion.h2>
        <p className="mt-4 max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
          Everything here clusters into three deliberate pillars. Read any one of them as a
          standalone story, or as part of the bigger picture.
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {profileData.pillars.map((p, idx) => {
            const Icon = ICONS[p.key] || Cpu;
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative rounded-3xl glass p-6 md:p-7 spot-card hover:border-white/20 transition-all"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    '--mx',
                    `${e.clientX - r.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    '--my',
                    `${e.clientY - r.top}px`
                  );
                }}
                data-testid={`pillar-${p.key}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-1 to-accent-sec text-white shadow-[0_8px_24px_-8px_rgba(168,85,247,0.6)]">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div className="font-mono-accent text-white/45">
                    · 0{idx + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-white leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-white/65 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
