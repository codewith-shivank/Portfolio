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
import ContactSection from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: prefersReducedMotion ? 1 : 0.08,
      respectReducedMotion: true,
      smoothWheel: !prefersReducedMotion,
    });

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, prefersReducedMotion ? 300 : 1800);

    return () => {
      window.clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen relative antialiased bg-[#0e0e0e]">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="loader-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="loader-content"
              >
                <div className="loader-topline">
                  <span className="loader-status" />
                  <span className="loader-text">SYSTEM BOOTING</span>
                </div>

                <div className="loader-brand" aria-label="Portfolio loader">
                  <span className="loader-word">PORTFOLIO</span>
                  <span className="loader-arrow">&gt;&gt;</span>
                </div>

                <div className="loader-progress-track" aria-hidden="true">
                  <motion.div
                    className="loader-progress-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />
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
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
