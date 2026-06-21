import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDot, Clock } from 'lucide-react';
import { learningRoadmap } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

const STATUS_STYLES = {
  Done: {
    icon: CheckCircle2,
    pillClass: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
  },
  'In Progress': {
    icon: CircleDot,
    pillClass: 'bg-accent-2/20 text-accent-sec border-accent-3/30',
  },
  Planned: {
    icon: Clock,
    pillClass: 'bg-white/[0.04] text-white/55 border-white/15',
  },
};

export default function LearningRoadmap() {
  return (
    <section
      id="roadmap"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="roadmap-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="09 · Learning Roadmap"
          title={
            <>
              How I&apos;m building toward a{' '}
              <span className="font-serif-display italic text-accent-3">
                data & AI
              </span>{' '}
              career.
            </>
          }
          subtitle="A phased roadmap from foundations to specialization, designed to compound learning across years."
          testid="roadmap-header"
        />

        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {learningRoadmap.map((step, idx) => {
              const s = STATUS_STYLES[step.status] || STATUS_STYLES.Planned;
              const Icon = s.icon;
              return (
                <motion.li
                  key={step.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative rounded-3xl glass p-6 spot-card hover:border-white/20 transition-colors"
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
                  data-testid={`roadmap-step-${idx}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-accent text-white/45">
                      · Phase 0{idx + 1}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-mono-accent ${s.pillClass}`}
                    >
                      <Icon size={11} strokeWidth={1.8} />
                      {step.status}
                    </span>
                  </div>
                  <h3 className="font-display text-base md:text-lg font-medium text-white leading-snug">
                    {step.title}
                  </h3>
                  <ul className="mt-4 space-y-1.5">
                    {step.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-white/65"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-3 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
