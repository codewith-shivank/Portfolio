import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

/**
 * Image with a deterministic fallback: while the file loads it fades in, and if
 * the CDN ever refuses the request the frame keeps its hairline grid and shows
 * the alt copy instead of a broken icon.
 */
export default function SmartImage({ src, alt, className = '', eager = false }: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  if (status === 'error') {
    return (
      <span className={`media-fallback ${className}`} role="img" aria-label={alt}>
        <span className="kicker">{alt}</span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setStatus('ready')}
      onError={() => setStatus('error')}
      className={`transition-opacity duration-700 ${
        status === 'ready' ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
}
