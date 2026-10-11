import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MonoArrow from './ui/MonoArrow';
import SplitLetters from './ui/SplitLetters';
import SmartImage from './ui/SmartImage';
import { SHOWREEL } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;
const RUNTIME_SECONDS = 54;

function formatTime(seconds: number) {
  const whole = Math.floor(seconds);
  return `00:${String(whole).padStart(2, '0')}`;
}

export default function ShowreelSection() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Modal plumbing: escape to close, lock scroll, focus the close control.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === ' ') {
        event.preventDefault();
        setPlaying((value) => !value);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // The reel placeholder advances while "playing" so the toggle reads as real.
  useEffect(() => {
    if (!open || !playing) return;
    const interval = window.setInterval(() => {
      setElapsed((value) => (value >= RUNTIME_SECONDS ? RUNTIME_SECONDS : value + 0.25));
    }, 250);
    return () => window.clearInterval(interval);
  }, [open, playing]);

  const progress = (elapsed / RUNTIME_SECONDS) * 100;

  return (
    <>
      <section id="showreel" className="section-ink">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${SHOWREEL.meta}. Open the showreel player.`}
          className="frame group relative block aspect-[16/11] w-full cursor-pointer sm:aspect-[16/7]"
        >
          <SmartImage src={SHOWREEL.poster} alt={SHOWREEL.posterAlt} />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/40" />

          <span className="kicker absolute left-5 top-5 flex items-center gap-3 text-white sm:left-10 sm:top-10">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {SHOWREEL.label}
          </span>

          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-ink-deep/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent sm:h-24 sm:w-24">
            <span
              aria-hidden="true"
              className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white transition-colors duration-500 group-hover:border-l-accent-ink sm:border-y-[13px] sm:border-l-[20px]"
            />
          </span>

          <span className="absolute bottom-5 left-5 flex max-w-md flex-col gap-3 text-left sm:bottom-10 sm:left-10">
            <span className="display display-sm block">{SHOWREEL.caption}</span>
            <span className="mono-label block text-muted">{SHOWREEL.meta}</span>
          </span>

          <span className="kicker absolute bottom-5 right-5 hidden items-center gap-3 border border-white/25 px-3 py-2 text-white sm:bottom-10 sm:right-10 sm:flex">
            WATCH REEL
            <MonoArrow className="h-3 w-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-ink-deep/95 px-5 py-10 backdrop-blur-lg sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="Showreel player"
          >
            <div className="w-full max-w-6xl">
              <div className="rule-b flex items-center justify-between pb-4">
                <span className="kicker text-muted">[ SHOWREEL 2025 – 2026 ]</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="toggle-chip cursor-pointer"
                >
                  {SHOWREEL.close}
                  <span aria-hidden="true">✕</span>
                </button>
              </div>

              <motion.h2
                className="display display-xl py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                <SplitLetters text={SHOWREEL.headline} className="text-accent" />
              </motion.h2>

              <div className="frame relative aspect-video w-full border border-line">
                <SmartImage src={SHOWREEL.poster} alt={SHOWREEL.posterAlt} />
                <span className="pointer-events-none absolute inset-0 bg-ink/55" />

                <span
                  className={`absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-500 ${
                    playing ? 'border-accent bg-accent/15' : 'border-white/40 bg-ink-deep/50'
                  }`}
                >
                  {playing ? (
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="block h-5 w-[3px] bg-accent" />
                      <span className="block h-5 w-[3px] bg-accent" />
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="ml-1 block h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-white"
                    />
                  )}
                </span>
              </div>

              <div className="mt-5 flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    onClick={() => setPlaying((value) => !value)}
                    aria-pressed={playing}
                    className="toggle-chip cursor-pointer"
                  >
                    {playing ? 'Pause' : 'Play'}
                  </button>
                  <span className="mono-label text-muted">
                    {formatTime(elapsed)} / 00:{RUNTIME_SECONDS}
                  </span>
                  <span className="mono-label ml-auto hidden text-dim sm:inline">
                    SPACEBAR TOGGLES PLAYBACK · ESC CLOSES
                  </span>
                </div>

                <div className="h-[3px] w-full bg-line" aria-hidden="true">
                  <div
                    className="h-full bg-accent transition-[width] duration-200 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mono-label text-muted">{SHOWREEL.runtime}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
