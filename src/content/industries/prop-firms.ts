import type { IndustryContent } from "./types";

export const propFirms: IndustryContent = {
  slug: "prop-firms",
  href: "/industries/prop-firms",
  label: "Prop Trading Firms",
  icon: "prop",
  metaTitle: "Prop Trading Firms",
  metaDescription:
    "BridgeX for prop trading firms: challenge lifecycle, affiliates, trading contests, profit-share workflow and risk compliance — in one system.",
  eyebrow: "Industries · Prop Trading Firms",
  heroBefore: "Challenges that scale ",
  heroAccent: "without the chaos.",
  heroAfter: "",
  heroSupport:
    "A prop firm is a lifecycle business: challenges, evaluations, funded traders, profit-share, affiliates and risk rules — all moving at once. BridgeX runs the whole lifecycle, so growth doesn't mean more spreadsheets and more disputes.",
  heroVariant: "photo-dark",
  image: {
    src: "/images/trading-floor-desk.jpg",
    alt: "Hands over a trading desk with laptops showing charts",
    width: 1920,
    height: 1280,
  },
  secondaryImage: {
    src: "/images/industries-prop-firms.jpg",
    alt: "Printed candlestick charts, a laptop, a magnifying glass and glasses arranged on a desk",
    width: 1600,
    height: 1067,
  },
  challengeImage: {
    src: "/images/trader-workstation.jpg",
    alt: "Trading desk with a laptop showing a candlestick chart and a wall of monitors",
    width: 1600,
    height: 1067,
  },
  bandImage: {
    src: "/images/hero-bridge-night.jpg",
    alt: "Close-up of a monitor showing a rising candlestick chart",
    width: 1600,
    height: 1068,
  },
  band: {
    eyebrow: "One lifecycle",
    heading: "Growth adds traders, not tools.",
    copy: "Challenges, evaluations, funded traders, profit-share, affiliates and risk rules — all moving at once, in one system.",
  },
  bandPosition: "after-challenges",
  challenges: {
    label: "The challenges",
    heading: "Growth breaks the spreadsheet first.",
    copy: "Every new cohort of traders multiplies the stages, payouts and affiliate queries — unless one system carries the lifecycle.",
    layout: "grid",
    items: [
      {
        title: "Challenge stages live in five tools",
        body: "Signups, evaluation progress, pass/fail decisions and funded accounts are tracked across platforms — and traders ask support for the status the system should show.",
      },
      {
        title: "Payouts are disputed, not explained",
        body: "Profit-share is calculated somewhere, paid sometime, and explained never — so every payout becomes a support ticket.",
      },
      {
        title: "Affiliates can't see their referrals",
        body: "The partners who bring your traders have no view of signups or earnings, and no reason to keep promoting you.",
      },
      {
        title: "Risk rules are enforced by hand",
        body: "Drawdown breaches and rule violations are spotted late, or argued about — because the rules aren't tied to the trader's record.",
      },
      {
        title: "Contests are a side project",
        body: "Trading contests run on a separate tool with a separate leaderboard, instead of feeding the same funnel as your challenges.",
      },
    ],
  },
  moduleMap: {
    label: "How BridgeX maps to outcomes",
    heading: "One lifecycle, from signup to payout.",
    copy: "Challenges, contests, affiliates and payouts share one trader record — so nothing is re-keyed and every dispute has an answer.",
    layout: "cards",
    items: [
      {
        href: "/solutions/trading-contests",
        label: "Trading Contest Management",
        outcome: "Challenges and contests, one engine",
        detail:
          "Evaluation-style contests and trading competitions with live rankings, fairness review and approved prizes.",
      },
      {
        href: "/solutions/ib-incentives",
        label: "IB & Incentive Management",
        outcome: "Affiliates who can see",
        detail:
          "Referral links, attribution, commission ledgers and partner dashboards — so affiliates promote with confidence.",
      },
      {
        href: "/solutions/financial-crm",
        label: "Financial CRM",
        outcome: "One trader, whole lifecycle",
        detail:
          "Signup to funded trader in a single record: stages, documents, cases and payout history.",
      },
      {
        href: "/solutions/payment-orchestration",
        label: "Payment Orchestration",
        outcome: "Payouts that reconcile",
        detail:
          "Profit-share payouts with approval workflows and provider reconciliation.",
      },
      {
        href: "/solutions/digital-onboarding",
        label: "Digital Onboarding & KYC",
        outcome: "KYC before funding",
        detail:
          "Identity verification and approval queues before a trader is funded — not after the first dispute.",
      },
    ],
  },
  useCases: {
    label: "In practice",
    heading: "Signup, funding, payout — visibly.",
    copy: "Traders see their progress, affiliates see their referrals, and finance sees the same ledger as both.",
    items: [
      {
        title: "A trader buys a challenge and sees the journey",
        body: "Signup, evaluation stages, pass/fail and funding are all visible in the trader's portal — with the rules and the progress in one place.",
      },
      {
        title: "A payout is calculated and explained",
        body: "Profit-share accrues on the ledger, the trader sees the same numbers as finance, and the payout is requested, approved and settled in the portal.",
      },
      {
        title: "An affiliate brings ten traders",
        body: "Referrals are attributed, commissions accrue on the ledger, and the affiliate tracks signups and earnings in their own dashboard.",
      },
    ],
  },
  illustrative: {
    title: "Illustrative challenge journey",
    note: "Example stages only — targets and rules are illustrative, not a live programme.",
    rows: [
      { label: "Stage 1 · Evaluation", value: "Target +8% · Max drawdown 5%" },
      { label: "Stage 2 · Verification", value: "Target +5% · Max drawdown 5%" },
      { label: "Funded", value: "Profit share 80/20 · Payout on request" },
    ],
  },
  architecture: {
    label: "Service architecture",
    heading: "Four layers, shaped around a prop firm.",
    copy: "The trader portal and the affiliate portal share the same lifecycle record as the payout queue and the risk flags — so growth adds traders, not tools.",
    variant: "layers",
    layers: [
      {
        name: "Experience",
        description: "What traders and affiliates see.",
        items: ["Trader portal", "Affiliate portal", "Challenge dashboards"],
      },
      {
        name: "Operations",
        description: "Where your teams work.",
        items: ["Challenge lifecycle", "CRM & payouts", "Risk flags & review"],
      },
      {
        name: "Integrations",
        description: "How the ecosystem connects.",
        items: ["Trading platforms", "Payment providers", "KYC"],
      },
      {
        name: "Intelligence",
        description: "What management sees.",
        items: ["Funnel & cohorts", "Payout monitoring", "Risk exceptions & audit"],
      },
    ],
    integrationNote:
      "Trading-platform connections for challenge tracking are adapters scoped per engagement, designed around authorised platform access. BridgeX does not claim live challenge tracking on any platform until the connection has been tested.",
    dark: true,
  },
  faqs: [
    {
      question: "Does BridgeX run the trading evaluation?",
      answer:
        "BridgeX runs the lifecycle around it — signup, stages, funding, payouts and affiliates. Evaluation data comes from your trading platform through an adapter scoped during implementation.",
    },
    {
      question: "How are profit-share payouts handled?",
      answer:
        "Profit-share accrues on a ledger the trader and finance both see. Payouts are requested in the portal, approved through your workflow, and reconciled against the payment provider.",
    },
    {
      question: "Can traders see their challenge progress?",
      answer:
        "Yes. The trader portal shows the current stage, progress against the rules, and the history of the challenge — so “where am I” stops being a support ticket.",
    },
    {
      question: "How are rule breaches handled?",
      answer:
        "Rule states are tracked against the trader record, breaches are flagged for review, and decisions are recorded with the evidence — so disputes are settled from the record.",
    },
    {
      question: "Do affiliates get their own dashboard?",
      answer:
        "Yes. Affiliates get referral links, attribution, a commission ledger and a dashboard — the same incentive system that powers IB programmes for brokers.",
    },
    {
      question: "Can we run trading contests alongside challenges?",
      answer:
        "Yes. Contests use the same platform — leaderboards, fairness review and prize payouts — and can feed the same funnel as your challenge programme.",
    },
  ],
  cta: {
    heading: "Scale the challenges, not the chaos.",
    copy: "See the challenge lifecycle, payouts and affiliate dashboards in a private demo.",
  },
};
