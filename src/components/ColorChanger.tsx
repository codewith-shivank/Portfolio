import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLOR_PALETTES } from '../data/portfolioData';

function getInitialColor(): string {
  try {
    const saved = localStorage.getItem('monodrift_accent_color');
    if (saved) return saved;
  } catch {
    // ignore
  }
  return '#52ff9d';
}

export default function ColorChanger() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState<string>(getInitialColor);
  const [customHex, setCustomHex] = useState<string>(currentColor);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure CSS property matches initial state
    document.documentElement.style.setProperty('--color-accent', currentColor);
    document.documentElement.style.setProperty('--color-accent-dark', currentColor);
  }, [currentColor]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const applyColor = (hex: string) => {
    document.documentElement.style.setProperty('--color-accent', hex);
    document.documentElement.style.setProperty('--color-accent-dark', hex);
    try {
      localStorage.setItem('monodrift_accent_color', hex);
    } catch {
      // ignore
    }
    setCurrentColor(hex);
    setCustomHex(hex);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    setCustomHex(hex);
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      applyColor(hex);
    }
  };

  const resetDefault = () => {
    applyColor('#52ff9d');
  };

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-5 h-5 rounded-full transition-all duration-200 hover:scale-115 active:scale-95 cursor-pointer focus:outline-none"
        style={{
          backgroundColor: currentColor,
          boxShadow: `0 0 14px ${currentColor}90`,
        }}
        title="Change brand accent color (Monodrift signature feature)"
        aria-label="Toggle brand color picker"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-72 bg-[#121212] border border-[#2a2a2a] p-4 shadow-2xl z-50 text-left"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#222]">
              <div>
                <span className="font-['Tektur'] text-xs font-bold uppercase tracking-wider text-white">
                  COLOR CHANGER
                </span>
                <p className="font-['Fragment_Mono'] text-[9px] text-[#6d6d6d] uppercase">
                  MONODRIFT SIGNATURE ENGINE
                </p>
              </div>
              <button
                onClick={resetDefault}
                className="font-['Fragment_Mono'] text-[9px] uppercase text-[#8a8a8a] hover:text-white"
              >
                RESET
              </button>
            </div>

            <div className="my-3">
              <span className="font-['Fragment_Mono'] text-[10px] uppercase text-[#8a8a8a] block mb-2">
                PRESET PALETTES
              </span>
              <div className="grid grid-cols-4 gap-2">
                {COLOR_PALETTES.map((palette) => (
                  <button
                    key={palette.name}
                    onClick={() => applyColor(palette.hex)}
                    className="flex flex-col items-center gap-1 p-1.5 border transition-all rounded"
                    style={{
                      borderColor: currentColor === palette.hex ? palette.hex : '#262626',
                      backgroundColor: currentColor === palette.hex ? '#1a1a1a' : '#141414',
                    }}
                    title={palette.name}
                  >
                    <span
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: palette.hex,
                        boxShadow: currentColor === palette.hex ? `0 0 8px ${palette.hex}` : 'none',
                      }}
                    />
                    <span className="text-[8px] font-['Fragment_Mono'] text-[#777] truncate w-full text-center">
                      {palette.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#222]">
              <span className="font-['Fragment_Mono'] text-[10px] uppercase text-[#8a8a8a] block mb-2">
                CUSTOM ACCENT HEX
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={customHex}
                  onChange={(e) => applyColor(e.target.value)}
                  className="w-8 h-8 rounded border border-[#333] cursor-pointer bg-transparent p-0"
                />
                <input
                  type="text"
                  value={customHex}
                  onChange={handleCustomChange}
                  placeholder="#52ff9d"
                  className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] px-2.5 py-1 font-['Fragment_Mono'] text-xs text-white uppercase focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="mt-3 text-[9px] font-['Fragment_Mono'] text-[#555] uppercase leading-tight">
              Updates all highlights, charts, buttons &amp; telemetry in real-time.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
