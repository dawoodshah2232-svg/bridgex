/**
 * Route registry — the single source of truth for ALL 44 BridgeX routes.
 *
 * Every component that renders navigation (Header, MegaMenu, MobileNav,
 * Footer, Breadcrumbs, sitemap in Batch 4) MUST consume this file.
 * No hardcoded nav lists anywhere else.
 *
 * Route count: home (1) + Platform (8) + Solutions (8) + Industries (9)
 * + Services (4) + Resources (7) + Company (4) + book-demo (1) + pricing
 * (1) + legal (3) = 46. Paths are basePath-free; Next.js <Link> adds the
 * basePath. (White-label rework, 16 Nov 2026: + /solutions/white-label
 * and /pricing. Pricing sits in the "cta" group with book-demo — it is
 * linked from the header, footer and CtaBand, not from a mega-menu.)
 *
 * Groups without an overview page (Solutions, Industries, Company) have
 * `overviewHref: null` — their mega-menu heading is plain text, never a
 * dead link. (White-label rework, 16 Nov 2026: AI Assistance is no
 * longer flagged "roadmap" — BriX AI is a live product on
 * bridgexapps.com, priced from $49/month.)
 */

export type NavGroupId =
  | "platform"
  | "solutions"
  | "industries"
  | "services"
  | "resources"
  | "company"
  | "legal";

export interface NavRoute {
  /** Route path, basePath-free (e.g. "/platform/architecture"). */
  href: string;
  label: string;
  /** One-line description used in mega-menus and the footer. */
  description: string;
  group: NavGroupId | "home" | "cta";
  /** "roadmap" routes are labelled as in development wherever shown. */
  status?: "live" | "roadmap";
}

export interface NavGroup {
  id: NavGroupId;
  label: string;
  /** Overview page for the group, or null when the group has none. */
  overviewHref: string | null;
  /** Short editorial line for the mega-menu featured panel. */
  blurb: string;
  /** Href of the route featured in the mega-menu panel. */
  featuredHref: string;
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: "platform",
    label: "Platform",
    overviewHref: "/platform",
    blurb:
      "Four connected layers on one shared foundation — experience, operations, integrations and intelligence.",
    featuredHref: "/platform/architecture",
  },
  {
    id: "solutions",
    label: "Solutions",
    overviewHref: null,
    blurb:
      "Eight capabilities that work alone or together, from CRM and onboarding to payments, partner growth and white-label.",
    featuredHref: "/solutions/financial-crm",
  },
  {
    id: "industries",
    label: "Industries",
    overviewHref: null,
    blurb:
      "The same connected core, shaped around how each kind of financial business actually operates.",
    featuredHref: "/industries/multi-asset-brokers",
  },
  {
    id: "services",
    label: "Services",
    overviewHref: "/services",
    blurb:
      "Implementation, migration and managed support from the people who built the platform.",
    featuredHref: "/services/implementation",
  },
  {
    id: "resources",
    label: "Resources",
    overviewHref: "/resources",
    blurb:
      "Editorial insight, guides and product notes from the BridgeX team — written, not generated.",
    featuredHref: "/resources/blog",
  },
  {
    id: "company",
    label: "Company",
    overviewHref: null,
    blurb:
      "Who we are, how to reach us, and how to work with us — as a client or a partner.",
    featuredHref: "/company/about",
  },
  {
    id: "legal",
    label: "Legal",
    overviewHref: null,
    blurb: "",
    featuredHref: "/privacy",
  },
];

/** Routes with a dark hero (transparent header state). Batch 2 dark heroes
 *  added by the coordinator at integration (workers report, coordinator edits). */
export const DARK_HERO_ROUTES = new Set<string>([
  "/",
  "/platform",
  "/platform/architecture",
  "/platform/client-experience",
  "/platform/financial-operations",
  "/platform/no-code-studio",
  "/platform/integrations",
  "/platform/analytics",
  "/platform/ai-assistance",
  "/solutions/financial-crm",
  "/solutions/payment-orchestration",
  "/solutions/pamm-copy-trading",
  "/solutions/ib-incentives",
  "/solutions/tradeops",
  "/solutions/digital-onboarding",
  "/solutions/trading-contests",
  "/solutions/white-label",
  "/industries/multi-asset-brokers",
  "/industries/banks",
  "/industries/securities-derivatives",
  "/industries/wealth-management",
  "/industries/asset-fund-managers",
  "/industries/exchanges",
  "/industries/bonds-fixed-income",
  "/industries/prop-firms",
  "/industries/digital-assets",
  "/services/implementation",
  "/services/managed-services",
  "/services/integration-migration",
  "/resources",
  "/resources/blog",
  "/resources/case-studies",
  "/resources/guides",
  "/resources/product-updates",
  "/resources/developers",
  "/resources/events",
  "/book-demo",
  "/search",
]);

