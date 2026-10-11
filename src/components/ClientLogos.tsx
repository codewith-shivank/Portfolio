import { useState } from 'react';
import Marquee, { MarqueeToggle } from './ui/Marquee';
import { useReducedMotionFlag } from './ui/useReducedMotionFlag';
import BracketLabel from './ui/BracketLabel';
import { CLIENT_LOGOS, CLIENTS_COPY } from '../data/monodrift';
import type { ClientLogo } from '../types';

function LogoChip({ logo }: { logo: ClientLogo }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="flex h-24 w-[240px] items-center justify-center border-l border-line px-8 sm:h-28 sm:w-[300px]">
      {broken ? (
        <span className="font-heading text-lg font-bold uppercase tracking-[-0.02em] text-white/70">
          {logo.label}
        </span>
      ) : (
        <img
          src={logo.src}
          alt={`${logo.label} logo`}
          loading="lazy"
          onError={() => setBroken(true)}
          className="max-h-10 w-auto opacity-60 grayscale transition-opacity duration-300 hover:opacity-100"
        />
      )}
    </div>
  );
}

export default function ClientLogos() {
  const prefersReducedMotion = useReducedMotionFlag();
  const [paused, setPaused] = useState(false);

  const isPaused = paused || prefersReducedMotion;

  return (
    <section className="section-ink-2 border-y border-line-soft py-16 sm:py-20">
      <div className="shell flex flex-col items-center gap-8 text-center">
        <BracketLabel className="text-muted">{CLIENTS_COPY.heading}</BracketLabel>

        <Marquee duration={38} paused={isPaused} className="w-full">
          {CLIENT_LOGOS.map((logo) => (
            <LogoChip key={logo.id} logo={logo} />
          ))}
        </Marquee>

        <div className="flex flex-col items-center gap-6">
          <p className="max-w-sm text-sm text-muted">{CLIENTS_COPY.note}</p>
          <MarqueeToggle
            paused={isPaused}
            onToggle={() => setPaused((value) => !value)}
            label="Logo motion"
          />
        </div>
      </div>
    </section>
  );
}
