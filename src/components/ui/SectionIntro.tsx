import type { ReactNode } from 'react';
import type { StatMeta } from '../../types';
import BracketLabel from './BracketLabel';

interface SectionIntroProps {
  index: string;
  eyebrow: string;
  heading: ReactNode;
  intro?: ReactNode;
  meta?: StatMeta[];
  /** Optional right-hand rail content (links, counters, toggles). */
  aside?: ReactNode;
  id?: string;
}

/** Hairline meta list used in the left rail of every section. */
export function MetaList({ meta, className = '' }: { meta: StatMeta[]; className?: string }) {
  return (
    <dl className={`mono-label grid gap-px ${className}`}>
      {meta.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-3"
        >
          <dt className="text-muted">{item.label}</dt>
          <dd className="text-right text-[0.72rem] font-bold tracking-[0.1em]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * The shared section masthead: numbered rail + eyebrow on the top hairline,
 * then the oversized headline against its supporting copy and meta list.
 */
export default function SectionIntro({
  index,
  eyebrow,
  heading,
  intro,
  meta,
  aside,
  id,
}: SectionIntroProps) {
  return (
    <div id={id} className="shell">
      <div className="rule-t flex flex-wrap items-center justify-between gap-3 py-6">
        <span className="kicker flex items-center gap-3">
          <span aria-hidden="true" className="text-accent">
            &gt;&gt;
          </span>
          {index}
        </span>
        <BracketLabel className="text-muted">{eyebrow}</BracketLabel>
      </div>

      <div className="grid gap-y-10 pb-14 pt-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-x-16">
        <h2 className="display display-lg max-w-[20ch] text-balance">{heading}</h2>

        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-8">
            {intro ? (
              <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">{intro}</p>
            ) : null}
            {meta && meta.length > 0 ? <MetaList meta={meta} /> : null}
          </div>
          {aside}
        </div>
      </div>
    </div>
  );
}
