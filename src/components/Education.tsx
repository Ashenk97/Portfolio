import { education } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

export default function Education() {
  return (
    <section id="education" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Studies"
          title="Education — from the B.Sc to an MSc still in motion."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <FadeIn key={`${item.school}-${item.years}`} delay={index * 0.08}>
              <article
                className={`relative h-full rounded-2xl border p-6 sm:p-8 ${
                  item.current
                    ? 'border-ember/40 bg-gradient-to-br from-panel to-ink'
                    : 'border-line bg-panel'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist">
                    {item.years}
                  </p>
                  {item.current ? (
                    <span className="rounded-full bg-ember/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ember">
                      In progress
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight">{item.school}</h3>
                <p className="mt-3 leading-relaxed text-mist">{item.credential}</p>
                {item.detail ? (
                  <p className="mt-2 font-mono text-xs text-mist/80">{item.detail}</p>
                ) : null}
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
