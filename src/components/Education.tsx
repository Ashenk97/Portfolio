import { education } from '../data/content';
import FadeIn from './FadeIn';

export default function Education() {
  return (
    <section id="education" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">
          Studies
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Education
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <FadeIn key={item.school} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-panel p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist">
                  {item.years}
                </p>
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
