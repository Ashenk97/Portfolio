import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

const MESSAGE = 'You found the bug. You might have a QA mindset too.';

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function HiddenBug() {
  const reduceMotion = useReducedMotion();
  const found = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [ready, setReady] = useState(false);
  const x = useSpring(0, { stiffness: 260, damping: 22, mass: 0.5 });
  const y = useSpring(0, { stiffness: 260, damping: 22, mass: 0.5 });

  useEffect(() => {
    x.set(window.innerWidth - 88);
    y.set(Math.min(window.innerHeight * 0.62, window.innerHeight - 96));
    setReady(true);
  }, [x, y]);

  useEffect(() => {
    if (reduceMotion) return;

    function onMove(event: MouseEvent) {
      if (found.current) return;
      const bx = x.get();
      const by = y.get();
      const dx = bx - event.clientX;
      const dy = by - event.clientY;
      const dist = Math.hypot(dx, dy);
      if (dist >= 130 || dist === 0) return;
      const force = ((130 - dist) / 130) * 36;
      x.set(clamp(bx + (dx / dist) * force, 16, window.innerWidth - 64));
      y.set(clamp(by + (dy / dist) * force, 72, window.innerHeight - 64));
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduceMotion, x, y]);

  function onCatch() {
    found.current = true;
    setRevealed(true);
  }

  if (!ready) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50"
      style={{ x, y }}
    >
      <button
        type="button"
        aria-label="Hidden bug"
        data-hover
        onClick={onCatch}
        className="pointer-events-auto relative grid h-11 w-11 place-items-center rounded-full border border-signal/40 bg-ink/90 text-signal shadow-[0_0_24px_rgb(62_224_197_/_0.25)]"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
          <ellipse cx="16" cy="18" rx="6.5" ry="8" fill="currentColor" opacity="0.9" />
          <circle cx="16" cy="10" r="3.2" fill="currentColor" />
          <path
            d="M10 14 4 10M22 14l6-4M9 18H3M23 18h6M10 23 5 27M22 23l5 4M16 6V2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </button>

      {revealed ? (
        <>
          <span className="sr-only">{MESSAGE}</span>
          <p
            role="status"
            className="pointer-events-none absolute right-0 top-12 w-56 rounded-lg border border-signal/40 bg-panel px-3 py-2 text-xs leading-relaxed text-paper shadow-xl"
          >
            {MESSAGE}
          </p>
          <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
            {Array.from({ length: 22 }, (_, index) => (
              <i
                key={index}
                className="confetti-piece"
                style={{
                  '--dx': `${(index % 2 === 0 ? -1 : 1) * (12 + (index * 7) % 36)}px`,
                  '--delay': `${(index % 8) * 40}ms`,
                  '--hue': index % 3 === 0 ? '#3ee0c5' : index % 3 === 1 ? '#ff7a59' : '#eef3f8',
                } as CSSProperties}
              />
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
}
