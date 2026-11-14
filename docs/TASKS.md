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

## Done (Batch 2 — complete marketing, 13 Nov 2026)
- [x] All 43 inner routes built by 5 parallel workers (2A platform 8,
  2B solutions 7, 2C industries 9, 2D services/company/legal/demo 12,
  2E resources 7). All 44 routes generate in `next build` (47 static
  pages incl. _not-found). First Load JS 151–163 kB.
- [x] Forms built in Batch 2 (sequencing change from the Batch 1 plan):
  demo (3-step), contact, partner, careers, events-interest — all with
  client validation, honeypot + time-check spam prevention, honest
  localStorage persistence (`bridgex-lead-*`), "saved on this device"
  success copy, backend TODOs. No dead forms at Batch 2 deploy.
- [x] `DARK_HERO_ROUTES` extended to 12 routes (coordinator-owned edit).
- [x] 18 new Pexels photos (platform reused Batch 1; solutions 4,
  industries 8, services/company 3, resources 3), all verified JPEGs.
- [x] Integration fixes: 3 unescaped-apostrophe lint errors (typographic
  ’ now a RULES.md rule). tsc clean, ESLint 0 errors, build passes.

## Next — Batch 2 (complete marketing)
- [x] All inner routes: 8 platform, 7 solution, 9 industry, 4 services
  (incl. overview), 7 resources (incl. blog index reusing
  `src/content/insights.ts`), 4 company, /book-demo, 3 legal.
- [x] Page templates per spec §5/§7–§10: distinct composition per page
  type (solution pages technically precise; industry pages problem-led;
  company pages human; developer pages practical). Each page: unique
  above-the-fold message, specific sections, FAQ, CTA.
- [x] Inner pages clear the fixed 72px header (`pt-[72px]` or hero with
  clearance); `DARK_HERO_ROUTES` extended for dark-hero inner pages.
- [x] Case studies page shows "Case studies coming soon" (no fabricated
  outcomes). Careers shows "No open roles currently listed". About
  invents no history/executives/founding year.
- [x] Book-demo + contact forms: built fully in Batch 2 (see above) —
  the Batch 1 "designed shells" plan was superseded by the coordinator
  so no dead forms ship.

## Done (Batch 3 + Batch 4 — polish + functionality, 13 Nov 2026)
- [x] Batch 3: OG image 1200×630 (hero crop + maroon band); photo swaps
  (exchanges → NYSE facade Pexels 36050277; contests → restrained trophy
  band crop Pexels 6532363); motion audit (reduced-motion everywhere,
  hero drift pauses offscreen, Magnetic CTA wrapper desktop-only);
  responsive audit (keyboard-scrollable tables, body overflow-x clip);
  visual QA (gold-600 small text → maroon-700, trace-line alignment,
  invalid HTML fixed, PAMM numbers reconciled, 1 asset() bug fixed);
  IndustrySelector keyboard support; scrims strengthened.
- [x] Batch 4: /search (client index over 44 routes + insights + guides,
  ?q= deep-links, keyboard nav, header button + footer link); cookie
  banner + versioned consent (footer re-open, honest no-tracking copy);
  sitemap.xml + robots.txt (Next metadata routes); Organization +
  Breadcrumb JSON-LD; FAQ JSON-LD helper (wired on /platform); custom
  404; site.ts config; form verification fixed 3 real bugs (corrupt
  localStorage crash, duplicate honeypot IDs, EventsForm missing
  time-check).
- [x] Coordinator integration: OG image wired into layout metadata;
  stale cookie-policy sentence fixed; last raw-hex class fixed
  (fields.tsx accent). tsc clean, ESLint 0 errors, build passes.

## Done (Batch 5 — verification, 13 Nov 2026)
- [x] tsc clean, ESLint 0 errors, `next build` 50 static pages.
- [x] Live route health: all 44 routes + /search + /sitemap.xml +
  /robots.txt + /og-image.jpg HTTP 200; bogus URL serves branded 404.
