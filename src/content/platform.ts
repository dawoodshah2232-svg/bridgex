/**
 * Platform content — typed data for the eight platform routes (spec §8).
 *
 * Page components stay lean; all page copy lives here. Copy is original
 * BridgeX writing: no invented clients, stats, integrations, certifications
 * or pricing. Anything illustrative is labelled in the UI with DemoLabel.
 */
import type { IconName } from "@/components/icons";
import type { FaqItem } from "@/components/ui/FaqAccordion";

/* ------------------------------------------------------------------ */
/* Shared types                                                        */
/* ------------------------------------------------------------------ */

export interface PlatformLayer {
  id: string;
  name: string;
  tag: string;
  text: string;
  detail: string;
  points: string[];
  href: string;
  icon: IconName;
}

export interface FoundationItem {
  title: string;
  text: string;
  detail: string;
  icon: IconName;
}

export interface Audience {
  id: string;
  label: string;
  icon: IconName;
  headline: string;
  copy: string;
  features: { title: string; text: string }[];
  preview: { label: string; value: string }[];
  /** Panel photograph (root-relative public path, rendered via asset()). */
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface OpsStage {
  id: string;
  step: string;
  title: string;
  text: string;
  detail: string;
  points: string[];
  /** Panel photograph (root-relative public path, rendered via asset()). */
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface StudioBuilder {
  id: string;
  name: string;
  icon: IconName;
  tagline: string;
  detail: string;
  sample: string[];
}

export interface IntegrationCategory {
  id: string;
  name: string;
  icon: IconName;
  tagline: string;
  detail: string;
  handles: string[];
  note: string;
}

export interface AnalyticsView {
  id: string;
  label: string;
  icon: IconName;
  headline: string;
  copy: string;
  kpis: { label: string; value: string; note: string }[];
  /** Illustrative funnel stages, widest first. */
  funnel: { label: string; value: number }[];
}

export interface AiUse {
  title: string;
  icon: IconName;
  scenario: string;
  checkpoint: string;
}

/* ------------------------------------------------------------------ */
/* The four layers (overview + architecture)                           */
/* ------------------------------------------------------------------ */

export const PLATFORM_LAYERS: PlatformLayer[] = [
  {
    id: "experience",
    name: "Experience",
    tag: "What clients, partners and advisors touch",
    text: "Branded client rooms, partner portals and advisor interfaces — web and mobile, in your brand, not ours.",
    detail:
      "The experience layer is everything a person outside your operations team sees: the client room where clients verify, fund and manage accounts; the partner portal where introducers track referrals and earnings; and the advisor interface where relationship managers work their book. Every surface carries your brand and your rules, and every action writes back to the same record the operations team sees.",
    points: [
      "White-label client rooms with your logo, colours and domain",
      "Partner portals with referral links and earnings views",
      "Advisor interfaces shaped around a client book, not a ticket queue",
      "Responsive layouts that work on a phone first, not as an afterthought",
    ],
    href: "/platform/client-experience",
    icon: "experience",
  },
  {
    id: "operations",
    name: "Operations",
    tag: "How the business runs, day to day",
    text: "Accounts, wallets, payments, service cases and approvals — one queue, one record, one audit trail.",
    detail:
      "The operations layer is where your team works: the customer and account lifecycle, wallets and payments, service cases, incentives and approvals. Work arrives in queues with context attached — the client's history, documents and permissions — so nobody has to reconstruct a case from three systems before answering it.",
    points: [
      "Customer and account lifecycle, from first lead to funded account",
      "Wallets, deposits, withdrawals and reconciliation in one view",
      "Service cases with full history and document access",
      "Approvals and maker-checker controls on money-moving actions",
    ],
    href: "/platform/financial-operations",
    icon: "operations",
  },
  {
    id: "integrations",
    name: "Integrations",
    tag: "How BridgeX talks to the rest of your stack",
    text: "Adapters for trading platforms, payment providers, KYC and market data — with webhooks, retries and clear failure handling.",
    detail:
      "The integrations layer connects BridgeX to the systems a financial business already runs on: trading platforms, payment providers, identity verification, communications and market data. Each connection is an adapter with a defined contract — what it sends, what it expects back, and what happens when either side fails. Nothing is presented as integrated until it has been configured and tested for your deployment.",
    points: [
      "Adapter architecture — one contract per provider category",
      "Event and webhook delivery with retries and dead-letter handling",
      "Sandbox-first: prove a connection before it touches real data",
      "No provider logos or named integrations we have not verified",
    ],
    href: "/platform/integrations",
    icon: "ecosystem",
  },
  {
    id: "intelligence",
    name: "Intelligence",
    tag: "How you see what is happening",
    text: "Executive dashboards, partner and sales funnels, exception queues and audit-ready reporting — the same numbers, everywhere.",
    detail:
      "The intelligence layer turns operational records into decisions: dashboards for executives, funnels for sales and partner teams, exception queues for finance and compliance, and exports that reconcile to the ledger. Because every layer writes to the same data model, the number in the board pack and the number in the operations queue agree — they come from the same place.",
    points: [
      "Executive dashboards with role-specific views",
      "Sales and partner funnels, from first touch to funded account",
      "Exception queues that surface what needs a human, and why",
      "Exports and audit trails built for review, not for screenshots",
    ],
    href: "/platform/analytics",
    icon: "intelligence",
  },
];

/* ------------------------------------------------------------------ */
/* Shared foundation                                                   */
/* ------------------------------------------------------------------ */

export const FOUNDATION_ITEMS: FoundationItem[] = [
  {
    title: "Tenant separation",
    text: "Each organisation's data is kept apart by design, not by convention.",
    detail:
      "Every record belongs to a tenant, and every query is scoped to it. Tenant boundaries are enforced in the application layer and tested, so one business never sees another's clients, ledgers or documents — even when teams share an instance.",
    icon: "building",
  },
  {
    title: "Shared data model",
    text: "One record for a client, an account and a payment — everywhere.",
    detail:
      "Contacts, accounts, wallets, cases and commissions are single records referenced by every layer. There is no nightly sync to drift out of date, and no second copy of the truth in a spreadsheet. When a detail changes, it changes once, everywhere it appears.",
    icon: "layers",
  },
  {
    title: "Roles & permissions",
    text: "Who can see, edit and approve — down to the field.",
    detail:
      "Role-based access covers screens, actions and individual fields. A support agent sees the case history but not the commission ledger; a finance approver sees amounts but not identity documents they have no business opening. Permissions are configured per tenant, per role, per object.",
    icon: "shield",
  },
  {
    title: "Workflow engine",
    text: "Rules and journeys that run the same way, every time.",
    detail:
      "Approvals, escalations, notifications and status changes are driven by configurable workflows, not by whoever happens to be on shift. A workflow version is drafted, reviewed and published — and the version that ran is recorded with the case it touched.",
    icon: "workflow",
  },
  {
    title: "Events & webhooks",
    text: "Every meaningful change is an event other systems can trust.",
    detail:
      "When a client is verified, a payment settles or a commission is approved, BridgeX emits an event. Adapters and webhooks deliver those events to connected systems with retries and delivery records, so downstream tools stay in step without polling or manual exports.",
    icon: "route",
  },
  {
    title: "Audit logging",
    text: "Who did what, when, and what changed — kept as evidence.",
    detail:
      "Significant actions write an audit event: the actor, the time, the record, and the before-and-after values. Audit entries are append-only in design, so a review can reconstruct exactly how a decision was reached, months after the fact.",
    icon: "audit",
  },
];

/** Enterprise controls called out on the architecture page. */
export const ENTERPRISE_CONTROLS: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Maker-checker approvals",
    text: "Money-moving and high-impact actions can require a second person to approve. The maker and the checker are never the same account, and both are recorded.",
    icon: "check",
  },
  {
    title: "Field-level permissions",
    text: "Access is granted per field, not just per screen — sensitive values stay hidden from roles that do not need them, even inside a record they can open.",
    icon: "shield",
  },
  {
    title: "Configuration versioning",
    text: "Workflows, forms and journeys are versioned. Publish a new version and the old one stays readable, so you can always see which rules were live on any given day.",
    icon: "document",
  },
  {
    title: "Environment separation",
    text: "Configuration and integration work happens in a non-production environment first. Changes are promoted deliberately, never edited straight into live operations.",
    icon: "layers",
  },
  {
    title: "Dry-run before bulk change",
    text: "Bulk operations validate first and show what would change before anything is applied — so a wide update never lands as a surprise.",
    icon: "audit",
  },
  {
    title: "Session & access hygiene",
    text: "Role-scoped sessions, least-privilege defaults and reviewable access lists keep the number of people who can touch sensitive operations small and visible.",
    icon: "users",
  },
];

