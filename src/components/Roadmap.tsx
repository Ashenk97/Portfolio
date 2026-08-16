import SectionHeader from './interactive/SectionHeader';
import { roadmap } from '../data/content';
import FadeIn from './FadeIn';

const statusLabel = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planning to do',
  future: 'Upcoming',
} as const;

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Trajectory"
          title="What's done — and what's planned next."
        />
        <ol className="relative mt-14 space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-line sm:before:left-[15px]">
          {roadmap.map((node, index) => (
            <FadeIn key={node.id} delay={index * 0.08}>
              <li className="relative grid gap-4 pl-10 sm:grid-cols-[8.5rem_1fr] sm:pl-14">
                <span
                  className={`absolute top-1.5 left-0 grid h-6 w-6 place-items-center rounded-full border ${
                    node.status === 'completed'
                      ? 'border-signal bg-signal text-signal-fg'
                      : node.status === 'planned' || node.status === 'in-progress'
                        ? 'border-mist/50 bg-ink text-mist'
                        : 'border-line bg-void text-mist'
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
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
