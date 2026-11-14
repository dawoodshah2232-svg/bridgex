# BridgeX Image Manifest

**Location:** `public/images/` · **Reference in code:** via the `asset()` helper (basePath `/bridgex`), e.g. `asset('/images/hero-bridge.jpg')`.
**Last updated:** 2026-11-14 (systematic photo-crop sweep — see the sweep record below).

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
| **Total** | **71** | **~14 MB** |

All 43 new photos are real photography from **Pexels** (Pexels licence — free to use, no attribution required, no watermark). No AI-generated images. No `cwebp` on the VM, so all files are optimized JPEGs from Pexels CDN params (`?auto=compress&cs=tinysrgb&w=…`); heroes/bands at 1920w, cards at 1200–1600w. Every file was verified with `file` + Pillow (real JPEG, correct dimensions) and **visually inspected** — see the rejected log at the bottom for what was caught and removed.

Budgets: heroes/bands ≤ 600 KB, all other images ≤ 400 KB. Largest file is `industries-exchanges-v2.jpg` at 429 KB (recompressed 1920×1440 → 1600×1200 q78 in the 14 Nov fix pass, down from 596 KB).

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
| Solutions (7 pages) | `solutions-contests-v2`, `solutions-contests-statuette`, `solutions-crm-handshake`, `solutions-crm-hero`, `solutions-ib-hero`, `team-discussion`, `payments-pos`, `payments-contactless`, `signing-contract`, `compliance-review`, `team-collaboration` (PAMM hero, 14 Nov fix) |
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
| `boardroom-conference.jpg` | 1600×1067 | 136 KB | `/resources/events` / `/company/partners` image block — panel-style conference table | Business panel seated at a long conference table |
| `team-laptop.jpg` | 1200×1800 | 238 KB | Portrait card / `/company/careers` / `/platform/client-experience` — diverse team around a laptop (screen not visible) | Diverse team collaborating around a laptop |
| `team-strategy.jpg` | 1600×1067 | 234 KB | `/company/careers` / `/resources/blog` — casual startup-style team huddle; culture/careers use, not premium hero | Colleagues discussing strategy in a relaxed office lounge |
| `team-collaboration.jpg` | 1600×1068 | 186 KB | `/company/about` / `/services` image block — team brainstorming at a wooden table; also the `/solutions/pamm-copy-trading` hero since the 14 Nov fix (objectPosition "50% 12%" keeps all four faces in frame) | Team collaborating over a laptop in a bright office |
| `workshop-presentation.jpg` | 1600×968 | 189 KB | `/resources/events` / `/services/implementation` / `/resources/guides` — seminar audience (top wall text cropped out) | Professionals attending a business seminar — the three wide usages (homepage Implementation figure, implementation InnerHero, guides ResourceHero) now use the pre-cropped wide variant `workshop-presentation-wide.jpg` (1600×450, band y 15–465, sweep 14 Nov: the original was headless in every wide crop). The original keeps its 4:3 / card usages, which show all heads. |
| `workshop-presentation-wide.jpg` | 1600×450 | 117 KB | Homepage Implementation figure / `/services/implementation` hero / `/resources/guides` hero (sweep, 14 Nov) | Professionals attending a business seminar — pre-cropped wide variant of `workshop-presentation.jpg` (same Pexels 8761535 source), all five heads fully in frame at 3.56:1 incl. Ken Burns drift. |
| `support-headset.jpg` | 1200×1800 | 224 KB | Portrait card / `/services/managed-services` / `/company/contact` — support agent portrait, clean studio background | Customer support agent wearing a headset and smiling |
| `portrait-executive.jpg` | 1200×1800 | 169 KB | Portrait card / `/company/about` / `/company/partners` — businessman in blue suit by office window (4:5-friendly) | Businessman in a suit holding documents by an office window |
| `portrait-window.jpg` | 1600×1068 | 173 KB | `/company/about` / `/book-demo` image block — executive silhouette looking over a city skyline | Businessman looking out over skyscrapers from a high-rise office |
| `handshake-deal.jpg` | 1600×1067 | 79 KB | `/company/partners` / `/book-demo` — handshake close-up over a laptop (no longer on `/solutions/financial-crm`: replaced by `solutions-crm-handshake.jpg` in the final polish pass, 14 Nov — the old crop was overexposed with no faces) | Professional handshake sealing a business agreement |
| `solutions-crm-handshake.jpg` | 1600×1068 | 138 KB | `/solutions/financial-crm` problem block (final polish, 14 Nov) — three professionals in a meeting room, two shaking hands, all faces in frame, properly exposed | Business partners shaking hands in a meeting room |
| `handshake-partners.jpg` | 1600×1067 | 162 KB | `/company/partners` side image / client-experience audience card / resources cards — multiethnic partners shaking hands over coffee | Business partners shaking hands during a meeting — NO LONGER the IB hero (sweep, 14 Nov: the hero crop cut both men's heads at the top and the left man's face at the edge; unsalvageable by re-crop). IB hero is now `solutions-ib-hero.jpg`. The file keeps its near-full-frame usages, where all faces read whole. |
| `solutions-ib-hero.jpg` | 1600×1068 | 179 KB | `/solutions/ib-incentives` hero (sweep, 14 Nov) | Business partners shaking hands after a meeting — Pexels 8730173, four people, all faces fully in frame; hero uses `objectPosition: "45% 0%"`. Same shoot/room as the CRM problem image (8730120) but a different page, so no repetition. |

