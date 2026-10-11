import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ColorChanger from './ColorChanger';
import { PERSONAL_DETAILS } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects', num: '01' },
  { label: 'Profile', href: '#about', num: '02' },
  { label: 'Capabilities', href: '#skills', num: '03' },
  { label: 'Approach', href: '#process', num: '04' },
  { label: 'Results', href: '#results', num: '05' },
  { label: 'Words', href: '#testimonials', num: '06' },
  { label: 'Notes', href: '#notes', num: '07' },
  { label: 'Pricing', href: '#pricing', num: '08' },
  { label: 'Contact', href: '#contact', num: '09' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-white/5 pointer-events-none">
        <div
          className="h-full transition-all duration-75"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: 'var(--color-accent)',
          }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-[#1c1c1c] h-16">
        <div className="w-full px-5 sm:px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Exact Brand Logo matching Monodrift reference */}
          <a href="#top" className="flex items-center group select-none">
            <span className="font-['Tektur'] font-bold text-lg sm:text-xl tracking-tight text-white uppercase group-hover:text-[var(--color-accent)] transition-colors">
              MONODRIFT
            </span>
            <span className="font-['Tektur'] font-bold text-lg sm:text-xl text-white group-hover:text-[var(--color-accent)] transition-colors">
              &gt;&gt;
            </span>
          </a>

          {/* Right Controls: Exactly 2 controls matching screenshot */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* 1. Green Circular Dot Color Changer */}
            <ColorChanger />

            {/* 2. Exact Monodrift Menu Hamburger Toggle (bordered box with 2 lines) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 border border-white/20 bg-[#121212] rounded-sm flex flex-col items-center justify-center gap-1.5 hover:border-white transition-colors cursor-pointer group"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                className="w-5 h-[2px] bg-white group-hover:bg-[var(--color-accent)] transition-colors"
                animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-3.5 h-[2px] bg-white self-end mr-2.5 group-hover:bg-[var(--color-accent)] transition-colors"
                animate={mobileMenuOpen ? { rotate: -45, y: -4, width: '20px', marginRight: '0px' } : { rotate: 0, y: 0, width: '14px' }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>

        {/* Full-Screen Monodrift Navigation Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-16 bg-[#000000]/98 backdrop-blur-xl border-t border-[#1c1c1c] z-40 h-[calc(100svh-4rem)] overflow-y-auto"
            >
              <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
                <div>
                  <span className="font-['Fragment_Mono'] text-xs text-[#555] uppercase tracking-widest block mb-6">
                    [ SITE NAVIGATION ]
                  </span>
                  <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label="Expanded primary navigation">
                    {NAV_ITEMS.map((item, i) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.25 }}
                        className="group flex items-baseline justify-between p-3.5 border border-[#1c1c1c] hover:border-[#333] hover:bg-[#121212] transition-all"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-['Fragment_Mono'] text-xs text-[#555] group-hover:text-[var(--color-accent)]">
                            {item.num}
                          </span>
                          <span className="font-['Tektur'] text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[var(--color-accent)] transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-['Fragment_Mono'] text-xs text-[#444] group-hover:text-white transition-colors">
                          &gt;
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </div>

                <div className="border-t lg:border-t-0 lg:border-l border-[#222] pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-between">
                  <div>
                    <span className="font-['Fragment_Mono'] text-xs text-[#555] uppercase tracking-widest block mb-4">
                      [ STUDIO SPECIFICATION ]
                    </span>
                    <div className="space-y-4 font-['Fragment_Mono'] text-xs text-[#888]">
                      <div>
                        <div className="text-[#555] text-[10px] uppercase">CREATIVE ENGINEER:</div>
                        <div className="text-white uppercase font-bold text-sm">{PERSONAL_DETAILS.fullName}</div>
                      </div>
                      <div>
                        <div className="text-[#555] text-[10px] uppercase">DIRECT INQUIRIES:</div>
                        <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-white hover:underline text-sm">
                          {PERSONAL_DETAILS.email}
                        </a>
                      </div>
                      <div>
                        <div className="text-[#555] text-[10px] uppercase">LOCATION:</div>
                        <div className="text-white uppercase">{PERSONAL_DETAILS.location}</div>
                      </div>
                      <div>
                        <div className="text-[#555] text-[10px] uppercase">GITHUB:</div>
                        <a
                          href={PERSONAL_DETAILS.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[var(--color-accent)] hover:underline"
                        >
                          github.com/codewith-shivank
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1c1c1c]">
                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 font-['Tektur'] text-sm font-bold uppercase transition-all"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
