# BridgeX — Tasks

## Done (Batch 1 — foundation + homepage, 13 Nov 2026)
- [x] Fonts: 4 woff2 files downloaded (latin subsets, Google Fonts) and
  verified with `file` + fontTools (all variable; Cormorant wght 300–700,
  Manrope 200–800, Inter 100–900).
- [x] Logo: 3 SVG explorations + shipped lockups (dark/light/icon/favicon);
  wordmark converted to Manrope ExtraBold vector outlines; verified by
  rasterising with ImageMagick.
- [x] Route registry: all 44 routes in `src/content/navigation.ts`
  (verified by audit script: 44 entries; every href used in code resolves).
- [x] Chrome: Header (transparent→frosted, mega-menu, ESC/focus handling),
  MobileNav (drill-down, 44px targets), Footer (full sitemap, dynamic
  year, back-to-top), Breadcrumbs, SkipLink.
- [x] Shared components: Container/Section, Button, Reveal, SectionIntro,
  GoldLineDivider (+GoldRule), FaqAccordion, CtaBand, DemoLabel, Logo,
  icons (35 drawn icons).
- [x] Homepage H01–H13 in order (H13 footer via layout).
- [x] Photography: 7 Pexels photos downloaded + verified (file/size) + 1
  visually checked (hero).
- [x] Layout: header/footer shell, skip link, metadata (title/description/
  OG/favicon), lang="en".
- [x] Docs: PRD/ARCHITECTURE/RULES/DESIGN/TASKS/MEMORY + README.
- [x] Verification: `tsc --noEmit` clean (exit 0); ESLint 0 errors
  (4 accepted `no-img-element` warnings — plain img is the design choice);
  href audit clean; no file over 800 lines (largest: navigation.ts, 429).

## Next — Batch 2 (complete marketing)
- [ ] All inner routes: 8 platform, 7 solution, 9 industry, 4 services
  (incl. overview), 7 resources (incl. blog index reusing
  `src/content/insights.ts`), 4 company, /book-demo, 3 legal.
- [ ] Page templates per spec §5/§7–§10: distinct composition per page
  type (solution pages technically precise; industry pages problem-led;
  company pages human; developer pages practical). Each page: unique
  above-the-fold message, specific sections, FAQ, CTA.
- [ ] Inner pages clear the fixed 72px header (`pt-[72px]` or hero with
  clearance); extend `DARK_HERO_ROUTES` for any dark-hero inner page.
- [ ] Case studies page shows "Case studies coming soon" (no fabricated
  outcomes). Careers shows "No open roles currently listed" unless real
  roles exist. About invents no history/executives/founding year.
- [ ] Book-demo + contact forms land in Batch 4 — Batch 2 pages link to
  the routes; the routes themselves can ship as designed shells with the
  form coming in Batch 4 (coordinator to confirm sequencing).

## Later batches (from spec §14)
- [ ] Batch 3: cinematic polish, art-directed hero, motion, responsive
  optimisation, reduced-motion fallbacks.
- [ ] Batch 4: CMS/data, contact/demo forms + persistence, resource
  index/search, cookies, SEO (sitemap, robots, structured data),
  analytics with consent.
- [ ] Batch 5: verification — lint, typecheck, builds, click/navigation
  tests, keyboard a11y checks, breakpoints, Lighthouse.
- [ ] Batch 6: product foundation (portals, RBAC, tenant-safe data model)
  — only after the website is stable. Never in this phase.

## Known gaps / follow-ups
- [ ] 375px mobile rendering not visually verified (no live browser in
  this environment) — coordinator to check on a real device.
- [ ] `next build` not run (forbidden for workers) — coordinator builds
  at integration; watch for static-export issues (none expected: no
  dynamic routes, no server actions, no `next/image` optimisation).
- [ ] OG image uses the hero photo; a dedicated 1200×630 OG asset can be
  produced in Batch 3/4.
