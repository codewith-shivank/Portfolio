interface BracketLabelProps {
  children: string;
  className?: string;
}

/** Section eyebrow in the reference's `[ LIKE THIS ]` mono treatment. */
export default function BracketLabel({ children, className = '' }: BracketLabelProps) {
  return (
    <span className={`kicker ${className}`}>
      <span aria-hidden="true" className="opacity-45">
        [&nbsp;
      </span>
      {children}
      <span aria-hidden="true" className="opacity-45">
        &nbsp;]
      </span>
    </span>
  );
}
