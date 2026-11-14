# BridgeX — Visual System

The shared visual foundation for the visual-enrichment pass: the icon
set, the cinematic components, the Ken Burns rule, and the motion
rules. Page workers build with these — do not invent parallel
versions. Palette, tokens and typography live in `docs/DESIGN.md`
and `src/app/globals.css`; this file covers only what F1 built.

## Icons — `src/components/icons.tsx`

One cohesive custom SVG set. House style: fine gold line icons,
stroke-based, 24×24 viewBox, `currentColor`, round caps/joins,
default stroke **1.5** (readable at 16px, on maroon and on ivory).
Every path is original hand-drawn geometry — no copied icon-font
glyphs. Icons are decorative (`aria-hidden`); never convey meaning
by icon alone.

### Three ways to use an icon

```tsx
import Icon, { CrmIcon, solutionIcon } from "@/components/icons";

// 1. Generic component (existing callers already use this)
<Icon name="crm" size={28} className="text-bx-gold-600" />

// 2. Individual named component (same props: size, className, strokeWidth)
<CrmIcon size={28} className="text-bx-gold-600" />

// 3. Resolve a content slug to an icon (unknown slugs → "layers")
<Icon name={solutionIcon(solution.slug)} size={28} />
```

Colour: `text-bx-gold-600` on ivory/cream/white, `text-bx-gold-400`
on maroon. Gold-600 on ivory is ~3.9:1 — fine for icons (3:1
graphics threshold), never for small text.

### Full inventory (70 icons)

Every name below exists as an `IconName`, as a named component
(`<CrmIcon />`, `<SearchIcon />`, … — PascalCase + `Icon`), and —
where a slug map applies — in that map.

**Solutions (7)** — in `SOLUTION_ICONS`, keyed by route slug:

| Slug | Name | Metaphor |
|---|---|---|
| `financial-crm` | `crm` | Person with a 360° orbit ring — the whole client |
| `payment-orchestration` | `payments` | One entry routing to many destinations |
| `pamm-copy-trading` | `pamm` | Growth chart on a baseline |
| `ib-incentives` | `ib` | Partner network, three nodes joined |
| `tradeops` | `tradeops` | Control sliders |
| `digital-onboarding` | `onboarding` | ID card with a verified badge |
| `trading-contests` | `contests` | Trophy |

**Industries (9)** — in `INDUSTRY_ICONS`, keyed by route slug:

| Slug | Name | Metaphor |
|---|---|---|
| `multi-asset-brokers` | `brokers` | Candlesticks |
| `banks` | `banks` | Columned institution |
| `securities-derivatives` | `securities` | Certificate with a seal |
| `wealth-management` | `wealth` | Cut gem |
| `asset-fund-managers` | `assetFund` | Allocation pie |
| `exchanges` | `exchanges` | Two-way swap |
| `bonds-fixed-income` | `bonds` | Coupon bond, perforated edge |
| `prop-firms` | `prop` | Target — the challenge to hit |
| `digital-assets` | `digitalAssets` | Chain of nodes in a hexagon |

**Platform layers (4)** — in `LAYER_ICONS`, keyed by route slug
**and** by the layer `id` in `src/content/platform.ts`:

| Slug / id | Name | Metaphor |
|---|---|---|
| `client-experience` / `experience` | `experience` | Person in their own branded window |
| `financial-operations` / `operations` | `operations` | Gear — the engine |
| `integrations` | `ecosystem` | Hub with satellites |
| `analytics` / `intelligence` / `data-intelligence` | `intelligence` | Dashboard: bars under a trend line |

**Feature / benefit (35)** — no slug map; use by name:

| Name | Use for |
|---|---|
| `chart` | Bar chart on an axis — reporting, performance |
| `network` | Mesh network — connectivity, reach |
| `route` | Dashed path between waypoints — journeys, routing |
| `search` | Magnifier |
| `workflow` | Three steps in sequence — processes, automation |
| `report` | Document with bars — exports, board packs |
| `lock` | Padlock — encryption, access control |
| `globe` | Global coverage, regions |
| `clock` | Time, SLAs, speed |
| `spark` | Governed AI assistance, new capability |
| `gauge` | Limits, thresholds, live status |
| `wallet` | Wallets, balances |
| `funnel` | Lead / sales pipeline |
| `key` | Access, credentials, API keys |
| `eye` | Visibility, oversight |
| `link` | Links, connections |
| `star` | Featured, rated |
| `database` | The shared data model |
| `filter` | Filtering, narrowing |
| `phone` | Telephone contact |
| `pin` | Location, offices |
| `info` | Information callouts |
| `alert` | Warnings, exceptions |
| `minus` | Collapse, remove |
| `send` | Send, outreach |
| `play` | Video, walkthrough |
| `download` | Downloads, exports |
| `refresh` | Refresh, sync |
| `headset` | Human support |
| `quote` | Quotation marks (filled, legible small) |
| `checkCircle` | Verified, done |
| `shield` | Security, protection (with check) |
| `users` | People, teams, clients |
| `audit` | Document under a magnifier — audit trail |
| `layers` | Stacked layers — the platform, neutral fallback |

