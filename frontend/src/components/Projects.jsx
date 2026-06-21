import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FolderOpen,
  PauseCircle,
  PlayCircle,
  Target,
  Wrench,
  Trophy,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { projects, featuredProjectIds } from '../data.js';
import SectionHeader from './SectionHeader.jsx';
import MagneticButton from './MagneticButton.jsx';

const featured = featuredProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

const others = projects.filter((p) => !featuredProjectIds.includes(p.id));

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-36"
      data-testid="projects-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="04 · Projects"
          title={
            <>
              Projects, systems, and{' '}
              <span className="font-serif-display italic text-accent-3">
                products
              </span>{' '}
              I have built.
            </>
          }
          subtitle="Real builds across AI policy intelligence, business intelligence, FinTech, cybersecurity, and applied data. Each is presented as a premium case study."
          testid="projects-header"
        />

        <FeaturedCarousel />

        {/* Case Studies section - heavier breathing room and premium intro */}
        <div className="mt-32 md:mt-48 lg:mt-56" data-testid="case-studies-section">
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="font-mono-accent text-accent-3 mb-4 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-accent-3/60" />
              04A · Case Studies
            </div>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tightest text-white leading-[1.1]">
              Featured projects and{' '}
              <span className="font-serif-display italic text-accent-3">
                product thinking
              </span>
              .
            </h3>
            <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed text-justify hyphens-auto">
              Behind the process of building real solutions through data, AI,
              systems, innovation, and digital transformation. Each card opens a
              dedicated case study page with research, problem framing, system
              design, and lessons learned.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {featured.map((p, idx) => (
              <CaseStudyCard key={p.id} project={p} index={idx} />
            ))}
          </div>
        </div>

        {/* Additional projects */}
        {others.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="font-mono-accent text-accent-3 mb-2">
                  · 04B · Additional Projects
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white">
                  More{' '}
                  <span className="font-serif-display italic text-accent-3">
                    builds
                  </span>{' '}
                  and capstones.
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {others.map((p, idx) => (
                <OtherCard key={p.id} project={p} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ---------------------- Featured Carousel ----------------------
function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
      dragFree: false,
    },
    [Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const ap = emblaApi?.plugins()?.autoplay;
    if (!ap) return;
    if (ap.isPlaying()) {
      ap.stop();
      setIsPlaying(false);
    } else {
      ap.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onAutoplay = () => {
      const ap = emblaApi.plugins()?.autoplay;
      if (ap) setIsPlaying(ap.isPlaying());
    };
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('autoplay:play', onAutoplay);
    emblaApi.on('autoplay:stop', onAutoplay);
    onSelect();
    onAutoplay();
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('autoplay:play', onAutoplay);
      emblaApi.off('autoplay:stop', onAutoplay);
    };
  }, [emblaApi]);

  useEffect(() => {
    const onKey = (e) => {
      if (!emblaApi) return;
      if (e.key === 'ArrowRight') scrollNext();
      else if (e.key === 'ArrowLeft') scrollPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [emblaApi, scrollNext, scrollPrev]);

  return (
    <>
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="font-mono-accent text-white/45">
          · {String(selectedIndex + 1).padStart(2, '0')} /{' '}
          {String(featured.length).padStart(2, '0')} · Featured Builds
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleAutoplay}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/70 hover:text-white hover:border-white/25 transition-all"
            aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
            data-testid="featured-autoplay-toggle"
          >
            {isPlaying ? (
              <PauseCircle size={14} strokeWidth={1.6} />
            ) : (
              <PlayCircle size={14} strokeWidth={1.6} />
            )}
            <span className="font-mono-accent">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full glass text-white/80 hover:text-white hover:border-white/25 transition-all"
            aria-label="Previous slide"
            data-testid="featured-prev"
          >
            <ArrowLeft size={16} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full glass text-white/80 hover:text-white hover:border-white/25 transition-all"
            aria-label="Next slide"
            data-testid="featured-next"
          >
            <ArrowRight size={16} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <div
        className="embla relative px-1 md:px-2"
        ref={emblaRef}
        data-testid="featured-carousel"
      >
        <div className="embla__container">
          {featured.map((p, i) => (
            <FeaturedSlide key={p.id} project={p} active={i === selectedIndex} />
          ))}
        </div>
      </div>

      {/* Progress + dots */}
      <div className="mt-8 flex items-center gap-3">
        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            animate={{
              width: `${((selectedIndex + 1) / Math.max(1, scrollSnaps.length)) * 100}%`,
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-accent-1 via-accent-3 to-accent-sec"
            data-testid="featured-progress"
          />
        </div>
        <div className="flex items-center gap-1.5">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? 'w-6 bg-white'
                  : 'w-2 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              data-testid={`featured-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function FeaturedSlide({ project, active }) {
  return (
    <div className="embla__slide is-featured px-2 md:px-3 self-stretch flex">
      <motion.article
        animate={{ scale: active ? 1 : 0.95, opacity: active ? 1 : 0.55 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full rounded-3xl overflow-hidden glass-strong"
        style={{
          boxShadow: active
            ? '0 30px 80px -40px rgba(168,85,247,0.35), 0 0 0 1px rgba(255,255,255,0.06)'
            : '0 10px 30px -20px rgba(0,0,0,0.3)',
        }}
        data-testid={`featured-slide-${project.id}`}
      >
        {/* 55% image / 45% content using grid */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr]">
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[460px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-2/20 via-transparent to-accent-sec/15 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-ink-950/20 md:to-ink-950/70" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 glass rounded-full px-3 py-1 font-mono-accent text-white/80">
              · {project.category}
            </div>
            {project.flagship && (
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 font-mono-accent text-accent-sec">
                <Sparkles size={11} strokeWidth={1.6} />
                Flagship
              </div>
            )}
          </div>

          <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="font-mono-accent text-accent-3 mb-3">
              · Featured Project
            </div>
            <h3 className="font-display text-2xl md:text-3xl lg:text-[2.25rem] font-medium tracking-tightest text-white leading-[1.1]">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-2 text-white/55 text-sm md:text-base">
                {project.subtitle}
              </p>
            )}
            <p className="mt-5 text-sm md:text-[15px] text-white/65 leading-relaxed line-clamp-4 text-justify hyphens-auto">
              {project.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <div className="font-mono-accent text-white/40 mb-1">· Role</div>
                <div className="text-white/85 text-[13px] leading-snug">
                  {project.role}
                </div>
              </div>
              <div>
                <div className="font-mono-accent text-white/40 mb-1">
                  · Period
                </div>
                <div className="text-white/85">{project.period}</div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies?.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white/[0.03] border border-white/10 text-white/75 px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.link ? (
                <MagneticButton
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  testid={`featured-cta-${project.id}`}
                  ariaLabel={`Open live project ${project.title}`}
                >
                  <Globe2 size={16} strokeWidth={1.6} />
                  <span>Visit Live</span>
                </MagneticButton>
              ) : (
                project.folderLink && (
                  <MagneticButton
                    as="a"
                    href={project.folderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    testid={`featured-cta-${project.id}`}
                    ariaLabel={`Open archive ${project.title}`}
                  >
                    <FolderOpen size={16} strokeWidth={1.6} />
                    <span>Open Archive</span>
                  </MagneticButton>
                )
              )}
              {project.slug && (
                <Link
                  to={`/case-study/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-accent-3 transition-colors"
                  data-testid={`featured-casestudy-${project.id}`}
                >
                  Read case study
                  <ExternalLink size={14} strokeWidth={1.6} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

// ---------------------- Case Study Card (compact, clean) ----------------------
function CaseStudyCard({ project, index }) {
  const Wrapper = project.slug ? Link : 'div';
  const wrapperProps = project.slug
    ? { to: `/case-study/${project.slug}` }
    : {};

  return (
    <motion.article
      id={`case-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl glass-strong overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-accent-3/30"
      style={{
        boxShadow:
          '0 12px 40px -24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)',
      }}
      data-testid={`case-study-${project.id}`}
    >
      <Wrapper
        {...wrapperProps}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-3/60 rounded-3xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 glass rounded-full px-3 py-1 font-mono-accent text-white/85">
            · {project.category}
          </div>
          {project.flagship && (
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 font-mono-accent text-accent-sec">
              <Sparkles size={11} strokeWidth={1.6} />
              Flagship
            </div>
          )}
        </div>

        <div className="p-7 md:p-9">
          <div className="font-mono-accent text-white/45 mb-2">
            · {project.role}
          </div>
          <h3 className="font-display text-2xl md:text-[1.75rem] font-medium tracking-tight text-white leading-tight">
            {project.title}
          </h3>
          {project.subtitle && (
            <div className="mt-1.5 text-white/55 text-sm md:text-base">
              {project.subtitle}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <CaseBlock
              icon={Target}
              label="Problem"
              value={project.problem}
              testid={`case-study-${project.id}-problem`}
            />
            <CaseBlock
              icon={Wrench}
              label="Approach"
              value={project.approach}
              testid={`case-study-${project.id}-solution`}
            />
            <CaseBlock
              icon={Trophy}
              label="Outcome"
              value={project.outcome}
              testid={`case-study-${project.id}-outcome`}
            />
          </div>

          <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
            <Sparkles size={14} strokeWidth={1.6} className="text-accent-3" />
            <span className="font-mono-accent text-white/40">· Stack ·</span>
            {project.technologies?.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/[0.03] border border-white/10 text-white/70 px-2.5 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          {project.slug && (
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-accent-3 group-hover:text-accent-sec transition-colors">
                Read full case study
              </span>
              <ArrowUpRight
                size={20}
                strokeWidth={1.6}
                className="text-white/40 group-hover:text-accent-3 group-hover:-rotate-12 transition-all"
              />
            </div>
          )}
        </div>
      </Wrapper>
    </motion.article>
  );
}

function CaseBlock({ icon: Icon, label, value, testid }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3" data-testid={testid}>
      <span className="mt-0.5 inline-flex w-8 h-8 items-center justify-center rounded-xl bg-accent-2/15 text-accent-3 border border-accent-3/30 flex-shrink-0">
        <Icon size={14} strokeWidth={1.6} />
      </span>
      <div className="min-w-0">
        <div className="font-mono-accent text-white/40 mb-1">· {label}</div>
        <p className="text-sm text-white/75 leading-relaxed text-justify hyphens-auto line-clamp-3">
          {value}
        </p>
      </div>
    </div>
  );
}

// ---------------------- Other Project Card ----------------------
function OtherCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-3xl glass overflow-hidden transition-[border-color] duration-500 hover:border-accent-3/30"
      data-testid={`other-project-${project.id}`}
    >
      <a
        href={project.link || project.folderLink || '#projects'}
        target={project.link || project.folderLink ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 font-mono-accent text-white/80">
            · {project.category}
          </div>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="font-display text-lg font-medium text-white leading-snug tracking-tight">
            {project.title}
          </h3>
          {project.subtitle && (
            <div className="mt-0.5 text-white/55 text-sm">{project.subtitle}</div>
          )}
          <p className="mt-2 text-sm text-white/55 leading-relaxed line-clamp-2 text-justify hyphens-auto">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies?.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[11px] rounded-full bg-white/[0.03] border border-white/10 text-white/65 px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
