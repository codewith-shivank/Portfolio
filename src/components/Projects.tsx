import { motion } from 'framer-motion';

const PROJECT_SLOTS = ['01', '02', '03'];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0e0e0e] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
          <div>
            <span className="bracket-label">Projects</span>
            <div className="mt-3 h-[2px] w-16 bg-[#52ff9d]" />
          </div>
          <div>
            <p className="mb-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#545454]">
              [ SELECTED WORK ]
            </p>
            <h2 className="font-['Tektur'] text-4xl font-bold uppercase leading-[0.95] text-white sm:text-6xl">
              PROJECTS
              <br />
              <span className="green-highlight">IN PROGRESS.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECT_SLOTS.map((number, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div
                aria-label={`Empty project image placeholder ${number}`}
                className="relative aspect-[4/3] border border-[#2a2a2a] bg-[#151515]"
              >
                <span className="absolute left-4 top-4 font-['Fragment_Mono'] text-[10px] text-[#545454]">
                  {number}
                </span>
                <span className="absolute bottom-4 left-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#545454]">
                  IMAGE AREA
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between border-b border-[#2a2a2a] pb-4">
                <div>
                  <h3 className="font-['Tektur'] text-lg font-bold uppercase text-white">
                    Project title
                  </h3>
                  <p className="mt-1 font-['Figtree'] text-sm text-[#6d6d6d]">
                    Add a short project description.
                  </p>
                </div>
                <span className="font-['Fragment_Mono'] text-[10px] uppercase text-[#545454]">
                  —
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="border border-[#2a2a2a] px-2 py-1 font-['Fragment_Mono'] text-[9px] uppercase text-[#545454]">
                  Category
                </span>
                <span className="border border-[#2a2a2a] px-2 py-1 font-['Fragment_Mono'] text-[9px] uppercase text-[#545454]">
                  Year
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
