/**
 * Resources content — typed data for the seven resource routes (spec §10).
 *
 * Blog articles themselves live in src/content/insights.ts (INSIGHT_ARTICLES);
 * this file only holds the full article bodies (keyed by insight slug) so
 * the blog index can expand each article inline. Nothing here invents
 * clients, results, certifications or live product modules: case studies
 * are coming soon, events are planned, and developer endpoints are
 * clearly-labelled examples against a sandbox host that does not exist.
 */

import type { IconName } from "@/components/icons";

/* ------------------------------------------------------------------ */
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

/** Human-readable date, e.g. "10 Nov 2026" (same convention as insights). */
export function formatResourceDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/* ------------------------------------------------------------------ */
/* Resource Hub                                                        */
/* ------------------------------------------------------------------ */

export type ResourceCategory =
  | "Insights"
  | "Guides"
  | "Product updates"
  | "Developers"
  | "Events"
  | "Case studies";

export interface HubItem {
  id: string;
  title: string;
  summary: string;
  category: ResourceCategory;
  /** Section page the card links to (always a registry route). */
  href: string;
  /** Small meta line, e.g. a date or "5 min read". */
  meta: string;
  /** Card thumbnail (root-relative public path; render through asset()). */
  image: string;
  /** Real alt text describing the thumbnail photograph. */
  imageAlt: string;
}

/** The six resource sections, for the hub's "browse by section" grid. */
export interface ResourceSection {
  href: string;
  label: string;
  description: string;
  icon: IconName;
  /** Section card photograph (root-relative public path). */
  image: string;
  /** Real alt text describing the section photograph. */
  imageAlt: string;
}

export const RESOURCE_SECTIONS: ResourceSection[] = [
  {
    href: "/resources/blog",
    label: "Insights / Blog",
    description:
      "Original editorial on brokerage operations — reconciliation, partner growth and onboarding, written by the BridgeX team.",
    icon: "book",
    image: "/images/skyline-dusk.jpg",
    imageAlt: "Close-up of a tablet showing a green candlestick chart",
  },
  {
    href: "/resources/guides",
    label: "Guides & Reports",
    description:
      "Practical, operator-focused guides: launching a brokerage, designing an IB programme, running onboarding and payments well.",
    icon: "document",
    image: "/images/workshop-presentation.jpg",
    imageAlt: "Trader celebrating a win at a desk with a laptop and a large market-data wall",
  },
  {
    href: "/resources/case-studies",
    label: "Case Studies",
    description:
      "Authentic client stories, published only when customers agree to share them. None yet — here is what we will document.",
    icon: "users",
    image: "/images/band-glass-tower.jpg",
    imageAlt: "Two traders pointing at a tablet showing a chart on a desk",
  },
  {
    href: "/resources/product-updates",
    label: "Product Updates",
    description:
      "What shipped, what changed and what is next — labelled honestly as Live, Sandbox, Demo or Planned.",
    icon: "layers",
    image: "/images/hero-skyline-sf.jpg",
    imageAlt: "Multi-monitor trading desk showing candlestick and line charts",
  },
  {
    href: "/resources/developers",
    label: "Developer / API Docs",
    description:
      "Versioned API architecture, example endpoints and planned webhooks — built for the engineers who will integrate BridgeX.",
    icon: "code",
    image: "/images/resources-code.jpg",
    imageAlt: "Developer code on screen",
  },
  {
    href: "/resources/events",
    label: "Events & Webinars",
    description:
      "Planned webinars on onboarding, partner economics and payments. No dates yet — register interest and we will tell you first.",
    icon: "calendar",
    image: "/images/resources-audience.jpg",
    imageAlt: "Trader seen from behind raising his arms in celebration at a multi-monitor desk",
  },
];

/**
 * Hub index entries for everything except blog articles — the hub page
 * merges these with INSIGHT_ARTICLES at render time (no duplication).
 */
