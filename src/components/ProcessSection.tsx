import { motion } from 'framer-motion';
import { DEVELOPMENT_PRINCIPLES } from '../data/portfolioData';

export default function ProcessSection() {
  return (
    <section id="process" className="section-light py-24 sm:py-32 bg-[#f7f6f3] text-[#0e0e0e] border-b border-[#d9d8d3]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Left Column Bracket Label */}
          <div>
            <div className="sticky top-28">
              <span className="font-['Fragment_Mono'] text-xs uppercase tracking-widest text-[#6d6d6d] block mb-2">
                [ 04 / APPROACH ]
              </span>
              <div
                className="h-[2px] w-16 mb-4"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <div className="font-['Fragment_Mono'] text-[11px] text-[#888] space-y-1">
                <div>METHODOLOGY: RIGOROUS</div>
                <div>CYCLE: 4 STAGES</div>
                <div>BUDGET: &lt;50MS TTI</div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div>
            <p className="mb-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]">
              [ HOW THE WORK TAKES SHAPE ]
            </p>
            <h2 className="mb-12 font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.92] text-[#0e0e0e]">
              HOW HIGH-IMPACT
              <br />
              <span
                className="px-2 text-[#0e0e0e] inline-block"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                SYSTEMS TAKE SHAPE.
              </span>
            </h2>

            {/* Step Grid */}
            <div className="grid grid-cols-1 border-t border-[#d9d8d3] sm:grid-cols-2">
              {DEVELOPMENT_PRINCIPLES.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border-b border-[#d9d8d3] py-8 sm:pr-8 lg:pr-12 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-['Fragment_Mono'] text-sm font-bold px-2 py-0.5"
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          color: '#0e0e0e',
                        }}
                      >
                        PHASE {step.number}
                      </span>
                      <span className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">
                        STAGE 0{index + 1} / 04
                      </span>
                    </div>

                    <h3 className="font-['Tektur'] text-xl sm:text-2xl font-bold uppercase text-[#0e0e0e] mb-2">
                      {step.title}
                    </h3>

                    <p className="font-['Figtree'] text-xs sm:text-sm font-semibold text-[#111] mb-3">
                      {step.summary}
                    </p>

                    <p className="font-['Figtree'] text-sm text-[#555] leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#e2e1dc] flex items-center justify-between font-['Fragment_Mono'] text-[10px] text-[#777] uppercase">
                    <span>DELIVERABLE: VERIFIED CODE</span>
                    <span>100% AUDIT</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
