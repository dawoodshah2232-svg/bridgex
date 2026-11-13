# BridgeX — Design System

## Palette (locked, spec §1A — tokens in `src/app/globals.css`)
| Token | Hex | Use |
|---|---|---|
| `--bx-maroon-950` | #230B16 | Deepest wine — footer, hero base |
| `--bx-maroon-900` | #360F20 | Primary dark backdrop |
| `--bx-maroon-800` | #52182E | Rich burgundy — dark panels |
| `--bx-maroon-700` | #6A203A | Hover / accents / small label text on light |
| `--bx-gold-600` | #A77A2F | Dark metallic gold — icons, borders, large text |
| `--bx-gold-500` | #C29A55 | Primary gold — buttons, hairlines |
| `--bx-gold-400` | #D9B875 | Luminous champagne — text on dark |
| `--bx-champagne` | #F0DFB8 | Light warm accent — secondary text on dark |
| `--bx-ivory` | #FBF7F0 | Editorial background |
| `--bx-cream` | #F5EEE5 | Alternate light section |
| `--bx-ink` | #1E1920 | Main text |
| `--bx-muted` | #766D73 | Muted text (4.6:1 on ivory) |

Ratio ~60% ivory/white, 30% maroon, 10% gold. Gold is fine brushed metal,
never yellow plastic: flat fills + hairlines, no gradient text, no glows.
The appendix's old blue/mint palette is SUPERSEDED — never use it.

## Typography (self-hosted, `public/fonts/`)
- Display: **Cormorant Garamond** 600/700 (`font-display`) — short
  luxurious emphasis only (italic accent phrases inside sans headlines,
  the footer tagline, the interlude statement). Never body text.
- Headings/UI: **Manrope** variable 400–800 (`font-sans`) — headings,
  navigation, buttons, labels.
- Body: **Inter** variable 400–700 (`font-body`) — paragraphs, tables.
- Scale: H1 clamp 42–76px desktop; section H2 34–48px; body 16–18px,
  line-height 1.45–1.6, measure 45–75ch. Headings `tracking-[-0.02em]`,
  `text-balance`.

## Logo
Original angular B/X bridge glyph: a maroon diagonal bar crossed by a gold
bar that passes behind it at the centre (weave gap). Chosen from three
explorations in `public/brand/explorations/`:
1. Two suspension spans forming an X (cables + suspenders).
2. Angular B/X glyph with a horizontal deck line (chosen direction; the
   deck line was dropped in the final mark for 16px crispness).
3. Interlocking crossing pathways joining four nodes.
Shipped: `bridgex-logo.svg` (dark on light), `bridgex-logo-light.svg`
(light on dark), `bridgex-logo-icon.svg` (symbol only), `favicon.svg`
(maroon rounded square + champagne/gold mark). The wordmark in the SVG
files is Manrope ExtraBold converted to vector outlines (font-independent);
the React `Logo` component renders the symbol as inline SVG + HTML text.
Verified by rasterising: lockups, icon and favicon all render cleanly.

## Layout
- Max width 1280px (`Container`), 1440px for the header. Equal outer
  margins at every width (px-5 → sm:px-8 → lg:px-10).
- 8px spacing system; section padding py-20 → lg:py-32.
- Tone rhythm on the homepage: ivory → cream → maroon → white → photo →
  ivory → cream → maroon → ivory → cream → maroon CTA.
- Buttons: flat, square corners. Primary = gold-500 fill, maroon-950 text.
  Secondary = 2px outline (maroon on light, champagne on dark).
- Hairlines: 1px gold at 25–40% opacity; `GoldLineDivider` adds a rotated
  square (bridge-joint) ornament. No shadows on things at rest; shadows
  only on floating surfaces (mega-menu, hover-lifted tiles).

## Motion
Timing: 140–220ms microinteractions, 450–850ms reveals, 900–2000ms chapter
changes (bridge-line draws). Ease: `cubic-bezier(.22,1,.36,1)`. Press
feedback `scale(0.97)` on buttons. Hero photo: 28s slow drift
(`animate-bx-drift`). Everything honours `prefers-reduced-motion`.

## Photography (all Pexels, bundled in `public/images/`)
| File | Subject | Pexels ID / photographer | Use |
|---|---|---|---|
| hero-bridge.jpg | Cable-stayed bridge at night over a river, city lights | 416940 / Pixabay | H01 hero (1920×1080) |
| skyline-dusk.jpg | Manhattan skyline at dusk | 7078467 / Laura Tancredi | H02 (1600×1067) |
| interlude-boardroom.jpg | Diverse team in a modern conference room | 1181396 / Christina Morillo | H06 interlude (1920×1282) |
| skyline-sunset.jpg | Philadelphia financial-district skyline at sunset | 4642454 | H12 CTA band (1600×899) |
| analyst-workstation.jpg | Analyst at multi-monitor trading workstation | 5831522 / AlphaTradeZone | H11 article 1 (1400×935) |
| team-discussion.jpg | Professionals discussing documents in a meeting room | 7433840 / Vlada Karpovich | H11 article 2 (1400×933) |
| boardroom-meeting.jpg | Business meeting in a modern boardroom | 7433844 / Vlada Karpovich | H11 article 3 (1400×933) |

Alt text reflects the actual imagery. Charts and diagrams are code (SVG),
never images. Footer carries the Pexels credit line.
