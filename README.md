# Portfolio — spmseanmurray.com

Personal portfolio site for Sean Murray. A single-page React application:
a hero followed by About, Experience, Projects, and Skills sections with
sticky in-page anchor navigation.

## Tech stack

| Concern | Choice |
| --- | --- |
| Build tool | [Vite](https://vitejs.dev/) 7 |
| UI library | [React](https://react.dev/) 19 |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`) |
| Icons | [lucide-react](https://lucide.dev/) + vendored brand SVGs (`src/Components/icons/BrandIcons.tsx`) |
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
| `npm run build` | Type-agnostic production build to `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to sanity-check a production build. |

Type-check without emitting: `npx tsc --noEmit`.

## Project structure

```
src/
  App.tsx              # Composes the single page: Header + Hero + sections + Footer
  index.tsx            # Entry point (createRoot)
  index.css            # Tailwind import + global styles / smooth-scroll behavior
  Components/          # Presentational components (Header, Hero, About, Experience, …)
    icons/BrandIcons.tsx  # Vendored GitHub/LinkedIn SVGs (not in icon libraries)
  config/              # Site content as typed data (see below)
  types/               # TypeScript interfaces for the config data
  images/              # Profile photo, project screenshots, employer + tech logos
  utils/assets.ts      # import.meta.glob maps for logos referenced by name
```

## Editing content

Content is **data-driven** — most updates are edits to the files in
[`src/config/`](src/config), no component changes needed:

- `ExperienceConfig.tsx` — work history (company, dates, position, bullets)
- `ProjectConfig.tsx` — projects (name, description, image, links, tech tags)
- `SkillConfig.tsx` — skill categories and the tech logos in each
- `HeaderConfig.tsx` — nav items and their in-page anchor targets
- `FooterConfig.tsx` — contact/social links and their icons

Tech and employer logos are looked up by name at runtime through
`src/utils/assets.ts`, which globs the PNGs under `src/images/`.

## Deployment

The site is hosted on **Render** as a static site and **auto-deploys on
every push to `main`**.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA fallback:** a rewrite rule `/*  →  /index.html` (Action: Rewrite)
  so any deep link / hard refresh serves the app instead of a 404.
