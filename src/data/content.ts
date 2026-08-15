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

export type Certification = {
  name: string;
  level: string;
  acronym: string;
  issuer: string;
  date: string;
  summary: string;
};

export const certifications: Certification[] = [
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
};

export const education: Education[] = [
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

export type Project = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  status: 'featured' | 'coming-soon';
  href?: string;
};

export const projects: Project[] = [
  {
    slug: 'genki',
    name: 'GENKI',
    tag: 'Brand / Commerce',
    description:
      'Streetwear and anime-inspired apparel brand. Placeholder card for the storefront and quality pipeline behind the label.',
    status: 'featured',
  },
  {
    slug: 'wealthos-automation',
    name: 'Playwright E2E at WealthOS',
    tag: 'Test automation',
    description:
      'End-to-end UI and API coverage in Playwright and TypeScript, with Mocha and Chai assertions to keep suites maintainable as the product grows.',
    status: 'coming-soon',
  },
  {
    slug: 'pearson-quality',
    name: 'API & performance quality',
    tag: 'Testing',
    description:
      'REST Assured API automation, Apache JMeter performance testing, and SonarQube / JaCoCo coverage reporting from Pearson Lanka delivery work.',
    status: 'coming-soon',
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
} as const;

export const roadmap = [
  {
    id: 'ctal-tae',
    status: 'completed' as const,
    title: 'ISTQB Advanced Level Test Automation Engineering',
    meta: 'CTAL-TAE · completed',
    detail:
      'Automation architecture, maintainable test design, and CI-integrated suites — the advanced credential for building reliable repositories.',
  },
  {
    id: 'ai-testing',
    status: 'in-progress' as const,
    title: 'ISTQB AI Testing',
    meta: 'Exam in progress',
    detail:
      'Preparing for the AI Testing syllabus: evaluating ML-assisted quality, risk in non-deterministic systems, and test strategies for intelligent products.',
  },
  {
    id: 'msc-it',
    status: 'future' as const,
    title: 'Master of Science in IT',
    meta: 'SLIIT · upcoming',
    detail:
      'Planned postgraduate study at SLIIT, deepening software engineering and quality practice on top of the B.Sc (Hons) in IT.',
  },
];

export const site = {
  title: `${profile.name} · ${profile.role}`,
  description: `${profile.name} is a ${profile.role} who leads test automation strategy, Playwright and TypeScript suites, and CI-backed quality gates. Based in ${profile.location}.`,
} as const;
