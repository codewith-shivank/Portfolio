import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import MonoLink from './ui/MonoLink';
import { PROCESS_CONTACT, PROCESS_INTRO, PROCESS_STEPS, PROCESS_TABS } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProcessSection() {
  const [activeId, setActiveId] = useState(PROCESS_TABS[0].id);
  const activeTab = PROCESS_TABS.find((tab) => tab.id === activeId) ?? PROCESS_TABS[0];

  return (
    <section id="process" className="section-ink border-t border-line-soft pt-16 sm:pt-24">
      <SectionIntro
        index={PROCESS_INTRO.index}
        eyebrow={PROCESS_INTRO.eyebrow}
        heading={
          <>
            THE IDEA THAT WINS IS <span className="hl">THE ONE THAT SHIPS.</span>
          </>
        }
        intro={PROCESS_INTRO.intro}
        meta={PROCESS_INTRO.meta}
      />

      <div className="shell flex flex-col gap-12 pb-20 sm:pb-28">
        {/* Deliverable toggle */}
        <div className="flex flex-col gap-5 border-t border-line pt-6 lg:flex-row lg:items-center lg:justify-between">
          <span className="kicker text-muted">{PROCESS_CONTACT.tabQuestion}</span>
          <div className="flex flex-wrap gap-2">
            {PROCESS_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                aria-pressed={tab.id === activeId}
                data-active={tab.id === activeId}
                className="toggle-chip cursor-pointer"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)]">
          <div>
            <span className="kicker text-dim">{PROCESS_CONTACT.weekLabel}</span>
          </div>

          <ol className="relative border-l border-line">
            {PROCESS_STEPS.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.6, delay: index * 0.05, ease }}
                className={`relative pl-7 sm:pl-10 ${index === PROCESS_STEPS.length - 1 ? '' : 'pb-10'}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full border border-ink bg-accent"
                />
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="kicker text-dim">{step.number}</span>
                  <h3 className="display display-sm">{step.title}</h3>
                  <span className="mono-label ml-auto hidden text-muted sm:inline">{step.meta}</span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{step.body}</p>
                <span className="mono-label mt-2 block text-dim sm:hidden">{step.meta}</span>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Outcome of the selected deliverable */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
            className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
          >
            <div>
              <p className="display display-md">
                <span className="hl">{activeTab.headline}</span>
              </p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
                {activeTab.outcome}
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-3 lg:justify-end">
              {activeTab.closing.map((note) => (
                <span key={note} className="kicker border border-line px-3 py-2 text-muted">
                  [ {note} ]
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Contact person */}
        <div className="grid gap-8 border border-line p-6 sm:p-8 lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:gap-14">
          <div className="frame group aspect-[3/4] overflow-hidden">
            <img src={PROCESS_CONTACT.image} alt={PROCESS_CONTACT.imageAlt} loading="lazy" />
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div>
              <span className="kicker text-muted">{PROCESS_CONTACT.kicker}</span>
              <p className="display display-md mt-4 max-w-[18ch]">{PROCESS_CONTACT.headline}</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-end justify-between gap-6 border-t border-line pt-5">
                <div>
                  <p className="font-heading text-xl font-bold tracking-[-0.02em]">
                    {PROCESS_CONTACT.name}
                  </p>
                  <span className="mono-label mt-1 block text-muted">{PROCESS_CONTACT.role}</span>
                </div>
                <MonoLink href="#contact" variant="solid">
                  {PROCESS_CONTACT.cta}
                </MonoLink>
              </div>
              <span className="mono-label text-dim">{PROCESS_CONTACT.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
