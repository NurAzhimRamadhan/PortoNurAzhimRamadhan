import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ArrowUpRight, Award } from 'lucide-react';
import { achievements, achievementStats } from '../data.js';
import SectionHeader from './SectionHeader.jsx';
import StatCounter from './StatCounter.jsx';

const CATEGORY_COLORS = {
  Competition: 'from-accent-2/40 to-accent-sec/30',
  Certification: 'from-accent-1/40 to-accent-3/30',
  Training: 'from-accent-3/40 to-accent-sec/30',
  Workshop: 'from-accent-sec/40 to-accent-1/30',
  Academic: 'from-amber-400/30 to-accent-3/30',
  'PKM Center Activity': 'from-emerald-400/30 to-accent-3/30',
};

function colorFor(cat) {
  // category may be "Competition · Award", "Workshop · Certification"
  const key = Object.keys(CATEGORY_COLORS).find((k) => cat?.includes(k));
  return CATEGORY_COLORS[key] || 'from-accent-2/30 to-transparent';
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-24 md:py-36"
      data-testid="achievements-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="06 · Achievements"
          title={
            <>
              Awards, recognitions &{' '}
              <span className="font-serif-display italic text-accent-3">
                certifications
              </span>{' '}
              earned.
            </>
          }
          subtitle="National competition wins, official certifications, and academic milestones that mark each growth stage."
          testid="achievements-header"
        />

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-20">
          {achievementStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 md:p-6"
              data-testid={`achievement-stat-${i}`}
            >
              <div className="font-mono text-3xl md:text-4xl font-medium text-white tracking-tightest">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono-accent text-white/45">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {achievements.map((a, idx) => {
            const Wrapper = a.folderLink ? motion.a : motion.div;
            const wrapperProps = a.folderLink
              ? {
                  href: a.folderLink,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};
            return (
              <Wrapper
                key={a.id}
                {...wrapperProps}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group block rounded-3xl overflow-hidden glass spot-card hover:border-white/20 transition-all duration-500"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
                }}
                data-testid={`achievement-card-${a.id}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colorFor(
                      a.category
                    )} mix-blend-overlay opacity-60`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 glass rounded-full px-3 py-1">
                    <span className="font-mono-accent text-white/70">· {a.year}</span>
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1">
                    <Award size={11} strokeWidth={1.6} className="text-accent-sec" />
                    <span className="font-mono-accent text-accent-3">
                      {a.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="font-display text-lg md:text-xl font-medium text-white leading-snug tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed line-clamp-3">
                    {a.description}
                  </p>

                  {a.folderLink && (
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-accent-3 transition-colors">
                        <FolderOpen size={16} strokeWidth={1.6} />
                        Open archive
                      </span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.6}
                        className="text-white/40 group-hover:text-accent-3 group-hover:rotate-12 transition-all"
                      />
                    </div>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
