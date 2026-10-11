import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import MonoLink from './ui/MonoLink';
import SmartImage from './ui/SmartImage';
import { EXPERTISE, EXPERTISE_INTRO } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExpertiseSection() {
  const [openId, setOpenId] = useState<string>(EXPERTISE[0].id);

  return (
    <section id="expertise" className="section-paper pt-16 sm:pt-24">
      <SectionIntro
        index={EXPERTISE_INTRO.index}
        eyebrow={EXPERTISE_INTRO.eyebrow}
        heading={
          <>
            BRANDING, WEB, CAMPAIGNS, MOTION. <span className="hl">RUN AS ONE PRACTICE</span>, NOT
            FOUR VENDORS.
          </>
        }
        intro={EXPERTISE_INTRO.intro}
        meta={EXPERTISE_INTRO.meta}
      />

      <div className="shell pb-20 sm:pb-28">
        <ul className="border-t border-line">
          {EXPERTISE.map((item) => {
            const isOpen = openId === item.id;

            return (
              <li key={item.id} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`expertise-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    className="row-invert group flex w-full cursor-pointer items-center justify-between gap-6 px-2 py-6 text-left sm:py-7"
                  >
                    <span className="flex items-baseline gap-4 sm:gap-7">
                      <span className="kicker text-dim group-hover:text-accent-ink">
                        {item.number}
                      </span>
                      <span className="display display-md">{item.title}</span>
                    </span>

                    <span className="flex items-center gap-5 sm:gap-8">
                      <span className="kicker hidden text-muted group-hover:text-accent-ink sm:inline">
                        {item.projects}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border border-current text-xl leading-none transition-transform duration-500 ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        +
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`expertise-panel-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-10 px-2 pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
                        <div>
                          <p className="display display-md max-w-[20ch]">{item.headline}</p>
                          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                            {item.body}
                          </p>

                          <div className="mt-9 grid gap-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
                            <div className="border border-line p-4">
                              <span className="kicker text-dim">{item.shareLabel}</span>
                              <span className="display display-lg mt-2 block">{item.share}%</span>
                              <span className="mt-4 block h-[3px] w-full bg-surface-2">
                                <span
                                  className="block h-full bg-accent"
                                  style={{ width: `${item.share}%` }}
                                />
                              </span>
                            </div>
                            <p className="self-end text-sm leading-relaxed">{item.note}</p>
                          </div>
                        </div>

                        <div>
                          <div className="frame aspect-[4/3] w-full">
                            <SmartImage src={item.image} alt={item.imageAlt} />
                          </div>
                          <MonoLink href="#work" variant="outline" className="mt-6">
                            VIEW PROJECTS
                          </MonoLink>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
