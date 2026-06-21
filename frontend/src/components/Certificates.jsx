/* eslint-disable react-hooks/set-state-in-effect */
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { certificates } from '../data.js';
import SectionHeader from './SectionHeader.jsx';

export default function Certificates() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [snaps, setSnaps] = useState([]);
  const [idx, setIdx] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    const onSel = () => setIdx(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSel);
    emblaApi.on('reInit', onSel);
    onSel();
    return () => {
      emblaApi.off('select', onSel);
      emblaApi.off('reInit', onSel);
    };
  }, [emblaApi]);

  return (
    <section
      id="certificates"
      className="relative py-24 md:py-36 overflow-hidden"
      data-testid="certificates-section"
    >
      <div className="container">
        <SectionHeader
          eyebrow="08 · Certificates"
          title={
            <>
              Trainings &{' '}
              <span className="font-serif-display italic text-accent-3">
                credentials
              </span>{' '}
              earned.
            </>
          }
          subtitle="Samsung Innovation Campus, data analytics bootcamps, AI workshops, and national competition recognitions."
          testid="certificates-header"
        />

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="font-mono-accent text-white/45">
            · {String(idx + 1).padStart(2, '0')} /{' '}
            {String(snaps.length).padStart(2, '0')}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full glass text-white/80 hover:text-white hover:border-white/25 transition-all"
              aria-label="Previous certificate"
              data-testid="cert-prev"
            >
              <ArrowLeft size={16} strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full glass text-white/80 hover:text-white hover:border-white/25 transition-all"
              aria-label="Next certificate"
              data-testid="cert-next"
            >
              <ArrowRight size={16} strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef} data-testid="certificates-carousel">
          <div className="embla__container -ml-3">
            {certificates.map((c, i) => (
              <motion.div
                key={c.id}
                className="embla__slide pl-3 md:flex-[0_0_60%] lg:flex-[0_0_42%]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                data-testid={`certificate-${c.id}`}
              >
                <a
                  href={c.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl glass overflow-hidden hover:border-white/20 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 glass rounded-full px-3 py-1 font-mono-accent text-white/80">
                      <Award size={12} strokeWidth={1.6} />
                      Certified
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="font-mono-accent text-white/45 flex items-center gap-1.5 mb-2">
                      <Calendar size={12} strokeWidth={1.6} />
                      {c.date}
                    </div>
                    <h3 className="font-display text-lg font-medium text-white leading-snug">
                      {c.title}
                    </h3>
                    <div className="mt-1 text-sm text-white/55">{c.issuer}</div>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-accent-3 transition-colors">
                      View credential
                      <ExternalLink size={14} strokeWidth={1.6} />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-7 flex items-center justify-center gap-1.5">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === idx
                  ? 'w-6 bg-white'
                  : 'w-2 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Show certificate ${i + 1}`}
              data-testid={`cert-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
