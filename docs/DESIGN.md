# BridgeX — Design System

## Palette (bridgexapps.com theme — owner override, 14 Nov 2026)
The Master Prompt's maroon/antique-gold/champagne palette is SUPERSEDED.
The site now follows bridgexapps.com: a light fintech SaaS theme — teal
on white, dark navy headings, pale-mint surfaces. Hexes below are
pixel-sampled from bridgexapps.com (14 Nov 2026). Tokens live in
`src/app/globals.css` (`@theme`).

| Token | Hex | Use |
|---|---|---|
| `--bx-navy-950` | #0B1120 | Deepest navy — hero base, darkest bands |
| `--bx-navy-900` | #0F172A | Headings, dark bands, footer disclaimer box |
| `--bx-navy-800` | #1E293B | Inner cards on dark, dark panels |
| `--bx-navy-700` | #334155 | Dark fills, borders on dark |
| `--bx-teal-700` | #0F766E | Eyebrow labels, links on light |
| `--bx-teal-600` | #0D9488 | Icons, links, button hover |
| `--bx-teal-500` | #14B8A6 | Primary teal — buttons, pills, CTA band |
| `--bx-teal-400` | #2DD4BF | Bright teal — text/icons on dark |
| `--bx-teal-300` | #5EEAD4 | Light teal accents on dark |
| `--bx-cyan-500` | #06B6D4 | Teal→cyan gradient end (hero accent phrase) |
| `--bx-mint-50` | #F3FDFB | Alternate light section, hero wash |
| `--bx-mint-100` | #E7F8F5 | Pale-mint surface, photo placeholder |
| `--bx-mint-200` | #E6F7F4 | Pale-teal badge fill |
| `--bx-mint-300` | #D9F7F3 | Pale-teal card border |
| `--bx-slate-500` | #64748B | Body grey-blue |
| `--bx-slate-400` | #94A3B8 | Muted text on dark |
| `--bx-slate-300` | #CBD5E1 | Secondary text on dark |
| `--bx-amber-400` | #FAA556 | Highlight pills/badges ONLY, used sparingly |
| `--bx-blue-600` | #2563EB | Icon blue |
| `--bx-blue-900` | #1E3A5F | Logo wordmark blue |
| `--bx-mist` | #FAFBFB | Footer background |
| `--bx-white` | #FFFFFF | Page background, cards |

Ratio ~70% white/pale-mint, 20% navy, 10% teal. Headings are dark navy
with ONE teal-gradient phrase per hero; body text is grey-blue. Orange
appears only for highlight pills and the footer disclaimer heading.

## Typography (self-hosted, `public/fonts/`)
- **DM Sans** variable 100–1000 (`font-sans` + `font-body`) — ONE clean
  sans family throughout: headings, navigation, buttons, labels, body.
  Headings extra-bold (~800), H1 48–56px, tight tracking; body
  regular/medium 400–500, 16–18px, line-height ~1.6. No serif/display
  face anywhere — Cormorant Garamond was removed in the re-theme.
- Fallback: **Inter** variable 400–700 (bundled, in the font stack).
- Eyebrow labels: uppercase, letter-spaced, teal-700, 12–13px, 600–700
  weight. Scale: H1 clamp 42–76px desktop; section H2 34–48px; body
  16–18px, measure 45–75ch. Headings `tracking-[-0.02em]`,
  `text-balance`.

## Logo
Original angular B/X bridge glyph: a navy diagonal bar crossed by a teal
bar that passes behind it at the centre (weave gap). Chosen from three
explorations in `public/brand/explorations/`:
1. Two suspension spans forming an X (cables + suspenders).
2. Angular B/X glyph with a horizontal deck line (chosen direction; the
   deck line was dropped in the final mark for 16px crispness).
3. Interlocking crossing pathways joining four nodes.
Shipped: `bridgex-logo.svg` (dark on light), `bridgex-logo-light.svg`
(light on dark), `bridgex-logo-icon.svg` (symbol only), `favicon.svg`
(navy rounded square + white/teal mark). The wordmark in the SVG
files is vector outlines converted from the original Manrope ExtraBold
(letterforms unchanged by the re-theme — only the colours were
re-themed to navy/teal); the React `Logo` component renders the
symbol as inline SVG + HTML text in DM Sans.
Wordmark blue is `--bx-blue-900`; the X is teal.
Verified by rasterising: lockups, icon and favicon all render cleanly.

## Layout
- Max width 1280px (`Container`), 1440px for the header. Equal outer
  margins at every width (px-5 → sm:px-8 → lg:px-10).
- 8px spacing system; section padding py-20 → lg:py-24.
- Tone rhythm on the homepage: white → mint → navy → white → photo →
  white → mint → navy → white → mint → teal CTA.
- Buttons: fully pill-shaped (`rounded-full`). Primary = teal-500 fill,
  white text, soft teal shadow. Secondary = white, 1px light-grey
  border (#E2E8F0), navy text. `onTeal` = white pill, teal text, for
  the teal CTA band. `secondaryLight` = white outline on dark.
- Cards: white, `rounded-2xl`, 1px border (teal-500 at 25–40% or light
  grey #E5E7EB), soft shadow on hover. Icons in teal-ring circles
  (`FeatureIcon`) or teal/blue/dark-slate tiles.
- Hairlines: 1px teal at 25–40% opacity; `TealLineDivider` adds a rotated
  square (bridge-joint) ornament. Shadows on floating surfaces
  (mega-menu, hover-lifted tiles, primary buttons).
- Header: sticky, frosted white with backdrop blur, light hairline;
  active nav link teal; teal pill "Book a Demo". Footer: mist
  background, four columns, dark-navy disclaimer box with an orange
  heading and darker inner cards, slim bottom bar.
- Heroes: photographic (realistic forex imagery) with navy scrims and
  a teal-gradient accent phrase in the H1; pale-mint washes and teal
  pill badges on light sections.

## Motion
Timing: 140–220ms microinteractions, 450–850ms reveals, 900–2000ms chapter
changes (bridge-line draws). Ease: `cubic-bezier(.22,1,.36,1)`. Press
feedback `scale(0.97)` on buttons. Hero photo: 28s slow drift
(`animate-bx-drift`). Everything honours `prefers-reduced-motion`.

## Photography (all Pexels, bundled in `public/images/`)
Realistic forex-business photography only: trading desks, monitors with
charts/candlesticks, analysts at screens, trading floors, market-data
walls, brokers at work. No generic corporate lifestyle shots (meetings,
handshakes, boardrooms, seminars, lobbies). The full inventory — every
file, its usages, Pexels ID and verdict — lives in
`docs/IMAGE-MANIFEST.md` (this file no longer keeps its own photo table;
the manifest is the single source of truth).

Alt text reflects the actual imagery. Charts and diagrams are code (SVG),
never images. Footer carries the Pexels credit line.
