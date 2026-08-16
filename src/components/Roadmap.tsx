import { motion } from 'framer-motion';
import SectionHeader from './interactive/SectionHeader';
import { roadmap } from '../data/content';
import FadeIn from './FadeIn';

const statusLabel = {
  completed: 'Completed',
  'in-progress': 'In progress',
  future: 'Upcoming',
} as const;

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Trajectory"
          title="Current momentum toward cutting-edge QA leadership."
        />
        <ol className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-line sm:before:left-[15px]">
          {roadmap.map((node, index) => (
            <FadeIn key={node.id} delay={index * 0.08}>
              <li className="relative grid gap-4 pl-10 sm:grid-cols-[8.5rem_1fr] sm:pl-14">
                <span
                  className={`absolute top-1.5 left-0 grid h-6 w-6 place-items-center rounded-full border ${
                    node.status === 'completed'
                      ? 'border-signal bg-signal text-signal-fg'
                      : node.status === 'in-progress'
                        ? 'border-ember bg-ink text-ember'
                        : 'border-line bg-void text-mist'
                  }`}
                >
                  {node.status === 'in-progress' ? (
                    <motion.span
                      className="h-2 w-2 rounded-full bg-ember"
                      animate={{ scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
                      transition={{ repeat: Infinity, duration: 1.6 }}
                    />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-current" />
                  )}
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist">
                  {statusLabel[node.status]}
                </p>
                <article className="rounded-2xl border border-line bg-panel p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-tight">{node.title}</h3>
                  <p className="mt-1 font-mono text-xs text-signal">{node.meta}</p>
                  <p className="mt-3 leading-relaxed text-mist">{node.detail}</p>
                </article>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
