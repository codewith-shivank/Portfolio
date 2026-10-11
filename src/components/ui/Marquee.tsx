import type { CSSProperties, ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  trackClassName?: string;
  /** Set true to freeze the track (used by the "motion" toggles). */
  paused?: boolean;
}

/**
 * Seamless CSS marquee used for the client logos, client words and notes rails.
 * Content is duplicated once so the -50% translate loops without a jump.
 */
export default function Marquee({
  children,
  duration = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
  trackClassName = '',
  paused = false,
}: MarqueeProps) {
  const trackStyle = { '--marquee-duration': `${duration}s` } as CSSProperties;

  return (
    <div
      className={`marquee ${pauseOnHover ? 'marquee-hover-pause' : ''} ${className}`}
      data-direction={direction}
      data-paused={paused ? 'true' : 'false'}
    >
      <div className="marquee-track" style={trackStyle}>
        <div className={`marquee-group ${trackClassName}`}>{children}</div>
        <div className={`marquee-group ${trackClassName}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

interface MarqueeToggleProps {
  paused: boolean;
  onToggle: () => void;
  label?: string;
}

/** Small toggle that lets visitors stop the rails — pairs with prefers-reduced-motion. */
export function MarqueeToggle({ paused, onToggle, label = 'Motion' }: MarqueeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={paused}
      className="kicker inline-flex items-center gap-2 border border-line px-3 py-2 transition-colors hover:bg-accent hover:text-accent-ink"
    >
      <span
        aria-hidden="true"
        className={`inline-block h-2 w-2 rounded-full ${paused ? 'bg-current' : 'bg-accent'}`}
      />
      {label}: {paused ? 'Off' : 'On'}
    </button>
  );
}
