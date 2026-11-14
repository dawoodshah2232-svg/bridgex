# BridgeX — Memory (progress log)

## 2026-11-13 — Batch 5: verification (coordinator)
- All 44 routes + search/sitemap/robots/OG live at HTTP 200; branded
  404 on bogus URLs; link audit (71 hrefs) + asset audit (98 srcs)
  clean; 46 unique page titles; JSON-LD verified in live HTML.
- Two integration fixes: (1) sitemap.ts/robots.ts need
  `export const dynamic = "force-static"` under `output: 'export'`
  (build failed without it); (2) OG image URL doubled the basePath
  because `asset()` was passed into metadata — bare paths in metadata
  now (RULES.md rule).
- Infra: git-over-https from this VM resets on HTTP/2 (egress proxy);
  `git config http.version HTTP/1.1` set in both clones. gh-pages
  deploy flow (build → copy out/ + .nojekyll → push → wait for built)
  worked for all 5 deploys.
- Still owed (needs a live browser / real device): visual check at
  375px, scrim strengths, Magnetic feel, keyboard walkthrough,
  Lighthouse run. Batch 6 (product portals) is a separate phase after
  Dawood approves the website.

## 2026-11-13 — Batches 3+4: polish + functionality (2 parallel workers)
- Batch 3 (polish) and Batch 4 (search/cookies/SEO/404/CMS/forms) ran in
  parallel with a strict file split; both respected it (verified via
  git status). One shared file (EventsForm.tsx) received edits from both
  — sequential file-tool edits composed cleanly; coordinator verified
  both changes present.
- Batch 4 form verification found 3 real bugs (localStorage crash on
  corrupt JSON, duplicate honeypot IDs, missing EventsForm time-check) —
  all fixed. Lesson: form code review belongs in the same batch as form
  construction, not a later one.
- OG image wired by coordinator at integration (Batch 3 created the
  file, Batch 4 was told not to touch OG metadata).
- Known limitations carried forward: no live-browser visual check yet
  (375px, scrims, Magnetic feel); FaqAccordion renders only the
  default-open answer with JS disabled; contests photo is a soft-focus
  band crop (no sharp landscape trophy found on Pexels).

## 2026-11-13 — Batch 2: all 44 routes (5 parallel workers)
- 2A platform (8), 2B solutions (7), 2C industries (9), 2D
  services/company/legal/demo (12), 2E resources (7). Zero modified
  tracked files across all workers — scope discipline held.
- Coordinator integration: DARK_HERO_ROUTES extended to 12 routes;
  fixed 3 `react/no-unescaped-entities` errors (straight apostrophes in
  JSX copy → typographic ’; now a RULES.md rule). tsc clean, ESLint
  0 errors, `next build` generates 47 static pages, First Load JS
  151–163 kB.
- Sequencing change: forms built in Batch 2 (demo/contact/partner/
  careers/events) with honest localStorage persistence, so Batch 2
  deploys with zero dead forms. Batch 4 owns search/cookies/SEO/CMS +
  form verification (not form construction).
- Deploy: gh-pages branch (gh token has no `workflow` scope, so the
  Actions workflow file cannot be pushed; held at
  ~/workspace/bridgex-coordination/deploy-pages.yml.held). Publish
  `out/` + `.nojekyll` to gh-pages, wait for Pages `built`.
- Flags for Batch 3: exchanges hero photo has small blurred German UI
  text under the scrim; contests trophy photo is saturated yellow;
  `solutions.ts` is 1,048 lines (data-only, acceptable, could split).

## 2026-11-13 — Batch 1: foundation + homepage
- Scaffold already existed (Next 15.5, Tailwind v4, globals.css tokens,
  placeholder layout/page). No re-init needed.
- Fonts: fetched Google Fonts CSS2 API with a Chrome UA, parsed the latin
  subsets, downloaded 4 woff2 files. Discovery: Cormorant Garamond 600
  and 700 resolve to the SAME variable file (wght 300–700) — both
  @font-face declarations point at identical bytes and browsers
  instantiate at the declared weight. Verified with fontTools.
- Logo: built the weave-X geometry by hand (48×48 viewBox, exact polygon
  math for the over/under gap). First lockup attempt used `<text>` for the
  wordmark — ImageMagick's SVG renderer mangled the tspan and clipped the
  text. Fixed properly: converted "BRIDGEX" to Manrope ExtraBold vector
  outlines with fontTools (instantiated variable font at wght 800,
  SVGPathPen), viewBox tightened to 184×48. Rasterised verification passed
  for both lockups, icon and favicon.
