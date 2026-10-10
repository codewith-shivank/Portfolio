import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.7, delay, ease },
  } as const;
}

export default function ResultsSection() {
  return (
    <section id="results" className="bg-[#f7f6f3] py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header area */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-20">
          {/* Left: page nav label */}
          <motion.div {...fadeUp(0)}>
            <span className="font-['Fragment_Mono'] text-xs text-[#6d6d6d] italic">
              Results
            </span>
            <div className="w-16 h-[2px] bg-[#52ff9d] mt-2" />
          </motion.div>

          {/* Right: heading + description */}
          <div>
            <motion.span {...fadeUp(0.05)} className="font-['Fragment_Mono'] text-[10px] text-[#6d6d6d] uppercase tracking-[0.1em] block mb-4">
              [ How confident are we? ]
            </motion.span>

            <motion.h2 {...fadeUp(0.1)} className="font-['Tektur'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-[0.95] text-[#0e0e0e] mb-6">
              <span className="inline-block bg-[#52ff9d] text-[#0e0e0e] px-1">WHAT WE COUNT</span>
              <br />
              NOT WHAT WE CLAIM.
            </motion.h2>

            {/* Billing/info row */}
            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                  Measured over
                </span>
                <p className="font-['Tektur'] text-sm font-bold uppercase text-[#262626]">3 years</p>
                <p className="font-['Figtree'] text-xs text-[#8a8a8a] mt-0.5">All projects</p>
                <p className="font-['Figtree'] text-xs text-[#8a8a8a]">Every client</p>
              </div>
              <div>
                <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider leading-relaxed">
                  Results speak louder than pitches. Every number here comes from delivered work, not projections.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats grid - 3 column bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Left column */}
          <div className="space-y-4 lg:space-y-6">
            {/* Stat: 78 Projects */}
            <motion.div {...fadeUp(0.1)} className="border border-[#e6e6e3] bg-white/50 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ Projects ]
              </span>
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-full border border-[#e6e6e3] flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#c4c4c4]">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
                  <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-['Tektur'] text-5xl sm:text-6xl font-bold text-[#52ff9d]">78</span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a] uppercase">projects</span>
              </div>
              <div className="w-full h-[1px] bg-[#52ff9d] mb-3" />
              <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider leading-relaxed">
                Completed projects across branding, web, and campaign work.
              </p>
            </motion.div>

            {/* Stat: 24 Hours */}
            <motion.div {...fadeUp(0.2)} className="border border-[#e6e6e3] bg-white/50 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ Speed ]
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-['Tektur'] text-5xl sm:text-6xl font-bold text-[#52ff9d]">24</span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">Hours</span>
              </div>
              <div className="w-full h-[1px] bg-[#52ff9d] mb-3" />
              <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider leading-relaxed">
                Average first draft turnaround for active subscriptions.
              </p>
            </motion.div>
          </div>

          {/* Center column */}
          <motion.div {...fadeUp(0.15)} className="border border-[#e6e6e3] bg-white/50 p-6 sm:p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] italic block mb-6">
                Between us, the truth:
              </span>
              <h3 className="font-['Tektur'] text-2xl sm:text-3xl font-bold uppercase text-[#0e0e0e] leading-[1.05]">
                EVERY NUMBER
                <br />
                HERE STARTED
                <br />
                WITH A CALL.
              </h3>
            </div>

            {/* Icon placeholder */}
            <div className="flex justify-center my-8">
              <div className="w-20 h-20 rounded-full border border-[#e6e6e3] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#c4c4c4]">
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" />
                  <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#52ff9d] text-[#0e0e0e] font-['Tektur'] font-bold text-sm uppercase tracking-wide hover:bg-[#3dcc7d] transition-colors w-full justify-center"
              >
                <span>{'>'}</span>
                <span>START A PROJECT</span>
              </a>
              <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider mt-3">
                First step — a short call.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4 lg:space-y-6">
            {/* Stat: 95% */}
            <motion.div {...fadeUp(0.2)} className="border border-[#e6e6e3] bg-white/50 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ Retention ]
              </span>
              {/* Icon placeholder */}
              <div className="w-16 h-16 rounded-full border border-[#e6e6e3] flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#c4c4c4]">
                  <path d="M14 4 L24 14 L14 24 L4 14 Z" stroke="currentColor" strokeWidth="1" fill="none" />
                  <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-['Tektur'] text-5xl sm:text-6xl font-bold text-[#52ff9d]">95</span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">%</span>
              </div>
              <div className="w-full h-[1px] bg-[#52ff9d] mb-3" />
              <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider leading-relaxed">
                Of clients return with a second project within 12 months.
              </p>
            </motion.div>

            {/* Stat: 100 */}
            <motion.div {...fadeUp(0.25)} className="border border-[#e6e6e3] bg-white/50 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ Growth ]
              </span>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-['Tektur'] text-5xl sm:text-6xl font-bold text-[#52ff9d]">100</span>
              </div>
              <div className="w-full h-[1px] bg-[#52ff9d] mb-3" />
              <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider leading-relaxed">
                Pure organically referral-driven client acquisition.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Awards heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 sm:mt-32"
        >
          <h2 className="font-['Tektur'] text-[clamp(2rem,7vw,6rem)] font-bold uppercase text-[#0e0e0e] leading-[0.95] tracking-[-0.02em]">
            AWARDS &amp; RECOGNITION
          </h2>
          <div className="w-full h-[2px] bg-[#52ff9d] mt-4" />
        </motion.div>

        {/* Awards list */}
        <div className="mt-12 space-y-0">
          {[
            { award: 'Site of the Day', org: 'Awwwards', year: '2025' },
            { award: 'Best UI Design', org: 'CSS Design Awards', year: '2025' },
            { award: 'Developer Award', org: 'Awwwards', year: '2024' },
            { award: 'FWA of the Day', org: 'FWA', year: '2024' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-between py-5 border-b border-[#e6e6e3] group hover:border-[#52ff9d] transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-['Tektur'] text-base sm:text-lg font-bold uppercase text-[#262626] group-hover:text-[#52ff9d] transition-colors">
                  {item.award}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-['Figtree'] text-sm text-[#6d6d6d]">{item.org}</span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
