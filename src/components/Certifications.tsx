import { certifications } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Credentials"
          title="Certified in the fundamentals of software testing."
        />

        <div className="mt-12 grid gap-5">
          {certifications.map((certification, index) => (
            <FadeIn key={certification.acronym} delay={index * 0.08}>
              <article className="relative overflow-hidden rounded-2xl border border-line bg-panel p-8 shadow-[0_0_0_1px_rgb(62_224_197_/_0.08)] sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-mist">
                    {certification.issuer}
                  </p>
                  <p className="font-mono text-xs text-signal">{certification.date}</p>
                </div>
                <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                  {certification.name}
                </h3>
                <p className="mt-2 text-lg text-signal">{certification.level}</p>
                <p className="mt-2 font-mono text-sm text-mist">{certification.acronym}</p>
                <p className="mt-6 max-w-3xl leading-relaxed text-mist">
                  {certification.summary}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
