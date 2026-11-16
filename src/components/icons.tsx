/**
 * Drawn icon system — one cohesive custom SVG set.
 *
 * House style: fine teal line icons. Stroke-based, 24×24 viewBox,
 * currentColor, round caps/joins, default stroke 1.5 (readable at
 * 16px, on navy and on white). Every path is original hand-drawn
 * geometry — no copied icon-font glyphs.
 *
 * Three ways to use an icon:
 *   1. `<Icon name="crm" size={28} />` — the generic component.
 *   2. `<CrmIcon size={28} />` — individual named components.
 *   3. Slug maps (`SOLUTION_ICONS`, `INDUSTRY_ICONS`, `LAYER_ICONS`)
 *      plus the `solutionIcon()` / `industryIcon()` / `layerIcon()`
 *      helpers — resolve a content slug to an IconName.
 *
 * Existing export names are preserved — this file only ever extends.
 * See docs/VISUAL-SYSTEM.md for the full inventory and usage rules.
 */
import type { ComponentType, ReactNode } from "react";

/** Fine-line default stroke — callers already pass 1.5 explicitly. */
const DEFAULT_STROKE_WIDTH = 1.5;

export type IconName =
  // Solutions (7)
  | "crm" | "payments" | "pamm" | "ib" | "tradeops" | "onboarding" | "contests"
  // Industries (9)
  | "brokers" | "banks" | "securities" | "wealth" | "assetFund" | "exchanges"
  | "bonds" | "prop" | "digitalAssets"
  // Platform layers (4)
  | "experience" | "operations" | "ecosystem" | "intelligence"
  // Feature / benefit (31)
  | "chart" | "network" | "route" | "search" | "workflow" | "report" | "lock"
  | "globe" | "clock" | "spark" | "gauge" | "wallet" | "funnel" | "key"
  | "eye" | "link" | "star" | "database" | "filter" | "phone" | "pin"
  | "info" | "alert" | "minus" | "send" | "play" | "download" | "refresh"
  | "headset" | "quote" | "checkCircle"
  // Generic / chrome (19)
  | "shield" | "users" | "audit" | "layers" | "sliders" | "arrowRight"
  | "arrowUpRight" | "chevronDown" | "chevronRight" | "menu" | "close"
  | "check" | "plus" | "building" | "book" | "calendar" | "code" | "mail"
  | "document";

export interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

/** A single named icon component (e.g. `CrmIcon`). */
export type IconComponent = ComponentType<IconProps>;

