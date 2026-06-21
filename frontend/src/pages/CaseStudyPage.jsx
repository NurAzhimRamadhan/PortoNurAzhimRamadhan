import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Target,
  Search,
  Lightbulb,
  ListChecks,
  Cpu,
  PenTool,
  Trophy,
  GraduationCap,
  Rocket,
  ExternalLink,
  FolderOpen,
  Sparkles,
} from 'lucide-react';
import { projects, profileData, socialLinks } from '../data.js';

const SECTIONS = [
  { key: 'overview', label: 'Overview', icon: Compass },
  { key: 'problem', label: 'Problem', icon: Target },
  { key: 'research', label: 'Research', icon: Search },
  { key: 'solution', label: 'Solution', icon: Lightbulb },
  { key: 'features', label: 'Key Features', icon: ListChecks },
  { key: 'technologies', label: 'Technology Stack', icon: Cpu },
  { key: 'designProcess', label: 'Design Process', icon: PenTool },
  { key: 'impact', label: 'Impact', icon: Trophy },
  { key: 'lessonsLearned', label: 'Lessons Learned', icon: GraduationCap },
  { key: 'futureDevelopment', label: 'Future Development', icon: Rocket },
];

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} · Case Study · ${profileData.name}`;
    }
    return () => {
      document.title = `${profileData.name} - Information Systems · Data · AI`;
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const features = project.features || project.keyInsights || [];
  const technologies = project.technologies || [];
  const lessons = project.lessonsLearned || [];
  const future = project.futureDevelopment || project.futureRoadmap || [];
  const design = project.designProcess || [];
  const research = project.research || [];
  const impact = project.impact || project.outcome;

  return (
    <main
      className="relative min-h-screen pb-32"
      data-testid="case-study-page"
    >
      {/* Floating back-to-home pill */}
      <div className="fixed top-5 md:top-7 left-1/2 -translate-x-1/2 z-50 w-[94%] md:w-auto">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between gap-3 md:gap-6 rounded-full glass-strong pl-2 pr-3 md:pl-2.5 md:pr-5 py-2 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]">
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              data-testid="case-study-back-link"
            >
              <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/20 [.light_&]:ring-slate-900/10">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </span>
              <span className="text-sm font-medium text-white/90 group-hover:text-white whitespace-nowrap">
                Nur Azhim
              </span>
            </Link>

            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-[13px] text-white/70 hover:text-accent-3 transition-colors"
              data-testid="case-study-back-projects"
            >
              <ArrowLeft size={14} strokeWidth={1.6} />
              Back to projects
            </Link>
          </div>
        </motion.nav>
      </div>

      {/* Hero */}
      <section
        className="relative pt-32 md:pt-44 pb-12 md:pb-20"
        data-testid="case-study-hero"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono-accent text-accent-3 mb-4 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-accent-3/60" />
            Case Study · {project.period}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-semibold tracking-tightest leading-[1.02]"
          >
            {project.title}
          </motion.h1>

          {project.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 max-w-3xl font-serif-display italic text-accent-3 text-xl md:text-2xl"
            >
              {project.subtitle}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl"
          >
            <MetaCard label="Role" value={project.role} />
            <MetaCard label="Period" value={project.period} />
            <MetaCard label="Category" value={project.category} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-2 hover:bg-accent-1 text-white px-5 py-2.5 text-sm font-medium transition-colors shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)]"
                data-testid="case-study-visit-live"
              >
                <ExternalLink size={15} strokeWidth={1.6} />
                Visit Live
              </a>
            )}
            {project.folderLink && (
              <a
                href={project.folderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass border border-white/15 text-white hover:border-accent-3/40 px-5 py-2.5 text-sm font-medium transition-colors"
                data-testid="case-study-open-archive"
              >
                <FolderOpen size={15} strokeWidth={1.6} />
                Open Archive
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative mb-16 md:mb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2rem] overflow-hidden glass-strong"
            data-testid="case-study-cover"
          >
            <div className="aspect-[21/10] md:aspect-[21/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body sections */}
      <article className="container max-w-5xl space-y-16 md:space-y-24">
        <Section
          icon={SECTIONS[0].icon}
          label={SECTIONS[0].label}
          number="01"
          testid="case-section-overview"
        >
          <Para text={project.overview || project.description} />
        </Section>

        <Section
          icon={SECTIONS[1].icon}
          label={SECTIONS[1].label}
          number="02"
          testid="case-section-problem"
        >
          <Para text={project.problem} />
        </Section>

        {research.length > 0 && (
          <Section
            icon={SECTIONS[2].icon}
            label={SECTIONS[2].label}
            number="03"
            testid="case-section-research"
          >
            <BulletList items={research} />
          </Section>
        )}

        <Section
          icon={SECTIONS[3].icon}
          label={SECTIONS[3].label}
          number="04"
          testid="case-section-solution"
        >
          <Para text={project.solution || project.approach} />
        </Section>

        {features.length > 0 && (
          <Section
            icon={SECTIONS[4].icon}
            label={SECTIONS[4].label}
            number="05"
            testid="case-section-features"
          >
            <BulletList items={features} />
          </Section>
        )}

        {technologies.length > 0 && (
          <Section
            icon={SECTIONS[5].icon}
            label={SECTIONS[5].label}
            number="06"
            testid="case-section-stack"
          >
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full glass text-white/85 px-4 py-2 text-sm border border-white/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-3" />
                  {t}
                </span>
              ))}
            </div>
            {project.architecture && project.architecture.length > 0 && (
              <div className="mt-8">
                <div className="font-mono-accent text-white/45 mb-3">
                  · System Architecture
                </div>
                <BulletList items={project.architecture} />
              </div>
            )}
            {project.aiIntegration && (
              <div className="mt-8">
                <div className="font-mono-accent text-white/45 mb-3">
                  · AI Integration
                </div>
                <Para text={project.aiIntegration} />
              </div>
            )}
          </Section>
        )}

        {design.length > 0 && (
          <Section
            icon={SECTIONS[6].icon}
            label={SECTIONS[6].label}
            number="07"
            testid="case-section-design"
          >
            <BulletList items={design} />
          </Section>
        )}

        {impact && (
          <Section
            icon={SECTIONS[7].icon}
            label={SECTIONS[7].label}
            number="08"
            testid="case-section-impact"
          >
            <Para text={impact} />
            {project.sdgImpact && project.sdgImpact.length > 0 && (
              <div className="mt-8">
                <div className="font-mono-accent text-white/45 mb-3">· SDG Alignment</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.sdgImpact.map((s) => (
                    <div
                      key={s.code}
                      className="rounded-2xl glass border border-white/10 p-4"
                    >
                      <div className="font-mono-accent text-accent-3 mb-1">
                        {s.code}
                      </div>
                      <div className="text-white/80 text-sm leading-relaxed">
                        {s.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Section>
        )}

        {lessons.length > 0 && (
          <Section
            icon={SECTIONS[8].icon}
            label={SECTIONS[8].label}
            number="09"
            testid="case-section-lessons"
          >
            <BulletList items={lessons} />
          </Section>
        )}

        {future.length > 0 && (
          <Section
            icon={SECTIONS[9].icon}
            label={SECTIONS[9].label}
            number="10"
            testid="case-section-future"
          >
            <BulletList items={future} />
          </Section>
        )}

        {project.team && project.team.length > 0 && (
          <Section
            icon={Sparkles}
            label="Team"
            number="11"
            testid="case-section-team"
          >
            <div className="flex flex-wrap gap-2.5">
              {project.team.map((member) => (
                <span
                  key={member}
                  className="inline-flex items-center rounded-full glass border border-white/10 text-white/85 px-4 py-2 text-sm"
                >
                  {member}
                </span>
              ))}
            </div>
          </Section>
        )}
      </article>

      {/* CTA - more case studies */}
      <section className="mt-24 md:mt-32">
        <div className="container max-w-5xl">
          <div className="rounded-[2rem] glass-strong p-8 md:p-12 text-center">
            <div className="font-mono-accent text-accent-3 mb-3 inline-flex items-center gap-2 justify-center">
              <span className="h-px w-8 bg-accent-3/60" />
              Continue exploring
            </div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-semibold tracking-tightest">
              See more{' '}
              <span className="font-serif-display italic text-accent-3">
                case studies
              </span>
              .
            </h2>
            <p className="mt-3 text-white/65 max-w-xl mx-auto">
              Browse other flagship projects across AI policy intelligence,
              business intelligence, FinTech, and cybersecurity.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white text-ink-950 hover:bg-white/90 px-5 py-3 text-sm font-medium transition-colors"
                data-testid="case-study-cta-projects"
              >
                <ArrowLeft size={15} strokeWidth={1.6} />
                Back to projects
              </Link>
              <a
                href={socialLinks.email}
                className="inline-flex items-center gap-2 rounded-full bg-accent-2 hover:bg-accent-1 text-white px-5 py-3 text-sm font-medium transition-colors"
                data-testid="case-study-cta-contact"
              >
                Let's talk
                <ArrowUpRight size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetaCard({ label, value }) {
  if (!value) return null;
  return (
    <div className="rounded-2xl glass border border-white/10 p-4 md:p-5">
      <div className="font-mono-accent text-white/45 mb-1.5">· {label}</div>
      <div className="text-white text-sm md:text-[15px] leading-snug">
        {value}
      </div>
    </div>
  );
}

function Section({ icon: Icon, label, number, children, testid }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      data-testid={testid}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-1 to-accent-sec text-white shadow-[0_8px_24px_-8px_rgba(168,85,247,0.5)]">
          <Icon size={18} strokeWidth={1.6} />
        </span>
        <div>
          <div className="font-mono-accent text-accent-3 mb-0.5">· {number}</div>
          <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-white leading-tight">
            {label}
          </h2>
        </div>
      </div>
      <div className="pl-0 md:pl-14">{children}</div>
    </motion.section>
  );
}

function Para({ text }) {
  if (!text) return null;
  return (
    <p className="text-base md:text-lg text-white/75 leading-relaxed text-justify hyphens-auto">
      {text}
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-base md:text-[1.05rem] text-white/75 leading-relaxed text-justify hyphens-auto"
        >
          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent-3 flex-shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
