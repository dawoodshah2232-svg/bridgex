import type { IndustryContent } from "./types";

export const multiAssetBrokers: IndustryContent = {
  slug: "multi-asset-brokers",
  href: "/industries/multi-asset-brokers",
  label: "Multi-Asset Brokers",
  icon: "brokers",
  metaTitle: "Multi-Asset Brokers",
  metaDescription:
    "BridgeX for multi-asset brokers: trader lifecycle, MT4/MT5 operations, client area, partner commissions, deposits and risk — in one connected view.",
  eyebrow: "Industries · Multi-Asset Brokers",
  heroBefore: "Run the whole ",
  heroAccent: "trader lifecycle",
  heroAfter: " from one desk.",
  heroSupport:
    "Leads, onboarding, trading accounts, deposits, partners and risk — a multi-asset brokerage runs on a dozen connected workflows. BridgeX keeps them in one operating view, so no trader falls between systems.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/industries-brokers.jpg",
    alt: "Close-up of a trading terminal showing a GBP/USD candlestick chart with bid and ask prices",
    width: 1600,
    height: 1200,
  },
  heroBridgeLine: true,
  secondaryImage: {
    src: "/images/trading-floor-desk.jpg",
    alt: "Trader analysing charts across multiple monitors",
    width: 1920,
    height: 1282,
  },
  useCaseFlip: true,
  challengeImage: {
    src: "/images/boardroom-executives.jpg",
    alt: "Senior executives in discussion around a boardroom table",
    width: 1400,
    height: 1280,
  },
  bandImage: {
    src: "/images/hero-skyline-nyc.jpg",
    alt: "New York City skyline with One World Trade Center at dusk",
    width: 1920,
    height: 1080,
  },
  band: {
    eyebrow: "One operating view",
    heading: "No trader falls between systems.",
    copy: "Leads, onboarding, trading accounts, deposits, partners and risk — connected workflows, one desk, one record.",
  },
  bandPosition: "after-modules",
  challenges: {
    label: "The challenges",
    heading: "A brokerage is only as fast as its slowest handoff.",
    copy: "Every gap between systems is a trader waiting, a deposit unreconciled, or a partner asking where their money is.",
    layout: "numbered",
    items: [
      {
        title: "Leads cool while onboarding drags",
        body: "A trader who waits days for account approval trades somewhere else. Application, documents, verification and account creation have to move as one journey — not four queues in four tools.",
      },
      {
        title: "Deposits and withdrawals live in spreadsheets",
        body: "Funding requests arrive by chat and email, approvals happen in someone's head, and reconciliation becomes a weekly forensic exercise.",
      },
      {
        title: "Partners can't see what they've earned",
        body: "IBs chase support for commission statements, disputes drag on, and the partners who bring your best traders feel like an afterthought.",
      },
      {
        title: "Risk operations depend on one person",
        body: "Leverage changes, group moves and holiday schedules get done from memory on the trading server — with no dry-run, no approval and no audit trail.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "The modules a brokerage actually runs on.",
    copy: "Each capability works alone; together they carry a trader from first click to funded account — and a partner from referral to payout.",
    layout: "rows",
    items: [
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Faster first deposit",
        detail:
          "Adaptive journeys for individual and corporate traders, document upload, verification and approval queues — ending in trading-account creation.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "One trader record",
        detail:
          "Contact 360, pipelines, desk routing, cases and documents, so sales, support and compliance work from the same record.",
      },
      {
        href: "/solutions/payment-orchestration",
        label: "Payment Orchestration",
        outcome: "Funding that reconciles",
        detail:
          "Provider-agnostic deposit and withdrawal routing, approval queues and PSP-to-CRM-to-platform reconciliation.",
      },
      {
        href: "/solutions/ib-incentives",
        label: "IB & Incentive Management",
        outcome: "Partners who stay",
        detail:
          "Referral links, attribution, multi-tier rebates, a commission ledger and partner statements with a source-to-payout audit trail.",
      },
      {
        href: "/solutions/tradeops",
        label: "TradeOps Control Center",
        outcome: "Server changes with evidence",
        detail:
          "Account, group and symbol operations with dry-run, four-eyes approval and downloadable audit logs.",
      },
      {
        href: "/solutions/trading-contests",
        label: "Trading Contest Management",
        outcome: "Engagement that runs itself",
        detail:
          "Contests by profit, volume or streak, with live rankings, fairness review and approved prize payouts.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "Three days in a connected brokerage.",
    copy: "The same record, the same queues, the same ledger — from the trader's first click to the partner's payout.",
    items: [
      {
        title: "From first click to first trade",
        body: "A lead from a partner link is routed to the right desk, onboarded through an adaptive journey, and handed a trading account — with every step visible in the CRM timeline.",
      },
      {
        title: "A deposit that doesn't need chasing",
        body: "A trader deposits, the payment is routed and matched, finance clears the withdrawal queue in the morning, and the ledger reconciles without a spreadsheet.",
      },
      {
        title: "A partner payout without the dispute",
        body: "Commissions accrue on the ledger as trades close, the partner sees the same statement your finance team sees, and payouts are requested and settled in the portal.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "Four layers, shaped around a brokerage.",
    copy: "The platform's four layers stay the same; what changes is what runs on them. For a broker, that means the client area, the funding queue and the partner ledger sit on one foundation.",
    variant: "layers",
    layers: [
      {
        name: "Experience",
        description: "What traders and partners see.",
        items: ["Branded client area", "Partner portal", "Mobile-ready journeys"],
      },
      {
        name: "Operations",
        description: "Where your teams work.",
        items: ["CRM & onboarding", "Funding & approvals", "Incentives & TradeOps"],
      },
      {
        name: "Integrations",
        description: "How the ecosystem connects.",
        items: ["Trading-platform adapters", "Payment providers", "KYC & communications"],
      },
      {
        name: "Intelligence",
        description: "What management sees.",
        items: ["Funnels & exceptions", "Payment monitoring", "Audit-ready reporting"],
      },
    ],
    integrationNote:
      "Trading-platform connections are delivered as adapters scoped during implementation — MT4/MT5 operations are designed around authorised Manager API access and broker approval. Provider availability is confirmed per engagement; BridgeX does not claim a live connection that has not been tested.",
  },
  faqs: [
    {
      question: "Does BridgeX replace our trading platform?",
      answer:
        "No. BridgeX sits alongside your trading servers — MT4/MT5 or others — and connects onboarding, CRM, payments and partners around them. Trade execution stays on your platform; the operations around it run in BridgeX.",
    },
    {
      question: "Can we keep our existing payment providers?",
      answer:
        "Yes. Payment orchestration is provider-agnostic by design: existing providers are connected as routing options, and new ones can be added without rebuilding the deposit and withdrawal journeys.",
    },
    {
      question: "How do partner commissions stay accurate?",
      answer:
        "Commissions are calculated from the trade feed into an earn–adjust–approve–settle ledger, with the same statement visible to the partner and your finance team. Adjustments and clawbacks are recorded, not edited away.",
    },
    {
      question: "Who can change leverage or move accounts?",
      answer:
        "Only roles you grant. TradeOps changes go through dry-run and four-eyes approval, and every change is written to a downloadable audit log.",
    },
    {
      question: "What does implementation look like?",
      answer:
        "Discover, design, build, validate, deploy — with your team. Most brokers start with onboarding and CRM, then connect payments and partners. See the Implementation page for the method.",
    },
  ],
  cta: {
    heading: "Run your brokerage from one desk.",
    copy: "See onboarding, funding, partners and TradeOps working together — in a private demo on your own workflows.",
  },
};
