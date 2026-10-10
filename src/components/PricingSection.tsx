import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const features = [
  {
    label: "Active requests",
    standard: "One at a time",
    pro: "Two at a time",
  },
  {
    label: "Average turnaround",
    standard: "48 hours",
    pro: "24 hours",
  },
  {
    label: "Branding, web, campaigns",
    standard: "Included",
    pro: "Included",
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative bg-[#f7f6f3] text-[#1a1a1a] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top grid: nav sidebar + content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sidebar nav */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="sticky top-32">
              <span className="inline-block font-['Fragment_Mono'] text-xs tracking-widest uppercase text-[#1a1a1a]/50 mb-6">
                [ NAVIGATION ]
              </span>
              <nav className="flex flex-col gap-3">
                <span className="font-['Tektur'] text-sm uppercase tracking-wider font-bold text-[#1a1a1a] border-b-2 border-[#52ff9d] pb-1 w-fit">
                  Pricing
                </span>
              </nav>
            </div>
          </motion.div>

          {/* Right content */}
          <div className="lg:col-span-9">
            {/* Bracket label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              <span className="font-['Fragment_Mono'] text-xs tracking-widest uppercase text-[#1a1a1a]/50 block mb-10">
                [ WHAT DOES IT COST? ]
              </span>
            </motion.div>

            {/* Heading + details row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
              {/* Large heading with chevrons */}
              <motion.div
                className="lg:col-span-7 relative"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={2}
              >
                {/* Decorative green chevrons */}
                <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 text-[#52ff9d] font-['Tektur'] text-6xl md:text-8xl font-bold opacity-30 select-none pointer-events-none hidden md:block">
                  &gt;&gt;
                </div>

                <h2 className="font-['Tektur'] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] tracking-tight">
                  <span className="inline-block bg-[#52ff9d] text-[#1a1a1a] px-3 py-1 italic mb-2">
                    ONE FLAT FEE.
                  </span>
                  <br />
                  <span className="italic">NO SCOPE CREEP.</span>
                  <br />
                  <span className="italic">NO INVOICES.</span>
                </h2>
              </motion.div>

              {/* Details columns */}
              <motion.div
                className="lg:col-span-5 flex flex-col justify-end gap-8"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={3}
              >
                {/* Billing & Commitment */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="font-['Fragment_Mono'] text-[10px] tracking-widest uppercase text-[#1a1a1a]/50 block mb-1">
                      Billing
                    </span>
                    <span className="font-['Tektur'] text-sm uppercase font-semibold">
                      Monthly, flat
                    </span>
                  </div>
                  <div>
                    <span className="font-['Fragment_Mono'] text-[10px] tracking-widest uppercase text-[#1a1a1a]/50 block mb-1">
                      Commitment
                    </span>
                    <span className="font-['Tektur'] text-sm uppercase font-semibold">
                      None. Pause anytime
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-['Tektur'] text-xs uppercase tracking-wide leading-relaxed text-[#1a1a1a]/70">
                  SUBSCRIBE, SEND REQUESTS, GET WORK BACK. PAUSE WHEN THE QUEUE
                  IS EMPTY. CANCEL WHEN YOU ARE DONE.
                </p>
              </motion.div>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Standard card */}
              <motion.div
                className="bg-white rounded-2xl p-8 md:p-10 border border-[#1a1a1a]/10 flex flex-col justify-between"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={4}
              >
                <div>
                  <span className="font-['Tektur'] text-xs uppercase tracking-widest font-bold text-[#1a1a1a]/50 block mb-6">
                    STANDARD
                  </span>
                  <div className="mb-6">
                    <span className="font-['Tektur'] text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                      $4,995
                    </span>
                    <span className="font-['Fragment_Mono'] text-sm text-[#1a1a1a]/50 ml-1">
                      /MONTH
                    </span>
                  </div>
                  <p className="font-['Figtree'] text-sm text-[#1a1a1a]/60 leading-relaxed">
                    One designer, one queue. Every request handled in turn.
                  </p>
                </div>
                <button className="mt-8 w-full py-3 px-6 bg-[#1a1a1a] text-white font-['Tektur'] text-xs uppercase tracking-widest rounded-lg hover:bg-[#333] transition-colors duration-300">
                  Get Started
                </button>
              </motion.div>

              {/* Pro card */}
              <motion.div
                className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 border-2 border-[#52ff9d] flex flex-col justify-between relative overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={5}
              >
                {/* Subtle gradient glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#52ff9d]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-['Tektur'] text-xs uppercase tracking-widest font-bold text-white/50">
                      PRO
                    </span>
                    <span className="bg-[#52ff9d] text-[#1a1a1a] font-['Fragment_Mono'] text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                      MOST BOOKED
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="font-['Tektur'] text-4xl md:text-5xl font-bold text-[#52ff9d]">
                      $7,995
                    </span>
                    <span className="font-['Fragment_Mono'] text-sm text-white/50 ml-1">
                      /MONTH
                    </span>
                  </div>
                  <p className="font-['Figtree'] text-sm text-white/60 leading-relaxed">
                    Two slots in parallel, same team, twice the throughput.
                  </p>
                </div>
                <button className="relative z-10 mt-8 w-full py-3 px-6 bg-[#52ff9d] text-[#1a1a1a] font-['Tektur'] text-xs uppercase tracking-widest rounded-lg font-bold hover:bg-[#3de085] transition-colors duration-300">
                  Get Started
                </button>
              </motion.div>
            </div>

            {/* Feature comparison table */}
            <motion.div
              className="border-t border-[#1a1a1a]/10"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={6}
            >
              {/* Table header */}
              <div className="grid grid-cols-12 py-4 border-b border-[#1a1a1a]/10">
                <div className="col-span-6" />
                <div className="col-span-3 text-center">
                  <span className="font-['Fragment_Mono'] text-[10px] uppercase tracking-widest text-[#1a1a1a]/40">
                    Standard
                  </span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="font-['Fragment_Mono'] text-[10px] uppercase tracking-widest text-[#1a1a1a]/40">
                    Pro
                  </span>
                </div>
              </div>

              {/* Table rows */}
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 py-5 border-b border-[#1a1a1a]/10 items-center"
                >
                  <div className="col-span-6">
                    <span className="font-['Figtree'] text-sm text-[#1a1a1a]/70">
                      {feature.label}
                    </span>
                  </div>
                  <div className="col-span-3 text-center flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#1a1a1a]/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-['Fragment_Mono'] text-xs text-[#1a1a1a]/60">
                      {feature.standard}
                    </span>
                  </div>
                  <div className="col-span-3 text-center flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#52ff9d]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-['Fragment_Mono'] text-xs text-[#1a1a1a]/80 font-semibold">
                      {feature.pro}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
