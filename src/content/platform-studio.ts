/**
 * Platform content, part 2 — No-Code Studio builders, integration
 * categories, analytics role views and AI-assistance uses, with their
 * FAQs. Split from platform.ts to keep files under 800 lines.
 *
 * Types are imported from ./platform; the same content-truth rules
 * apply (see the header of platform.ts).
 */
import type { FaqItem } from "@/components/ui/FaqAccordion";
import type {
  AiUse,
  AnalyticsView,
  IntegrationCategory,
  StudioBuilder,
} from "./platform";

/* ------------------------------------------------------------------ */
/* No-Code Studio builders                                             */
/* ------------------------------------------------------------------ */

export const STUDIO_BUILDERS: StudioBuilder[] = [
  {
    id: "objects",
    name: "Objects",
    icon: "layers",
    tagline: "Define what your business tracks.",
    detail:
      "Create the record types your operation needs — a desk, a campaign, a fee schedule — with typed fields, relationships and validation. Objects become first-class records everywhere: in lists, in workflows, in reports and in permissions.",
    sample: ["Field: Desk (picklist)", "Field: Region (picklist)", "Relation: Desk → Clients"],
  },
  {
    id: "forms",
    name: "Forms",
    icon: "document",
    tagline: "Collect the right information, in the right order.",
    detail:
      "Build the forms clients and staff complete: registration, document requests, account applications. Steps, conditional fields and validation rules are configured, not coded — and every submission lands on the record it belongs to.",
    sample: ["Step 1: Personal details", "Step 2: Address & residency", "Rule: show company fields if corporate"],
  },
  {
    id: "documents",
    name: "Documents",
    icon: "book",
    tagline: "Templates that fill themselves in.",
    detail:
      "Design document templates — agreements, statements, welcome packs — with fields that draw from the client record. Generated documents are versioned and stored against the record, so the copy a client signed is the copy you can retrieve.",
    sample: ["Template: Client agreement", "Merge field: {{client.full_name}}", "Version 3 — published"],
  },
  {
    id: "assessments",
    name: "Assessments",
    icon: "check",
    tagline: "Suitability and scoring, structured.",
    detail:
      "Build scored questionnaires for suitability, risk appetite or onboarding checks. Scores and outcomes are recorded with the answers, so a decision can always be traced back to what the client actually said.",
    sample: ["Question: Investment experience", "Scoring: 0–4 per answer", "Outcome band: Standard / Enhanced"],
  },
  {
    id: "emails",
    name: "Emails",
    icon: "mail",
    tagline: "Every message, on brand and on record.",
    detail:
      "Compose the emails the platform sends — verification links, status updates, statements — with your branding and merge fields. Every send is logged against the client record, so support can see exactly what a client was told.",
    sample: ["Template: Verification approved", "Merge field: {{account.number}}", "Locale: English / Arabic"],
  },
  {
    id: "workflows",
    name: "Workflows",
    icon: "workflow",
    tagline: "If this, then that — with an approver in the loop.",
    detail:
      "Automate the steps between events: when a document is approved, open the account; when a withdrawal exceeds a threshold, route it to finance. Workflows run the same way every time, and the version that ran is recorded with the case.",
    sample: ["Trigger: Document approved", "Action: Create account request", "Gate: Finance approval over 10,000"],
  },
  {
    id: "journeys",
    name: "Client Journeys",
    icon: "onboarding",
    tagline: "The path a client walks, step by step.",
    detail:
      "Design end-to-end journeys — registration to first funding, or application to approval — as a sequence of steps with branches for country, client type and product. Drop-off points are visible, so you can see where clients stall and fix the step, not the person.",
    sample: ["Step: Verify identity", "Branch: Corporate → beneficial owners", "Reminder: 48h after inactivity"],
  },
  {
    id: "pipelines",
    name: "Sales Pipelines",
    icon: "crm",
    tagline: "Stages your sales team actually uses.",
    detail:
      "Shape pipelines around how your desks sell: stages, ownership rules, routing by country or source, and the activities each stage expects. Leads move when the work moves — not when someone remembers to update a spreadsheet.",
    sample: ["Stage: New → Contacted → Qualified", "Routing: Country → Desk A", "SLA: First contact within 4h"],
  },
  {
    id: "incentives",
    name: "Incentive Programs",
    icon: "ib",
    tagline: "Partner rewards, defined as rules.",
    detail:
      "Define rebate, CPA, volume and performance programs as rules with tiers, caps and eligibility — then let the ledger do the arithmetic. When a partner asks why they earned a figure, the program rule and the source event answer it.",
    sample: ["Rule: Rebate per lot, tiered", "Tier 2: 100+ lots / month", "Cap: Per-partner monthly maximum"],
  },
  {
    id: "reports",
    name: "Reports",
    icon: "report",
    tagline: "The numbers your reviewers ask for.",
    detail:
      "Build tabular reports from live operational data — funding summaries, onboarding throughput, commission ledgers — with filters, grouping and scheduled exports. A report is a saved question, not a one-off export that nobody can reproduce.",
    sample: ["Report: Funding summary (weekly)", "Group by: Provider · Currency", "Export: CSV, scheduled Mondays"],
  },
  {
    id: "dashboards",
    name: "Dashboards",
    icon: "chart",
    tagline: "A live view, composed for a role.",
    detail:
      "Compose dashboards from charts, queues and KPIs, and publish them per role: executives see the business, finance sees the money, compliance sees the exceptions. Everyone looks at the same underlying records, through a lens built for their job.",
    sample: ["Widget: Onboarding funnel", "Widget: Exceptions queue", "Audience: Compliance role"],
  },
];

