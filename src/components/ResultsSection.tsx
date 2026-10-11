import { motion } from 'framer-motion';
import { STATS_METRICS, AWARDS_LIST } from '../data/portfolioData';

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
    <section id="results" className="bg-[#f7f6f3] py-24 sm:py-32 text-[#0e0e0e] border-b border-[#d9d8d3]">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header area */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-16 mb-20">
          {/* Left: page nav label */}
          <motion.div {...fadeUp(0)}>
            <span className="font-['Fragment_Mono'] text-xs text-[#6d6d6d] uppercase tracking-widest block mb-2">
              [ 05 / RESULTS ]
            </span>
            <div
              className="w-16 h-[2px] mb-4"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <div className="font-['Fragment_Mono'] text-[11px] text-[#888]">
              METRICS: EMPIRICAL
            </div>
          </motion.div>

          {/* Right: heading + description */}
          <div>
            <motion.span {...fadeUp(0.05)} className="font-['Fragment_Mono'] text-[10px] text-[#6d6d6d] uppercase tracking-[0.1em] block mb-4">
              [ HOW CONFIDENT ARE WE? ]
            </motion.span>

            <motion.h2 {...fadeUp(0.1)} className="font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.92] text-[#0e0e0e] mb-6">
              <span
                className="inline-block text-[#0e0e0e] px-2"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                WHAT WE COUNT
              </span>
              <br />
              NOT WHAT WE CLAIM.
            </motion.h2>

            <motion.div {...fadeUp(0.15)} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 border-t border-[#d9d8d3] pt-6">
              <div>
                <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                  MEASURED OVER
                </span>
                <p className="font-['Tektur'] text-lg font-bold uppercase text-[#262626]">4+ YEARS IN PRODUCTION</p>
                <p className="font-['Figtree'] text-xs text-[#8a8a8a] mt-0.5">80+ Repositories · Every Client · Real Workloads</p>
              </div>
              <div>
                <p className="font-['Fragment_Mono'] text-xs text-[#6d6d6d] uppercase tracking-wider leading-relaxed">
                  Results speak louder than pitches. Every number here comes from delivered work, continuous telemetry, and verified production performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Left column */}
          <div className="space-y-6">
            <motion.div {...fadeUp(0.1)} className="border border-[#d9d8d3] bg-white/70 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ PRODUCTION WORK ]
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-['Tektur'] text-5xl sm:text-6xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {STATS_METRICS[0].number}
                </span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a] uppercase">PROJECTS</span>
              </div>
              <div
                className="w-full h-[1px] mb-3"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <p className="font-['Fragment_Mono'] text-xs text-[#666] uppercase tracking-wider leading-relaxed">
                {STATS_METRICS[0].description}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="border border-[#d9d8d3] bg-white/70 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ RAPID PROTOTYPING ]
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-['Tektur'] text-5xl sm:text-6xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {STATS_METRICS[1].number}
                </span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a] uppercase">VELOCITY</span>
              </div>
              <div
                className="w-full h-[1px] mb-3"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <p className="font-['Fragment_Mono'] text-xs text-[#666] uppercase tracking-wider leading-relaxed">
                {STATS_METRICS[1].description}
              </p>
            </motion.div>
          </div>

          {/* Center Column: Direct Call to Action Card */}
          <motion.div {...fadeUp(0.15)} className="border border-[#d9d8d3] bg-white p-6 sm:p-8 flex flex-col justify-between min-h-[420px]">
            <div>
              <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a] italic block mb-6">
                BETWEEN US, THE TRUTH:
              </span>
              <h3 className="font-['Tektur'] text-2xl sm:text-4xl font-bold uppercase text-[#0e0e0e] leading-[1.05]">
                EVERY NUMBER
                <br />
                HERE STARTED
                <br />
                WITH A CALL.
              </h3>
            </div>

            <div className="flex justify-center my-6">
              <div
                className="w-24 h-24 rounded-full border-2 flex items-center justify-center p-2"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <div
                  className="w-16 h-16 rounded-full border border-dashed flex items-center justify-center animate-spin"
                  style={{
                    borderColor: '#999',
                    animationDuration: '10s',
                  }}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-4 font-['Tektur'] font-bold text-sm uppercase tracking-wide transition-colors w-full justify-center"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#0e0e0e',
                }}
              >
                <span>&gt;</span>
                <span>START A PROJECT WITH SHIVANK</span>
              </a>
              <p className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider text-center mt-3">
                DIRECT CHAT · NO INTERMEDIARIES
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            <motion.div {...fadeUp(0.2)} className="border border-[#d9d8d3] bg-white/70 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ CLIENT RETENTION ]
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-['Tektur'] text-5xl sm:text-6xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {STATS_METRICS[2].number}
                </span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a] uppercase">RETURN RATE</span>
              </div>
              <div
                className="w-full h-[1px] mb-3"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <p className="font-['Fragment_Mono'] text-xs text-[#666] uppercase tracking-wider leading-relaxed">
                {STATS_METRICS[2].description}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="border border-[#d9d8d3] bg-white/70 p-6 sm:p-8">
              <span className="font-['Fragment_Mono'] text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-3">
                [ ORGANIC GROWTH ]
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="font-['Tektur'] text-5xl sm:text-6xl font-bold"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {STATS_METRICS[3].number}
                </span>
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a] uppercase">REFERRAL</span>
              </div>
              <div
                className="w-full h-[1px] mb-3"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <p className="font-['Fragment_Mono'] text-xs text-[#666] uppercase tracking-wider leading-relaxed">
                {STATS_METRICS[3].description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Awards heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-['Tektur'] text-[clamp(1.8rem,5.5vw,4.5rem)] font-bold uppercase text-[#0e0e0e] leading-[0.95] tracking-[-0.02em]">
              AWARDS &amp; RECOGNITION
            </h3>
            <span className="font-['Fragment_Mono'] text-xs text-[#888] uppercase hidden sm:inline">
              INDUSTRY HONORS
            </span>
          </div>
          <div
            className="w-full h-[2px] mt-4"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </motion.div>

        {/* Awards list */}
        <div className="mt-8 space-y-0">
          {AWARDS_LIST.map((item, i) => (
            <motion.div
              key={item.award}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center justify-between py-5 border-b border-[#d9d8d3] group hover:border-[#222] transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="font-['Tektur'] text-base sm:text-xl font-bold uppercase text-[#262626] group-hover:underline">
                    {item.award}
                  </span>
                  <span className="hidden md:inline font-['Fragment_Mono'] text-[10px] text-[#777] ml-3">
                    [{item.project}]
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-['Figtree'] text-xs sm:text-sm text-[#555] font-semibold">{item.org}</span>
                <span
                  className="font-['Fragment_Mono'] text-xs px-2 py-0.5 font-bold"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#0e0e0e',
                  }}
                >
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
