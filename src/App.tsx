import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ClientLogos from './components/ClientLogos';
import ShowreelSection from './components/ShowreelSection';
import ExpertiseSection from './components/ExpertiseSection';
import ResultsSection from './components/ResultsSection';
import ManifestoSection from './components/ManifestoSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import NotesSection from './components/NotesSection';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { SITE } from './data/monodrift';

const BOOT_MESSAGES = [
  'LOADING MONODRIFT RUNTIME',
  'SETTING HAIRLINES AND TYPE',
  'WIRING COUNTERS AND REELS',
  'SYSTEM ONLINE — ALL CHECKS NOMINAL',
];

const BOOT_DURATION = 1700;

export default function App() {
  const [booting, setBooting] = useState(
    () =>
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);

  // Smooth scrolling for the whole page.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: reduced ? 1 : 0.09,
      respectReducedMotion: true,
      smoothWheel: !reduced,
    });

    return () => lenis.destroy();
  }, []);

  // Boot sequence.
  useEffect(() => {
    if (!booting) return;

    const start = performance.now();
    const interval = window.setInterval(() => {
      const elapsed = performance.now() - start;
      const percent = Math.min(100, Math.round((elapsed / BOOT_DURATION) * 100));
      setProgress(percent);
      setBootStep(Math.min(BOOT_MESSAGES.length - 1, Math.floor((percent / 100) * BOOT_MESSAGES.length)));

      if (elapsed >= BOOT_DURATION) {
        window.clearInterval(interval);
        window.setTimeout(() => setBooting(false), 180);
      }
    }, 24);

    return () => window.clearInterval(interval);
  }, [booting]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-ink text-white antialiased selection:bg-accent selection:text-accent-ink">
        <CustomCursor />
        <div className="grain" aria-hidden="true" />

        <AnimatePresence>
          {booting && (
            <motion.div
              className="loader-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -24, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="loader-shell px-5 sm:px-8">
                <div className="rule-b flex flex-wrap items-center justify-between gap-3 pb-4">
                  <span className="kicker flex items-center gap-3 text-muted">
                    <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    {BOOT_MESSAGES[bootStep]}
                  </span>
                  <span className="kicker text-muted">
                    <span className="text-accent">{progress}%</span>
                  </span>
                </div>

                <p className="loader-word py-2" aria-label={`${SITE.brand} is loading`}>
                  {SITE.wordmark}
                  <span aria-hidden="true" className="ml-2 text-accent">
                    &gt;&gt;
                  </span>
                </p>

                <div className="loader-track" aria-hidden="true">
                  <motion.div
                    className="loader-fill"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="kicker text-dim">CORE: MONODRIFT ENGINE</span>
                  <span className="kicker text-dim">SANTACRUZ, CA — PACIFIC TIME</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Navigation />

        <main>
          <Hero />
          <Projects />
          <ClientLogos />
          <ShowreelSection />
          <ExpertiseSection />
          <ResultsSection />
          <ManifestoSection />
          <ProcessSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <NotesSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
