import type { IndustryContent } from "./types";

export const digitalAssets: IndustryContent = {
  slug: "digital-assets",
  href: "/industries/digital-assets",
  label: "Digital Asset Firms",
  icon: "digitalAssets",
  metaTitle: "Digital Asset Firms",
  metaDescription:
    "BridgeX for digital asset firms: jurisdiction-aware KYC, fiat on/off-ramp routing, CRM support, ambassador referrals and multi-jurisdiction review.",
  eyebrow: "Industries · Digital Asset Firms",
  heroBefore: "KYC, ramps and referrals — across ",
  heroAccent: "every jurisdiction",
  heroAfter: " you serve.",
  heroSupport:
    "A digital asset business serves clients in many jurisdictions, each with its own rules — and every one of them expects onboarding in minutes, not days. BridgeX keeps the client record, the reviews and the referrals in one place, jurisdiction-aware from the start.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/industries-digital-assets.jpg",
    alt: "Physical Bitcoin, Ethereum and Ripple coins arranged on a dark surface",
    width: 1600,
    height: 987,
  },
  secondaryImage: {
    src: "/images/industries-digital-assets-app.jpg",
    alt: "Hands holding a phone showing a crypto portfolio in front of a laptop with candlestick charts",
    width: 1600,
    height: 2400,
  },
  heroBridgeLine: true,
  useCaseFlip: true,
  challengeImage: {
    src: "/images/abstract-mirrored-tower.jpg",
    alt: "Modern tower with a mirrored glass facade",
    width: 1200,
    height: 1800,
  },
  bandImage: {
    src: "/images/band-skyline-singapore.jpg",
    alt: "Singapore skyline with illuminated skyscrapers at dusk",
    width: 1920,
    height: 1013,
  },
  band: {
    eyebrow: "Jurisdiction-aware",
    heading: "Many jurisdictions, one client record.",
    copy: "Country rules shape onboarding, regional routing shapes ramps, and one record carries the client through reviews, referrals and reporting.",
  },
  bandPosition: "after-modules",
  challenges: {
    label: "The challenges",
    heading: "Many jurisdictions, one client record.",
    copy: "Rules differ by country, ramps differ by region, and referrals outgrow the spreadsheet — unless the system was built jurisdiction-aware.",
    layout: "split",
    items: [
      {
        title: "One onboarding flow can't fit every jurisdiction",
        body: "Rules differ by country and by client type. A single rigid flow either blocks good clients or lets the wrong ones through.",
      },
      {
        title: "Fiat on- and off-ramps are a patchwork",
        body: "Deposits and withdrawals run through different providers by region, and support can't answer “where is my money” without checking three systems.",
      },
      {
        title: "Reviews pile up in a queue nobody owns",
        body: "Enhanced reviews, transaction-monitoring flags and document expiries land in a shared inbox — and the oldest cases are the ones nobody sees.",
      },
      {
        title: "Referrals grow faster than the records",
        body: "Ambassador and affiliate programmes bring in clients faster than the CRM can attribute them, and payouts become a monthly reconstruction.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "Built jurisdiction-aware from the start.",
    copy: "Country rules on onboarding, regional routing on ramps, and one client record behind both.",
    layout: "table",
    items: [
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Jurisdiction-aware onboarding",
        detail:
          "Adaptive journeys with country and product rules, verification adapters and approval queues.",
      },
      {
        href: "/solutions/payment-orchestration",
        label: "Payment Orchestration",
        outcome: "Ramps, routed and traced",
        detail:
          "Fiat on/off-ramp routing by country, currency and provider — with status traces and reconciliation.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "One client, every review",
        detail:
          "Contact 360 with KYC flags, cases, documents and audit history — across every jurisdiction.",
      },
      {
        href: "/solutions/ib-incentives",
        label: "IB & Incentive Management",
        outcome: "Ambassadors, attributed",
        detail:
          "Referral links, multi-tier rewards, ledgers and payout requests for ambassador programmes.",
      },
      {
        href: "/platform/analytics",
        label: "Data & Analytics",
        outcome: "See the queue before it grows",
        detail:
          "Funnel, exception and review-queue dashboards, with role-specific views for compliance and support.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "Onboard, fund, refer — in any market.",
    copy: "A client from a new market, a deposit across regions, an ambassador paid on time — the same record behind all three.",
    items: [
      {
        title: "A client onboards from a new market",
        body: "The journey adapts to the client's country: the right documents, the right checks, the right review queue — and the compliance team sees the case with its full context.",
      },
      {
        title: "A deposit is traced end to end",
        body: "A fiat deposit is routed to the right provider for the client's region, its status is traced in the CRM, and support answers “where is my money” from the record.",
      },
      {
        title: "An ambassador is paid on time",
        body: "Referrals are attributed at signup, rewards accrue on the ledger, and the ambassador requests payout from their own dashboard.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "One flow, every jurisdiction.",
    copy: "Country rules shape onboarding, regional routing shapes ramps, and one CRM record carries the client through reviews, referrals and reporting.",
    variant: "flow",
    steps: [
      {
        title: "Onboarding · jurisdiction rules",
        body: "Adaptive journeys with country and product rules, verification and approval queues.",
      },
      {
        title: "CRM & reviews",
        body: "One client record with KYC flags, review queues and audit history.",
      },
      {
        title: "Fiat ramps & reconciliation",
        body: "Regional ramp routing with status traces and provider reconciliation.",
      },
      {
        title: "Referrals & rewards",
        body: "Ambassador links, attribution, ledgers and payout requests.",
      },
      {
        title: "Reporting & audit",
        body: "Funnel, exception and review-queue reporting by jurisdiction.",
      },
    ],
    integrationNote:
      "KYC providers, fiat ramp providers and chain-data services are connected as adapters scoped per engagement. BridgeX does not custody digital assets and does not claim a live provider connection until it has been tested with your team.",
  },
  faqs: [
    {
      question: "Does BridgeX custody digital assets?",
      answer:
        "No. BridgeX is client operations infrastructure — onboarding, CRM, payments and referrals. Custody stays with your custodians; BridgeX coordinates the workflows and the record around them.",
    },
    {
      question: "How does onboarding adapt by jurisdiction?",
      answer:
        "Journeys carry country and product rules: different documents, checks and review queues by client location and type — configured in No-Code Studio and changeable as rules evolve.",
    },
    {
      question: "How do fiat on/off ramps connect?",
      answer:
        "Ramp providers are connected as payment routing options, with routing by country, currency and client profile, and a status trace on every transaction. Providers are confirmed per engagement.",
    },
    {
      question: "What does the compliance team see?",
      answer:
        "Review queues with full case context, KYC flags on the client record, exception dashboards and an audit trail — with role-limited access throughout.",
    },
    {
      question: "Can ambassador programmes run in BridgeX?",
      answer:
        "Yes. The incentive system supports referral links, multi-tier rewards, ledgers and payout requests — the same engine brokers use for IB programmes.",
    },
  ],
  cta: {
    heading: "Serve every jurisdiction from one record.",
    copy: "See jurisdiction-aware onboarding, ramp routing and ambassador rewards in a private demo.",
  },
};
