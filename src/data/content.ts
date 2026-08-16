export const profile = {
  name: 'Ashen Kavinda',
  role: 'Senior Software Quality Assurance Engineer',
  headline:
    'I lead test automation strategy and build quality systems that keep releases reliable.',
  about:
    'Senior QA engineer with a focus on automation architecture, risk-based coverage, and shipping software that holds up in production. I design Playwright and TypeScript suites, API and performance checks, and CI-backed quality gates — then partner with engineering and product to catch defects early, reduce leakage, and keep repositories maintainable as the product grows.',
  location: 'Kurunegala, Sri Lanka',
  phone: '+94 71 0948 240',
  phoneHref: 'tel:+94710948240',
  email: 'ashenk720@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashenk97/',
  personalSkills: [
    'Test strategy',
    'Automation architecture',
    'Risk-based testing',
    'Stakeholder collaboration',
    'Attention to detail',
  ],
} as const;

export const featuredCredential = {
  acronym: 'CTAL-TAE',
  issuer: 'ISTQB',
  label: 'Advanced Level · Test Automation Engineering',
  href: '/#certifications',
} as const;

export const github = {
  repo: 'Ashenk97/Portfolio',
  url: 'https://github.com/Ashenk97/Portfolio',
  workflowFile: 'playwright.yml',
} as const;

export type Certification = {
  name: string;
  level: string;
  acronym: string;
  issuer: string;
  date: string;
  summary: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    name: 'ISTQB Certified Tester',
    level: 'Advanced Level Test Automation Engineering',
    acronym: 'CTAL-TAE',
    issuer: 'ISTQB',
    date: 'Certified',
    featured: true,
    summary:
      'Advanced credential for automation architecture, maintainable test design, and CI-integrated suites — pinned next to the strategy work this site argues for.',
  },
  {
    name: 'ISTQB Certified Tester',
    level: 'Foundation Level',
    acronym: 'CTFL',
    issuer: 'SLSTB / ISTQB',
    date: 'March 2025',
    summary:
      'Foundation-level certification covering core testing principles, test design techniques, and quality processes used across the software development lifecycle.',
  },
];

export type Role = {
  title: string;
  start: string;
  end: string;
};

export type Experience = {
  company: string;
  start: string;
  end: string;
  roles: Role[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'WealthOS',
    start: 'Aug 2024',
    end: 'Present',
    roles: [
      {
        title: 'Software Quality Assurance Engineer',
        start: 'Aug 2024',
        end: 'Present',
      },
    ],
    bullets: [
      'Conduct UI and API testing to ensure software reliability and a seamless user experience.',
      'Developed and automated end-to-end test cases using Playwright with TypeScript, reducing manual effort.',
      'Implemented assertions and structured test execution with Mocha and Chai, improving test accuracy.',
      'Designed and maintained test plans, test cases, and scripts, increasing test coverage.',
      'Collaborate with developers and product teams to identify issues early and enhance software quality.',
    ],
  },
  {
    company: 'Pearson Lanka',
    start: 'Mar 2022',
    end: 'Aug 2024',
    roles: [
      {
        title: 'Software Quality Assurance Engineer',
        start: 'Apr 2023',
        end: 'Aug 2024',
      },
      {
        title: 'Associate Software Quality Assurance Engineer',
        start: 'Mar 2022',
        end: 'Mar 2023',
      },
    ],
    bullets: [
      'Performed manual UI and API testing across multiple projects, improving defect detection.',
      'Automated API tests using REST Assured, reducing regression testing time.',
      'Designed, executed, and managed test cases and defect tracking, reducing defect leakage.',
      'Conducted performance testing using Apache JMeter, identifying system bottlenecks and improving response time.',
      'Developed code coverage reports with SonarQube and JaCoCo, increasing test reliability and maintainability.',
      'Worked within an Agile/Scrum environment, collaborating with cross-functional teams to improve test strategies.',
      'Used JIRA, MySQL Workbench, IntelliJ IDEA, and Robo 3T for efficient test management.',
    ],
  },
  {
    company: 'Vidura Solutions Pvt LTD',
    start: 'May 2021',
    end: 'Nov 2021',
    roles: [
      {
        title: 'Intern — Mobile Software Engineer',
        start: 'May 2021',
        end: 'Nov 2021',
      },
    ],
    bullets: [
      'Developed mobile applications using Android (Java), Flutter, and Firebase.',
      'Contributed to UI/UX enhancements, improving app performance and user engagement.',
    ],
  },
];

