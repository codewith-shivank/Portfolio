import MonoArrow from './ui/MonoArrow';
import { NAV_LINKS, SITE, SOCIAL_LINKS } from '../data/monodrift';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="section-ink-2 border-t border-line pt-16">
      <div className="shell flex flex-col gap-14 pb-14">
        <div className="flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
          <a
            href="#top"
            className="group flex items-baseline gap-2 text-white transition-colors hover:text-accent"
          >
            <span className="display display-xl">{SITE.wordmark}</span>
            <MonoArrow className="h-5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5 sm:h-7 sm:w-5" />
          </a>
          <span className="kicker text-muted">{SITE.tagline}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <span className="kicker text-dim">[ SITEMAP ]</span>
            <nav aria-label="Footer navigation" className="mt-5 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mono-label link-underline text-muted transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="kicker text-dim">[ STUDIO ]</span>
            <div className="mono-label mt-5 flex flex-col gap-2.5 text-muted">
              {SITE.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span>{SITE.city}</span>
            </div>
          </div>

          <div>
            <span className="kicker text-dim">[ CONTACT ]</span>
            <div className="mono-label mt-5 flex flex-col gap-2.5">
              <a href={SITE.emailHref} className="link-underline hover:text-accent">
                {SITE.email}
              </a>
              <a href={SITE.phoneHref} className="link-underline text-muted hover:text-accent">
                {SITE.phone}
              </a>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-muted hover:text-accent"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="kicker text-dim">[ NEXT STEP ]</span>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              One call, one page of decisions, and the work starts the same week.
            </p>
            <a
              href="#contact"
              className="group flex items-center justify-between bg-accent px-5 py-4 text-accent-ink transition-colors hover:bg-white"
            >
              <span className="mono-label font-bold">&gt;&gt; START A PROJECT</span>
              <MonoArrow className="h-3.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="mono-label text-dim">
            © {CURRENT_YEAR} {SITE.brand}® — {SITE.tagline}
          </span>
          <div className="mono-label flex flex-wrap items-center gap-x-6 gap-y-2 text-muted">
            <span>{SITE.replyTime} reply</span>
            <a href="#top" className="link-underline hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
