import { techStack } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

const CORE = [
  {
    name: 'Playwright',
    role: 'UI & API automation',
    note: 'Fixtures, traces, and the gate that blocks bad releases.',
  },
  {
    name: 'TypeScript',
    role: 'Typed suites',
    note: 'Readable page objects and failures that stay honest.',
  },
  {
    name: 'Cursor',
    role: 'Daily IDE',
    note: 'Agents for boilerplate. I own the risk calls.',
  },
] as const;

const LAYERS = [
  {
    id: 'automate',
    label: 'Automate',
    blurb: 'Coverage that runs before merge.',
    tools: [
      'Playwright',
      'Selenium',
      'REST Assured',
      'Mocha',
      'Chai',
      'TestNG',
      'Postman',
      'Apache JMeter',
    ],
  },
  {
    id: 'assure',
    label: 'Assure',
    blurb: 'Signals that the suite still earns trust.',
    tools: ['SonarQube', 'JaCoCo', 'JIRA'],
  },
  {
    id: 'speak',
    label: 'Speak',
    blurb: 'Languages across the stack.',
    tools: ['TypeScript', 'Java', 'JavaScript', 'Python', 'Dart'],
  },
  {
    id: 'store',
    label: 'Store',
    blurb: 'Data under test.',
    tools: ['MySQL', 'MongoDB', 'Oracle'],
  },
  {
    id: 'ship',
    label: 'Ship',
    blurb: 'Build, version, and move the work.',
    tools: ['Cursor', 'GitHub', 'GitLab', 'Bitbucket', 'Maven', 'Flutter', 'Android', 'Firebase'],
  },
  {
    id: 'design',
    label: 'Design',
    blurb: 'Layouts, marks, and UI mockups.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Adobe XD'],
  },
] as const;

const knownTools = new Set(techStack.map((item) => item.name));

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Under the hood"
          title="What I reach for when coverage has to hold."
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
          Three daily drivers up top. Everything else grouped by job, so you can scan the stack
          in seconds, not scroll a catalog.
        </p>

        <FadeIn className="mt-12">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">Core</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/70">
                Daily drivers
              </p>
            </div>

            <ul className="mt-5 grid gap-px overflow-hidden border border-signal/30 bg-signal/20 md:grid-cols-3">
              {CORE.map((item) => (
                <li
                  key={item.name}
                  data-tech={item.name}
                  className="bg-ink px-5 py-6 sm:px-6 sm:py-7"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                    {item.role}
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">{item.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="mt-14" delay={0.08}>
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">
                The toolkit
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/70">
                By job
              </p>
            </div>

            <dl className="mt-5 divide-y divide-line border-y border-line">
              {LAYERS.map((layer) => (
                <div
                  key={layer.id}
                  className="grid gap-4 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8 md:grid-cols-[13rem_1fr]"
                >
                  <dt>
                    <p className="text-lg font-semibold tracking-tight">{layer.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{layer.blurb}</p>
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-1 gap-y-2">
                      {layer.tools.map((name, index) => {
                        const featured = techStack.some(
                          (item) => item.name === name && item.featured,
                        );
                        return (
                          <li key={name} className="flex items-center gap-1">
                            {index > 0 ? (
                              <span className="px-1 font-mono text-mist/35" aria-hidden="true">
                                ·
                              </span>
                            ) : null}
                            <span
                              data-tech={
                                knownTools.has(name) &&
                                !CORE.some((core) => core.name === name)
                                  ? name
                                  : undefined
                              }
                              className={
                                featured
                                  ? 'font-medium tracking-tight text-signal'
                                  : 'tracking-tight text-paper'
                              }
                            >
                              {name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
