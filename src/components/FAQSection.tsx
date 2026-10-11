import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import MonoLink from './ui/MonoLink';
import { FAQ_INTRO, FAQ_ITEMS } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section id="faq" className="section-paper border-t border-line pt-16 sm:pt-24">
      <SectionIntro
        index={FAQ_INTRO.index}
        eyebrow={FAQ_INTRO.eyebrow}
        heading={
          <>
            NOTHING HERE <span className="hl">SHOULD SURPRISE YOU.</span>
          </>
        }
        intro={FAQ_INTRO.intro}
      />

      <div className="shell grid gap-12 pb-20 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-20 sm:pb-28">
        {/* Who answers */}
        <div className="flex flex-col gap-6 border border-line p-5 lg:sticky lg:top-24 lg:self-start">
          <div className="frame group aspect-[4/5] w-full">
            <img src={FAQ_INTRO.person.image} alt={FAQ_INTRO.person.imageAlt} loading="lazy" />
          </div>
          <div>
            <p className="font-heading text-lg font-bold tracking-[-0.02em]">
              {FAQ_INTRO.person.name}
            </p>
            <span className="mono-label mt-1 block text-muted">{FAQ_INTRO.person.role}</span>
          </div>
          <MonoLink href="#contact" variant="outline" className="justify-between">
            {FAQ_INTRO.cta}
          </MonoLink>
        </div>

        {/* Accordion */}
        <ul className="border-t border-line">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="row-invert group flex w-full cursor-pointer items-start justify-between gap-6 px-2 py-6 text-left"
                  >
                    <span className="display display-sm max-w-[42ch]">{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-current text-lg leading-none transition-transform duration-500 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl px-2 pb-7 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
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
