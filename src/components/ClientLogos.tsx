import { motion } from 'framer-motion';

export default function ClientLogos() {
  return (
    <section className="bg-[#1c1c1c] text-white py-16 sm:py-24 border-b border-[#2a2a2a] relative select-none">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col items-center">
        {/* Top Centered Downward Chevron Stack Icon */}
        <div className="mb-12 flex flex-col items-center text-[#555]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="stroke-current">
            <path d="M6 8l6 6 6-6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 14l6 6 6-6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* The 4 Client Logos matching reference image */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center mb-16 opacity-85">
          {/* Wendrich® */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 group cursor-pointer"
          >
            <span className="w-4 h-4 rounded-full border-2 border-white/60 inline-block shrink-0" />
            <span className="font-['Figtree'] text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
              Wendrich
            </span>
            <span className="text-xs text-white/50 -mt-3 font-mono">&reg;</span>
          </motion.div>

          {/* halden* */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex items-center group cursor-pointer"
          >
            <span className="font-['Figtree'] text-3xl sm:text-4xl font-extrabold tracking-tight text-white lowercase group-hover:text-[var(--color-accent)] transition-colors">
              halden
            </span>
            <span className="text-2xl text-white/60 -mt-2 font-bold ml-0.5">*</span>
          </motion.div>

          {/* Lindholm® */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            {/* Hexagon icon */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-white shrink-0">
              <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zm0 2.3L6 7.6v6.8l6 3.3 6-3.3V7.6L12 4.3z" />
            </svg>
            <span className="font-['Tektur'] text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
              Lindholm
            </span>
            <span className="text-xs text-white/50 -mt-2 font-mono">&reg;</span>
          </motion.div>

          {/* Logisync */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            {/* Infinity link icon */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white shrink-0">
              <rect x="2" y="7" width="10" height="10" rx="5" />
              <rect x="12" y="7" width="10" height="10" rx="5" />
            </svg>
            <span className="font-['Figtree'] text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
              Logisync
            </span>
          </motion.div>
        </div>

        {/* Bottom Centered Subtitle with top & bottom hairline borders */}
        <div className="w-full max-w-xl border-y border-[#2e2e2e] py-3 text-center">
          <p className="font-['Fragment_Mono'] text-[10px] sm:text-xs text-[#8a8a8a] uppercase tracking-[0.14em]">
            MOST OF THEM FOUND US THROUGH THE LAST PROJECT WE SHIPPED.
          </p>
        </div>
      </div>
    </section>
  );
}
