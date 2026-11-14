/**
 * Services / Company / Legal / Demo content — Batch 2, group 2D.
 *
 * Typed, page-specific copy for the services overview + detail pages,
 * company pages, book-demo and the three legal drafts. Pages stay lean
 * and import from here; nothing in this file invents clients, stats,
 * certifications, offices, pricing or integrations.
 *
 * Company facts that are not yet confirmed are held in
 * `EDITABLE_COMPANY_DETAILS` and rendered with an explicit
 * "editable placeholder" marker — never as settled fact.
 */

import type { FaqItem } from "@/components/ui/FaqAccordion";
import type { IconName } from "@/components/icons";

/* ------------------------------------------------------------------ */
/* Services overview                                                   */
/* ------------------------------------------------------------------ */

export interface ServiceOffering {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  points: string[];
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    title: "Implementation",
    description:
      "A structured path from first workshop to go-live — discovery, design, build, validation and deployment, with a named team on both sides.",
    href: "/services/implementation",
    icon: "workflow",
    points: ["Scoped in phases", "Joint delivery plan", "Validated before launch"],
  },
  {
    title: "Onboarding",
    description:
      "Your teams learn the platform on your own data and workflows, not on generic slides — desk by desk, role by role.",
    href: "/services/implementation",
    icon: "onboarding",
    points: ["Role-based sessions", "Your data, your flows", "Handover checklist"],
  },
  {
    title: "Customisation",
    description:
      "Fields, forms, journeys and workflows shaped to how your business actually operates — configured in the platform, not forked in code.",
    href: "/platform/no-code-studio",
    icon: "sliders",
    points: ["No-code configuration", "Versioned changes", "Reversible by design"],
  },
  {
    title: "Integrations",
    description:
      "Adapters that connect BridgeX to the trading platforms, payment providers, KYC services and data sources you already use.",
    href: "/services/integration-migration",
    icon: "ecosystem",
    points: ["Adapter architecture", "Staged connection", "Retry and monitoring"],
  },
  {
    title: "Data migration",
    description:
      "Your history moves with you: source mapping, staged migration, reconciliation against the source, and a rollback plan before anything goes live.",
    href: "/services/integration-migration",
    icon: "route",
    points: ["Source mapping", "Staged migration", "Reconciled totals"],
  },
  {
    title: "Training",
    description:
      "Practical sessions for operators, compliance and finance — plus reference material your team can return to after go-live.",
    href: "/services/managed-services",
    icon: "book",
    points: ["Operator deep-dives", "Admin enablement", "Reference guides"],
  },
  {
    title: "Managed support",
    description:
      "Ongoing help after launch: support workflows, monitoring, change management and continuous optimisation of your configuration.",
    href: "/services/managed-services",
    icon: "headset",
    points: ["Named support route", "Monitored platform", "Regular reviews"],
  },
];

export const SERVICES_FAQ: FaqItem[] = [
  {
    question: "Do we have to buy services with the platform?",
    answer:
      "No. Services are scoped per engagement. Some teams want full implementation support; others want a short onboarding and take it from there. What is not optional is validation — nothing goes live until it has been tested against your real workflows.",
  },
  {
    question: "How long does an implementation usually take?",
    answer:
      "It depends on scope: how many modules, how many integrations, and how much data is migrating. A single-module rollout with one integration is measured in weeks; a full multi-module migration takes longer. We agree a phased plan with you before work starts, and we do not promise dates we cannot stand behind.",
  },
  {
    question: "Who does the work — BridgeX or our team?",
    answer:
      "Both. BridgeX configures, integrates and validates; your team supplies domain decisions, data and sign-off. The implementation page shows the responsibility split for each phase, so there are no surprises about who owns what.",
  },
  {
    question: "Can you migrate us from our current system?",
    answer:
      "Yes — migration is a dedicated service. We map your source data, migrate in stages to a staging environment first, reconcile totals against the source, and agree a rollback plan before the production cutover.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "Managed services take over: support workflows for your team, platform monitoring, change management for configuration updates, and regular reviews to keep the setup aligned with how your business evolves.",
  },
];

/* ------------------------------------------------------------------ */
/* Implementation                                                      */
/* ------------------------------------------------------------------ */

export interface ImplementationPhase {
  step: string;
  title: string;
  summary: string;
  activities: string[];
  deliverables: string[];
  exit: string;
}

