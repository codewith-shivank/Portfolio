import { motion } from 'framer-motion';
import { PERSONAL_DETAILS } from '../data/portfolioData';

const FOOTER_LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Profile', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Approach', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Words', href: '#testimonials' },
  { label: 'Notes', href: '#notes' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-5 pb-8 pt-16 sm:px-8 lg:px-12 border-t border-[#222]">
      <div className="mx-auto max-w-[1600px]">
        {/* Top bar with quick navigation & social links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 pb-12 border-b border-[#1c1c1c]">
          <div>
            <span className="font-['Fragment_Mono'] text-[10px] text-[#555] uppercase tracking-widest block mb-4">
              [ SITE NAVIGATION ]
            </span>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-['Fragment_Mono'] text-xs uppercase tracking-wider text-[#888] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noreferrer"
              className="font-['Fragment_Mono'] text-xs uppercase text-[#888] hover:text-white transition-colors"
            >
              GitHub &nearr;
            </a>
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-['Fragment_Mono'] text-xs uppercase text-[#888] hover:text-white transition-colors"
            >
              LinkedIn &nearr;
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="font-['Fragment_Mono'] text-xs uppercase text-[#888] hover:text-white transition-colors"
            >
              Email &nearr;
            </a>
            <a
              href="#top"
              className="font-['Fragment_Mono'] text-xs uppercase tracking-wider px-3 py-1.5 border border-[#2a2a2a] hover:border-white text-white transition-colors"
            >
              TOP &uarr;
            </a>
          </div>
        </div>

        {/* Monodrift Massive Footer Brand Graphic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden py-10 sm:py-16 select-none"
          aria-label="Monodrift Shivank Brandmark"
        >
          <div className="footer-logo-huge text-[clamp(3.5rem,15vw,13.5rem)] font-bold uppercase tracking-tighter leading-none text-[#1a1a1a] flex items-baseline">
            <span>{PERSONAL_DETAILS.name}</span>
            <span style={{ color: 'var(--color-accent)' }}>.</span>
          </div>
        </motion.div>

        {/* Bottom Metadata & System Status */}
        <div className="border-t border-[#1c1c1c] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-['Fragment_Mono'] text-[10px] uppercase text-[#666]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <span className="text-white">SYSTEM ONLINE</span>
            </div>
            <span>•</span>
            <span>MONODRIFT ENGINE 2026</span>
          </div>

          <div>
            &copy; 2026 {PERSONAL_DETAILS.fullName}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
