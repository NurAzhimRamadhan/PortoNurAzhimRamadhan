import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, profileData } from '../data.js';
import { smoothScrollTo, useScrolledPast } from '../lib/utils.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar() {
  const scrolled = useScrolledPast(40);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Track active section without state updates on every scroll
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive((prev) => (prev === entry.target.id ? prev : entry.target.id));
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const handleNav = (id) => {
    smoothScrollTo(id, 80);
    setOpen(false);
  };

  return (
    <>
      {/* Desktop floating nav wrapper holds fixed centering so Framer Motion's transform doesn't overwrite it */}
      <div
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-auto"
        data-testid="primary-navbar"
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div
            className={`flex items-center gap-3 md:gap-5 rounded-full pl-2 pr-3 md:pl-2.5 md:pr-4 py-2 transition-[background-color,border-color,box-shadow] duration-500 ${
              scrolled
                ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
                : 'glass shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]'
            }`}
          >
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 pr-2 md:pr-4 md:border-r md:border-white/10 group"
              data-testid="navbar-logo"
              aria-label="Go to top"
            >
              <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/20 shadow-[0_0_20px_-6px_rgba(168,85,247,0.55)] [.light_&]:ring-slate-900/10 [.light_&]:shadow-[0_0_20px_-6px_rgba(59,130,246,0.45)]">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </span>
              <span className="hidden md:inline text-sm font-medium text-white/90 group-hover:text-white whitespace-nowrap">
                Nur Azhim
              </span>
            </button>

            {/* Desktop items */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`relative px-3 py-1.5 text-[13px] rounded-full transition-colors ${
                      active === item.id
                        ? 'text-white'
                        : 'text-white/55 hover:text-white'
                    }`}
                    data-testid={`navlink-${item.id}`}
                  >
                    {active === item.id && (
                      <motion.span
                        layoutId="navActivePill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Theme toggle (desktop) */}
            <div className="hidden md:block ml-2 pl-2 border-l border-white/10">
              <ThemeToggle />
            </div>

            {/* Mobile actions */}
            <div className="md:hidden ml-auto flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1]"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                data-testid="navbar-mobile-toggle"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-ink-950/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
            data-testid="navbar-mobile-overlay"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-4 right-4 glass-strong rounded-3xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile profile header */}
              <div className="flex items-center gap-3 px-2 pb-4 mb-2 border-b border-white/10">
                <span className="relative inline-flex w-11 h-11 rounded-full overflow-hidden ring-1 ring-white/15">
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-white text-sm leading-tight truncate">
                    {profileData.name}
                  </div>
                  <div className="font-mono-accent text-white/45 text-[10px] truncate">
                    {profileData.role}
                  </div>
                </div>
              </div>

              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                        active === item.id
                          ? 'bg-white/[0.06] text-white'
                          : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                      }`}
                      data-testid={`mobile-navlink-${item.id}`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono-accent text-[10px] text-white/30">
                        0{navItems.indexOf(item) + 1}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
