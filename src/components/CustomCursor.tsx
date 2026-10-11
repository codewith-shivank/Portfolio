import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: coarse)').matches;
    }
    return false;
  });

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth delayed trailing physics for the outer precision ring
  const springConfig = { damping: 24, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"], [data-cursor-hover], .cursor-pointer'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden select-none">
      {/* Outer Smooth Trailing Monodrift Geometric Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full flex items-center justify-center mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          border: '1px solid rgba(255, 255, 255, 0.85)',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          scale: isClicking ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
          height: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
          backgroundColor: { duration: 0.2 },
          opacity: { duration: 0.25 },
        }}
      >
        {/* Subtle Crosshair Corners when hovering */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </div>
        )}
      </motion.div>

      {/* Instant Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 4 : 5,
          height: isHovered ? 4 : 5,
          backgroundColor: '#ffffff',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  );
}
