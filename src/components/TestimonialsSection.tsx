import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  quote: string;
  name?: string;
  title?: string;
  initials?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"They treated our brand like it was their own — and it shows in every screen. Six months in, we still haven\'t found a page that feels off-system or an asset we had to fix ourselves."',
    name: "Emilia Park",
    title: "HEAD OF BRAND | IYI CLINIC",
    initials: "EP",
  },
  {
    quote:
      '"Handover was clean enough that our own devs asked who built it. Named layers, sensible components, documented decisions — we extended the site in-house without a single support call."',
    name: "Erik Sandberg",
    title: "MARKETING DIRECTOR | NORSKIN",
    initials: "ES",
  },
  {
    quote:
      '"They stayed close through engineering, so the detail actually shipped. The empty states, the loading screens, the error copy — the parts nobody sees."',
    initials: "JR",
  },
  {
    quote:
      '"Feedback rounds got shorter because the first version was already close. We went from five revision cycles with our last agency to two, and the second one was mostly us saying yes."',
    name: "Samuel O'Neill",
    title: "FOUNDER | DRIFTLINE",
    initials: "SO",
  },
];

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
    margin: "-80px",
  });
  const isGridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0e0e0e] overflow-hidden"
    >
      {/* Green Progress Bar */}
      <motion.div
        className="h-[2px] bg-[#52ff9d] origin-left"
        variants={barVariants}
        initial="hidden"
        animate={isHeadingInView ? "visible" : "hidden"}
      />

      <div className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
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
              [ SAYS WHO? ]
            </span>
          </motion.div>

          {/* Massive Heading */}
          <motion.div
            className="mt-8 mb-4"
            variants={headingVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
          >
            <h2 className="font-['Tektur'] text-white text-[clamp(3.5rem,12vw,11rem)] font-bold uppercase leading-[0.85] tracking-tighter">
              CLIENT
              <br />
              WORDS
            </h2>
          </motion.div>

          {/* Green Underline */}
          <motion.div
            className="h-[3px] bg-[#52ff9d] origin-left mb-20 max-w-[320px]"
            variants={barVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
          />

          {/* Bento Grid */}
          <motion.div
            ref={gridRef}
            variants={containerVariants}
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
          >
            {/* Card 1 — Tall */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col justify-between lg:row-span-2"
            >
              <p className="font-['Figtree'] text-white/80 text-base leading-relaxed">
                {testimonials[0].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="font-['Tektur'] text-[#52ff9d] text-xs font-bold">
                    {testimonials[0].initials}
                  </span>
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {testimonials[0].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/30 text-[10px] tracking-wider uppercase mt-0.5">
                    {testimonials[0].title}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="font-['Figtree'] text-white/80 text-base leading-relaxed">
                {testimonials[1].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="font-['Tektur'] text-[#52ff9d] text-xs font-bold">
                    {testimonials[1].initials}
                  </span>
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {testimonials[1].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/30 text-[10px] tracking-wider uppercase mt-0.5">
                    {testimonials[1].title}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Photo Placeholder — portrait between cards */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.04] rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/[0.08] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <span className="font-['Fragment_Mono'] text-[10px] text-white/20 tracking-wider uppercase">
                  Portrait
                </span>
              </div>
            </motion.div>

            {/* Card 3 — no attribution */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="font-['Figtree'] text-white/80 text-base leading-relaxed">
                {testimonials[2].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="font-['Tektur'] text-[#52ff9d] text-xs font-bold">
                    {testimonials[2].initials}
                  </span>
                </div>
                <div>
                  <p className="font-['Fragment_Mono'] text-white/30 text-[10px] tracking-wider uppercase">
                    Anonymous
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Photo Placeholder 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.04] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center lg:col-span-1"
            >
              <div className="w-full h-full bg-gradient-to-tr from-white/[0.06] to-white/[0.02] flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-white/[0.08] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                    />
                  </svg>
                </div>
                <span className="font-['Fragment_Mono'] text-[10px] text-white/20 tracking-wider uppercase">
                  Photo
                </span>
              </div>
            </motion.div>

            {/* Card 4 — spans 2 cols on large */}
            <motion.div
              variants={cardVariants}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 flex flex-col justify-between lg:col-span-2"
            >
              <p className="font-['Figtree'] text-white/80 text-lg md:text-xl leading-relaxed max-w-[680px]">
                {testimonials[3].quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="font-['Tektur'] text-[#52ff9d] text-xs font-bold">
                    {testimonials[3].initials}
                  </span>
                </div>
                <div>
                  <p className="font-['Tektur'] text-white text-xs font-bold uppercase tracking-wider">
                    {testimonials[3].name}
                  </p>
                  <p className="font-['Fragment_Mono'] text-white/30 text-[10px] tracking-wider uppercase mt-0.5">
                    {testimonials[3].title}
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
