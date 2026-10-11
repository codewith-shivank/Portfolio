import { motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import RollingNumber from './ui/RollingNumber';
import MonoArrow from './ui/MonoArrow';
import SmartImage from './ui/SmartImage';
import { AWARDS, RESULTS_CTA, RESULTS_INTRO, STATS } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ResultsSection() {
  return (
    <section id="results" className="section-ink border-t border-line-soft pt-16 sm:pt-24">
      <SectionIntro
        index={RESULTS_INTRO.index}
        eyebrow={RESULTS_INTRO.eyebrow}
        heading={
          <>
            <span className="hl">WHAT WE COUNT</span>, NOT WHAT WE CLAIM.
          </>
        }
        intro={RESULTS_INTRO.intro}
        meta={RESULTS_INTRO.meta}
      />

      {/* Odometer counters */}
      <div className="shell">
        <div className="grid gap-px bg-line sm:grid-cols-2">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.7, delay: index * 0.06, ease }}
              className="flex flex-col justify-between gap-10 bg-page p-6 sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="kicker text-muted">{stat.label}</span>
                <span className="kicker text-dim">{stat.number}</span>
              </div>

              <div className="flex items-end gap-3">
                <RollingNumber digits={stat.digits} className="display display-lg" />
                <span className="mono-label pb-2 text-muted">{stat.unit}</span>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-muted">{stat.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to action band */}
      <div className="mt-16 bg-accent text-accent-ink sm:mt-20">
        <div className="shell grid gap-8 py-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:py-16">
          <div>
            <span className="kicker opacity-70">{RESULTS_CTA.kicker}</span>
            <h3 className="display display-lg mt-5 max-w-[22ch]">{RESULTS_CTA.heading}</h3>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-ink px-5 py-4 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <MonoArrow className="h-3.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="mono-label font-bold">{RESULTS_CTA.cta}</span>
            </a>
            <span className="mono-label opacity-70">{RESULTS_CTA.note}</span>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="shell pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <span className="kicker text-muted">{AWARDS.kicker}</span>
            <p className="display display-lg mt-5">{AWARDS.headline}</p>
          </div>

          <div className="flex items-end gap-4">
            <RollingNumber digits={AWARDS.counter} className="display display-lg text-accent" />
            <span className="kicker max-w-[16ch] pb-2 text-muted">{AWARDS.counterLabel}</span>
          </div>

          <div className="flex items-end gap-6">
            <div className="frame group w-24 shrink-0 sm:w-32">
              <SmartImage src={AWARDS.image} alt={AWARDS.imageAlt} className="aspect-[2/3]" />
            </div>
            <p className="max-w-[24ch] text-sm leading-relaxed text-muted">{AWARDS.note}</p>
          </div>
        </div>

        {/* Awards table */}
        <div className="mt-14">
          <div className="kicker hidden grid-cols-[90px_minmax(0,1.1fr)_minmax(0,1.4fr)_70px] gap-6 border-b border-line pb-4 text-dim sm:grid">
            {AWARDS.columns.map((column) => (
              <span key={column} className={column === 'TIMES' ? 'text-right' : ''}>
                {column}
              </span>
            ))}
          </div>

          <ul>
            {AWARDS.rows.map((row) => (
              <li
                key={`${row.year}-${row.house}`}
                className="row-invert grid grid-cols-1 gap-2 border-b border-line px-1 py-5 sm:grid-cols-[90px_minmax(0,1.1fr)_minmax(0,1.4fr)_70px] sm:items-center sm:gap-6"
              >
                <span className="mono-label text-muted">{row.year}</span>
                <span className="font-heading text-sm font-bold uppercase tracking-[-0.01em] sm:text-base">
                  {row.house}
                </span>
                <span className="text-sm text-muted">{row.award}</span>
                <span className="mono-label sm:text-right">{row.times}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-muted">{AWARDS.footer}</p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start border border-line px-4 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              <MonoArrow className="h-3 w-2 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="mono-label">{AWARDS.footerCta}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="pb-20 sm:pb-28" />
    </section>
  );
}