export const IMPLEMENTATION_PHASES: ImplementationPhase[] = [
  {
    step: "01",
    title: "Discover",
    summary:
      "We learn how your business actually runs — desks, products, regions, approval habits — before anything is configured.",
    activities: [
      "Workshops with sales, operations, compliance and finance",
      "Map current workflows, systems and data sources",
      "Agree scope, priorities and the definition of done",
    ],
    deliverables: ["Discovery notes", "Scope statement", "Phased delivery plan"],
    exit: "Scope and plan signed off by both sides.",
  },
  {
    step: "02",
    title: "Design",
    summary:
      "The plan becomes a concrete configuration: objects, fields, journeys, roles and integrations, reviewed with your team.",
    activities: [
      "Data model and field design for your entities",
      "Journey and workflow design, including approvals",
      "Role and permission design with your compliance team",
    ],
    deliverables: ["Configuration design", "Integration map", "Role matrix draft"],
    exit: "Design reviewed and accepted by your named approvers.",
  },
  {
    step: "03",
    title: "Build",
    summary:
      "Configuration, integrations and data preparation in a staging environment — visible to you as it takes shape.",
    activities: [
      "Configure objects, forms, workflows and journeys",
      "Connect adapters to your trading and payment systems",
      "Prepare and cleanse migration data",
    ],
    deliverables: ["Staging environment", "Configured modules", "Integration notes"],
    exit: "Staging build matches the agreed design.",
  },
  {
    step: "04",
    title: "Validate",
    summary:
      "Your team tests the real thing with realistic data. Nothing proceeds until validation passes — this phase is not compressed.",
    activities: [
      "User acceptance testing on your own scenarios",
      "Migration rehearsal and reconciliation checks",
      "Training for operators and administrators",
    ],
    deliverables: ["Test results", "Reconciliation report", "Training records"],
    exit: "Acceptance signed; open issues triaged, not hidden.",
  },
  {
    step: "05",
    title: "Deploy",
    summary:
      "A planned cutover with a rollback path, followed by close support while your team settles into the new way of working.",
    activities: [
      "Production cutover against a written runbook",
      "Hypercare: close support in the first weeks",
      "Handover to managed services",
    ],
    deliverables: ["Go-live runbook", "Handover pack", "Support handover"],
    exit: "System live, team supported, handover complete.",
  },
];

export interface ResponsibilityRow {
  area: string;
  bridgex: string;
  client: string;
}

export const RESPONSIBILITY_MATRIX: ResponsibilityRow[] = [
  {
    area: "Discovery & design",
    bridgex: "Run workshops, draft the design, challenge assumptions.",
    client: "Provide people, decisions and access to current systems.",
  },
  {
    area: "Configuration",
    bridgex: "Build and document the configuration in staging.",
    client: "Review and approve each configured area.",
  },
  {
    area: "Integrations",
    bridgex: "Build and test adapters against agreed specifications.",
    client: "Supply credentials, sandbox access and a test contact.",
  },
  {
    area: "Data migration",
    bridgex: "Map, migrate and reconcile data in stages.",
    client: "Own the source data and confirm its quality.",
  },
  {
    area: "Validation",
    bridgex: "Support testing and fix what testing finds.",
    client: "Run acceptance tests and sign off — or say what fails.",
  },
  {
    area: "Training",
    bridgex: "Deliver role-based training and reference material.",
    client: "Make the right people available, at the right time.",
  },
  {
    area: "Go-live",
    bridgex: "Execute the cutover runbook and hypercare.",
    client: "Approve the go-live decision and the rollback trigger.",
  },
];

export const IMPLEMENTATION_FAQ: FaqItem[] = [
  {
    question: "What do you need from us to start?",
    answer:
      "A named sponsor, access to the people who run your current processes, and a decision on scope. We handle the rest of the planning with you in the Discover phase — you do not need a finished specification before we talk.",
  },
  {
    question: "Can we go live in phases instead of all at once?",
    answer:
      "Yes, and for larger scopes we recommend it. A common pattern is onboarding and CRM first, then payments and partner modules, with each phase validated before the next begins.",
  },
  {
    question: "What happens if validation finds problems?",
    answer:
      "That is what validation is for. Issues are logged, triaged and fixed in staging, and the phase does not close until your acceptance criteria are met. We would rather extend validation than launch with known defects.",
  },
  {
    question: "Do you train our team, or just hand over documentation?",
    answer:
      "Both. Training is role-based and hands-on, delivered during the Validate phase so your team practises on the system they will actually use. Reference material stays available after go-live.",
  },
];

