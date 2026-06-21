import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Code2,
  Palette,
  BrainCircuit,
  Users2,
} from 'lucide-react';
import { skillsByCategory } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

const ICONS = {
  data: BarChart3,
  web: Code2,
  uiux: Palette,
  ai: BrainCircuit,
  pro: Users2,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="skills-section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] rounded-full bg-accent-sec/[0.06] blur-[100px]" />
      </div>

      <div className="container">
        <SectionHeader
          eyebrow="07 · Skills"
          title={
            <>
              Tools, techniques &{' '}
              <span className="font-serif-display italic text-accent-3">
                methods
              </span>{' '}
              I work with.
            </>
          }
          subtitle="A categorized snapshot of what I use to analyze data, build products, and collaborate on teams."
          testid="skills-header"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillsByCategory.map((cat, idx) => {
            const Icon = ICONS[cat.id] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-3xl glass p-6 md:p-7 spot-card hover:border-white/20 transition-all"
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
                data-testid={`skill-category-${cat.id}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-1 to-accent-sec text-white">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="font-mono-accent text-white/45 mb-0.5">
                      · 0{idx + 1}
                    </div>
                    <h3 className="font-display text-lg font-medium text-white leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <li key={s}>
                      <span
                        className="inline-flex items-center rounded-full bg-white/[0.03] border border-white/10 text-white/80 px-3 py-1.5 text-sm hover:bg-accent-2/15 hover:border-accent-3/40 hover:text-white transition-all duration-300"
                        data-testid={`skill-${cat.id}-${s.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
