import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="bg-[#f7f6f3] text-[#0e0e0e]">
      <div className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-[1600px] grid-cols-1 gap-8 px-5 pb-8 pt-28 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12 lg:px-12 lg:pb-12 lg:pt-32">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 border-b border-[#d9d8d3] pb-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-[0.14em] text-[#6d6d6d] sm:text-xs"
          >
            PORTFOLIO <span className="text-[#52d98a]">/</span> DIGITAL WORK
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="hero-display mb-8 text-[clamp(3.1rem,9.2vw,9.5rem)]"
          >
            DESIGNING
            <br />
            <span className="bg-[#52ff9d] px-[0.08em]">DIGITAL</span>
            <br />
            EXPERIENCES.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
            className="flex flex-col gap-6 border-t border-[#d9d8d3] pt-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-lg font-['Figtree'] text-sm leading-relaxed text-[#6d6d6d] sm:text-base">
              A space for selected projects, skills, and background.
            </p>
            <a
              href="#projects"
              className="flex min-h-14 items-center justify-between gap-8 bg-[#52ff9d] px-5 py-4 font-['Tektur'] text-sm font-bold uppercase transition-colors hover:bg-[#3dcc7d] sm:min-w-64"
            >
              <span>&gt; Explore the work</span>
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          aria-label="Empty profile image placeholder"
          className="relative min-h-[300px] overflow-hidden border border-[#d9d8d3] bg-[#efeee9] lg:min-h-0"
        >
          <span className="absolute bottom-4 left-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#a09f99]">
            IMAGE AREA
          </span>
          <span className="absolute right-4 top-4 font-['Fragment_Mono'] text-[10px] text-[#a09f99]">
            01 / 01
          </span>
        </motion.div>
      </div>
    </section>
  );
}
