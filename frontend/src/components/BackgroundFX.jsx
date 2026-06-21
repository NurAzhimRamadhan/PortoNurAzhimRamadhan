import React, { memo } from 'react';

/**
 * Global background depth layers with subtle premium motion.
 * - Grid + dot matrix (CSS-only opacity / transform animations)
 * - Soft animated wave lines (SVG with native SMIL or CSS transforms)
 * - Theme-aware colors (light vs dark)
 * - Sits at z-[-10], fixed to viewport
 * - Wrapped in React.memo because props never change. No state-driven re-renders.
 */
function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      data-testid="background-fx"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#050505] [.light_&]:bg-[#f6f9ff]" />

      {/* Soft gradient orbs - slow drift via CSS */}
      <div className="bg-orb bg-orb-1 absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-[140px] opacity-70 bg-accent-2/20 [.light_&]:bg-[#3b82f6]/10" />
      <div className="bg-orb bg-orb-2 absolute -bottom-40 -right-20 w-[48rem] h-[48rem] rounded-full blur-[160px] opacity-60 bg-accent-sec/[0.12] [.light_&]:bg-[#60a5fa]/15" />
      <div className="bg-orb bg-orb-3 absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-50 bg-accent-3/[0.10] [.light_&]:bg-[#8b5cf6]/10" />

      {/* GRID - subtle blueprint, gently shifting */}
      <div className="absolute inset-0 bg-grid-anim">
        <svg
          className="absolute inset-0 w-full h-full text-white/[0.05] [.light_&]:text-[#0f172a]/[0.10]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="bg-grid"
              x="0"
              y="0"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="bg-grid-major"
              x="0"
              y="0"
              width="224"
              height="224"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 224 0 L 0 0 0 224"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="1.4"
              />
            </pattern>
            <radialGradient id="grid-mask" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="70%" stopColor="white" stopOpacity="0.45" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-fade">
              <rect width="100%" height="100%" fill="url(#grid-mask)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#bg-grid)"
            mask="url(#grid-fade)"
          />
          <rect
            width="100%"
            height="100%"
            fill="url(#bg-grid-major)"
            mask="url(#grid-fade)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* DOT MATRIX layer */}
      <svg
        className="absolute inset-0 w-full h-full text-accent-3/[0.18] [.light_&]:text-[#3b82f6]/[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="bg-dots"
            x="0"
            y="0"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <radialGradient id="dot-mask" cx="80%" cy="80%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dot-fade">
            <rect width="100%" height="100%" fill="url(#dot-mask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-dots)" mask="url(#dot-fade)" />
      </svg>

      {/* AI NETWORK NODES - subtle constellation top-right */}
      <svg
        className="absolute top-0 right-0 w-[40rem] h-[28rem] opacity-[0.35] [.light_&]:opacity-30 text-accent-sec/70 [.light_&]:text-[#3b82f6]/60"
        viewBox="0 0 800 560"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5">
          <line x1="120" y1="80" x2="260" y2="160" />
          <line x1="260" y1="160" x2="420" y2="120" />
          <line x1="420" y1="120" x2="580" y2="200" />
          <line x1="260" y1="160" x2="320" y2="320" />
          <line x1="420" y1="120" x2="500" y2="300" />
          <line x1="320" y1="320" x2="500" y2="300" />
          <line x1="500" y1="300" x2="640" y2="380" />
          <line x1="120" y1="80" x2="320" y2="320" />
          <line x1="640" y1="380" x2="720" y2="200" />
        </g>
        <g fill="currentColor" className="bg-nodes-pulse">
          <circle cx="120" cy="80" r="3" />
          <circle cx="260" cy="160" r="4" />
          <circle cx="420" cy="120" r="3" />
          <circle cx="580" cy="200" r="3" />
          <circle cx="320" cy="320" r="3.5" />
          <circle cx="500" cy="300" r="4" />
          <circle cx="640" cy="380" r="3" />
          <circle cx="720" cy="200" r="2.5" />
        </g>
      </svg>

      {/* TOPOGRAPHIC / Blueprint waves - bottom-left, animated */}
      <svg
        className="absolute bottom-0 left-0 w-[40rem] h-[26rem] opacity-25 [.light_&]:opacity-30 text-accent-3 [.light_&]:text-[#1e3a8a]"
        viewBox="0 0 800 520"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
          className="bg-waves"
        >
          <path d="M -20 200 C 140 160 240 280 380 220 S 660 140 820 200" />
          <path d="M -20 260 C 140 230 240 330 380 280 S 660 220 820 260" />
          <path d="M -20 320 C 140 300 240 380 380 340 S 660 300 820 320" />
          <path d="M -20 380 C 140 370 240 430 380 400 S 660 380 820 380" />
          <path d="M -20 440 C 140 440 240 480 380 460 S 660 460 820 440" />
        </g>
      </svg>

      {/* Wide subtle horizontal wave line that drifts across the screen */}
      <svg
        className="absolute top-1/3 left-0 w-[200%] h-32 opacity-[0.18] [.light_&]:opacity-[0.22] text-accent-3 [.light_&]:text-[#1e3a8a]"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1" fill="none" className="bg-wave-drift">
          <path d="M 0 120 Q 300 60 600 120 T 1200 120 T 1800 120 T 2400 120" />
          <path d="M 0 140 Q 300 80 600 140 T 1200 140 T 1800 140 T 2400 140" opacity="0.6" />
        </g>
      </svg>

      {/* GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.06] [.light_&]:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

export default memo(BackgroundFX);
