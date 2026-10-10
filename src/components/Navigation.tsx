import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Profile', href: '#about' },
  { label: 'Approach', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Update scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <div
          className="progress-bar-green"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        ref={headerRef}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-dark' : 'bg-[#0e0e0e]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-0 group"
          >
            <span className="font-['Tektur'] font-bold text-[0.95rem] tracking-tight text-white uppercase">
              PORTFOLIO
            </span>
            <span className="font-['Tektur'] font-bold text-[0.95rem] text-[#545454]">
              {'>>'}
            </span>
          </a>

          {/* Center: Status Dot + Desktop Nav Toggle */}
          <div className="flex items-center gap-4">
            {/* Desktop: hamburger-style toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-white hover:text-[#52ff9d] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                <motion.line
                  x1="0" y1="1" x2="24" y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={mobileMenuOpen ? { rotate: 45, y: 6, x: 0 } : { rotate: 0, y: 0, x: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.line
                  x1="0" y1="13" x2="18" y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={mobileMenuOpen ? { rotate: -45, y: -6, x: 0, x2: 24 } : { rotate: 0, y: 0, x: 0, x2: 18 }}
                  transition={{ duration: 0.25 }}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Full-screen menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 top-[calc(3px+3.5rem)] bg-[#0e0e0e] z-40 overflow-y-auto"
            >
              <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12">
                <nav className="space-y-0" aria-label="Primary navigation">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="block py-4 border-b border-[#2a2a2a] font-['Tektur'] text-2xl sm:text-4xl font-bold uppercase text-white hover:text-[#52ff9d] transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 space-y-6"
                >
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="submit-btn inline-flex w-auto"
                  >
                    <span>{'>'}</span>
                    <span>GET IN TOUCH</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
