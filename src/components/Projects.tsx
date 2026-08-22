import { projects, type Project } from '../data/content';
import SectionHeader from './interactive/SectionHeader';
import TiltCard from './interactive/TiltCard';
import FadeIn from './FadeIn';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.status === 'featured';
  const statusLabel = isFeatured ? 'Featured' : 'Planning to do';

  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <TiltCard className="h-full">
        <article
          data-project={project.slug}
          className={`flex h-full flex-col rounded-2xl border p-6 ${
            isFeatured
              ? 'border-ember/40 bg-gradient-to-br from-panel to-ink'
              : 'border-line bg-panel/70'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-mist">
              {project.tag}
            </p>
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                isFeatured ? 'bg-ember/15 text-ember' : 'bg-ink text-mist'
              }`}
            >
              {statusLabel}
            </span>
          </div>
          <h3 className="mt-5 text-2xl font-bold tracking-tight">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-mist">{project.description}</p>
          <dl className="mt-6 grid grid-cols-3 gap-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-line/80 bg-void/50 px-2 py-3 text-center"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold tracking-tight text-signal">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
          {project.href ? (
            <a
              href={project.href}
              className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-signal hover:underline"
            >
              Open project
            </a>
          ) : null}
        </article>
      </TiltCard>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Selected work"
          title="Defects prevented. Time saved. Not just features shipped."
        />
        <div className={`mt-12 grid gap-5 ${projects.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
