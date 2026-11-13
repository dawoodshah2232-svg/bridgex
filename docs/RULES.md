# BridgeX — Rules

## Workflow
- Read `docs/` (PRD, ARCHITECTURE, RULES, DESIGN, TASKS, MEMORY) before
  writing code. Update TASKS.md and MEMORY.md as work completes.
- Verify with `./node_modules/.bin/tsc --noEmit` from the repo root.
  Never run `npm install`. Never run `next build` in a worker session —
  the coordinator builds once at integration.
- Never run git writes (no commit/push/pull/reset). Reading status is fine.
- Do not touch: package.json, package-lock.json, next.config.ts,
  tsconfig.json, postcss.config.mjs, eslint.config.mjs, .github/,
  .gitignore.

## Code
- TypeScript strict. Files focused, <800 lines. No `any` without a comment.
- One animation system: framer-motion 12 + CSS micro-states. No GSAP.
- Tailwind v4 utilities; design tokens only (`bg-bx-maroon-900`, never raw
  hex in classNames). New tokens go in `globals.css` `@theme`.
- All nav lists come from `src/content/navigation.ts`. Never hardcode a
  nav list in a component. Route hrefs in content (deep links, CTAs) must
  resolve to registry routes — the href audit in the Batch 1 report
  describes the check.
- Static assets always via `asset()` from `src/lib/paths.ts`.
- Icons: drawn SVG from `src/components/icons.tsx` only. No emoji or
  unicode glyphs as icons. No icon-in-tinted-square tiles.
- Buttons: `ButtonLink`/`Button` from `src/components/ui/Button.tsx`.
  Never invent a new button style inline.
- Images: explicit width/height, real alt text describing the actual
  image, `loading="lazy"` below the fold, hero eager with
  `fetchPriority="high"`. No stretching — use correct aspect crops.
- JSX copy: use typographic apostrophes (’) and quotes (“ ”) in JSX text
  — straight `'` fails `react/no-unescaped-entities` and breaks the
  build (3 such errors blocked the Batch 2 build; fixed with ’).

## Content
- Original BridgeX copy only. Never invent clients, testimonials,
  certifications, awards, offices, stats, integrations or pricing.
- Every CTA links to a real planned route. No dead buttons/links.
- Product previews: illustrative sample data, always labelled with
  `DemoLabel`. Fictional names/figures say so.
- AI Assistance: always labelled "In development".
- No lorem ipsum. No fake client logos. No provider logos anywhere.

## Accessibility (WCAG 2.2 AA)
- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per
  page, logical heading order.
- Keyboard: mega-menu (hover/focus/click, ESC close, focus return),
  mobile menu (ESC, focus to close button), tabs (arrow keys), accordions
  (native button semantics). No focus traps.
- Visible focus (global `:focus-visible` style). 44px minimum touch
  targets. `prefers-reduced-motion` honoured everywhere.
- Contrast: body ≥4.5:1, large text ≥3:1. Never small gold text on ivory
  (gold-600 #A77A2F is ~3.9:1 on ivory — large text / icons / borders
  only). Muted #766D73 on ivory passes at 4.6:1.

## Responsive
Verify at 360 / 390 / 768 / 1024 / 1440 / 1920. No horizontal overflow.
Mobile layouts are their own composition, not squeezed desktop.
