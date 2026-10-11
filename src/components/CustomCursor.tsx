import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE = 'a, button, input, textarea, select, [role="button"], .cursor-pointer';

export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 26, stiffness: 320, mass: 0.6 });
  const ringY = useSpring(y, { damping: 26, stiffness: 320, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(INTERACTIVE)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.body.style.cursor = '';
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[110] hidden lg:block">
      <motion.span
        className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
      />
      <motion.span
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 44 : 26,
          height: hovering ? 44 : 26,
          opacity: hovering ? 1 : 0.6,
          scale: pressed ? 0.82 : 1,
        }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
