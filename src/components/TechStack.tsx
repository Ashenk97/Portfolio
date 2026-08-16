import { useMemo, useState } from 'react';
import { techStack, type TechItem } from '../data/content';
import FadeIn from './FadeIn';
import SectionHeader from './interactive/SectionHeader';

const CATEGORY_ORDER = [
  'Test automation',
  'API testing',
  'Test runner',
  'Assertions',
  'Performance',
  'Quality',
  'Coverage',
  'Language',
  'Database',
  'Version control',
  'Test management',
  'Editor',
  'Build',
  'Mobile',
] as const;

const LAYERS = [
  {
    id: 'all',
    label: 'All',
    categories: null,
  },
  {
    id: 'automation',
    label: 'Automation',
    categories: ['Test automation', 'API testing', 'Test runner', 'Assertions', 'Performance'],
  },
  {
    id: 'quality',
    label: 'Quality',
    categories: ['Quality', 'Coverage', 'Test management'],
  },
  {
    id: 'languages',
    label: 'Languages',
    categories: ['Language'],
  },
  {
    id: 'data',
    label: 'Data',
    categories: ['Database'],
  },
  {
    id: 'delivery',
    label: 'Delivery',
    categories: ['Version control', 'Editor', 'Build', 'Mobile'],
  },
] as const;

type LayerId = (typeof LAYERS)[number]['id'];

function groupByCategory(items: TechItem[]) {
  const groups: [string, TechItem[]][] = [];

  for (const category of CATEGORY_ORDER) {
    const inCategory = items.filter((item) => item.category === category);
    if (inCategory.length > 0) groups.push([category, inCategory]);
  }

  return groups;
}

function Toolkit() {
  const [layerId, setLayerId] = useState<LayerId>('all');
  const layer = LAYERS.find((entry) => entry.id === layerId) ?? LAYERS[0];

  const core = useMemo(() => techStack.filter((item) => item.featured), []);
  const catalog = useMemo(() => techStack.filter((item) => !item.featured), []);

  const scoped = useMemo(() => {
    if (!layer.categories) return techStack;
    const allowed = new Set(layer.categories);
    return techStack.filter((item) => allowed.has(item.category));
  }, [layer]);

  const visibleGroups = useMemo(() => {
    const source = layer.categories ? scoped : catalog;
    return groupByCategory(source);
  }, [catalog, layer.categories, scoped]);

  const showCore = layer.id === 'all';

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-signal">The toolkit</p>
          <p className="mt-3 max-w-2xl text-mist">
            Layered by how I use it — core stack first, then the catalog across automation,
            quality, languages, data, and delivery.
          </p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/80" aria-live="polite">
          {scoped.length} tools
          {layer.id !== 'all' ? ` · ${layer.label}` : ''}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Toolkit layers"
        className="mt-8 flex gap-1 overflow-x-auto border-b border-line pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {LAYERS.map((entry) => {
          const selected = layerId === entry.id;
          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setLayerId(entry.id)}
              className={`shrink-0 border-b-2 px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition ${
                selected
                  ? 'border-signal text-signal'
                  : 'border-transparent text-mist hover:text-paper'
              }`}
            >
              {entry.label}
            </button>
          );
        })}
      </div>

      {showCore && (
        <div className="mt-8">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">Core</p>
            <p className="font-mono text-[11px] text-mist/60">Daily drivers</p>
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {core.map((item) => (
              <li
                key={item.name}
                data-tech={item.name}
                className="border border-signal/35 bg-signal/10 px-4 py-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-lg font-semibold tracking-tight">{item.name}</p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                    Core
                  </span>
                </div>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
                  {item.category}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 space-y-8">
        {visibleGroups.map(([category, items]) => (
          <div key={category}>
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                {category}
              </h3>
              <span className="font-mono text-[11px] text-mist/60">{items.length}</span>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <li
                  key={item.name}
                  data-tech={item.name}
                  className={`flex items-center justify-between gap-3 border px-4 py-3 ${
                    item.featured
                      ? 'border-signal/35 bg-signal/10'
                      : 'border-line/80 bg-ink/40'
                  }`}
                >
                  <span className="font-medium tracking-tight">{item.name}</span>
                  {item.featured ? (
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal">
                      Core
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Under the hood"
          title="The full toolkit behind the suites."
        />

        <FadeIn className="mt-12">
          <Toolkit />
        </FadeIn>
      </div>
    </section>
  );
}