export type Education = {
  school: string;
  credential: string;
  years: string;
  detail?: string;
  current?: boolean;
};

export const education: Education[] = [
  {
    school: 'SLIIT',
    credential: 'Master of Science in Information Technology',
    years: '2026 — Present',
    detail: 'In progress · deepening software engineering and quality leadership.',
    current: true,
  },
  {
    school: 'SLIIT',
    credential:
      'B.Sc (Hons) in Information Technology specializing in Software Engineering',
    years: '2018 — 2022',
  },
  {
    school: 'Wayamba Royal College',
    credential: 'G.C.E. Advanced Level',
    years: '2003 — 2016',
    detail: '2016 — ICT (C), Geography (C), English Literature (S)',
  },
];

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  status: 'featured' | 'coming-soon';
  href?: string;
  metrics: ProjectMetric[];
};

export const projects: Project[] = [
  {
    slug: 'genki',
    name: 'GENKI',
    tag: 'Brand / Commerce',
    description:
      'Streetwear and anime-inspired apparel brand. The storefront is treated like a product under test — checkout, inventory, and visual paths gated before a customer ever sees a break.',
    status: 'featured',
    metrics: [
      { value: 'Pre-launch', label: 'Visual regressions gated' },
      { value: 'Checkout', label: 'Risk-based coverage' },
      { value: 'Pipeline', label: 'Quality before the drop' },
    ],
  },
  {
    slug: 'wealthos-automation',
    name: 'Playwright E2E at WealthOS',
    tag: 'Test automation',
    description:
      'A typed Playwright architecture that replaced brittle manual regression with maintainable UI and API coverage — blocking a critical UI break before production and shrinking the wait for a green deploy.',
    status: 'coming-soon',
    metrics: [
      { value: '40%', label: 'Faster deploy confidence' },
      { value: 'Pre-prod', label: 'UI regression blocked' },
      { value: 'E2E + API', label: 'Layered coverage' },
    ],
  },
  {
    slug: 'pearson-quality',
    name: 'API & performance quality',
    tag: 'Testing',
    description:
      'REST Assured suites and JMeter profiles that cut API regression time, reduced leakage through structured cases, and surfaced bottlenecks before they reached users — with SonarQube and JaCoCo keeping the suite honest.',
    status: 'coming-soon',
    metrics: [
      { value: 'Hours back', label: 'API regression time cut' },
      { value: 'Leakage ↓', label: 'Defects caught in-cycle' },
      { value: 'JMeter', label: 'Bottlenecks before prod' },
    ],
  },
];

export type TechItem = {
  name: string;
  category: string;
  featured?: boolean;
};

