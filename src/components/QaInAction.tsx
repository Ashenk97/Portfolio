import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import SectionHeader from './interactive/SectionHeader';
import { github, qaInAction } from '../data/content';

type RunStatus = 'idle' | 'running' | 'passed';
type CaseStatus = 'queued' | 'running' | 'passed';

const badgeSrc = `https://github.com/${github.repo}/actions/workflows/${github.workflowFile}/badge.svg`;
const actionsHref = `https://github.com/${github.repo}/actions/workflows/${github.workflowFile}`;

function useSanityRun() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<RunStatus>('idle');
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [caseStatus, setCaseStatus] = useState<CaseStatus[]>(
    () => qaInAction.tests.map(() => 'queued'),
  );

  const script = useMemo(() => {
    const lines: { line: string; caseIndex?: number }[] = [
      { line: `$ ${qaInAction.command}` },
      { line: '' },
      { line: `Running ${qaInAction.tests.length} tests using 1 worker` },
      { line: '' },
    ];

    qaInAction.tests.forEach((item, index) => {
      lines.push({
        line: `  ✓  ${index + 1} [chromium] › ${item.file} › ${item.name} (${item.duration})`,
        caseIndex: index,
      });
    });

    lines.push({ line: '' });
    lines.push({ line: `  ${qaInAction.tests.length} passed (6.2s)` });
    return lines;
  }, []);

  const timers = useRef<number[]>([]);

  function clearTimers() {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }

  useEffect(() => () => clearTimers(), []);

  function reset() {
    clearTimers();
    setStatus('idle');
    setVisibleLines([]);
    setCaseStatus(qaInAction.tests.map(() => 'queued'));
  }

  function run() {
    if (status === 'running') return;

    if (reduceMotion) {
      setVisibleLines(script.map((entry) => entry.line));
      setCaseStatus(qaInAction.tests.map(() => 'passed'));
      setStatus('passed');
      return;
    }

    clearTimers();
    setStatus('running');
    setVisibleLines([]);
    setCaseStatus(qaInAction.tests.map(() => 'queued'));

    script.forEach((entry, index) => {
      const timer = window.setTimeout(() => {
        setVisibleLines((current) => [...current, entry.line]);
        if (entry.caseIndex !== undefined) {
          setCaseStatus((current) =>
            current.map((value, caseIndex) => {
              if (caseIndex === entry.caseIndex) return 'passed';
              if (caseIndex === entry.caseIndex + 1 && value === 'queued') return 'running';
              return value;
            }),
          );
        } else if (index === 2) {
          setCaseStatus((current) =>
            current.map((value, caseIndex) => (caseIndex === 0 ? 'running' : value)),
          );
        }
        if (index === script.length - 1) setStatus('passed');
      }, 280 + index * 320);
      timers.current.push(timer);
    });
  }

  return { status, visibleLines, caseStatus, run, reset };
}

function CaseList({ caseStatus }: { caseStatus: CaseStatus[] }) {
  return (
    <ol className="space-y-3">
      {qaInAction.tests.map((item, index) => {
        const state = caseStatus[index];
        return (
          <li key={item.id} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border font-mono text-[10px] ${
                state === 'passed'
                  ? 'border-signal bg-signal text-signal-fg'
                  : state === 'running'
                    ? 'border-ember text-ember'
                    : 'border-line text-mist'
              }`}
            >
              {state === 'passed' ? '✓' : index + 1}
            </span>
            <div>
              <p className={state === 'passed' ? 'text-paper' : 'text-mist'}>{item.name}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist/70">
                {item.file}
                {state === 'passed' ? ` · ${item.duration}` : state === 'running' ? ' · running' : ' · queued'}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function QaInAction() {
  const { status, visibleLines, caseStatus, run, reset } = useSanityRun();
  const [ready, setReady] = useState(false);
  const passedCount = caseStatus.filter((value) => value === 'passed').length;
  const hasMedia = Boolean(qaInAction.mediaSrc);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section
      id="lab"
      data-lab-ready={ready ? 'true' : 'false'}
      className="border-t border-line/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="Testing lab"
          title="This site is under test. Run the suite yourself."
        />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={actionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center overflow-hidden rounded-md border border-line bg-ink"
          >
            <img src={badgeSrc} alt="Playwright GitHub Actions status" className="h-5" height={20} />
          </a>
          <p className="font-mono text-[11px] text-mist">
            Chromium hits this site on every push to {github.repo}.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_0_0_1px_rgb(62_224_197_/_0.08)]">
          <div className="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-mist/40" />
            <p className="ms-1 font-mono text-[11px] text-mist">
              Playwright · Chromium · {qaInAction.fileName}
            </p>
            <div className="ms-auto flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] text-mist" data-testid="lab-score">
                {passedCount}/{qaInAction.tests.length} passed
              </p>
              {status === 'passed' ? (
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mist transition hover:border-signal/50 hover:text-signal"
                >
                  Reset
                </button>
              ) : (
                <button
                  type="button"
                  data-testid="run-sanity-check"
                  onClick={run}
                  disabled={status === 'running'}
                  className="rounded-full bg-signal px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-signal-fg transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'running' ? 'Running…' : 'Run Sanity Check'}
                </button>
              )}
            </div>
          </div>

          {hasMedia ? (
            <div className="bg-void">
              {qaInAction.mediaSrc.endsWith('.gif') ? (
                <img
                  src={qaInAction.mediaSrc}
                  alt="Playwright automation run"
                  className="max-h-[420px] w-full object-cover"
                />
              ) : (
                <video
                  className="max-h-[420px] w-full object-cover"
                  src={qaInAction.mediaSrc}
                  poster={qaInAction.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          ) : (
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <pre
                aria-live="polite"
                className="min-h-[280px] overflow-x-auto bg-void p-4 font-mono text-[11px] leading-6 text-mist lg:border-r lg:border-line"
              >
                {visibleLines.length === 0 ? (
                  <span className="text-mist/60">
                    $ Ready. Hit Run Sanity Check to watch the suite that guards this site.
                    <motion.span
                      aria-hidden
                      className="ms-1 inline-block h-3 w-1.5 translate-y-0.5 bg-signal"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1.1 }}
                    />
                  </span>
                ) : (
                  visibleLines.map((line, index) => (
                    <div
                      key={`${line}-${index}`}
                      className={
                        line.includes('passed') || line.includes('✓') ? 'text-signal' : ''
                      }
                    >
                      {line || ' '}
                    </div>
                  ))
                )}
              </pre>
              <div className="bg-ink p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                  Live reporter
                </p>
                <div className="mt-4">
                  <CaseList caseStatus={caseStatus} />
                </div>
                <AnimatePresence>
                  {status === 'passed' ? (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 rounded-lg border border-signal/40 bg-signal/10 px-3 py-2 font-mono text-xs text-signal"
                    >
                      3 passed (6.2s) · the gate is green
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
