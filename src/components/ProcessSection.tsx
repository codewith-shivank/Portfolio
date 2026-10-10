import { motion } from 'framer-motion';

const PROCESS_STEPS = ['Research', 'Design', 'Build', 'Refine'];

export default function ProcessSection() {
  return (
    <section id="process" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <div>
            <span className="bracket-label">Approach</span>
            <div className="mt-3 h-[2px] w-16 bg-[#52ff9d]" />
          </div>
          <div>
            <p className="mb-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]">
              [ PROCESS ]
            </p>
            <h2 className="mb-12 font-['Tektur'] text-4xl font-bold uppercase leading-[0.95] sm:text-6xl">
              HOW THE WORK
              <br />
              <span className="green-highlight">TAKES SHAPE.</span>
            </h2>
            <div className="grid grid-cols-1 border-t border-[#e6e6e3] sm:grid-cols-2">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="border-b border-[#e6e6e3] py-6 sm:pr-8"
                >
                  <span className="font-['Fragment_Mono'] text-xs text-[#52a976]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-['Tektur'] text-xl font-bold uppercase">
                    {step}
                  </h3>
                  <p className="mt-2 min-h-5 font-['Figtree'] text-sm text-[#8a8a8a]">
                    Add a short description.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
