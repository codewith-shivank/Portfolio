import { motion } from 'framer-motion';

const FIELDS = [
  { label: 'Name', type: 'text' },
  { label: 'Email', type: 'email' },
  { label: 'Message', type: 'text' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0e0e0e] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 h-[2px] w-full bg-[#52ff9d]" />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="bracket-label">Contact</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 font-['Tektur'] text-4xl font-bold uppercase leading-[0.95] text-white sm:text-6xl"
            >
              LET'S START
              <br />
              <span className="green-highlight">A CONVERSATION.</span>
            </motion.h2>
            <p className="mt-6 max-w-md font-['Figtree'] text-sm leading-relaxed text-[#6d6d6d]">
              Add your preferred contact details when you are ready to receive messages.
            </p>
          </div>

          <div className="space-y-5">
            {FIELDS.map((field) => (
              <label key={field.label} className="block">
                <span className="mb-2 block font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#6d6d6d]">
                  {field.label}
                </span>
                {field.label === 'Message' ? (
                  <textarea
                    aria-label={field.label}
                    className="form-input min-h-32 resize-y"
                    disabled
                  />
                ) : (
                  <input
                    aria-label={field.label}
                    type={field.type}
                    className="form-input"
                    disabled
                  />
                )}
              </label>
            ))}
            <p className="font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#545454]">
              Contact form is a visual placeholder; no messages are sent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
