import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "WHAT TECHNOLOGIES DO YOU PRIMARILY ARCHITECT WITH?",
    answer:
      "On the client, I engineer with React 19, TypeScript strict mode, Next.js, Tailwind CSS v4, Framer Motion, and hardware-accelerated WebGL / Three.js. On the backend, I specialize in Node.js, Fastify/Express, Redis Streams, BullMQ, PostgreSQL, MongoDB, and WebSocket real-time clusters.",
  },
  {
    question: "WHAT DOES SPRINT VELOCITY AND TURNAROUND LOOK LIKE?",
    answer:
      "Most scoped requests receive their first working staging build within 24 to 48 hours. I work with trunk-based continuous integration, providing live preview URLs for every incremental milestone.",
  },
  {
    question: "CAN YOU HANDLE BOTH THE INTERFACE CRAFT AND DISTRIBUTED SYSTEMS?",
    answer:
      "Yes—that is my core differentiator. I eliminate the friction between designers and backend engineers by delivering both pixel-perfect 60 FPS interactions and resilient, transactional backend architectures.",
  },
  {
    question: "HOW DOES THE FLAT SPRINT RETAINER WORK?",
    answer:
      "Instead of unpredictability with hourly invoices or scope arguments, you subscribe to a flat monthly plan. You load tasks into our board, and I execute them in priority order. When your queue is quiet, you can pause with zero penalty.",
  },
  {
    question: "HOW DO WE COMMUNICATE AND TRACK PROGRESS?",
    answer:
      "You receive direct private access via Slack or Discord, along with GitHub pull requests and Loom video walkthroughs. No account managers or bureaucratic layers.",
  },
  {
    question: "ARE ALL PROJECTS BUILT ACCORDING TO ACCESSIBILITY AND WEB VITALS?",
    answer:
      "Without exception. Every build targets 95-100 on Google Lighthouse, sub-50ms Time-to-Interactive (TTI), WCAG AAA contrast accessibility, and zero layout shifts (CLS).",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative bg-[#f7f6f3] text-[#1a1a1a] py-24 md:py-32 overflow-hidden border-b border-[#d9d8d3]"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="font-['Fragment_Mono'] text-xs tracking-widest uppercase text-[#1a1a1a]/50 block mb-4">
            [ FREQUENTLY ASKED QUESTIONS ]
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-['Tektur'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.0] tracking-tight">
              GOT{" "}
              <span
                className="inline-block text-[#1a1a1a] px-2"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                QUESTIONS?
              </span>
            </h2>
            <p className="font-['Figtree'] text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed max-w-lg">
              Everything you need to know about working with Shivank, codebase ownership, guarantees, and availability.
            </p>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="border-t border-[#1a1a1a]/10 divide-y divide-[#1a1a1a]/10"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-6 px-4 md:px-6 text-left transition-colors duration-200 cursor-pointer group hover:bg-black/5"
                  style={{
                    backgroundColor: isOpen ? 'var(--color-accent)' : 'transparent',
                    color: '#1a1a1a',
                  }}
                >
                  <span className="font-['Tektur'] text-base md:text-lg uppercase tracking-wide font-bold pr-4">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 font-['Fragment_Mono'] text-sm"
                  >
                    {isOpen ? '—' : '+'}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                      className="overflow-hidden"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      <div className="px-4 md:px-6 pb-6 pt-0">
                        <p className="font-['Figtree'] text-sm md:text-base text-[#1a1a1a]/90 font-medium leading-relaxed max-w-3xl border-t border-black/10 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
