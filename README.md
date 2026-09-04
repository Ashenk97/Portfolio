<div align="center">

# ASHEN KAVINDA — Senior QA Portfolio

![Ashen Kavinda — Senior QA Portfolio](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=32&duration=2800&pause=1200&color=3EE0C5&center=true&vCenter=true&multiline=true&width=780&height=100&lines=ASHEN+KAVINDA;%F0%9F%9A%80+Senior+QA+Portfolio)

## Static Astro site for a [Software Quality Assurance Engineer](https://ashenk-portfolio.vercel.app/)

**Astro** · **React islands** · **Tailwind CSS** · **Framer Motion** · **Playwright**

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-islands-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Host-Vercel%20Hobby-000000?style=for-the-badge&logo=vercel&logoColor=white)

[![Live](https://img.shields.io/badge/Live-ashenk--portfolio.vercel.app-3EE0C5?style=flat-square)](https://ashenk-portfolio.vercel.app/)
[![CI](https://img.shields.io/github/actions/workflow/status/Ashenk97/Portfolio/playwright.yml?style=flat-square&label=Playwright&logo=github)](https://github.com/Ashenk97/Portfolio/actions/workflows/playwright.yml)
[![Node](https://img.shields.io/badge/Node-22-339933?style=flat-square&logo=nodedotjs&logoColor=white)](./.node-version)
[![Cost](https://img.shields.io/badge/Stack-Free%20tier-brightgreen?style=flat-square)](#tech-stack)

</div>

---

## Why this site

Dark theme by default. React and Framer Motion only as islands. Playwright covering the homepage. Content lives in `src/data/content.ts` — no CMS, no paid APIs, no premium libraries.

| Feature | What you get |
| :-------- | :------------- |
| **Static first** | Astro HTML for hero, header, footer. Zero JS until something needs it |
| **Islands** | Certifications, projects, and stack hydrate with `client:visible` |
| **Motion on scroll** | Framer Motion runs after paint so the first load stays light |
| **Single content file** | Name, copy, GENKI, certs, and tech list in `src/data/content.ts` |
| **#lab** | In-page Playwright replay plus the GitHub Actions badge |
| **CI** | Chromium homepage suite on every push |

**Live site:** [https://ashenk-portfolio.vercel.app/](https://ashenk-portfolio.vercel.app/)

---

## Tech stack

| Layer | Tool | Cost |
| :------ | :----- | :-----: |
| Framework | [Astro](https://astro.build) `^7` (static output) | Free / OSS |
| Styles | [Tailwind CSS](https://tailwindcss.com) v4 | Free / OSS |
| Islands | [React](https://react.dev) `19` + [Framer Motion](https://www.framer.com/motion/) | Free / OSS |
| Tests | [Playwright](https://playwright.dev) Chromium | Free / OSS |
| Hosting | [Vercel](https://vercel.com) Hobby (`*.vercel.app`) | Free tier |
| Alt host | [Cloudflare Pages](https://pages.cloudflare.com) | Free tier |
| Source | GitHub | Free |

---

## Project structure

```text
Portfolio/
├── src/
│   ├── data/content.ts          # All site copy (no CMS)
│   ├── layouts/BaseLayout.astro
│   ├── components/              # Astro (zero-JS) + React islands
│   ├── pages/index.astro
│   └── styles/global.css        # Tailwind v4 + dark theme
├── tests/
│   └── homepage.spec.ts
├── .github/workflows/
│   └── playwright.yml           # Chromium on every push
├── public/
│   └── _headers                 # Cloudflare Pages security headers
├── astro.config.mjs
├── playwright.config.ts
└── vercel.json
```

| Path | Purpose |
| :----- | :-------- |
| **`src/data/content.ts`** | Profile, experience, certs, GENKI, roadmap, stack |
| **`src/pages/index.astro`** | Homepage composition |
| **`src/components/`** | Static Astro chrome + React islands |
| **`tests/homepage.spec.ts`** | Intro, sections, nav, and lab assertions |
| **`.github/workflows/playwright.yml`** | CI sanity suite |

Hero, header, and footer ship as static Astro. Certifications, projects, and tech stack hydrate on scroll so motion does not bloat first paint.

---

## Prerequisites

- **Node.js** ≥ 22.12 (see `.node-version`)
- **npm** ≥ 9
- Chromium for Playwright (first run only)

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browser (first time only)
npx playwright install chromium

# 3. Dev server
npm run dev

# Interactive / headed tests
npm run test:ui
npm run test:headed
```

The site is at **http://localhost:4321**.

---

## NPM scripts

| Command | Description |
| :-------- | :------------ |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Generate the static site into `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm test` | Playwright homepage suite (`tests/homepage.spec.ts`) |
| `npm run test:ui` | Open the Playwright UI runner |
| `npm run test:headed` | Run tests in a visible browser |

GitHub Actions runs Playwright on every push. The `#lab` section shows that badge and can replay the sanity suite in the browser.

---

## Content

Edit copy in `src/data/content.ts`:

| Export | Controls |
| :------- | :--------- |
| `profile` | Name, role, headline, highlights |
| `certifications` / `credly` | ISTQB and Credly badges |
| `projects` | GENKI and planned work |
| `techStack` | Tools listed on `#stack` |
| `roadmap` | CTAL-TAE, MSc, AI Testing |
| `qaInAction` | Lab command and replay lines |

No CMS. Rebuild or refresh the dev server after edits.

---

## Deploy for free

Build command: `npm run build`  
Output directory: `dist`  
Node version: `22`

### Vercel

```bash
npm run build
npx vercel --yes --prod
```

Or import the GitHub repo in the Vercel dashboard. `vercel.json` already sets the framework, build command, and `dist` output. Stay on the Hobby plan.

Production URL is `site` in `astro.config.mjs`: [https://ashenk-portfolio.vercel.app/](https://ashenk-portfolio.vercel.app/).

### Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist --project-name portfolio
```

Or connect the repo in the Cloudflare dashboard:

1. Pages → Create project → Connect git
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Environment variable: `NODE_VERSION=22`

---

### Built with Astro · Tested with Playwright · Styled with signal teal
