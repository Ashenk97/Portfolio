export const profile = {
  name: 'Ashen Kavinda',
  role: 'Senior Software Quality Assurance Engineer',
  headline:
    'I lead test automation strategy and build quality systems that keep releases reliable.',
  about:
    'I focus on automation architecture, risk-based coverage, and software that holds up in production. I design Playwright and TypeScript suites, API and performance checks, and CI quality gates. Then I work with engineering and product to catch defects early and keep the suite maintainable as the product grows.',
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

export type CredlyBadge = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  href: string;
};

export const credly = {
  badges: [
    {
      id: '32ecd447-8ccd-4539-957c-e2a8407b4395',
      name: 'Lean Awareness',
      issuer: 'Pearson',
      date: 'April 2024',
      image:
        'https://images.credly.com/images/a7b89a4b-1bc7-4a28-bcee-153c62e4552f/linkedin_thumb_blob',
      href: 'https://www.credly.com/badges/32ecd447-8ccd-4539-957c-e2a8407b4395/public_url',
    },
    {
      id: 'aca2408d-f138-4304-a927-62839457d35d',
      name: 'Pearson+ Hackathon Winner',
      issuer: 'Pearson',
      date: 'March 2023',
      image: 'https://images.credly.com/images/59a5b679-a617-4c4e-a25a-82fdd0a0a476/image.png',
      href: 'https://www.credly.com/badges/aca2408d-f138-4304-a927-62839457d35d/public_url',
    },
    {
      id: '3fa42e84-52bb-4195-a954-354e33f52177',
      name: 'Inclusive Learning Experience Explorer',
      issuer: 'Pearson',
      date: 'December 2022',
      image:
        'https://images.credly.com/images/5d80d8fc-df22-4bd7-9e9a-5518caa543c2/linkedin_thumb_image.png',
      href: 'https://www.credly.com/badges/3fa42e84-52bb-4195-a954-354e33f52177/public_url',
    },
  ] satisfies CredlyBadge[],
} as const;

export const certifications: Certification[] = [
  {
    name: 'ISTQB Certified Tester',
    level: 'Advanced Level Test Automation Engineering',
    acronym: 'CTAL-TAE',
    issuer: 'ISTQB',
    date: 'Certified',
    featured: true,
    summary:
      'The advanced credential for automation architecture, clean test design, and suites that live in CI.',
  },
  {
    name: 'ISTQB Certified Tester',
    level: 'Foundation Level',
    acronym: 'CTFL',
    issuer: 'SLSTB / ISTQB',
    date: 'March 2025',
    summary:
      'The foundation: testing principles, design techniques, and quality processes used across the software lifecycle.',
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
      'Test UI and APIs so the product stays reliable and the experience stays smooth.',
      'Build end-to-end coverage in Playwright and TypeScript, cutting the manual grind.',
      'Structure runs with Mocha and Chai so assertions stay clear and failures stay honest.',
      'Own test plans, cases, and scripts as coverage grows.',
      'Work with developers and product to catch issues early.',
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
      'Tested UI and APIs across projects, catching more defects in-cycle.',
      'Automated API checks with REST Assured, cutting regression time.',
      'Designed and ran cases, then tracked defects so fewer bugs leaked.',
      'Ran JMeter performance tests, found bottlenecks, and improved response time.',
      'Built coverage reports with SonarQube and JaCoCo to keep the suite trustworthy.',
      'Worked in Agile/Scrum with cross-functional teams to sharpen test strategy.',
      'Used JIRA, MySQL Workbench, IntelliJ IDEA, and Robo 3T to keep test work moving.',
    ],
  },
  {
    company: 'Vidura Solutions Pvt Ltd',
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
      'Built mobile apps with Android (Java), Flutter, and Firebase.',
      'Improved UI and UX so the apps felt faster and easier to use.',
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
    detail: 'In progress · software engineering and quality leadership.',
    current: true,
  },
  {
    school: 'SLIIT',
    credential:
      'B.Sc (Hons) in Information Technology, specializing in Software Engineering',
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
      'Streetwear and anime-inspired apparel. The storefront is treated like a product under test — checkout, inventory, and visuals gated before a customer ever sees a break.',
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
      'A typed Playwright setup that replaced brittle manual regression with clean UI and API coverage. It blocked a critical UI break before production and cut the wait for a green deploy.',
    status: 'coming-soon',
    metrics: [
      { value: '40%', label: 'Faster deploy confidence' },
      { value: 'Pre-prod', label: 'UI regression blocked' },
      { value: 'E2E + API', label: 'Layered coverage' },
    ],
  },
  {
    slug: 'pearson-quality',
    name: 'API and performance quality',
    tag: 'Testing',
    description:
      'REST Assured suites and JMeter profiles that cut API regression time, caught leaks earlier, and found bottlenecks before users did. SonarQube and JaCoCo kept the suite honest.',
    status: 'coming-soon',
    metrics: [
      { value: 'Hours saved', label: 'API regression time cut' },
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
      'A page object as a fixture — sanity checks stay readable as the suite grows.',
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
      'Stub the release-gate API so UI tests stay steady when the backend is noisy.',
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
      'The workflow behind the lab badge. Chromium against this site on every push.',
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
      'Automation architecture, clean test design, and CI-backed suites — the foundation everything else builds on.',
  },
  {
    id: 'msc-it',
    status: 'in-progress' as const,
    title: 'Master of Science in IT',
    meta: 'SLIIT · in progress',
    detail:
      'Postgraduate study at SLIIT, building on the B.Sc (Hons) in IT with deeper software engineering and quality practice.',
  },
  {
    id: 'ai-testing',
    status: 'in-progress' as const,
    title: 'ISTQB AI Testing',
    meta: 'Exam prep in progress',
    detail:
      'Studying the AI Testing syllabus: how to test ML-assisted quality, handle non-deterministic risk, and design strategy for intelligent products.',
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
  description: `The editor, terminal, and quality stack ${profile.name} uses to design suites, read traces, and ship with confidence.`,
  headline: 'The setup behind the suites.',
  intro:
    'A look at the editor, terminal, and frameworks I use to design coverage, read traces, and ship with confidence.',
  groups: [
    {
      id: 'editor',
      title: 'Editor & terminal',
      blurb: 'Where I live between test runs.',
      items: [
        {
          name: 'Cursor',
          detail: 'Daily-driver IDE. Agents handle the boilerplate. I make the risk calls.',
        },
        {
          name: 'Windows Terminal + bash',
          detail: 'Playwright, git, and npm — without leaving the keyboard.',
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
          detail: 'UI and API coverage, fixtures, and traces. This site runs under the same suite.',
        },
        {
          name: 'Mocha + Chai',
          detail: 'Clear runs and honest assertions when the team already knows the runner.',
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
      blurb: 'Where defects, branches, and conversations live.',
      items: [
        {
          name: 'GitHub Actions',
          detail: 'Chromium against this site on every push. The lab badge is the live signal.',
        },
        {
          name: 'GitHub / GitLab / Bitbucket',
          detail: 'Wherever the product repo lives, the quality gate follows.',
        },
        {
          name: 'JIRA',
          detail: 'Cases, defects, and the trail from risk to resolution.',
        },
        {
          name: 'Astro + Tailwind CSS',
          detail: 'This site. Static first. React only where motion earns the bytes.',
        },
      ],
    },
  ] satisfies UsesGroup[],
} as const;

export const site = {
  title: `${profile.name} · Senior QA`,
  description: `${profile.name} is a ${profile.role} who leads test automation strategy, Playwright and TypeScript suites, and CI quality gates. Based in ${profile.location}.`,
} as const;
