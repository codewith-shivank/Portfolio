import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionIntro from './ui/SectionIntro';
import Marquee, { MarqueeToggle } from './ui/Marquee';
import { useReducedMotionFlag } from './ui/useReducedMotionFlag';
import MonoLink from './ui/MonoLink';
import MonoArrow from './ui/MonoArrow';
import SmartImage from './ui/SmartImage';
import { NOTES, NOTES_INTRO } from '../data/monodrift';
import type { Note } from '../types';

const ease = [0.16, 1, 0.3, 1] as const;

function NoteCard({ note, onOpen }: { note: Note; onOpen: (note: Note) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(note)}
      aria-label={`Preview note: ${note.title}`}
      className="group mx-3 w-[15rem] shrink-0 cursor-pointer text-left sm:w-[19rem]"
    >
      <span className="frame block aspect-[4/5] w-full">
        <SmartImage src={note.image} alt={note.title} />
        <span className="kicker absolute bottom-3 left-3 bg-accent px-2.5 py-1.5 text-accent-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          PREVIEW
        </span>
      </span>
      <span className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-4">
        <span className="font-heading text-sm font-bold uppercase leading-tight tracking-[-0.01em] transition-colors group-hover:text-accent sm:text-base">
          {note.title}
        </span>
        <MonoArrow className="mt-1 h-3 w-2 shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
      </span>
      <span className="mono-label mt-2 block text-dim">/{note.slug}</span>
    </button>
  );
}

export default function NotesSection() {
  const prefersReducedMotion = useReducedMotionFlag();
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<Note | null>(null);

  const isPaused = paused || prefersReducedMotion;
  const topRow = NOTES.filter((_, index) => index % 2 === 0);
  const bottomRow = NOTES.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [active]);

  return (
    <section id="notes" className="section-ink border-t border-line-soft pt-16 sm:pt-24">
      <SectionIntro
        index={NOTES_INTRO.index}
        eyebrow={NOTES_INTRO.eyebrow}
        heading={<span className="hl">{NOTES_INTRO.heading}</span>}
        intro={NOTES_INTRO.intro}
        aside={
          <div className="flex flex-col items-start gap-5">
            <MonoLink href="#notes" variant="outline">
              {NOTES_INTRO.cta}
            </MonoLink>
            <MarqueeToggle
              paused={isPaused}
              onToggle={() => setPaused((value) => !value)}
              label="Note motion"
            />
          </div>
        }
      />

      <div className="flex flex-col gap-10 pb-20 sm:pb-28">
        <Marquee duration={70} paused={isPaused}>
          {topRow.map((note) => (
            <NoteCard key={note.id} note={note} onOpen={setActive} />
          ))}
        </Marquee>

        <Marquee duration={82} paused={isPaused} direction="right">
          {bottomRow.map((note) => (
            <NoteCard key={note.id} note={note} onOpen={setActive} />
          ))}
        </Marquee>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-ink-deep/95 p-5 backdrop-blur-lg sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            role="dialog"
            aria-modal="true"
            aria-label={`Note preview: ${active.title}`}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease }}
              className="w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="rule-b flex items-center justify-between pb-4">
                <span className="kicker text-muted">[ NOTE PREVIEW ]</span>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="toggle-chip cursor-pointer"
                >
                  Close
                  <span aria-hidden="true">✕</span>
                </button>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-center">
                <div className="frame aspect-[4/5] w-full">
                  <SmartImage src={active.image} alt={active.title} />
                </div>
                <div>
                  <h3 className="display display-md">{active.title}</h3>
                  <span className="mono-label mt-4 block text-dim">/{active.slug}</span>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <MonoLink href="#notes" variant="solid" onClick={() => setActive(null)}>
                      READ ALL NOTES
                    </MonoLink>
                    <button
                      type="button"
                      onClick={() => setActive(null)}
                      className="toggle-chip cursor-pointer"
                    >
                      Close preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
