import type { IndustryContent } from "./types";

export const banks: IndustryContent = {
  slug: "banks",
  href: "/industries/banks",
  label: "Banks",
  icon: "banks",
  metaTitle: "Banks",
  metaDescription:
    "BridgeX for banks: bank-branded trading journeys, branch and relationship-manager coordination, onboarding for existing clients, and compliance-ready permissions.",
  eyebrow: "Industries · Banks",
  heroBefore: "Trading journeys your clients ",
  heroAccent: "already trust.",
  heroAfter: "",
  heroSupport:
    "Your clients already trust your brand with their money. BridgeX lets a bank offer trading as a natural extension of that relationship — branded, permissioned, and coordinated between branch, relationship manager and compliance.",
  heroVariant: "diagram",
  heroDiagram: {
    title: "From branch conversation to trading account",
    steps: [
      {
        title: "Branch or RM conversation",
        body: "A client expresses interest — in branch, with their relationship manager, or online.",
      },
      {
        title: "Existing-client onboarding",
        body: "Known details are reused; only the trading-specific checks are new.",
      },
      {
        title: "Compliance review",
        body: "Suitability and permissions are reviewed and approved, with the decision recorded.",
      },
      {
        title: "Trading account opened",
        body: "The account is created and linked to the client's existing banking record.",
      },
      {
        title: "Ongoing service, one record",
        body: "Branch, RM and trading desk all work from the same client record.",
      },
    ],
  },
  secondaryImage: {
    src: "/images/boardroom-meeting.jpg",
    alt: "Business meeting in a modern boardroom",
    width: 1400,
    height: 933,
  },
  challenges: {
    label: "The challenges",
    heading: "Trading should extend the relationship — not split it.",
    copy: "A bank's advantage is trust earned over years. A disconnected trading offer spends that trust; a connected one builds on it.",
    layout: "split",
    items: [
      {
        title: "Trading feels like a separate business",
        body: "A bolt-on platform with its own login and its own brand breaks the relationship the client has with the bank — and doubles the service work.",
      },
      {
        title: "Branch and RM teams work blind",
        body: "The relationship manager doesn't know a client has started trading; the trading desk doesn't know the client's history with the bank.",
      },
      {
        title: "Onboarding asks existing clients to start over",
        body: "A client the bank has known for a decade is asked for the same documents again, because the trading journey can't see the banking record.",
      },
      {
        title: "Compliance needs evidence, not assurances",
        body: "Permissions, approvals and audit trails have to stand up to internal audit — across every channel the client touches.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "Bank-grade structure, client-grade experience.",
    copy: "White-label journeys on the outside; permissions, approvals and audit evidence on the inside.",
    layout: "cards",
    items: [
      {
        href: "/platform/client-experience",
        label: "Client Experience",
        outcome: "Bank-branded journeys",
        detail:
          "White-label client rooms and advisor interfaces that carry your brand, your language and your product rules.",
      },
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Onboarding that reuses what you know",
        detail:
          "Adaptive journeys that recognise existing clients, reuse verified information and route only the genuinely new checks to review.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "One client, every team",
        detail:
          "Contact 360 shared between branch, RM and trading desk, with role- and field-level access so each team sees what it should.",
      },
      {
        href: "/platform/financial-operations",
        label: "Financial Operations",
        outcome: "Service with a paper trail",
        detail:
          "Accounts, cases, approvals and wallets in one view, with maker-checker controls on financially material actions.",
      },
      {
        href: "/platform/analytics",
        label: "Data & Analytics",
        outcome: "Evidence for every review",
        detail:
          "Role-specific dashboards, exception queues and audit-ready reporting for compliance and management.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "The same client, every channel.",
    copy: "Whether the conversation starts at a branch counter or in the app, the record — and the service — is the same.",
    items: [
      {
        title: "An existing client starts trading",
        body: "A ten-year account holder opens a trading account from the bank-branded portal. Known details are pre-filled, only the trading-specific checks are new, and the RM sees the journey progress.",
      },
      {
        title: "A branch query, answered once",
        body: "A client asks at a branch about a trading statement. The branch team sees the same account record as the trading desk — no handoff, no second call.",
      },
      {
        title: "A permission change, approved properly",
        body: "Raising a client's trading permissions routes through compliance approval, with the decision and the reason recorded for audit.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "One record, from branch to trading desk.",
    copy: "The client meets the bank's brand at every touchpoint; behind it, one CRM record carries the relationship through onboarding, service and review.",
    variant: "flow",
    steps: [
      {
        title: "Client channels",
        body: "Branch, relationship manager and digital — one entry point each, one record behind them.",
      },
      {
        title: "Bank-branded experience",
        body: "Client rooms and journeys in your brand, with your product rules and language.",
      },
      {
        title: "CRM & onboarding",
        body: "One client record, existing-client recognition, suitability and approval queues.",
      },
      {
        title: "Operations & approvals",
        body: "Accounts, cases and maker-checker approvals, with an audit trail on every change.",
      },
      {
        title: "Integrations & audit",
        body: "Adapters to internal systems, and reporting your compliance team can rely on.",
      },
    ],
    integrationNote:
      "Banking-system connections — core banking, existing KYC records, internal messaging — are scoped per engagement and delivered as adapters. BridgeX does not claim a live connection to any core banking system until it has been tested with your team.",
    dark: true,
  },
  faqs: [
    {
      question: "Can the trading experience carry our bank's brand?",
      answer:
        "Yes. Client rooms, emails and journeys are white-label: your name, your visual identity, your product language — BridgeX stays invisible to the client.",
    },
    {
      question: "Do existing clients have to be re-onboarded?",
      answer:
        "No. Onboarding journeys can recognise existing clients and reuse verified information, so only the trading-specific steps — suitability, product permissions — are new.",
    },
    {
      question: "How do branch and RM teams stay in the loop?",
      answer:
        "The CRM shares one client record across teams, with field-level permissions controlling who sees what. A relationship manager sees trading activity relevant to the relationship; the trading desk sees the banking context it needs.",
    },
    {
      question: "What controls apply to trading permissions?",
      answer:
        "Permission changes, limit changes and approvals are role-scoped, maker-checker where you require it, and written to an audit trail your compliance team can review.",
    },
    {
      question: "Can BridgeX connect to our core banking system?",
      answer:
        "Connections to core banking and internal systems are delivered as adapters scoped during implementation, and confirmed only after testing with your team. Talk to us about your stack in a demo.",
    },
  ],
  cta: {
    heading: "Offer trading the way your clients expect.",
    copy: "See a bank-branded trading journey — from branch conversation to funded account — in a private demo.",
  },
};
