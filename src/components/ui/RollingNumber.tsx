import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STRIP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface RollingNumberProps {
  /** Each digit is rendered as its own rolling reel — exactly like the reference counters. */
  digits: number[];
  className?: string;
  digitClassName?: string;
  duration?: number;
}

/**
 * Odometer counter. Renders one 0–9 reel per digit and rolls the strip into
 * place once the block scrolls into view. Clicking re-rolls it.
 */
export default function RollingNumber({
  digits,
  className = '',
  digitClassName = '',
  duration = 1.35,
}: RollingNumberProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });
  const [roll, setRoll] = useState(0);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setRoll((value) => value + 1)}
      title="Re-roll counter"
      aria-label={`Counter value ${digits.join('')}. Activate to re-roll.`}
      className={`inline-flex cursor-pointer items-baseline tabular-nums ${className}`}
    >
      {digits.map((digit, index) => (
        <span key={`${digit}-${index}`} className="reel" aria-hidden="true">
          <motion.span
            key={`${roll}-${inView}`}
            className="reel-strip"
            initial={{ y: `${-(digit + 10) * 10}%` }}
            animate={{ y: inView ? `${-digit * 10}%` : `${-(digit + 10) * 10}%` }}
            transition={{
              duration,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.12,
            }}
          >
            {STRIP.map((value) => (
              <span key={value} className={digitClassName}>
                {value}
              </span>
            ))}
          </motion.span>
        </span>
      ))}
    </button>
  );
}