/* ------------------------------------------------------------------ */
/* Integration categories                                              */
/* ------------------------------------------------------------------ */

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  {
    id: "trading",
    name: "Trading platforms",
    icon: "brokers",
    tagline: "Accounts, symbols and trade data — through adapters, not shortcuts.",
    detail:
      "Trading-platform adapters connect BridgeX to the venues your clients trade on: account and group synchronisation, symbol and session data, and trade feeds where the platform supports them. Connections are configured per server and per group, tested in a sandbox first, and every synchronisation run is logged so a mismatch can be investigated rather than guessed at.",
    handles: [
      "Account and group synchronisation",
      "Symbol, session and schedule data",
      "Trade and position feeds where supported",
      "Funding requests routed to the right account",
    ],
    note: "Live trading-server access is enabled only with authorised broker credentials, broker approval and a tested sandbox run — never from the marketing site.",
  },
  {
    id: "payments",
    name: "Payment providers",
    icon: "payments",
    tagline: "Many ways to pay, one ledger to reconcile.",
    detail:
      "Payment adapters cover the categories a brokerage actually uses — cards, bank transfers and alternative methods — behind one routing model. Priority and weighted routing, country and currency restrictions, and cascading retry after a decline are configured per tenant, and every provider event is matched against the internal ledger.",
    handles: [
      "Card, bank and alternative payment categories",
      "Priority and weighted routing rules",
      "Cascading retry after a declined attempt",
      "Webhook-driven status updates with reconciliation",
    ],
    note: "BridgeX never stores raw card data. Payment collection uses provider-hosted flows appropriate to the provider's certification.",
  },
  {
    id: "kyc",
    name: "KYC & AML",
    icon: "shield",
    tagline: "Identity checks that feed the case, not a separate inbox.",
    detail:
      "Identity-verification and screening adapters bring verification results straight into the onboarding case: document checks, identity matching and sanctions or watchlist screening, with outcomes and evidence attached to the client record. A failed or flagged check becomes a case for a human reviewer — never a silent rejection.",
    handles: [
      "Document authenticity and identity checks",
      "Sanctions and watchlist screening",
      "Risk flags written to the onboarding case",
      "Reviewer queues for flagged applications",
    ],
    note: "Screening supports a human decision; it does not make one. Final approval always sits with a reviewer in your team.",
  },
  {
    id: "comms",
    name: "Communications",
    icon: "mail",
    tagline: "Email, SMS and push — sent from the record, logged on it.",
    detail:
      "Communications adapters deliver the messages your journeys trigger: verification links, status updates, statements and reminders. Templates are configured in the studio, sends are logged against the client record, and delivery failures surface as exceptions instead of disappearing.",
    handles: [
      "Transactional email and SMS delivery",
      "Push notifications for mobile clients",
      "Template versioning and localisation",
      "Delivery status logged per message",
    ],
    note: "Marketing messages and transactional messages are kept separate, with their own consent and suppression handling.",
  },
  {
    id: "marketdata",
    name: "Market data & CRM",
    icon: "chart",
    tagline: "Prices and reference data, where your teams can use them.",
    detail:
      "Market-data adapters bring pricing and reference data into dashboards and client views, while CRM synchronisation keeps external sales and marketing tools in step with the BridgeX record. Feeds are monitored for staleness, so a dead feed is an alert — not a dashboard quietly showing yesterday's prices.",
    handles: [
      "Pricing and reference data feeds",
      "Staleness monitoring and feed alerts",
      "CRM record synchronisation",
      "Event-driven updates, not batch imports",
    ],
    note: "Market data is reference information for display and operations. It is not trading advice, and feed availability depends on the provider's terms.",
  },
];

