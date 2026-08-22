export const profile = {
  name: 'Ashen Kavinda',
  role: 'Senior Software Quality Assurance Engineer',
  headline:
    'I lead test automation strategy and build quality systems that keep releases reliable.',
  about:
    'I focus on automation architecture, risk-based coverage, and software that holds up in production. I design Playwright and TypeScript suites, API and performance checks, and CI quality gates. I still go deep on manual and exploratory testing when the risk calls for it. Then I work with engineering and product to catch defects early and keep the suite maintainable. Outside the pipeline I design, because quality and craft are the same instinct.',
  location: 'Kurunegala, Sri Lanka',
  phone: '+94 71 0948 240',
  phoneHref: 'tel:+94710948240',
  email: 'ashenk720@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashenk97/',
  github: 'https://github.com/Ashenk97',
  highlights: [
    { value: '4+', label: 'Years in quality engineering' },
    { value: 'Manual + auto', label: 'UI, API, and exploratory coverage' },
    { value: 'Pearson+', label: 'Hackathon winner, 2023' },
  ],
  personalSkills: [
    'Test strategy',
    'Automation architecture',
    'Manual & exploratory testing',
    'Graphic design',
  ],
} as const;

export const github = {
  repo: 'Ashenk97/Portfolio',
  url: 'https://github.com/Ashenk97/Portfolio',
  profile: 'https://github.com/Ashenk97',
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
    name: 'Advanced Level Test Automation Engineering',
    level: 'ISTQB Certified Tester',
    acronym: 'CTAL-TAE',
    issuer: 'ISTQB',
    date: 'August 2026',
    featured: true,
    summary:
      'The Certified Tester Advanced Level Test Automation Engineering qualification is aimed at anyone involved in software testing and test automation. The syllabus is targeted to the test engineer looking to implement or improve on test automation. It defines methods and practices that can support a sustainable solution.',
  },
  {
    name: 'Foundation Level',
    level: 'ISTQB Certified Tester',
    acronym: 'CTFL',
    issuer: 'SLSTB / ISTQB',
    date: 'March 2025',
    featured: true,
    summary:
      'The ISTQB Certified Tester Foundation Level certification is the cornerstone of essential testing knowledge that can be applied to real-world scenarios. The syllabus provides a comprehensive understanding of the terminology and concepts used in the testing domain worldwide, making it relevant for all software delivery approaches and practices, including Waterfall, Agile, DevOps, and Continuous Delivery.',
  },
];

export type Role = {
  title: string;
  start: string;
  end: string;
};

export type Experience = {
  company: string;
  context?: string;
  start: string;
  end: string;
  roles: Role[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'WealthOS',
    context: 'Wealth-tech platform · Engineering',
    start: 'Sep 2024',
    end: 'Present',
    roles: [
      {
        title: 'Quality Assurance Engineer',
        start: 'Sep 2024',
        end: 'Present',
      },
    ],
    bullets: [
      'Test UI and APIs on a wealth-tech platform so the product stays reliable and the experience stays smooth.',
      'Build end-to-end coverage in Playwright and TypeScript, cutting the manual grind.',
      'Structure runs with Mocha and Chai so assertions stay clear and failures stay honest.',
      'Own test plans, cases, and scripts as coverage grows.',
      'Work with developers and product to catch issues early.',
    ],
  },
  {
    company: 'Pearson Lanka',
    context: 'User Engagement · Engineering',
    start: 'Mar 2022',
    end: 'Aug 2024',
    roles: [
      {
        title: 'Software Quality Assurance Engineer',
        start: 'Apr 2023',
        end: 'Aug 2024',
      },
      {
        title: 'Associate Software Quality Engineer',
        start: 'Mar 2022',
        end: 'Apr 2023',
      },
    ],
    bullets: [
      'Tested UI and APIs with the User Engagement team, catching more defects in-cycle.',
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
        title: 'Intern, Mobile Software Engineer',
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
    credential:
      'B.Sc (Hons) in Information Technology, specializing in Software Engineering',
    years: '2018 - 2022',
    detail: 'Second Class Upper Division',
  },
  {
    school: 'Wijeya Graphics',
    credential: 'Diploma in Multimedia',
    years: '2017 - 2019',
  },
  {
    school: 'Wayamba Royal College',
    credential: 'G.C.E. Advanced Level',
    years: '2003 - 2016',
    detail: '2016 - ICT (C), Geography (C), English Literature (S)',
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
  status: 'featured' | 'planned';
  href?: string;
  metrics: ProjectMetric[];
};

export const projects: Project[] = [
  {
    slug: 'genki',
    name: 'GENKI',
    tag: 'Brand / Commerce',
    description:
      'Streetwear and anime-inspired apparel I design and quality-gate. The storefront is treated like a product under test. Checkout, inventory, and visuals are checked before a customer ever sees a break.',
    status: 'featured',
    href: 'https://github.com/Ashenk97/Genki_Test',
    metrics: [
      { value: 'Pre-launch', label: 'Visual regressions gated' },
      { value: 'Checkout', label: 'Risk-based coverage' },
      { value: 'Pipeline', label: 'Quality before the drop' },
    ],
  },
  {
    slug: 'self-healing-e2e',
    name: 'Self-healing E2E framework',
    tag: 'Test automation',
    description:
      'A Playwright and TypeScript suite on an e-commerce demo site, built with page objects. When a locator misses after a UI change, a wrapper captures the DOM, asks an LLM for a new selector, retries the step, and writes a healing report so the run can continue.',
    status: 'planned',
    metrics: [
      { value: 'Heal', label: 'Broken locators recovered' },
      { value: 'LLM', label: 'Selector from DOM snapshot' },
      { value: 'CI', label: 'Healing report in Actions' },
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
  { name: 'Android', category: 'Mobile' },
  { name: 'Firebase', category: 'Mobile' },
  { name: 'Adobe Photoshop', category: 'Design' },
  { name: 'Adobe Illustrator', category: 'Design' },
  { name: 'Figma', category: 'Design' },
  { name: 'Adobe XD', category: 'Design' },
];

export const nav = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#lab', label: 'Lab' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#roadmap', label: 'Roadmap' },
  { href: '/#stack', label: 'Tech stack' },
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
      'Automation architecture, clean test design, and CI-backed suites. The foundation everything else builds on.',
  },
  {
    id: 'msc-it',
    status: 'planned' as const,
    title: 'Master of Science in IT',
    meta: 'SLIIT · planning to do',
    detail:
      'Postgraduate study at SLIIT, building on the B.Sc (Hons) in IT with deeper software engineering and quality practice.',
  },
  {
    id: 'ai-testing',
    status: 'planned' as const,
    title: 'ISTQB AI Testing',
    meta: 'Exam prep · planning to do',
    detail:
      'Next up on the syllabus: how to test ML-assisted quality, handle non-deterministic risk, and design strategy for intelligent products.',
  },
];

export const site = {
  title: `${profile.name} · Senior QA`,
  description: `${profile.name} is a ${profile.role} who leads test automation strategy, Playwright and TypeScript suites, and CI quality gates. ISTQB certified. Based in ${profile.location}.`,
} as const;