**Generic / chrome (15)** — pre-existing, unchanged: `sliders`,
`arrowRight`, `arrowUpRight`, `chevronDown`, `chevronRight`, `menu`,
`close`, `check`, `plus`, `building`, `book`, `calendar`, `code`,
`mail`, `document`.

### Slug-map helpers

```tsx
import { SOLUTION_ICONS, INDUSTRY_ICONS, LAYER_ICONS,
         solutionIcon, industryIcon, layerIcon } from "@/components/icons";

SOLUTION_ICONS["financial-crm"] // "crm"
solutionIcon("financial-crm")   // "crm" — unknown slug → "layers"
industryIcon("banks")           // "banks"
layerIcon("analytics")          // "intelligence"
layerIcon("data-intelligence")  // "intelligence" (alias)
```

Types `SolutionSlug`, `IndustrySlug`, `LayerSlug` are exported for
typed content. Note: `SearchIcon` here is the magnifier from this
file — it is a different module from the search page's
`src/components/search/SearchIcon.tsx`; import from
`@/components/icons` when you want the magnifier.

### Adding an icon later

Add the name to `IconName`, a `PATHS` entry (24×24, stroke 1.5,
round caps/joins, `currentColor`), and a one-line named export via
`createIconComponent`. Keep it hand-drawn and meaningful at 16px.
Never remove or rename an existing export — content files type
their `icon` fields against `IconName`.

## Shared components — `src/components/ui/`

All image props take a **root-relative public path**
(`"/images/skyline-dusk.jpg"`) and are routed through `asset()` for
the `/bridgex` basePath. All take real `alt` text. All use the
locked palette tokens only — never raw hex, never blue/mint.

### PhotoBand — full-bleed photographic band

```tsx
import PhotoBand from "@/components/ui/PhotoBand";
import { ButtonLink } from "@/components/ui/Button";

<PhotoBand
  image="/images/skyline-dusk.jpg"
  alt="City skyline at dusk, lights coming on across the towers"
  eyebrow="Why BridgeX"
  heading="Built for the business behind the trading."
  copy="One platform for onboarding, operations, payments and growth."
  height="md" // "sm" | "md" | "lg" — default "md"
>
  <ButtonLink href="/book-demo">Book a Private Demo</ButtonLink>
</PhotoBand>
```

Props: `image`, `alt`, `eyebrow?`, `heading?` (ReactNode, so a
Cormorant accent phrase is possible), `copy?`, `children?` (usually
a CTA row, rendered in a wrapping flex), `height?` (`"sm" | "md" |
"lg"`, min-heights 320/420/520px, taller on desktop),
`imageWidth?` / `imageHeight?` (default 1600×900),
`className?`. Image is lazy-loaded — bands sit below the fold.
The maroon gradient scrim is heavy enough for white text at every
height. The content is wrapped in `Reveal` (safe: visible at SSR).

### ImageText — alternating image / text block

```tsx
import ImageText from "@/components/ui/ImageText";

<ImageText
  image="/images/team-discussion.jpg"
  alt="Two BridgeX specialists reviewing documents with a client"
  eyebrow="Client experience"
  heading="Your brand, not ours, on every surface."
  copy="Client rooms, partner portals and advisor interfaces…"
  bullets={["White-label client rooms", "Partner portals", "Advisor interfaces"]}
  ctaLabel="Explore the platform"
  ctaHref="/platform"
  flip // image right, text left on desktop
  tone="cream" // "ivory" | "cream" | "white" — default "ivory"
/>
```

Props: `image`, `alt`, `eyebrow?`, `heading` (ReactNode, required),
`copy?`, `bullets?` (check-marked list), `ctaLabel?` + `ctaHref?`
(both required to render the secondary `ButtonLink`), `flip?`
(mirrors the desktop columns), `tone?`, `imageWidth?` /
`imageHeight?` (default 1200×900, 4:3 crop), `eager?` (loads the
image eagerly with high priority — use for blocks directly below
the hero; React 19 then also preloads it — see HeroMedia),
`className?`, `children?` (extra content between bullets and
CTA). The photo carries a gold hairline frame offset down-right;
the frame lives inside the wrapper's own margin, so it never
overflows — safe at 375px. A warm champagne background sits
behind the photo so the frame never reads as an empty outlined
rectangle while the image loads. On mobile the image always
stacks first (it is first in the DOM).

### HeroMedia — full-bleed hero media layer

```tsx
import HeroMedia from "@/components/ui/HeroMedia";

<section className="relative overflow-hidden bg-bx-maroon-950">
  <HeroMedia
    image="/images/hero-bridge.jpg"
    alt="Cable-stayed bridge at night over a river, city lights"
    scrim="strong"   // "strong" | "medium" — default "strong"
    kenBurns         // default true
    bridgeLine       // gold bridge-line motif along the bottom
  />
  <div className="relative">{/* hero content, H1, CTAs */}</div>
</section>
```

