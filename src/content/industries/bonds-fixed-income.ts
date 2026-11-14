import type { IndustryContent } from "./types";

export const bondsFixedIncome: IndustryContent = {
  slug: "bonds-fixed-income",
  href: "/industries/bonds-fixed-income",
  label: "Bonds & Fixed Income",
  icon: "bonds",
  metaTitle: "Bonds & Fixed Income",
  metaDescription:
    "BridgeX for bonds and fixed income: onboarding and suitability, order and allocation visibility, and coupon and corporate-action service flows.",
  eyebrow: "Industries · Bonds & Fixed Income",
  heroBefore: "Every order, allocation and coupon — ",
  heroAccent: "visible.",
  heroAfter: "",
  heroSupport:
    "Fixed income runs on process: onboarding, suitability, orders, allocations, coupons and corporate actions. BridgeX makes each step visible to the client and the desk — so service stops being a phone call to find out what happened.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/banking-columns.jpg",
    alt: "Ornate Corinthian column capital on a classical bank building",
    width: 1200,
    height: 1010,
  },
  heroDiagram: {
    title: "From suitability to coupon payment",
    steps: [
      {
        title: "Onboarding & suitability",
        body: "Identity and suitability captured together, stored on the client record.",
      },
      {
        title: "Order & allocation",
        body: "Orders recorded with status; allocations confirmed in writing.",
      },
      {
        title: "Confirmation & settlement view",
        body: "The client sees confirmation and documents in the portal.",
      },
      {
        title: "Coupons & corporate actions",
        body: "Schedules tracked as service workflows, with clients notified.",
      },
      {
        title: "Ongoing service",
        body: "Cases, reviews and reporting — all on the same record.",
      },
    ],
  },
  secondaryImage: {
    src: "/images/compliance-desk.jpg",
    alt: "Printed stock reports with candlestick charts, a magnifier and a calculator",
    width: 1600,
    height: 1067,
  },
  useCaseFlip: true,
  challengeImage: {
    src: "/images/signing-agreement.jpg",
    alt: "Businessman handing a pen to sign an agreement",
    width: 1600,
    height: 1067,
  },
  bandImage: {
    src: "/images/skyline-sunset.jpg",
    alt: "Trader on the phone at a desk with two laptops showing charts, seen from behind",
    width: 1600,
    height: 1067,
  },
  band: {
    eyebrow: "Visibility is the service",
    heading: "The process, visible at every step.",
    copy: "Onboarding, suitability, orders, allocations, coupons and corporate actions — each step a record the client and the desk can both see.",
  },
  bandPosition: "after-use-cases",
  bandHeight: "sm",
  challenges: {
    label: "The challenges",
    heading: "Fixed income is a process business. Clients deserve to see the process.",
    copy: "When the client can't see what happened to their order, the desk spends its day explaining — instead of serving.",
    layout: "numbered",
    items: [
      {
        title: "Clients can't see their own orders",
        body: "An order is placed, then silence. The client calls to ask where it is — and the desk has to ask operations.",
      },
      {
        title: "Allocations are explained by phone",
        body: "Partial fills and allocation decisions are communicated one call at a time, with no written record the client can revisit.",
      },
      {
        title: "Coupons and corporate actions surprise everyone",
        body: "Payments and actions are tracked in spreadsheets, so clients hear about them late — or not at all.",
      },
      {
        title: "Suitability is a form, not a record",
        body: "Fixed-income suitability is captured once and filed away, instead of living on the client record where the next order can check it.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "Visibility at every step of the process.",
    copy: "Onboarding, order status, allocations, coupons — each step is a record the client and the desk can both see.",
    layout: "table",
    items: [
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "Onboarding with suitability",
        detail:
          "Journeys that capture suitability alongside identity — stored on the client record, not in a drawer.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "The client record, complete",
        detail:
          "Holdings context, mandates, activities and documents — everything the desk needs before the call.",
      },
      {
        href: "/platform/client-experience",
        label: "Client Experience",
        outcome: "Visibility the client can see",
        detail:
          "A branded portal showing order status, allocations, coupons and documents.",
      },
      {
        href: "/platform/financial-operations",
        label: "Financial Operations",
        outcome: "Service with a paper trail",
        detail:
          "Cases, approvals and service workflows for allocations, coupons and corporate actions.",
      },
      {
        href: "/platform/analytics",
        label: "Data & Analytics",
        outcome: "Reporting that answers questions",
        detail:
          "Dashboards and exports for allocations, upcoming coupons and service exceptions.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "The order, the coupon, the action.",
    copy: "Three moments where visibility is the service — and where a phone call used to be.",
    items: [
      {
        title: "A client places an order and watches it",
        body: "The order is recorded, the client sees its status in the portal, and the allocation is confirmed in writing — with the full history on the record.",
      },
      {
        title: "A coupon is paid and explained",
        body: "Coupon schedules are tracked as service workflows, the payment is recorded, and the client sees it in their portal with the documents attached.",
      },
      {
        title: "A corporate action is handled, not discovered",
        body: "An upcoming action raises a service case, the desk contacts affected clients, and every response is logged against the client record.",
      },
    ],
  },
  illustrative: {
    title: "Illustrative coupon schedule",
    note: "Example schedule only — holdings and figures are illustrative, not a live position.",
    rows: [
      { label: "Sample holding 1 · 5.25% coupon", value: "Next payment Mar 2027" },
      { label: "Sample holding 2 · 3.80% coupon", value: "Next payment Jun 2027" },
      { label: "Sample holding 3 · 6.10% coupon", value: "Next payment Sep 2027" },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "One workflow, from suitability to coupon.",
    copy: "The client's journey is a single thread: onboarding, orders, allocations, coupons and actions — each step feeding the record the next step reads.",
    variant: "flow",
    steps: [
      {
        title: "Onboarding & suitability",
        body: "Identity and suitability captured together, on the client record.",
      },
      {
        title: "Order & allocation",
        body: "Orders tracked with status; allocations confirmed and documented.",
      },
      {
        title: "Confirmation",
        body: "Confirmations and documents delivered to the client portal.",
      },
      {
        title: "Coupons & actions",
        body: "Coupon schedules and corporate actions as service workflows.",
      },
      {
        title: "Reporting & audit",
        body: "Allocation reporting, coupon calendars and an audit trail.",
      },
    ],
    integrationNote:
      "Custody, settlement and market-data connections are adapters scoped per engagement. BridgeX coordinates the client-facing workflow and the record; settlement itself runs through your existing providers.",
  },
  faqs: [
    {
      question: "Does BridgeX execute bond orders?",
      answer:
        "No. BridgeX records and tracks the order workflow — status, allocation, confirmation — around your existing execution and settlement arrangements.",
    },
    {
      question: "How do clients see allocations?",
      answer:
        "In the branded portal: order status, allocation detail and confirmation documents, all on the client record — so the desk doesn't have to explain the same allocation twice.",
    },
    {
      question: "How are coupons tracked?",
      answer:
        "Coupon schedules are service workflows with dates, amounts and payment status, visible to the client in the portal and to your team in the operations view.",
    },
    {
      question: "What happens on a corporate action?",
      answer:
        "The action raises a service case for affected clients, the desk works through it with logged responses, and the outcome is recorded on each client record.",
    },
    {
      question: "Is suitability checked before an order?",
      answer:
        "Suitability is stored on the client record, so the desk can see the current profile before placing an order — and reviews can update it in the same place.",
    },
  ],
  cta: {
    heading: "Make every step visible — to the client and the desk.",
    copy: "See onboarding, order visibility and coupon workflows in a private demo.",
  },
};