/* ------------------------------------------------------------------ */
/* Managed services                                                    */
/* ------------------------------------------------------------------ */

export interface ManagedPillar {
  title: string;
  description: string;
  icon: IconName;
  items: string[];
}

export const MANAGED_PILLARS: ManagedPillar[] = [
  {
    title: "Support workflows",
    description:
      "A clear route for your team when something is wrong or unclear — triaged, tracked and closed with you, not into a void.",
    icon: "headset",
    items: [
      "Named support channel for your team",
      "Triage by impact, not by arrival order",
      "Every request tracked to a resolution",
    ],
  },
  {
    title: "Monitoring",
    description:
      "The platform is watched so problems surface before your team has to report them.",
    icon: "gauge",
    items: [
      "Platform health and availability monitoring",
      "Integration and job-failure alerts",
      "Regular review of what the monitoring shows",
    ],
  },
  {
    title: "Incident & change management",
    description:
      "Incidents get a structured response; changes get a structured path. Neither is improvised.",
    icon: "shield",
    items: [
      "Incident triage, response and post-incident review",
      "Changes planned, tested and approved before release",
      "Configuration changes versioned and reversible",
    ],
  },
  {
    title: "Continuous optimisation",
    description:
      "Your configuration should keep pace with your business. We review it with you and tune what no longer fits.",
    icon: "sliders",
    items: [
      "Regular configuration reviews",
      "Workflow and journey refinement",
      "Recommendations based on how you actually use the system",
    ],
  },
];

export const MANAGED_REPORTING: { title: string; description: string }[] = [
  {
    title: "Uptime reporting, where instrumented",
    description:
      "Where the platform is instrumented, we report availability from real monitoring data. We do not publish uptime figures for systems we do not measure.",
  },
  {
    title: "Support summary",
    description:
      "A periodic summary of requests raised, resolved and outstanding — so you can see what your team is asking for and how quickly it is answered.",
  },
  {
    title: "Change log",
    description:
      "A record of configuration and integration changes made on your behalf, with who approved them and when.",
  },
];

export const MANAGED_FAQ: FaqItem[] = [
  {
    question: "Do you offer service-level agreements?",
    answer:
      "Support scope, response targets and reporting are agreed per engagement and written into your services agreement. We do not publish blanket SLAs on this site, because a promise should match the service actually contracted — ask us and we will put the specifics in writing.",
  },
  {
    question: "Who do our people contact when something goes wrong?",
    answer:
      "Your team gets a named support route agreed at handover, with triage by impact. Urgent operational issues are handled first; questions and small requests follow the same tracked route so nothing is lost.",
  },
  {
    question: "Can you change our configuration after go-live?",
    answer:
      "Yes — that is part of managed services. Changes are planned, tested in staging where the change warrants it, approved, and applied with a record of what changed and why.",
  },
  {
    question: "What do you monitor, exactly?",
    answer:
      "Platform health and availability, integration and job failures, and the things your configuration depends on. What we report back to you depends on what is instrumented for your deployment — we only report what we actually measure.",
  },
];

/* ------------------------------------------------------------------ */
/* Integration & migration                                             */
/* ------------------------------------------------------------------ */

export interface MigrationStage {
  step: string;
  title: string;
  summary: string;
  checks: string[];
}

export const MIGRATION_STAGES: MigrationStage[] = [
  {
    step: "01",
    title: "Discovery",
    summary:
      "We inventory every source system, file and feed — and agree what moves, what stays, and what gets archived.",
    checks: [
      "Source systems and owners identified",
      "Data volumes, formats and quality assessed",
      "Retention and privacy requirements noted",
    ],
  },
  {
    step: "02",
    title: "Source mapping",
    summary:
      "Every source field is mapped to its BridgeX destination, with rules for transformation, defaults and duplicates.",
    checks: [
      "Field-by-field mapping document",
      "Duplicate and conflict rules agreed",
      "Sensitive data handling defined",
    ],
  },
  {
    step: "03",
    title: "Staging migration",
    summary:
      "Data is migrated into a staging environment first, so your team can inspect the result before it matters.",
    checks: [
      "Full migration rehearsed in staging",
      "Record counts and samples reviewed",
      "Issues fixed and re-run, not patched live",
    ],
  },
  {
    step: "04",
    title: "Dual-write & cutover",
    summary:
      "Where it applies, both systems run in parallel for a defined window — then cutover follows a written runbook.",
    checks: [
      "Dual-write agreed where technically feasible",
      "Cutover runbook and rollback trigger written",
      "Freeze window communicated to all teams",
    ],
  },
  {
    step: "05",
    title: "Reconciliation",
    summary:
      "After cutover, totals and samples are reconciled against the source until the numbers agree — or the gap is explained.",
    checks: [
      "Record and balance totals compared",
      "Exceptions listed and resolved",
      "Sign-off only when reconciliation closes",
    ],
  },
];

