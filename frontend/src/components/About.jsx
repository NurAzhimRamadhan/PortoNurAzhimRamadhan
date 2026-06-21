import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Sparkles } from 'lucide-react';
import { profileData, focusAreas } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="about-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="01 · About"
          title={
            <>
              An Information Systems student building at the intersection of{' '}
              <span className="font-serif-display italic text-accent-3">
                data, ideas
              </span>{' '}
              & innovation.
            </>
          }
          testid="about-header"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left — Profile image card */}
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden glass-strong shimmer-border">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="font-mono-accent text-accent-3 mb-1">
                  · Currently
                </div>
                <p className="text-white font-display text-xl leading-snug">
                  Studying Information Systems · GPA {profileData.gpa}
                </p>
              </div>
              <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 font-mono-accent text-white/70 text-[10px]">
                {profileData.location}
              </div>
            </div>

            {/* Floating stat */}
            <div className="hidden md:flex items-center gap-4 glass rounded-2xl p-5 mt-6 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-1 to-accent-sec flex items-center justify-center text-white">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-mono-accent text-white/40">
                  · Cumulative GPA
                </div>
                <div className="font-display text-3xl font-semibold text-white">
                  {profileData.gpa}
                  <span className="text-white/30 text-lg font-normal">
                    {' '}/ 4.00
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Bio + Focus areas */}
          <div className="lg:col-span-7 space-y-7">
            {profileData.longBio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base md:text-lg text-white/70 leading-relaxed text-justify hyphens-auto"
                data-testid={`about-paragraph-${i}`}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-4"
            >
              <div className="font-mono-accent text-white/40 mb-4 flex items-center gap-2">
                <BookOpen size={14} strokeWidth={1.5} />
                Areas of Focus
              </div>
              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area, idx) => (
                  <motion.span
                    key={area}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/80 hover:bg-accent-2/15 hover:border-accent-3/40 hover:text-white transition-all duration-300"
                    data-testid={`focus-${area.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-3" />
                    {area}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {[
                {
                  k: 'Curiosity',
                  v: 'Always exploring data, AI, and digital innovation.',
                },
                {
                  k: 'Discipline',
                  v: 'Strong academic foundation with a 3.98 GPA.',
                },
                {
                  k: 'Leadership',
                  v: 'Organizational, PR, sponsorship, logistics & study club roles.',
                },
              ].map((s) => (
                <div
                  key={s.k}
                  className="glass rounded-2xl p-5 spot-card hover:border-white/20 transition-colors"
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
                  <div className="inline-flex items-center gap-2 font-mono-accent text-accent-3 mb-2">
                    <Sparkles size={12} strokeWidth={1.5} />
                    {s.k}
                  </div>
                  <p className="text-sm text-white/65 leading-relaxed">{s.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
