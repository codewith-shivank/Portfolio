import { motion } from 'framer-motion';
import { MANIFESTO } from '../data/monodrift';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ManifestoSection() {
  return (
    <section className="section-paper border-t border-line">
      <div className="shell py-24 sm:py-32">
        <span className="kicker text-muted">
          <span aria-hidden="true" className="text-accent">
            —
          </span>{' '}
          {MANIFESTO.kicker}
        </span>

        <div className="mt-10 flex flex-col gap-7 sm:mt-14 sm:gap-9">
          {MANIFESTO.lines.map((line, index) => (
            <motion.p
              key={line.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease }}
              className="display max-w-[26ch] text-[clamp(1.6rem,4.4vw,3.6rem)] leading-[0.98]"
            >
              {line.highlight ? <span className="hl">{line.text}</span> : line.text}
            </motion.p>
          ))}
        </div>

        <a
          href="#process"
          className="kicker link-underline mt-14 inline-flex items-center gap-2 text-muted hover:text-current"
        >
          {MANIFESTO.skip}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
