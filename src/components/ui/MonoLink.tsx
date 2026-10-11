import type { ReactNode } from 'react';
import MonoArrow from './MonoArrow';

interface MonoLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Solid accent button (primary call-to-action). */
  variant?: 'solid' | 'outline' | 'bare';
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

/**
 * Reference-style action link: `>>` chevron + tracked uppercase label.
 * Three variants are toggled around the site (hero CTA, request links, footer).
 */
export default function MonoLink({
  href,
  children,
  className = '',
  variant = 'solid',
  external = false,
  onClick,
  ariaLabel,
}: MonoLinkProps) {
  const base =
    'group mono-link inline-flex items-center gap-3 uppercase transition-colors duration-300';
  const variants: Record<string, string> = {
    solid:
      'bg-accent text-accent-ink px-5 py-3.5 hover:bg-accent-ink hover:text-accent border border-transparent',
    outline:
      'border border-current px-5 py-3.5 hover:bg-accent hover:text-accent-ink hover:border-transparent',
    bare: 'py-1',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <MonoArrow className="w-[11px] h-[17px] shrink-0 transition-transform duration-300 group-hover:translate-x-[3px]" />
      <span className="mono-label whitespace-nowrap">{children}</span>
    </a>
  );
}
