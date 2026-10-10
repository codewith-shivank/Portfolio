import { motion } from 'framer-motion';

const FOOTER_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Profile', href: '#about' },
  { label: 'Approach', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] px-5 pb-8 pt-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px] border-t border-[#2a2a2a] pt-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#top"
            className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a] transition-colors hover:text-[#52ff9d]"
          >
            Back to top ↑
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden py-10"
          aria-label="Portfolio name placeholder"
        >
          <div className="footer-logo-huge text-[clamp(3rem,14vw,12rem)]">
            PORTFOLIO<span className="text-[#52ff9d]">.</span>
          </div>
        </motion.div>
        <div className="border-t border-[#2a2a2a] pt-5 font-['Fragment_Mono'] text-[9px] uppercase tracking-wider text-[#545454]">
          © PORTFOLIO
        </div>
      </div>
    </footer>
  );
}