## D. New images — trading & markets

| File | Dimensions | Size | Suggested slot(s) | Alt text |
|---|---|---|---|---|
| `trading-floor-desk.jpg` | 1920×1282 | 165 KB | `/platform` hero alt / `/industries/prop-firms` hero / `/solutions/tradeops` — trader at three monitors + tablet, real candlestick charts (plausible screens, no readable numbers); also the home DemoPreview figure since the 14 Nov fix (over-the-shoulder, no face — safe at any wide crop) | Trader analysing charts across multiple monitors |
| `trader-workstation.jpg` | 1600×1067 | 231 KB | `/industries/prop-firms` image block / `/platform/analytics` hero — trader leaning back with a tablet at a multi-monitor desk | Trader working at a multi-monitor trading workstation — SWAPPED in the sweep (14 Nov, Pexels 5831260): the old photo (5833758) had the trader's face at the far-left edge, half-cut in every usage. The new photo's face is centred-left and fully in frame at the centred hero band (verified: objectPosition "50% 10%" was tried and REJECTED — it cut the head at the bottom; centred is correct). |

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
| `wealth-advisor.jpg` | 1600×1068 | 153 KB | `/industries/wealth-management` hero or image block — advisor discussing plans with senior clients | Financial advisor discussing plans with clients |
| `wealth-meeting.jpg` | 1600×1067 | 155 KB | `/industries/wealth-management` challenge image / client-experience audience card — advisor and client reviewing documents | Advisor and client reviewing financial documents together — NO LONGER the CRM hero (sweep, 14 Nov: the "50% 18%" fix handled the top, but the woman's afro was still sliced at the left edge under Ken Burns drift and her face sat under the H1; a pre-crop cannot add left margin). CRM hero is now `solutions-crm-hero.jpg`. The file keeps its 4:3 / 16:10 usages, which pass. |
| `solutions-crm-hero.jpg` | 1600×900 | 130 KB | `/solutions/financial-crm` hero (sweep, 14 Nov) | Advisor and client in discussion at a meeting table with laptop and documents — Pexels 36766697, main subject right-of-centre (clear of the H1), face fully in frame; hero uses `objectPosition: "50% 0%"`. Second man is a back-of-head at the right edge (accepted framing). |

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
| `boardroom-meeting.jpg` | 1400×933 | 93 KB | Company / services image block (existing) | Team meeting in a boardroom |
| `interlude-boardroom.jpg` | 1920×1282 | 277 KB | Full-bleed interlude band (existing) | Empty boardroom with a long table |
| `team-discussion.jpg` | 1600×1067 | 201 KB | CRM "Why it matters" block / `/platform` image block / home Insights card (existing) | Team in discussion around a table — SWAPPED in the sweep (14 Nov, Pexels 7644144): the old photo had the leftmost man's face half-cut at the left edge IN THE SOURCE. New photo: three professionals, all faces well inside the frame at 4:3, 3:2 and 21:10. A 2% glasses sliver of a fourth person shows at the far-left edge in full-frame views only (same class as the accepted CRM-handshake sliver). |
| `company-collaboration.jpg` | 1600×1067 | 84 KB | `/company/partners` side image (existing) | Colleagues collaborating in an office — SWAPPED in the sweep (14 Nov, Pexels 4175026): the old photo cut the standing man's face at the nose at the top edge. New photo is a handshake close-up, hands only, zero face risk. |
| `analyst-workstation.jpg` | 1400×935 | 102 KB | `/platform/analytics` (existing) | Analyst working at a workstation |
| `services-team.jpg` | 1600×900 | 164 KB | `/services` (existing) | Services team at work |
| `services-workshop.jpg` | 1600×1067 | 187 KB | `/services/implementation` (existing) | Workshop session in progress |
| `industries-asset-fund.jpg` | 1600×900 | 164 KB | `/industries/asset-fund-managers` (existing) | Fund management office scene |
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
| `boardroom-conference.jpg` | 6949940 | |
| `boardroom-executives.jpg` | 7433847 | Pre-cropped x 0–1400 (sweep, 14 Nov) |
| `compliance-desk.jpg` | 8111853 | |
| `compliance-review.jpg` | 7534805 | |
| `handshake-deal.jpg` | 3760069 | |
| `handshake-partners.jpg` | 5668512 | |
| `hero-bridge-night.jpg` | 3166732 | Chain Bridge, Budapest |
| `hero-bridge-rotterdam.jpg` | 20655924 | Erasmus Bridge, blue hour |
| `hero-skyline-frankfurt.jpg` | 19429124 | ECB tower + bridge at sunset |
| `hero-skyline-nyc.jpg` | 34437218 | |
| `hero-skyline-sf.jpg` | 4000514 | Tiny distant rooftop sign, illegible at display size |
| `industries-exchanges-detail.jpg` | 4451721 | Cropped out "NEW YORK STOCK EXCHANGE" lettering band |
| `industries-exchanges-v2.jpg` | 5691263 | NYSE facade at night; frieze lettering small/angled |
| `lobby-office.jpg` | 32674962 | |
| `payments-contactless.jpg` | 17235420 | |
| `payments-pos.jpg` | 6023605 | |
| `portrait-executive.jpg` | 7580766 | |
| `portrait-window.jpg` | 8572125 | |
| `signing-agreement.jpg` | 7841502 | |
| `signing-contract.jpg` | 8730374 | |
| `solutions-contests-statuette.jpg` | 7005047 | Full figure, edge-extended to 4:3 (2133×1600, sweep, 14 Nov) |
| `solutions-crm-hero.jpg` | 36766697 | CRM hero (sweep, 14 Nov) |
| `solutions-ib-hero.jpg` | 8730173 | IB hero (sweep, 14 Nov) — previously rejected as a CRM hero (same shoot as the CRM problem image); repurposed here on a different page |
| `solutions-contests-v2.jpg` | 6250957 | |
| `solutions-crm-handshake.jpg` | 8730120 | |
| `support-headset.jpg` | 7709235 | |
| `team-collaboration.jpg` | 6829538 | |
| `team-laptop.jpg` | 3182750 | |
| `team-strategy.jpg` | 6457575 | Casual styling — careers/culture use |
| `trader-workstation.jpg` | 5831260 | Sweep swap, 14 Nov (was 5833758 — face at the far-left edge) |
| `trading-floor-desk.jpg` | 5831522 | |
| `wealth-advisor.jpg` | 8441820 | |
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

## Systematic photo-crop sweep (14 Nov 2026)

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

## Coverage gaps

- **Dedicated digital-assets abstract:** no coin-logo-free crypto-native shot was sourced; `abstract-mirrored-tower.jpg` + the existing `industries-digital-assets*.jpg` cover the page. If a page worker wants a distinct digital-assets visual, a dark abstract glass/steel crop from `band-glass-tower.jpg` is the fallback.
- **Bonds / fixed-income:** covered by `banking-columns.jpg` (classical architecture) — no dedicated bonds image; acceptable, as fixed-income has no natural photographic subject beyond architecture.
- **AI assistance page** (`/platform/ai-assistance`): no AI-specific photo was sourced (brief excluded binary-digit clichés and fake screenshots); `abstract-glass-ceiling.jpg` / `abstract-glass-lines.jpg` are the intended visuals.
- **Legal pages** (`/privacy`, `/cookies`, `/security-policy`): no dedicated photos; `signing-contract.jpg` / `compliance-desk.jpg` fit if a page worker wants imagery there.
- 7 cityscape/architecture files were verified by file + dimensions + source description but not eyeballed individually (`band-skyline-singapore`, `band-skyline-hongkong`, `band-skyline-kl`, `band-bridge-london`, `abstract-glass-ceiling`, `abstract-glass-lines`, `abstract-mirrored-tower`); text risk in these subjects is negligible (distant signage only). All 36 other new images were visually inspected.
