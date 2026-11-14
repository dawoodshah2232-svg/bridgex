import type { IndustryContent } from "./types";

export const securitiesDerivatives: IndustryContent = {
  slug: "securities-derivatives",
  href: "/industries/securities-derivatives",
  label: "Securities & Derivatives",
  icon: "securities",
  metaTitle: "Securities & Derivatives",
  metaDescription:
    "BridgeX for securities and derivatives firms: institutional and corporate account relationships, multi-entity CRM, controls and payment workflows.",
  eyebrow: "Industries · Securities & Derivatives",
  heroBefore: "Institutional relationships, run ",
  heroAccent: "with control.",
  heroAfter: "",
  heroSupport:
    "Corporate accounts, multi-entity groups and institutional desks don't fit a retail onboarding flow. BridgeX models the relationship the way it actually works — entities, authorised persons, mandates and controls — and keeps payments and service inside it.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/industries-securities.jpg",
    alt: "Close-up of an electronic stock ticker board showing prices and volumes in green and red",
    width: 1600,
    height: 1067,
  },
  secondaryImage: {
    src: "/images/boardroom-conference.jpg",
    alt: "Trader studying a tablet with a hand on his chin",
    width: 1600,
    height: 1068,
  },
  useCaseFlip: true,
  challengeImage: {
    src: "/images/compliance-review.jpg",
    alt: "Overhead view of printed market analytics with a magnifier, notebook and pencils",
    width: 1600,
    height: 1067,
  },
  bandImage: {
    src: "/images/band-skyline-kl.jpg",
    alt: "Two laptops showing trading charts with a hand holding a phone",
    width: 1600,
    height: 1067,
  },
  band: {
    eyebrow: "Structure, represented",
    heading: "The group, the mandate and the money — in one place.",
    copy: "Entities, authorised persons, mandates and controls, with payments and service inside the same record.",
  },
  bandPosition: "after-use-cases",
  challenges: {
    label: "The challenges",
    heading: "Institutional clients are structures, not records.",
    copy: "When the system can't represent the group, the team carries the structure in their heads — and the risk with it.",
    layout: "grid",
    items: [
      {
        title: "One client, many entities",
        body: "A group trades through several legal entities with shared contacts and different mandates. A flat client record can't represent that — so teams keep the real structure in their heads.",
      },
      {
        title: "Authorised persons change; access doesn't",
        body: "Signatories and traders join and leave, but permissions lag behind, and nobody can say who could do what, when.",
      },
      {
        title: "Payments need more than a button",
        body: "Institutional funding moves through approvals, mandates and cut-offs. A retail deposit flow can't carry that — and finance ends up reconciling by hand.",
      },
      {
        title: "Service history is scattered",
        body: "Cases, documents and decisions live across email and chat, so a new relationship manager inherits a relationship with no memory.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "Built for the corporate account, not the retail form.",
    copy: "Multi-entity records, institutional onboarding and controlled money movement — the pieces an institutional desk actually needs.",
    layout: "table",
    items: [
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "Multi-entity relationships",
        detail:
          "Corporate entities, roles per contact, beneficial ownership and a single timeline for the whole group.",
      },
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Institutional onboarding",
        detail:
          "Corporate journeys with document collection, ownership mapping, suitability and approval queues.",
      },
      {
        href: "/solutions/payment-orchestration",
        label: "Payment Orchestration",
        outcome: "Controlled money movement",
        detail:
          "Deposits and withdrawals with approval workflows, status traces and three-way reconciliation.",
      },
      {
        href: "/platform/financial-operations",
        label: "Financial Operations",
        outcome: "Service with a record",
        detail:
          "Accounts, cases and approvals in one view, with audit history on every change.",
      },
      {
        href: "/platform/integrations",
        label: "Integrations",
        outcome: "Connected, not re-keyed",
        detail:
          "Adapters for trading platforms, market data and communications, with event and webhook retry built in.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "The group, the mandate, the money.",
    copy: "Three moments where the structure of the relationship is the work — and where a flat system fails.",
    items: [
      {
        title: "Onboarding a corporate group",
        body: "A group with three trading entities is onboarded once: shared documents collected a single time, ownership mapped per entity, and each entity's mandate recorded before trading begins.",
      },
      {
        title: "A signatory changes",
        body: "When an authorised person leaves, their access is revoked in one place, the change is approved and logged, and the audit trail shows exactly what they could do and until when.",
      },
      {
        title: "A funding request with approvals",
        body: "A large deposit routes through the approval chain your policy requires, is matched to the right entity, and reconciles against the provider and the platform.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "Four layers, shaped around institutional desks.",
    copy: "The institutional portal and the RM workspace sit on the same foundation as the funding approvals and the audit trail — so the relationship, the money and the evidence never drift apart.",
    variant: "layers",
    layers: [
      {
        name: "Experience",
        description: "What clients and RMs see.",
        items: ["Institutional client portal", "RM workspace", "Document exchange"],
      },
      {
        name: "Operations",
        description: "Where your teams work.",
        items: ["Multi-entity CRM", "Onboarding & approvals", "Funding & cases"],
      },
      {
        name: "Integrations",
        description: "How the ecosystem connects.",
        items: ["Trading platforms", "Market data", "Payment providers"],
      },
      {
        name: "Intelligence",
        description: "What management sees.",
        items: ["Exposure reporting", "Exception queues", "Audit evidence"],
      },
    ],
    integrationNote:
      "Trading-platform and market-data connections are adapters scoped per engagement. BridgeX does not claim live connectivity to any exchange or data vendor until the connection has been tested with your team.",
  },
  faqs: [
    {
      question: "How does BridgeX model a corporate group?",
      answer:
        "Contacts, entities and accounts are separate objects with defined relationships — so a group, its entities, its authorised persons and its mandates are all visible in one structure, not flattened into a single record.",
    },
    {
      question: "Can different entities have different permissions?",
      answer:
        "Yes. Permissions are role- and field-level, and can differ by entity, by desk and by person — so a trader at one entity sees only what that entity's mandate allows.",
    },
    {
      question: "How are institutional payments approved?",
      answer:
        "Funding workflows carry approval chains, dual approval where required, and a full status trace from request to settlement — with reconciliation against provider and platform records.",
    },
    {
      question: "What happens when an authorised person leaves?",
      answer:
        "Access is revoked from the CRM record, the change is approved and time-stamped, and the audit trail preserves what that person could do and when — for as long as your retention policy requires.",
    },
    {
      question: "Does BridgeX execute trades?",
      answer:
        "No. BridgeX is operations infrastructure: onboarding, CRM, payments and service around your trading venues. Execution stays on your platforms; BridgeX connects the workflows around it.",
    },
  ],
  cta: {
    heading: "Run institutional relationships with control.",
    copy: "See multi-entity CRM, institutional onboarding and controlled funding in a private demo.",
  },
};
