# BridgeX — Memory (progress log)

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