const PATHS: Record<IconName, ReactNode> = {
  /* ---------------- Solutions ---------------- */
  // Financial CRM — a person with a 360° orbit ring: the whole client.
  crm: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.8 19.2c.6-3 2.7-4.5 5.2-4.5s4.6 1.5 5.2 4.5" />
      <path d="M18.8 5.8a8.6 8.6 0 1 1-2.4 11.4" />
      <circle cx="18.8" cy="5.8" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  // Payment orchestration — one entry routing to many destinations.
  payments: (
    <>
      <circle cx="4.5" cy="12" r="2" />
      <path d="M6.5 12h3.5" />
      <path d="M10 12c3 0 3-5.5 6-5.5h2" />
      <path d="M10 12c3 0 3 5.5 6 5.5h2" />
      <circle cx="20" cy="6.5" r="1.8" />
      <circle cx="20" cy="17.5" r="1.8" />
    </>
  ),
  // PAMM / copy trading — growth chart on a baseline.
  pamm: (
    <>
      <path d="M3 20.5h18" />
      <path d="M3 17.5 8.5 12l4 4L21 7.5" />
      <path d="M16.5 7.5H21V12" />
    </>
  ),
  // IB incentives — a partner network, three nodes joined.
  ib: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.3 7.3 10.7 16" />
      <path d="M15.7 7.3 13.3 16" />
      <path d="M8.5 6h7" />
    </>
  ),
  // TradeOps — control sliders.
  tradeops: (
    <>
      <path d="M4 7h10M18 7h2" />
      <path d="M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  // Digital onboarding — an ID card with a verified badge.
  onboarding: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M5.5 16.5c.5-1.8 1.7-2.5 3-2.5s2.5.7 3 2.5" />
      <path d="M14.5 10h3.5" />
      <circle cx="17.8" cy="16.8" r="3.4" />
      <path d="M16.3 16.8l1.1 1.1 2-2.2" />
    </>
  ),
  // Trading contests — a trophy.
  contests: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4.5a2.5 2.5 0 0 0 2.6 3.9" />
      <path d="M17 6h2.5a2.5 2.5 0 0 1-2.6 3.9" />
      <path d="M12 14v3.5" />
      <path d="M8.5 20.5h7" />
    </>
  ),
  /* ---------------- Industries ---------------- */
  // Multi-asset brokers — candlesticks.
  brokers: (
    <>
      <path d="M6 5v4M6 15v4" />
      <rect x="4" y="9" width="4" height="6" />
      <path d="M18 4v3M18 13v7" />
      <rect x="16" y="7" width="4" height="6" />
    </>
  ),
  // Banks — a columned institution.
  banks: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3 21h18" />
      <path d="M3 18h18" />
    </>
  ),
  // Securities & derivatives — a certificate with a seal.
  securities: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="M7 9.5h6M7 12.5h4" />
      <circle cx="16" cy="14.5" r="2.8" />
      <path d="M14.8 16.9 14.2 18.9 16 17.9 17.8 18.9 17.2 16.9" />
    </>
  ),
  // Wealth management — a cut gem.
  wealth: (
    <>
      <path d="M7 4h10l3 5-8 11L4 9l3-5Z" />
      <path d="M4 9h16" />
      <path d="M12 20 9 9l3-5 3 5-3 11" />
    </>
  ),
  // Asset & fund managers — an allocation pie.
  assetFund: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 12 12 3.5A8.5 8.5 0 0 1 20.5 12Z" />
    </>
  ),
  // Exchanges — a two-way swap.
  exchanges: (
    <>
      <path d="M3 8h13M13 5l3 3-3 3" />
      <path d="M21 16H8M11 13l-3 3 3 3" />
    </>
  ),
  // Bonds & fixed income — a coupon bond, perforated edge.
  bonds: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M15 6v12" strokeDasharray="2 2.5" />
      <path d="M6.5 10.5h5M6.5 13.5h5" />
      <path d="M17.2 10.5h1.6M17.2 13.5h1.6" />
    </>
  ),
  // Prop firms — a target: the challenge to hit.
  prop: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  // Digital assets — a chain of nodes inside a hexagon.
  digitalAssets: (
    <>
      <path d="M12 3l7.8 4.5v9L12 21l-7.8-4.5v-9L12 3Z" />
      <circle cx="12" cy="9" r="1.6" />
      <circle cx="9" cy="14.5" r="1.6" />
      <circle cx="15" cy="14.5" r="1.6" />
      <path d="M10.9 10.3 9.9 13M13.1 10.3l.9 2.7M10.6 14.5h2.8" />
    </>
  ),
  /* ---------------- Platform layers ---------------- */
  // Client experience — a person in their own branded window.
  experience: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 8.5h18" />
      <circle cx="9.5" cy="13" r="1.8" />
      <path d="M6.5 17c.4-1.6 1.6-2.4 3-2.4s2.6.8 3 2.4" />
      <path
        d="M17 10.8l.7 1.5 1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  // Financial operations — the engine: a gear.
  operations: (
    <>
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="1.8" />
      <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.7 6.7l1.4 1.4M15.9 15.9l1.4 1.4M17.3 6.7l-1.4 1.4M8.1 15.9l-1.4 1.4" />
    </>
  ),
  // Integrations / ecosystem — a hub with satellites.
  ecosystem: (
    <>
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="4.5" r="1.8" />
      <circle cx="19.5" cy="12" r="1.8" />
      <circle cx="12" cy="19.5" r="1.8" />
      <circle cx="4.5" cy="12" r="1.8" />
      <path d="M12 6.3V9.5M12 14.5v3.2M6.3 12H9.5M14.5 12h3.2" />
    </>
  ),
  // Data intelligence — a dashboard: bars under a trend line.
  intelligence: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M7.5 16.5v-3.5M12 16.5V10M16.5 16.5v-5" />
      <path d="M6 8.5 9 6.5 12 8l4.5-2.5" />
    </>
  ),
  /* ---------------- Feature / benefit ---------------- */
  // A bar chart on an axis.
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8.5 17v-5M13 17V9M17.5 17v-8" />
    </>
  ),
  // A mesh network — four nodes, joined.
  network: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M8 6h8M6 8v8M18 8v8M8 18h8M7.4 7.4l9.2 9.2" />
    </>
  ),
  // A routed journey — dashed path between two waypoints.
  route: (
    <>
      <circle cx="5.5" cy="18.5" r="2" />
      <circle cx="18.5" cy="5.5" r="2" />
      <path d="M5.5 16.5C5.5 11 18.5 13 18.5 7.5" strokeDasharray="2.5 2.5" />
    </>
  ),
  // Search — a magnifier.
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  // Workflow — three steps in sequence.
  workflow: (
    <>
      <rect x="3" y="9" width="5" height="6" rx="1" />
      <rect x="9.5" y="9" width="5" height="6" rx="1" />
      <rect x="16" y="9" width="5" height="6" rx="1" />
      <path d="M8 12h1.5M14.5 12H16" />
    </>
  ),
  // A report — a document with bars.
  report: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 16.5v-3.5M12 16.5v-5.5M15 16.5v-2" />
    </>
  ),
  // A padlock.
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  // A globe.
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.6 2.3 3.9 5.2 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.2-3.9-8.5S9.4 5.8 12 3.5Z" />
    </>
  ),
  // A clock.
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  // A spark — governed AI assistance, new capability.
  spark: (
    <>
      <path d="M12 3l1.8 5.7 5.7 1.8-5.7 1.8L12 18l-1.8-5.7L4.5 10.5l5.7-1.8L12 3Z" />
      <path
        d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  // A gauge — limits, thresholds, live status.
  gauge: (
    <>
      <path d="M4.5 15a7.5 7.5 0 0 1 15 0" />
      <path d="M12 15l3.5-3.5" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
      <path d="M4.5 19.5h15" />
    </>
  ),
  // A wallet.
  wallet: (
    <>
      <rect x="3" y="6.5" width="18" height="13" rx="2.5" />
      <path d="M3 10.5h18" />
      <circle cx="16.8" cy="15" r="1.5" />
    </>
  ),
  // A funnel — lead / sales pipeline.
  funnel: <path d="M4 5h16l-6.5 7.5V18l-3 2v-7.5L4 5Z" />,
  // A key — access, credentials, API keys.
  key: (
    <>
      <circle cx="8" cy="15.5" r="4" />
      <path d="M11 12.5 19 4.5" />
      <path d="M15.5 8l1.5 1.5M18 5.5l1.5 1.5" />
    </>
  ),
  // An eye — visibility, oversight.
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // A chain link.
  link: (
    <>
      <path d="M10.5 13.5 13.5 10.5" />
      <path d="M8.5 15.5a4 4 0 0 1 0-5.7l2-2a4 4 0 1 1 5.7 5.7l-1 1" />
      <path d="M15.5 8.5a4 4 0 0 1 0 5.7l-2 2a4 4 0 1 1-5.7-5.7l1-1" />
    </>
  ),
  // A star — featured, rated.
  star: (
    <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8L12 3.5Z" />
  ),
  // A database — the shared data model.
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
      <path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6" />
      <path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
    </>
  ),
  // A filter — narrowing lines.
  filter: <path d="M4 7h16M7 12h10M10 17h4" />,
  // A telephone handset.
  phone: (
    <path d="M5 4h3.5l1.8 4.5-2.3 1.7a12 12 0 0 0 5.8 5.8l1.7-2.3L20 15.5V19a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  ),
  // A map pin.
  pin: (
    <>
      <path d="M12 21s-6.5-5.3-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  // Information.
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
      <path d="M12 11.5V16" />
    </>
  ),
  // A warning triangle.
  alert: (
    <>
      <path d="M12 4 21 19.5H3L12 4Z" />
      <path d="M12 10v4.5" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  // A paper plane — send, outreach.
  send: (
    <>
      <path d="M3.5 11.5 20.5 4l-4.5 16.5-5-6.5-7.5-2.5Z" />
      <path d="M11 14l9.5-10" />
    </>
  ),
  // Play — video, walkthrough.
  play: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10 8.5v7l6-3.5-6-3.5Z" />
    </>
  ),
  // Download.
  download: (
    <>
      <path d="M12 4v11" />
      <path d="M7.5 11 12 15.5 16.5 11" />
      <path d="M4.5 19.5h15" />
    </>
  ),
  // Refresh / sync.
  refresh: (
    <>
      <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
      <path d="M19.5 3.5v3.8h-3.8" />
    </>
  ),
  // A headset — human support.
  headset: (
    <>
      <path d="M4.5 14a7.5 7.5 0 0 1 15 0" />
      <rect x="3.5" y="13.5" width="3.5" height="6" rx="1.5" />
      <rect x="17" y="13.5" width="3.5" height="6" rx="1.5" />
      <path d="M18.5 19.5c0 1.5-1.5 2-3 2" />
    </>
  ),
  // Quotation marks (filled, for legibility at small sizes).
  quote: (
    <>
      <path
        d="M9.5 6.5C6.5 8 4.5 10.5 4.5 13.5c0 1.7 1.2 3 2.9 3 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.4-2.4-.3 0-.6 0-.9.1.3-1.5 1.4-2.9 2.8-3.8L9.5 6.5Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M20 6.5c-3 1.5-5 4-5 7 0 1.7 1.2 3 2.9 3 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.4-2.4-.3 0-.6 0-.9.1.3-1.5 1.4-2.9 2.8-3.8V6.5Z"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),
  // A check in a circle — verified, done.
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12.5l2.8 2.8L16.5 9.5" />
    </>
  ),
  /* ---------------- Generic / chrome ---------------- */
  shield: (
    <>
      <path d="M12 3l7 2.8v5.4c0 4.5-3 7.6-7 9.8-4-2.2-7-5.3-7-9.8V5.8L12 3Z" />
      <path d="M9 11.5l2 2 4-4.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3.5 19.5c.6-3.2 2.9-4.8 5.5-4.8s4.9 1.6 5.5 4.8" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M16.6 14.7c2.3.3 3.9 1.8 4.4 4.5" />
    </>
  ),
  audit: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <circle cx="10.5" cy="14" r="2.5" />
      <path d="M12.4 15.9 14.5 18" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17.5l9 5 9-5" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h10M18 7h2" />
      <path d="M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  chevronRight: <path d="M9.5 6l6 6-6 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a1 1 0 0 1 1 1v11" />
      <path d="M8 7h2M8 11h2M8 15h2" />
      <path d="M3 21h18" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M4 19a2 2 0 0 1 2-2h13" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  code: (
    <>
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
      <path d="M13 5l-2 14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = DEFAULT_STROKE_WIDTH,
}: IconProps & { name: IconName }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Individual named components                                         */
/* ------------------------------------------------------------------ */

