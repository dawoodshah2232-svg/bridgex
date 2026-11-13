import type { IndustryContent } from "./types";

export const wealthManagement: IndustryContent = {
  slug: "wealth-management",
  href: "/industries/wealth-management",
  label: "Wealth Management",
  icon: "wealth",
  metaTitle: "Wealth Management",
  metaDescription:
    "BridgeX for wealth managers: advisor workspaces, suitability records, pooled strategies, investor statements and introducer fees — in one place.",
  eyebrow: "Industries · Wealth Management",
  heroBefore: "Advisors spend time ",
  heroAccent: "advising,",
  heroAfter: " not administering.",
  heroSupport:
    "Suitability forms, statements, introducer fees and pooled strategies — the work around the advice is what eats the week. BridgeX gives advisors one workspace where the client, the mandate and the paperwork all live together.",
  heroVariant: "photo-light",
  image: {
    src: "/images/industries-wealth.jpg",
    alt: "An advisor holding a pen over documents across a desk from a client with hands clasped",
    width: 1600,
    height: 1067,
  },
  challenges: {
    label: "The challenges",
    heading: "The advice is the easy part. The admin isn't.",
    copy: "Every hour an advisor spends assembling statements or hunting for a suitability form is an hour not spent with a client.",
    layout: "numbered",
    items: [
      {
        title: "Suitability lives in a filing cabinet",
        body: "Risk profiles and suitability assessments are captured on paper or in a form nobody can search — so reviews start from scratch every time.",
      },
      {
        title: "Statements take a week to produce",
        body: "Investor statements are assembled by hand from three systems, checked twice, and still go out late.",
      },
      {
        title: "Pooled strategies mean pooled admin",
        body: "Subscriptions, allocations and reporting for pooled strategies multiply the paperwork with every new investor.",
      },
      {
        title: "Introducer fees are a monthly argument",
        body: "Referrers are paid late or wrong because nobody agrees on the numbers — and the spreadsheet that decides is one person's private file.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "One workspace for the whole advisory business.",
    copy: "The client record, the suitability history, the strategies and the fees — connected, so the advisor's week belongs to clients again.",
    layout: "cards",
    items: [
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "The advisor workspace",
        detail:
          "Client 360 with mandates, suitability flags, activities and documents — everything an advisor needs before the meeting.",
      },
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Suitability, captured once",
        detail:
          "Adaptive onboarding with suitability assessments stored against the client record, ready for review.",
      },
      {
        href: "/solutions/pamm-copy-trading",
        label: "PAMM & Copy Trading",
        outcome: "Pooled strategies, structured",
        detail:
          "Strategy discovery, subscriptions, allocations and fee logic for pooled investment approaches.",
      },
      {
        href: "/solutions/ib-incentives",
        label: "IB & Incentive Management",
        outcome: "Introducer fees, agreed",
        detail:
          "Referral tracking, fee rules and a ledger both sides can see — so introducers are paid on time, on agreed numbers.",
      },
      {
        href: "/platform/analytics",
        label: "Data & Analytics",
        outcome: "Reporting without the scramble",
        detail:
          "Role-specific views and exports that make statement and review preparation a routine, not a project.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "A week in the advisor's workspace.",
    copy: "Reviews prepared in minutes, subscriptions handled in one flow, and introducers paid without the argument.",
    items: [
      {
        title: "A suitability review in minutes",
        body: "Before a review meeting, the advisor opens the client record: risk profile, last assessment, holdings and notes — and the updated assessment is captured in the same place.",
      },
      {
        title: "An investor joins a pooled strategy",
        body: "Subscription, allocation and fee terms are handled in one flow, and the investor sees their position and statements in the portal.",
      },
      {
        title: "An introducer is paid without the argument",
        body: "Fees accrue on the ledger as the rules define, the introducer sees the same statement as finance, and the payout is requested and settled in the portal.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "From first meeting to annual review — one record.",
    copy: "The advisor's workspace, the client's portal and the fee ledger all read from the same client record, so nothing is re-keyed and nothing is lost between meetings.",
    variant: "flow",
    steps: [
      {
        title: "Advisor workspace",
        body: "Client 360, mandates, activities and documents — the day starts here.",
      },
      {
        title: "Client record & suitability",
        body: "Risk profile and assessments stored as structured data, ready for review.",
      },
      {
        title: "Strategies & subscriptions",
        body: "Pooled strategies with subscriptions, allocations and fee logic.",
      },
      {
        title: "Statements & fees",
        body: "Investor statements in the portal; introducer fees on a shared ledger.",
      },
      {
        title: "Reporting & audit",
        body: "Review preparation, exports and an audit trail on every change.",
      },
    ],
    integrationNote:
      "Custody, market-data and portfolio-system connections are adapters scoped per engagement. BridgeX does not hold client assets and does not claim live connectivity to any custodian until tested.",
    dark: true,
  },
  faqs: [
    {
      question: "Does BridgeX give investment advice?",
      answer:
        "No. BridgeX is operations infrastructure for advisors and managers. Suitability assessments, mandates and records are tools for your licensed advisors — the advice itself is always yours.",
    },
    {
      question: "How are suitability assessments stored?",
      answer:
        "As structured data on the client record — risk profile, answers, date and advisor — so reviews can compare against the last assessment instead of starting over.",
    },
    {
      question: "Can investors see their own statements?",
      answer:
        "Yes. The investor portal shows positions, statements and documents, branded for your firm — so routine “where is my statement” calls fall away.",
    },
    {
      question: "How do pooled strategies work in BridgeX?",
      answer:
        "Strategies are set up with subscription terms and fee logic; investors subscribe, allocations are tracked, and fees follow the rules you define — with an audit trail on every step.",
    },
    {
      question: "Who can see a client's record?",
      answer:
        "Only the roles you grant. Advisors see their own book; managers see their team; compliance sees what it needs for review — with field-level permissions throughout.",
    },
  ],
  cta: {
    heading: "Give advisors their week back.",
    copy: "See the advisor workspace, suitability records and investor statements in a private demo.",
  },
};
