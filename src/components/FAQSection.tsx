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
    question: "WHAT'S INCLUDED WITH THIS PORTFOLIO TEMPLATE?",
    answer:
      "The template includes a fully designed Home page, Projects showcase, Blog section, About page, and Contact form. Simply add your own content, customize the styling, and deploy.",
  },
  {
    question: "CAN I TRY BEFORE BUYING?",
    answer:
      "Yes — a live preview is available so you can explore every page and interaction before committing. The demo showcases all sections with placeholder content.",
  },
  {
    question: "DO I NEED TO WRITE CODE?",
    answer:
      "Basic familiarity with React and Tailwind CSS is helpful for customization, but the template is structured so you can swap content by editing simple data arrays and text strings — no deep coding required.",
  },
  {
    question: "CAN I USE MY OWN CONTENT AND IMAGES?",
    answer:
      "Absolutely. Every image, text block, and color is fully customizable. Drop in your own assets, update the copy, and the layout adapts automatically.",
  },
  {
    question: "DOES IT WORK ON MOBILE AND TABLET?",
    answer:
      "Yes. The template is fully responsive across all breakpoints — from mobile phones to ultra-wide monitors. Every section has been tested for touch interaction and readability.",
  },
  {
    question: "WHAT LICENSE DO I GET?",
    answer:
      "You receive a standard license that covers one personal or commercial project. Extended licenses for multi-use or client work are available upon request.",
  },
  {
    question: "DO FUTURE UPDATES COME WITH THE TEMPLATE?",
    answer:
      "Yes. All future updates, bug fixes, and new component additions are included at no extra cost for the lifetime of the product.",
  },
  {
    question: "IS THERE A QUICK START GUIDE?",
    answer:
      "A comprehensive quick-start guide is included with setup instructions, customization tips, and deployment walkthroughs for popular platforms like Vercel and Netlify.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(2); // 3rd item open by default

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative bg-[#f7f6f3] text-[#1a1a1a] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="font-['Fragment_Mono'] text-xs tracking-widest uppercase text-[#1a1a1a]/50 block mb-6">
            [ FREQUENTLY ASKED ]
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <h2 className="font-['Tektur'] text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.1] tracking-tight">
              GOT{" "}
              <span className="inline-block bg-[#52ff9d] text-[#1a1a1a] px-3 py-1">
                QUESTIONS?
              </span>
            </h2>
            <div className="flex items-end">
              <p className="font-['Figtree'] text-sm text-[#1a1a1a]/60 leading-relaxed max-w-md">
                Everything you need to know about the template, licensing, and
                how to get started. Can't find what you're looking for? Feel free
                to reach out.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="border-t border-[#1a1a1a]/10"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#1a1a1a]/10">
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full flex items-center justify-between py-5 md:py-6 px-4 md:px-6 text-left transition-colors duration-300 cursor-pointer group ${
                    isOpen
                      ? "bg-[#52ff9d] text-[#1a1a1a]"
                      : "bg-transparent text-[#1a1a1a] hover:bg-[#52ff9d]/10"
                  }`}
                >
                  <span
                    className={`font-['Tektur'] text-sm md:text-base uppercase tracking-wide font-semibold pr-4 ${
                      isOpen ? "text-[#1a1a1a]" : "text-[#1a1a1a]/80"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Chevron icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen ? "text-[#1a1a1a]" : "text-[#1a1a1a]/40"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </button>

                {/* Expandable answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                      className="overflow-hidden bg-[#52ff9d]"
                    >
                      <div className="px-4 md:px-6 pb-6 pt-0">
                        <p className="font-['Figtree'] text-sm md:text-base text-[#1a1a1a]/80 leading-relaxed max-w-2xl">
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
