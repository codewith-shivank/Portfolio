import { motion } from 'framer-motion';

interface SplitLettersProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Running character offsets so each letter can carry its own delay. */
function wordOffsets(words: string[]) {
  const offsets: number[] = [];
  let total = 0;
  for (const word of words) {
    offsets.push(total);
    total += word.length;
  }
  return offsets;
}

/**
 * Word-by-word, letter-by-letter reveal. The reference builds its action words
 * (START A PROJECT, WATCH REEL) out of individually animated letters, so links
 * and headings here keep the same one-span-per-character structure.
 */
export default function SplitLetters({
  text,
  className = '',
  delay = 0,
  stagger = 0.022,
}: SplitLettersProps) {
  const words = text.split(' ');
  const offsets = wordOffsets(words);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {[...word].map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              className="inline-block"
              initial={{ y: '0.5em', opacity: 0 }}
              whileInView={{ y: '0em', opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + (offsets[wordIndex] + charIndex) * stagger,
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 ? (
            <span className="inline-block" aria-hidden="true">
              &nbsp;
            </span>
          ) : null}
        </span>
      ))}
    </span>
  );
}
