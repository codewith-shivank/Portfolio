import { motion } from 'framer-motion';

const SKILL_GROUPS = ['Frontend', 'Backend', 'Tools & workflow'];

export default function ClientLogos() {
  return (
    <section aria-labelledby="skills-heading" className="bg-[#151515] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="bracket-label">Capabilities</span>
            <h2 id="skills-heading" className="mt-3 font-['Tektur'] text-2xl font-bold uppercase text-white sm:text-3xl">
              Skills & tools
            </h2>
          </div>
          <p className="max-w-sm font-['Figtree'] text-sm text-[#6d6d6d]">
            Add your technologies and experience levels when ready.
          </p>
        </div>
        <div className="grid grid-cols-1 border-t border-[#2a2a2a] sm:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="min-h-32 border-b border-[#2a2a2a] py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
            >
              <h3 className="font-['Fragment_Mono'] text-xs uppercase tracking-wider text-[#8a8a8a]">
                {group}
              </h3>
              <ul aria-label={`${group} skills`} className="mt-5 min-h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
