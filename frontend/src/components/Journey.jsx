import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Trophy,
  Building2,
  Lightbulb,
  BookOpen,
  Award,
  Compass,
  Sparkles,
  Zap,
} from 'lucide-react';
import { journey } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

const ICONS = {
  Competition: Trophy,
  Education: GraduationCap,
  Organization: Building2,
  Bootcamp: Lightbulb,
  Project: Zap,
  Award: Award,
  Certification: Award,
  Workshop: BookOpen,
  Focus: Compass,
  Goal: Sparkles,
};

function ItemIcon({ kind }) {
  const Cmp = ICONS[kind] || Sparkles;
  return <Cmp size={14} strokeWidth={1.6} />;
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="journey-section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[28rem] h-[28rem] rounded-full bg-accent-2/[0.07] blur-[100px]" />
      </div>

      <div className="container">
        <SectionHeader
          eyebrow="03 · Journey"
          title={
            <>
              My{' '}
              <span className="font-serif-display italic text-accent-3">
                Journey
              </span>{' '}
              so far.
            </>
          }
          subtitle="From early creative experiments to national level competitions, certifications, and building digital products. Here is how each year has shaped me."
          testid="journey-header"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <ul className="space-y-14 md:space-y-20">
            {journey.map((y, idx) => {
              const leftSide = idx % 2 === 0;
              const slug = `${y.year}-${idx}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');
              return (
                <li
                  key={slug}
                  className="relative"
                  data-testid={`journey-year-${slug}`}
                >
                  {/* Dot */}
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-ink-950 border-2 border-accent-3 shadow-[0_0_18px_-2px_rgba(168,85,247,0.7)]" />

                  <div
                    className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                      leftSide ? '' : 'md:[&>*:first-child]:order-2'
                    }`}
                  >
                    {/* Year + title */}
                    <motion.div
                      initial={{ opacity: 0, x: leftSide ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`mb-6 md:mb-0 ${
                        leftSide ? 'md:text-right md:pr-10' : 'md:pl-10'
                      }`}
                    >
                      <div className="font-mono-accent text-accent-3 mb-2">
                        · {y.year}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">
                        {y.title}
                      </h3>
                      {y.subtitle && (
                        <p className="mt-2 text-sm md:text-[15px] text-white/55 leading-snug">
                          {y.subtitle}
                        </p>
                      )}
                    </motion.div>

                    {/* Items */}
                    <motion.div
                      initial={{ opacity: 0, x: leftSide ? 24 : -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`${leftSide ? 'md:pl-10' : 'md:pr-10'} space-y-3`}
                    >
                      {y.image && (
                        <div className="rounded-2xl overflow-hidden border border-white/10 mb-3 relative aspect-[16/9] bg-ink-900">
                          <img
                            src={y.image}
                            alt={y.title}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                        </div>
                      )}
                      {y.items.map((it, i) => (
                        <div
                          key={i}
                          className="glass rounded-2xl p-4 md:p-5 spot-card hover:border-white/20 transition-colors"
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
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex w-7 h-7 items-center justify-center rounded-full bg-accent-2/15 text-accent-3 border border-accent-3/30">
                              <ItemIcon kind={it.kind} />
                            </span>
                            <div>
                              <div className="font-mono-accent text-white/45 mb-1">
                                · {it.kind}
                              </div>
                              <div className="text-white font-medium leading-snug">
                                {it.label}
                              </div>
                              {it.note && (
                                <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                                  {it.note}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
