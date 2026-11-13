import type { IndustryContent } from "./types";

export const exchanges: IndustryContent = {
  slug: "exchanges",
  href: "/industries/exchanges",
  label: "Exchanges & Trading Venues",
  icon: "exchanges",
  metaTitle: "Exchanges & Trading Venues",
  metaDescription:
    "BridgeX for exchanges and trading venues: membership onboarding, participant service, fee schedules, and registration and conformance workflows.",
  eyebrow: "Industries · Exchanges & Trading Venues",
  heroBefore: "Membership, conformance and fees — ",
  heroAccent: "one participant record.",
  heroAfter: "",
  heroSupport:
    "A venue's participants need onboarding, service, fee schedules and conformance tracking — and your team needs one record per participant, not a folder of PDFs. BridgeX runs the participant lifecycle around your matching engine.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/industries-exchanges.jpg",
    alt: "The neoclassical facade of the New York Stock Exchange, with tall stone columns and American flags",
    width: 1600,
    height: 1067,
  },
  challenges: {
    label: "The challenges",
    heading: "The market is fast. The participant paperwork isn't.",
    copy: "Participants judge a venue by how easy it is to join, stay compliant and get answers — not by the matching engine alone.",
    layout: "grid",
    items: [
      {
        title: "Membership onboarding takes weeks",
        body: "Applications, documents and approvals move by email, and neither side can see where the application stands.",
      },
      {
        title: "Conformance is a folder of PDFs",
        body: "Connectivity tests, certifications and sign-offs are filed as documents — with no workflow to chase what's missing or expired.",
      },
      {
        title: "Fee schedules live in a spreadsheet",
        body: "Participant fees, tiers and billing periods are calculated by hand, and disputes take weeks to resolve.",
      },
      {
        title: "Participant service has no memory",
        body: "Support requests, incidents and follow-ups are scattered, so every conversation starts from zero.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "The venue's front office, organised.",
    copy: "Membership, conformance, fees and service — one participant record, one set of queues, one audit trail.",
    layout: "rows",
    items: [
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Membership applications that move",
        detail:
          "Structured applications with document collection, verification and approval queues — visible to both sides.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "One participant record",
        detail:
          "Participants, contacts, cases and documents in one timeline, shared across your teams.",
      },
      {
        href: "/platform/no-code-studio",
        label: "No-Code Studio",
        outcome: "Workflows you can change",
        detail:
          "Configure registration and conformance workflows — objects, forms, assessments and approvals — without code.",
      },
      {
        href: "/platform/financial-operations",
        label: "Financial Operations",
        outcome: "Fees and service, together",
        detail:
          "Fee schedules, billing periods, cases and approvals in one operational view.",
      },
      {
        href: "/platform/analytics",
        label: "Data & Analytics",
        outcome: "A venue that can see itself",
        detail:
          "Participant funnels, exception queues and audit-ready reporting for operations and management.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "Join, certify, trade, settle — visibly.",
    copy: "Participants see their own status; your team sees every participant. Nothing hides in an inbox.",
    items: [
      {
        title: "A new member is onboarded",
        body: "The applicant completes the membership journey online, uploads documents, and your team approves each stage in a queue — with the applicant seeing progress throughout.",
      },
      {
        title: "A conformance check is renewed",
        body: "Connectivity certification is tracked as a workflow with expiry dates, so renewals are chased before they lapse — not discovered after.",
      },
      {
        title: "A fee dispute is settled from the record",
        body: "The fee schedule, the billing period and the underlying activity are all on the participant record, so the dispute is answered from evidence.",
      },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "The participant lifecycle, around your venue systems.",
    copy: "BridgeX doesn't touch the matching engine. It runs everything around it — application, conformance, fees, service — and connects to your venue systems by adapter.",
    variant: "flow",
    steps: [
      {
        title: "Participant application",
        body: "Structured membership journeys with documents, verification and approval queues.",
      },
      {
        title: "Membership & conformance",
        body: "Registration and conformance workflows with states, owners and expiry dates.",
      },
      {
        title: "Fee schedules & billing",
        body: "Fee rules, tiers and billing periods on the participant record.",
      },
      {
        title: "Participant service",
        body: "Cases, incidents and follow-ups in one timeline per participant.",
      },
      {
        title: "Reporting & audit",
        body: "Participant funnels, exceptions and audit-ready reporting.",
      },
    ],
    integrationNote:
      "Matching-engine and market-data connections are outside BridgeX: the platform runs the participant lifecycle around your venue systems, connected by adapters scoped per engagement. BridgeX does not operate a matching engine.",
  },
  faqs: [
    {
      question: "Does BridgeX run the matching engine?",
      answer:
        "No. BridgeX is the participant-facing operations layer — membership, conformance, fees and service. Matching and market data stay on your venue systems; BridgeX connects around them.",
    },
    {
      question: "How are conformance workflows configured?",
      answer:
        "With No-Code Studio: objects, forms, assessments and approval steps can be configured for your registration and conformance processes, and changed as your rules evolve.",
    },
    {
      question: "Can participants see their own status?",
      answer:
        "Yes. The participant portal shows application progress, conformance status, fee schedules and service cases — branded for your venue.",
    },
    {
      question: "How do fee schedules work?",
      answer:
        "Fee rules, tiers and billing periods are configured in financial operations, applied to participant activity, and visible on the participant record — so billing and disputes both start from the same numbers.",
    },
    {
      question: "What happens when a certification expires?",
      answer:
        "Conformance items carry expiry dates and workflow states, so renewals are queued and chased automatically — and expired items are flagged to your team.",
    },
  ],
  cta: {
    heading: "Run your venue's participant lifecycle in one place.",
    copy: "See membership onboarding, conformance workflows and fee schedules in a private demo.",
  },
};
