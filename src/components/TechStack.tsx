import { techStack } from '../data/content';
import CodeSnippets from './CodeSnippets';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Under the hood"
          title="Not just the tools — the way the suites are written."
        />
        <FadeIn className="mt-12">
          <CodeSnippets />
        </FadeIn>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.28em] text-signal">
          The toolkit
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {techStack.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.04}>
              <li
                data-tech={item.name}
                className={`rounded-xl border px-4 py-4 ${
                  item.featured
                    ? 'border-signal/50 bg-signal/10 shadow-[inset_0_0_0_1px_rgb(62_224_197_/_0.12)]'
                    : 'border-line bg-panel'
                }`}
              >
                <p className="font-semibold tracking-tight">{item.name}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
                  {item.category}
                  {item.featured ? ' · Core' : ''}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