Props: `image`, `alt`, `scrim?`, `kenBurns?` (default true),
`bridgeLine?` (default false), `objectPosition?` (CSS
object-position, default `"50% 50%"` — set it when the subject is
not centred in the frame, e.g. the contests trophy uses
`"50% 30%"` so the cup is fully visible), `imageWidth?` /
`imageHeight?` (default 1920×1080), `className?`. Place as the
first child of a `relative` hero section; content goes in a
`relative` sibling above it. The image is eager with
`fetchPriority="high"` — heroes are above the fold — and React 19
automatically emits a `<link rel="preload" as="image">` for
`fetchPriority="high"` images during SSR, so the photograph
starts loading before the body is parsed (verified in the built
HTML, 14 Nov fix pass). Do NOT add a manual preload link — it
duplicates React's. `scrim="strong"` (flat 50% maroon-950 plus a
vertical gradient, darkest at the bottom where the H1 sits) is
the safe choice for white H1 text over any photograph; use
`"medium"` (flat 35%) only over an already-dark image. Scrims
are deliberately light enough for the photography to show (14 Nov
fix — the old 70% flat left heroes nearly black) while the
gradient stays darkest at the bottom, where the H1 sits. The
bridge-line motif uses the same geometry language as `CtaBand`'s
animated line (static here — the hero's one authored motion is
the Ken Burns drift).

### FeatureIcon — icon tile + label

```tsx
import FeatureIcon from "@/components/ui/FeatureIcon";
import { CrmIcon } from "@/components/icons";

<FeatureIcon icon="crm" label="Financial CRM" size="md" />
<FeatureIcon icon={CrmIcon} label="Financial CRM" tone="dark" />
```

Props: `icon` (an `IconName` string **or** a named icon component),
`label?` (short, one or two words — rendered under the tile in
small tracked capitals), `size?` (`"sm" | "md" | "lg"` — 48/64/80px
tiles, 22/28/36px icons), `tone?` (`"light" | "dark"`),
`className?`. The tile is a **circle** with a thin gold ring —
deliberately not the tinted square the house rules ban: soft
champagne wash + gold-600 icon on light surfaces, deep maroon
wash + gold-400 icon on dark surfaces.

## Ken Burns — usage rule

`.bx-kenburns` (`src/app/globals.css`, `@keyframes bx-kenburns`):
slow scale 1 → 1.08 with a slight translate (−1.5% x, +1% y),
24s `ease-in-out infinite alternate`, transform-only. Scale stays
above 1 whenever the image translates, so no edge gaps appear.
Use it **only** for hero/background photographs (via `HeroMedia`,
or directly on an `object-cover` image inside an `overflow-hidden`
container). Never on content, never on more than one image per
viewport — one slow drift per screen. `prefers-reduced-motion`
disables it entirely (the image sits still); the global
reduced-motion block also caps every animation as a backstop.
The homepage hero keeps its own `animate-bx-drift` (28s) — do not
swap one for the other without a reason.

## Motion rules (standing, non-negotiable)

- **Never `opacity: 0` in an SSR initial state.** Framer-motion
  bakes it into the SSR HTML as an inline style — the hero once
  stayed blank for ~5s on a cold load. Entrances are
  **transform-only** (rise ≤24px, 0.5s, house ease
  `cubic-bezier(.22,1,.36,1)`, stagger capped at 0.15s).
- **Use the existing `Reveal` component** for scroll reveals — it
  animates `y` only, never opacity, so content is at full opacity
  at every moment and a missed trigger can never strand a section
  pale (14 Nov fix: the old opacity fade was caught mid-flight).
  Its hidden state is gated on client mount, so
  SSR/no-JS/reduced-motion always render visible. Never build a
  second reveal.
- **Above-fold hero blocks get no reveal at all** — they render
  visible, with a transform-only entrance if one is authored.
- **Animate transform and opacity only** — never layout properties
  in loops. `prefers-reduced-motion` is honoured everywhere:
  `Reveal` renders visible, Ken Burns stops, `framer-motion`
  `useReducedMotion` gates any authored motion.
- **One authored moment per screen**, not one identical entrance
  on every section. Press feedback is `scale(0.97)` on buttons
  (already in `Button`).
- Tab switchers and step forms: `AnimatePresence initial={false}`;
  the first panel mounts at its animate state.

## Gaps — what page workers may still need

Not built by F1; flag to the coordinator if a page needs one:

- **A stat/metric component** (big number + label) — deliberately
  not built; the craft floor treats the hero-metric template as a
  default to avoid. If a page genuinely needs one, build it in
  page scope with real, sourced numbers only.
- **A logo-strip / marquee component** — not built; there are no
  real client logos to show (never invent any).
- **A video/iframe embed component** — not built; no approved
  video asset exists yet. `play` icon exists for a future trigger.
- **Chart/diagram components** — charts are code (SVG), per page;
  no shared chart component exists. The `chart`, `gauge` and
  `report` icons cover the labelling.
- **Icons not in the set:** no currency symbols, no country flags,
  no social-brand glyphs, no provider logos — all intentional
  (house rules). If a page needs a genuinely new metaphor, add it
  to `icons.tsx` following the rules above.