export const RESOURCE_HUB_ITEMS: HubItem[] = [
  {
    id: "guide-launch-checklist",
    title: "The brokerage launch checklist",
    summary:
      "The decisions to make before go-live: entities, accounts, onboarding, payments and partners — in the order that avoids rework.",
    category: "Guides",
    href: "/resources/guides",
    meta: "Guide · 8 min read",
    image: "/images/signing-contract.jpg",
    imageAlt: "Person signing documents with a pen",
  },
  {
    id: "guide-ib-programme",
    title: "Designing an IB programme people trust",
    summary:
      "Tiers, attribution rules and a commission ledger your partners can check themselves — trust is a feature, not a promise.",
    category: "Guides",
    href: "/resources/guides",
    meta: "Guide · 7 min read",
    image: "/images/handshake-partners.jpg",
    imageAlt: "Magnifier over a printed stacked area chart",
  },
  {
    id: "guide-onboarding-kyc",
    title: "Onboarding and KYC operations, end to end",
    summary:
      "Journey design, verification, approval queues and the handoff to a live trading account — run as one workflow, not five.",
    category: "Guides",
    href: "/resources/guides",
    meta: "Guide · 9 min read",
    image: "/images/compliance-review.jpg",
    imageAlt: "Overhead view of printed market analytics with a magnifier, notebook and pencils",
  },
  {
    id: "guide-payment-routing",
    title: "Payment routing without the guesswork",
    summary:
      "Routing rules, cascading retry and reconciliation: how deposits stop being a daily mystery for your finance team.",
    category: "Guides",
    href: "/resources/guides",
    meta: "Guide · 6 min read",
    image: "/images/payments-pos.jpg",
    imageAlt: "Hands pointing at a tablet showing a candlestick chart",
  },
  {
    id: "guide-reporting",
    title: "Reading your own operations: a reporting starter guide",
    summary:
      "Funnels, exception queues and audit trails — the small set of views that tells an operator what actually needs attention.",
    category: "Guides",
    href: "/resources/guides",
    meta: "Guide · 6 min read",
    image: "/images/trading-floor-desk.jpg",
    imageAlt: "Hands over a trading desk with laptops showing charts",
  },
  {
    id: "update-hub-launch",
    title: "Resource Hub launches",
    summary:
      "Insights, guides, product updates, developer docs and events now live in one place on the BridgeX website.",
    category: "Product updates",
    href: "/resources/product-updates",
    meta: "Live · 13 Nov 2026",
    image: "/images/resources-library.jpg",
    imageAlt: "Close-up of a printed stock report with a candlestick chart",
  },
  {
    id: "update-developer-docs",
    title: "Developer docs: example API reference",
    summary:
      "Versioned API architecture with clearly-labelled example endpoints. Authentication and the sandbox are still planned.",
    category: "Product updates",
    href: "/resources/product-updates",
    meta: "Demo · 12 Nov 2026",
    image: "/images/resources-code.jpg",
    imageAlt: "Developer code on screen",
  },
  {
    id: "update-sandbox",
    title: "Sandbox API environment",
    summary:
      "A hosted sandbox for integration testing is on the roadmap. There is no live endpoint today — the docs show examples only.",
    category: "Product updates",
    href: "/resources/product-updates",
    meta: "Planned · 27 Oct 2026",
    image: "/images/abstract-glass-lines.jpg",
    imageAlt: "Hands holding a phone with a trading app in front of a laptop showing candlestick charts",
  },
  {
    id: "dev-api-reference",
    title: "API reference (examples)",
    summary:
      "Versioned REST examples for contacts, onboarding applications, payments and webhooks — against an example sandbox host.",
    category: "Developers",
    href: "/resources/developers",
    meta: "Example endpoints · v1 (planned)",
    image: "/images/abstract-glass-ceiling.jpg",
    imageAlt: "Hand pointing at a candlestick chart on a dark trading monitor",
  },
  {
    id: "dev-webhooks",
    title: "Webhooks and events (planned)",
    summary:
      "The event catalogue we are designing: onboarding, payments, commissions and TradeOps jobs — with signed delivery planned.",
    category: "Developers",
    href: "/resources/developers",
    meta: "Planned · v1",
    image: "/images/abstract-mirrored-tower.jpg",
    imageAlt: "Hand holding a phone with a rising chart in front of a laptop with trading screens and a coffee",
  },
  {
    id: "event-onboarding-webinar",
    title: "Webinar (planned): From first lead to funded account",
    summary:
      "Onboarding that converts: fewer fields, clearer steps and a human at the end of the journey. Date to be announced.",
    category: "Events",
    href: "/resources/events",
    meta: "Planned webinar · 45 min + Q&A",
    image: "/images/workshop-presentation.jpg",
    imageAlt: "Trader celebrating a win at a desk with a laptop and a large market-data wall",
  },
  {
    id: "event-payments-webinar",
    title: "Webinar (planned): Payments for brokers",
    summary:
      "Routing, retry and reconciliation — how the money side of a brokerage stops being a daily firefight. Date to be announced.",
    category: "Events",
    href: "/resources/events",
    meta: "Planned webinar · 45 min + Q&A",
    image: "/images/boardroom-conference.jpg",
    imageAlt: "Trader studying a tablet with a hand on his chin",
  },
  {
    id: "case-studies-soon",
    title: "Case studies coming soon",
    summary:
      "We publish client stories only with the customer's agreement and checked facts. Here is what future case studies will cover.",
    category: "Case studies",
    href: "/resources/case-studies",
    meta: "Coming soon",
    image: "/images/band-glass-tower.jpg",
    imageAlt: "Two traders pointing at a tablet showing a chart on a desk",
  },
];