export const techStack: TechItem[] = [
  { name: 'Playwright', category: 'Test automation', featured: true },
  { name: 'TypeScript', category: 'Language', featured: true },
  { name: 'Cursor', category: 'Editor', featured: true },
  { name: 'Selenium', category: 'Test automation' },
  { name: 'REST Assured', category: 'API testing' },
  { name: 'Mocha', category: 'Test runner' },
  { name: 'Chai', category: 'Assertions' },
  { name: 'TestNG', category: 'Test runner' },
  { name: 'Maven', category: 'Build' },
  { name: 'Postman', category: 'API testing' },
  { name: 'Apache JMeter', category: 'Performance' },
  { name: 'SonarQube', category: 'Quality' },
  { name: 'JaCoCo', category: 'Coverage' },
  { name: 'Java', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Oracle', category: 'Database' },
  { name: 'GitHub', category: 'Version control' },
  { name: 'GitLab', category: 'Version control' },
  { name: 'Bitbucket', category: 'Version control' },
  { name: 'JIRA', category: 'Test management' },
  { name: 'Dart', category: 'Language' },
  { name: 'Flutter', category: 'Mobile' },
];

export type CodeSnippet = {
  id: string;
  label: string;
  fileName: string;
  language: 'ts' | 'yml';
  caption: string;
  code: string;
};

export const codeSnippets: CodeSnippet[] = [
  {
    id: 'fixture',
    label: 'Playwright fixture',
    fileName: 'fixtures/portfolio.ts',
    language: 'ts',
    caption:
      'A page object wired as a fixture so sanity checks stay readable as the suite grows.',
    code: `import { test as base, expect, type Page } from '@playwright/test';

class Portfolio {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/');
    await expect(this.page.getByTestId('role-kicker')).toBeVisible();
  }

  async expectGreenLab() {
    await expect(this.page.locator('#lab')).toContainText(/3 passed/i);
  }
}

export const test = base.extend<{ portfolio: Portfolio }>({
  portfolio: async ({ page }, use) => {
    const portfolio = new Portfolio(page);
    await portfolio.goto();
    await use(portfolio);
  },
});`,
  },
  {
    id: 'mock',
    label: 'API mock',
    fileName: 'mocks/release-gate.ts',
    language: 'ts',
    caption:
      'Stub the release-gate API so UI tests stay deterministic when the backend is noisy.',
    code: `import { test, expect } from '@playwright/test';

test('release board reflects quality gates', async ({ page }) => {
  await page.route('**/api/releases/current', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        status: 'ready',
        gates: { e2e: 'passed', a11y: 'passed', perf: 'watch' },
      }),
    });
  });

  await page.goto('/releases');
  await expect(page.getByRole('status')).toHaveText(/ready/i);
  await expect(page.getByText('e2e')).toHaveAttribute('data-gate', 'passed');
});`,
  },
  {
    id: 'pipeline',
    label: 'CI pipeline',
    fileName: '.github/workflows/playwright.yml',
    language: 'yml',
    caption:
      'The same workflow that badges this lab — Chromium against the portfolio on every push.',
    code: `name: Playwright

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .node-version
          cache: npm
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm test`,
  },
];

export const nav = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#lab', label: 'Lab' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#roadmap', label: 'Roadmap' },
  { href: '/#stack', label: 'Tech stack' },
  { href: '/uses', label: 'Uses' },
] as const;

export const qaInAction = {
  fileName: 'homepage.spec.ts',
  mediaSrc: '',
  poster: '',
  command: 'npx playwright test tests/homepage.spec.ts --project=chromium',
  tests: [
    {
      id: 'intro',
      file: 'homepage.spec.ts:4',
      name: 'loads with the QA introduction',
      duration: '1.4s',
    },
    {
      id: 'sections',
      file: 'homepage.spec.ts:20',
      name: 'renders experience, lab, certifications, GENKI, and roadmap',
      duration: '2.1s',
    },
    {
      id: 'nav',
      file: 'homepage.spec.ts:70',
      name: 'primary navigation jumps to each section',
      duration: '1.8s',
    },
  ],
} as const;

export const roadmap = [
  {
    id: 'ctal-tae',
    status: 'completed' as const,
    title: 'ISTQB Advanced Level Test Automation Engineering',
    meta: 'CTAL-TAE · completed',
    detail:
      'Automation architecture, maintainable test design, and CI-integrated suites — the floor this trajectory builds on.',
  },
  {
    id: 'msc-it',
    status: 'in-progress' as const,
    title: 'Master of Science in IT',
    meta: 'SLIIT · in progress',
    detail:
      'Ongoing postgraduate study at SLIIT — compounding software engineering and quality practice on top of the B.Sc (Hons) in IT.',
  },
  {
    id: 'ai-testing',
    status: 'in-progress' as const,
    title: 'ISTQB AI Testing',
    meta: 'Exam prep in progress',
    detail:
      'Preparing for the AI Testing syllabus: evaluating ML-assisted quality, risk in non-deterministic systems, and test strategies for intelligent products.',
  },
];

