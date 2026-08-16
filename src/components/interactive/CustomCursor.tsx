import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const HOVER_SELECTOR =
  'a, button, summary, [role="button"], input, textarea, select, label, [data-hover], [data-tilt]';

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const x = useSpring(0, { stiffness: 520, damping: 38, mass: 0.22 });
  const y = useSpring(0, { stiffness: 520, damping: 38, mass: 0.22 });
  const trailX = useSpring(0, { stiffness: 140, damping: 22, mass: 0.55 });
  const trailY = useSpring(0, { stiffness: 140, damping: 22, mass: 0.55 });

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
      trailX.set(event.clientX);
      trailY.set(event.clientY);
      setHasMoved(true);
      const target = event.target;
      setHovering(target instanceof Element && Boolean(target.closest(HOVER_SELECTOR)));
    }

    function onDown() {
      setPressed(true);
    }

    function onUp() {
      setPressed(false);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.classList.remove('custom-cursor-on');
    };
  }, [reduceMotion, trailX, trailY, x, y]);

  if (!enabled || !hasMoved) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[79]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.span
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/35 blur-md"
          animate={{
            width: hovering ? 36 : 22,
            height: hovering ? 36 : 22,
            opacity: hovering ? 0.55 : 0.28,
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[80]"
        style={{ x, y }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative grid place-items-center"
            animate={{ scale: pressed ? 0.82 : hovering ? 1.15 : 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20, mass: 0.35 }}
          >
            <motion.span
              className="absolute rounded-full border border-dashed border-signal/70"
              animate={{
                width: hovering ? 46 : 28,
                height: hovering ? 46 : 28,
                rotate: hovering ? 180 : 0,
                borderColor: hovering ? 'rgba(255, 122, 89, 0.7)' : 'rgba(62, 224, 197, 0.7)',
              }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            />
            <span className="absolute h-5 w-px bg-signal/90" />
            <span className="absolute h-px w-5 bg-signal/90" />
            <motion.span
              className="absolute rounded-full bg-signal shadow-[0_0_10px_rgb(62_224_197_/_0.8)]"
              animate={{
                width: hovering ? 7 : 4,
                height: hovering ? 7 : 4,
                backgroundColor: hovering ? '#ff7a59' : '#3ee0c5',
              }}
            />
            <motion.span
              className="absolute top-7 font-mono text-[8px] uppercase tracking-[0.22em] text-signal"
              animate={{ opacity: hovering ? 1 : 0, y: hovering ? 0 : -4 }}
            >
              inspect
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
