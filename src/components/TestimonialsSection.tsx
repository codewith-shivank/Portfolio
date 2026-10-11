import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: '-80px',
  });
  const isGridInView = useInView(gridRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative bg-[#0e0e0e] overflow-hidden border-b border-[#222]"
    >
      {/* Dynamic Progress Bar */}
      <motion.div
        className="h-[2px] origin-left"
        style={{ backgroundColor: 'var(--color-accent)' }}
        variants={barVariants}
        initial="hidden"
        animate={isHeadingInView ? 'visible' : 'hidden'}
      />

      <div className="py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Bracket Label */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeadingInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <span className="font-['Fragment_Mono'] text-[11px] tracking-[0.2em] text-white/40 uppercase">
              [ 06 / SAYS WHO? ]
            </span>
          </motion.div>

          {/* Massive Heading */}
          <motion.div
            className="mt-6 mb-4"
            variants={headingVariants}
            initial="hidden"
            animate={isHeadingInView ? 'visible' : 'hidden'}
          >
            <h2 className="font-['Tektur'] text-white text-[clamp(3rem,10vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-tighter">
              CLIENT
              <br />
              WORDS.
            </h2>
          </motion.div>

          {/* Dynamic Underline */}
          <motion.div
            className="h-[3px] origin-left mb-16 max-w-[320px]"
            style={{ backgroundColor: 'var(--color-accent)' }}
            variants={barVariants}
            initial="hidden"
            animate={isHeadingInView ? 'visible' : 'hidden'}
          />

          {/* Bento Grid */}
          <motion.div
            ref={gridRef}
            variants={containerVariants}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
          >
            {/* Card 1 — Tall Column */}
            <motion.div
              variants={cardVariants}
              className="bg-[#141414] border border-[#262626] p-8 flex flex-col justify-between lg:row-span-2 group hover:border-[#444] transition-colors"
            >
              <div>
                <span className="font-['Fragment_Mono'] text-[10px] text-[#555] uppercase block mb-4">
                  [ VERIFIED TESTIMONIAL 01 ]
                </span>
                <p className="font-['Figtree'] text-white/90 text-base sm:text-lg leading-relaxed">
                  {TESTIMONIALS_DATA[0].quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#222] flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Tektur'] text-xs font-bold text-[#0e0e0e]"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {TESTIMONIALS_DATA[0].initials}
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {TESTIMONIALS_DATA[0].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/40 text-[10px] tracking-wider uppercase mt-0.5">
                    {TESTIMONIALS_DATA[0].title}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#141414] border border-[#262626] p-8 flex flex-col justify-between group hover:border-[#444] transition-colors"
            >
              <div>
                <span className="font-['Fragment_Mono'] text-[10px] text-[#555] uppercase block mb-4">
                  [ VERIFIED TESTIMONIAL 02 ]
                </span>
                <p className="font-['Figtree'] text-white/90 text-base leading-relaxed">
                  {TESTIMONIALS_DATA[1].quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#222] flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Tektur'] text-xs font-bold text-[#0e0e0e]"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {TESTIMONIALS_DATA[1].initials}
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {TESTIMONIALS_DATA[1].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/40 text-[10px] tracking-wider uppercase mt-0.5">
                    {TESTIMONIALS_DATA[1].title}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Graphic Technical Badge */}
            <motion.div
              variants={cardVariants}
              className="bg-[#181818] border border-[#262626] p-8 flex flex-col justify-between items-center text-center"
            >
              <div className="font-['Fragment_Mono'] text-[10px] text-[#666] uppercase tracking-widest w-full text-left">
                [ PRODUCTION STANDARDS ]
              </div>
              <div className="my-6">
                <div
                  className="w-20 h-20 rounded-full border-2 border-dashed flex items-center justify-center p-2 mx-auto"
                  style={{ borderColor: 'var(--color-accent)' }}
                >
                  <span className="font-['Tektur'] text-2xl font-bold text-white">100%</span>
                </div>
                <div className="font-['Tektur'] text-sm font-bold uppercase text-white mt-4">
                  ZERO REGRESSION POLICY
                </div>
                <div className="font-['Fragment_Mono'] text-[10px] text-[#777] uppercase mt-1">
                  TYPE SAFETY · TELEMETRY TRACED
                </div>
              </div>
              <div className="font-['Fragment_Mono'] text-[9px] text-[#555] uppercase">
                MONODRIFT CERTIFIED BUILD
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#141414] border border-[#262626] p-8 flex flex-col justify-between group hover:border-[#444] transition-colors"
            >
              <div>
                <span className="font-['Fragment_Mono'] text-[10px] text-[#555] uppercase block mb-4">
                  [ VERIFIED TESTIMONIAL 03 ]
                </span>
                <p className="font-['Figtree'] text-white/90 text-base leading-relaxed">
                  {TESTIMONIALS_DATA[2].quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#222] flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Tektur'] text-xs font-bold text-[#0e0e0e]"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {TESTIMONIALS_DATA[2].initials}
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {TESTIMONIALS_DATA[2].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/40 text-[10px] tracking-wider uppercase mt-0.5">
                    {TESTIMONIALS_DATA[2].title}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 — Spanning 2 columns */}
            <motion.div
              variants={cardVariants}
              className="bg-[#141414] border border-[#262626] p-8 flex flex-col justify-between lg:col-span-2 group hover:border-[#444] transition-colors"
            >
              <div>
                <span className="font-['Fragment_Mono'] text-[10px] text-[#555] uppercase block mb-4">
                  [ VERIFIED TESTIMONIAL 04 ]
                </span>
                <p className="font-['Figtree'] text-white/90 text-base sm:text-xl leading-relaxed max-w-[720px]">
                  {TESTIMONIALS_DATA[3].quote}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#222] flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-['Tektur'] text-xs font-bold text-[#0e0e0e]"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {TESTIMONIALS_DATA[3].initials}
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {TESTIMONIALS_DATA[3].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/40 text-[10px] tracking-wider uppercase mt-0.5">
                    {TESTIMONIALS_DATA[3].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