/* ------------------------------------------------------------------ */
/* Analytics role views                                                */
/* ------------------------------------------------------------------ */

export const ANALYTICS_VIEWS: AnalyticsView[] = [
  {
    id: "executive",
    label: "Executive",
    icon: "building",
    headline: "The business, on one screen.",
    copy: "Growth, funding and partner health — the handful of numbers a leadership team actually discusses, drawn from the same records the teams work from.",
    kpis: [
      { label: "New clients (30 days)", value: "412", note: "Verified and approved" },
      { label: "Net funding (30 days)", value: "2.41M USD", note: "Deposits minus withdrawals" },
      { label: "Open exceptions", value: "7", note: "Across finance and compliance" },
      { label: "Partner payouts due", value: "23", note: "Approved, awaiting settlement" },
    ],
    funnel: [
      { label: "Leads", value: 100 },
      { label: "Registered", value: 64 },
      { label: "Verified", value: 41 },
      { label: "First funding", value: 27 },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    icon: "payments",
    headline: "Money in, money out, everything matched.",
    copy: "Deposits, withdrawals, provider balances and reconciliation breaks — with the exceptions queue front and centre, because matched payments need no attention and unmatched ones need it now.",
    kpis: [
      { label: "Deposits today", value: "86", note: "Across all providers" },
      { label: "Withdrawals awaiting approval", value: "14", note: "Oldest: 6 hours" },
      { label: "Reconciliation breaks", value: "3", note: "All under investigation" },
      { label: "Provider balance variance", value: "0.00 USD", note: "After today's matching run" },
    ],
    funnel: [
      { label: "Payment requests", value: 100 },
      { label: "Routed", value: 92 },
      { label: "Settled", value: 84 },
      { label: "Reconciled", value: 81 },
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    icon: "shield",
    headline: "What needs a human, and why.",
    copy: "Verification queues, screening flags and document expiry — ordered by risk and age, with the evidence attached to each item so a reviewer can decide without opening five screens.",
    kpis: [
      { label: "Applications in review", value: "29", note: "Median age: 1.4 days" },
      { label: "Screening flags", value: "5", note: "Awaiting reviewer decision" },
      { label: "Documents expiring (30 days)", value: "41", note: "Clients already notified" },
      { label: "Audit events (7 days)", value: "1,208", note: "Searchable and exportable" },
    ],
    funnel: [
      { label: "Applications", value: 100 },
      { label: "Documents complete", value: 78 },
      { label: "Checks passed", value: 66 },
      { label: "Approved", value: 58 },
    ],
  },
  {
    id: "sales",
    label: "Sales & Partners",
    icon: "ib",
    headline: "Where the pipeline actually stands.",
    copy: "Lead flow, desk activity and partner performance — so a sales lead can see which desks are converting, which partners are growing, and where follow-up has gone quiet.",
    kpis: [
      { label: "Active leads", value: "1,184", note: "Across 4 desks" },
      { label: "Contacted within SLA", value: "91%", note: "First contact, this week" },
      { label: "Top partner referrals", value: "57", note: "This month, all partners" },
      { label: "Stale leads (7+ days)", value: "63", note: "No activity — flagged for review" },
    ],
    funnel: [
      { label: "Leads", value: 100 },
      { label: "Contacted", value: 71 },
      { label: "Qualified", value: 38 },
      { label: "Converted", value: 19 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* BriX AI — governed assistance (live on bridgexapps.com, Nov 2026);  */
/* the four uses below stay illustrative scenarios.                    */
/* ------------------------------------------------------------------ */

export const AI_USES: AiUse[] = [
  {
    title: "Onboarding summary",
    icon: "onboarding",
    scenario:
      "A reviewer opens an application and sees a short, sourced summary: what the applicant submitted, what checks ran, and what is still outstanding — each line linked to the document or check it came from.",
    checkpoint: "The reviewer approves or rejects. The summary informs; it never decides.",
  },
  {
    title: "Document triage",
    icon: "document",
    scenario:
      "Uploaded documents are sorted and labelled — passport, proof of address, bank statement — and flagged when a page is unreadable or a document looks expired, so reviewers start with the problem cases.",
    checkpoint: "A human confirms the classification before any decision relies on it.",
  },
  {
    title: "Exception triage",
    icon: "audit",
    scenario:
      "When a payment or reconciliation exception appears, the assistant gathers the related records — the request, the provider event, the ledger entry — and drafts a plain-language explanation of what does not match.",
    checkpoint: "Finance staff verify the explanation against the source records before acting.",
  },
  {
    title: "Reconciliation support",
    icon: "payments",
    scenario:
      "For a batch of provider transactions, the assistant suggests likely matches to ledger entries and highlights the ambiguous ones — the ones where amounts or references are close but not identical.",
    checkpoint: "Matching is confirmed by a person. Nothing posts to the ledger automatically.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export const STUDIO_FAQS: FaqItem[] = [
  {
    question: "Can the studio really change the platform without code?",
    answer:
      "It changes configuration, not code: objects, fields, forms, workflows, journeys, templates, programs, reports and dashboards. Those changes are versioned, reviewed and published — but they cannot alter the underlying platform behaviour, permissions model or financial logic.",
  },
  {
    question: "What happens if a published workflow is wrong?",
    answer:
      "Configuration is versioned, so a previous version can be reviewed and restored. Cases already processed keep the version that ran, so the record of what happened stays accurate even after a fix is published.",
  },
  {
    question: "Who is allowed to publish changes?",
    answer:
      "Publishing is a permission, separate from drafting. A typical setup lets operations staff draft and test, while only a designated reviewer can publish to live — and every publish is logged with who approved it.",
  },
  {
    question: "Can we test a journey before clients see it?",
    answer:
      "Yes. Journeys, forms and workflows are built and reviewed in a non-production environment first, and changes are promoted deliberately. Clients only ever see published versions.",
  },
  {
    question: "Is the builder preview on this page the real product?",
    answer:
      "No — the preview on this page is a simulated illustration, clearly labelled as a demo. It shows the shape of a builder screen, not a working editor. A live demonstration on your own workflows is available through a private demo.",
  },
];

export const INTEGRATIONS_FAQS: FaqItem[] = [
  {
    question: "Which providers are integrated today?",
    answer:
      "For trading platforms, the published connection list is MT4, MT5, DXTrade, Match Trader, TradeLocker, Vertex and cTrader (bridgexapps.com, November 2026). Beyond that, an integration is only real once it has been configured and tested for a specific deployment, so other providers are named only once their adapter is built, tested and signed off. What we describe here are the provider categories the adapter architecture supports — trading platforms, payment providers, KYC and AML, communications and market data — and the process each connection goes through before it goes live.",
  },
  {
    question: "What happens when a provider's webhook fails?",
    answer:
      "Delivery is retried on a schedule with backoff, and each attempt is recorded. If delivery keeps failing, the event lands in a dead-letter queue with the full payload and the error, so an operator can inspect and replay it rather than losing the update.",
  },
  {
    question: "Can we connect a provider that is not listed anywhere?",
    answer:
      "The adapter model is designed for that: a new provider is a new adapter against a defined contract, built and tested in a sandbox before it touches production data. Whether a specific provider can be connected depends on its own API and terms, which we assess during implementation.",
  },
  {
    question: "Do integrations get tested before going live?",
    answer:
      "Yes — sandbox-first is the rule. A connection is configured, exercised against the provider's test environment where one exists, and reconciled before it is enabled for live records. No integration is presented as live until that process has passed.",
  },
  {
    question: "How do we know a feed has gone stale?",
    answer:
      "Feeds are monitored for staleness: if expected data stops arriving, the integration raises an alert and affected views show the age of the last good data instead of silently presenting old figures as current.",
  },
];

export const ANALYTICS_FAQS: FaqItem[] = [
  {
    question: "Where do the numbers on the dashboards come from?",
    answer:
      "From the same operational records your teams work with — clients, accounts, payments, cases and commissions. There is no separate reporting copy to drift out of sync, so the number in a dashboard and the number in a queue agree.",
  },
  {
    question: "Can different roles see different dashboards?",
    answer:
      "Yes. Dashboards and reports are published per role: executives, finance, compliance and sales each get views built for their job, and permissions still apply — a role only sees the records it is allowed to see.",
  },
  {
    question: "What is an exception queue?",
    answer:
      "A queue of items that need a human because something did not match, complete or reconcile — a payment that failed to match the ledger, a document that expired, a screening flag. Each exception carries the related records and the reason it was raised.",
  },
  {
    question: "Can we export data for our own analysis?",
    answer:
      "Yes. Reports and dashboards support exports in standard formats, and exports are themselves logged — who exported what, and when — so data leaving the platform is accounted for.",
  },
  {
    question: "Are the figures on this page real?",
    answer:
      "No. Every figure in the previews on this page is illustrative sample data, clearly labelled as such. They show the shape of the dashboards, not the performance of any real business.",
  },
];

export const AI_FAQS: FaqItem[] = [
  {
    question: "Is AI assistance available on BridgeX today?",
    answer:
      "Yes — BriX AI is the AI layer of the BridgeX suite, available on bridgexapps.com from $49 per month (Starter $49, Growth $99, Scale $199, Scale Plus $299). It is governed the way everything in BridgeX is: human approval, evidence behind every suggestion, role-limited context. The four uses on this page are illustrative scenarios of how governed assistance works.",
  },
  {
    question: "Will AI ever approve a client or a payment on its own?",
    answer:
      "No. That is a design rule, not a setting. AI assistance drafts, summarises and suggests; a person decides. Approvals for onboarding, payments and payouts always require a human with the right permission.",
  },
  {
    question: "What data can the AI see?",
    answer:
      "Only the records the requesting user is already permitted to see. Role-limited context is part of the design: the assistant cannot reach across roles, tenants or permissions to gather information a user could not open themselves.",
  },
  {
    question: "How do we know what the AI based a suggestion on?",
    answer:
      "Every suggestion carries its evidence — links to the documents, records or events it drew on — so a reviewer can check the sources instead of trusting a summary. A suggestion without traceable evidence is not a usable suggestion.",
  },
  {
    question: "How is BriX AI priced?",
    answer:
      "BriX AI runs from $49 per month (Starter) to $299 per month (Scale Plus), with Growth at $99 and Scale at $199. See the Pricing page for the full breakdown alongside the Forex suite tiers.",
  },
];
