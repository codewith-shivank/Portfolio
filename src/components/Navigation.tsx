import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ColorChanger from './ColorChanger';
import MonoArrow from './ui/MonoArrow';
import { NAV_LINKS, SITE, SOCIAL_LINKS } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* Reading progress */}
      <div
        className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-line-soft/60"
        aria-hidden="true"
      >
        <div
          className="h-full bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-line-soft bg-ink-deep/95 backdrop-blur-md">
        <div className="shell flex h-full items-center justify-between">
          <a
            href="#top"
            className="group flex items-baseline gap-1.5 text-white transition-colors hover:text-accent"
            aria-label={`${SITE.brand} — back to top`}
          >
            <span className="font-heading text-lg font-bold tracking-[-0.04em] sm:text-xl">
              {SITE.wordmark}
            </span>
            <MonoArrow className="h-3.5 w-2.5 self-center transition-transform duration-300 group-hover:translate-x-[3px]" />
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.2em] text-dim lg:inline">
              {SITE.descriptor}
            </span>

            <ColorChanger />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="group flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[6px] border border-line bg-surface transition-colors hover:border-accent"
            >
              <motion.span
                className="block h-[2px] w-5 bg-white transition-colors group-hover:bg-accent"
                animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease }}
              />
              <motion.span
                className="block h-[2px] w-3.5 self-center bg-white transition-colors group-hover:bg-accent"
                animate={menuOpen ? { rotate: -45, y: -4, width: 20 } : { rotate: 0, y: 0, width: 14 }}
                transition={{ duration: 0.25, ease }}
              />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="site-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease }}
              className="fixed inset-x-0 top-16 z-40 h-[calc(100svh-4rem)] overflow-y-auto border-t border-line-soft bg-ink-deep/95 backdrop-blur-xl"
            >
              <div className="shell grid gap-12 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
                <nav aria-label="Section navigation" className="flex flex-col">
                  <span className="kicker mb-6 text-dim">[ SITE NAVIGATION ]</span>
                  {NAV_LINKS.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.035, ease }}
                      className="row-invert group flex items-center justify-between border-b border-line-soft px-2 py-3.5 text-white"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[0.68rem] tracking-[0.2em] text-dim group-hover:text-accent-ink">
                          {link.num}
                        </span>
                        <span className="font-heading text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                          {link.label}
                        </span>
                      </span>
                      <MonoArrow className="h-4 w-3 opacity-40 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </nav>

                <div className="flex flex-col justify-between gap-10 border-line-soft lg:border-l lg:pl-16">
                  <div className="flex flex-col gap-6">
                    <span className="kicker text-dim">[ STUDIO ]</span>
                    <dl className="mono-label grid gap-4">
                      <div>
                        <dt className="text-dim">Email</dt>
                        <dd>
                          <a className="link-underline" href={SITE.emailHref}>
                            {SITE.email}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-dim">Phone</dt>
                        <dd>
                          <a className="link-underline" href={SITE.phoneHref}>
                            {SITE.phone}
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-dim">Studio</dt>
                        <dd>
                          {SITE.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </dl>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                      {SOCIAL_LINKS.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="kicker link-underline text-muted hover:text-white"
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="group flex items-center justify-between bg-accent px-5 py-4 text-accent-ink transition-colors hover:bg-white"
                  >
                    <span className="mono-label font-bold">&gt;&gt; START A PROJECT</span>
                    <MonoArrow className="h-3.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