- [x] Link audit: 71 distinct internal hrefs, all resolve to built files.
  Asset audit: 98 src references resolve; live asset checks on 5 pages
  (home, contests, exchanges, developers, book-demo) all 200.
- [x] SEO: sitemap 44 URLs (search excluded), robots allow-all, OG image
  URL fixed (double-basePath bug caught live), Organization +
  Breadcrumb + FAQ JSON-LD present in live HTML. All 46 page titles
  unique. No lorem/TODO/FYNXT in built HTML.
- [x] Fixes at integration: sitemap/robots `force-static` (build failed
  without it); OG double-basePath (RULES.md rule added); git pushes
  need HTTP/1.1 on this VM (egress proxy resets HTTP/2 git traffic —
  set in repo config).

## Visual-enrichment pass (14 Nov) — DONE, LIVE
Dawood's verdict: too much text, no images, no relatable icons.
- [x] F1 foundation: 70-icon fine-gold-line SVG set
  (`src/components/icons.tsx`, SOLUTION/INDUSTRY/LAYER slug maps) +
  shared `PhotoBand`, `ImageText`, `HeroMedia` (Ken Burns + scrim),
  `FeatureIcon` + additive Ken Burns CSS + `docs/VISUAL-SYSTEM.md`
- [x] F2 photography: 43 new real Pexels photos bundled (68 total,
  ~13.8 MB) + `docs/IMAGE-MANIFEST.md`; replaced exchanges hero
  (German UI text) and contests trophy (saturated yellow)
- [x] P1–P5: all 44 routes image-led — photographic dark heroes with
  Ken Burns, ImageText blocks, PhotoBand interludes, image cards,
  meaningful icons throughout; previews/forms/FAQs/SEO untouched
- [x] Integration: `DARK_HERO_ROUTES` expanded 12 → 37 entries
  (24 conversions + `/search`); tsc + ESLint clean; 0 `opacity:0`
  in built HTML; all 44 routes + new assets verified live

## Visual-defects fix (14 Nov, after the live browser check of the enriched site)
- [x] (a) First paint: React 19 auto-preloads `fetchPriority="high"`
  hero images (verified in built HTML — do NOT add manual preload
  links, they duplicate); header gets its own gradient scrim when
  over a dark hero; `ImageText` gains an `eager` prop (used by
  `ProblemSection` on all 7 solution pages); warm champagne
  backgrounds behind framed photos; two largest heroes recompressed
  (`industries-exchanges-v2` 610→429 KB, `hero-skyline-sf` 451→296 KB)
- [x] (b) Contests trophy crop: `HeroMedia` gains an `objectPosition`
  prop; contests hero set to `"50% 30%"` so the cup is fully visible
- [x] (c) Empty bands: `Section`/`ImageText` padding `lg:py-32` →
  `lg:py-24` (boundary voids 256px → 192px); follow-on sections +
  RelatedSolutions + JourneySection + page-bottom paddings tightened
  to match; homepage Architecture panel restructured to a full-width
  intro row + full-width layers + foundation bar (no more empty left 40%)
- [x] (d) Face crops: `traders-discussion.jpg` removed (half-face in
  the source — unfixable by re-crop); DemoPreview → `trading-floor-desk`,
  PAMM hero → `team-collaboration` (objectPosition "50% 12%"),
  multi-asset-brokers challenge image → `boardroom-executives`;
  contests award photo cropped below the chin (1600×857)
- [x] (e) Text-led stretches: FeatureIcon tiles on the 5 disconnect
  rows; Integration categories → card grid + maroon CTA card;
  Reliability principles + safe-config strip → FeatureIcon dark md
  tiles; icons beside the 5 implementation step names; RingTile
  enlarged (44→56px) so capability icons read; layer icons 28→32px
- [x] (f) Heroes lightened: HeroMedia strong/medium scrims, home hero,
  InnerHero dark variant, PhotoBand, PhotoInterlude — photography
  shows while H1 contrast stays strong (computed, not guessed)
- [x] (g) Reveal is now transform-only (no opacity animation), so
  content can never be caught pale mid-reveal or stranded below
  full opacity