export const ROUTES: NavRoute[] = [
  // Home
  {
    href: "/",
    label: "Home",
    description: "Connected infrastructure for modern financial businesses.",
    group: "home",
  },

  // Platform (8)
  {
    href: "/platform",
    label: "Platform Overview",
    description: "Four layers, one shared foundation, built to connect.",
    group: "platform",
  },
  {
    href: "/platform/architecture",
    label: "Architecture",
    description: "Experience, operations, integrations and intelligence — separated, connected.",
    group: "platform",
  },
  {
    href: "/platform/client-experience",
    label: "Client Experience",
    description: "Branded client rooms, partner portals and advisor interfaces.",
    group: "platform",
  },
  {
    href: "/platform/financial-operations",
    label: "Financial Operations",
    description: "Accounts, wallets, payments, cases and approvals in one view.",
    group: "platform",
  },
  {
    href: "/platform/no-code-studio",
    label: "No-Code Studio",
    description: "Configure objects, forms, workflows and journeys without code.",
    group: "platform",
  },
  {
    href: "/platform/integrations",
    label: "Integrations",
    description: "Adapters for trading platforms, payments, KYC and market data.",
    group: "platform",
  },
  {
    href: "/platform/analytics",
    label: "Data & Analytics",
    description: "Dashboards, funnels, exceptions and audit-ready reporting.",
    group: "platform",
  },
  {
    href: "/platform/ai-assistance",
    label: "AI Assistance",
    description: "BriX AI — governed assistance, human approval first.",
    group: "platform",
  },

  // Solutions (7)
  {
    href: "/solutions/financial-crm",
    label: "Financial CRM",
    description: "Leads, contact 360, pipelines and case work in one place.",
    group: "solutions",
  },
  {
    href: "/solutions/payment-orchestration",
    label: "Payment Orchestration",
    description: "Provider-agnostic routing, retry and reconciliation.",
    group: "solutions",
  },
  {
    href: "/solutions/pamm-copy-trading",
    label: "PAMM & Copy Trading",
    description: "Strategies, subscriptions, allocations and fee logic.",
    group: "solutions",
  },
  {
    href: "/solutions/ib-incentives",
    label: "IB & Incentive Management",
    description: "Partner hierarchies, rebates, ledgers and payouts.",
    group: "solutions",
  },
  {
    href: "/solutions/tradeops",
    label: "TradeOps Control Center",
    description: "Server operations with dry-run, approval and audit.",
    group: "solutions",
  },
  {
    href: "/solutions/digital-onboarding",
    label: "Digital Onboarding & KYC",
    description: "Adaptive journeys, verification and approval queues.",
    group: "solutions",
  },
  {
    href: "/solutions/trading-contests",
    label: "Trading Contest Management",
    description: "Contests, live rankings, fairness review and prizes.",
    group: "solutions",
  },
  {
    href: "/solutions/white-label",
    label: "White-Label Solutions",
    description: "The complete brokerage platform, rebranded as yours.",
    group: "solutions",
  },

  // Industries (9)
  {
    href: "/industries/multi-asset-brokers",
    label: "Multi-Asset Brokers",
    description: "Trader lifecycle, client area, partners and deposits.",
    group: "industries",
  },
  {
    href: "/industries/banks",
    label: "Banks",
    description: "Bank-branded trading journeys and RM coordination.",
    group: "industries",
  },
  {
    href: "/industries/securities-derivatives",
    label: "Securities & Derivatives",
    description: "Institutional relationships, controls and payment flows.",
    group: "industries",
  },
  {
    href: "/industries/wealth-management",
    label: "Wealth Management",
    description: "Advisor workspaces, suitability and investor statements.",
    group: "industries",
  },
  {
    href: "/industries/asset-fund-managers",
    label: "Asset & Fund Managers",
    description: "Subscriptions, investor portals and distributor fees.",
    group: "industries",
  },
  {
    href: "/industries/exchanges",
    label: "Exchanges & Trading Venues",
    description: "Membership onboarding, fees and conformance workflows.",
    group: "industries",
  },
  {
    href: "/industries/bonds-fixed-income",
    label: "Bonds & Fixed Income",
    description: "Onboarding, suitability and allocation visibility.",
    group: "industries",
  },
  {
    href: "/industries/prop-firms",
    label: "Prop Trading Firms",
    description: "Challenge lifecycle, affiliates and profit-share flows.",
    group: "industries",
  },
  {
    href: "/industries/digital-assets",
    label: "Digital Asset Firms",
    description: "KYC, fiat ramps and multi-jurisdiction review.",
    group: "industries",
  },

  // Services (4)
  {
    href: "/services",
    label: "Services Overview",
    description: "Implementation, migration and managed services.",
    group: "services",
  },
  {
    href: "/services/implementation",
    label: "Implementation",
    description: "Discover, design, build, validate, deploy — with you.",
    group: "services",
  },
  {
    href: "/services/managed-services",
    label: "Managed Services",
    description: "Support, monitoring and continuous optimisation.",
    group: "services",
  },
  {
    href: "/services/integration-migration",
    label: "Integration & Migration",
    description: "Staged migration with reconciliation and rollback.",
    group: "services",
  },

  // Resources (7)
  {
    href: "/resources",
    label: "Resource Hub",
    description: "Everything we publish, in one place.",
    group: "resources",
  },
  {
    href: "/resources/blog",
    label: "Insights / Blog",
    description: "Original editorial on brokerage operations.",
    group: "resources",
  },
  {
    href: "/resources/case-studies",
    label: "Case Studies",
    description: "Authentic client stories — published when they exist.",
    group: "resources",
  },
  {
    href: "/resources/guides",
    label: "Guides & Reports",
    description: "Practical guides for operators and decision-makers.",
    group: "resources",
  },
  {
    href: "/resources/product-updates",
    label: "Product Updates",
    description: "What shipped, what changed, what is next.",
    group: "resources",
  },
  {
    href: "/resources/developers",
    label: "Developer / API Docs",
    description: "APIs, webhooks and integration references.",
    group: "resources",
  },
  {
    href: "/resources/events",
    label: "Events & Webinars",
    description: "Where to meet the BridgeX team.",
    group: "resources",
  },

  // Company (4)
  {
    href: "/company/about",
    label: "About BridgeX",
    description: "Our mission, philosophy and product principles.",
    group: "company",
  },
  {
    href: "/company/contact",
    label: "Contact",
    description: "Talk to a person about your business.",
    group: "company",
  },
  {
    href: "/company/partners",
    label: "Partner With Us",
    description: "Joint go-to-market, integrations and referrals.",
    group: "company",
  },
  {
    href: "/company/careers",
    label: "Careers",
    description: "Open roles at BridgeX — when there are any.",
    group: "company",
  },

  // Persistent CTA
  {
    href: "/book-demo",
    label: "Book a Private Demo",
    description: "See BridgeX running on your own workflows.",
    group: "cta",
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Simple, transparent pricing from $499/month.",
    group: "cta",
  },

  // Legal (3)
  {
    href: "/privacy",
    label: "Privacy Policy",
    description: "How we handle personal data.",
    group: "legal",
  },
  {
    href: "/cookies",
    label: "Cookie Policy",
    description: "What we store in your browser, and why.",
    group: "legal",
  },
  {
    href: "/security-policy",
    label: "Security Policy",
    description: "How we protect the platform and your data.",
    group: "legal",
  },
];

