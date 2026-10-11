import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(24);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Kinetic Audio-Reactive Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 1200;
      canvas.height = canvas.parentElement?.clientHeight || 500;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      t += isPlaying ? 0.025 : 0.002;
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const count = 48;
      const radius = Math.min(cx, cy) * 0.65;

      // Draw subtle technical grid
      ctx.strokeStyle = '#181818';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw kinetic waveform circles
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        for (let i = 0; i <= count; i++) {
          const angle = (i / count) * Math.PI * 2;
          const noise = Math.sin(angle * 4 + t * 2 + j) * Math.cos(angle * 2 - t) * 35;
          const r = radius * (0.5 + j * 0.25) + (isPlaying ? noise : 0);
          const px = cx + Math.cos(angle) * r;
          const py = cy + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = j === 1 ? 'var(--color-accent)' : '#2e2e2e';
        ctx.lineWidth = j === 1 ? 2 : 1;
        ctx.stroke();
      }

      // Draw frequency visualizer spectrum bars at bottom
      const bars = 64;
      const barW = canvas.width / bars;
      for (let i = 0; i < bars; i++) {
        const h = isPlaying
          ? Math.abs(Math.sin(i * 0.2 + t * 3) * Math.cos(i * 0.1 - t * 2)) * 60 + 5
          : 4;
        ctx.fillStyle = i % 4 === 0 ? 'var(--color-accent)' : '#262626';
        ctx.fillRect(i * barW + 2, canvas.height - h - 10, barW - 4, h);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section aria-label="Interactive Reel & Media" className="bg-[#0e0e0e] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        {/* Editorial Title */}
        <div className="flex items-center justify-between mb-4 font-['Fragment_Mono'] text-[10px] uppercase tracking-wider text-[#8a8a8a]">
          <div className="flex items-center gap-2">
            <span>[ SHOWREEL &amp; KINETIC SYSTEM ]</span>
            <span style={{ color: 'var(--color-accent)' }}>● 4K 60FPS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>BITRATE: 48 MBPS</span>
            <span>SHADERS: GLSL WEBGL2</span>
          </div>
        </div>

        {/* Media Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-[560px] border border-[#2a2a2a] bg-[#0a0a0a] overflow-hidden flex flex-col justify-between"
        >
          {/* Canvas Background */}
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          {/* Top Overlays */}
          <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-[#0a0a0a]/90 to-transparent">
            <div className="flex items-center gap-3">
              <span className="font-['Tektur'] text-xs font-bold uppercase tracking-wider text-white">
                REEL 2026 // MONODRIFT ARCHIVE
              </span>
              <span
                className="px-2 py-0.5 font-['Fragment_Mono'] text-[9px] font-bold text-[#0e0e0e] uppercase"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                LIVE
              </span>
            </div>

            <div className="font-['Fragment_Mono'] text-xs text-[#8a8a8a]">
              00:{Math.floor(progress).toString().padStart(2, '0')}:14 / 00:03:00
            </div>
          </div>

          {/* Center Play Button Overlay */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group p-5 sm:p-7 rounded-full border border-white/20 bg-black/60 backdrop-blur-md hover:border-[var(--color-accent)] transition-all hover:scale-105"
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[var(--color-accent)]">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[var(--color-accent)] translate-x-0.5">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              )}
            </button>
          </div>

          {/* Bottom Controls Bar */}
          <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-transparent">
            {/* Scrubber Track */}
            <div
              className="w-full h-1 bg-[#222] cursor-pointer mb-4 relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProgress(((e.clientX - rect.left) / rect.width) * 100);
              }}
            >
              <div
                className="h-full relative transition-all duration-75"
                style={{
                  width: `${progress}%`,
                  backgroundColor: 'var(--color-accent)',
                }}
              >
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 font-['Fragment_Mono'] text-xs text-[#8a8a8a]">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white uppercase transition-colors"
                >
                  {isPlaying ? 'PAUSE [SPACE]' : 'PLAY [SPACE]'}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white uppercase transition-colors flex items-center gap-1"
                >
                  <span>AUDIO:</span>
                  <span style={{ color: !isMuted ? 'var(--color-accent)' : '#666' }}>
                    {isMuted ? 'MUTED' : 'ACTIVE 48KHZ'}
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-6">
                <span className="hidden sm:inline">RENDERER: GPU HARDWARE ACCELERATED</span>
                <span className="text-white">FULL-SPECTRUM</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