function createIconComponent(name: IconName, displayName: string): IconComponent {
  const NamedIcon = ({
    size = 24,
    className = "",
    strokeWidth = DEFAULT_STROKE_WIDTH,
  }: IconProps) => (
    <Icon name={name} size={size} className={className} strokeWidth={strokeWidth} />
  );
  NamedIcon.displayName = displayName;
  return NamedIcon;
}

// Solutions
export const CrmIcon = createIconComponent("crm", "CrmIcon");
export const PaymentsIcon = createIconComponent("payments", "PaymentsIcon");
export const PammIcon = createIconComponent("pamm", "PammIcon");
export const IbIcon = createIconComponent("ib", "IbIcon");
export const TradeopsIcon = createIconComponent("tradeops", "TradeopsIcon");
export const OnboardingIcon = createIconComponent("onboarding", "OnboardingIcon");
export const ContestsIcon = createIconComponent("contests", "ContestsIcon");
// Industries
export const BrokersIcon = createIconComponent("brokers", "BrokersIcon");
export const BanksIcon = createIconComponent("banks", "BanksIcon");
export const SecuritiesIcon = createIconComponent("securities", "SecuritiesIcon");
export const WealthIcon = createIconComponent("wealth", "WealthIcon");
export const AssetFundIcon = createIconComponent("assetFund", "AssetFundIcon");
export const ExchangesIcon = createIconComponent("exchanges", "ExchangesIcon");
export const BondsIcon = createIconComponent("bonds", "BondsIcon");
export const PropIcon = createIconComponent("prop", "PropIcon");
export const DigitalAssetsIcon = createIconComponent("digitalAssets", "DigitalAssetsIcon");
// Platform layers
export const ExperienceIcon = createIconComponent("experience", "ExperienceIcon");
export const OperationsIcon = createIconComponent("operations", "OperationsIcon");
export const EcosystemIcon = createIconComponent("ecosystem", "EcosystemIcon");
export const IntelligenceIcon = createIconComponent("intelligence", "IntelligenceIcon");
// Feature / benefit
export const ChartIcon = createIconComponent("chart", "ChartIcon");
export const NetworkIcon = createIconComponent("network", "NetworkIcon");
export const RouteIcon = createIconComponent("route", "RouteIcon");
export const SearchIcon = createIconComponent("search", "SearchIcon");
export const WorkflowIcon = createIconComponent("workflow", "WorkflowIcon");
export const ReportIcon = createIconComponent("report", "ReportIcon");
export const LockIcon = createIconComponent("lock", "LockIcon");
export const GlobeIcon = createIconComponent("globe", "GlobeIcon");
export const ClockIcon = createIconComponent("clock", "ClockIcon");
export const SparkIcon = createIconComponent("spark", "SparkIcon");
export const GaugeIcon = createIconComponent("gauge", "GaugeIcon");
export const WalletIcon = createIconComponent("wallet", "WalletIcon");
export const FunnelIcon = createIconComponent("funnel", "FunnelIcon");
export const KeyIcon = createIconComponent("key", "KeyIcon");
export const EyeIcon = createIconComponent("eye", "EyeIcon");
export const LinkIcon = createIconComponent("link", "LinkIcon");
export const StarIcon = createIconComponent("star", "StarIcon");
export const DatabaseIcon = createIconComponent("database", "DatabaseIcon");
export const FilterIcon = createIconComponent("filter", "FilterIcon");
export const PhoneIcon = createIconComponent("phone", "PhoneIcon");
export const PinIcon = createIconComponent("pin", "PinIcon");
export const InfoIcon = createIconComponent("info", "InfoIcon");
export const AlertIcon = createIconComponent("alert", "AlertIcon");
export const MinusIcon = createIconComponent("minus", "MinusIcon");
export const SendIcon = createIconComponent("send", "SendIcon");
export const PlayIcon = createIconComponent("play", "PlayIcon");
export const DownloadIcon = createIconComponent("download", "DownloadIcon");
export const RefreshIcon = createIconComponent("refresh", "RefreshIcon");
export const HeadsetIcon = createIconComponent("headset", "HeadsetIcon");
export const QuoteIcon = createIconComponent("quote", "QuoteIcon");
export const CheckCircleIcon = createIconComponent("checkCircle", "CheckCircleIcon");
// Generic / chrome
export const ShieldIcon = createIconComponent("shield", "ShieldIcon");
export const UsersIcon = createIconComponent("users", "UsersIcon");
export const AuditIcon = createIconComponent("audit", "AuditIcon");
export const LayersIcon = createIconComponent("layers", "LayersIcon");
export const SlidersIcon = createIconComponent("sliders", "SlidersIcon");
export const ArrowRightIcon = createIconComponent("arrowRight", "ArrowRightIcon");
export const ArrowUpRightIcon = createIconComponent("arrowUpRight", "ArrowUpRightIcon");
export const ChevronDownIcon = createIconComponent("chevronDown", "ChevronDownIcon");
export const ChevronRightIcon = createIconComponent("chevronRight", "ChevronRightIcon");
export const MenuIcon = createIconComponent("menu", "MenuIcon");
export const CloseIcon = createIconComponent("close", "CloseIcon");
export const CheckIcon = createIconComponent("check", "CheckIcon");
export const PlusIcon = createIconComponent("plus", "PlusIcon");
export const BuildingIcon = createIconComponent("building", "BuildingIcon");
export const BookIcon = createIconComponent("book", "BookIcon");
export const CalendarIcon = createIconComponent("calendar", "CalendarIcon");
export const CodeIcon = createIconComponent("code", "CodeIcon");
export const MailIcon = createIconComponent("mail", "MailIcon");
export const DocumentIcon = createIconComponent("document", "DocumentIcon");

