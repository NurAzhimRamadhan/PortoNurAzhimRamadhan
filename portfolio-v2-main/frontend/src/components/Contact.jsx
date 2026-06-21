import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  Github,
  MapPin,
  Download,
  ArrowUpRight,
} from 'lucide-react';
import { profileData, socialLinks, cvLink } from '../data.js';
import SectionHeader from './SectionHeader.jsx';
import MagneticButton from './MagneticButton.jsx';

const CHANNELS = [
  {
    key: 'email',
    label: 'Email',
    value: 'nurazhimrr@gmail.com',
    href: socialLinks.email,
    icon: Mail,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: '/in/nurazhimramadhan',
    href: socialLinks.linkedin,
    icon: Linkedin,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: '@NurAzhimRamadhan',
    href: socialLinks.github,
    icon: Github,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    value: '@ramzzhim',
    href: socialLinks.instagram,
    icon: Instagram,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: '+62 819 9121 9199',
    href: socialLinks.whatsapp,
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="contact-section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-accent-2/[0.10] blur-[120px]" />
      </div>

      <div className="container">
        <SectionHeader
          align="center"
          eyebrow="10 · Get In Touch"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="font-serif-display italic text-accent-3">
                meaningful
              </span>{' '}
              together.
            </>
          }
          subtitle="Internships, scholarships, collaborations, or a chat about data, AI, and digital innovation. I&apos;d love to hear from you."
          testid="contact-header"
        />

        <div className="mx-auto max-w-3xl glass-strong rounded-[2rem] p-6 md:p-10 lg:p-12 shimmer-border">
          {/* Top row: avatar + status */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="font-display text-lg text-white leading-tight">
                  {profileData.name}
                </div>
                <div className="text-sm text-white/55 flex items-center gap-1.5">
                  <MapPin size={13} strokeWidth={1.6} className="text-accent-3" />
                  {profileData.location}
                </div>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono-accent text-white/70">
                Available
              </span>
            </span>
          </div>

          {/* Channels list */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.li
                  key={c.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <a
                    href={c.href}
                    target={c.key === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-accent-3/40 p-4 transition-all"
                    data-testid={`contact-${c.key}`}
                  >
                    <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-1 to-accent-sec text-white">
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="font-mono-accent text-white/45">
                        · {c.label}
                      </div>
                      <div className="text-white truncate">{c.value}</div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className="text-white/40 group-hover:text-accent-3 group-hover:-rotate-12 transition-all"
                    />
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <MagneticButton
              as="a"
              href={socialLinks.email}
              variant="accent"
              testid="contact-email-cta"
              ariaLabel="Send email"
            >
              <Mail size={16} strokeWidth={1.6} />
              <span>Send Email</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              testid="contact-cv-cta"
              ariaLabel="Download CV"
            >
              <Download size={16} strokeWidth={1.6} />
              <span>Download CV</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
