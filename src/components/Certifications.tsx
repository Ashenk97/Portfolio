import { certifications, credly } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

export default function Certifications() {
  const featured = certifications.filter((item) => item.featured);
  const rest = certifications.filter((item) => !item.featured);

  return (
    <section id="certifications" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Credentials"
          title="The credentials behind the strategy."
        />

        <div className="mt-12 grid gap-5">
          {featured.map((certification, index) => (
            <FadeIn key={certification.acronym} delay={index * 0.08}>
              <article
                data-cert={certification.acronym}
                className="relative overflow-hidden rounded-2xl border border-signal/40 bg-panel p-8 shadow-[0_0_0_1px_rgb(62_224_197_/_0.12)] sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/15 blur-3xl" />
                {certification.date ? (
                  <p className="font-mono text-xs text-signal">{certification.date}</p>
                ) : null}
                <h3 className={`${certification.date ? 'mt-4' : ''} text-2xl font-bold sm:text-3xl`}>
                  {certification.name}
                </h3>
                <p className="mt-2 text-lg text-signal">{certification.level}</p>
                <p className="mt-6 max-w-3xl leading-relaxed text-mist">
                  {certification.summary}
                </p>
              </article>
            </FadeIn>
          ))}

          {rest.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {rest.map((certification, index) => (
                <FadeIn key={certification.acronym} delay={0.12 + index * 0.08}>
                  <article
                    data-cert={certification.acronym}
                    className="h-full rounded-2xl border border-line bg-panel p-6 sm:p-8"
                  >
                    {certification.date ? (
                      <p className="font-mono text-xs text-signal">{certification.date}</p>
                    ) : null}
                    <h3 className={`${certification.date ? 'mt-4' : ''} text-xl font-bold`}>
                      {certification.name}
                    </h3>
                    <p className="mt-2 text-signal">{certification.level}</p>
                    <p className="mt-5 leading-relaxed text-mist">{certification.summary}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">
            Credly badges
          </p>
          <p className="mt-3 max-w-2xl text-mist">
            Official Pearson badges. Click one to verify it on Credly.
          </p>
          <ul className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credly.badges.map((badge, index) => (
              <FadeIn key={badge.id} delay={index * 0.08} className="h-full">
                <li className="h-full">
                  <a
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-credly={badge.id}
                    className="flex h-full min-h-[22rem] flex-col items-center rounded-2xl border border-line bg-panel p-6 text-center transition hover:border-signal/40"
                  >
                    <div className="flex h-36 w-36 shrink-0 items-center justify-center">
                      <img
                        src={badge.image}
                        alt={`${badge.name} Credly badge`}
                        width={160}
                        height={160}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="mt-5 min-h-[3.5rem] text-lg font-bold tracking-tight">
                      {badge.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-signal">
                      {badge.issuer}
                    </p>
                    <p className="mt-2 font-mono text-xs text-mist">{badge.date}</p>
                    <p className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-mist/80">
                      Verify on Credly
                    </p>
                  </a>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