- [x] Verification: tsc clean; build passes (50/50 pages); 0
  `opacity:0` in built HTML; preload links present on hero pages;
  all 44 routes + changed assets verified live after deploy

## Final polish pass (14 Nov, after the second live browser check)
- [x] (1) Contests headless photo replaced: the tuxedo-man source cuts
  the face at the mouth and the below-chin re-crop still read as a
  torso — swapped for `solutions-contests-statuette.jpg` (gold star
  statuette, Pexels 7005047, pre-cropped to the top 4:3 band); old
  `solutions-contests-award.jpg` deleted from the repo
- [x] (2) CRM problem photo replaced: overexposed faceless handshake
  → `solutions-crm-handshake.jpg` (Pexels 8730120, three
  professionals, all faces in frame); `handshake-deal.jpg` kept —
  still used on /book-demo and in platform.ts
- [x] (3) CRM hero re-cropped: `wealth-meeting.jpg` (NOT
  handshake-partners — that is the IB hero) gains
  `objectPosition: "50% 18%"` — the centred crop cut both heads at
  the top edge; 18% keeps both heads in frame with margin under the
  full Ken Burns drift (verified by simulated crops)
- [x] (4) Two empty bands tightened at the boundary only (NOT global
  padding): homepage Industries bottom + Integration top, and CRM
  PreviewShell bottom + CapabilityGroups top, each to 48px at lg
  (~96px total, matching gaps elsewhere). PreviewShell and
  CapabilityGroups gain an optional `className` prop passed to
  Section; verified in built CSS that Tailwind emits the side
  utilities after `py-24`, so they win
- [x] (5) Home hero scrim lightened again (65/45/25 horizontal,
  bottom gradient 85%) with contrast computed from the photo, not
  guessed: white H1 5th-percentile 12.5:1, champagne support copy
  5.4:1 — both above WCAG AA
- [x] (6) Trophy hero: NO change — 8 warmer Pexels candidates were
  downloaded, visually inspected and rejected (blue/green accents,
  readable text, chrome-silver statue, leopard-print bowl
  reflection, portrait geometry); the current v2 crop stays
- [x] Verification: tsc clean; build passes; 0 `opacity:0` in built
  HTML; all 44 sitemap URLs have built pages; changed assets +
  object-positions + new scrim classes present in built HTML;
  live verification after deploy (see MEMORY.md)

## Later batches (from spec §14)
- [ ] Batch 6: product foundation (portals, RBAC, tenant-safe data model)
  — only after the website is stable and Dawood approves. Never in this
  phase.

## Known gaps / follow-ups
- [ ] 375px mobile rendering not visually verified (no live browser in
  this environment) — check on a real device + live-browser pass.
- [ ] Lighthouse run + keyboard walkthrough still owed (parent's
  live-browser job).
- [ ] FaqAccordion renders only the default-open answer with JS disabled
  (interactive by nature; CSS-only fallback would need a rework).
- [x] Contests hero photo replaced 14 Nov (`solutions-contests-v2.jpg`,
  gold trophy on deep red); exchanges hero replaced the same day
  (`industries-exchanges-v2.jpg`, NYSE at night).
- [x] IB-incentives hero (`handshake-partners.jpg`, centred crop) cuts
  the man's hair at the top edge — FIXED in the photo-crop sweep
  (14 Nov): hero swapped to `solutions-ib-hero.jpg` (Pexels 8730173,
  `objectPosition: "45% 0%"`); see IMAGE-MANIFEST.md sweep record.
- [x] Systematic photo-crop sweep (14 Nov): all 44 pages audited at
  display aspect ratio incl. Ken Burns drift; 9 defects fixed
  (D1–D5 + N1–N3 + N6) — workshop wide variant, IB/CRM hero swaps,
  team-discussion / trader-workstation / company-collaboration
  swaps, boardroom 1400px pre-crop, statuette full-figure rework,
  PageHero + IndustryHero `objectPosition` support. Verified:
  tsc clean, build passes, 0 `opacity:0` in built HTML, live
  curl-verified after deploy (see MEMORY.md).