/** All routes in one group, in registry order. */
export function routesByGroup(group: NavGroupId | "home" | "cta"): NavRoute[] {
  return ROUTES.filter((r) => r.group === group);
}

/** Look up a route by its href (basePath-free). Returns undefined if unknown. */
export function routeByHref(href: string): NavRoute | undefined {
  const clean = href === "/" ? "/" : href.replace(/\/$/, "");
  return ROUTES.find((r) => r.href === clean);
}

/** The six groups shown in the header mega-menu (legal lives in the footer). */
export const HEADER_GROUPS: NavGroup[] = NAV_GROUPS.filter(
  (g) => g.id !== "legal",
);

/** The six groups shown as footer columns. */
export const FOOTER_GROUPS: NavGroup[] = NAV_GROUPS.filter(
  (g) => g.id !== "legal",
);

/** Breadcrumb trail for a route: Home → group overview (if any) → route. */
export function breadcrumbsFor(href: string): NavRoute[] {
  const route = routeByHref(href);
  if (!route || route.href === "/") return [];
  const home = ROUTES[0];
  const trail: NavRoute[] = [home];
  const group = NAV_GROUPS.find((g) => g.id === route.group);
  if (group?.overviewHref && group.overviewHref !== route.href) {
    const overview = routeByHref(group.overviewHref);
    if (overview) trail.push(overview);
  }
  trail.push(route);
  return trail;
}
