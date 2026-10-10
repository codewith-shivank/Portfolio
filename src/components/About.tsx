import { motion } from 'framer-motion';

const PROFILE_FIELDS = ['Name', 'Location', 'Education', 'Current focus'];

export default function About() {
  return (
    <section id="about" className="section-light py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <div>
            <span className="bracket-label">Profile</span>
            <div className="mt-3 h-[2px] w-16 bg-[#52ff9d]" />
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]"
            >
              [ ABOUT ]
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 font-['Tektur'] text-4xl font-bold uppercase leading-[0.95] sm:text-6xl"
            >
              A LITTLE ABOUT
              <br />
              <span className="green-highlight">THE PERSON BEHIND THE WORK.</span>
            </motion.h2>
            <p className="max-w-2xl font-['Figtree'] text-base leading-relaxed text-[#6d6d6d]">
              Add a short introduction here when your profile copy is ready.
            </p>

            <dl className="mt-12 grid grid-cols-1 border-t border-[#e6e6e3] sm:grid-cols-2">
              {PROFILE_FIELDS.map((field) => (
                <div key={field} className="border-b border-[#e6e6e3] py-5 sm:pr-8">
                  <dt className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]">
                    {field}
                  </dt>
                  <dd aria-label={`${field} not provided`} className="mt-3 min-h-5" />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
