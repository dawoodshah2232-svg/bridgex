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