/* ------------------------------------------------------------------ */
/* Slug-keyed lookup maps                                              */
/* ------------------------------------------------------------------ */

/** Solution route slugs (src/content/solutions.ts) → icon. */
export const SOLUTION_ICONS: Record<string, IconName> = {
  "financial-crm": "crm",
  "payment-orchestration": "payments",
  "pamm-copy-trading": "pamm",
  "ib-incentives": "ib",
  tradeops: "tradeops",
  "digital-onboarding": "onboarding",
  "trading-contests": "contests",
  // White-label: your brand on your own domain — the globe carries it.
  "white-label": "globe",
};

/** Industry route slugs (src/content/industries/) → icon. */
export const INDUSTRY_ICONS: Record<string, IconName> = {
  "multi-asset-brokers": "brokers",
  banks: "banks",
  "securities-derivatives": "securities",
  "wealth-management": "wealth",
  "asset-fund-managers": "assetFund",
  exchanges: "exchanges",
  "bonds-fixed-income": "bonds",
  "prop-firms": "prop",
  "digital-assets": "digitalAssets",
};

/**
 * Platform layer → icon. Keyed by route slug AND by the layer `id`
 * used in src/content/platform.ts (`experience`, `operations`,
 * `integrations`, `intelligence`); `analytics` is the route for the
 * data-intelligence layer, and `data-intelligence` is accepted too.
 */
export const LAYER_ICONS: Record<string, IconName> = {
  "client-experience": "experience",
  experience: "experience",
  "financial-operations": "operations",
  operations: "operations",
  integrations: "ecosystem",
  analytics: "intelligence",
  intelligence: "intelligence",
  "data-intelligence": "intelligence",
};

export type SolutionSlug = keyof typeof SOLUTION_ICONS;
export type IndustrySlug = keyof typeof INDUSTRY_ICONS;
export type LayerSlug = keyof typeof LAYER_ICONS;

/** Resolve a solution slug to its icon; unknown slugs get a neutral tile. */
export function solutionIcon(slug: string): IconName {
  return SOLUTION_ICONS[slug] ?? "layers";
}

/** Resolve an industry slug to its icon; unknown slugs get a neutral tile. */
export function industryIcon(slug: string): IconName {
  return INDUSTRY_ICONS[slug] ?? "layers";
}

/** Resolve a platform-layer slug or id to its icon. */
export function layerIcon(slug: string): IconName {
  return LAYER_ICONS[slug] ?? "layers";
}
