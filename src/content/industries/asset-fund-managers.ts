import type { IndustryContent } from "./types";

export const assetFundManagers: IndustryContent = {
  slug: "asset-fund-managers",
  href: "/industries/asset-fund-managers",
  label: "Asset & Fund Managers",
  icon: "assetFund",
  metaTitle: "Asset & Fund Managers",
  metaDescription:
    "BridgeX for asset and fund managers: subscription workflows, investor portals, capital calls and payouts, and distributor trail fees — one system of record.",
  eyebrow: "Industries · Asset & Fund Managers",
  heroBefore: "Subscriptions, statements and trail fees — ",
  heroAccent: "without the spreadsheets.",
  heroAfter: "",
  heroSupport:
    "Raising and servicing a fund means subscription workflows, investor portals, capital calls, payouts and distributor fees — all of it auditable. BridgeX gives managers one system of record for the investor relationship.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/boardroom-executives.jpg",
    alt: "Trader at a laptop in a dark office with a wall of market data",
    width: 1920,
    height: 1280,
    objectPosition: "40% 50%",
  },
  secondaryImage: {
    src: "/images/signing-contract.jpg",
    alt: "Person signing documents with a pen",
    width: 1600,
    height: 1068,
  },
  useCaseFlip: true,
  challengeImage: {
    src: "/images/industries-asset-fund.jpg",
    alt: "Overhead view of colleagues reviewing printed charts and reports around a wooden table",
    width: 1600,
    height: 900,
  },
  bandImage: {
    src: "/images/band-skyline-hongkong.jpg",
    alt: "Hand gesturing at a candlestick chart on a dark trading monitor",
    width: 1600,
    height: 900,
  },
  band: {
    eyebrow: "One system of record",
    heading: "Every investor step reads from the same record.",
    copy: "From the first subscription form to the distributor's trail-fee statement — subscriptions, calls, payouts and fees, all of it auditable.",
  },
  bandPosition: "after-challenges",
  challenges: {
    label: "The challenges",
    heading: "The fund grows. The paperwork grows faster.",
    copy: "Every new investor multiplies the subscriptions, statements, calls and fees — unless one system carries them all.",
    layout: "split",
    items: [
      {
        title: "Subscriptions arrive as email attachments",
        body: "Subscription forms, KYC documents and signatures land in inboxes, and nobody can say which investor is at which stage.",
      },
      {
        title: "Investors call for what the portal should show",
        body: "Positions, statements and documents are requested by email because there is no single place an investor can see them.",
      },
      {
        title: "Capital calls and payouts are manual",
        body: "Calls and distributions are coordinated across spreadsheets and banking portals, with reconciliation afterwards — if it happens at all.",
      },
      {
        title: "Distributor trail fees nobody can reconcile",
        body: "Trail fees are calculated in a spreadsheet, disputed by email, and paid late — because the underlying investor data lives in three places.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "The investor relationship, end to end.",
    copy: "From the first subscription form to the distributor's trail-fee statement, every step reads from the same investor record.",
    layout: "rows",
    items: [
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Subscriptions that complete",
        detail:
          "Investor onboarding with document collection, verification and approval queues — individual and corporate.",
      },
      {
        href: "/platform/client-experience",
        label: "Client Experience",
        outcome: "An investor portal worth logging into",
        detail:
          "Branded portal for positions, statements, documents and notifications.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "One investor record",
        detail:
          "Investors, distributors and their relationships in one place, with activities, documents and audit history.",
      },
      {
        href: "/solutions/payment-orchestration",
        label: "Payment Orchestration",
        outcome: "Calls and payouts, traced",
        detail:
          "Capital call and distribution workflows with approval and reconciliation against provider records.",
      },
      {
        href: "/solutions/ib-incentives",
        label: "IB & Incentive Management",
        outcome: "Trail fees, agreed and on time",
        detail:
          "Distributor hierarchies, fee rules and a ledger both sides can see.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "Raise, service, distribute — without the chase.",
    copy: "Subscriptions complete online, calls are tracked, and distributors see the same numbers as finance.",
    items: [
      {
        title: "An investor subscribes without the paper chase",
        body: "The investor completes onboarding online, uploads documents once, and the subscription is approved in a queue — with the whole journey visible to your team.",
      },
      {
        title: "A capital call, issued and tracked",
        body: "A call is issued to the investor list, responses and payments are tracked against it, and the position updates in the investor portal.",
      },
      {
        title: "A distributor checks their trail fees",
        body: "The distributor opens their portal, sees the same fee statement finance sees, and requests payout — no email chain, no dispute.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "Four layers, shaped around a fund.",
    copy: "Investors and distributors each get a portal; your team gets one operations view; and the fee ledger, the calls and the audit trail all share the same foundation.",
    variant: "layers",
    layers: [
      {
        name: "Experience",
        description: "What investors and distributors see.",
        items: ["Investor portal", "Distributor portal", "Notifications & documents"],
      },
      {
        name: "Operations",
        description: "Where your teams work.",
        items: ["Subscriptions & CRM", "Calls & payouts", "Fee ledger"],
      },
      {
        name: "Integrations",
        description: "How the ecosystem connects.",
        items: ["Banking", "Fund administration", "KYC providers"],
      },
      {
        name: "Intelligence",
        description: "What management sees.",
        items: ["Investor reporting", "Fee reconciliation", "Audit evidence"],
      },
    ],
    integrationNote:
      "Fund-administration, banking and custody connections are adapters scoped per engagement. BridgeX does not hold investor assets; money movement runs through your providers, with BridgeX coordinating the workflow and the record.",
  },
  faqs: [
    {
      question: "Does BridgeX replace our fund administrator?",
      answer:
        "No. BridgeX is the investor-facing operations layer — subscriptions, portals, communications and fees. Fund accounting and NAV stay with your administrator; BridgeX connects to their data where an adapter is in place.",
    },
    {
      question: "Can investors subscribe online?",
      answer:
        "Yes. Subscription journeys handle individual and corporate investors, with document upload, verification and approval queues — and the subscription record feeds straight into the CRM.",
    },
    {
      question: "How are capital calls handled?",
      answer:
        "Calls are issued to investor groups, tracked through response and payment, and reconciled against provider records — with the investor's position updated in the portal.",
    },
    {
      question: "What about trail fees for distributors?",
      answer:
        "Distributor hierarchies, fee rules and a shared ledger mean trail fees are calculated from the same investor data finance uses — and distributors see the same statement.",
    },
    {
      question: "Is investor data separated by fund?",
      answer:
        "Yes. Tenant and entity separation keeps each fund's investor data distinct, with role-based access so teams see only the funds they work on.",
    },
  ],
  cta: {
    heading: "Run the investor relationship, not the paperwork.",
    copy: "See subscriptions, the investor portal and distributor fees in a private demo.",
  },
};
