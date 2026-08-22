import { experience } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader kicker="Work" title="Quality work that ships with the product." />

        <ol className="mt-12 space-y-6">
          {experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 0.06}>
              <li className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-bold tracking-tight">{job.company}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist">
                    {job.start} - {job.end}
                  </p>
                </div>
                {job.context ? (
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-mist/80">
                    {job.context}
                  </p>
                ) : null}
                <ul className="mt-3 space-y-1">
                  {job.roles.map((role) => (
                    <li key={`${role.title}-${role.start}`} className="text-signal">
                      {role.title}
                      {job.roles.length > 1 ? (
                        <span className="ml-2 font-mono text-xs text-mist">
                          {role.start} - {role.end}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-3 text-mist">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