/* ------------------------------------------------------------------ */
/* Client experience audiences                                         */
/* ------------------------------------------------------------------ */

export const AUDIENCES: Audience[] = [
  {
    id: "client",
    label: "Client room",
    icon: "experience",
    headline: "Your brand, their home base.",
    copy: "Clients register, verify their identity, open accounts, fund wallets and follow every request — inside a room that looks and reads like your business. Nothing in it says BridgeX unless you want it to.",
    features: [
      {
        title: "One place for the whole relationship",
        text: "Accounts, balances, documents, requests and messages sit together, so a client never has to guess where something lives.",
      },
      {
        title: "Verification with a visible status",
        text: "Clients see what has been received, what is outstanding and what happens next — instead of waiting in silence.",
      },
      {
        title: "Funding without the phone call",
        text: "Deposit and withdrawal requests, with status updates at each step, from request through approval to settlement.",
      },
    ],
    preview: [
      { label: "Verification status", value: "Documents under review" },
      { label: "Accounts", value: "2 live · 1 demo" },
      { label: "Open requests", value: "Withdrawal — awaiting approval" },
      { label: "Unread messages", value: "1 — support replied" },
    ],
    image: "/images/wealth-meeting.jpg",
    imageAlt: "Advisor and client reviewing financial documents together",
    imageWidth: 1600,
    imageHeight: 1067,
  },
  {
    id: "partner",
    label: "Partner portal",
    icon: "ib",
    headline: "Partners who can see their own numbers.",
    copy: "Introducers and affiliates get a portal that answers their questions before they ask: who signed up, what was attributed, what has been earned and when it settles. Fewer 'where is my commission' messages for your team.",
    features: [
      {
        title: "Referral links that carry attribution",
        text: "Each partner gets trackable links, and the attribution rules behind them are visible — first touch, last touch, or your own configured rule.",
      },
      {
        title: "An earnings ledger, not a mystery",
        text: "Commissions appear as ledger entries with their source: the client, the trade or volume event, the program rule that produced them.",
      },
      {
        title: "Payout requests with a paper trail",
        text: "Partners request payouts from earned balances; approvals, adjustments and settlements are all recorded and downloadable as statements.",
      },
    ],
    preview: [
      { label: "Referred clients", value: "38 active" },
      { label: "Earned this period", value: "1,240.00 USD" },
      { label: "Pending approval", value: "310.50 USD" },
      { label: "Next payout", value: "Requested — in review" },
    ],
    image: "/images/handshake-partners.jpg",
    imageAlt: "Partners in discussion around a boardroom table",
    imageWidth: 1920,
    imageHeight: 1280,
  },
  {
    id: "advisor",
    label: "Advisor interface",
    icon: "crm",
    headline: "A book of clients, not a pile of tickets.",
    copy: "Relationship managers and advisors work from a client book: the people they look after, where each one stands, and what needs attention today. Suitability evidence and conversation history travel with the client, not with the individual advisor.",
    features: [
      {
        title: "The book, at a glance",
        text: "Clients grouped by stage, attention needed and next action — so the day starts with priorities, not with a search box.",
      },
      {
        title: "Suitability attached to the record",
        text: "Assessments and their outcomes live on the client record, so advice and its evidence are never separated.",
      },
      {
        title: "Handover without loss",
        text: "When a client moves between advisors, notes, documents and history move with them — the client never has to start over.",
      },
    ],
    preview: [
      { label: "Clients in my book", value: "64" },
      { label: "Needing attention", value: "6 — documents expiring" },
      { label: "Meetings this week", value: "9 scheduled" },
      { label: "Pending suitability reviews", value: "3" },
    ],
    image: "/images/wealth-advisor.jpg",
    imageAlt: "Financial advisor discussing plans with clients",
    imageWidth: 1600,
    imageHeight: 1068,
  },
];

