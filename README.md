# Portfolio — spmseanmurray.com

Personal portfolio site for Sean Murray. A single-page React application: a
hero followed by About, Experience, Projects and Skills, with sticky in-page
anchor navigation and an editorial layout built around a metadata rail.

> Conventions, design tokens and the invariants worth knowing before changing
> anything live in [CLAUDE.md](CLAUDE.md).

## Tech stack

| Concern | Choice |
| --- | --- |
| Build tool | [Vite](https://vitejs.dev/) 7 |
| UI library | [React](https://react.dev/) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`) |
| Typefaces | Source Serif 4 + Source Sans 3, self-hosted via [`@fontsource`](https://fontsource.org/) |
| Icons | [lucide-react](https://lucide.dev/) (UI) + [simple-icons](https://simpleicons.org/) via `@icons-pack/react-simple-icons` (tech/brand logos) |
| Hosting | [Render](https://render.com/) static site (auto-deploy on push to `main`) |

## Prerequisites

- **Node.js ≥ 20.19** (the repo pins Node 24 via [`.nvmrc`](.nvmrc); run `nvm use` if you use nvm).
- npm (ships with Node).

## Getting started

```bash
npm install     # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server (also aliased as `npm start`). |
| `npm run build` | Production build to `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to sanity-check a production build. |

`vite build` strips types without checking them, so type errors will not fail
the build. Type-check separately with `npx tsc --noEmit` — CI runs both.

## Project structure

```
index.html             # Document head: title, canonical, Open Graph, JSON-LD
public/                # Served verbatim: icons, og-image, manifest, robots, sitemap
src/
  App.tsx              # Composes the single page: Header + Hero + sections + Footer
  index.tsx            # Entry point (createRoot)
  index.css            # Tailwind import, @theme tokens, hero entrance keyframes
  Components/
    Section.tsx           # Section shell: <h2>, max width, vertical rhythm
    RailRow.tsx           # The layout spine: metadata rail + content column
    Reveal.tsx            # Scroll-triggered fade-up, reduced-motion aware
    HeroContours.tsx      # Canvas terrain contours behind the hero
    icons/BrandIcons.tsx  # Vendored GitHub/LinkedIn SVGs (not in icon libraries)
    icons/techIcons.tsx   # Maps tech slugs -> simple-icons component + brand color
  config/              # Site content as typed data (see below)
  types/               # TypeScript interfaces for the config data
  images/              # Profile photo, project screenshots, employer logos
  utils/assets.ts      # import.meta.glob map for employer logos referenced by name
```

## Editing content

Content is **data-driven** — most updates are edits to the files in
[`src/config/`](src/config), no component changes needed:

- `ExperienceConfig.tsx` — work history (company, dates, position, bullets)
- `ProjectConfig.tsx` — projects (name, context, description, image, links, tech tags)
- `SkillConfig.tsx` — skill categories and the tech icon slugs in each
- `HeaderConfig.tsx` — nav items and their in-page anchor targets
- `FooterConfig.tsx` — contact/social links and their icons

Adding a new tech tag also needs an entry in the icon registry — see
[CLAUDE.md](CLAUDE.md#logos).

## Continuous integration

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) type-checks and builds on
every pull request to `main`.

## Deployment

The site is hosted on **Render** as a static site and **auto-deploys on
every push to `main`**.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA fallback:** a rewrite rule `/*  →  /index.html` (Action: Rewrite)
  so any deep link / hard refresh serves the app instead of a 404.