/* Guides                                                              */
/* ------------------------------------------------------------------ */

export interface GuideSection {
  heading: string;
  body: string[];
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  audience: string;
  readMinutes: number;
  summary: string;
  /** Card header photograph (root-relative public path). */
  image: string;
  /** Real alt text describing the header photograph. */
  imageAlt: string;
  /** Mid-read photographic break inside the expanded guide. */
  breakImage: string;
  breakImageAlt: string;
  /** Pull-quote from the guide's own text, under the break image. */
  breakQuote: string;
  keyPoints: string[];
  sections: GuideSection[];
}

export const GUIDES: Guide[] = [
  {
    slug: "brokerage-launch-checklist",
    title: "The brokerage launch checklist",
    category: "Launch",
    audience: "Founders and operations leads",
    readMinutes: 8,
    summary:
      "The decisions to make before go-live — entities, accounts, onboarding, payments and partners — in the order that avoids rework.",
    image: "/images/signing-contract.jpg",
    imageAlt: "Person signing documents with a pen",
    breakImage: "/images/lobby-office.jpg",
    breakImageAlt: "Overhead desk with printed charts, a magnifier, cash and a calculator",
    breakQuote: "One client record, shared by every workflow",
    keyPoints: [
      "Decide the operating model before choosing tools",
      "Onboarding, payments and partners share one client record",
      "Test the unhappy paths, not just the demo path",
      "Launch with the audit trail already switched on",
    ],
    sections: [
      {
        heading: "Start with the operating model, not the software",
        body: [
          "Before comparing platforms, write down how the business will actually run: who owns a lead, who approves a withdrawal, who answers a partner asking where their commission is. Most launch delays are not technical; they are decisions nobody made, discovered the week before go-live.",
          "Keep the list short. Five decisions cover most of it: the client journey from first click to first deposit, the account types you will offer, the payment methods by region, the partner model, and who holds approval rights for money movement. Everything else can evolve after launch.",
        ],
      },
      {
        heading: "One client record, shared by every workflow",
        body: [
          "Onboarding, payments, support and partner attribution all describe the same person. If each workflow keeps its own copy of that person, launch week produces four versions of the truth and a reconciliation backlog on day one.",
          "Agree the shared record early: one identifier, one verification state, one account list. Then let each workflow read from it and write its own events back to it. The launch checklist item is not a feature — it is the agreement that there is one record.",
        ],
      },
      {
        heading: "Test the unhappy paths",
        body: [
          "Demos show the happy path: a clean application, an instant approval, a deposit that lands. Real launches meet the rejected document, the failed deposit, the partner whose link was shared twice, the withdrawal that needs a second approver who is on leave.",
          "Walk each unhappy path once before launch, with the people who will handle it live. Note where the handoff is unclear and fix the process, not just the screen. The firms that do this launch quietly; the firms that skip it launch loudly, on support tickets.",
        ],
      },
    ],
  },
  {
    slug: "ib-programme-design",
    title: "Designing an IB programme people trust",
    category: "Partners",
    audience: "Partner managers and commercial leads",
    readMinutes: 7,
    summary:
      "Tiers, attribution rules and a commission ledger your partners can check themselves — trust is a feature, not a promise.",
    image: "/images/handshake-partners.jpg",
    imageAlt: "Magnifier over a printed stacked area chart",
    breakImage: "/images/team-collaboration.jpg",
    breakImageAlt: "Hand pointing at a printed bar chart and line graph on a wooden desk",
    breakQuote: "Every earning needs a cause a partner can inspect",
    keyPoints: [
      "Write the attribution rule down before the first referral",
      "Every earning needs a cause a partner can inspect",
      "Adjustments are visible rows, never silent edits",
      "Pay on a schedule partners can set their watch by",
    ],
    sections: [
      {
        heading: "Attribution first, rates second",
        body: [
          "Partners argue about attribution far more than about rates. First-touch or last-touch, referral link or code, a window of days or a lifetime claim — the choice matters less than the fact that it is written down, applied consistently, and visible to the partner it affects.",
          "Decide the rule for the messy cases too: a client who clicks two links, a referral that arrives after the account exists, a sub-IB who refers another sub-IB. If the rulebook is silent, the dispute is settled by whoever shouts loudest, and that is never the partner.",
        ],
      },
      {
        heading: "A ledger, not a monthly number",
        body: [
          "A commission statement should be a summary of rows the partner could have seen all month: this client, this volume, this rule, this amount. When the rows are visible, the monthly total is a formality. When they are not, the total is a claim the partner has no way to check.",
          "Keep adjustments in the ledger as their own rows with a reason and an approver. Corrections happen — volume is restated, a trade is adjusted — and partners accept them when they can see them. What they do not accept is a number that quietly changed.",
        ],
      },
      {
        heading: "Payouts are a promise with a date",
        body: [
          "Pick a payout rhythm and keep it. Partners plan around it, and a missed date costs more trust than a smaller rate ever would. Publish the schedule, the minimum payout and the approval steps, and make the partner's payout status visible to the partner.",
          "Build in the review step honestly: payouts go through approval because money movement deserves a second pair of eyes. The programme that pays late because of a broken process loses partners; the programme that pays on time because of a boring, reliable one keeps them.",
        ],
      },
    ],
  },
  {
    slug: "onboarding-kyc-operations",
    title: "Onboarding and KYC operations, end to end",
    category: "Operations",
    audience: "Operations and compliance teams",
    readMinutes: 9,
    summary:
      "Journey design, verification, approval queues and the handoff to a live trading account — run as one workflow, not five.",
    image: "/images/compliance-review.jpg",
    imageAlt: "Overhead view of printed market analytics with a magnifier, notebook and pencils",
    breakImage: "/images/signing-agreement.jpg",
    breakImageAlt: "Businessman handing a pen to sign an agreement",
    breakQuote: "Verification is a service, not a gate",
    keyPoints: [
      "Ask for information when it earns its place",
      "Different applicants need different journeys",
      "Reviewers need context, not bare tickets",
      "Measure drop-off by step, not by gut feel",
    ],
    sections: [
      {
        heading: "Design the journey around the applicant",
        body: [
          "An application is a conversation, and the applicant decides how long it lasts. The first step should be small and rewarding — an account that exists, a dashboard that already feels like theirs. Verification arrives when the applicant can see what it unlocks, not before.",
          "Individuals, corporate applicants and professional clients are not the same journey with different labels. Corporate onboarding needs beneficial ownership and authorised signatories; individuals need speed. Forcing one path to serve all three serves none of them.",
        ],
      },
      {
        heading: "Verification is a service, not a gate",
        body: [
          "Document upload, identity checks and screening feel very different depending on when they happen and how failures are handled. A rejected document with a clear reason and a one-tap retry is a minor interruption; the same rejection with a generic error is a lost applicant.",
          "Keep the verification state on the shared client record, so support, sales and compliance all see the same status. The applicant should never have to explain to one team what another team already decided.",
        ],
      },
      {
        heading: "Approval queues are where journeys go to wait",
        body: [
          "Most onboarding delay lives in queues, not in forms. Give reviewers the full context with each case — documents, flags, history, the applicant's own words — and give the queue itself a visible age, so the oldest case is the next case, not the one someone remembers.",
          "Measure four things: drop-off by step, time to first deposit, queue age, and the share of applications needing a second touch. Those numbers point at the exact step to fix next, which is more useful than any general complaint that onboarding is slow.",
        ],
      },
    ],
  },
  {
    slug: "payment-routing",
    title: "Payment routing without the guesswork",
    category: "Payments",
    audience: "Finance and operations leads",
    readMinutes: 6,
    summary:
      "Routing rules, cascading retry and reconciliation: how deposits stop being a daily mystery for your finance team.",
    image: "/images/payments-pos.jpg",
    imageAlt: "Hands pointing at a tablet showing a candlestick chart",
    breakImage: "/images/payments-contactless.jpg",
    breakImageAlt: "Laptop with trading charts beside euro banknotes, coins and a calculator",
    breakQuote: "A declined card is not the end of a deposit; it is the middle of one.",
    keyPoints: [
      "Route by country, currency, amount and client profile",
      "A declined payment deserves a second route, not a dead end",
      "Every payment needs a status trace the client can follow",
      "Reconciliation is a check, not a monthly investigation",
    ],
    sections: [
      {
        heading: "Rules before routes",
        body: [
          "Provider-agnostic routing starts with rules, not with providers. Which methods are available in which country, for which currencies, above and below which amounts, for which client profiles? Write the rules down and the routing follows; skip them and every deposit becomes a judgement call.",
          "Priority and weighted routing are the same idea at different scales: send traffic where it succeeds, shift it when conditions change, and keep the decision visible so finance can explain why a payment took the route it took.",
        ],
      },
      {
        heading: "Declines are part of the flow",
        body: [
          "A declined card is not the end of a deposit; it is the middle of one. Cascading retry — trying the next suitable route after a decline — recovers deposits that would otherwise become support tickets, as long as the retry rules are explicit and the client always knows what is happening.",
          "The line that matters: retry logic must be boring and predictable. A client who sees two attempts and one clear outcome trusts the system. A client who sees a charge they cannot explain does not, and no retry rate is worth that.",
        ],
      },
      {
        heading: "Reconciliation closes the loop",
        body: [
          "Deposits, withdrawals and approvals should reconcile three ways: the payment provider's record, the CRM record and the trading platform's record. When all three point at one shared identifier, reconciliation is a check that runs itself. When they do not, it is a monthly investigation.",
          "Keep an exception queue for the payments that do not reconcile, and work it daily. Five visible exceptions are a morning's work; fifty hidden ones are a quarter-end crisis.",
        ],
      },
    ],
  },
  {
    slug: "reporting-starter-guide",
    title: "Reading your own operations: a reporting starter guide",
    category: "Analytics",
    audience: "Operators, team leads and founders",
    readMinutes: 6,
    summary:
      "Funnels, exception queues and audit trails — the small set of views that tells an operator what actually needs attention.",
    image: "/images/trading-floor-desk.jpg",
    imageAlt: "Hands over a trading desk with laptops showing charts",
    breakImage: "/images/analyst-workstation.jpg",
    breakImageAlt: "Desk with a laptop and monitor showing charts",
    breakQuote: "Audit trails are for Tuesdays, not just auditors",
    keyPoints: [
      "Start with four views, not forty dashboards",
      "Exceptions deserve a queue, not a report",
      "Funnels show where effort leaks away",
      "Audit trails turn arguments into lookups",
    ],
    sections: [
      {
        heading: "Four views cover most days",
        body: [
          "An operator's morning needs four things: the sales funnel (where leads stall), the onboarding funnel (where applicants stall), the payments view (what moved, what failed, what is waiting), and the exception queue (what needs a human today). Everything else is a deeper cut of one of those four.",
          "Resist the forty-dashboard trap. A dashboard nobody opens is worse than no dashboard, because it creates the impression that someone is watching a number nobody is watching.",
        ],
      },
      {
        heading: "Exceptions are work, not statistics",
        body: [
          "A failed deposit, a stuck application, a partner payout awaiting approval — these are tasks with owners and ages, not rows in a monthly report. Give each exception queue a visible oldest item and a named owner, and the queue shrinks. Bury exceptions in a report and they grow quietly.",
          "Review the queues together once a week. The same exception appearing in two queues is usually one root cause wearing two hats, and fixing it once beats working around it twice.",
        ],
      },
      {
        heading: "Audit trails are for Tuesdays, not just auditors",
        body: [
          "The audit trail's real audience is not the regulator; it is the team member on a Tuesday trying to answer 'who changed this and why?' A complete trail — who, what, when, and the reason given — turns that question from an investigation into a lookup.",
          "Record the reason, not just the change. A leverage change with a note is a decision; the same change without one is a mystery that will cost someone an afternoon.",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Product updates                                                     */
/* ------------------------------------------------------------------ */

export type UpdateStatus = "Live" | "Sandbox" | "Demo" | "Planned";

export interface ProductUpdate {
  id: string;
  date: string;
  title: string;
  status: UpdateStatus;
  summary: string;
  items: string[];
}

/** What each status label means on this page (and across the site). */
export const UPDATE_STATUS_DEFINITIONS: { status: UpdateStatus; meaning: string; icon: IconName }[] = [
  {
    status: "Live",
    icon: "checkCircle",
    meaning: "Available on the BridgeX website today, as described.",
  },
  {
    status: "Sandbox",
    icon: "gauge",
    meaning: "Available in a test environment with sample data only.",
  },
  {
    status: "Demo",
    icon: "eye",
    meaning: "A preview or illustration — not a working production module.",
  },
  {
    status: "Planned",
    icon: "clock",
    meaning: "On the roadmap. Not built yet, and no date is promised.",
  },
];

export const PRODUCT_UPDATES: ProductUpdate[] = [
  {
    id: "hub-launch",
    date: "2026-11-13",
    title: "Resource Hub launches",
    status: "Live",
    summary:
      "Everything we publish now lives in one place: insights, guides, product updates, developer docs and events.",
    items: [
      "Resource Hub with search and category filters across all published resources",
      "Guides section opens with five original operator guides, readable in full on the page",
      "Events page opens with the planned webinar programme and a register-interest form",
    ],
  },
  {
    id: "developer-docs",
    date: "2026-11-12",
    title: "Developer docs: example API reference",
    status: "Demo",
    summary:
      "The developer pages now describe the versioned API architecture with example endpoints. These are illustrations, not a live service.",
    items: [
      "Example endpoints for contacts, onboarding applications and payments",
      "Planned webhook event catalogue with signed delivery described",
      "Authentication documented as planned — no real credentials exist yet",
    ],
  },
  {
    id: "insights-launch",
    date: "2026-11-10",
    title: "Insights: three editorial articles published",
    status: "Live",
    summary:
      "The first three BridgeX editorial pieces are live on the blog index, each readable in full on the page.",
    items: [
      "One ledger, one truth: why reconciliation starts in the CRM",
      "Partner growth without the spreadsheet",
      "Onboarding is a journey, not a form",
    ],
  },
  {
    id: "events-announced",
    date: "2026-11-06",
    title: "Events programme announced",
    status: "Planned",
    summary:
      "Four webinar topics are planned — onboarding, partner economics, payments and TradeOps. No dates are set yet.",
    items: [
      "Planned topics published with format and audience for each session",
      "Register-interest form saves your topic preference on your own device",
      "Dates and registration will be announced on this page first",
    ],
  },
  {
    id: "status-labels",
    date: "2026-11-03",
    title: "Product status labels, explained",
    status: "Live",
    summary:
      "Every feature claim on this site now carries one of four labels — Live, Sandbox, Demo or Planned — defined on this page.",
    items: [
      "Status definitions published so readers can tell a preview from a product",
      "AI Assistance labelled in development wherever it appears",
      "No module is described as live until it is one",
    ],
  },
  {
    id: "sandbox-api",
    date: "2026-10-27",
    title: "Sandbox API environment",
    status: "Planned",
    summary:
      "A hosted sandbox for integration testing is on the roadmap. There is no live endpoint today.",
    items: [
      "Planned: test credentials, sample data and a sandbox base URL",
      "Planned: webhook delivery to a URL you control, with retry",
      "Until then, the developer docs show example requests and responses only",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

export interface EventTopic {
  id: string;
  title: string;
  format: string;
  audience: string;
  description: string;
  points: string[];
  /** Card photograph (root-relative public path). */
  image: string;
  /** Real alt text describing the card photograph. */
  imageAlt: string;
}

export const EVENT_TOPICS: EventTopic[] = [
  {
    id: "onboarding-webinar",
    title: "From first lead to funded account",
    format: "Live webinar · 45 min + Q&A",
    audience: "Operations and growth teams",
    description:
      "Onboarding that converts: fewer fields, clearer steps, verification that arrives when it earns its place — and a human at the end of the journey.",
    points: [
      "Where applicants actually drop off, and what to change first",
      "Designing different journeys for individuals and corporates",
      "Approval queues that move at the speed of the business",
    ],
    image: "/images/workshop-presentation.jpg",
    imageAlt: "Trader celebrating a win at a desk with a laptop and a large market-data wall",
  },
  {
    id: "partner-economics-webinar",
    title: "Partner economics: rebates, attribution and trust",
    format: "Live webinar · 45 min + Q&A",
    audience: "Partner managers and commercial leads",
    description:
      "How rebate programmes stay trustworthy as they grow: attribution rules, a ledger partners can inspect, and payouts on a schedule.",
    points: [
      "Attribution rules for the messy cases, written down",
      "The commission ledger as a shared record, not a monthly claim",
      "Payout rhythms partners can plan around",
    ],
    image: "/images/boardroom-executives.jpg",
    imageAlt: "Trader at a laptop in a dark office with a wall of market data",
  },
  {
    id: "payments-webinar",
    title: "Payments for brokers: routing, retry and reconciliation",
    format: "Live webinar · 45 min + Q&A",
    audience: "Finance and operations leads",
    description:
      "Routing rules, cascading retry and three-way reconciliation — how the money side of a brokerage stops being a daily firefight.",
    points: [
      "Routing by country, currency, amount and client profile",
      "Declines as part of the flow, not the end of it",
      "Exception queues worked daily instead of quarterly",
    ],
    image: "/images/payments-pos.jpg",
    imageAlt: "Hands pointing at a tablet showing a candlestick chart",
  },
  {
    id: "tradeops-webinar",
    title: "TradeOps without the 2 a.m. spreadsheet",
    format: "Live webinar · 45 min + Q&A",
    audience: "Dealing and operations teams",
    description:
      "Server operations with dry-runs, approvals and audit trails: batch changes your future self will not have to apologise for.",
    points: [
      "Dry-run before you change a live server",
      "Four-eyes review for the changes that matter",
      "Audit logs that answer questions instead of raising them",
    ],
    image: "/images/trading-floor-desk.jpg",
    imageAlt: "Hands over a trading desk with laptops showing charts",
  },
];

/* ------------------------------------------------------------------ */
/* Developers                                                          */
/* ------------------------------------------------------------------ */

/**
 * The example base URL used in every code sample. It is deliberately not
 * a real host: "example" is in the name, and every sample is labelled
 * "Example — not a live endpoint" where it appears.
 */
export const EXAMPLE_API_BASE = "https://sandbox-api.example.bridgex.dev";

export interface ApiEndpoint {
  id: string;
  method: "GET" | "POST";
  path: string;
  title: string;
  description: string;
  request: string;
  response: string;
}

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: "list-contacts",
    method: "GET",
    path: "/v1/contacts",
    title: "List contacts",
    description:
      "Search the contact record with pagination and filters. Example response shows the shared client identifier every other resource points back to.",
    request: `curl ${EXAMPLE_API_BASE}/v1/contacts?limit=2 \\
  -H "Authorization: Bearer EXAMPLE_TOKEN"`,
    response: `{
  "data": [
    {
      "id": "ct_example_01",
      "type": "individual",
      "display_name": "Example Contact",
      "verification_state": "verified",
      "created_at": "2026-11-10T09:30:00Z"
    }
  ],
  "pagination": { "limit": 2, "has_more": false }
}`,
  },
  {
    id: "create-application",
    method: "POST",
    path: "/v1/onboarding/applications",
    title: "Create an onboarding application",
    description:
      "Open an application for an individual or corporate applicant. The example shows the minimum fields; verification steps attach to the application afterwards.",
    request: `curl -X POST ${EXAMPLE_API_BASE}/v1/onboarding/applications \\
  -H "Authorization: Bearer EXAMPLE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "applicant_type": "individual",
    "contact_id": "ct_example_01",
    "country": "AE"
  }'`,
    response: `{
  "id": "app_example_01",
  "contact_id": "ct_example_01",
  "status": "awaiting_documents",
  "next_step": "upload_identity_document",
  "created_at": "2026-11-12T14:02:00Z"
}`,
  },
  {
    id: "get-payment",
    method: "GET",
    path: "/v1/payments/{payment_id}",
    title: "Get a payment",
    description:
      "Read one payment with its full status trace — received, matched, allocated — so a deposit is never a mystery to anyone reading it.",
    request: `curl ${EXAMPLE_API_BASE}/v1/payments/pay_example_01 \\
  -H "Authorization: Bearer EXAMPLE_TOKEN"`,
    response: `{
  "id": "pay_example_01",
  "contact_id": "ct_example_01",
  "direction": "deposit",
  "amount": "1000.00",
  "currency": "USD",
  "status": "allocated",
  "status_trace": ["received", "matched", "allocated"]
}`,
  },
  {
    id: "create-webhook",
    method: "POST",
    path: "/v1/webhooks/subscriptions",
    title: "Subscribe to webhooks",
    description:
      "Register a URL to receive signed event deliveries. Delivery, retries and signature verification are part of the planned design, described below.",
    request: `curl -X POST ${EXAMPLE_API_BASE}/v1/webhooks/subscriptions \\
  -H "Authorization: Bearer EXAMPLE_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/hooks/bridgex",
    "events": ["payment.deposit.received"]
  }'`,
    response: `{
  "id": "wh_example_01",
  "url": "https://example.com/hooks/bridgex",
  "events": ["payment.deposit.received"],
  "status": "active",
  "signing_secret_hint": "whsec_example_…"
}`,
  },
];

export interface WebhookEvent {
  event: string;
  description: string;
}

export const WEBHOOK_EVENTS: WebhookEvent[] = [
  {
    event: "onboarding.application.approved",
    description: "An application passed review and the client can be activated.",
  },
  {
    event: "payment.deposit.received",
    description: "A deposit arrived and was matched to a client record.",
  },
  {
    event: "partner.commission.earned",
    description: "A commission row was added to a partner's ledger.",
  },
  {
    event: "tradeops.job.completed",
    description: "A server operation job finished, with its result and audit reference.",
  },
];