- Photos: image-search CLI returned mostly non-Pexels sources with unclear
  licensing — switched to browser.search for Pexels photo pages, took IDs
  from the returned URLs, downloaded from images.pexels.com with width
  params. All 7 verified with `file` (real JPEGs, expected dimensions).
  Hero visually checked: cinematic cable-stayed bridge at night, ideal
  for the maroon/gold treatment.
- tsc clean on first full run (exit 0). ESLint: 0 errors, 4 accepted
  `no-img-element` warnings (plain img is the documented design choice).
- Href audit: 44 registry routes; all 27 route literals used in
  components resolve to registry entries; no lorem/TODO/placeholder text.
- Header pathname normalisation: `usePathname()` behaviour with basePath
  differs across Next versions, so the header strips a leading `/bridgex`
  and trailing slash before comparing to the registry.

## Decisions to remember
- Spec wins over skill defaults where they conflict (hero eyebrow is
  REQUIRED by spec; impeccable/taste ban it — spec wins).
- Plain `<img>` over `next/image` for static export determinism.
- No social icons in the footer — no real URLs exist yet.
- Groups without overview pages (Solutions, Industries, Company) have
  non-link headings in menus/footers — never dead links.
- Cormorant Garamond is accent-only (italic phrases, tagline, interlude
  statement) — never body text.
- Visual system (14 Nov): one cohesive 70-icon fine-gold-line set in
  `src/components/icons.tsx` with SOLUTION/INDUSTRY/LAYER slug maps;
  shared `PhotoBand`/`ImageText`/`HeroMedia`/`FeatureIcon` in
  `src/components/ui/`; documented in `docs/VISUAL-SYSTEM.md`.
  Photography is real Pexels only, bundled in `public/images/`,
  inventoried in `docs/IMAGE-MANIFEST.md` — never AI images with
  text/numbers/dashboards, never fake client imagery.
- `DARK_HERO_ROUTES` must list every route whose hero is dark
  photographic, or the fixed header renders frosted ivory instead of
  transparent over it (37 entries after the 14 Nov visual pass).
  The 404 page cannot be keyed (bogus pathnames) — frosted header
  there is expected and fine.
- Visual-defects fix (14 Nov, after the live browser check):
  React 19 auto-preloads `fetchPriority="high"` images during SSR —
  verified in built HTML for heroes AND eager ImageText blocks; a
  manual `<link rel="preload">` duplicates it, so never add one.
  `HeroMedia` takes an `objectPosition` prop for off-centre
  subjects (contests trophy "50% 30%", PAMM team "50% 12%").
  `Reveal` is transform-only (no opacity) — content can never sit
  pale. Section rhythm is `py-16 sm:py-20 lg:py-24` (the old
  `lg:py-32` left ~300px dead voids). The fixed header carries its
  own gradient scrim over dark heroes — never rely on the hero
  photo for header contrast. `traders-discussion.jpg` is deleted
  (half-face in the source) — do NOT re-add; see IMAGE-MANIFEST.md
  "Removed (14 Nov fix pass)".
- Final polish pass (14 Nov, after the second live browser check):
  the CRM hero is `wealth-meeting.jpg` (NOT `handshake-partners.jpg`
  — that is the IB-incentives hero), cropped `objectPosition "50%
  18%"` so both heads stay in frame under the Ken Burns drift.
  `solutions-contests-award.jpg` (Pexels 7005636) is deleted — the
  source cuts the man's face at the mouth and the below-chin re-crop
  still read as a torso; do NOT re-add. The contests hero v2 stays:
  8 warmer Pexels candidates were inspected and all rejected (see
  IMAGE-MANIFEST.md rejected log). Section-boundary gaps are fixed
  by passing `pb-*/pt-*` classes to that Section only (via the
  `className` prop PreviewShell/CapabilityGroups now accept) — never
  by changing the global `py-24`; Tailwind v4 emits side utilities
  after `py-*` in the built CSS, so they win. Home hero scrim is
  65/45/25 + bottom 85% (computed: white H1 p5 12.5:1).
