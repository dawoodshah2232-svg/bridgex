# BridgeX

BridgeX — Capital Markets Technology & Brokerage Operations. Premium B2B
fintech website: connected infrastructure for modern financial businesses.

Live site: https://dawoodshah2232-svg.github.io/bridgex/

## Stack

Next.js 15.5 (App Router) + React 19 + TypeScript + Tailwind v4, static
export (`output: 'export'`, `basePath: '/bridgex'`, `trailingSlash: true`).
framer-motion 12 is the single animation system. Fonts are self-hosted
(Cormorant Garamond, Manrope, Inter — see `public/fonts/`).

## Setup

```bash
npm install   # only if node_modules is missing
npm run dev   # local dev server (http://localhost:3000/bridgex)
```

## Verify

```bash
npm run typecheck   # tsc --noEmit — must be clean before handoff
npm run lint        # eslint (4 accepted no-img-element warnings: plain
                    # <img> with explicit dimensions is the design choice)
npm run build       # coordinator only — static export to out/
```

## Deploy

GitHub Actions builds on push to `main` and deploys `out/` to GitHub
Pages. `trailingSlash: true` is required so every route resolves to
`/route/index.html` on direct refresh.

## Project docs

Real content, kept current — read before writing code:

- `docs/PRD.md` — product, scope, content-truth rules
- `docs/ARCHITECTURE.md` — stack, directory map, key decisions
- `docs/RULES.md` — workflow, code, content, a11y, responsive rules
- `docs/DESIGN.md` — palette, type, logo, layout, motion, photography
- `docs/TASKS.md` — done / next / known gaps
- `docs/MEMORY.md` — progress log and decisions

## Key conventions

- **Route registry first:** `src/content/navigation.ts` is the single
  source of truth for all 44 routes. Header, mega-menu, mobile nav,
  footer and breadcrumbs all consume it — no hardcoded nav lists.
- **Assets via `asset()`:** `src/lib/paths.ts` prefixes the `/bridgex`
  basePath on every static asset URL (Next.js does not do this for raw
  `<img src>` or metadata).
- **Fixed header (72px):** pages must clear it — the homepage hero
  carries its own top padding; inner-page templates add `pt-[72px]`.
- **Content truth:** original BridgeX copy only. No invented clients,
  certifications, stats, integrations or pricing. Product previews show
  illustrative data, always labelled. AI Assistance is "In development".
