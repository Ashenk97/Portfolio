import { usesPage } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

export default function Uses() {
  return (
    <section id="uses" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader as="h1" kicker="Uses" title={usesPage.headline} />
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mist">{usesPage.intro}</p>

        <div className="mt-16 space-y-16">
          {usesPage.groups.map((group, groupIndex) => (
            <FadeIn key={group.id} delay={groupIndex * 0.05}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
                  {group.title}
                </p>
                <p className="mt-2 max-w-2xl text-mist">{group.blurb}</p>
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      data-uses={item.name}
                      className="rounded-2xl border border-line bg-panel p-6"
                    >
                      <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
                      <p className="mt-3 leading-relaxed text-mist">{item.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
