# BridgeX — Architecture

## Stack (locked)
Next.js 15.5 App Router + React 19 + TypeScript + Tailwind v4.
`output: 'export'`, `basePath: '/bridgex'`, `trailingSlash: true`,
`images.unoptimized: true`. Static export hosted on GitHub Pages at
https://dawoodshah2232-svg.github.io/bridgex/.

Deps: `framer-motion` 12 is the single animation system (+ CSS micro-states).
No GSAP. No other runtime dependencies.

## Directory map
```
src/
  app/            layout.tsx (header/footer shell, metadata), page.tsx (homepage), globals.css
  components/
    chrome/       Header, MegaMenu, MobileNav, Footer, Breadcrumbs, SkipLink, BackToTop
    ui/           Container/Section, Button, Reveal, SectionIntro, TealLineDivider,
                  FaqAccordion, CtaBand, DemoLabel
    home/         Hero, ValueIntro, CapabilityTiles, ArchitectureDiagram,
                  DemoPreview, PhotoInterlude, IndustrySelector,
                  IntegrationEcosystem, ReliabilityGovernance,
                  ImplementationMethod, Insights
    Logo.tsx      Inline-SVG logo component (symbol + HTML wordmark)
    icons.tsx     Drawn 24×24 stroke icon system (1.75 stroke, currentColor)
  content/
    navigation.ts Route registry — single source of truth for all 44 routes
    insights.ts   Seeded editorial articles (homepage H11 + Batch 2 blog index)
  lib/
    paths.ts      BASE_PATH + asset() helper + site constants
public/
  fonts/          2 self-hosted woff2 files (DM Sans variable 100–1000,
                  Inter variable — latin subsets; DM Sans is the only
                  family used, Inter is the fallback)
  images/         ~70 Pexels photos (see IMAGE-MANIFEST.md for the list)
  brand/          Shipped logo SVGs + explorations/
  favicon.svg
docs/             PRD, ARCHITECTURE, RULES, DESIGN, TASKS, MEMORY
```

## Key decisions
- **Route registry first.** `src/content/navigation.ts` holds all 44 routes
  with label, href, description, group, status. Header, MegaMenu,
  MobileNav, Footer and Breadcrumbs all consume it. No hardcoded nav lists
  anywhere else. `breadcrumbsFor(href)` builds trails; `routeByHref`
  normalises trailing slashes.
- **basePath handling.** Next.js adds `/bridgex` automatically to `<Link>`
  hrefs and router navigation, but NOT to raw asset URLs. Every static
  asset reference (img src, metadata icons, OG image) goes through
  `asset()` in `src/lib/paths.ts`. `Header` normalises `usePathname()`
  (strips a leading `/bridgex` if present, drops trailing slash) before
  comparing against the registry.
- **Fixed header (72px).** Transparent over dark heroes, frosted white on
  scroll. Pages must clear it: the homepage hero carries its own top
  padding; Batch 2 inner-page templates add `pt-[72px]` (or a hero with
  built-in clearance). `HEADER_HEIGHT` is exported from Header.tsx.
- **Dark-hero routes.** `DARK_HERO_ROUTES` in navigation.ts lists routes
  whose hero is dark (today: `/` only). Batch 2 adds inner pages with dark
  heroes here.
- **Images.** Plain `<img>` with explicit width/height (no CLS), lazy
  except the hero (`fetchPriority="high"`). Photos are pre-sized via
  Pexels URL params at download time. `next/image` is configured
  (unoptimized) but plain img keeps static export deterministic; the
  `@next/next/no-img-element` ESLint warnings are accepted by design.
- **Motion.** framer-motion for reveals/tabs/menus (transform + opacity
  only). `Reveal` applies its hidden state only after hydration, so
  content is visible with JS disabled. Every animated component honours
  `prefers-reduced-motion` (via `useReducedMotion` or the global CSS
  kill-switch in globals.css).
- **Groups without overview pages.** Solutions, Industries and Company have
  no index route; their mega-menu headings are plain text, never dead
  links. Platform, Services and Resources link their overviews.

## Data flow
Static content only. No CMS, no API, no backend in Batch 1. Content lives
in `src/content/*.ts` modules; components import what they need. Batch 4
may introduce a CMS/data layer behind the same module interfaces.

## Deployment
GitHub Actions builds (`next build`) and deploys `out/` to GitHub Pages.
`trailingSlash: true` is required so every route resolves to
`/route/index.html` on direct refresh.
