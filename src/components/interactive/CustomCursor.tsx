import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const HOVER_SELECTOR =
  'a, button, summary, [role="button"], input, textarea, select, label, [data-hover], [data-tilt]';

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const x = useSpring(0, { stiffness: 500, damping: 40, mass: 0.25 });
  const y = useSpring(0, { stiffness: 500, damping: 40, mass: 0.25 });

  useEffect(() => {
    const finePointer =
      window.matchMedia('(pointer: fine)').matches &&
      window.matchMedia('(hover: hover)').matches;
    if (reduceMotion || !finePointer) return;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-on');

    function onMove(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      setHasMoved(true);
      const target = event.target;
      setHovering(target instanceof Element && Boolean(target.closest(HOVER_SELECTOR)));
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.classList.remove('custom-cursor-on');
    };
  }, [reduceMotion, x, y]);

  if (!enabled || !hasMoved) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[80]"
      style={{ x, y }}
    >
      <motion.span
        className="block -translate-x-1/2 -translate-y-1/2 rounded-full border border-signal mix-blend-screen"
        animate={{
          width: hovering ? 44 : 14,
          height: hovering ? 44 : 14,
          backgroundColor: hovering ? 'rgba(62, 224, 197, 0.22)' : 'rgba(62, 224, 197, 0.08)',
        }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, mass: 0.4 }}
      />
    </motion.div>
  );
}
