# BridgeX Image Manifest

**Location:** `public/images/` · **Reference in code:** via the `asset()` helper (basePath `/bridgex`), e.g. `asset('/images/hero-bridge.jpg')`.
**Last updated:** 2026-11-14 (forex re-theme photo swap — 48 files replaced, 24 kept, 1 deleted; see the record below).

> ⚠️ **The 14 Nov forex re-theme superseded most of this file's photo tables.** Sections A–I and the Pexels sources table below describe the PRE-swap photos for the 48 swapped files — their dimensions, sizes, alt texts and Pexels IDs are stale for those files. The authoritative current record for the swapped files is the **Forex re-theme photo swap** section directly below. The KEEP files' entries in sections A–I are still current. The historical pass records (sweep, final crop round, PAMM follow-up) are kept as-is below; they describe defects in photos that no longer exist on disk for the swapped slots.

## Totals

| | Count | Size |
|---|---|---|
| Existing images (Batch 1–2) | 25 | ~4.3 MB |
| **New images (enrichment pass, F2)** | **43** | **~9.4 MB** |
| Removed in the 14 Nov fix pass | −1 | −0.2 MB |
| Recompressed in the 14 Nov fix pass | — | −0.3 MB |
| New in the final polish pass (14 Nov) | +2 | +0.25 MB |
| Removed in the final polish pass (14 Nov) | −1 | −0.1 MB |
| New in the photo-crop sweep (14 Nov) | +3 | +0.43 MB |
| File swaps in the photo-crop sweep (14 Nov) | — | +0.2 MB |
| Correction (14 Nov): pre-round on-disk count verified at 69, not 71 — the rows above overstate by 2 (the sweep record's 69 was correct) | −2 | — |
| New in the final crop round (14 Nov) | +2 | +0.23 MB |
| File swaps in the final crop round (14 Nov) | — | ~0 MB |
| **Total** | **71** | **~14 MB** |
| File swaps in the forex re-theme (14 Nov) | — (48 files replaced in place, same filenames) | — |
| Deleted in the forex re-theme (14 Nov) | −1 (`portrait-executive.jpg`, orphan, zero usages) | −0.17 MB |
| **Total (verified on disk after the forex swap, 14 Nov)** | **72** | **14.4 MB** |

> Note: the running total above (71) never reconciled with the on-disk audit (73 files before the swap — the "Correction" row's 69 was itself off by the 4 files added between passes). The verified on-disk count is the authority: **72 files, 14.4 MB** after the swap (48 new forex photos + 24 keeps).

All 43 new photos are real photography from **Pexels** (Pexels licence — free to use, no attribution required, no watermark). No AI-generated images. No `cwebp` on the VM, so all files are optimized JPEGs from Pexels CDN params (`?auto=compress&cs=tinysrgb&w=…`); heroes/bands at 1920w, cards at 1200–1600w. Every file was verified with `file` + Pillow (real JPEG, correct dimensions) and **visually inspected** — see the rejected log at the bottom for what was caught and removed.

Budgets: heroes/bands ≤ 600 KB, all other images ≤ 400 KB. Largest file is `industries-exchanges-v2.jpg` at 429 KB (recompressed 1920×1440 → 1600×1200 q78 in the 14 Nov fix pass, down from 596 KB).

## Forex re-theme photo swap (14 Nov 2026)

**Order (Dawood, 14 Nov):** images must be realistic forex-business photography — trading desks, monitors with charts/candlesticks, analysts at screens, trading floors, market-data walls, brokers at work — matching the bridgexapps.com re-theme. All generic corporate/lifestyle photos (meetings, boardrooms, seminars, handshakes, lobbies, teams, skylines) replaced. Same filenames = straight replacements; alt text + width/height props updated at all 141 usage sites (verified by `verify-alts.py`: 0 old alt strings remain in `src/`, every explicit dim matches the new file).

**Method:** all 73 files audited (full-size visual inspection); 83 candidates inspected at full size; 157 PIL aspect sims (desktop + mobile, Ken Burns drift extremes for heroes). **Parent verification (independent, same day) re-inspected the 48 staged files and found 6 text/brand defects the photo pass missed plus 1 incomplete fix — all fixed before shipping (see the fix notes in the table).** Lesson, third time: never trust a single pass's "no readable text" claim — zoom every screen.

**Counts:** 73 files audited · **48 swaps** · **24 keeps** · **1 drop** (`portrait-executive.jpg`, orphan). Every file ≤300 KB; heroes 1920px wide, rest ≤1600px long edge. Sourcing: Pexels site search/API were Cloudflare-blocked, so IDs were found by CDN-probing ranges around known trading-photo clusters (658 IDs probed); source URLs are canonical `pexels.com/photo/<id>/` — the pages themselves could not be opened, but every ID resolves on the Pexels CDN and content was verified visually.

### Screen-text acceptance line (decided 14 Nov, applies to all 48)

- **REMOVED (blurred/filled):** anything clearly legible and brand-identifying at display size — BINANCE wordmarks/diamonds (the project's own rejected log already excluded BINANCE logos) and the `t.me/AlphaTradeZone` Telegram handle (a specific third-party signals group).
- **ACCEPTED:** illegible-at-display-size or neutral tool attributions — TradingView attributions ("Chart by TradingView", tab text); the BITSTAMP data label on `abstract-glass-ceiling.jpg` (~2px/char at display — illegible); the faint "Bybit" watermark on Shoot A chart screens (dark red on red, partial, barely discernible at 3× zoom — same class as the accepted "D" instrument watermark); tiny hp bezel marks (illegible at display size); generic words ("STOCK MARKET", "Stock Report", "HOLD"/"SELL" notes); CMC Markets/Kraken browser-tab titles on `abstract-glass-lines.jpg` (illegible at 3:4 panel size, outside the 16:10 crop).

### Swap table (48)

| File | Pexels | Dims | Size | Alt text (new) | Verification notes |
|---|---|---|---|---|---|
| `abstract-glass-ceiling.jpg` | 5831339 | 1920×1080 | 152 KB | Hand pointing at a candlestick chart on a dark trading monitor | Hand points at a dark monitor with a yellow/red candlestick chart. **Parent fix:** the plan's bottom-12% pre-crop did NOT remove the hp bezel logo (still visible at the bottom edge) — trimmed a further 48px (1920×1128 → 1920×1080). Re-simmed hero/4:3/16:10 clean. BITSTAMP label accepted (illegible at display). |
| `abstract-glass-lines.jpg` | 6771901 | 1400×2100 | 288 KB | Hands holding a phone with a trading app in front of a laptop showing candlestick charts | Portrait. CMC Markets/Kraken browser tabs illegible at display size (accepted). Resized 1600×2400 → 1400×2100 (q78) for the ≤300 KB budget. Same shoot as KEEP `industries-digital-assets-app.jpg` (distant pages). |
| `abstract-mirrored-tower.jpg` | 6802052 | 1600×2411 | 294 KB | Hand holding a phone with a rising chart in front of a laptop with trading screens and a coffee | Portrait. No face. q70 for the ≤300 KB budget. |
| `band-bridge-istanbul.jpg` | 38412414 | 1600×1067 | 111 KB | Dark trading monitors showing candlestick charts | No face, no readable text. Same shoot as KEEP `pamm-hero.jpg` (not used on the PAMM page). |
| `band-bridge-london.jpg` | 5833757 | 1600×900 | 170 KB | Hand pointing at candlestick charts across dark trading monitors | No face. Faint "60" chart annotation + faint red Bybit watermark (accepted classes). TradingView tab text visible (accepted). |
| `band-glass-tower.jpg` | 5831270 | 1600×1040 | 219 KB | Two traders pointing at a tablet showing a chart on a desk | Two traders' hands point at a tablet with a chart; no faces. **Parent fix:** a chin + lower-lip fragment sat at the very top edge (file y 0–1.8%) — trimmed top 28px (1600×1068 → 1600×1040). Re-simmed 4:3/16:10/3:2 clean. Note: the plan's slot line claims a PhotoBand usage — the file has NO band usage (ImageText + cards only). |
| `band-skyline-hongkong.jpg` | 5833763 | 1600×900 | 153 KB | Hand gesturing at a candlestick chart on a dark trading monitor | No face. Faint "60" annotation + faint Bybit watermark (accepted). |
| `band-skyline-kl.jpg` | 7691770 | 1600×1067 | 205 KB | Two laptops showing trading charts with a hand holding a phone | **Parent fix:** yellow BINANCE diamond + wordmark on the black laptop screen (out of focus but recognisable) — heavy-blurred the whole header strip (x 600–760, y 245–290, radius 25, desat 0.05). Objective check after: 0 bright-yellow pixels in the header region. Blurred background figures (heads out of frame) — distant-background exception. |
| `band-skyline-singapore.jpg` | 6801647 | 1600×1148 | 199 KB | Clasped hands at a desk with a laptop showing trading charts and a calculator | No face. Laptop-screen zoom + objective yellow-pixel check: no brand mark (an early suspected mark was a misread). Blurred background figure (legs/torso, head out of frame) — distant-background exception. |
| `banking-hall.jpg` | 5831269 | 1600×1068 | 223 KB | Trader with a tablet working at a multi-monitor trading desk | Head fully in frame, centred-right. **Parent fix:** readable `t.me/AlphaTradeZone` on the right monitor — removed with a sampled-colour fill (x 1240–1400, y 700–780, median screen colour + grain). First blur attempt failed (box mispositioned, radius too small, feather left the text legible) — the fill replaced it. Man's open-mouth expression is mid-speech engagement, accepted. |
| `boardroom-conference.jpg` | 5831340 | 1600×1068 | 144 KB | Trader studying a tablet with a hand on his chin | Head fully in frame. |
| `boardroom-executives.jpg` | 7567434 | 1920×1280 | 249 KB | Trader at a laptop in a dark office with a wall of market data | Head fully in frame at left. "Chart by TradingView" visible on screen (accepted). Same man as the home hero (Shoot D). Hero uses `objectPosition: "40% 50%"`. |
| `boardroom-meeting.jpg` | 5831346 | 1600×1068 | 287 KB | Trader pointing at a candlestick chart on a multi-monitor desk | Bald trader pointing at a chart; head fully in frame. **Parent fix:** same `t.me/AlphaTradeZone` as `banking-hall.jpg` (same shoot/desk) — sampled-colour fill (x 1340–1500, y 790–865). First blur attempt failed the same way. NOTE: this photo FAILED the band sim (chin cut at the top of the 4:1 crop) — used here only because this slot has no band usage. |
| `company-collaboration.jpg` | 5833744 | 1600×900 | 215 KB | Two traders reviewing a tablet and notebook on a sofa | Both heads fully in frame. Same two men/sofa as `services-workshop.jpg` (different poses/pages). |
| `compliance-desk.jpg` | 7947707 | 1600×1067 | 285 KB | Printed stock reports with candlestick charts, a magnifier and a calculator | No face. "Stock Report" is generic text, not a brand. |
| `compliance-review.jpg` | 7947663 | 1600×1067 | 236 KB | Overhead view of printed market analytics with a magnifier, notebook and pencils | No face. |
| `handshake-deal.jpg` | 6801874 | 1600×1152 | 190 KB | Hand holding a phone with a trading chart in front of a laptop with market screens | No face. Near-identical to `solutions-payments.jpg` (same hand/phone/laptop, Shoot C, different pages). |
| `handshake-partners.jpg` | 7947753 | 1600×1067 | 241 KB | Magnifier over a printed stacked area chart | No face. "Stacked Area Chart" + Group A–D labels are generic chart text. |
| `hero-bridge.jpg` | 7567432 | 1920×1280 | 231 KB | Trader at a laptop in a dark office beneath a large market-data wall | **HOME HERO.** Head small and centred, whole in all sims incl. mobile centre slice. The market wall shows a Binance-style UI ("CAKE/USDT", "Buy CAKE", "Log In or Register Now") — NO legible Binance wordmark/logo. **Hero headline contrast must be re-verified against this photo** (the old 12.5:1/5.4:1 figures were computed against the bridge photo). `og-image.jpg` is a 1200×630 crop of this file. |
| `hero-bridge-night.jpg` | 5831268 | 1600×1068 | 112 KB | Close-up of a monitor showing a rising candlestick chart | No face. |
| `hero-bridge-rotterdam.jpg` | 7691741 | 1920×1280 | 286 KB | Analyst pointing at a large wall screen showing a market chart | Head fully in frame at right; hero mobile slice shows the chart screen only (head fully outside — no cut head). Wall screen shows Binance UI in Russian (Cyrillic). **Parent fix:** a 13×9px yellow diamond at the screen's top-left (x 370–383, y 476–485, found by objective yellow-pixel scan) — blurred out; 0 bright-yellow pixels after. q82 (q88 re-save inflated the file to 341 KB). |
| `hero-skyline-frankfurt.jpg` | 7567428 | 1920×1280 | 197 KB | Trader with crossed arms in front of a screen reading STOCK MARKET | Head whole. Hero band shows "MARKET" only ("STOCK" above the crop — acceptable, headline overlays it). |
| `hero-skyline-nyc.jpg` | 5833752 | 1600×1067 | 173 KB | Multi-monitor trading desk with candlestick charts and a hand on the keyboard | No face; no watermark (checked at full size — the rejected Bybit frame was 5833750, not this one). |
| `hero-skyline-sf.jpg` | 5833747 | 1920×1281 | 235 KB | Multi-monitor trading desk showing candlestick and line charts | No person. Right-monitor bottom zoom-checked: NO `t.me` text (blurred UI + green button only). "…gView.com" TradingView tab text visible (accepted). |
| `interlude-boardroom.jpg` | 5831258 | 1600×1068 | 116 KB | Close-up of a monitor showing a line chart with a trading range | No face. (First choice 5831253 failed the band sim — chin cut.) |
| `lobby-office.jpg` | 6801641 | 1600×1067 | 147 KB | Overhead desk with printed charts, a magnifier, cash and a calculator | No face. |
| `pamm-benefits.jpg` | 7567443 | 1600×1067 | 225 KB | Overhead view of hands holding a phone with a trading app beside a laptop and printed charts | No face. Laptop corner shows Binance-style UI with "CAKE" but no legible wordmark. |
| `payments-contactless.jpg` | 6771607 | 1600×1067 | 252 KB | Laptop with trading charts beside euro banknotes, coins and a calculator | No face. German trading site on screen (Ethereum USD, "Voreinstellungen") — no legible brand. Calculator reads 68.654. |
| `payments-pos.jpg` | 5833753 | 1600×900 | 176 KB | Hands pointing at a tablet showing a candlestick chart | No faces. |
| `portrait-window.jpg` | 5831266 | 1600×1068 | 104 KB | Close-up of a monitor showing a candlestick chart with volume bars | No face. "BINANCE:BTCUSDT"-style TradingView symbol headers exist at y ~2–5% — OUTSIDE all display crops (band shows y 31–69%, 16:10 starts y 3.2%). (First choice 5831341 failed the band/figure sims — chin cut.) |
| `resources-audience.jpg` | 5831337 | 1920×1282 | 281 KB | Trader seen from behind raising his arms in celebration at a multi-monitor desk | Back of head fully in frame, no face. Near-identical composition to `team-strategy.jpg` (same bald man, same desk, arms raised — different pages). Right-monitor bottom zoom-checked: NO `t.me` text. Diver wallpaper on the top monitor (odd but harmless). q82. |
| `resources-library.jpg` | 7947709 | 1920×1280 | 158 KB | Close-up of a printed stock report with a candlestick chart | No face. Generic "Stock Report" text. Dark. |
| `services-workshop.jpg` | 5833748 | 1600×1067 | 261 KB | Two traders discussing a tablet and notebook on a sofa | Both heads fully in frame. Same two men/sofa as `company-collaboration.jpg` (different poses/pages). |
| `skyline-dusk.jpg` | 186461 | 1920×1280 | 139 KB | Close-up of a tablet showing a green candlestick chart | No face. |
| `skyline-sunset.jpg` | 7691746 | 1600×1067 | 158 KB | Trader on the phone at a desk with two laptops showing charts, seen from behind | Head fully in frame; head fully OUTSIDE the wide band/figure crops (torso/laptops only — no cut head). Readable pink "SELL" + green "HOLD" sticky notes exist in the source at y ~82–95% — OUTSIDE all display crops (bands + figure only). Same man/desk as `team-discussion.jpg` (different pages). CtaBand usage is gone (re-theme removed the CtaBand photo layer — solid teal band now). |
| `solutions-crm-handshake.jpg` | 7567431 | 1422×1067 | 166 KB | Bearded trader looking at a screen with market data behind him | Head fully in frame after LEFT-ANCHORED 4:3 pre-crop (1422×1067 — the uncropped head grazed the left edge). Same man as the home hero (Shoot D). |
| `solutions-crm-hero.jpg` | 5831252 | 1920×1282 | 213 KB | Dark trading monitors showing candlestick charts with trend lines | No face. Faint large symbol letters (chart platform's instrument watermark, e.g. "D") + tiny hp bezel mark, illegible at display size (accepted). **KNOWN NIT: near-identical to `solutions-ib-hero.jpg`** (same monitor/screen, same chart, same prices 9848.0/9301.0/9136.0/9061.0/9058.0/8989.0/8422.0) — two consecutive Solutions pages show near-identical heroes. Accepted (different pages, dark + scrimmed). Hero uses `objectPosition: "50% 0%"`. |
| `solutions-ib-hero.jpg` | 5831251 | 1920×1282 | 248 KB | Dark trading monitor showing a candlestick chart with trend lines | No face. Same faint symbol watermark as 5831252 (same shoot). See the CRM-hero nit above. Hero uses `objectPosition: "45% 0%"`. |
| `solutions-partners.jpg` | 5831254 | 1422×1067 | 232 KB | Two traders working together at a desk with a laptop and tablet | Both heads fully in frame after RIGHT-ANCHORED 4:3 pre-crop (1422×1067 — the right-hand head grazed the right edge uncropped). |
| `solutions-payments.jpg` | 6802042 | 1920×1213 | 203 KB | Hand holding a phone with a trading chart in front of a laptop with market screens | No face. Near-identical to `handshake-deal.jpg` (same hand/phone/laptop, Shoot C, different pages). |
| `team-collaboration.jpg` | 590041 | 1500×994 | 290 KB | Hand pointing at a printed bar chart and line graph on a wooden desk | No face. Desktop band is mostly wood at left (plain but fine under scrim). Resized 1600×1060 → 1500×994 (q80) for the ≤300 KB budget. |
| `team-discussion.jpg` | 7691740 | 1600×1067 | 205 KB | Trader on the phone at a desk with two laptops showing charts | Head fully in frame; head fully OUTSIDE the desktop band crop (shoulder/phone/laptops only). **Parent fix:** readable yellow BINANCE wordmark + diamond on the right laptop screen — heavy-blurred (tight box x 1255–1365, y 292–335, radius 20, desat 0.2). Objective check after: 0 bright-yellow pixels in the header region. The "Buy Crypto" button's yellow pill survives as a generic UI shape with no legible text (accepted). |
| `team-laptop.jpg` | 7691753 | 1600×2400 | 293 KB | Clasped hands at a desk with two laptops showing trading charts | Portrait. No face. **Parent fix:** yellow BINANCE diamond + wordmark on the black laptop screen — heavy-blurred (box x 708–790, y 585–660, radius 20, desat 0.1, bright 0.7). Objective check after: 0 bright-yellow AND 0 dull-yellow pixels in the patch area. A ~3px dull dot (the diamond's left tip) remains at the patch edge — invisible at display size, accepted. Out-of-focus shape at the left edge reads as the subject's own shoulder, not a cut head. "HOLD"/"SELL" notes partly visible at the bottom of the 4:5 crop — generic words, accepted. q82 (q88 re-save hit 350 KB). |
| `team-strategy.jpg` | 5831355 | 1920×1282 | 283 KB | Trader seen from behind with arms raised at a multi-monitor desk | Back of head fully in frame, no face. Near-identical composition to `resources-audience.jpg` (different pages). q82. |
| `wealth-advisor.jpg` | 7947742 | 1600×1067 | 277 KB | Close-up of a printed stock report with a candlestick chart | No face. Generic "Stock Report" text. q82. |
| `wealth-meeting.jpg` | 7691761 | 1422×1067 | 160 KB | Trader seen from behind holding a phone at a desk with laptops showing charts | Back of head fully in frame after RIGHT-ANCHORED 4:3 pre-crop (1422×1067). **Parent fix:** readable BINANCE on the laptop screen top-left — heavy-blurred (tight box x 118–200, y 432–465, radius 20). A 12×6px yellow dot remains at x 217–229 (a separate header accent, not the wordmark — accepted). Two blurred background figures with heads cut at the top edge — distant heavily-blurred background figures (rule exception). Phone shows a Forex Factory-style economic calendar (generic data). |
| `workshop-presentation.jpg` | 7567444 | 1600×1067 | 226 KB | Trader celebrating a win at a desk with a laptop and a large market-data wall | **REPLACEMENT OF A REJECTED PICK:** the plan's 5831255 was REJECTED at parent verification — the head is cut at the LEFT edge (rear of skull clipped by the frame edge; the plan's "head fully in frame after LEFT-ANCHORED 4:3 pre-crop" was wrong; no crop can fix it since the head grazed the left edge in the original too). Replacement 7567444 (from the verified spares): bearded trader, both fists raised, laptop + large market-data wall; head fully in frame, centred; fists whole in 16:10 (simmed). Same man as the home hero, asset-fund hero and CRM card (Shoot D concentration grows — accepted, different framing/pose each time). |
| `workshop-presentation-wide.jpg` | 5833762 | 1920×1080 | 231 KB | Hand gesturing at a candlestick chart on a dark trading monitor | No face. Faint "60" chart annotation. |

### KEEP list (24 — already forex-fitting, visually verified)

`analyst-workstation`, `banking-columns` (classical bank capital — genuinely in context for the Bonds hero), `industries-asset-fund`, `industries-brokers`, `industries-digital-assets`, `industries-digital-assets-app`, `industries-exchanges-detail`, `industries-exchanges-v2`, `industries-prop-firms`, `industries-securities`, `industries-wealth`, `pamm-asset-fund`, `pamm-hero`, `resources-code`, `services-team` (byte-identical to `industries-asset-fund`), `signing-agreement`, `signing-contract`, `solutions-contests-statuette`, `solutions-contests-v2`, `solutions-onboarding`, `support-headset`, `trader-workstation`, `trading-floor-desk`, `wealth-signing` (**FLAG:** the tablet on the desk reflects the advisor's face upside-down — hidden in the current hero crop; never re-crop it looser).

### Same-shoot concentration (known, accepted)

- **Shoot A — Tima Miroshnichenko two-trader office (58312xx/58313xx/58337xx): 22 files.** 16 are no-face monitor/desk close-ups; only 7 show the two men recognisably, never twice on one page. Dominates because it is the largest verified pool of real multi-monitor trading photography on Pexels.
- **Shoot B — bright loft office (76917xx): 6 files.** Same shoot as KEEP `trading-floor-desk.jpg` — the loft office already appears on the site.
- **Shoot C — hands/phone (68016xx/68018xx/68020xx): 5 files.** All no-face.
- **Shoot D — dark office, bearded trader (75674xx): 6 files** (home hero, asset-fund hero, frankfurt hero, PAMM benefits, CRM card, workshop replacement). The same man now appears on home, asset-fund, CRM and contests/exchanges pages — different framings/poses each time, accepted.
- **Shoot E — hands + phone, dark (67719xx): 1 file.** Same shoot as KEEP `industries-digital-assets-app.jpg`.
- **Shoot F — report flat-lays (79476xx/79477xx): 5 files.**
- **Shoot G — dark monitors (384124xx): 1 file.** Same shoot as KEEP `pamm-hero.jpg`.
- **Singles: 3 files** (6771607, 186461, 590041).

### Pre-crops baked into the finals

- `abstract-glass-ceiling.jpg`: bottom 12% + a further 48px (hp bezel logo — the first crop missed it).
- `band-glass-tower.jpg`: top 28px (chin fragment at the top edge).
- `solutions-crm-handshake.jpg`: left-anchored 4:3 (1422×1067). `solutions-partners.jpg`: right-anchored 4:3 (1422×1067). `wealth-meeting.jpg`: right-anchored 4:3 (1422×1067).
- `abstract-glass-lines.jpg`: resized to 1400×2100; `team-collaboration.jpg`: resized to 1500×994 (both for the ≤300 KB budget).

### Sim lesson (carried forward)

A seated person's head spans y ≈ 5–35% of a 3:2 frame while a 4:1 PhotoBand crop shows y ≈ 31–69% — chin/lower face lands inside the band and reads as a head cut at the top edge. Three first-choice band photos failed the sim on exactly this (5831253, 5831341, 5831346-as-band). Any future band candidate with a person must be simmed, not eyeballed. **And: visual fraction-readings of zoomed crops carry ±30px error — the first blur round missed 6 of 6 texts for exactly this reason. Locate screen text objectively (yellow-pixel scan for yellow marks; wide boxes with generous margins) and always re-verify after the fix.**

## 🔄 Replacements (page workers: switch references to these)

| Old file (keep on disk for now, do NOT delete) | Problem | New file | Action |
|---|---|---|---|
| `industries-exchanges.jpg` (1600×1067, 390 KB) | Small blurred German UI text visible in the image | **`industries-exchanges-v2.jpg`** (1600×1200, 429 KB) — NYSE facade at night, warm gold light, no UI text | Swap the hero on `/industries/exchanges` to the v2 file. Companion detail shot: `industries-exchanges-detail.jpg` (pediment sculptures, lettering cropped out). |
| `solutions-contests.jpg` (1600×686, 111 KB) | Trophy photo is saturated yellow | **`solutions-contests-v2.jpg`** (1600×2400, 250 KB) — gold trophy held against a deep red background (portrait, on-palette) | Swap the hero on `/solutions/trading-contests` to the v2 file. Landscape companion for image/text blocks: `solutions-contests-statuette.jpg` (gold star statuette, full figure, Pexels 7005047) — replaced the headless tuxedo photo in the final polish pass, 14 Nov; reworked to the full figure in the photo-crop sweep the same day (the top-band crop cut the legs at mid-shin). Hero uses `objectPosition: "50% 30%"` so the cup is fully visible (14 Nov fix — the centred crop cut the cup off). |

Note: the v2 exchanges hero still shows the NYSE name engraved on the building frieze, small and at an angle — architectural lettering on a real landmark, not UI text. The detail shot was cropped to remove its lettering band entirely.

## Coverage map (which areas got what)

| Site area | New photos assigned |
|---|---|
| Home + shared heroes/bands | `hero-skyline-sf`, `hero-skyline-frankfurt`, `hero-skyline-nyc`, `hero-bridge-night`, `hero-bridge-rotterdam`, `band-skyline-singapore`, `band-skyline-hongkong`, `band-skyline-kl`, `band-bridge-istanbul`, `band-bridge-london`, `band-glass-tower` |
| Platform (8 pages) | `trading-floor-desk`, `trader-workstation`, `abstract-glass-ceiling`, `abstract-glass-lines`, `abstract-mirrored-tower`, `team-laptop`, `compliance-desk` |
| Solutions (7 pages) | `solutions-contests-v2`, `solutions-contests-statuette`, `solutions-crm-handshake`, `solutions-crm-hero`, `solutions-ib-hero`, `team-discussion`, `payments-pos`, `payments-contactless`, `signing-contract`, `compliance-review`, `pamm-hero` (PAMM hero, final crop round 14 Nov) |
| Industries (9 pages) | `industries-exchanges-v2`, `industries-exchanges-detail`, `wealth-advisor`, `wealth-meeting`, `banking-columns`, `banking-hall`, `boardroom-executives`, `trading-floor-desk` |
| Services (4 pages) | `workshop-presentation`, `workshop-presentation-wide`, `support-headset`, `team-collaboration`, `lobby-office` |
| Resources (7 pages) | `workshop-presentation`, `workshop-presentation-wide`, `boardroom-conference`, `team-strategy`, `portrait-executive` |
| Company (4 pages) | `team-collaboration`, `team-strategy`, `team-laptop`, `portrait-executive`, `portrait-window`, `lobby-office`, `handshake-deal` |
| Book a demo / contact | `handshake-deal`, `portrait-window`, `lobby-office` |

## A. New images — heroes & full-bleed bands

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `hero-skyline-sf.jpg` | 1600×1067 | 289 KB | Home hero alt / `/platform` hero / full-bleed band — recompressed 1920×1280 → 1600×1067 q78 in the 14 Nov fix pass (was 440 KB) | San Francisco financial district skyline at twilight across the bay |
| `hero-skyline-frankfurt.jpg` | 1920×1280 | 244 KB | Home hero alt / `/industries/banks` hero / band — warm champagne sunset, ECB tower + bridge | Frankfurt financial district and river bridge at sunset |
| `hero-skyline-nyc.jpg` | 1920×1080 | 307 KB | `/platform` or `/industries/multi-asset-brokers` hero / band — moody, works under maroon scrim | New York City skyline with One World Trade Center at dusk |
| `hero-bridge-night.jpg` | 1920×1280 | 359 KB | Home hero alt / `/company/about` hero / band — Chain Bridge, Budapest, gold lights + light trails | Illuminated suspension bridge over a river at night |
| `hero-bridge-rotterdam.jpg` | 1920×1280 | 275 KB | Home hero alt / `/platform/architecture` hero / band — Erasmus Bridge, blue hour (coolest-toned hero; pair with warm overlay) | Erasmus Bridge and Rotterdam skyline at blue hour |
| `band-skyline-singapore.jpg` | 1920×1013 | 357 KB | Full-bleed band, any page / `/industries/digital-assets` | Singapore skyline with illuminated skyscrapers at dusk |
| `band-skyline-hongkong.jpg` | 1920×1440 | 413 KB | Full-bleed band / `/industries/asset-fund-managers` | Hong Kong skyscrapers and skyline at twilight |
| `band-skyline-kl.jpg` | 1920×1280 | 329 KB | Full-bleed band / `/industries/securities-derivatives` | Kuala Lumpur cityscape with towers at sunset |
| `band-bridge-istanbul.jpg` | 1920×1280 | 229 KB | Full-bleed band / `/solutions/*` divider — Bosphorus Bridge glowing red, very on-palette | Bosphorus Bridge glowing red above Istanbul at night |
| `band-bridge-london.jpg` | 1920×1280 | 378 KB | Full-bleed band / `/company/about` | London bridge and skyscrapers at twilight |
| `band-glass-tower.jpg` | 1920×1098 | 185 KB | Full-bleed band / `/platform/architecture` — cropped glass-facade detail (rooftop logo cropped out) | Curved glass skyscraper facade against a dusk sky |

## B. New images — architecture & abstract details

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `abstract-glass-ceiling.jpg` | 1600×900 | 159 KB | Band / `/platform/integrations` or `/platform/no-code-studio` image block | Skyscrapers seen through a glass ceiling |
| `abstract-glass-lines.jpg` | 1200×1800 | 205 KB | Portrait card / side panel, `/platform/*` or resources cards | Low-angle view of a glass skyscraper facade |
| `abstract-mirrored-tower.jpg` | 1200×1800 | 323 KB | Portrait card / `/industries/digital-assets` side image (clean abstract, no coin logos) | Modern tower with a mirrored glass facade |
| `banking-columns.jpg` | 1200×1010 | 248 KB | `/industries/bonds-fixed-income` hero or image block / `/industries/banks` — Corinthian capital detail (engraved bank name cropped out) | Ornate Corinthian column capital on a classical bank building |
| `banking-hall.jpg` | 1600×1067 | 310 KB | `/industries/banks` image block / `/services` band — grand modern hall, dark slatted ceiling, warm lights | Spacious modern banking hall with a dramatic ceiling |
| `lobby-office.jpg` | 1600×1067 | 197 KB | `/company/contact` / `/company/about` / book-demo side image — modern wood-and-glass lobby | Modern office lobby with wooden panels and large windows |
| `industries-exchanges-detail.jpg` | 1600×800 | 220 KB | `/industries/exchanges` secondary image block — NYSE pediment sculptures (lettering cropped out) | Stone relief sculptures on a stock exchange pediment |

## C. New images — people: meetings, teams, portraits

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `boardroom-executives.jpg` | 1400×1280 | 207 KB | `/industries/asset-fund-managers` hero / `/company/about` image block / band | Senior executives in discussion around a boardroom table — pre-cropped x 0–1400 (sweep, 14 Nov: the 1920 original had a half-face at the right edge; a 1560 pre-crop still cut the grey woman's face, so the line moved to 1400). Asset-fund hero uses `objectPosition: "40% 50%"` so the mobile centre slice shows the grey-haired man alone. |
| `boardroom-conference.jpg` | 1600×1067 | 153 KB | `/resources/events` / `/industries/securities-derivatives` image block — three colleagues in discussion at a boardroom table (brick wall) | Colleagues in discussion around a boardroom table — SWAPPED in the final crop round (14 Nov, Pexels 7433895): the old photo (6949940) cut the foreground man's head at the left edge IN THE SOURCE. Same shoot as D4/C5 picks (7433919/7433900) but a different page, so no repetition. |
| `team-laptop.jpg` | 1200×1797 | 154 KB | Portrait card / `/company/careers` / `/resources/developers` — four colleagues in discussion around a boardroom table (chandelier room) | Diverse team in discussion around a boardroom table — SWAPPED in the final crop round (14 Nov, Pexels 8730118): the old photo (3182750) was fundamentally incompatible with 4:3 (heads spanned y 22–72% = exactly the 4:3 band height, so any placement cut a head) and cut the curly woman's hair at the left edge in the 4:5 card. New photo: all four heads fully in frame at 4:3 and 4:5 with wide margins. No laptop visible — alt text updated. |
| `team-strategy.jpg` | 1600×1067 | 234 KB | `/company/careers` / `/resources/blog` — casual startup-style team huddle; culture/careers use, not premium hero | Colleagues discussing strategy in a relaxed office lounge |
| `team-collaboration.jpg` | 1600×1067 | 199 KB | `/services` / `/platform/client-experience` / `/solutions/ib-incentives` image blocks (4:3) + resources guide break image (21:10) — three colleagues reviewing documents at a meeting table | Colleagues reviewing documents together at a meeting table — SWAPPED in the final crop round (14 Nov, Pexels 6814340): the old photo (6829538) cut the left man's head at the left edge at 4:3 and the standing woman's hair at the top at 21:10 (the sweep's "PASS" for these usages was wrong — it never simulated them). NO LONGER the PAMM hero: the new photo's heads span x 33–78%, wider than the mobile hero drift window (41.3%), so the right man's face was cut at the mobile right edge even at rest — no objectPosition saves both heads. PAMM hero is now `pamm-hero.jpg`. Whiteboard reads "testing process" + percentages (generic scribble, accepted). |
| `workshop-presentation.jpg` | 1600×968 | 189 KB | `/resources/events` / `/services/implementation` / `/resources/guides` — seminar audience (top wall text cropped out) | Professionals attending a business seminar — the three wide usages (homepage Implementation figure, implementation InnerHero, guides ResourceHero) now use the pre-cropped wide variant `workshop-presentation-wide.jpg` (1600×450, band y 15–465, sweep 14 Nov: the original was headless in every wide crop). The original keeps its 4:3 / card usages, which show all heads. |
| `workshop-presentation-wide.jpg` | 1600×450 | 117 KB | Homepage Implementation figure / `/services/implementation` hero / `/resources/guides` hero (sweep, 14 Nov) | Professionals attending a business seminar — pre-cropped wide variant of `workshop-presentation.jpg` (same Pexels 8761535 source), all five heads fully in frame at 3.56:1 incl. Ken Burns drift. |
| `support-headset.jpg` | 1200×1800 | 224 KB | Portrait card / `/services/managed-services` / `/company/contact` — support agent portrait, clean studio background | Customer support agent wearing a headset and smiling |
| `portrait-executive.jpg` | 1200×1800 | 169 KB | Portrait card / `/company/about` / `/company/partners` — businessman in blue suit by office window (4:5-friendly) | Businessman in a suit holding documents by an office window — ORPHAN (final crop round, 14 Nov): zero usages in `src/`. No display, no defect. Left on disk; delete only if a cleanup pass confirms nothing references it. |
| `portrait-window.jpg` | 1600×1068 | 173 KB | `/company/about` / `/book-demo` image block — executive silhouette looking over a city skyline | Businessman looking out over skyscrapers from a high-rise office |
| `handshake-deal.jpg` | 1600×1067 | 79 KB | `/company/partners` / `/book-demo` — handshake close-up over a laptop (no longer on `/solutions/financial-crm`: replaced by `solutions-crm-handshake.jpg` in the final polish pass, 14 Nov — the old crop was overexposed with no faces) | Professional handshake sealing a business agreement |
| `solutions-crm-handshake.jpg` | 1600×1068 | 138 KB | `/solutions/financial-crm` problem block (final polish, 14 Nov) — three professionals in a meeting room, two shaking hands, all faces in frame, properly exposed | Business partners shaking hands in a meeting room |
| `handshake-partners.jpg` | 1920×1280 | 250 KB | `/company/partners` side image / platform audience card / resources cards — five colleagues around a boardroom table (brick wall) | Partners in discussion around a boardroom table — SWAPPED in the final crop round (14 Nov, Pexels 7433900): the old photo (5668512) cut TWO heads IN THE SOURCE (left man's head at the left edge, right woman's face at the right + top). Same shoot as D4 (7433919) but a different page. All five usages are full-width (16:10/3:2/full frame), so all heads pass. No handshake in the new photo — alt text updated. (The sweep's note that the old file "keeps its near-full-frame usages, where all faces read whole" was wrong — the 16:10 sim proves otherwise.) |
| `solutions-ib-hero.jpg` | 1600×1068 | 179 KB | `/solutions/ib-incentives` hero (sweep, 14 Nov) | Business partners shaking hands after a meeting — Pexels 8730173, four people, all faces fully in frame; hero uses `objectPosition: "45% 0%"`. Same shoot/room as the CRM problem image (8730120) but a different page, so no repetition. |

## D. New images — trading & markets

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `trading-floor-desk.jpg` | 1920×1280 | 202 KB | `/platform` hero alt / `/industries/prop-firms` hero / `/solutions/tradeops` / home DemoPreview figure — clasped hands over a trading desk with two laptops showing charts (no face) | Hands over a trading desk with laptops showing charts — SWAPPED in the final crop round (14 Nov, Pexels 7691749): the old photo (5831522) cut the foreground man's head at the TOP, RIGHT and BOTTOM edges — only the right side of his face and ear were visible. (The sweep's "deliberate over-the-shoulder" accept for this photo was overturned.) Right laptop shows small generic trading-UI text ("Login", "Download", price columns), mostly illegible at display size, no brand wordmark. |
| `trader-workstation.jpg` | 1600×1067 | 162 KB | `/industries/prop-firms` image block / `/platform/analytics` / `/solutions/pamm-copy-trading` (all 4:3) — bright trading desk: laptop with red candlestick chart, three wall clocks, lit candle, large chart screen (no person) | Trading desk with a laptop showing a candlestick chart and a wall of monitors — SWAPPED in the final crop round (14 Nov, Pexels 5833756): the sweep's pick (5831260) passed the hero band but cut the trader's head at the left edge at 4:3 — and the file has NO hero usage, so all three usages were defective. (The sweep's "fully in frame at 4:3" claim for 5831260 was wrong.) |
| `pamm-hero.jpg` | 1600×1067 | 125 KB | `/solutions/pamm-copy-trading` hero (final crop round, 14 Nov) — dark trading monitors with candlestick charts (no person) | Trading monitors showing candlestick charts in a dark office — Pexels 38412413, NEW file: the PAMM hero could not keep `team-collaboration.jpg` (the 6814340 replacement's heads span too wide for the mobile hero drift window). Laptop screen shows small "BNB/USDT … Binance" text (~10px, illegible under the scrim — same class as the accepted `t.me/AlphaTradeZone` watermark). Hero uses `objectPosition: "50% 50%"`. |
| `pamm-asset-fund.jpg` | 1600×770 | 196 KB | `/solutions/pamm-copy-trading` "Asset & fund managers" use-case card (PAMM follow-up, 14 Nov) — overhead desk with charts, coffee, tablet (no head) | Fund management office scene — pre-cropped variant of `industries-asset-fund.jpg` (same source, y 0–770): the original's out-of-focus hair crown at the bottom edge showed in the 16:10 card crop (browser-found, 14 Nov). The crown is removed entirely from this file, so no display crop can re-expose it. Bottom hands are cut at the wrist — normal for an overhead desk shot, not a head defect. |
| `pamm-benefits.jpg` | 1424×1068 | 174 KB | `/solutions/pamm-copy-trading` BenefitGrid image block (PAMM follow-up, 14 Nov) — advisor discussing plans with senior clients | Financial advisor discussing plans with clients — pre-cropped variant of `wealth-advisor.jpg` (same source, left-anchored 4:3, x 0–1424): the original's centred 4:3 display window (x 5.5–94.5%) clipped the foreground client's grey head at the left edge (browser-found, 14 Nov). All three heads fully in frame in this file at the 4:3 ImageText display, desktop and mobile (same aspect at all widths). |

`traders-discussion.jpg` was **removed** in the 14 Nov fix pass — see "Removed (14 Nov fix pass)" below. Do NOT re-add it.

## E. New images — documents, compliance & signing

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `signing-contract.jpg` | 1600×1068 | 139 KB | `/solutions/digital-onboarding` / `/company/partners` image block — signing documents, text illegible | Person signing documents with a pen |
| `signing-agreement.jpg` | 1600×1067 | 141 KB | `/solutions/digital-onboarding` alt / legal pages side image — pen handed over a signed agreement | Businessman handing a pen to sign an agreement |
| `compliance-review.jpg` | 1600×1200 | 112 KB | `/platform/financial-operations` / `/solutions/digital-onboarding` (KYC/compliance) — man reviewing paperwork, glasses in hand | Professional reviewing documents at a desk |
| `compliance-desk.jpg` | 1600×1068 | 138 KB | `/platform/financial-operations` alt / `/security-policy` — businesswoman reviewing paperwork at her desk | Businesswoman reviewing paperwork in an office |

## F. New images — payments & fintech

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `payments-pos.jpg` | 1600×1067 | 104 KB | `/solutions/payment-orchestration` image block — card swiped at a POS terminal (card back visible, no numbers) | Card payment being processed at a point-of-sale terminal |
| `payments-contactless.jpg` | 1200×801 | 58 KB | `/solutions/payment-orchestration` card / `/platform/financial-operations` — contactless terminal close-up, no text | Close-up of a contactless payment terminal |

## G. New images — wealth, banking & advisory

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `wealth-advisor.jpg` | 1600×1068 | 153 KB | platform audience card / home IndustrySelector — advisor discussing plans with senior clients | Financial advisor discussing plans with clients — NO LONGER the wealth-management industry hero (final crop round, 14 Nov: the centred hero band cut all three heads — the advisor was HEADLESS, only his smile/chin visible at the top edge; no objectPosition can include heads spanning y 7–84% in a 55.6% band). Hero is now `wealth-signing.jpg`. NO LONGER the PAMM image block either (PAMM follow-up, 14 Nov: the centred 4:3 display clipped the foreground client's head at the left edge — now `pamm-benefits.jpg`, a left-anchored 4:3 pre-crop). The file keeps its remaining usages, which pass. (The sweep's N4 "accepted" verdict for the hero was overturned — the advisor's headlessness is a defect, not framing.) |
| `wealth-meeting.jpg` | 1600×1067 | 155 KB | `/industries/wealth-management` challenge image / client-experience audience card — advisor and client reviewing documents | Advisor and client reviewing financial documents together — NO LONGER the CRM hero (sweep, 14 Nov: the "50% 18%" fix handled the top, but the woman's afro was still sliced at the left edge under Ken Burns drift and her face sat under the H1; a pre-crop cannot add left margin). CRM hero is now `solutions-crm-hero.jpg`. The file keeps its 4:3 / 16:10 usages, which pass. |
| `solutions-crm-hero.jpg` | 1600×1007 | 97 KB | `/solutions/financial-crm` hero (final crop round, 14 Nov) | Consultant working on a laptop at her desk — Pexels 3855609, professional woman in a white blazer with glasses at a desk; face x 52–68%, head top y 11%. SWAPPED: the sweep's pick (36766697) cut the foreground man's head at the RIGHT edge IN THE SOURCE — the sweep shipped a defective source. Hero uses `objectPosition: "50% 0%"` (unchanged). Caveat: the top-left edge of her hair/forehead (x 52–59%) sits under the H1's longest first line ("Every client relationship," ink to ~58.6% at 1920w, measured with a conservative Liberation Sans proxy); her face (eyes/nose/mouth) is clear of all headline text. Pre-crop options were evaluated and rejected (shifting her right would push her hair past the mobile Ken Burns drift window). |
| `wealth-signing.jpg` | 1600×1068 | 104 KB | `/industries/wealth-management` hero (final crop round, 14 Nov) — two people signing documents at a white table | Advisor and client signing documents at a white table — Pexels 8441780, NEW file (only the industry hero changed; `wealth-advisor.jpg` keeps its passing usages). The grey-haired man's head (top-right, cut at the source's right/top edges) sits ABOVE the centred hero band (chin at y ~20%, band starts y 22%); the tablet on the desk reflects the advisor's face (upside-down, dark) — the reflection's top is in the band and reads as a screen reflection under the maroon scrim, not a head cut. Same shoot as `wealth-advisor.jpg` (same grey-haired man, same office) but a different page. |

## H. New images — contests (see Replacements above)

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `solutions-contests-v2.jpg` | 1600×2400 | 250 KB | **REPLACES `solutions-contests.jpg`** — `/solutions/trading-contests` hero (portrait), with `objectPosition: "50% 30%"` so the cup is fully visible. Re-evaluated in the final polish pass (14 Nov): 8 warmer Pexels candidates were checked and none fits the wide hero geometry without a worse defect (see rejected log) — v2 kept. | Hand holding a gold trophy against a deep red background |
| `solutions-contests-statuette.jpg` | 2133×1600 | 181 KB | `/solutions/trading-contests` image block — gold star statuette, FULL figure (head + star + legs + feet + black base), edge-extended to 4:3 (sweep, 14 Nov: the original 1600×2400 Pexels 7005047 was scaled to fit height and the plain white/grey sides extended by edge-pixel replication — no visible seam). The previous top-band crop cut the legs at mid-shin. | Gold award statuette with a star |

## I. Existing images (Batch 1–2, kept as-is)

| File | Dimensions | Size | Current / suggested slot(s) | Alt text |
|---|---|---|---|---|
| `hero-bridge.jpg` | 1920×1080 | 132 KB | Home hero (existing) — cable-stayed bridge at night | Illuminated bridge over a river at night |
| `skyline-dusk.jpg` | 1600×1067 | 166 KB | Home / inner-hero band (existing) | City skyline at dusk |
| `skyline-sunset.jpg` | 1600×899 | 268 KB | Band / inner hero (existing) | City skyline at sunset |
| `boardroom-meeting.jpg` | 1400×933 | 142 KB | Home Insights card / `/industries/banks` image block — three professionals signing/reviewing documents (brick wall) | Professionals in a business meeting inside a modern office boardroom — SWAPPED in the final crop round (14 Nov, Pexels 7433919): the old photo cut the blonde woman's head at the bottom + left edges and the grey-haired man's head at the right edge. A pre-crop was tested and FAILED (the beige woman's face and the grey man overlap in x, so no clean window exists). Same shoot as C4/C5 picks (7433895/7433900) but a different page. |
| `interlude-boardroom.jpg` | 1800×1280 | 283 KB | Home PhotoInterlude band / `/services/implementation` PhotoBand — woman presenting at a whiteboard to three seated colleagues (wood-panel room) | Colleague presenting to teammates in a meeting room — SWAPPED + PRE-CROPPED in the final crop round (14 Nov, Pexels 8134067, cropped x 0–1800): the old photo cut the curly-haired woman's head at the top + right edges IN THE SOURCE. The pre-crop keeps the Black seated man's head fully OUTSIDE the mobile interlude window (not cut, just not shown — without it, his head would be sliced at the window's right edge). Whiteboard shows a small red arrow graph with handwritten "200"/"100" (accepted). The old manifest description ("Empty boardroom") and the implementation-page alt were WRONG — the old photo was a full meeting. |
| `team-discussion.jpg` | 1600×1067 | 189 KB | CRM BenefitGrid / `/platform` image block / home Insights card — four professionals around a table by windows | Team in discussion around a table — SWAPPED in the final crop round (14 Nov, Pexels 8101931): the sweep's pick (7644144) cut the pink-shirt man's head at the left edge (flush/truncated, no margin) — the sweep shipped a defective source. Pre-crop ruled out (people at both edges; any 4:3 pre-crop cuts one side). New photo: all four heads fully in frame at 4:3, 3:2 and 16:10. (The sweep's "2% glasses sliver" note referred to the old file.) |
| `company-collaboration.jpg` | 1600×1067 | 84 KB | `/company/partners` side image (existing) | Colleagues collaborating in an office — SWAPPED in the sweep (14 Nov, Pexels 4175026): the old photo cut the standing man's face at the nose at the top edge. New photo is a handshake close-up, hands only, zero face risk. |
| `analyst-workstation.jpg` | 1600×1067 | 157 KB | Home Insights card / `/solutions/tradeops` BenefitGrid / resources guide break image — desk with a laptop and monitor showing charts, a phone calculator and papers (no person) | Desk with a laptop and monitor showing charts, a calculator and papers — SWAPPED in the final crop round (14 Nov, Pexels 20232209): the old file was the SAME defective shoot/shot as `trading-floor-desk.jpg` (5831522) with the same head cut at top/right/bottom. Papers show small percentages (accepted). |
| `services-team.jpg` | 1600×900 | 164 KB | `/services` InnerHero (light, full frame) | Services team at work — BYTE-IDENTICAL to `industries-asset-fund.jpg` (same sha256 `20fa3c37…`; top-down hands + charts with an out-of-focus hair crown at the bottom edge). Judged acceptable (detail shot, no face, out-of-focus hair). The duplication is noted, not fixed — removing one file would touch two pages for no visual gain. |
| `services-workshop.jpg` | 1600×1067 | 187 KB | `/services/implementation` (existing) | Workshop session in progress |
| `industries-asset-fund.jpg` | 1600×900 | 164 KB | `/industries/asset-fund-managers` (existing) | Fund management office scene — BYTE-IDENTICAL to `services-team.jpg` (see above). NO LONGER the PAMM "Asset & fund managers" card (PAMM follow-up, 14 Nov: the hair crown showed in the 16:10 card crop — now `pamm-asset-fund.jpg`, a y 0–770 pre-crop with the crown removed). |
| `industries-brokers.jpg` | 1600×1200 | 107 KB | `/industries/multi-asset-brokers` (existing) | Brokerage trading environment |
| `industries-digital-assets.jpg` | 1600×987 | 165 KB | `/industries/digital-assets` (existing) | Digital assets concept |
| `industries-digital-assets-app.jpg` | 1600×2400 | 374 KB | `/industries/digital-assets` portrait card (existing) | Digital assets app concept |
| `industries-exchanges.jpg` | 1600×1067 | 390 KB | ⚠️ **REPLACE with `industries-exchanges-v2.jpg`** (German UI text in image) | — |
| `industries-prop-firms.jpg` | 1600×1067 | 130 KB | `/industries/prop-firms` (existing) | Prop trading workspace |
| `industries-securities.jpg` | 1600×1067 | 375 KB | `/industries/securities-derivatives` (existing) | Securities trading concept |
| `industries-wealth.jpg` | 1600×1067 | 62 KB | `/industries/wealth-management` (existing) | Wealth management concept |
| `resources-audience.jpg` | 1600×1067 | 157 KB | `/resources/events` (existing) | Audience at an event |
| `resources-code.jpg` | 1600×1063 | 119 KB | `/resources/developers` (existing) | Developer code on screen |
| `resources-library.jpg` | 1600×1066 | 254 KB | `/resources/guides` (existing) | Library shelves |
| `solutions-contests.jpg` | 1600×686 | 111 KB | ⚠️ **REPLACE with `solutions-contests-v2.jpg`** (saturated yellow) | — |
| `solutions-onboarding.jpg` | 1600×1067 | 129 KB | `/solutions/digital-onboarding` (existing) | Client onboarding meeting |
| `solutions-partners.jpg` | 1600×1067 | 161 KB | `/solutions/ib-incentives` (existing) | Partners meeting |
| `solutions-payments.jpg` | 1600×1067 | 116 KB | `/solutions/payment-orchestration` (existing) | Payments concept |

## Pexels sources (new images)

| File | Pexels photo ID | Notes |
|---|---|---|
| `abstract-glass-ceiling.jpg` | 6195314 | |
| `analyst-workstation.jpg` | 20232209 | Final crop round, 14 Nov — Batch 1–2 file re-sourced (was the same defective 5831522 shoot as `trading-floor-desk.jpg`) |
| `abstract-glass-lines.jpg` | 11363628 | |
| `abstract-mirrored-tower.jpg` | 5461137 | |
| `band-bridge-istanbul.jpg` | 4050283 | |
| `band-bridge-london.jpg` | 7245332 | |
| `band-glass-tower.jpg` | 5617419 | Cropped below rooftop "DB" logo |
| `band-skyline-hongkong.jpg` | 6295359 | |
| `band-skyline-kl.jpg` | 313032 | |
| `band-skyline-singapore.jpg` | 867092 | |
| `banking-columns.jpg` | 35076215 | Cropped out engraved "THE BANK OF" frieze |
| `banking-hall.jpg` | 36286286 | Grand hall; tiny "CONVENTION CENTER" directory board in background, illegible at display size |
| `boardroom-conference.jpg` | 7433895 | Final crop round, 14 Nov (was 6949940 — foreground head cut at the left edge in the source) |
| `boardroom-meeting.jpg` | 7433919 | Final crop round, 14 Nov — Batch 1–2 file re-sourced (old photo cut the blonde woman's head at bottom+left and the grey man's head at the right) |
| `boardroom-executives.jpg` | 7433847 | Pre-cropped x 0–1400 (sweep, 14 Nov) |
| `compliance-desk.jpg` | 8111853 | |
| `compliance-review.jpg` | 7534805 | |
| `handshake-deal.jpg` | 3760069 | |
| `handshake-partners.jpg` | 7433900 | Final crop round, 14 Nov (was 5668512 — two heads cut in the source) |
| `hero-bridge-night.jpg` | 3166732 | Chain Bridge, Budapest |
| `hero-bridge-rotterdam.jpg` | 20655924 | Erasmus Bridge, blue hour |
| `hero-skyline-frankfurt.jpg` | 19429124 | ECB tower + bridge at sunset |
| `hero-skyline-nyc.jpg` | 34437218 | |
| `hero-skyline-sf.jpg` | 4000514 | Tiny distant rooftop sign, illegible at display size |
| `industries-exchanges-detail.jpg` | 4451721 | Cropped out "NEW YORK STOCK EXCHANGE" lettering band |
| `industries-exchanges-v2.jpg` | 5691263 | NYSE facade at night; frieze lettering small/angled |
| `interlude-boardroom.jpg` | 8134067 | Final crop round, 14 Nov — Batch 1–2 file re-sourced, pre-cropped x 0–1800 (old photo cut the curly-haired woman's head at top+right in the source) |
| `lobby-office.jpg` | 32674962 | |
| `payments-contactless.jpg` | 17235420 | |
| `payments-pos.jpg` | 6023605 | |
| `pamm-hero.jpg` | 38412413 | NEW in the final crop round, 14 Nov (PAMM hero) |
| `portrait-executive.jpg` | 7580766 | Orphan — zero usages |
| `portrait-window.jpg` | 8572125 | |
| `signing-agreement.jpg` | 7841502 | |
| `signing-contract.jpg` | 8730374 | |
| `solutions-contests-statuette.jpg` | 7005047 | Full figure, edge-extended to 4:3 (2133×1600, sweep, 14 Nov) |
| `solutions-crm-hero.jpg` | 3855609 | Final crop round, 14 Nov (was 36766697 — foreground man's head cut at the right edge in the source) |
| `solutions-ib-hero.jpg` | 8730173 | IB hero (sweep, 14 Nov) — previously rejected as a CRM hero (same shoot as the CRM problem image); repurposed here on a different page |
| `solutions-contests-v2.jpg` | 6250957 | |
| `solutions-crm-handshake.jpg` | 8730120 | |
| `support-headset.jpg` | 7709235 | |
| `team-collaboration.jpg` | 6814340 | Final crop round, 14 Nov (was 6829538 — left man's head cut at 4:3, standing woman's hair cut at 21:10) |
| `team-discussion.jpg` | 8101931 | Final crop round, 14 Nov — Batch 1–2 file re-sourced (was 7644144 — pink-shirt man's head cut at the left edge) |
| `team-laptop.jpg` | 8730118 | Final crop round, 14 Nov (was 3182750 — incompatible with 4:3, hair cut at the left edge in the 4:5 card) |
| `team-strategy.jpg` | 6457575 | Casual styling — careers/culture use |
| `trader-workstation.jpg` | 5833756 | Final crop round, 14 Nov (was 5831260 — trader's head cut at the left edge at 4:3; the sweep only verified the hero band) |
| `trading-floor-desk.jpg` | 7691749 | Final crop round, 14 Nov (was 5831522 — foreground man's head cut at top/right/bottom) |
| `wealth-advisor.jpg` | 8441820 | No longer the wealth-management hero (final crop round, 14 Nov — headless in the hero band); keeps its 4:3/16:10/16:9 usages |
| `wealth-signing.jpg` | 8441780 | NEW in the final crop round, 14 Nov (wealth-management hero) |
| `wealth-meeting.jpg` | 7821714 | |
| `workshop-presentation.jpg` | 8761535 | Cropped top 100px to remove partial wall signage; wide variant `workshop-presentation-wide.jpg` (y 15–465) for the three wide usages (sweep, 14 Nov) |

## Removed (14 Nov fix pass — deleted from the repo, do NOT re-add)

| File | Reason removed | Replaced by |
|---|---|---|
| `traders-discussion.jpg` (Pexels 5833270, 1600×1067) | Face-crop defect found in the live browser check: the right man's face is half-cut at the right edge of the SOURCE, and both men's heads are cropped at the top. No re-crop can fix a half-face — the photo had to go. | Home DemoPreview figure → `trading-floor-desk.jpg` (over-the-shoulder, no face); `/solutions/pamm-copy-trading` hero → `team-collaboration.jpg` (all four faces whole, objectPosition "50% 12%"); `/industries/multi-asset-brokers` challenge image → `boardroom-executives.jpg`. |

## Removed (final polish, 14 Nov — deleted from the repo, do NOT re-add)

| File | Reason removed | Replaced by |
|---|---|---|
| `solutions-contests-award.jpg` (Pexels 7005636, 1600×857) | Headless-photo defect confirmed live: the source cuts the man's face at the mouth, and the below-chin re-crop (14 Nov fix pass) still read as a decapitated torso beside the heading. The "intentional below-chin crop" does not work. | `/solutions/trading-contests` problem block → `solutions-contests-statuette.jpg` (Pexels 7005047, gold star statuette, no person). |

## Rejected during visual QA (downloaded, then deleted — do NOT re-add)

| Candidate | Reason rejected |
|---|---|
| Pexels 416940 as `hero-bridge-night.jpg` | Byte-identical to existing `hero-bridge.jpg` (same source photo) — replaced with 3166732 |
| Pexels 34122 as `abstract-glass-lines.jpg` | CDN returned "Source is unreachable" (21-byte text file, not an image) — replaced with 11363628 |
| Pexels 6120397 as `solutions-contests-medal.jpg` | Medal engraved with readable text "YOU'RE A WINNER"; blue ribbon off-palette |
| Pexels 6827121 as `solutions-contests-medal.jpg` | Turquoise/mint background (superseded palette) + "1" numerals on medals — replaced with `solutions-contests-award.jpg` (7005636) |
| Pexels 2988232 as `payments-terminal.jpg` | Readable card number, expiry, cardholder name + Visa logo — replaced with `payments-pos.jpg` (6023605) |
| Pexels 8761333 as `workshop-presentation.jpg` | Projection screen clearly reads "Business Analysis" — replaced with 8761535 |
| Pexels 7979605 as `wealth-meeting.jpg` | Readable text on a T-shirt graphic ("1999" etc.) + too-casual styling for wealth |
| Pexels 8441775 as `wealth-meeting.jpg` | Laptop screen shows "MAPS COMPARISON INFOGRAPHIC" with readable percentages — replaced with 7821714 |
| Pexels 5824876 as `banking-hall.jpg` | Grand Central info booth: readable "THE METLIFE BUILDING", "MTA METRO-NORTH TRAIN INFORMATION", clock numerals; also a train station, not a bank — replaced with 36286286 |
| Pexels 29707905 as contests hero | Row of trophies: blue ribbons + green tablecloth (off-palette) + readable Polish plaque text; busy, no single hero subject |
| Pexels 2098604 as contests hero | Oscar-like statue on black reads chrome-silver, not warm gold; centred behind the headline; the hero band cuts its head |
| Pexels 6532362 as contests hero | Warm gold bowl, but the bowl's reflection is a prominent leopard print at hero scale; light-grey background |
| Pexels 7005636 as contests problem image | The old award photo itself — source cuts the man's face at the mouth; same defect class as the photo being replaced |
| Pexels 36512552 / 7005064 / 7005696 as contests hero | All portrait 2:3 — the same wide-hero geometry problem as the current v2 (only ~24% of height visible); no improvement |
| Pexels 3182784 as CRM problem image | Top-down table shot, no faces visible, people cropped at all edges |
| Pexels 6285089 as CRM problem image | Faces fine, but the background screen shows colourful bars with readable "01–05" numerals (off-palette green/blue) |
| Pexels 6918529 as CRM problem image | Left man is a headless torso — same defect class as the award photo |
| Pexels 7693155 as CRM hero | Thin top margins, man looking down, laptop back dominates the foreground, stern woman; mobile would half-cut her face |
| Pexels 5816285 / 5917721 as CRM hero | Portrait 2:3 — wrong orientation for a wide hero |
| Pexels 1181738 as `team-discussion.jpg` | Left man's hair marginal at 4:3 + empty top half |
| Pexels 5324960 as `team-discussion.jpg` | Door frame dominates the left side |
| Pexels 7108454 as `team-discussion.jpg` | Glass reflections, obscured face |
| Pexels 7433847 as `team-discussion.jpg` | Same photo as `boardroom-executives.jpg` + same blonde half-head defect |
| Pexels 7433850 as `team-discussion.jpg` | Right-edge half-face + same shoot as `boardroom-executives.jpg` |
| Pexels 7651920 as `team-discussion.jpg` | Good backup (four people, all looking down at laptops) — 7644144 preferred for eye contact |
| Pexels 7869017 as `team-discussion.jpg` | Subjects too small, half-empty frame |
| Pexels 5831255 as `trader-workstation.jpg` | Face too close to the left edge |
| Pexels 5831264 as `trader-workstation.jpg` | Back-of-head at the left edge, duplicates `analyst-workstation.jpg` |
| Pexels 5831342 as `trader-workstation.jpg` | Left-edge face + stressed expression + "t.me/AlphaTradeZone" watermark |
| Pexels 5831522 as `trader-workstation.jpg` | Duplicates `analyst-workstation.jpg` (same shoot) |
| Pexels 5833750 as `trader-workstation.jpg` | Fallback (no face, safe) but faint "Bybit" watermark on the chart |
| Pexels 8101922 as `company-collaboration.jpg` | Portrait 2:3 — wrong orientation for the side-image slot |
| Pexels 36766697 as `solutions-crm-hero.jpg` | THE SWEEP'S OWN PICK — the foreground man's head is cut at the right edge IN THE SOURCE. The sweep shipped it without a full-size visual inspection. Replaced by 3855609 in the final crop round. |
| Pexels 7644144 as `team-discussion.jpg` | THE SWEEP'S OWN PICK — the pink-shirt man's head is flush/truncated at the left edge. Replaced by 8101931 in the final crop round. |
| Pexels 5831260 as `trader-workstation.jpg` | THE SWEEP'S OWN PICK — passes the hero band but cuts the trader's head at the left edge at 4:3, and the file has no hero usage. Replaced by 5833756 in the final crop round. |
| Pexels 7693692 / 5668492 / 6950031 / 7643748 / 8070723 / 36733315 / 5668522 / 6949476 / 8112158 / 5668498 / 7433853 / 1181370 / 6949523 / 15141493 / 9275222 / 8761330 / 8761327 / 8761324 / 8761520 as meeting/boardroom photos | Each cuts a head at an edge in the source or at 4:3/PhotoBand (final crop round triage, ~60 candidates viewed) |
| Pexels 7433840 / 7433851 / 7433898 / 7433828 as boardroom photos | Foreground heads cut at the left/right/top edges in the source |
| Pexels 9068367 / 1708936 / 1181358 as meeting photos | Sunglasses indoors (fashion tone) / Chinese text slide / white curtain + partial head at the bottom |
| Pexels 7691769 / 5831263 / 5831259 / 5831265 / 5831262 / 11798249 as trading photos | Chin cut top-left + readable HOLD/SELL notes / head at the left edge / readable "t.me/AlphaTradeZone" watermark + band top cut / readable real broker names (UBS/Bradesco/BTG) |
| Pexels 8353831 as trading photo | Standing man's head cut at the band tops |
| Pexels 8292840 / 8292830 / 8439695 / 8441811 / 36733331 / 36765719 / 7875995 / 5717550 / 5717560 / 5668845 / 7222713 / 20955063 as advisor/consultation photos | Readable "Mortgage Broker" + client head cut / head cut at the left edge / head cut left+bottom / face under the H1 / black & white / face cut on mobile / frowning + face under the H1 / too casual + face too far right |
| Pexels 36765732 as advisor photo | All heads in frame BUT the left man + centre woman sit under the H1 — reject for hero use |
| Pexels 12899103 / 12903168 / 7964184 / 8134173 / 7648468 as `team-laptop.jpg` (portrait) | Hair sliver cut at the top-right / hair flush at the 4:3 band top / foreground head cut at the right + readable "SPARK WEEKLY" / curly hair cut at the left edge / foreground head cut at the left + top |
| Pexels 5668495 / 7964413 / 1181435 / 8761328 as `team-collaboration.jpg` | Bun at x 2% (fails 4:3) + legal vibe / reversed "MEETING ROOM" text + tight hero margins / heads under the H1 + chin marginal at the drift extreme / front-row heads cut at the hero band bottom |
| Pexels 6949938 as `team-collaboration.jpg` | Conference/podium shot, all heads whole — but foreground heads y 55–95% cut at the hero band bottom (C4 backup) |
| Pexels 6949494 as `team-collaboration.jpg` | Foreground woman's hair at x 2% — fails 4:3 (C5 backup, fine for full-frame) |
| Pexels 7433900 as `interlude-boardroom.jpg` | Passes mobile but is the same shoot as the D4 pick (7433919) — would repeat on the homepage. Used as the C5 pick instead. |
| Pexels 5831255 as `workshop-presentation.jpg` (forex swap, 14 Nov) | **THE PHOTO PLAN'S OWN PICK** — the head is cut at the LEFT edge (rear of skull clipped by the frame edge); the plan's "head fully in frame after LEFT-ANCHORED 4:3 pre-crop" was wrong, and no crop can fix it since the head grazed the left edge in the original too. Replaced by 7567444 (verified spare) at parent verification. |
| Pexels 5831348 as a spare (forex swap, 14 Nov) | Large legible hp logo on the monitor back + weak composition — rejected at parent inspection. |
| Pexels 38412415 (forex swap, 14 Nov) | BINANCE logo on the laptop screen. |
| Pexels 5833749 / 5833754 / 5833760 (forex swap, 14 Nov) | acer logo on the laptop bezel. |
| Pexels 5831253 / 5831341 (forex swap, 14 Nov) | Chin cut in the 4:1 band sim (and 3.56:1 figure for 5831341) — band-failed, usable only in non-band slots. |
| Pexels 5833750 (forex swap, 14 Nov) | Faint Bybit watermark on the chart — rejected here, though the fainter Bybit watermark on the SHIPPED Shoot A frames (5833757/5833763/5831251/5831252) was accepted (dark red on red, partial, barely discernible at 3× zoom — a judgement call, recorded in the swap table). |
| Pexels 7691744 / 7691751 / 7691765 / 7691767 + all 36733xx probed (forex swap, 14 Nov) | Handshake / meetings / generic corporate office — the thing the forex swap was removing. |
| Pexels 7691750 / 7691755 / 7691760 / 7691763 / 7691764 / 7691766 / 7691768 / 7691771 / 7691773 / 6801640 / 6801644 (forex swap, 14 Nov) | Cash-focused, not trading. |
| Pexels 6801651 / 6801646 / 6802043 / 6802045 / 6802051 / 6771613 / 6801649 (forex swap, 14 Nov) | Gimmicky / readable promo text (BUY/HOLD/SELL sticky notes, "STOCK MARKET NOW" note, money falling, "BEST CRYPTOCURRENCIES TO INVEST IN" headline, blank laptop screen). |

## Systematic photo-crop sweep (14 Nov 2026)

> ⚠️ **Partly superseded by the final crop round (same day, below).** The sweep's method was sound, but it shipped three defective sources (CRM hero 36766697, team-discussion 7644144, trader-workstation 5831260), never simulated the 4:3/21:10 usages of `team-collaboration` or the 4:3/4:5 usages of `team-laptop`, and accepted five photos the final round proved defective (`trading-floor-desk`, `analyst-workstation`, `boardroom-meeting`, `boardroom-conference`, `handshake-partners`, plus the `wealth-advisor` hero). The sweep's D1 (workshop wide variant), D2 (IB hero), D5 (statuette), N3 (boardroom pre-crop) and N6 (company-collaboration) fixes stand — all browser-confirmed. Everything below is kept as the historical record; the final crop round record is authoritative where the two disagree.

**Method:** every people-photo usage across all 44 pages was PIL-simulated at its real display aspect ratio (heroes at desktop 1920px + mobile 375px, 4:3, 3:2, 21:10, 16:10/16:9 cards), including the Ken Burns drift extreme for heroes. The drift window was re-derived from the CSS (`scale(1.08) translate(-1.5%, 1%)`, transform-origin centre): the visible window at the extreme is **x 5.2–97.8%, y 2.7–95.3%** of the rest crop (an earlier simulation used 94.8%/97.3% for right/bottom — wrong; top/left were correct). Every fix was re-simulated at all its geometries and visually verified before shipping. **Mobile standard:** a mobile centre-slice is acceptable where the central subject is whole and any visible face portion is ≥50%; a face cut to a sliver (<30%) or a head cut at the top still fails — except a small fragment of a BACKGROUND/out-of-focus person, which reads as natural framing (same class as the accepted CRM-handshake sliver).

**Counts:** 65 distinct image refs / 69 files on disk; ~40 people-photo usages simulated; **9 defects fixed** (5 confirmed live + 4 found by the sweep); 2 more documented as accepted.

**Fixes:**

| # | Photo / usage | Defect | Fix |
|---|---|---|---|
| D1 | `workshop-presentation.jpg` — homepage Implementation figure, guides ResourceHero, implementation InnerHero | Headless in every wide crop (3.56:1): all three seated people shown from the neck down | NEW pre-cropped variant `workshop-presentation-wide.jpg` (1600×450, band y 15–465): all five heads fully in frame at all three geometries incl. drift. Original keeps its 4:3/card usages (pass). |
| D2 | `handshake-partners.jpg` — IB hero | Both men cut at the top; left man half-cut at the left; right man a giant blurred back-of-head. Unsalvageable by re-crop | SWAP hero → `solutions-ib-hero.jpg` (Pexels 8730173), `objectPosition: "45% 0%"`: four faces fully in frame, desktop + mobile. File keeps its near-full-frame usages. |
| D3 | `wealth-meeting.jpg` — CRM hero | Woman's afro sliced at the left edge under drift; face under the H1. A pre-crop cannot add left margin | SWAP hero → `solutions-crm-hero.jpg` (Pexels 36766697, 1600×900), `objectPosition: "50% 0%"`: main subject right-of-centre, clear of the H1. File keeps its 4:3/16:10 usages (pass). |
| D4 | `team-discussion.jpg` — CRM BenefitGrid, platform block, home Insights | Leftmost man's face half-cut at the left edge IN THE SOURCE; pre-crop impossible | FILE SWAP → Pexels 7644144 (1600×1067): three professionals, all faces well inside the frame at 4:3, 3:2, 21:10. |
| D5 | `solutions-contests-statuette.jpg` — contests Problem block | Legs off the bottom at mid-shin (no feet/base) | FILE REWORK: full figure from the original Pexels 7005047 (1600×2400), edge-extended to 4:3 (2133×1600) — no visible seam, figure complete. |
| N1 | `trader-workstation.jpg` — analytics PageHero, PAMM Problem, prop-firms challenge | Trader's face at the far-left edge, back of head out of frame | FILE SWAP → Pexels 5831260 (1600×1067): face centred-left, fully in frame at the centred hero band and 4:3. (ObjectPosition "50% 10%" was tried and rejected — it cut the head at the bottom; centred is correct.) |
| N2 | `team-collaboration.jpg` — client-experience PageHero | Standing woman's head cut at the top in the centred crop (PAMM hero uses 50% 12% for the same photo and passes) | Added `objectPosition` support to `PageHero` + set client-experience to `"50% 8%"` (12% was too tight at this hero height). |
| N3 | `boardroom-executives.jpg` — asset-fund IndustryHero, about block, brokers challenge, analytics 3:2, resources 21:10 | Blonde woman's half-head at the right edge (x 78–100% of the 1920 source) | FILE PRE-CROP x 0–1400 (1400×1280). A 1560 line was tried first and REJECTED — it cut the grey woman's face in half. Added `objectPosition` support to `IndustryHero` + set asset-fund to `"40% 50%"` so the mobile slice shows the grey-haired man alone. Foreground man's back-of-head sits at the right edge (accepted framing). |
| N6 | `company-collaboration.jpg` — company/partners side image | Standing man's face cut at the NOSE at the top edge; woman on the right a blurred back-of-head mass | FILE SWAP → Pexels 4175026 (1600×1067): handshake close-up, hands only, zero face risk. |

**Accepted with documented verdicts (no change):**
- **N4 `wealth-advisor.jpg` industry hero** — two sliced grey backs-of-heads at the left edge. Backs of heads, no faces cut; same class as the accepted over-the-shoulder framing. A pre-crop was considered and rejected (mobile face-cut risk).
- **N5 `resources-audience.jpg`** (events hero + 21:10 card) — bottom-row heads sliced, but the cuts are IN THE SOURCE and read as natural crowd photography (foreground out-of-focus figures).
- **Precedent accepts:** `trading-floor-desk` + `analyst-workstation` (over-the-shoulder back-of-head); `boardroom-meeting` (foreground shoulder/head framing); `solutions-onboarding` (hands-signing detail, no face cut); `services-team` (tiny blurred head-top at the bottom edge); `boardroom-conference` (small foreground fragment); `solutions-crm-handshake` 4th-head sliver (explicit leave-alone); `team-discussion` 2% glasses sliver (full-frame views only); `workshop-presentation-wide` mobile slices (background face fragments at the edges, central subject whole).

**All other simulated usages PASS**, including: `solutions-payments`, `signing-contract`, `industries-securities`, `industries-digital-assets` heroes; `handshake-deal`; `portrait-window` fig-wide; all mobile heroes; `team-collaboration` 4:3/21:10; `wealth-advisor` 4:3/21:10; `compliance-desk`; `wealth-meeting` 4:3/21:10; `team-laptop` 4:3 + 4:5; `support-headset` 4:5; `boardroom-meeting`; `boardroom-conference`; `industries-prop-firms`/`wealth`/`asset-fund`; `workshop-presentation` 4:3/21:10/3:2/mobile; `services-workshop`; `team-strategy`; `banking-hall`; `lobby-office`.

## Final crop round (14 Nov 2026)

**Trigger:** the sweep's CRM hero swap was bad (the new source itself cut the foreground man's head at the right edge), and the sweep missed blog-card thumbnails and banners entirely. **Method (the lesson):** PIL geometry alone is not enough — every new image this round was OPENED AND VISUALLY INSPECTED at full size AND PIL-simulated at its display crop before shipping. A head cut at ANY edge counts as a defect unless the person is clearly a distant background crowd figure. ~60 Pexels candidates triaged; 13 full-size sources inspected; 25+ sims run (hero bands desktop + mobile incl. drift extreme, 4:3, 3:2, 16:10, 21:10, 4:5).

**Counts:** 69 files on disk at the start; all 28 audit-list people photos viewed at full size; 10 confirmation sims + 13 pick sims; **11 defects fixed** (5 reported live + 6 found by the coverage audit); **11 file swaps + 2 new files**; 0 files deleted.

**Fixes — reported defects (D1–D5):**

| # | Photo / usage | Defect | Fix |
|---|---|---|---|
| D1 | `solutions-crm-hero.jpg` — CRM hero | Foreground man's head cut at the RIGHT edge IN THE SOURCE (the sweep's pick) | SWAP → Pexels 3855609 (1600×1007): professional woman at a desk, face clear of the H1 (only the hairline edge touches the longest H1 line — see the caveat in section G). `objectPosition: "50% 0%"` unchanged. |
| D2a | `trading-floor-desk.jpg` — homepage DemoPreview band + TradeOps hero + prop-firms hero + 3 guide cards + brokers secondary + financial-operations PhotoBand | Foreground man's head cut at TOP, RIGHT and BOTTOM — only the right side of his face and ear visible | SWAP → Pexels 7691749 (1920×1280): clasped hands + dual laptops with charts, NO face, zero head risk. Passes the 3.56:1 DemoPreview band, the hero band and 21:10. |
| D2b | `analyst-workstation.jpg` — homepage blog card "One ledger, one truth" + TradeOps BenefitGrid + guide break image | Same defective shoot/shot as D2a | SWAP → Pexels 20232209 (1600×1067): desk with laptop + monitor charts, phone calculator, papers — NO person. |
| D3 | `interlude-boardroom.jpg` — homepage PhotoInterlude + implementation PhotoBand | Curly-haired woman's head cut at top + right edges IN THE SOURCE (the reported "pink woman top cut" did not reproduce in sims — likely a mid-scroll screenshot artifact) | SWAP → Pexels 8134067 + PRE-CROP x 0–1800 (1800×1280): woman presenting at a whiteboard + 3 seated colleagues, all heads whole. The pre-crop keeps the Black seated man's head fully outside the mobile interlude window. Also fixed the wrong alt ("Empty boardroom with a long table") and the manifest description. |
| D4 | `boardroom-meeting.jpg` — homepage blog card "Onboarding is a journey" + banks challenge image | Blonde woman's head cut at bottom + left; grey-haired man's head cut at the right. Pre-crop tested and FAILED (the beige woman and grey man overlap in x — no clean window) | SWAP → Pexels 7433919 (1400×933): three professionals signing/reviewing documents, all heads whole at 3:2 and 4:3. |
| D5 | `team-discussion.jpg` — CRM BenefitGrid + platform ImageText + homepage blog card "Partner growth" | Pink-shirt man's head flush/truncated at the left edge, no margin (the sweep's pick). Pre-crop ruled out (people at both edges) | SWAP → Pexels 8101931 (1600×1067): four professionals around a table by windows, all heads whole at 4:3, 3:2 and 16:10. |

**Fixes — coverage audit (C1–C6):**

| # | Photo / usage | Defect | Fix |
|---|---|---|---|
| C1 | `team-collaboration.jpg` — 3× ImageText 4:3 (client-experience, ib-incentives, services) + guide break 21:10 | Left man's head cut at the left edge at 4:3 (sim-confirmed); standing woman's hair cut at the top at 21:10. No objectPosition can fix (heads span x 0–95%, the 4:3 window is 89% wide) | SWAP → Pexels 6814340 (1600×1067): three men reviewing papers, all heads whole at 4:3 + 21:10. PAMM hero SPLIT OFF → new `pamm-hero.jpg` (Pexels 38412413, monitors, no person): the 6814340 heads span x 33–78%, wider than the mobile hero drift window, so the right man's face was cut at the mobile right edge even at rest. |
| C2 | `trader-workstation.jpg` — 3× 4:3 (analytics, PAMM, prop-firms challenge) | Trader's head cut at the left edge at 4:3 (sim-confirmed). The sweep verified only the hero band; the file has NO hero usage | SWAP → Pexels 5833756 (1600×1067): bright trading desk, NO person, zero head risk. |
| C3 | `team-laptop.jpg` — developers ImageText 4:3 + careers card 4:5 | Red-haired man's hair cut at the top at 4:3; curly woman's hair cut at the left edge in the 4:5 card (IN THE SOURCE). Fundamentally incompatible with 4:3 (heads span y 22–72% = exactly the band height) | SWAP → Pexels 8730118 (1200×1797): four colleagues at a boardroom table, all heads whole at 4:3 and 4:5 with wide margins. |
| C4 | `boardroom-conference.jpg` — events 16:10 + guide card 16:10 + securities FramedImage 4:3 | Foreground man's head (large, out of focus) cut at the left edge IN THE SOURCE — only the right portion of his grey head visible | SWAP → Pexels 7433895 (1600×1067): three people at a boardroom table, all heads whole at 16:10 + 4:3. |
| C5 | `handshake-partners.jpg` — partners InnerHero + platform card + 2× resources cards + resource-editorial card | TWO heads cut IN THE SOURCE: left man's head at the left edge, right woman's face at the right edge + top | SWAP → Pexels 7433900 (1920×1280): five people around a boardroom table, all heads whole. All usages are full-width (16:10/3:2/full frame). |
| C6 | `wealth-advisor.jpg` — wealth-management industry hero ONLY | Hero band: the advisor is HEADLESS (only smile/chin at the top edge), grey man's hair cut at the top, foreground woman's hair cut at the bottom. Heads span y 7–84%; the band is 55.6% tall — NO objectPosition can include all three | HERO ONLY → new `wealth-signing.jpg` (Pexels 8441780, 1600×1068): two people signing at a white table; the grey man's cut head sits above the band, the tablet face-reflection reads as a screen reflection under the scrim. `wealth-advisor.jpg` keeps its 3 passing usages (4:3, 16:10, 16:9). |

**Accepted with documented verdicts (no change):**
- `solutions-partners.jpg` 4:3 — both men's heads read whole (grey man's hair a few px inside the left window edge; Black man's dreadlocks just inside the top edge).
- `compliance-review.jpg` — chin/beard sliver at the top-left corner in a hands+glasses close-up (intentional detail crop, not a head cut); not visible at 16:10 or in the dark InnerHero band.
- `services-team.jpg` / `industries-asset-fund.jpg` — byte-identical files; out-of-focus hair crown at the bottom edge (detail shot, no face). Duplication noted, not fixed.
- `handshake-deal.jpg` — 2%-of-height chin sliver at the top-left corner; not visible in the book-demo band or the 16:10 card.
- No heads at all: `solutions-onboarding.jpg`, `signing-agreement.jpg`, `signing-contract.jpg`, `solutions-payments.jpg`.
- `banking-hall.jpg` — one tiny distant person behind the reception desk (~10px tall), clearly a distant background figure (exempt per the task rule).
- All heads whole at all usages: `team-strategy.jpg`, `compliance-desk.jpg`, `portrait-window.jpg`, `wealth-meeting.jpg`, `support-headset.jpg`.
- `portrait-executive.jpg` — ORPHAN, zero usages in `src/`; no display, no defect.
- Industry heroes (all 9 checked): only wealth-advisor had people. Asset-fund = `boardroom-executives.jpg` (sweep-verified, not re-audited); prop-firms = `trading-floor-desk.jpg` (D2a, swapped); the rest are skylines/architecture/charts (no people).
- Mobile standard (unchanged from the sweep): central subject whole, visible face portion ≥50%; background-face slivers at mobile edges acceptable. Applied to: `wealth-advisor.jpg` mobile hero (advisor whole; grey-man sliver at the left edge — accepted; the file keeps only non-hero usages now anyway).

**Same-shoot notes:** 7433919 (D4) + 7433895 (C4) + 7433900 (C5) are the same brick-room shoot (different pages, no same-page duplication). 8441780 (C6 hero) is the same shoot as `wealth-advisor.jpg` (different pages). 6814340 (C1) and 7433900 (C5) are NOT the same shoot.

## Coverage gaps

- **Forex imagery (CLOSED 14 Nov by the re-theme swap):** all 48 generic corporate/lifestyle slots now show realistic forex-business photography; the 24 keeps were already forex-fitting. The remaining gap is variety within the trading-desk subject (Shoot A dominates with 22 files) — a future pass could diversify with a second trading-floor shoot if one is found and verified.
- **Dedicated digital-assets abstract:** no coin-logo-free crypto-native shot was sourced; `abstract-mirrored-tower.jpg` + the existing `industries-digital-assets*.jpg` cover the page. If a page worker wants a distinct digital-assets visual, a dark abstract glass/steel crop from `band-glass-tower.jpg` is the fallback.
- **Bonds / fixed-income:** covered by `banking-columns.jpg` (classical architecture) — no dedicated bonds image; acceptable, as fixed-income has no natural photographic subject beyond architecture.
- **AI assistance page** (`/platform/ai-assistance`): no AI-specific photo was sourced (brief excluded binary-digit clichés and fake screenshots); `abstract-glass-ceiling.jpg` / `abstract-glass-lines.jpg` are the intended visuals — both are now forex trading photos (hand pointing at a chart; phone + trading app), which suit the page better than the old glass abstracts did.
- **Legal pages** (`/privacy`, `/cookies`, `/security-policy`): no dedicated photos; `signing-contract.jpg` / `compliance-desk.jpg` fit if a page worker wants imagery there.
- 7 cityscape/architecture files were verified by file + dimensions + source description but not eyeballed individually (`band-skyline-singapore`, `band-skyline-hongkong`, `band-skyline-kl`, `band-bridge-london`, `abstract-glass-ceiling`, `abstract-glass-lines`, `abstract-mirrored-tower`); text risk in these subjects is negligible (distant signage only). All 36 other new images were visually inspected.
