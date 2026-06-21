import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Mic, ExternalLink } from 'lucide-react';
import { experiences } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative py-24 md:py-36"
      data-testid="experiences-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="05 · Experiences"
          title={
            <>
              Leadership, moderation &{' '}
              <span className="font-serif-display italic text-accent-3">
                organizational
              </span>{' '}
              experience.
            </>
          }
          subtitle="Selected roles across campus events, study programs, and community work, covering moderation, leadership, communication, and team operations."
          testid="experiences-header"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {experiences.map((e, idx) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-3xl glass overflow-hidden spot-card hover:border-white/20 transition-all"
              onMouseMove={(ev) => {
                const r = ev.currentTarget.getBoundingClientRect();
                ev.currentTarget.style.setProperty(
                  '--mx',
                  `${ev.clientX - r.left}px`
                );
                ev.currentTarget.style.setProperty(
                  '--my',
                  `${ev.clientY - r.top}px`
                );
              }}
              data-testid={`experience-${e.id}`}
            >
              {/* Optional image header */}
              {e.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.organization}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                  <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 font-mono-accent text-white/85">
                    · {e.period}
                  </div>
                  {(e.role.toLowerCase().includes('moderator') ||
                    e.role.toLowerCase().includes('moderation')) && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1">
                      <Mic size={11} strokeWidth={1.6} className="text-accent-sec" />
                      <span className="font-mono-accent text-accent-sec">
                        Moderator
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-1 to-accent-sec text-white shadow-[0_8px_24px_-8px_rgba(168,85,247,0.6)]">
                      <Briefcase size={18} strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-medium text-white leading-tight">
                        {e.role}
                      </h3>
                      <div className="text-sm text-white/55 mt-0.5">
                        {e.organization}
                      </div>
                    </div>
                  </div>
                  {!e.image && (
                    <span className="font-mono-accent text-accent-3 whitespace-nowrap">
                      {e.period}
                    </span>
                  )}
                </div>

                <p className="text-sm md:text-[15px] text-white/65 leading-relaxed text-justify hyphens-auto">
                  {e.description}
                </p>

                <div className="mt-5">
                  <div className="font-mono-accent text-white/45 mb-2">
                    · Key Contributions
                  </div>
                  <ul className="space-y-1.5">
                    {e.contributions.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-white/75"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-3 flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/70 px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-start gap-2.5 text-sm">
                  <Sparkles
                    size={16}
                    strokeWidth={1.6}
                    className="text-accent-3 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-white/70 leading-relaxed">
                    <span className="font-mono-accent text-white/40 mr-1">
                      · Impact ·
                    </span>
                    {e.impact}
                  </p>
                </div>

                {/* Documentation / certificate links */}
                {e.documentation && e.documentation.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.documentation.map((doc) => (
                      <a
                        key={doc.label}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/doc inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/12 text-white/80 hover:text-accent-3 hover:border-accent-3/40 px-3.5 py-1.5 text-xs font-medium transition-all"
                        data-testid={`experience-${e.id}-doc-${doc.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                      >
                        <ExternalLink
                          size={12}
                          strokeWidth={1.7}
                          className="group-hover/doc:-rotate-12 transition-transform"
                        />
                        <span>{doc.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
