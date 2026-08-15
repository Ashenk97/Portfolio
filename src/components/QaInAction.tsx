import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeader from './interactive/SectionHeader';
import { qaInAction } from '../data/content';

const CODE_LINES = [
  "import { test, expect } from '@playwright/test';",
  '',
  "test('login flow', async ({ page }) => {",
  "  await page.goto('/login');",
  "  await page.getByLabel('Email').fill('qa@genki.dev');",
  "  await page.getByRole('button', { name: 'Sign in' }).click();",
  "  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();",
  '});',
];

const TERMINAL_FRAMES = [
  ['$ npx playwright test homepage.spec.ts', 'Running 1 test using 1 worker'],
  ['$ npx playwright test homepage.spec.ts', 'Running 1 test using 1 worker', '  ✓ login flow (1.2s)'],
  [
    '$ npx playwright test homepage.spec.ts',
    'Running 1 test using 1 worker',
    '  ✓ login flow (1.2s)',
    '  1 passed (2.0s)',
  ],
];

function AnimatedRun() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setSignedIn(true);
      return;
    }
    const timer = window.setInterval(() => {
      setStep((current) => {
        const next = (current + 1) % 8;
        setSignedIn(next >= 4);
        return next;
      });
    }, 900);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const cursorX = signedIn ? 58 : 70;
  const cursorY = signedIn ? 42 : 58;
  const logs = TERMINAL_FRAMES[Math.min(Math.floor(step / 3), TERMINAL_FRAMES.length - 1)];

  return (
    <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
      <pre className="overflow-x-auto border-b border-line bg-void p-4 font-mono text-[11px] leading-6 text-mist lg:border-b-0 lg:border-r">
        {CODE_LINES.map((line, index) => (
          <div key={index} className={index === Math.min(step + 2, CODE_LINES.length - 1) ? 'text-signal' : ''}>
            <span className="me-3 text-line">{String(index + 1).padStart(2, '0')}</span>
            {line || ' '}
          </div>
        ))}
      </pre>
      <div className="relative min-h-[220px] bg-ink p-5">
        <div className="rounded-lg border border-line bg-panel p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">app.local</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={signedIn ? 'dash' : 'login'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-4"
            >
              {signedIn ? (
                <>
                  <h3 className="text-lg font-bold">Dashboard</h3>
                  <p className="mt-1 text-sm text-mist">Coverage 94% · 1 passed</p>
                </>
              ) : (
                <>
                  <label className="block text-xs text-mist">Email</label>
                  <div className="mt-1 rounded-md border border-line bg-void px-3 py-2 font-mono text-xs">
                    qa@genki.dev
                  </div>
                  <div className="mt-3 inline-flex rounded-md bg-signal px-3 py-1.5 text-xs font-semibold text-signal-fg">
                    Sign in
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.span
          aria-hidden
          className="pointer-events-none absolute h-4 w-4 rounded-full border-2 border-ember bg-ember/30"
          animate={{ left: `${cursorX}%`, top: `${cursorY}%` }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        />
      </div>
    </div>
  );
}

export default function QaInAction() {
  const hasMedia = Boolean(qaInAction.mediaSrc);

  return (
    <section id="lab" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeader
          kicker="QA in action"
          title="Watch the suite drive the browser, then print a green run."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_0_0_1px_rgb(62_224_197_/_0.08)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-mist/40" />
            <p className="ms-3 font-mono text-[11px] text-mist">
              Playwright · Chromium · {qaInAction.fileName}
            </p>
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
            <AnimatedRun />
          )}
          {!hasMedia ? (
            <div className="border-t border-line bg-void px-4 py-3 font-mono text-[11px] leading-6 text-mist">
              <AnimatedTerminal />
            </div>
          ) : null}
        </div>
        <p className="mt-4 font-mono text-[11px] text-mist/70">
          Drop a looping recording at <code>public/media/playwright-run.mp4</code> and set{' '}
          <code>qaInAction.mediaSrc</code> to swap this mockup.
        </p>
      </div>
    </section>
  );
}

function AnimatedTerminal() {
  const reduceMotion = useReducedMotion();
  const [frame, setFrame] = useState(reduceMotion ? TERMINAL_FRAMES.length - 1 : 0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % TERMINAL_FRAMES.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div>
      {TERMINAL_FRAMES[frame].map((line) => (
        <p key={line} className={line.includes('passed') || line.includes('✓') ? 'text-signal' : ''}>
          {line}
        </p>
      ))}
    </div>
  );
}