- Systematic photo-crop sweep (14 Nov, after the final polish):
  every people-photo usage on all 44 pages was PIL-simulated at
  its display aspect ratio incl. the Ken Burns drift extreme
  (re-derived window: x 5.2–97.8%, y 2.7–95.3% of the rest crop).
  9 defects fixed: workshop wide variant (D1), IB hero swap to
  `solutions-ib-hero.jpg` 8730173 @ 45%/0% (D2), CRM hero swap to
  `solutions-crm-hero.jpg` 36766697 @ 50%/0% (D3 — `wealth-meeting`
  is NO LONGER the CRM hero), `team-discussion` swap to 7644144
  (D4), statuette full-figure edge-extended to 4:3 (D5),
  `trader-workstation` swap to 5831260 centred (N1 — "50% 10%"
  was tried and rejected, it cut the head at the bottom),
  client-experience PageHero "50% 8%" (N2),
  `boardroom-executives` pre-cropped x 0–1400 + asset-fund hero
  "40% 50%" (N3 — a 1560 line was tried and rejected, it cut the
  grey woman's face), `company-collaboration` swap to 4175026
  (N6). `PageHero` and `IndustryHero` now accept an optional
  `objectPosition` (via `HeroImage` / `IndustryImage`). Full
  record in IMAGE-MANIFEST.md ("Systematic photo-crop sweep").
- Re-theme to bridgexapps.com (14 Nov, OWNER DECISION — supersedes
  the Master Prompt's locked maroon/gold/champagne palette):
  light teal/navy theme captured live from bridgexapps.com
  (pixel-sampled hexes). Tokens: navy #0F172A, teal #14B8A6 /
  #0D9488 / #2DD4BF, cyan #06B6D4, mint #F3FDFB–#D9F7F3, slate
  #64748B, amber #FAA556 (sparing), blue #2563EB/#1E3A5F.
  DM Sans throughout (self-hosted variable woff2; Cormorant
  Garamond + Manrope deleted, Inter kept as fallback). Pill
  buttons, rounded-2xl cards, frosted-white header, light footer
  with a dark-navy disclaimer box (NEW copy — needs Dawood's
  review alongside the legal pages), solid teal CTA band (CtaBand
  photo layer removed), navy/teal logo. No "Sign in" / "Get
  started" header links added (no destinations exist — Batch 6
  not built). FeatureIcon circles kept (not bridgexapps' rounded
  squares). Zero old-palette tokens/hex in src/ or built CSS.
  Main cc9d7e5; deployed with the photo swap (gh-pages c035056).
- Forex photo swap (14 Nov, same owner order): 48 generic
  corporate/lifestyle photos replaced with realistic Pexels
  forex-business photography (same filenames); 24 keeps;
  `portrait-executive.jpg` deleted (orphan, zero usages). Alt
  text + width/height updated at all 141 usage sites by script
  (`update-alts.py` + `fixup-alts.py`, in
  ~/workspace/bridgex-coordination/) and verified by
  `verify-alts.py` (0 old alt strings in src/, every explicit
  dim matches the new file). Parent verification of the staged
  files found 6 text/brand defects the photo pass missed plus 1
  incomplete fix: t.me/AlphaTradeZone fills (banking-hall,
  boardroom-meeting), BINANCE blurs (team-discussion,
  wealth-meeting, band-skyline-kl, team-laptop), yellow-diamond
  blur (hero-bridge-rotterdam), hp-logo trim
  (abstract-glass-ceiling → 1920×1080), chin trim
  (band-glass-tower → 1600×1040); rejected pick 5831255
  (workshop-presentation, head cut at the left edge) replaced
  by spare 7567444. First blur round failed 6/6 (boxes
  mispositioned, radius too small, feather left text legible) —
  fixed with sampled-colour fills (t.me) and heavy blurs with
  wide/tight boxes + objective yellow-pixel verification.
  og-image.jpg regenerated (1200×630 crop of the new home hero).
  Main 4b3930b; gh-pages c035056; Pages `built`; live verified
  14/14 pages 200, 8/8 assets at exact byte sizes, deleted files
  404, new alts present / old alts 0 in live HTML, opacity:0 = 0,
  DM Sans + teal tokens in live CSS, zero old-palette hex.
  Full record in IMAGE-MANIFEST.md ("Forex re-theme photo swap").
  Still owed: hero contrast re-verification vs the new photo,
  375px visual check (Dawood's phone), Lighthouse run.
