import { projects, type Project } from '../data/content';
import SectionHeader from './interactive/SectionHeader';
import TiltCard from './interactive/TiltCard';
import FadeIn from './FadeIn';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.status === 'featured';

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
              {isFeatured ? 'Featured' : 'Coming soon'}
            </span>
          </div>
          <h3 className="mt-5 text-2xl font-bold tracking-tight">{project.name}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-mist">{project.description}</p>
          {project.href ? (
            <a
              href={project.href}
              className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-signal hover:underline"
            >
              Open project
            </a>
          ) : (
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-mist/70">
              Case study soon
            </p>
          )}
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
          title="Projects built with the same discipline as the test suite."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
