import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ACCENT_PRESETS, DEFAULT_ACCENT } from '../data/monodrift';

const STORAGE_KEY = 'monodrift.accent';

/** Accepts #rgb, #rrggbb and rgb()/rgba() and normalises to lowercase hex. */
function parseColor(input: string): string | null {
  const value = input.trim().toLowerCase();

  if (/^#[0-9a-f]{3}$/.test(value)) {
    return `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
  }

  if (/^#[0-9a-f]{6}$/.test(value)) {
    return value;
  }

  const rgb = value.match(/^rgba?\(\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*[, ]\s*(\d{1,3})/);
  if (rgb) {
    const channels = rgb.slice(1, 4).map((part) => Math.min(255, Number(part)));
    return `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
  }

  return null;
}

/** Darker companion used for hover states. */
function shade(hex: string, amount: number): string {
  const int = Number.parseInt(hex.slice(1), 16);
  const factor = 1 - amount;
  const channels = [(int >> 16) & 255, (int >> 8) & 255, int & 255].map((channel) =>
    Math.max(0, Math.min(255, Math.round(channel * factor))),
  );
  return `#${channels.map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
}

/** Pick ink or paper text for whatever sits on top of the accent. */
function inkFor(hex: string): string {
  const int = Number.parseInt(hex.slice(1), 16);
  const [r, g, b] = [(int >> 16) & 255, (int >> 8) & 255, int & 255];
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 140 ? '#0b0b0b' : '#ffffff';
}

export default function ColorChanger() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_ACCENT;
    try {
      return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_ACCENT;
    } catch {
      return DEFAULT_ACCENT;
    }
  });
  const [draft, setDraft] = useState(accent);
  const [invalid, setInvalid] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Paint the accent onto the document so every token-driven class follows.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-accent', accent);
    root.style.setProperty('--color-accent-dark', shade(accent, 0.18));
    root.style.setProperty('--color-accent-ink', inkFor(accent));
    try {
      localStorage.setItem(STORAGE_KEY, accent);
    } catch {
      // storage unavailable — the accent simply will not persist
    }
  }, [accent]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    if (open) {
      document.addEventListener('mousedown', onPointerDown);
      document.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const apply = (hex: string) => {
    setAccent(hex);
    setDraft(hex);
    setInvalid(false);
  };

  const handleDraft = (value: string) => {
    setDraft(value);
    const parsed = parseColor(value);
    if (parsed) {
      apply(parsed);
    } else if (value.trim().length > 3) {
      setInvalid(true);
    }
  };

  return (
    <div className="relative" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open the accent colour changer"
        className="h-5 w-5 cursor-pointer rounded-full ring-1 ring-white/25 transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: accent, boxShadow: `0 0 14px ${accent}80` }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-[60] mt-3 w-[19rem] border border-line bg-ink-deep p-5 text-left shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line-soft pb-4">
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-[-0.01em]">
                  COLOR CHANGER
                </p>
                <span className="kicker mt-1 block text-dim">LIVE THEME ENGINE</span>
              </div>
              <button
                type="button"
                onClick={() => apply(DEFAULT_ACCENT)}
                className="kicker cursor-pointer text-muted transition-colors hover:text-accent"
              >
                RESET
              </button>
            </div>

            <div className="mt-4">
              <span className="kicker text-dim">PRESETS</span>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {ACCENT_PRESETS.map((preset) => (
                  <button
                    key={preset.hex}
                    type="button"
                    onClick={() => apply(preset.hex)}
                    aria-label={preset.name}
                    aria-pressed={accent === preset.hex}
                    title={preset.name}
                    className="flex aspect-square cursor-pointer items-center justify-center border transition-colors"
                    style={{
                      borderColor: accent === preset.hex ? preset.hex : '#262626',
                    }}
                  >
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: preset.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-line-soft pt-4">
              <span className="kicker text-dim">HEX OR RGB</span>
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="color"
                  value={accent}
                  onChange={(event) => apply(event.target.value)}
                  aria-label="Pick an accent colour"
                  className="h-9 w-9 cursor-pointer border border-line bg-transparent p-0"
                />
                <input
                  type="text"
                  value={draft}
                  onChange={(event) => handleDraft(event.target.value)}
                  placeholder="#52ff9d or rgb(82, 255, 157)"
                  aria-label="Accent colour value"
                  className={`w-full border bg-surface px-3 py-2 font-mono text-xs uppercase text-white placeholder:text-dim focus:outline-none ${
                    invalid ? 'border-red-400' : 'border-line focus:border-accent'
                  }`}
                />
              </div>
              <span className={`kicker mt-2 block ${invalid ? 'text-red-400' : 'text-dim'}`}>
                {invalid ? 'ENTER A HEX OR RGB VALUE' : `ACTIVE: ${accent.toUpperCase()}`}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
