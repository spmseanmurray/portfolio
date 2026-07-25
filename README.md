# Portfolio — spmseanmurray.com

Personal portfolio site for Sean Murray. A single-page React application: a
hero followed by About, Experience, Projects and Skills, with sticky in-page
anchor navigation and an editorial layout built around a metadata rail.

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

## Design system

Colours, typefaces and section rhythm are defined once as Tailwind v4 `@theme`
tokens in [`src/index.css`](src/index.css) — use the tokens, not raw palette
values, so the whole page stays adjustable from one place.

| Token | Value | Use |
| --- | --- | --- |
| `ground` | `#16161b` | Page background |
| `surface` | `#262630` | Raised panels (clears the ground by ~1.20 so they read as panels) |
| `rule` | `#3a3a46` | Hairlines and borders |
| `ink` | `#f2f1ef` | Headings and emphasis |
| `body` | `#d9d8d5` | **Prose.** Setting paragraphs in `muted` dims the actual content |
| `muted` | `#a2a2a8` | Metadata: dates, rail labels |
| `faint` | `#93939b` | Section labels |
| `accent` | `#8c9a6b` | Moss — the only real hue on the page |

Every text token clears WCAG AA against both `ground` and `surface`. When
changing any of them, re-check contrast rather than assuming.

### Motion

Motion is additive, never load-bearing. Two rules the code follows:

- **Never gate visible output on a callback that might not fire.** `Reveal` has
  an unconditional fail-safe timer and `HeroContours` paints an initial frame
  before the observer starts, because renderers that never deliver
  `IntersectionObserver` or `requestAnimationFrame` callbacks (crawlers, preview
  bots, headless browsers) would otherwise get a blank page.
- **Hide things only inside `prefers-reduced-motion: no-preference`.** The hero
  entrance sets `opacity: 0` within that query rather than undoing it under
  `reduce`. Written the other way round, reduced-motion users are left with
  permanently invisible text.

## Editing content

Content is **data-driven** — most updates are edits to the files in
[`src/config/`](src/config), no component changes needed:

- `ExperienceConfig.tsx` — work history (company, dates, position, bullets)
- `ProjectConfig.tsx` — projects (name, context, description, image, links, tech tags)
- `SkillConfig.tsx` — skill categories and the tech icon slugs in each
- `HeaderConfig.tsx` — nav items and their in-page anchor targets
- `FooterConfig.tsx` — contact/social links and their icons

### Logos

Logos come from two places:

- **Tech/skill logos** (the `tech` and `skills` slugs in the configs) render as
  vector [simple-icons](https://simpleicons.org/) components in their official
  brand color, via the registry in
  [`src/Components/icons/techIcons.tsx`](src/Components/icons/techIcons.tsx).
  To use a new tech tag, add its slug there — a slug with no registry entry
  renders no icon. Note simple-icons drops brands over time (Heroku, for
  example, is no longer included), and near-black marks are auto-lightened so
  they stay visible on the dark ground.
- **Employer logos** stay as real multi-color PNGs under
  `src/images/employers/`, looked up by company name at runtime through
  `src/utils/assets.ts`.

## Metadata and icons

[`index.html`](index.html) carries the title, description, canonical URL,
Open Graph and Twitter card tags, and `Person` JSON-LD. **The canonical host is
`www`** — the apex 301s to it, so absolute URLs must use `https://www.spmseanmurray.com/`.

Icons all derive from a single source, [`public/favicon.svg`](public/favicon.svg) —
three terrain contours on a moss field, matching the hero. It is pure geometry
rather than a monogram, so it renders identically everywhere and survives being
shrunk to 16px. Derived rasters (`favicon.ico`, `apple-touch-icon.png`,
`icon-192.png`, `icon-512.png`) are generated from it; regenerate them with
`sharp` and `png-to-ico` if the SVG changes. The Apple icon is rendered from a
square-cornered variant, since iOS applies its own corner mask.

`public/og-image.png` (1200×630) is the social share card and is a static asset —
edit and re-export it if the tagline changes.

## Continuous integration

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) type-checks and builds on
every pull request to `main`. Since Render deploys straight off `main`, the
point is to catch a broken build on the PR rather than after it has shipped.

## Deployment

The site is hosted on **Render** as a static site and **auto-deploys on
every push to `main`**.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA fallback:** a rewrite rule `/*  →  /index.html` (Action: Rewrite)
  so any deep link / hard refresh serves the app instead of a 404.
