import { useState } from 'react';
import { motion } from 'framer-motion';
import MonoLink from './ui/MonoLink';
import MonoArrow from './ui/MonoArrow';
import SplitLetters from './ui/SplitLetters';
import { HERO, SITE } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [imageReady, setImageReady] = useState(false);

  return (
    <section id="top" className="section-ink relative overflow-hidden pt-16">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="shell relative">
        {/* Eyebrow rail */}
        <div className="rule-b flex items-center justify-between py-5">
          <span className="kicker text-muted">{HERO.eyebrow}</span>
          <span className="kicker hidden text-muted sm:inline">{HERO.replyNote}</span>
        </div>

        {/* Headline */}
        <div className="pt-10 pb-8 sm:pt-14">
          <h1 className="display display-xl">
            {HERO.headlineLines.map((line, index) => (
              <motion.span
                key={line.text}
                className="block"
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.05 * index, ease }}
              >
                {line.highlight ? <span className="hl">{line.text}</span> : line.text}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subhead + action */}
        <div className="grid gap-10 pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <p className="max-w-xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted sm:text-base">
            {HERO.subhead}
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <MonoLink href="#contact" variant="solid" ariaLabel={HERO.cta}>
              {HERO.cta}
            </MonoLink>
            <div className="mono-label flex flex-col gap-1 text-muted">
              <span className="text-white">{HERO.firstStep}</span>
              <span>{HERO.replyNote}</span>
            </div>
          </div>
        </div>

        {/* Kickoff rail */}
        <div className="rule-t grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-center gap-1 py-5 pr-6">
            <span className="kicker text-dim">Next kickoff</span>
            <span className="mono-label text-white">{HERO.reserveNote}</span>
          </div>

          {HERO.kickoffSlots.map((slot) => (
            <div
              key={slot.month}
              className="flex items-center justify-between gap-4 border-t border-line py-5 sm:border-t-0 lg:border-l lg:pl-6"
            >
              <span className="display display-sm">{slot.month}</span>
              <span
                className={`mono-label flex items-center gap-2 ${
                  slot.taken ? 'text-muted' : 'text-accent'
                }`}
              >
                <span aria-hidden="true" className="text-[0.5rem]">
                  ◆
                </span>
                {slot.status}
              </span>
            </div>
          ))}

          <div className="flex items-center justify-between gap-4 border-t border-line py-5 lg:border-l lg:pl-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              <MonoArrow className="h-3.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="mono-label">{HERO.reserve}</span>
            </a>
            <span className="kicker hidden text-dim xl:inline">{SITE.city}</span>
          </div>
        </div>
      </div>

      {/* Full-bleed hero frame */}
      <div className="relative mt-12 border-y border-line-soft">
        <div className="frame group relative aspect-[16/10] max-h-[78svh] w-full sm:aspect-[16/8]">
          <img
            src={HERO.image}
            alt={HERO.imageAlt}
            loading="eager"
            onLoad={() => setImageReady(true)}
            className={`transition-opacity duration-1000 ${imageReady ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />

          <span className="kicker absolute left-5 top-5 border border-white/25 bg-ink-deep/70 px-3 py-2 text-white backdrop-blur-sm sm:left-8 sm:top-8">
            {HERO.imageCaption}
          </span>

          <a
            href="#showreel"
            className="group/cta absolute bottom-5 left-5 inline-flex items-center gap-3 bg-accent px-4 py-3 text-accent-ink transition-colors hover:bg-white sm:bottom-8 sm:left-8"
          >
            <MonoArrow className="h-3.5 w-2.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
            <span className="font-heading text-sm font-bold uppercase tracking-[-0.01em]">
              <SplitLetters text="WATCH THE REEL" stagger={0.02} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
