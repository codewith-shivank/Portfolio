import { motion } from 'framer-motion';

export default function ShowreelSection() {
  return (
    <section aria-label="Portfolio image gallery" className="bg-[#0e0e0e] px-5 py-8 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        aria-label="Empty portfolio gallery image placeholder"
        className="relative mx-auto flex min-h-[220px] max-w-[1600px] items-end border border-[#2a2a2a] bg-[#151515] p-5 sm:min-h-[360px] sm:p-8 lg:min-h-[520px]"
      >
        <span className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#545454]">
          Gallery / image area
        </span>
        <span className="absolute right-5 top-5 font-['Fragment_Mono'] text-[10px] uppercase text-[#545454]">
          Add media when available
        </span>
      </motion.div>
    </section>
  );
}