export const MIGRATION_DISCOVERY_CHECKLIST: string[] = [
  "Which systems hold client, account and transaction data today?",
  "Who owns each source system, and who can authorise access?",
  "What data quality issues already exist — duplicates, gaps, stale records?",
  "Which historical data must move, and which can be archived?",
  "What regulatory retention rules apply to each data type?",
  "Which integrations must keep running during the migration?",
  "Who signs off that the migrated data is correct?",
];

export const MIGRATION_FAQ: FaqItem[] = [
  {
    question: "Will our current systems keep running during migration?",
    answer:
      "Yes. Migration work happens in staging first, and production cutover is planned around a freeze window agreed with you. Where dual-write is technically feasible, both systems run in parallel for a defined period.",
  },
  {
    question: "What if the migrated data does not match the source?",
    answer:
      "Then we do not sign off. Reconciliation compares record counts, totals and samples against the source, and every exception is listed and resolved — or explicitly explained — before the migration is accepted.",
  },
  {
    question: "Can we roll back if the cutover goes wrong?",
    answer:
      "A rollback plan is agreed before cutover, including the trigger that activates it. What rollback can cover depends on the systems involved; we are explicit about that in the runbook rather than promising the impossible.",
  },
  {
    question: "How do you handle sensitive data during migration?",
    answer:
      "Sensitive fields are identified during discovery, handling rules are agreed before any data moves, and migration runs in controlled environments with access limited to the people doing the work.",
  },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT_PRINCIPLES: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Connected, not bolted together",
    description:
      "Onboarding, CRM, payments, operations and partners should share one record of the truth — not five systems reconciled by spreadsheet.",
    icon: "layers",
  },
  {
    title: "Configured, not custom-built",
    description:
      "Your business is specific; your platform should adapt without a fork in the code. Configuration keeps you upgradeable and your changes reversible.",
    icon: "sliders",
  },
  {
    title: "Evidence over assertion",
    description:
      "Approvals, audit trails and reconciliation are built into the workflow — so the record exists when someone asks for it, not reconstructed afterwards.",
    icon: "audit",
  },
  {
    title: "Honest about the boundary",
    description:
      "We build technology for financial businesses. We do not run your brokerage, hold your clients' funds, or make regulatory claims on your behalf.",
    icon: "shield",
  },
];

/**
 * Factual company details. These fields are EDITABLE PLACEHOLDERS until
 * confirmed — the About page renders them with that marker. Do not fill
 * them with invented history, people, dates or addresses.
 */
export const EDITABLE_COMPANY_DETAILS: { label: string; value: string }[] = [
  { label: "Legal entity name", value: "To be confirmed" },
  { label: "Registered address", value: "To be confirmed" },
  { label: "Year founded", value: "To be confirmed" },
  { label: "Headquarters", value: "To be confirmed" },
  { label: "Company registration number", value: "To be confirmed" },
  { label: "Primary contact email", value: "To be confirmed" },
];

export const ABOUT_FAQ: FaqItem[] = [
  {
    question: "What does BridgeX actually do?",
    answer:
      "BridgeX builds connected technology for financial businesses: client onboarding, CRM, trading operations, payment orchestration and partner management in one adaptable platform — with the implementation and managed services to run it well.",
  },
  {
    question: "Is BridgeX a broker or a regulated financial firm?",
    answer:
      "BridgeX is a technology company. We build software for financial businesses; we do not offer trading, hold client funds, or act as a broker. Our clients remain responsible for their own regulatory obligations in their jurisdictions.",
  },
  {
    question: "Where is BridgeX based?",
    answer:
      "Company details, including registered address and legal entity information, are being finalised and will be published here once confirmed. The About page marks those fields as editable placeholders until then.",
  },
  {
    question: "Who is behind BridgeX?",
    answer:
      "We do not publish team portraits or executive biographies on this site. If you are evaluating BridgeX for your business, book a demo or contact us — you will meet the people who build and support the platform.",
  },
];

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export const PARTNER_MODELS: {
  title: string;
  description: string;
  icon: IconName;
  points: string[];
}[] = [
  {
    title: "Joint go-to-market",
    description:
      "For firms whose clients need brokerage operations technology — introduce BridgeX, and we work the opportunity together.",
    icon: "ib",
    points: ["Shared opportunity plans", "Joint demos and collateral", "Clear referral terms"],
  },
  {
    title: "Technology integrations",
    description:
      "For providers of trading platforms, payments, KYC, market data or communications — build an adapter with us.",
    icon: "ecosystem",
    points: ["Adapter architecture guidance", "Sandbox and test access", "Joint release notes"],
  },
  {
    title: "Referral inquiries",
    description:
      "For introducers and consultants who spot a fit — a straightforward referral route with honest terms.",
    icon: "users",
    points: ["Simple referral process", "Attribution from first contact", "Terms agreed in writing"],
  },
];

