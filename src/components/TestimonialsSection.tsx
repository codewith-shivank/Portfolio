import { useState } from 'react';
import Marquee, { MarqueeToggle } from './ui/Marquee';
import { useReducedMotionFlag } from './ui/useReducedMotionFlag';
import BracketLabel from './ui/BracketLabel';
import MonoArrow from './ui/MonoArrow';
import SmartImage from './ui/SmartImage';
import { TESTIMONIALS, TESTIMONIALS_INTRO } from '../data/monodrift';
import type { Testimonial } from '../types';

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="mx-3 flex w-[19rem] shrink-0 flex-col justify-between gap-6 border border-line bg-surface p-6 sm:w-[24rem]">
      {item.image ? (
        <div className="frame group h-16 w-16 overflow-hidden rounded-full border border-line">
          <SmartImage src={item.image} alt={item.name} className="h-full w-full object-cover" />
        </div>
      ) : (
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-line font-heading text-sm font-bold text-muted">
          {item.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </span>
      )}

      <blockquote className="text-sm leading-relaxed text-muted">
        <span aria-hidden="true" className="text-accent">
          “
        </span>
        {item.quote}
        <span aria-hidden="true" className="text-accent">
          ”
        </span>
      </blockquote>

      <figcaption className="mono-label border-t border-line pt-4">
        <span className="block text-white">{item.name}</span>
        <span className="mt-1 block text-dim">{item.role}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotionFlag();
  const [paused, setPaused] = useState(false);
  const isPaused = paused || prefersReducedMotion;

  const topRow = TESTIMONIALS.filter((_, index) => index % 2 === 0);
  const bottomRow = TESTIMONIALS.filter((_, index) => index % 2 === 1);

  return (
    <section id="words" className="section-ink-2 border-y border-line-soft py-16 sm:py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <BracketLabel className="text-muted">{TESTIMONIALS_INTRO.eyebrow}</BracketLabel>
            <h2 className="display display-lg mt-5">
              <span className="hl">{TESTIMONIALS_INTRO.heading}</span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-sm text-sm leading-relaxed text-muted">{TESTIMONIALS_INTRO.intro}</p>
            <MarqueeToggle
              paused={isPaused}
              onToggle={() => setPaused((value) => !value)}
              label="Manual scroll"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee duration={64} paused={isPaused} direction="left" trackClassName="items-stretch">
          {topRow.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Marquee>

        <Marquee duration={72} paused={isPaused} direction="right" trackClassName="items-stretch">
          {bottomRow.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Marquee>
      </div>

      <div className="shell pt-12">
        <a
          href="#pricing"
          className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-accent"
        >
          <MonoArrow className="h-3 w-2 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="mono-label">SEE WHAT IT COSTS</span>
        </a>
      </div>
    </section>
  );
}
