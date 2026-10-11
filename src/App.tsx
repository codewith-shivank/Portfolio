import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import ShowreelSection from './components/ShowreelSection';
import About from './components/About';
import Projects from './components/Projects';
import ProcessSection from './components/ProcessSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NotesSection from './components/NotesSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { PERSONAL_DETAILS } from './data/portfolioData';

const BOOT_MESSAGES = [
  'INITIALIZING MONODRIFT RUNTIME...',
  'CALIBRATING 60 FPS INTERACTION ENGINE...',
  'COMPILING SHADER MATRICES & TYPOGRAPHY...',
  'ESTABLISHING TELEMETRY LINK...',
  'SYSTEM ONLINE // ALL CHECKS NOMINAL',
];

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });
  const [progress, setProgress] = useState(0);
  const [bootMsgIndex, setBootMsgIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: prefersReducedMotion ? 1 : 0.08,
      respectReducedMotion: true,
      smoothWheel: !prefersReducedMotion,
    });

    if (prefersReducedMotion) {
      return () => lenis.destroy();
    }

    // 2.6 seconds loader duration (between 2 and 3 seconds)
    const totalDuration = 2600;
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const currentPercent = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(currentPercent);

      const msgIdx = Math.min(
        BOOT_MESSAGES.length - 1,
        Math.floor((currentPercent / 100) * BOOT_MESSAGES.length)
      );
      setBootMsgIndex(msgIdx);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen relative antialiased bg-[#0e0e0e] selection:bg-[var(--color-accent)] selection:text-black">
        <CustomCursor />
        {/* Monodrift High-Precision System Loader */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="loader-screen"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: -30,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="loader-content"
              >
                {/* Top Status & Percentage Counter */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full animate-ping inline-block"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    />
                    <span className="font-['Fragment_Mono'] text-xs uppercase tracking-[0.2em] text-white/80">
                      {BOOT_MESSAGES[bootMsgIndex]}
                    </span>
                  </div>
                  <div className="font-['Fragment_Mono'] text-xs uppercase tracking-widest text-white/60">
                    <span
                      className="font-bold text-sm"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {progress.toString().padStart(3, ' ')}%
                    </span>
                  </div>
                </div>

                {/* Giant Typographic Mark */}
                <div className="loader-brand py-2 select-none" aria-label="Portfolio loader">
                  <span className="loader-word">{PERSONAL_DETAILS.name}</span>
                  <span
                    className="loader-arrow"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    &gt;&gt;
                  </span>
                </div>

                {/* Precision Progress Track with Glow Fill */}
                <div className="loader-progress-track mt-2" aria-hidden="true">
                  <div
                    className="h-full transition-all duration-75 relative"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: 'var(--color-accent)',
                      boxShadow: '0 0 16px var(--color-accent)',
                    }}
                  >
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-black"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    />
                  </div>
                </div>

                {/* Bottom Diagnostics Line */}
                <div className="flex items-center justify-between font-['Fragment_Mono'] text-[10px] text-white/40 uppercase tracking-widest pt-2">
                  <span>CORE: 2026 // MONODRIFT ENGINE</span>
                  <span>STATUS: INITIALIZING</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navigation />
        <main>
          <Hero />
          <ClientLogos />
          <ShowreelSection />
          <About />
          <Projects />
          <ProcessSection />
          <ResultsSection />
          <TestimonialsSection />
          <NotesSection />
          <PricingSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