export const PARTNERS_FAQ: FaqItem[] = [
  {
    question: "What kinds of partners are you looking for?",
    answer:
      "Three kinds: firms that sell into financial businesses and want a technology partner; technology providers whose products connect to brokerage operations; and introducers who know a business that needs us. If you are unsure which you are, the application form has room to say so.",
  },
  {
    question: "Is there a partner programme with tiers or commissions?",
    answer:
      "Partnership terms are agreed per relationship and put in writing. We do not publish tier tables or commission rates here, because the right terms depend on what each side brings.",
  },
  {
    question: "How do technology integrations work?",
    answer:
      "Adapters connect your product to BridgeX through defined interfaces, with sandbox access for testing. We start with a technical conversation — the partner form asks for your product and the integration you have in mind.",
  },
  {
    question: "How quickly will you respond to a partner inquiry?",
    answer:
      "Partner inquiries are read by a person, not an autoresponder. We aim to reply within a few working days; if your inquiry is time-sensitive, say so in the message and we will prioritise it.",
  },
];

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export const CAREERS_VALUES: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Build things that hold up",
    description:
      "Financial operations software has to be right, not just fast. We value careful design, honest testing and work you can defend.",
    icon: "shield",
  },
  {
    title: "Write it down",
    description:
      "Decisions, designs and trade-offs live in documents anyone can read — so the next person starts from understanding, not archaeology.",
    icon: "document",
  },
  {
    title: "Say what is true",
    description:
      "We do not oversell the product, the timeline or the role. If something is in development, we say so — to clients and to each other.",
    icon: "audit",
  },
  {
    title: "Small teams, real ownership",
    description:
      "People here own outcomes end to end, from the first workshop note to the system running in production.",
    icon: "users",
  },
];

/* ------------------------------------------------------------------ */
/* Book a demo                                                         */
/* ------------------------------------------------------------------ */

export const DEMO_ROLES = [
  "Founder / C-level",
  "Head of Operations",
  "Head of Sales / Business Development",
  "Compliance / Risk",
  "Technology / Engineering",
  "Other",
];

export const DEMO_REGIONS = [
  "United Kingdom / Europe",
  "Middle East",
  "Africa",
  "Asia-Pacific",
  "Americas",
  "Other",
];

export const DEMO_INTERESTS = [
  "Financial CRM",
  "Payment Orchestration",
  "PAMM & Copy Trading",
  "IB & Incentive Management",
  "TradeOps Control Center",
  "Digital Onboarding & KYC",
  "Trading Contest Management",
  "The full platform",
  "Not sure yet — advise me",
];

export const DEMO_FAQ: FaqItem[] = [
  {
    question: "What happens in the demo?",
    answer:
      "A focused walkthrough of the modules relevant to your business, using your workflows as the example — not a generic slide deck. Bring your hardest questions; the demo is a working session, not a pitch.",
  },
  {
    question: "How long does it take?",
    answer:
      "Usually 45 to 60 minutes, including time for your questions. If you want a deeper session on a specific module, say so in the message and we will allow for it.",
  },
  {
    question: "Will you send me a recording?",
    answer:
      "If you would like one, ask during the session and we will arrange it. We do not record without your agreement.",
  },
  {
    question: "Is the demo a sales call?",
    answer:
      "It is a product demonstration. We will ask about your business so the demo is relevant, and we will be direct about what BridgeX does and does not do. If it is not a fit, we will say so.",
  },
];

/* Legal drafts (PRIVACY_SECTIONS, COOKIE_SECTIONS, SECURITY_SECTIONS
   and the LegalSection type) live in src/content/legal.ts — split out
   so this file stays under 800 lines. */


