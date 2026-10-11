import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/hero.png';

const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85',
    fallback: heroImg,
    alt: 'Monodrift Porsche GT3 RS Drift in Rain',
    label: '01 / 02 // CAR_DRIFT_B&W',
  },
  {
    src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1600&q=85',
    fallback: heroImg,
    alt: 'Monodrift Streetwear Venice Beach',
    label: '02 / 02 // STREETWEAR_EDITORIAL',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Auto-cycle or toggle image slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="bg-[#f7f6f3] text-[#0e0e0e] pt-16 overflow-hidden border-b border-[#d9d8d3]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100svh-4rem)]">
        {/* LEFT COLUMN: Monodrift Typography & Studio Manifesto */}
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#d9d8d3] bg-[#ffffff]">
          {/* Top Tag & Hairline Divider */}
          <div>
            <div className="pb-3">
              <span className="font-['Fragment_Mono'] text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#222] font-semibold">
                DIGITAL CREATIVE STUDIO
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#e2e1dc] mb-8 sm:mb-12" />

            {/* EXACT MONODRIFT HEADLINE */}
            <div className="select-none">
              <h1 className="font-['Tektur'] text-[clamp(2.9rem,6.8vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em] text-[#0e0e0e]">
                <span>WE BUILD</span>
                <br />
                <span>WHAT</span>
                <br />
                <span className="inline-block bg-[#121212] px-3 sm:px-4 py-0.5 sm:py-1 border border-black/10 my-1">
                  <span style={{ color: 'var(--color-accent)' }}>PEOPLE</span>
                </span>
                <br />
                <span className="inline-block bg-[#121212] px-3 sm:px-4 py-0.5 sm:py-1 border border-black/10 my-1">
                  <span style={{ color: 'var(--color-accent)' }}>REMEMBER</span>
                </span>
                <br />
                <span>AFTER THE</span>
                <br />
                <span>TAB CLOSES.</span>
              </h1>
            </div>

            {/* Vertical Accent Subtitle */}
            <div className="border-l-2 border-[#121212] pl-3 sm:pl-4 my-8 max-w-lg">
              <p className="font-['Figtree'] text-xs sm:text-sm text-[#555] leading-relaxed">
                Branding, web, campaigns and motion, made by one senior team from first call to launch.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="border-t border-[#e2e1dc] pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#777]">
              <span>FIRST STEP — </span>
              <span className="text-[#0e0e0e] font-bold">A 30 MIN CALL</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-between gap-6 px-6 py-3.5 font-['Tektur'] text-xs font-bold uppercase transition-all shadow-sm"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#0e0e0e',
              }}
            >
              <span>&gt; START A PROJECT</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Full-Bleed B&W Cinematic Photography (Porsche 911 GT3 RS Drift) */}
        <div className="relative min-h-[380px] lg:min-h-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center group select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={imgError ? heroImg : HERO_IMAGES[currentSlide].src}
                onError={() => setImgError(true)}
                alt={HERO_IMAGES[currentSlide].alt}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
              />
              {/* Subtle filmic vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicator & Controls */}
          <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20">
            <span className="font-['Fragment_Mono'] text-[10px] text-white/80 uppercase">
              {HERO_IMAGES[currentSlide].label}
            </span>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)}
              className="ml-2 font-['Fragment_Mono'] text-[10px] text-[var(--color-accent)] hover:underline uppercase cursor-pointer"
            >
              NEXT &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
