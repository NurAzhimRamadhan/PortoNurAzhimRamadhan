import React from 'react';
import {
  ArrowUp,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { navItems, profileData, socialLinks } from '../data.js';
import { smoothScrollTo } from '../lib/utils.js';

const SOCIALS = [
  { key: 'email', icon: Mail, href: socialLinks.email, label: 'Email' },
  { key: 'linkedin', icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { key: 'github', icon: Github, href: socialLinks.github, label: 'GitHub' },
  { key: 'instagram', icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
  { key: 'whatsapp', icon: MessageCircle, href: socialLinks.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/10 bg-ink-950"
      data-testid="footer"
    >
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/15 shadow-[0_0_22px_-6px_rgba(168,85,247,0.55)] [.light_&]:ring-slate-900/10 [.light_&]:shadow-[0_0_22px_-6px_rgba(59,130,246,0.45)]">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </span>
              <span className="font-display text-lg text-white">
                {profileData.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/55 leading-relaxed text-justify">
              {profileData.tagline} Information Systems undergraduate exploring
              data, AI, and digital innovation.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.key}
                    href={s.href}
                    target={s.key === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex w-9 h-9 items-center justify-center rounded-full glass text-white/75 hover:text-white hover:border-accent-3/40 transition-all"
                    data-testid={`footer-social-${s.key}`}
                  >
                    <Icon size={16} strokeWidth={1.6} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <div className="font-mono-accent text-white/45 mb-4">
              · Quick Links
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => smoothScrollTo(item.id)}
                    className="text-sm text-white/70 hover:text-accent-3 transition-colors"
                    data-testid={`footer-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex md:justify-end items-start">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm text-white hover:text-accent-3 hover:border-accent-3/40 transition-all"
              data-testid="footer-back-to-top"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-center">
          <p className="text-xs text-white/40 text-center" data-testid="footer-copyright">
            &copy; 2026 {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
