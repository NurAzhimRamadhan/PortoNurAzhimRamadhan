import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { profileData, heroStats, cvLink } from '../data.js';
import MagneticButton from './MagneticButton.jsx';
import StatCounter from './StatCounter.jsx';
import { smoothScrollTo, useMediaQuery } from '../lib/utils.js';

/**
 * Cinematic Hero with cursor-following spotlight reveal effect.
 * Base layer = grayscale/blurred portrait. Reveal layer = full-color portrait
 * unmasked under a soft radial cursor spotlight. Mobile fallback = static
 * portrait composition with floating accents (no spotlight tracking).
 */
export default function Hero() {
  const portraitRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });
  const isCoarse = useMediaQuery('(pointer: coarse)');
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  // Spotlight position drives a CSS variable on the portrait wrapper.
  useEffect(() => {
    if (isCoarse || reduceMotion) return;
    const el = portraitRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      targetRef.current.x = (e.clientX - r.left) / r.width;
      targetRef.current.y = (e.clientY - r.top) / r.height;
    };

    const handleLeave = () => {
      targetRef.current.x = 0.5;
      targetRef.current.y = 0.5;
    };

    const tick = () => {
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * 0.14;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * 0.14;
      if (el) {
        el.style.setProperty('--mx', `${currentRef.current.x * 100}%`);
        el.style.setProperty('--my', `${currentRef.current.y * 100}%`);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [isCoarse, reduceMotion]);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-end md:items-center overflow-hidden pt-28 md:pt-0 pb-12 md:pb-0"
      data-testid="hero-section"
    >
      {/* Background layers — handled by global BackgroundFX. Hero keeps its own portrait spotlight only. */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent-2/[0.12] blur-[100px]" />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 mb-7"
              data-testid="hero-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-sec opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-sec" />
              </span>
              <span className="font-mono-accent text-white/70">
                Available · Open to Internships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-white text-[2.4rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.6rem] font-semibold tracking-tightest"
              data-testid="hero-headline"
            >
              Turning Data,
              <br />
              <span className="font-serif-display text-accent-3 italic">
                Ideas
              </span>{' '}
              & Innovation
              <br />
              Into{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-accent-3 to-accent-sec [.light_&]:from-slate-900 [.light_&]:via-accent-3 [.light_&]:to-accent-2 bg-clip-text text-transparent">
                  Real Solutions.
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-base md:text-lg text-white/65 leading-relaxed"
              data-testid="hero-sub"
            >
              Information Systems Undergraduate · Data Analytics Enthusiast · AI
              Explorer · Digital Innovation Builder. Exploring technology, data,
              and AI through projects, competitions, organizations, and
              continuous learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3 md:gap-4"
            >
              <MagneticButton
                onClick={() => smoothScrollTo('projects')}
                variant="primary"
                testid="hero-view-projects"
                ariaLabel="View projects"
              >
                <Sparkles size={16} strokeWidth={1.6} />
                <span>View Projects</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={cvLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                testid="hero-download-cv"
                ariaLabel="Download CV"
              >
                <Download size={16} strokeWidth={1.6} />
                <span>Download CV</span>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl"
              data-testid="hero-stats"
            >
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className="relative rounded-2xl glass px-4 py-4 md:px-5 md:py-5"
                  data-testid={`hero-stat-${i}`}
                  data-stat-label={s.label}
                >
                  <div className="font-mono text-3xl md:text-4xl font-medium text-white tracking-tightest">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 font-mono-accent text-white/50 text-[10px] md:text-[11px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Portrait with spotlight reveal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              ref={portraitRef}
              style={{ '--mx': '50%', '--my': '50%' }}
              className="relative mx-auto w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden glass-strong shimmer-border group"
              data-testid="hero-portrait"
            >
              {/* Tech-themed reveal underlay */}
              <div className="absolute inset-0">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 20%, rgba(168,85,247,0.45), transparent 60%), radial-gradient(circle at 70% 80%, rgba(232,121,249,0.35), transparent 60%), #111111',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: '32px 32px',
                  }}
                />
              </div>

              {/* Base portrait (grayscale + blurred on desktop; full color on mobile) */}
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
                style={{
                  filter: isCoarse
                    ? 'saturate(1.05) contrast(1.04)'
                    : 'grayscale(100%) contrast(1.05) brightness(0.85)',
                }}
              />

              {/* Reveal portrait masked by cursor spotlight (desktop only) */}
              {!isCoarse && (
                <img
                  src={profileData.profileImage}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{
                    filter: 'saturate(1.1) contrast(1.05)',
                    WebkitMaskImage:
                      'radial-gradient(180px circle at var(--mx) var(--my), black 0%, rgba(0,0,0,0.6) 30%, transparent 70%)',
                    maskImage:
                      'radial-gradient(180px circle at var(--mx) var(--my), black 0%, rgba(0,0,0,0.6) 30%, transparent 70%)',
                  }}
                />
              )}

              {/* Cursor glow ring (overlay) */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background:
                    'radial-gradient(160px circle at var(--mx) var(--my), rgba(232,121,249,0.18), transparent 60%)',
                }}
              />

              {/* Inner border + corner labels */}
              <div className="absolute inset-2 rounded-[1.6rem] border border-white/10 pointer-events-none" />
              <div className="absolute top-3 left-3 font-mono-accent text-white/60 text-[10px]">
                · Portrait //
              </div>
              <div className="absolute top-3 right-3 font-mono-accent text-white/60 text-[10px]">
                {profileData.location}
              </div>
              <div className="absolute bottom-3 left-3 font-mono-accent text-white/60 text-[10px]">
                GPA · {profileData.gpa}
              </div>
              <div className="absolute bottom-3 right-3 font-mono-accent text-white/60 text-[10px]">
                ID · 2026
              </div>
            </motion.div>

            {/* Mobile hint */}
            {isCoarse && (
              <p className="mt-4 text-center font-mono-accent text-white/40 text-[10px]">
                · Tilt your device · Move to reveal
              </p>
            )}
          </div>
        </div>

        {/* Scroll cue — only on very tall viewports to avoid overlapping stats */}
        <motion.button
          onClick={() => smoothScrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          aria-label="Scroll to About"
          className="hidden 2xl:flex absolute bottom-8 right-8 items-center gap-2 text-white/35 hover:text-white/80 transition-colors group"
          data-testid="hero-scroll-cue"
        >
          <span className="font-mono-accent text-[10px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} strokeWidth={1.5} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
