interface MonoArrowProps {
  className?: string;
  /** Chevron thickness in viewBox units. */
  weight?: number;
}

/**
 * The `>>` chevron that leads every call-to-action on the MONODRIFT® reference.
 * Drawn inline so the accent colour, weight and hover motion stay controllable.
 */
export default function MonoArrow({ className = '', weight = 2.6 }: MonoArrowProps) {
  return (
    <svg
      viewBox="0 0 22 34"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M3 3l7.5 14L3 31" />
      <path d="M11.5 3L19 17l-7.5 14" />
    </svg>
  );
}
