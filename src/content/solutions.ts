/**
 * Solution page content — typed copy for the seven solution routes
 * (spec §7). Pages stay lean; this file holds the words.
 *
 * All copy is original BridgeX material. No clients, certifications,
 * awards, offices, stats, integrations or pricing are claimed here.
 * Comparison rows describe generic alternatives (spreadsheets, generic
 * tools, disconnected point products) — never a named competitor.
 */
import type { IconName } from "@/components/icons";
import type { FaqItem } from "@/components/ui/FaqAccordion";

export interface SolutionImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position for the hero crop — set when the subject is
   * not centred in the frame (e.g. a portrait trophy whose cup sits
   * high). Defaults to "50% 50%" in HeroMedia. */
  objectPosition?: string;
}

export interface CopyBlock {
  title: string;
  copy: string;
}

export interface CapabilityGroup {
  title: string;
  intro: string;
  items: CopyBlock[];
}

export interface WorkflowStep {
  title: string;
  copy: string;
}

export interface ComparisonRow {
  aspect: string;
  bridgex: string;
  typical: string;
}

export interface RelatedLink {
  href: string;
  label: string;
}

export interface SolutionContent {
  slug: string;
  href: string;
  label: string;
  icon: IconName;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  /** Headline split: `heroHeadline` in sans, `heroAccent` in teal gradient. */
  heroHeadline: string;
  heroAccent: string;
  heroIntro: string;
  /** Full-bleed hero photograph (HeroMedia). Required — every solution hero is photographic. */
  heroImage: SolutionImage;
  /** Always true: every solution hero is a dark photographic hero (coordinator mirrors this in DARK_HERO_ROUTES). */
  darkHero: boolean;
  /** Honest status note shown under the hero (e.g. concept / in development). */
  notice?: string;
  problemLabel: string;
  problemHeading: string;
  problemCopy: string;
  pains: CopyBlock[];
  previewLabel: string;
  previewHeading: string;
  previewCopy: string;
  capabilitiesLabel: string;
  capabilitiesHeading: string;
  capabilitiesCopy: string;
  capabilityGroups: CapabilityGroup[];
  workflowLabel: string;
  workflowHeading: string;
  workflowCopy: string;
  workflowSteps: WorkflowStep[];
  benefitsLabel: string;
  benefitsHeading: string;
  benefits: CopyBlock[];
  useCasesLabel: string;
  useCasesHeading: string;
  useCasesCopy: string;
  useCases: (CopyBlock & { href: string })[];
  securityHeading: string;
  securityCopy: string;
  securityItems: CopyBlock[];
  integrationsHeading: string;
  integrationsCopy: string;
  integrations: CopyBlock[];
  comparisonHeading: string;
  comparisonCopy: string;
  comparisonRows: ComparisonRow[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaCopy: string;
  related: RelatedLink[];
}

export const SOLUTIONS: Record<string, SolutionContent> = {
  "financial-crm": {
    slug: "financial-crm",
    href: "/solutions/financial-crm",
    label: "Financial CRM",
    icon: "crm",
    eyebrow: "Solutions · Financial CRM",
    metaTitle: "Financial CRM for Brokerages",
    metaDescription:
      "Leads, contact 360, pipelines, cases and audit-ready records in one CRM built for financial businesses — individual and corporate clients, desks and roles included.",
    heroHeadline: "Every client relationship,",
    heroAccent: "in one clear view.",
    heroIntro:
      "BridgeX Financial CRM keeps leads, contacts, accounts, conversations and cases in one place — so sales, support and compliance stop working from different versions of the truth.",
    heroImage: { src: "/images/solutions-crm-hero.jpg", alt: "Dark trading monitors showing candlestick charts with trend lines", width: 1920, height: 1282, objectPosition: "50% 0%" },
    darkHero: true,
    problemLabel: "The problem",
    problemHeading: "Growth outruns the spreadsheet — then the spreadsheet fights back",
    problemCopy:
      "A brokerage's client base grows faster than its tooling. Leads land in inboxes, client history lives in chat threads, and nobody can say with confidence who owns a relationship — or what was promised to them.",
    pains: [
      { title: "Leads with no owner", copy: "Enquiries arrive from the website, events and partners, then sit unassigned — or get chased by two desks at once." },
      { title: "No single client view", copy: "Accounts, documents, tickets and calls are scattered across tools, so every conversation starts from zero." },
      { title: "Duplicates everywhere", copy: "The same person appears three times under three spellings, and reporting quietly double-counts them." },
      { title: "Nothing is auditable", copy: "When a client disputes what was said, there is no reliable record of who changed what, and when." },
    ],
    previewLabel: "See it working",
    previewHeading: "The working day, in three views",
    previewCopy:
      "A lead list you can filter, a pipeline you can read at a glance, and a contact record that holds the whole relationship. All sample data — your business would look like yours.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "Built around how a financial business actually sells and serves",
    capabilitiesCopy:
      "The CRM models the relationships a brokerage really has — people, companies, accounts, desks and cases — instead of forcing them into a generic sales tool.",
    capabilityGroups: [
      {
        title: "Leads & pipelines",
        intro: "From first enquiry to funded client, with ownership at every step.",
        items: [
          { title: "Lead capture & pipelines", copy: "Leads from every channel land in configurable pipelines with stages, owners and next actions." },
          { title: "Country & desk routing", copy: "Route by country, language, product or desk, so the right team picks up every lead." },
          { title: "Duplicate management", copy: "Matching rules flag likely duplicates at capture, and merge keeps one clean record with full history." },
          { title: "Ownership & reassignment", copy: "Clear owners, cover rules and reassignment history — no lead is ever nobody's job." },
        ],
      },
      {
        title: "Contact 360",
        intro: "One record per relationship, holding everything the team needs.",
        items: [
          { title: "Individual & corporate entities", copy: "People and companies as first-class records, linked through roles — director, trader, authorised contact, beneficiary." },
          { title: "Activities, notes & tasks", copy: "Calls, emails, meetings and follow-ups on a single timeline, with tasks that carry owners and due dates." },
          { title: "Documents & account links", copy: "Documents sit on the contact, and trading accounts link straight through to the platforms behind them." },
          { title: "Support cases", copy: "Client cases open against the contact, so support sees the relationship — not just the ticket." },
        ],
      },
      {
        title: "Control & insight",
        intro: "Configurable where it should be, controlled where it must be.",
        items: [
          { title: "Custom fields & objects", copy: "Add the fields and record types your business needs, without waiting for a development cycle." },
          { title: "KYC & suitability flags", copy: "Verification and suitability status visible on the record, driving what the team can and cannot do next." },
          { title: "Role- & field-level access", copy: "Permissions down to the field: who sees a document, who edits a status, who sees nothing at all." },
          { title: "Audit history & reporting", copy: "Every change logged with who and when, and reporting that draws on the same single source." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "From enquiry to long-term client",
    workflowCopy: "Six stages, one record, no re-keying — the lead becomes the contact, and the contact keeps its whole history.",
    workflowSteps: [
      { title: "Capture", copy: "Leads arrive from web, events, partners and referrals, deduplicated on entry." },
      { title: "Route", copy: "Country, language and product rules send each lead to the right desk and owner." },
      { title: "Qualify", copy: "Calls, notes and tasks build the picture; suitability and KYC flags appear early." },
      { title: "Convert", copy: "The lead becomes a contact, linked to accounts — history intact, nothing re-typed." },
      { title: "Serve", copy: "Cases, documents and activities accumulate on the same 360 record." },
      { title: "Report", copy: "Pipeline, conversion and desk activity reported from the same clean data." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "What changes when the record is right",
    benefits: [
      { title: "One source of truth", copy: "Sales, support and compliance read the same record, so the client gets one coherent experience." },
      { title: "Faster first response", copy: "Routing and ownership mean leads reach a person quickly, instead of ageing in a shared inbox." },
      { title: "Cleaner data, better decisions", copy: "Deduplication and structured fields make pipeline and conversion reporting worth trusting." },
      { title: "Corporate relationships, modelled properly", copy: "Companies, directors and beneficiaries linked as they really relate — not flattened into notes." },
      { title: "Access that matches responsibility", copy: "Field-level permissions keep sensitive data with the roles that need it, and away from those that don't." },
      { title: "An answer for every question", copy: "Audit history means disputes, handovers and reviews start from evidence, not memory." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where the CRM earns its place",
    useCasesCopy: "The same core, shaped around the relationships each business actually manages.",
    useCases: [
      { title: "Multi-asset brokers", copy: "Lead desks, trader lifecycle and support cases on one record, from first click to funded account.", href: "/industries/multi-asset-brokers" },
      { title: "Banks", copy: "Branch and relationship-manager coordination, with onboarding for existing clients handled in the same place.", href: "/industries/banks" },
      { title: "Wealth management", copy: "Advisor workspaces with suitability flags and household views, built for long relationships.", href: "/industries/wealth-management" },
    ],
    securityHeading: "Access, audit and control",
    securityCopy: "A CRM holds the business's most sensitive relationships. BridgeX treats access as a design decision, not an afterthought.",
    securityItems: [
      { title: "Role- & field-level permissions", copy: "Read, edit and export rights set per role, down to individual fields." },
      { title: "Full audit history", copy: "Creates, edits, merges and deletions logged with user, time and before/after values." },
      { title: "Tenant separation", copy: "Each organisation's data is isolated by design in the shared platform foundation." },
      { title: "KYC-driven gating", copy: "Verification and suitability flags can restrict actions until the record is ready." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "The CRM is the hub other BridgeX capabilities plug into — and it talks to the systems around it through adapters, not copy-paste.",
    integrations: [
      { title: "Trading platforms", copy: "Account links connect the contact to their trading accounts and activity." },
      { title: "KYC & verification", copy: "Verification status flows back onto the record from the onboarding journey." },
      { title: "Payments", copy: "Funding activity visible alongside the relationship, with approvals in the finance flow." },
      { title: "Communications", copy: "Email and messaging activity captured on the timeline automatically." },
      { title: "Analytics", copy: "Pipeline, conversion and desk reporting drawn from the same live data." },
    ],
    comparisonHeading: "BridgeX CRM vs. the usual alternatives",
    comparisonCopy: "Generic CRMs and spreadsheets can hold names. The difference is what a financial business needs around the names.",
    comparisonRows: [
      { aspect: "Client view", bridgex: "Contact 360: people, companies, accounts, documents and cases on one record", typical: "A contact card, with the rest in other tools or notes" },
      { aspect: "Duplicates", bridgex: "Matching rules at capture plus merge with full history retained", typical: "Duplicates found by accident, merged by hand" },
      { aspect: "Access control", bridgex: "Role- and field-level permissions across the whole record", typical: "All-or-nothing access, or none at all" },
      { aspect: "Audit trail", bridgex: "Every change logged with who, when and before/after values", typical: "No reliable record of who changed what" },
      { aspect: "Financial context", bridgex: "KYC flags, suitability and account links built into the record", typical: "Bolted on with custom fields and hope" },
    ],
    faqs: [
      { question: "Can we migrate from spreadsheets or a generic CRM?", answer: "Yes. Migration is a staged exercise: source data is mapped to BridgeX objects, deduplicated, and validated in a staging pass before anything goes live. The integration and migration service covers the planning, and reconciliation checks confirm nothing was lost in the move." },
      { question: "How are corporate clients and their people modelled?", answer: "Companies are first-class records, linked to people through roles such as director, authorised contact or beneficiary owner. A person can hold different roles at different companies, and each link carries its own permissions and history." },
      { question: "Can we add our own fields and record types?", answer: "Yes. Custom fields and custom objects are part of the design, configured through the platform rather than by code changes — so a new product line or a new compliance requirement does not mean a development project." },
      { question: "Who can see what?", answer: "Access is role-based and field-level. A sales user might see contact details and pipeline stage but not documents or KYC outcomes; a compliance user sees the reverse. Every permission is explicit, and changes to it are audited." },
      { question: "What reporting is available?", answer: "Pipeline and conversion by desk, source and stage; activity and response measures; and case volumes — all drawn from the same records the team works in, so reports and reality agree." },
    ],
    ctaHeading: "See your client base clearly.",
    ctaCopy: "Book a private demo and watch a lead travel from enquiry to funded account — on workflows shaped around your business.",
    related: [
      { href: "/solutions/digital-onboarding", label: "Digital Onboarding & KYC" },
      { href: "/solutions/ib-incentives", label: "IB & Incentive Management" },
      { href: "/platform/financial-operations", label: "Financial Operations" },
    ],
  },

  "payment-orchestration": {
    slug: "payment-orchestration",
    href: "/solutions/payment-orchestration",
    label: "Payment Orchestration",
    icon: "payments",
    eyebrow: "Solutions · Payment Orchestration",
    metaTitle: "Payment Orchestration for Brokerages",
    metaDescription:
      "Provider-agnostic payment routing, cascading retry, approval flows and three-way reconciliation — deposits and withdrawals without single-provider dependence.",
    heroHeadline: "Money in, money out,",
    heroAccent: "without the guesswork.",
    heroIntro:
      "BridgeX Payment Orchestration routes deposits and withdrawals across your providers, retries intelligently when a route fails, and reconciles every movement — so funding stops being a support ticket.",
    heroImage: { src: "/images/solutions-payments.jpg", alt: "Hand holding a phone with a trading chart in front of a laptop with market screens", width: 1920, height: 1213 },
    darkHero: true,
    problemLabel: "The problem",
    problemHeading: "One provider, one point of failure",
    problemCopy:
      "When deposits run through a single gateway, every outage is your outage. Clients see failed payments, support sees the queue, and finance spends the week matching statements by hand.",
    pains: [
      { title: "Declines with no second chance", copy: "A failed card attempt ends the journey — even when another route would have succeeded." },
      { title: "No visibility into a payment", copy: "Clients ask where their money is, and the honest answer is a shrug and a support ticket." },
      { title: "Manual reconciliation", copy: "PSP statements, CRM records and platform balances matched in spreadsheets, days after the fact." },
      { title: "Withdrawals without control", copy: "Payouts approved by email thread, with no consistent record of who approved what." },
    ],
    previewLabel: "See it working",
    previewHeading: "Follow one payment, end to end",
    previewCopy:
      "Pick a method and watch the route get chosen, the attempt traced, and a decline retried through the next provider. Illustrative transaction only — this preview never moves real funds.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "Routing, resilience and reconciliation — by design",
    capabilitiesCopy:
      "Orchestration means the business decides how money should move, and the system carries it out the same way every time — with a trace to prove it.",
    capabilityGroups: [
      {
        title: "Routing",
        intro: "The right provider for each payment, chosen by rule — not by habit.",
        items: [
          { title: "Provider-agnostic routing", copy: "Payment providers plug in behind one abstraction, so no single provider owns your funding." },
          { title: "Method categories", copy: "Cards, bank transfers and alternative methods, each with its own rules and availability." },
          { title: "Priority & weighted routing", copy: "Order providers by preference, or split volume by weight across several at once." },
          { title: "Restrictions", copy: "Country, currency, amount and client-profile rules decide which routes a payment may use." },
        ],
      },
      {
        title: "Resilience",
        intro: "A decline is a detour, not a dead end.",
        items: [
          { title: "Cascading retry", copy: "After a decline, the payment automatically retries through the next eligible provider — within limits you set." },
          { title: "Payment status trace", copy: "Every attempt, response and state change on one timeline, visible to support and finance." },
          { title: "Gateway failover", copy: "Provider outages shift traffic to healthy routes instead of failing every payment in the queue." },
          { title: "Idempotent processing", copy: "Retries and duplicate webhooks cannot double-charge or double-credit a payment." },
        ],
      },
      {
        title: "Money flows & control",
        intro: "Deposits and withdrawals with approval, matching and evidence.",
        items: [
          { title: "Deposits & withdrawals", copy: "Both directions through the same routing and tracing, with approval steps on withdrawals." },
          { title: "Three-way reconciliation", copy: "Provider records matched against CRM transactions and trading-platform balances." },
          { title: "Exception queue", copy: "Unmatched or unusual items land in a queue with context — not in a spreadsheet at month end." },
          { title: "Reporting & exports", copy: "Volumes, success rates and settlement reports, exportable for finance and audit." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "One payment, six checkpoints",
    workflowCopy: "Every movement follows the same path, whether it is a first deposit or a withdrawal after approval.",
    workflowSteps: [
      { title: "Request", copy: "The client requests a deposit or withdrawal; restrictions check country, currency, amount and profile." },
      { title: "Route", copy: "Priority or weighted rules select the provider and method for this payment." },
      { title: "Attempt", copy: "The payment is attempted; a decline cascades to the next eligible route." },
      { title: "Confirm", copy: "Provider confirmation is matched to the request, and the status trace is updated." },
      { title: "Approve", copy: "Withdrawals pass the approval step before release; deposits credit on confirmation." },
      { title: "Reconcile", copy: "Provider, CRM and platform records are matched; exceptions queue for review." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "Funding that behaves like infrastructure",
    benefits: [
      { title: "Higher completion, fewer lost deposits", copy: "Cascading retry gives a declined payment another route instead of another lost client." },
      { title: "No single-provider dependence", copy: "Providers are interchangeable behind one abstraction, so an outage or a contract change is not a crisis." },
      { title: "Answers in seconds, not tickets", copy: "The status trace shows support exactly where a payment is, and what happened at each step." },
      { title: "Controlled withdrawals", copy: "Approval steps and an audit trail on every payout, instead of decisions made in email." },
      { title: "Reconciliation without the spreadsheet", copy: "Three-way matching runs continuously, and only the exceptions need a human." },
      { title: "Rules the business can change", copy: "Routing weights, restrictions and retry limits are configuration, not code releases." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where orchestration pays for itself",
    useCasesCopy: "Any business that takes client money in and sends it back out faces the same routing, retry and matching problems.",
    useCases: [
      { title: "Multi-asset brokers", copy: "Deposits across cards, banks and alternative methods, with withdrawals approved and traced.", href: "/industries/multi-asset-brokers" },
      { title: "Prop trading firms", copy: "Challenge fees in, profit-share payouts out — each with its own approval and reconciliation path.", href: "/industries/prop-firms" },
      { title: "Digital asset firms", copy: "Fiat on- and off-ramp flows with provider routing and exception handling across jurisdictions.", href: "/industries/digital-assets" },
    ],
    securityHeading: "Money movement, handled carefully",
    securityCopy: "BridgeX never stores raw card data. Payments run through provider-hosted flows, and every financial action carries approval and audit.",
    securityItems: [
      { title: "No card data stored", copy: "Card details stay with the payment provider, in provider-hosted flows built for that purpose." },
      { title: "Approval on withdrawals", copy: "Payouts require approval before release, with the approver and the decision recorded." },
      { title: "Signed webhooks & idempotency", copy: "Provider callbacks are verified, and duplicate events cannot move money twice." },
      { title: "Full audit trail", copy: "Every routing decision, attempt, approval and reconciliation action is logged." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "Orchestration sits between your providers and the rest of BridgeX — the CRM, the trading platforms and finance all see the same payment record.",
    integrations: [
      { title: "Payment providers", copy: "Providers connect through adapters behind one routing abstraction; contracts are yours, with each provider." },
      { title: "Trading platforms", copy: "Confirmed deposits credit to the right account, and withdrawals check the platform balance first." },
      { title: "Financial CRM", copy: "Funding history lives on the contact record, visible to sales and support." },
      { title: "Finance & reporting", copy: "Settlement and volume data exports for accounting, reconciliation and audit." },
    ],
    comparisonHeading: "Orchestration vs. a single gateway",
    comparisonCopy: "A gateway moves money. Orchestration decides how money should move — and proves that it did.",
    comparisonRows: [
      { aspect: "Provider dependence", bridgex: "Provider-agnostic: routes can change without rebuilding the flow", typical: "One gateway wired into the product; switching is a project" },
      { aspect: "Declines", bridgex: "Cascading retry through the next eligible provider, automatically", typical: "A decline ends the payment — the client tries again, or leaves" },
      { aspect: "Visibility", bridgex: "Full status trace per payment, visible to support and finance", typical: "Provider dashboards and guesswork" },
      { aspect: "Withdrawals", bridgex: "Approval steps with a recorded decision on every payout", typical: "Manual approval by email or chat" },
      { aspect: "Reconciliation", bridgex: "Three-way matching with an exception queue", typical: "Month-end spreadsheet matching" },
    ],
    faqs: [
      { question: "Does BridgeX process real payments?", answer: "BridgeX orchestrates payments through your own contracted payment providers. It never holds client funds and never stores raw card data; card entry happens in provider-hosted flows. Production use requires certified provider integrations, which are set up during implementation." },
      { question: "Which payment providers are supported?", answer: "The design is provider-agnostic: providers connect through adapters behind one routing abstraction. We do not publish a list of named providers, because availability depends on your contracts, jurisdictions and the adapters in scope for your deployment — your implementation plan names them explicitly." },
      { question: "How does cascading retry work?", answer: "When a payment is declined, the rules engine retries it through the next eligible provider in the cascade, within limits you configure — maximum attempts, eligible methods and amount thresholds. Every attempt is traced, so a retried payment is fully visible, not a mystery." },
      { question: "What does three-way reconciliation match?", answer: "Provider settlement records, BridgeX payment transactions and trading-platform balances. Items that match clear automatically; anything unmatched — a late settlement, a partial amount, a missing confirmation — lands in the exception queue with the context needed to resolve it." },
      { question: "Can withdrawals require approval?", answer: "Yes. Withdrawal flows include approval steps, and payouts are only released once approved. The approver, the decision and the timing are all recorded in the audit trail." },
    ],
    ctaHeading: "Make funding boring — in the best way.",
    ctaCopy: "Book a private demo and follow a payment through routing, retry and reconciliation on workflows shaped around your business.",
    related: [
      { href: "/solutions/financial-crm", label: "Financial CRM" },
      { href: "/solutions/ib-incentives", label: "IB & Incentive Management" },
      { href: "/platform/financial-operations", label: "Financial Operations" },
    ],
  },
  "pamm-copy-trading": {
    slug: "pamm-copy-trading",
    href: "/solutions/pamm-copy-trading",
    label: "PAMM & Copy Trading",
    icon: "pamm",
    eyebrow: "Solutions · PAMM & Copy Trading",
    metaTitle: "PAMM & Copy Trading",
    metaDescription:
      "Strategy discovery, investor subscriptions, allocation and high-water-mark fee logic — the PAMM and copy-trading design, with transparency built in.",
    heroHeadline: "Strategies investors can follow,",
    heroAccent: "with the maths visible.",
    heroIntro:
      "BridgeX PAMM & Copy Trading connects strategy managers with investors — subscriptions, allocation, risk settings and fee logic in one place, with every figure traceable to its source.",
    heroImage: { src: "/images/pamm-hero.jpg", alt: "Trading monitors showing candlestick charts in a dark office", width: 1600, height: 1067, objectPosition: "50% 50%" },
    darkHero: true,
    notice:
      "PAMM and copy-trading engines are in active development. The preview below demonstrates the intended experience with illustrative data — it is not a live trading system, and no performance figures here are real.",
    problemLabel: "The problem",
    problemHeading: "Managed strategies run on trust — and trust needs evidence",
    problemCopy:
      "Investors follow a strategy because they believe in it. But when fees, allocations and performance live in separate spreadsheets, belief is all they have — and the first dispute costs the relationship.",
    pains: [
      { title: "Fees nobody can verify", copy: "Performance fees calculated off-platform leave investors taking the number on faith." },
      { title: "Allocation by hand", copy: "Investor shares worked out in spreadsheets, with rounding differences nobody can explain." },
      { title: "Risk settings that drift", copy: "A follower's limits set once and never revisited, while the strategy and the market both move on." },
      { title: "No clear exit", copy: "Unsubscribing means emails, manual settlement and arguments about the final balance." },
    ],
    previewLabel: "See it working",
    previewHeading: "Discover, subscribe, understand the fee",
    previewCopy:
      "Browse illustrative strategies, open one to see its performance, and try the high-water-mark fee calculator — the same arithmetic the fee engine applies, shown step by step.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "The whole lifecycle, manager to investor",
    capabilitiesCopy:
      "Discovery, subscription, allocation, fees and settlement — each step defined, logged and visible to the people it affects.",
    capabilityGroups: [
      {
        title: "Discovery & subscription",
        intro: "Investors find strategies they understand, and join them deliberately.",
        items: [
          { title: "Strategy discovery", copy: "A catalogue of manager strategies with performance history, risk profile and participation terms." },
          { title: "Investor subscriptions", copy: "Subscribe with an allocation amount, minimum and maximum participation, and clear terms." },
          { title: "Performance dashboard", copy: "Strategy and investor views of returns, drawdown and fees — the same underlying figures, both sides." },
          { title: "Copy-mode risk settings", copy: "Followers set their own limits: proportional or fixed sizing, maximum exposure and stop conditions." },
        ],
      },
      {
        title: "Fees & allocation",
        intro: "Fee logic that can be shown, not just stated.",
        items: [
          { title: "High-water-mark fees", copy: "Performance fees charged only on new profit above the previous peak — the watermark is visible, not hidden." },
          { title: "Performance & management fees", copy: "Both fee types modelled, scheduled and reported per investor and per period." },
          { title: "Investor allocation", copy: "Capital allocated across strategies with per-investor balances and share tracking." },
          { title: "Unsubscribe & settlement", copy: "A defined exit: positions settled, fees calculated to the exit date, balance returned with a statement." },
        ],
      },
      {
        title: "Execution & oversight",
        intro: "Keeping follower accounts in step with the strategy — and proving it.",
        items: [
          { title: "Position synchronisation", copy: "Follower positions mirror the strategy through the platform adapter, with sync state visible." },
          { title: "Rounding & drift monitoring", copy: "Rounding differences and drift from the master strategy are measured and reported, not ignored." },
          { title: "Netting vs hedging", copy: "Position handling follows the account model — netting or hedging — as configured for each setup." },
          { title: "Audit & transparency", copy: "Subscriptions, allocations, fees and settlements all logged, with investor-facing statements." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "From discovery to settlement",
    workflowCopy: "An investor's journey through a strategy, with the fee and the exit defined before the first trade is copied.",
    workflowSteps: [
      { title: "Discover", copy: "The investor browses strategies, compares performance and risk, and reads the terms." },
      { title: "Subscribe", copy: "An allocation is committed, with participation limits and copy-mode risk settings." },
      { title: "Allocate", copy: "Capital is allocated and positions begin synchronising with the strategy." },
      { title: "Follow", copy: "Trades mirror to the investor account; drift and rounding are monitored continuously." },
      { title: "Settle fees", copy: "Fees are calculated against the high-water mark and reported per period." },
      { title: "Exit", copy: "Unsubscribe settles positions and fees, and returns the balance with a statement." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "Trust, built on arithmetic",
    benefits: [
      { title: "Fees investors can check", copy: "High-water-mark logic shown step by step, so a fee is a calculation — not a claim." },
      { title: "Risk settings that belong to the investor", copy: "Followers set their own limits instead of inheriting the manager's appetite wholesale." },
      { title: "Allocation without the spreadsheet", copy: "Shares, balances and settlements computed in the system, with a record behind every number." },
      { title: "Drift you can see", copy: "Synchronisation state, rounding and drift monitored and reported, so divergence is found early." },
      { title: "A clean exit", copy: "Unsubscribe and settlement follow a defined flow, with a statement that closes the relationship properly." },
      { title: "Transparency for both sides", copy: "Managers and investors read the same figures, so conversations start from agreement." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where managed strategies fit",
    useCasesCopy: "PAMM and copy trading serve different audiences — the mechanics of trust are the same in each.",
    useCases: [
      { title: "Asset & fund managers", copy: "Subscription workflows and investor statements for pooled strategies, with fee logic to match.", href: "/industries/asset-fund-managers" },
      { title: "Wealth management", copy: "Advisors offer managed strategies with suitability-aware allocation and clear investor reporting.", href: "/industries/wealth-management" },
      { title: "Multi-asset brokers", copy: "A strategy catalogue that turns experienced traders into a product, and followers into funded clients.", href: "/industries/multi-asset-brokers" },
    ],
    securityHeading: "Controls around other people's money",
    securityCopy: "Copy trading moves real positions on real accounts. Limits, approvals and audit are part of the design — not added later.",
    securityItems: [
      { title: "Investor risk limits", copy: "Per-investor exposure caps, sizing rules and stop conditions enforced at the follower level." },
      { title: "Separation of roles", copy: "Managers manage strategies; they never touch investor accounts or fee configuration." },
      { title: "Fee audit trail", copy: "Every fee calculation keeps its inputs — watermark, period, rate — so it can be re-derived." },
      { title: "Settlement records", copy: "Subscriptions, exits and settlements logged with balances and statements." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "The trading platform is where positions live; BridgeX is where the relationship, the allocation and the fee live. Adapters connect the two.",
    integrations: [
      { title: "Trading platforms", copy: "Position synchronisation through platform adapters, per account model — netting or hedging." },
      { title: "Financial CRM", copy: "Investor and manager records, subscriptions and suitability held on the contact." },
      { title: "Payments", copy: "Fee settlement and balance movements flow through the orchestration and approval path." },
      { title: "Analytics", copy: "Strategy performance, assets under management and fee reporting from the same data." },
    ],
    comparisonHeading: "BridgeX PAMM vs. the usual alternatives",
    comparisonCopy: "Managed strategies are often run on spreadsheets and trust. The difference is what happens when someone asks to see the working.",
    comparisonRows: [
      { aspect: "Fee transparency", bridgex: "High-water-mark logic visible step by step, re-derivable from logged inputs", typical: "A fee figure in a statement, with the working elsewhere — or nowhere" },
      { aspect: "Risk control", bridgex: "Investor-set limits enforced at the follower level", typical: "One risk profile for everyone, or none at all" },
      { aspect: "Synchronisation", bridgex: "Sync state, rounding and drift monitored and reported", typical: "Divergence discovered by the investor, after the fact" },
      { aspect: "Exit", bridgex: "Defined unsubscribe and settlement flow with a closing statement", typical: "Manual unwinding by email" },
      { aspect: "Audit", bridgex: "Subscriptions, allocations, fees and settlements all logged", typical: "Records scattered across chats and spreadsheets" },
    ],
    faqs: [
      { question: "What is a high-water mark, in plain terms?", answer: "It is the highest value an investor's allocation has reached. A performance fee is charged only on profit above that peak — so if the strategy falls and recovers, the investor is not charged twice for the same ground. The watermark, the period and the rate are all recorded with each fee calculation." },
      { question: "What is the difference between netting and hedging here?", answer: "Netting merges opposing positions in the same instrument into one net position; hedging keeps them as separate open positions. Which model applies depends on the account and platform configuration, and the copy engine follows it — the investor's positions behave the way their account is set up to behave." },
      { question: "Can an investor limit their risk when copying?", answer: "Yes. Copy-mode settings include proportional or fixed sizing, maximum exposure and stop conditions, set by the investor at subscription and changeable afterwards. The settings are enforced at the follower level, independently of the manager's own trading." },
      { question: "Is the PAMM engine live today?", answer: "No. PAMM and copy-trading engines are in active development, and the preview on this page demonstrates the intended experience with illustrative data. Production use requires the trading-platform adapters, fee reconciliation and acceptance testing described in the implementation plan — we do not present the preview as a working trading system." },
      { question: "How does an investor leave a strategy?", answer: "Unsubscribing follows a defined settlement flow: open positions are settled, fees are calculated to the exit date against the high-water mark, and the remaining balance is returned with a statement. The whole exit is logged." },
    ],
    ctaHeading: "Show investors the working.",
    ctaCopy: "Book a private demo and walk through strategy discovery, allocation and high-water-mark fees on workflows shaped around your business.",
    related: [
      { href: "/solutions/financial-crm", label: "Financial CRM" },
      { href: "/solutions/tradeops", label: "TradeOps Control Center" },
      { href: "/platform/financial-operations", label: "Financial Operations" },
    ],
  },

  "ib-incentives": {
    slug: "ib-incentives",
    href: "/solutions/ib-incentives",
    label: "IB & Incentive Management",
    icon: "ib",
    eyebrow: "Solutions · IB & Incentive Management",
    metaTitle: "IB & Incentive Management",
    metaDescription:
      "Partner hierarchies, referral attribution, rebate programs and a commission ledger that traces every payout to its source trades.",
    heroHeadline: "Partners who trust the numbers,",
    heroAccent: "grow with you.",
    heroIntro:
      "BridgeX IB & Incentive Management runs the whole partner lifecycle — registration, attribution, multi-tier rebates, a commission ledger and payouts — with a source-to-payout audit trail behind every figure.",
    heroImage: { src: "/images/solutions-ib-hero.jpg", alt: "Diagonal candlestick chart with volume bars on a dark trading screen", width: 1920, height: 1280, objectPosition: "50% 50%" },
    darkHero: true,
    problemLabel: "The problem",
    problemHeading: "Partner growth stalls when the numbers are argued about",
    problemCopy:
      "Introducing brokers bring clients — then spend their energy chasing commission statements. When attribution is unclear and the ledger lives in a spreadsheet, every payout becomes a negotiation.",
    pains: [
      { title: "Attribution arguments", copy: "Two partners claim the same client, and there is no rule — or record — to settle it." },
      { title: "Spreadsheets as the ledger", copy: "Commissions calculated by hand, adjusted by hand, and disputed by hand." },
      { title: "Invisible hierarchies", copy: "Multi-tier structures tracked in someone's head, so overrides and sub-IB earnings are guesswork." },
      { title: "Payouts without proof", copy: "Partners receive a figure with no statement behind it — and trust erodes a little each month." },
    ],
    previewLabel: "See it working",
    previewHeading: "A hierarchy, a ledger, a payout — all traceable",
    previewCopy:
      "Explore a fictional partner network, open the commission ledger, and follow one entry from its source trades to settlement. Every name and figure here is invented for the demo.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "From first referral to settled payout",
    capabilitiesCopy:
      "The partner lifecycle is one connected flow: who brought the client, what the program pays, what the ledger says, and what was actually paid.",
    capabilityGroups: [
      {
        title: "Partner lifecycle",
        intro: "Registration to active partner, with checks at the gate.",
        items: [
          { title: "Registration, KYC & approval", copy: "Partners register, complete verification, and are approved before any link goes live." },
          { title: "Unique referral links", copy: "Every partner gets trackable links for campaigns, pages and channels." },
          { title: "Attribution rules", copy: "First-touch or last-touch rules, configured per program — applied consistently, logged always." },
          { title: "Multi-tier hierarchies", copy: "Unlimited logical tiers, with controlled business limits on depth and override structure." },
        ],
      },
      {
        title: "Programs & models",
        intro: "The commercial terms, expressed as rules the system can run.",
        items: [
          { title: "Rebate programs", copy: "Volume-based rebates with tiers, thresholds and per-instrument rates." },
          { title: "CPA, volume & performance models", copy: "Cost-per-acquisition, volume and performance-based models, alone or combined." },
          { title: "Campaign rules", copy: "Time-bound campaigns and bonuses with eligibility conditions and caps." },
          { title: "Commissions on open or close", copy: "Earnings recognised at open or close, where the trading feed supports it." },
        ],
      },
      {
        title: "Ledger, payouts & visibility",
        intro: "The money side, with evidence at every step.",
        items: [
          { title: "Commission ledger", copy: "Earn, adjust, approve and settle — each state change recorded, each entry traceable to source trades." },
          { title: "Clawbacks", copy: "Reversals handled as first-class ledger events, with reason and authorisation." },
          { title: "Payout requests & statements", copy: "Partners request payouts and download statements that show the working, not just the total." },
          { title: "Partner dashboards & audit", copy: "Referrals, downline and earnings in the partner's own view, over a full audit trail." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "From referral to settled payout",
    workflowCopy: "Six stages, each with a record — so a payout is never a number without a story.",
    workflowSteps: [
      { title: "Register", copy: "The partner registers, completes KYC and is approved; referral links go live." },
      { title: "Attribute", copy: "Referred clients are attributed by the program's first- or last-touch rule." },
      { title: "Earn", copy: "Trading activity earns commission under the program's model — CPA, volume or performance." },
      { title: "Approve", copy: "Ledger entries are reviewed and approved; adjustments and clawbacks are recorded." },
      { title: "Settle", copy: "Approved earnings settle into a payout, requested by the partner or scheduled." },
      { title: "Report", copy: "Statements and dashboards show the full trail, from source trade to payout." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "A partner channel that scales without the arguments",
    benefits: [
      { title: "Attribution that settles disputes", copy: "A configured rule, applied the same way every time, with a log to show it." },
      { title: "A ledger, not a spreadsheet", copy: "Earn, adjust, approve and settle as system states — no more hand-calculated commissions." },
      { title: "Hierarchies you can actually see", copy: "Multi-tier structures mapped and reported, so overrides are computed, not guessed." },
      { title: "Statements partners believe", copy: "Downloadable statements that trace each figure to its source trades." },
      { title: "Clawbacks without chaos", copy: "Reversals as proper ledger events, authorised and visible — not quiet edits." },
      { title: "Partners who self-serve", copy: "Dashboards, links and payout requests in the partner's own portal, cutting support load." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where partner channels matter most",
    useCasesCopy: "Referral-led growth looks different in each business — the ledger and the attribution rules are the common core.",
    useCases: [
      { title: "Multi-asset brokers", copy: "IB networks with tiered rebates and CPA, settled monthly with statements partners can verify.", href: "/industries/multi-asset-brokers" },
      { title: "Prop trading firms", copy: "Affiliate programs for challenges, with attribution through to funded accounts.", href: "/industries/prop-firms" },
      { title: "Digital asset firms", copy: "Ambassador and referral programs across jurisdictions, with per-program rules and review.", href: "/industries/digital-assets" },
    ],
    securityHeading: "Controls around partner money",
    securityCopy: "Commissions are financial commitments. Attribution, adjustments and payouts all carry approval and audit.",
    securityItems: [
      { title: "Approval on adjustments", copy: "Ledger adjustments and clawbacks require authorisation and carry a reason." },
      { title: "Attribution audit trail", copy: "Every attribution decision is logged with the rule applied and the evidence behind it." },
      { title: "Payout approval", copy: "Payouts pass approval before release, with the decision recorded." },
      { title: "Role-limited partner views", copy: "Partners see their own network and earnings — nothing belonging to another partner." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "Commissions start with trading activity and end with a payout. The ledger sits between the feed and the finance flow, and the CRM holds the partner record.",
    integrations: [
      { title: "Trading feed", copy: "Volume and activity feed the ledger, so earnings trace to real source trades." },
      { title: "Financial CRM", copy: "Partner records, KYC status and referred clients on the same contact model." },
      { title: "Payments", copy: "Approved payouts release through the orchestration and approval path." },
      { title: "Analytics", copy: "Partner performance, channel contribution and payout reporting from the same data." },
    ],
    comparisonHeading: "BridgeX incentives vs. the usual alternatives",
    comparisonCopy: "Partner programs often run on spreadsheets and goodwill. The difference shows up at payout time.",
    comparisonRows: [
      { aspect: "Attribution", bridgex: "Configured first/last-touch rules, applied consistently and logged", typical: "Decided case by case, argued about afterwards" },
      { aspect: "Commission ledger", bridgex: "Earn, adjust, approve and settle as tracked states with a trail", typical: "A spreadsheet, edited by whoever has it open" },
      { aspect: "Hierarchies", bridgex: "Multi-tier structures modelled, with overrides computed", typical: "Drawn on a whiteboard, calculated by hand" },
      { aspect: "Statements", bridgex: "Downloadable, tracing each figure to its source trades", typical: "A total in an email, with no working shown" },
      { aspect: "Clawbacks", bridgex: "First-class ledger events with reason and authorisation", typical: "Quiet edits that nobody can explain later" },
    ],
    faqs: [
      { question: "How does attribution work?", answer: "Each program configures a first-touch or last-touch rule. When a referred client registers through a partner link, the attribution is recorded with the rule applied and the evidence — link, timestamp and campaign — so it can be reviewed later. The rule is applied the same way for every referral in the program." },
      { question: "How deep can hierarchies go?", answer: "The model supports unlimited logical tiers, with business limits you control — maximum depth, which tiers earn overrides, and how override rates apply. The hierarchy is visible in the partner dashboard and in reporting, so nobody has to reconstruct it from memory." },
      { question: "What happens when a commission needs to be reversed?", answer: "Reversals are clawbacks: first-class ledger events with a reason and an authorisation step. The original entry stays in the ledger, the reversal is recorded against it, and the partner's statement shows both — so the history is never rewritten." },
      { question: "Can partners see their own earnings?", answer: "Yes. The partner dashboard shows referrals, downline, ledger entries and payout history, and partners can download statements. Each partner sees only their own network and earnings." },
      { question: "Is the demo data on this page real?", answer: "No. Every partner name, volume figure and commission amount in the preview is fictional, created to demonstrate the ledger and hierarchy views. Your deployment shows your partners and your numbers." },
    ],
    ctaHeading: "Give partners numbers they can trust.",
    ctaCopy: "Book a private demo and follow a referral from link click to settled payout — on workflows shaped around your business.",
    related: [
      { href: "/solutions/financial-crm", label: "Financial CRM" },
      { href: "/solutions/payment-orchestration", label: "Payment Orchestration" },
      { href: "/platform/financial-operations", label: "Financial Operations" },
    ],
  },
  "tradeops": {
    slug: "tradeops",
    href: "/solutions/tradeops",
    label: "TradeOps Control Center",
    icon: "tradeops",
    eyebrow: "Solutions · TradeOps Control Center",
    metaTitle: "TradeOps Control Center — MT4/MT5 Operations",
    metaDescription:
      "Trading-server operations with validation, dry-run, four-eyes approval and audit — batch updates, leverage, schedules and funding requests, done carefully.",
    heroHeadline: "Change the server,",
    heroAccent: "without crossing your fingers.",
    heroIntro:
      "TradeOps Control Center is how operations teams run MT4/MT5 servers safely: batch changes validated and dry-run first, approved by a second pair of eyes, executed with progress tracking — and logged so every change can be explained.",
    heroImage: { src: "/images/trading-floor-desk.jpg", alt: "Hands over a trading desk with laptops showing charts", width: 1920, height: 1280 },
    darkHero: true,
    notice:
      "TradeOps is a managed-operations concept for authorised server environments. This marketing site has no live trade-server access — the preview below is a simulated dry-run with illustrative data.",
    problemLabel: "The problem",
    problemHeading: "Server changes are high-stakes, low-ceremony work",
    problemCopy:
      "A leverage change touches thousands of accounts. A holiday schedule touches every symbol. Done by hand, in a hurry, with no dry-run and no second approver, a small mistake becomes a firm-wide incident — discovered by clients first.",
    pains: [
      { title: "Changes made blind", copy: "Batch updates applied directly, with no preview of what will actually change." },
      { title: "One person, full power", copy: "A single operator can change leverage or symbols with no review step in between." },
      { title: "No way back", copy: "When a change goes wrong, there is no plan for rolling it back — only damage control." },
      { title: "No record of the change", copy: "Who changed what, and why, lives in memory — until the audit asks." },
    ],
    previewLabel: "See it working",
    previewHeading: "Dry-run first. Approve second. Execute last.",
    previewCopy:
      "Build a simulated leverage change, run the dry-run to see exactly which accounts it would touch, then watch the four-eyes approval flow. Nothing here connects to a real server.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "Operations with a safety net",
    capabilitiesCopy:
      "Every capability exists to make a server change predictable: what will change, who approved it, how far it got, and how to undo it.",
    capabilityGroups: [
      {
        title: "Servers & scope",
        intro: "See what you are operating before you touch it.",
        items: [
          { title: "Server connections", copy: "Connected MT4/MT5 servers with health, version and connection state in one view." },
          { title: "Accounts, groups & symbols", copy: "Browse and select the exact scope of a change — accounts, groups or symbols." },
          { title: "Funding requests", copy: "Deposit and withdrawal requests against trading accounts, with approval routing." },
        ],
      },
      {
        title: "Changes",
        intro: "The routine work, done in batches instead of one by one.",
        items: [
          { title: "Batch updates", copy: "Apply the same change across many accounts or symbols in one job, with per-item results." },
          { title: "Leverage changes", copy: "Leverage updates by group or account, validated against product and risk rules." },
          { title: "Swap, session & holiday schedules", copy: "Trading sessions, swap settings and holiday calendars managed as schedules, not surprises." },
        ],
      },
      {
        title: "Control & evidence",
        intro: "The steps that turn a change into a defensible decision.",
        items: [
          { title: "Validation & dry-run", copy: "Every job validates first and previews its full effect before anything is applied." },
          { title: "Four-eyes review", copy: "A second authorised approver reviews material changes before execution." },
          { title: "Rollback & audit logs", copy: "Rollback where technically possible, job progress throughout, and downloadable audit logs after." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "Six gates between an idea and a live change",
    workflowCopy: "The workflow is deliberately unhurried. Speed comes from batching and clarity — not from skipping checks.",
    workflowSteps: [
      { title: "Draft", copy: "The operator defines the change and its scope: accounts, groups or symbols." },
      { title: "Validate", copy: "Rules check the change against product, risk and schedule constraints." },
      { title: "Dry-run", copy: "A full preview shows every account and value that would change — no surprises." },
      { title: "Approve", copy: "A second authorised approver reviews the dry-run and signs off." },
      { title: "Execute", copy: "The job runs with live progress, per-item results and error handling." },
      { title: "Audit", copy: "The completed job is logged with its inputs, approvers and outcomes, exportable for review." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "Fewer incidents, calmer operations",
    benefits: [
      { title: "Mistakes caught before they land", copy: "Validation and dry-run surface bad scope and bad values while they are still free to fix." },
      { title: "No single point of failure", copy: "Four-eyes review means no one person can push a material change alone." },
      { title: "Batch work, done once", copy: "Hundreds of accounts updated in one job, with per-item results instead of per-account clicking." },
      { title: "Schedules that don't surprise", copy: "Sessions, swaps and holidays planned as calendars, visible to everyone who needs them." },
      { title: "An answer for the audit", copy: "Every job logged with who drafted, who approved and what changed — downloadable on demand." },
      { title: "Rollback when it matters", copy: "Where the platform allows it, changes can be reversed instead of repaired by hand." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where careful server work matters",
    useCasesCopy: "Any business running trading servers faces the same tension: change often, but never carelessly.",
    useCases: [
      { title: "Multi-asset brokers", copy: "Daily leverage, group and symbol operations across MT4/MT5 servers, with approval and audit.", href: "/industries/multi-asset-brokers" },
      { title: "Prop trading firms", copy: "Challenge account setup, leverage tiers and schedule changes across large account populations.", href: "/industries/prop-firms" },
      { title: "Securities & derivatives", copy: "Institutional account operations with strict controls and a full change record.", href: "/industries/securities-derivatives" },
    ],
    securityHeading: "Role scoping is the product",
    securityCopy: "TradeOps exists because server access is dangerous. The controls are the point — not a feature bolted on afterwards.",
    securityItems: [
      { title: "Secure role scoping", copy: "Operators see and change only the servers, groups and actions their role permits." },
      { title: "Maker-checker approval", copy: "The person who drafts a change cannot be the person who approves it." },
      { title: "No live access from this site", copy: "The marketing website never connects to a trade server; operations run only in authorised environments." },
      { title: "Immutable job records", copy: "Job inputs, approvals, progress and outcomes logged and downloadable." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "TradeOps sits between the operations team and the servers, with the CRM and finance flows on either side.",
    integrations: [
      { title: "MT4/MT5 manager APIs", copy: "Server operations through authorised manager APIs, in controlled environments only." },
      { title: "Financial CRM", copy: "Account changes reflected on the contact record, with the job behind them." },
      { title: "Payments", copy: "Funding requests route through the same approval and audit path as other money movement." },
      { title: "Notifications & reporting", copy: "Job completion, failures and schedule changes reported to the right desks." },
    ],
    comparisonHeading: "TradeOps vs. the usual alternatives",
    comparisonCopy: "Server work is often done directly in admin tools, by whoever has access. The difference is what stands between an idea and a live change.",
    comparisonRows: [
      { aspect: "Before a change", bridgex: "Validation and a full dry-run preview of every affected account", typical: "Applied directly, effects discovered afterwards" },
      { aspect: "Approval", bridgex: "Four-eyes review by a second authorised approver", typical: "Whoever has access, acts alone" },
      { aspect: "Rollback", bridgex: "Planned rollback where the platform allows it", typical: "Manual repair, under pressure" },
      { aspect: "Evidence", bridgex: "Job log with inputs, approvers and outcomes, downloadable", typical: "No record beyond memory" },
    ],
    faqs: [
      { question: "Does this website connect to a live trading server?", answer: "No. The marketing site has no trade-server access at all. TradeOps operations run only in authorised server environments, through manager APIs, under the role scoping and approval controls described here. The preview on this page is a simulation with illustrative data." },
      { question: "What can be rolled back?", answer: "Rollback depends on the platform and the change type: some changes, such as leverage or group settings, can be reversed by re-applying the previous values; others, such as executed funding movements, cannot be undone by the tool and need a separate correction process. The dry-run states what is reversible before execution." },
      { question: "Which platforms are supported?", answer: "The design targets MT4/MT5 server operations through their manager APIs. The exact servers, versions and operations in scope are defined during implementation, against your authorised environments — we do not claim coverage we have not configured and tested." },
      { question: "Who can approve a change?", answer: "Approvers are authorised roles, separate from the operator who drafted the change — maker-checker by design. Approval rights are scoped by server, group and change type, so an approver for leverage is not automatically an approver for funding." },
      { question: "What does the audit log contain?", answer: "For each job: the change definition and scope, validation and dry-run results, the drafter and the approver, execution progress with per-item outcomes, and any errors with their reconciliation. Logs are downloadable for internal review." },
    ],
    ctaHeading: "Run server changes like they matter.",
    ctaCopy: "Book a private demo and walk a change through dry-run, approval and execution — on workflows shaped around your business.",
    related: [
      { href: "/solutions/pamm-copy-trading", label: "PAMM & Copy Trading" },
      { href: "/solutions/financial-crm", label: "Financial CRM" },
      { href: "/platform/architecture", label: "Architecture" },
    ],
  },

  "digital-onboarding": {
    slug: "digital-onboarding",
    href: "/solutions/digital-onboarding",
    label: "Digital Onboarding & KYC",
    icon: "onboarding",
    eyebrow: "Solutions · Digital Onboarding & KYC",
    metaTitle: "Digital Onboarding & KYC",
    metaDescription:
      "Adaptive onboarding journeys for individual, corporate and professional clients — verification, AML screening, approval queues and account creation handoff.",
    heroHeadline: "From first form to funded account,",
    heroAccent: "in one journey.",
    heroIntro:
      "BridgeX Digital Onboarding guides each applicant through the steps that apply to them — and only those steps. Verification, screening and approval happen in the same flow, so good applicants reach an account quickly and risky ones reach a human.",
    heroImage: { src: "/images/signing-contract.jpg", alt: "Person signing documents with a pen", width: 1600, height: 1068 },
    darkHero: true,
    problemLabel: "The problem",
    problemHeading: "Onboarding that treats everyone like a suspect loses the good clients first",
    problemCopy:
      "One rigid form for every applicant: individuals answer corporate questions, low-risk clients wait behind high-risk reviews, and documents arrive by email — or not at all.",
    pains: [
      { title: "One form for everyone", copy: "Individuals, companies and professionals all squeezed through the same steps, most of which don't apply." },
      { title: "Documents by email", copy: "ID photos in inboxes, versions lost, no record of what was received or verified." },
      { title: "Reviews with no queue", copy: "Applications pile up in a shared mailbox; nobody knows what is waiting, or for how long." },
      { title: "The handoff gap", copy: "Approved applicants wait while someone manually creates their trading account — sometimes for days." },
    ],
    previewLabel: "See it working",
    previewHeading: "Try the journey — pick an applicant type",
    previewCopy:
      "Choose individual, corporate or professional and walk the adaptive stepper. Validations are simulated and safe — no real documents or personal data are involved.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "Journeys that adapt to the applicant",
    capabilitiesCopy:
      "The steps an applicant sees depend on who they are, where they are and what they are applying for. Everything else stays out of the way.",
    capabilityGroups: [
      {
        title: "Journeys",
        intro: "The right steps for each applicant, in the right order.",
        items: [
          { title: "Individual, corporate & professional", copy: "Three journey families, each with its own steps, documents and rules." },
          { title: "Adaptive form steps", copy: "Later steps change based on earlier answers — country, entity type, product and risk." },
          { title: "Country & product rules", copy: "Requirements driven by jurisdiction and product, configured rather than hard-coded." },
        ],
      },
      {
        title: "Verification",
        intro: "Identity and risk checked in the flow, not after it.",
        items: [
          { title: "Document upload", copy: "Structured upload for ID, proof of address and corporate documents, with status per document." },
          { title: "ID verification adapter", copy: "Identity checks through a verification provider adapter, with results on the application." },
          { title: "AML screening", copy: "Screening against sanctions and watchlists through an AML integration, with flagged cases routed for review." },
          { title: "Beneficial ownership", copy: "Corporate journeys collect and map beneficial owners, with per-owner verification status." },
        ],
      },
      {
        title: "Completion",
        intro: "From verified applicant to active client, without the manual gap.",
        items: [
          { title: "Suitability assessment", copy: "Experience and suitability questions scored against product rules." },
          { title: "Email & phone verification", copy: "Contact channels verified in the journey, before approval." },
          { title: "Approval queues & cases", copy: "Applications route to compliance queues, with case handling for anything that needs a human." },
          { title: "Account-creation handoff", copy: "Approved applications hand off to trading-account creation — the applicant is not left waiting." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "Six steps from application to account",
    workflowCopy: "The applicant sees a short, clear journey. Behind it, verification, screening and approval run in sequence — or in parallel where the rules allow.",
    workflowSteps: [
      { title: "Apply", copy: "The applicant chooses a journey and completes the adaptive steps that apply to them." },
      { title: "Verify", copy: "Identity documents are checked through the verification adapter; contact channels are confirmed." },
      { title: "Screen", copy: "AML screening and suitability run against the application; flags route to a case." },
      { title: "Approve", copy: "Compliance reviews the queue — approving, requesting more, or escalating." },
      { title: "Create", copy: "Approval hands off to trading-account creation, with the record already complete." },
      { title: "Welcome", copy: "The new client is welcomed with their account details and next steps." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "Faster for good applicants, stricter where it counts",
    benefits: [
      { title: "Higher completion", copy: "Applicants only answer what applies to them, so fewer abandon the form halfway." },
      { title: "Faster time to account", copy: "Verification and screening run in the flow, and approval hands straight to account creation." },
      { title: "Consistent decisions", copy: "Country and product rules apply the same way to every applicant — no desk-by-desk variation." },
      { title: "Corporate, handled properly", copy: "Beneficial ownership collected and mapped, instead of chased by email." },
      { title: "A queue, not a mailbox", copy: "Compliance sees every pending application, its age and its flags, in one place." },
      { title: "Evidence for every approval", copy: "Documents, checks and decisions logged on the application, ready for review." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where onboarding is the bottleneck",
    useCasesCopy: "Every financial business onboards — the journeys differ, the need for a clean, auditable flow does not.",
    useCases: [
      { title: "Banks", copy: "Bank-branded journeys for existing clients adding trading, with branch and RM coordination.", href: "/industries/banks" },
      { title: "Multi-asset brokers", copy: "High-volume individual onboarding with fast verification and straight-through account creation.", href: "/industries/multi-asset-brokers" },
      { title: "Digital asset firms", copy: "Multi-jurisdiction review with jurisdiction-specific steps and screening.", href: "/industries/digital-assets" },
    ],
    securityHeading: "Personal data, handled with care",
    securityCopy: "Onboarding collects the most sensitive data a business holds. Consent, retention and access are part of the journey design.",
    securityItems: [
      { title: "Consent & retention", copy: "Consent captured in the journey, and retention rules applied to documents and application data." },
      { title: "Role-limited review", copy: "Compliance sees applications; other roles see only the status they need." },
      { title: "Document handling", copy: "Uploads stored as application documents with status and access control — not in inboxes." },
      { title: "Audit on every decision", copy: "Approvals, rejections and escalations logged with who, when and why." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "Verification, screening and account creation are external systems. BridgeX orchestrates them around one application record.",
    integrations: [
      { title: "ID verification providers", copy: "Identity and document checks through a provider adapter; results flow back onto the application." },
      { title: "AML screening", copy: "Sanctions and watchlist screening integrated, with flagged cases routed to review." },
      { title: "Trading platforms", copy: "Account-creation handoff passes the approved record to the platform." },
      { title: "Financial CRM", copy: "The applicant becomes a contact on approval, with the whole journey as history." },
    ],
    comparisonHeading: "BridgeX onboarding vs. the usual alternatives",
    comparisonCopy: "Forms collect data. A journey verifies, screens, decides and hands off — and can show its working.",
    comparisonRows: [
      { aspect: "Applicant experience", bridgex: "Adaptive steps: each applicant sees only what applies to them", typical: "One long form for everyone, most of it irrelevant" },
      { aspect: "Verification", bridgex: "ID checks and AML screening in the flow, results on the application", typical: "Manual checks after submission, by email" },
      { aspect: "Review", bridgex: "Approval queues with age, flags and case handling", typical: "A shared mailbox and a spreadsheet" },
      { aspect: "Handoff", bridgex: "Approval hands straight to account creation", typical: "Approved applicants wait for manual setup" },
      { aspect: "Evidence", bridgex: "Documents, checks and decisions logged per application", typical: "Scattered across inboxes and folders" },
    ],
    faqs: [
      { question: "What is different about corporate onboarding?", answer: "Corporate journeys add entity verification, director and authorised-person records, and beneficial ownership mapping — each owner with their own verification status. The steps adapt to the entity type and jurisdiction, so a simple company and a layered structure do not get the same form." },
      { question: "Which documents can applicants upload?", answer: "Identity documents, proof of address, and corporate documents such as incorporation certificates and ownership registers — configured per journey, country and product. Each document carries its own status: received, under review, accepted or rejected, with a reason." },
      { question: "How does AML screening work?", answer: "Applications are screened through an AML integration against sanctions and watchlists. A clear result passes through; a flag routes the application to a compliance case for human review, with the screening result attached. Screening never auto-rejects on its own." },
      { question: "How long does onboarding take?", answer: "It depends on the journey, the jurisdiction and the applicant. Straightforward individual applications with clean verification can complete quickly; corporate applications and flagged cases take longer because a human reviews them. The queue shows every pending application and its age, so nothing is silently stuck." },
      { question: "What happens to applicant data?", answer: "Consent is captured in the journey, documents are stored as controlled application records, and retention rules govern how long data is kept. Access is role-limited, and every decision on an application is logged." },
    ],
    ctaHeading: "Onboard the good ones faster.",
    ctaCopy: "Book a private demo and walk an application from first form to created account — on journeys shaped around your business.",
    related: [
      { href: "/solutions/financial-crm", label: "Financial CRM" },
      { href: "/solutions/tradeops", label: "TradeOps Control Center" },
      { href: "/platform/client-experience", label: "Client Experience" },
    ],
  },

  "trading-contests": {
    slug: "trading-contests",
    href: "/solutions/trading-contests",
    label: "Trading Contest Management",
    icon: "contests",
    eyebrow: "Solutions · Trading Contest Management",
    metaTitle: "Trading Contest Management",
    metaDescription:
      "Run trading contests with live rankings, fairness review and approved payouts — profit, volume, streak and risk-rule formats, on branded microsites.",
    heroHeadline: "Competition that fills your funnel,",
    heroAccent: "and keeps it fair.",
    heroIntro:
      "BridgeX Trading Contest Management runs the whole contest — creation, registration, live rankings, fairness review and prize payouts — so a campaign that excites traders does not become a dispute that embarrasses the brand.",
    heroImage: { src: "/images/solutions-contests-v2.jpg", alt: "Hand holding a gold trophy against a deep red background", width: 1600, height: 2400, objectPosition: "50% 30%" },
    darkHero: true,
    problemLabel: "The problem",
    problemHeading: "Contests are easy to announce and hard to run honestly",
    problemCopy:
      "A leaderboard in a spreadsheet, rankings updated by hand, winners decided behind closed doors — traders notice, and the next contest gets fewer entries than the last.",
    pains: [
      { title: "Rankings nobody trusts", copy: "Manual updates and unexplained changes make traders suspect the board is fixed." },
      { title: "Suspicious activity, spotted late", copy: "Wash trading and rule abuse found after prizes are paid — if they are found at all." },
      { title: "Payouts without review", copy: "Prizes sent before anyone checks the winner actually played by the rules." },
      { title: "Campaigns that don't convert", copy: "A contest runs, ends, and leaves no record of who engaged or what it was worth." },
    ],
    previewLabel: "See it working",
    previewHeading: "A live leaderboard, with the fairness work visible",
    previewCopy:
      "Filter the illustrative rankings by format, watch the countdown, and see how flagged entries are held for review instead of quietly vanishing. Every trader and figure here is invented for the demo.",
    capabilitiesLabel: "Capabilities",
    capabilitiesHeading: "Everything a contest needs, end to end",
    capabilitiesCopy:
      "Creation, live ranking, fairness and payout — the four parts that decide whether a contest builds trust or burns it.",
    capabilityGroups: [
      {
        title: "Setup & registration",
        intro: "Define the contest before anyone trades a lot.",
        items: [
          { title: "Contest creation", copy: "Formats, dates, eligibility, prize tiers and rules — configured in one place." },
          { title: "Profit %, volume, streak & risk formats", copy: "Rank by return, traded volume, winning streaks, or risk-adjusted rules — or combine them." },
          { title: "Eligibility & registration", copy: "Who can enter, how they register, and what account conditions apply." },
          { title: "Countdown", copy: "Start and end countdowns on the contest page and microsite." },
        ],
      },
      {
        title: "Live competition",
        intro: "Rankings traders can watch — and believe.",
        items: [
          { title: "Live ranking UI", copy: "Rankings updated from the trade feed, with sorting and filters by format and period." },
          { title: "Leaderboard", copy: "Public and participant views of the board, with positions, figures and movement." },
          { title: "Branded microsites", copy: "Each contest gets a branded page with its own rules, countdown and board." },
          { title: "Partner-linked campaigns", copy: "Contests tied to partner campaigns, so referrals and entries are attributed." },
        ],
      },
      {
        title: "Fairness & payout",
        intro: "The part that makes the next contest possible.",
        items: [
          { title: "Suspicious-activity flags", copy: "Unusual patterns flagged for review — wash trading, impossible streaks, rule abuse." },
          { title: "Fairness review", copy: "Flagged entries reviewed by a human before final standings are confirmed." },
          { title: "Prize tiers & approved payouts", copy: "Tiered prizes released only after approval, with a record of the decision." },
          { title: "Reporting", copy: "Entries, engagement, flags and outcomes reported per contest and across campaigns." },
        ],
      },
    ],
    workflowLabel: "How it flows",
    workflowHeading: "From announcement to awarded prizes",
    workflowCopy: "The contest runs itself day to day; humans step in where judgement is needed — fairness review and payout approval.",
    workflowSteps: [
      { title: "Create", copy: "Format, rules, eligibility, dates and prize tiers are configured and published." },
      { title: "Register", copy: "Traders register; eligibility is checked and the countdown runs." },
      { title: "Trade", copy: "The contest goes live and rankings update from the trade feed." },
      { title: "Rank", copy: "Leaderboards sort and filter by format, with positions visible to participants." },
      { title: "Review", copy: "Suspicious activity is flagged and reviewed before standings are final." },
      { title: "Reward", copy: "Prizes are approved and paid out, with the full record behind the result." },
    ],
    benefitsLabel: "Why it matters",
    benefitsHeading: "Contests that build the brand instead of risking it",
    benefits: [
      { title: "Rankings traders trust", copy: "Live, feed-driven boards with clear rules — no manual edits, no unexplained changes." },
      { title: "Fairness that is visible", copy: "Flags and reviews happen in the open, so honest traders know the contest is policed." },
      { title: "Payouts with a paper trail", copy: "Prizes released after approval, with the review behind each winner recorded." },
      { title: "Campaigns that convert", copy: "Registration and engagement feed the CRM, so a contest becomes pipeline — not just noise." },
      { title: "Formats for every audience", copy: "Profit, volume, streak and risk-rule formats suit different trader types and goals." },
      { title: "Partners in the loop", copy: "Partner-linked campaigns attribute entries and reward the channels that bring traders in." },
    ],
    useCasesLabel: "In practice",
    useCasesHeading: "Where contests do real work",
    useCasesCopy: "A contest is a campaign with a leaderboard. It works wherever engagement and acquisition matter.",
    useCases: [
      { title: "Prop trading firms", copy: "Challenge-style contests that surface skilled traders and fill the evaluation funnel.", href: "/industries/prop-firms" },
      { title: "Multi-asset brokers", copy: "Seasonal trading competitions that re-engage dormant accounts and attract new ones.", href: "/industries/multi-asset-brokers" },
      { title: "Digital asset firms", copy: "Community competitions with partner-linked campaigns and branded microsites.", href: "/industries/digital-assets" },
    ],
    securityHeading: "Fairness is a control, not a hope",
    securityCopy: "A contest that pays a cheat is worse than no contest. Flags, review and approval are built into the flow.",
    securityItems: [
      { title: "Suspicious-activity flags", copy: "Pattern checks surface wash trading, impossible streaks and rule abuse for review." },
      { title: "Human fairness review", copy: "Flagged entries are decided by a person, with the evidence attached — never auto-disqualified silently." },
      { title: "Payout approval", copy: "No prize is released until the winner's standing has been reviewed and approved." },
      { title: "Full contest record", copy: "Entries, rankings, flags, reviews and payouts logged per contest." },
    ],
    integrationsHeading: "Connected, not isolated",
    integrationsCopy: "Rankings come from the trade feed; registrations feed the CRM; prizes flow through payments. The contest is a campaign, not an island.",
    integrations: [
      { title: "Trading feed", copy: "Rankings computed from trading activity, so the board reflects real positions." },
      { title: "Financial CRM", copy: "Registrations and engagement land on contact records for follow-up." },
      { title: "Payments", copy: "Approved prizes pay out through the orchestration and approval path." },
      { title: "Partner programs", copy: "Partner-linked campaigns attribute entries to the channel that brought them." },
    ],
    comparisonHeading: "BridgeX contests vs. the usual alternatives",
    comparisonCopy: "A contest run on spreadsheets can work once. The second time, traders remember how the first one ended.",
    comparisonRows: [
      { aspect: "Rankings", bridgex: "Live, feed-driven boards with sorting and filters", typical: "A spreadsheet updated when someone remembers" },
      { aspect: "Fairness", bridgex: "Suspicious-activity flags with human review before standings are final", typical: "Abuse found after prizes are paid — or never" },
      { aspect: "Payouts", bridgex: "Prize tiers released only after approval, with a decision record", typical: "Prizes sent on trust, disputes handled afterwards" },
      { aspect: "Branding", bridgex: "Branded microsites per contest, with rules and countdown", typical: "A forum post and a link" },
      { aspect: "Follow-up", bridgex: "Registrations feed the CRM as pipeline", typical: "Entries forgotten once the contest ends" },
    ],
    faqs: [
      { question: "What contest formats are supported?", answer: "Profit percentage, trading volume, winning streaks, and risk-rule formats — where ranking accounts for how risk was taken, not just how much was made. Formats can be combined, and each contest defines its own rules, eligibility and prize tiers." },
      { question: "How is suspicious activity detected?", answer: "Pattern checks flag unusual behaviour — wash trading, impossible streaks, coordinated activity and rule abuse — for human review. A flag is not a verdict: a person reviews the evidence and decides, and the decision is recorded with the contest." },
      { question: "When are prizes paid?", answer: "After the fairness review and an approval step. Final standings are confirmed first, flagged entries are resolved, and only then are prize payouts released. The approval and the payout are both logged." },
      { question: "Can a contest have its own branded page?", answer: "Yes. Each contest can run on a branded microsite with its own rules, countdown, registration and leaderboard — and partner-linked campaigns can attribute entries to the partner who brought them." },
      { question: "Are the leaderboard figures on this page real?", answer: "No. Every trader name, rank and figure in the preview is illustrative, created to demonstrate the leaderboard and fairness views. A live contest shows real participants from your trade feed." },
    ],
    ctaHeading: "Run a contest traders believe in.",
    ctaCopy: "Book a private demo and see a contest from creation to approved payout — on workflows shaped around your business.",
    related: [
      { href: "/solutions/ib-incentives", label: "IB & Incentive Management" },
      { href: "/solutions/financial-crm", label: "Financial CRM" },
      { href: "/platform/analytics", label: "Data & Analytics" },
    ],
  },
};