/* ------------------------------------------------------------------ */
/* Financial operations lifecycle                                      */
/* ------------------------------------------------------------------ */

export const OPS_STAGES: OpsStage[] = [
  {
    id: "onboard",
    step: "01",
    title: "Onboard",
    text: "A lead becomes an applicant, then a verified client — with every step recorded.",
    detail:
      "Registration, identity documents, verification checks and suitability assessments flow through one journey. Country and product rules shape the steps a client sees, and approval queues hold applications until a reviewer — not an algorithm alone — clears them.",
    points: [
      "Individual, corporate and professional journeys",
      "Document upload with verification status tracking",
      "Suitability assessments attached to the record",
      "Approval queues with reviewer notes and history",
    ],
    image: "/images/signing-contract.jpg",
    imageAlt: "Person signing documents with a pen",
    imageWidth: 1600,
    imageHeight: 1068,
  },
  {
    id: "open",
    step: "02",
    title: "Open",
    text: "Accounts and wallets are created from the verified record — no re-keying.",
    detail:
      "Once a client is approved, trading accounts and wallets are opened from the same record that was verified. Entitlements, account types and limits follow the configuration for that client segment, so the account a client receives is the account they were approved for.",
    points: [
      "Account creation handoff from the onboarding record",
      "Wallet setup in the client's configured currencies",
      "Entitlements and limits by client segment",
      "Every account linked back to its verification evidence",
    ],
    image: "/images/lobby-office.jpg",
    imageAlt: "Modern office lobby with wooden panels and large windows",
    imageWidth: 1600,
    imageHeight: 1067,
  },
  {
    id: "fund",
    step: "03",
    title: "Fund",
    text: "Deposits and withdrawals move through routing, approval and reconciliation.",
    detail:
      "Funding requests enter a single queue with their payment method, amount and client context. Routing rules decide which provider path a payment takes; approvals gate the release; and reconciliation matches provider records against the internal ledger so breaks surface as exceptions, not as month-end surprises.",
    points: [
      "Deposit and withdrawal requests in one queue",
      "Provider routing by country, currency and amount",
      "Approval gates on release, with maker-checker where configured",
      "Three-way reconciliation: provider, ledger and platform",
    ],
    image: "/images/payments-pos.jpg",
    imageAlt: "Card payment being processed at a point-of-sale terminal",
    imageWidth: 1600,
    imageHeight: 1067,
  },
  {
    id: "serve",
    step: "04",
    title: "Serve",
    text: "Cases, documents and requests — answered with the full history in view.",
    detail:
      "Service cases arrive with the client's accounts, payments and documents already attached. Agents work from one timeline instead of hunting across systems, and every reply, escalation and resolution is written to the same case record the client can follow.",
    points: [
      "Case queues with full client context attached",
      "Document requests and uploads inside the case",
      "Escalation and assignment rules by case type",
      "Client-visible status, so fewer cases chase their own update",
    ],
    image: "/images/compliance-desk.jpg",
    imageAlt: "Businesswoman reviewing paperwork in an office",
    imageWidth: 1600,
    imageHeight: 1068,
  },
  {
    id: "settle",
    step: "05",
    title: "Settle",
    text: "Incentives are calculated, approved and paid — with a ledger behind every figure.",
    detail:
      "Partner commissions and incentive payouts close the loop: earnings are calculated from configured program rules, held for approval, adjusted where the rules allow, and settled with a statement the partner can download. Every figure traces back to its source event.",
    points: [
      "Commission calculation from program rules, not spreadsheets",
      "Earn, adjust, approve and settle as distinct ledger states",
      "Clawbacks and corrections recorded, never silently edited",
      "Partner statements generated from the ledger",
    ],
    image: "/images/handshake-deal.jpg",
    imageAlt: "Professional handshake sealing a business agreement",
    imageWidth: 1600,
    imageHeight: 1067,
  },
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export const PLATFORM_FAQS: FaqItem[] = [
  {
    question: "Do we have to adopt all four layers at once?",
    answer:
      "No. The layers are designed to be adopted in stages — many businesses start with client experience and operations, then connect integrations and intelligence as they grow. Because every layer shares the same foundation and data model, adding a layer later does not mean rebuilding what is already running.",
  },
  {
    question: "Can BridgeX work alongside systems we already use?",
    answer:
      "Yes — that is what the integrations layer is for. BridgeX is designed to coexist with existing trading platforms, payment providers and CRM tools through adapters, events and webhooks, rather than demanding a rip-and-replace migration on day one.",
  },
  {
    question: "Who sees what inside the platform?",
    answer:
      "Access is governed by roles and field-level permissions, configured per tenant. A support agent, a finance approver, a partner and a client each see a different slice of the same records — and sensitive fields stay hidden from roles that do not need them.",
  },
  {
    question: "How is our data kept separate from other businesses?",
    answer:
      "Every record belongs to a tenant, and tenant separation is enforced in the application layer and tested. One organisation's clients, ledgers and documents are never visible to another, even when teams share an instance.",
  },
  {
    question: "What happens when an integration fails?",
    answer:
      "Failures are treated as first-class events: delivery is retried on a schedule, persistent failures land in a dead-letter queue with the full payload and error, and affected records surface as exceptions for a human to resolve. Nothing fails silently.",
  },
  {
    question: "Is the AI assistance available today?",
    answer:
      "No. Governed AI assistance is in development and is described on its own page as a roadmap capability. Nothing on the platform today is decided by an AI agent, and the design requires human approval for every assisted action.",
  },
];

export const ARCHITECTURE_FAQS: FaqItem[] = [
  {
    question: "What does 'API-first' mean in practice?",
    answer:
      "Every capability the interfaces use is also available as an API, so your own systems and developers can read and write the same records the BridgeX screens use — with the same permissions and the same audit trail. The interface is a client of the API, not a separate path around it.",
  },
  {
    question: "How do the layers communicate?",
    answer:
      "Through the shared foundation: one data model, one workflow engine and one event system. Layers never call each other directly or keep private copies of data — a change in one layer is visible to the others because it lands in the same records and emits the same events.",
  },
  {
    question: "Can we run BridgeX alongside our current CRM?",
    answer:
      "Yes. The integrations layer is built for coexistence: adapters and webhooks keep an external CRM in step with BridgeX records, and the migration path is staged — you move one workflow at a time and reconcile as you go, rather than switching everything in a single cutover.",
  },
  {
    question: "What does the audit log actually record?",
    answer:
      "Significant actions — who acted, when, on which record, and what changed. Audit entries are designed to be append-only, so a review can reconstruct how a decision was reached long after the fact.",
  },
  {
    question: "How are changes to workflows and forms controlled?",
    answer:
      "Configuration is versioned: a workflow, form or journey is drafted, reviewed and published, and the published version is recorded with every case it touches. You can always see which rules were live on any given day.",
  },
];

export const CLIENT_EXPERIENCE_FAQS: FaqItem[] = [
  {
    question: "How much of the client room can carry our brand?",
    answer:
      "Logo, colours, wording and domain are all configurable, and the journeys clients walk — registration, verification, funding — use your copy and your steps. The room reads as your business; BridgeX stays in the background.",
  },
  {
    question: "Do partners see their clients' private details?",
    answer:
      "No. Partners see the referral and earnings information relevant to them — attributed signups, commission ledger entries and payout status — not clients' documents, balances or private details. Partner visibility is a permission, not a default.",
  },
  {
    question: "Does the client room work on mobile?",
    answer:
      "Yes. The layouts are responsive and designed mobile-first: registration, document upload, funding requests and support all work on a phone, and notifications keep clients informed without requiring them to stay in the app.",
  },
  {
    question: "Can clients track a request without contacting support?",
    answer:
      "Yes. Deposits, withdrawals, account requests and service cases all carry a visible status in the client room, with updates as each step completes. Clients can see where a request stands instead of asking.",
  },
  {
    question: "What happens when an advisor leaves?",
    answer:
      "The client record — notes, documents, suitability evidence and history — belongs to the business, not the individual. A client can be reassigned to another advisor with the full history intact, so the client never has to start over.",
  },
];

export const FINANCIAL_OPERATIONS_FAQS: FaqItem[] = [
  {
    question: "How are deposits and withdrawals approved?",
    answer:
      "Funding requests enter a single queue with their payment method, amount and client context. Approval rules — including maker-checker, where a second person must approve — are configured per tenant, and every approval or rejection is recorded with the reason.",
  },
  {
    question: "What does reconciliation actually check?",
    answer:
      "It matches three records: the payment provider's events, the internal ledger, and the platform's funding requests. Anything that does not match becomes an exception with the related records attached, so finance investigates a specific break instead of a month-end mystery.",
  },
  {
    question: "Can a case be escalated automatically?",
    answer:
      "Yes. Workflow rules route and escalate cases by type, age or value — for example, sending a high-value withdrawal case to finance, or escalating a case that has waited past its service target. Escalation rules are configured, versioned and visible.",
  },
  {
    question: "How are partner commissions calculated?",
    answer:
      "From configured program rules — rebate, CPA, volume or performance models with tiers and caps — applied to source events from the trade feed or funding records. Each commission is a ledger entry that traces back to the event and the rule that produced it.",
  },
  {
    question: "Do you store card details?",
    answer:
      "No. BridgeX never stores raw payment card data. Card collection uses provider-hosted flows appropriate to the provider's certification, and only the references needed to reconcile a payment are kept.",
  },
];
