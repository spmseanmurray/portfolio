# Working in this repo

Conventions and invariants for this codebase. For setup, scripts and project
layout, see [README.md](README.md).

## Deployment reality

**Render auto-deploys every push to `main`.** There is no staging step, so
anything merged is live within a minute or two. Work on a branch, open a PR, and
leave `main` deployable at all times.

CI (`.github/workflows/ci.yml`) type-checks and builds on every PR, which is the
only gate before production.

`vite build` **strips types without checking them**, so a type error will not
fail the build. Always run `npx tsc --noEmit` separately — that is why CI has it
as its own step.

## Design tokens

Colours, typefaces and section rhythm are defined once as Tailwind v4 `@theme`
tokens in [`src/index.css`](src/index.css). **Use the tokens, never raw palette
values** (`bg-ground`, not `bg-[#16161b]`; and no `slate-*` — that palette is
gone).

| Token | Value | Use |
| --- | --- | --- |
| `ground` | `#16161b` | Page background |
| `rule` | `#3a3a46` | Hairlines and borders |
| `ink` | `#f2f1ef` | Headings and emphasis |
| `body` | `#d9d8d5` | **Prose** |
| `muted` | `#a2a2a8` | Metadata: dates, rail labels |
| `faint` | `#93939b` | Section labels |
| `accent` | `#8c9a6b` | Moss — the only real hue on the page |

Rules that are easy to get wrong:

- **Prose uses `body`, not `muted`.** `muted` is for metadata only. Setting
  paragraphs in it dims the actual content of the page — this happened once and
  made the whole site read as a flat dark mass.
- Every text token clears **WCAG AA against `ground`**. If you change one,
  re-measure rather than assuming — including against any decorative layer
  drawn behind it.
- Moss is the only hue. Don't introduce a second accent for a one-off need.

## Motion

Motion is additive and never load-bearing. Two invariants:

1. **Never gate visible output on a callback that might not fire.** `Reveal` has
   an unconditional fail-safe timer, `Hero` has a JS fail-safe that forces
   opacity after 1.2 s (the CSS entrance sets `opacity: 0` inside a
   `prefers-reduced-motion: no-preference` block, which never animates in some
   renderers), and `HeroContours` paints an initial frame before its observer
   starts. Renderers that never deliver `IntersectionObserver` or
   `requestAnimationFrame` callbacks — crawlers, link-preview bots, headless
   browsers — would otherwise get a blank page. This mistake has been made
   three times in this repo; check for it in review.
2. **Hide things only inside `prefers-reduced-motion: no-preference`.** The hero
   entrance sets `opacity: 0` *within* that query rather than undoing it under
   `reduce`. Written the other way round, reduced-motion users are left staring
   at permanently invisible text.

Also: pause animation loops off-screen and on tab blur, and give reduced-motion
users a complete static composition rather than merely less movement.

## Layout

The page is a single route with no router. `RailRow` is the structural spine —
metadata in a fixed-width left rail so dates and employers align down one edge,
content beside it, stacking below `md`. `Section` owns section-level chrome:
a real `<h2>`, max width and vertical rhythm.

- **Sections size to their content.** Do not pin them to viewport height. `vh`
  units put a fixed slab of content in a box that grows with the screen, so
  taller displays just get emptier. The hero is the one deliberate exception,
  because its "Learn more" cue needs something to point past.
- Section titles are real `<h2>` elements even though they're styled as quiet
  labels. The loud type is reserved for content.

## Content

Content is data-driven — most updates are edits to [`src/config/`](src/config)
with no component changes. Keep it that way: prefer adding a field to a config
and its interface over hardcoding copy into a component.

### Logos

Two separate systems:

- **Tech/skill logos** render from the registry in
  [`src/Components/icons/techIcons.tsx`](src/Components/icons/techIcons.tsx),
  which maps a config slug to a simple-icons component and brand colour. **A
  slug with no registry entry renders nothing**, so keep the registry in sync
  with the configs. Near-black marks are auto-lightened to stay visible on the
  dark ground. simple-icons also drops brands over time (Heroku went to a
  trademark claim; there is no Java or generic SQL mark), so verify a mark
  exists before promising it — those fall back to neutral lucide glyphs.
- **Employer logos** stay as real multi-colour PNGs under
  `src/images/employers/`, looked up by company name through
  `src/utils/assets.ts`.

## Metadata and icons

**The canonical host is `www`.** The apex 301s to it, so every absolute URL —
canonical, `og:url`, `og:image`, sitemap — must use
`https://www.spmseanmurray.com/`. Mixing hosts splits the site's SEO signals.

All icons derive from a single source, [`public/favicon.svg`](public/favicon.svg):
three terrain contours on a moss field, matching the hero. It is pure geometry
rather than a monogram **on purpose** — an SVG with a serif letter renders
differently depending on what fonts are installed, and fine serifs turn to mush
at favicon size.

To regenerate the rasters after editing the SVG, use `sharp` and `png-to-ico`
**in a scratch directory** so they don't enter this project's dependencies:

- `favicon.ico` — 16/32/48
- `apple-touch-icon.png` — 180, rendered from a **square-cornered** variant of
  the SVG, since iOS applies its own corner mask and would otherwise
  double-round it
- `icon-192.png`, `icon-512.png` — PWA icons

`public/og-image.png` (1200×630) is a static social card. Re-export it if the
name, tagline or location changes.

## Verifying

Rendering is worth checking directly rather than inferring from source: read
computed styles and measured geometry in a browser, and check the rendered
`<head>` rather than the template. Sweep 375 / 768 / 1280 / 1920 for layout
work — several bugs here only appeared at the extremes.
