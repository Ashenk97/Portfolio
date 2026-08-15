export const profile = {
  name: 'Ashen Kavinda',
  role: 'Software Quality Assurance Engineer',
  headline:
    'I specialize in test automation and building reliable repositories.',
  about:
    'I am a dedicated and ambitious Software Quality Assurance professional with a strong passion for ensuring excellence in software development. Highly organized and self-motivated, I thrive on learning new skills and expanding my expertise. Throughout my career, I have demonstrated a strong commitment to quality, excelling both as an individual contributor and a collaborative team player.',
  location: 'Kurunegala, Sri Lanka',
  phone: '+94 71 0948 240',
  phoneHref: 'tel:+94710948240',
  email: 'ashenk720@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashenk97/',
  personalSkills: [
    'Analytical skills',
    'Problem solving',
    'Time management',
    'Attention to detail',
    'Interpersonal skills',
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
      'Streetwear and anime-inspired apparel brand. Placeholder card for the storefront, lookbook, and quality pipeline behind the label.',
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
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Tech stack' },
  { href: '#education', label: 'Education' },
] as const;

export const site = {
  title: `${profile.name} · ${profile.role}`,
  description: `${profile.name} is a ${profile.role} specializing in test automation and building reliable repositories. ISTQB Foundation Level. Based in ${profile.location}.`,
} as const;