export type UsesItem = {
  name: string;
  detail: string;
};

export type UsesGroup = {
  id: string;
  title: string;
  blurb: string;
  items: UsesItem[];
};

export const usesPage = {
  title: `${profile.name} · Uses`,
  description: `Hardware, editors, and the quality stack ${profile.name} uses to design suites, read traces, and ship with confidence.`,
  headline: 'The setup behind the suites.',
  intro:
    'A behind-the-scenes look at the workstation, editor, and frameworks I use to design risk-based coverage, read traces, and keep repositories maintainable. Edit the hardware line items in content.ts if a monitor or keyboard changes.',
  groups: [
    {
      id: 'workstation',
      title: 'Workstation',
      blurb: 'Windows daily driver, built for logs on one side and the spec on the other.',
      items: [
        {
          name: 'Windows workstation',
          detail:
            'Daily driver for suites, traces, and reviews. Bash in Windows Terminal — same shell this repo assumes.',
        },
        {
          name: 'Extended desktop',
          detail:
            'Product and spec on one display, Playwright traces, CI logs, and the failing assertion on the other.',
        },
        {
          name: 'Kurunegala, Sri Lanka',
          detail: 'Home base. Quiet enough to hear a flake when it shows up.',
        },
      ],
    },
    {
      id: 'editor',
      title: 'Editor & terminal',
      blurb: 'The environment I actually live in between test runs.',
      items: [
        {
          name: 'Cursor',
          detail: 'Daily-driver IDE. Agents for the boilerplate, me for the risk calls.',
        },
        {
          name: 'Windows Terminal + bash',
          detail: 'Playwright, git, and npm without leaving the keyboard.',
        },
        {
          name: 'JetBrains Mono',
          detail: 'The same monospace on this site and in the terminal — traces stay readable.',
        },
        {
          name: 'Void / signal dark theme',
          detail:
            'Ink backgrounds, signal-green passes, ember for attention. Matches the lab on this site.',
        },
        {
          name: 'IntelliJ IDEA',
          detail: 'Still the home for Java, REST Assured, TestNG, and Maven work.',
        },
      ],
    },
    {
      id: 'quality',
      title: 'Quality stack',
      blurb: 'Frameworks and runners that turn strategy into a green gate.',
      items: [
        {
          name: 'Playwright + TypeScript',
          detail: 'UI and API coverage, fixtures, and traces. This portfolio is under the same suite.',
        },
        {
          name: 'Mocha + Chai',
          detail: 'Structured execution and assertions when the runner needs to stay familiar.',
        },
        {
          name: 'REST Assured + Postman',
          detail: 'Contract-heavy API work — automated suites plus exploratory collections.',
        },
        {
          name: 'Apache JMeter',
          detail: 'Load profiles that find the bottleneck before the user does.',
        },
        {
          name: 'SonarQube + JaCoCo',
          detail: 'Coverage and maintainability signals so the suite does not rot.',
        },
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery & collaboration',
      blurb: 'Where defects, branches, and conversations actually live.',
      items: [
        {
          name: 'GitHub Actions',
          detail: 'Chromium against this site on every push. The lab badge is the live signal.',
        },
        {
          name: 'GitHub / GitLab / Bitbucket',
          detail: 'Wherever the product repository lives, the quality gate follows.',
        },
        {
          name: 'JIRA',
          detail: 'Cases, defects, and the trail from risk to resolution.',
        },
        {
          name: 'Astro + Tailwind CSS',
          detail: 'This site — static first, React islands only where motion earns the bytes.',
        },
      ],
    },
  ] satisfies UsesGroup[],
} as const;

export const site = {
  title: `${profile.name} · ${profile.role}`,
  description: `${profile.name} is a ${profile.role} who leads test automation strategy, Playwright and TypeScript suites, and CI-backed quality gates. Based in ${profile.location}.`,
} as const;
