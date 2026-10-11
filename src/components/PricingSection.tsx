import { useRef, useState } from "react";
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
    label: "Active sprint requests",
    standard: "One at a time",
    pro: "Two parallel tracks",
  },
  {
    label: "Average turnaround",
    standard: "48 hours",
    pro: "24 hours",
  },
  {
    label: "Architecture & System Design",
    standard: "Included",
    pro: "Included (Priority)",
  },
  {
    label: "Full-Stack Development (React, Node, TS)",
    standard: "Included",
    pro: "Included",
  },
  {
    label: "3D / WebGL / Canvas Motion Engineering",
    standard: "Add-on",
    pro: "Included",
  },
  {
    label: "Direct Slack / Discord Access with Shivank",
    standard: "Async daily",
    pro: "Real-time sync",
  },
  {
    label: "Pause or cancel anytime",
    standard: "Yes",
    pro: "Yes",
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  const standardPrice = billingCycle === 'monthly' ? '$4,995' : '$4,250';
  const proPrice = billingCycle === 'monthly' ? '$7,995' : '$6,800';

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative bg-[#f7f6f3] text-[#1a1a1a] py-24 md:py-32 overflow-hidden border-b border-[#d9d8d3]"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
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
              <span className="inline-block font-['Fragment_Mono'] text-xs tracking-widest uppercase text-[#1a1a1a]/50 mb-2">
                [ 08 / PRICING &amp; PLANS ]
              </span>
              <div
                className="w-16 h-[2px] mb-4"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              <p className="font-['Fragment_Mono'] text-[11px] text-[#777] uppercase leading-relaxed">
                TRANSPARENT VALUE. PREDICTABLE ENGINEERING RETENTION.
              </p>

              {/* Billing Switcher */}
              <div className="mt-6 p-1 bg-[#eae9e4] border border-[#d6d5ce] flex items-center rounded-sm max-w-xs">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 py-1.5 font-['Fragment_Mono'] text-[10px] uppercase transition-colors ${
                    billingCycle === 'monthly' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#777]'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('quarterly')}
                  className={`flex-1 py-1.5 font-['Fragment_Mono'] text-[10px] uppercase transition-colors ${
                    billingCycle === 'quarterly' ? 'bg-white text-black font-bold shadow-sm' : 'text-[#777]'
                  }`}
                >
                  Quarterly (-15%)
                </button>
              </div>
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
              <span className="font-['Fragment_Mono'] text-xs tracking-widest uppercase text-[#1a1a1a]/50 block mb-6">
                [ WHAT DOES IT COST? ]
              </span>
            </motion.div>

            {/* Heading + details row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
              {/* Large heading with chevrons */}
              <motion.div
                className="lg:col-span-7 relative"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={2}
              >
                <h2 className="font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.0] tracking-tight">
                  <span
                    className="inline-block text-[#1a1a1a] px-2 mb-2"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    ONE FLAT FEE.
                  </span>
                  <br />
                  <span>NO SCOPE CREEP.</span>
                  <br />
                  <span>NO INVOICES.</span>
                </h2>
              </motion.div>

              {/* Details columns */}
              <motion.div
                className="lg:col-span-5 flex flex-col justify-end gap-6"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={3}
              >
                {/* Billing & Commitment */}
                <div className="grid grid-cols-2 gap-6 border-b border-[#d6d5ce] pb-4">
                  <div>
                    <span className="font-['Fragment_Mono'] text-[10px] tracking-widest uppercase text-[#1a1a1a]/50 block mb-1">
                      Billing
                    </span>
                    <span className="font-['Tektur'] text-sm uppercase font-bold text-[#111]">
                      Flat Subscription
                    </span>
                  </div>
                  <div>
                    <span className="font-['Fragment_Mono'] text-[10px] tracking-widest uppercase text-[#1a1a1a]/50 block mb-1">
                      Commitment
                    </span>
                    <span className="font-['Tektur'] text-sm uppercase font-bold text-[#111]">
                      Pause or Cancel Anytime
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-['Figtree'] text-xs uppercase tracking-wide leading-relaxed text-[#1a1a1a]/70">
                  SUBSCRIBE, SUBMIT TASKS, SHIP PRODUCTION CODE. PAUSE WHEN THE QUEUE IS SATISFIED.
                </p>
              </motion.div>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {/* Standard card */}
              <motion.div
                className="bg-white p-8 md:p-10 border border-[#1a1a1a]/10 flex flex-col justify-between shadow-sm"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={4}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Tektur'] text-xs uppercase tracking-widest font-bold text-[#1a1a1a]/50">
                      STANDARD SPRINT
                    </span>
                    <span className="font-['Fragment_Mono'] text-[10px] uppercase text-[#777] border border-[#e2e1dc] px-2 py-0.5">
                      1 QUEUE
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="font-['Tektur'] text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                      {standardPrice}
                    </span>
                    <span className="font-['Fragment_Mono'] text-xs text-[#1a1a1a]/50 ml-1">
                      /MONTH
                    </span>
                  </div>
                  <p className="font-['Figtree'] text-sm text-[#1a1a1a]/70 leading-relaxed">
                    One dedicated senior engineer. One active request at a time. Ideal for evolving SaaS products and startups.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="mt-8 block text-center py-3.5 px-6 bg-[#1a1a1a] text-white font-['Tektur'] text-xs uppercase tracking-widest hover:bg-[#333] transition-colors"
                >
                  &gt; BOOK STANDARD
                </a>
              </motion.div>

              {/* Pro card */}
              <motion.div
                className="bg-[#121212] p-8 md:p-10 border-2 flex flex-col justify-between relative overflow-hidden"
                style={{ borderColor: 'var(--color-accent)' }}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={5}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Tektur'] text-xs uppercase tracking-widest font-bold text-white/60">
                      PRO ACCELERATION
                    </span>
                    <span
                      className="text-[#0e0e0e] font-['Fragment_Mono'] text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                  <div className="mb-4">
                    <span
                      className="font-['Tektur'] text-4xl md:text-5xl font-bold"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {proPrice}
                    </span>
                    <span className="font-['Fragment_Mono'] text-xs text-white/50 ml-1">
                      /MONTH
                    </span>
                  </div>
                  <p className="font-['Figtree'] text-sm text-white/70 leading-relaxed">
                    Two parallel tracks, double the velocity. Complete architecture, 3D/WebGL experiences, and real-time support.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="relative z-10 mt-8 block text-center py-3.5 px-6 font-['Tektur'] text-xs uppercase tracking-widest font-bold transition-colors"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#0e0e0e',
                  }}
                >
                  &gt; BOOK PRO SPRINT
                </a>
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
                <div className="col-span-6 font-['Fragment_Mono'] text-[10px] uppercase tracking-widest text-[#1a1a1a]/50">
                  DELIVERABLE SPECIFICATION
                </div>
                <div className="col-span-3 text-center font-['Fragment_Mono'] text-[10px] uppercase tracking-widest text-[#1a1a1a]/50">
                  STANDARD
                </div>
                <div className="col-span-3 text-center font-['Fragment_Mono'] text-[10px] uppercase tracking-widest font-bold text-black">
                  PRO
                </div>
              </div>

              {/* Table rows */}
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 py-4 border-b border-[#1a1a1a]/10 items-center font-['Fragment_Mono'] text-xs"
                >
                  <div className="col-span-6 font-['Figtree'] text-sm text-[#1a1a1a]/80 font-medium">
                    {feature.label}
                  </div>
                  <div className="col-span-3 text-center text-[#1a1a1a]/60">
                    {feature.standard}
                  </div>
                  <div className="col-span-3 text-center font-bold text-black">
                    {feature.pro}
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
