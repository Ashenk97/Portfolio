# Personal Portfolio

Static Astro portfolio for a Software Quality Assurance Engineer. Dark theme by default, React + Framer Motion only as islands, and Playwright covering the homepage. Content lives in `src/data/content.ts` — no CMS, no paid APIs, no premium libraries.

**Live site:** [https://portfolio-eight-neon-c4csi6obc0.vercel.app/](https://portfolio-eight-neon-c4csi6obc0.vercel.app/)

**Free-tier stack**

| Layer | Tool | Cost |
| --- | --- | --- |
| Framework | [Astro](https://astro.build) (static output, zero JS by default) | Free / OSS |
| Styles | [Tailwind CSS](https://tailwindcss.com) | Free / OSS |
| Islands | [React](https://react.dev) + [Framer Motion](https://www.framer.com/motion/) | Free / OSS |
| Tests | [Playwright](https://playwright.dev) | Free / OSS |
| Hosting | [Vercel](https://vercel.com) Hobby (`*.vercel.app`) | Free tier |
| Source | GitHub | Free |

Edit your name, copy, GENKI details, and tech list in `src/data/content.ts`.

## Local development

```bash
npm install
npx playwright install chromium
npm run dev
```

The site is at **http://localhost:4321**.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Generate the static site into `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm test` | Run Playwright (`tests/homepage.spec.ts`) |
| `npm run test:ui` | Open the Playwright UI runner |
| `npm run test:headed` | Run tests in a visible browser |

## Project layout

```text
src/
  data/content.ts          # All site copy (no CMS)
  layouts/BaseLayout.astro
  components/              # Astro (zero-JS) + React islands
  pages/index.astro
  styles/global.css        # Tailwind v4 + dark theme
tests/
  homepage.spec.ts
.github/workflows/
  playwright.yml           # Chromium against the portfolio on every push
public/
  _headers                 # Cloudflare Pages security headers
```

Hero, header, and footer ship as static Astro. Certifications, projects, and tech stack hydrate with `client:visible` so motion runs on scroll without bloating the first paint.

GitHub Actions runs Playwright on every push. The `#lab` section shows that badge and can replay the sanity suite in the browser.

## Deploy for free

Build command for both hosts: `npm run build`  
Output directory: `dist`  
Node version: `22` (see `.node-version`)

### Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist --project-name portfolio
```

Or connect the GitHub repo in the Cloudflare dashboard:

1. Pages → Create project → Connect git
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Environment variable: `NODE_VERSION=22`

### Vercel

```bash
npm run build
npx vercel --yes --prod
```

Or import the GitHub repo in the Vercel dashboard. `vercel.json` already sets the framework, build command, and `dist` output. Stay on the Hobby plan.

Production URL is set as `site` in `astro.config.mjs`: [https://portfolio-eight-neon-c4csi6obc0.vercel.app/](https://portfolio-eight-neon-c4csi6obc0.vercel.app/).
