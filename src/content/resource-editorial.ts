/**
 * Resources editorial content — full article bodies and per-page FAQs.
 *
 * Split out of src/content/resources.ts to keep both files focused
 * (RULES.md: files <800 lines). Article bodies are keyed by the
 * INSIGHT_ARTICLES slug in src/content/insights.ts; the blog index
 * renders them inline when a card expands. FAQ sets are one per
 * resource page.
 */

import type { FaqItem } from "@/components/ui/FaqAccordion";

/* ------------------------------------------------------------------ */
/* Blog — full article bodies (keyed by INSIGHT_ARTICLES slug)         */
/* ------------------------------------------------------------------ */

/**
 * Full original text for each seeded editorial article. The blog index
 * renders these inline when a card is expanded; there are no article
 * detail routes. Paragraphs are plain text — no markup needed.
 */
export const ARTICLE_BODIES: Record<string, string[]> = {
  "one-ledger-one-truth": [
    "Every brokerage has a version of the same Monday meeting. Finance opens the payments report, operations opens the CRM, and the two do not agree. The deposit is there in one system and missing in another; the client's name is spelled two ways; the amount matches but the currency does not. The next hour disappears into screenshots and apologies, and nobody in the room is wrong — each system is faithfully reporting what it was told.",
    "That is the real shape of most reconciliation pain. It is rarely a payments problem at all. It is a records problem: the same client, the same deposit, described three different ways in three different systems, each with its own identifier, its own status vocabulary and its own idea of what 'complete' means. Payments are just where the disagreement becomes expensive.",
    "The fix starts in the CRM, because the CRM is where the client relationship lives. A deposit is not only money moving; it is an event in a client's story — who paid, from where, for which account, under which promotion, with what verification state. When the CRM is the record of intent and the payment record points back to it with one shared identifier, reconciliation stops being detective work and becomes a check: does the money match the record?",
    "In practice, one ledger means four dull disciplines. One client identifier everywhere, so 'Ahmed M.' and 'A. Mohammed' are the same person. One deposit record with a status trace — received, matched, allocated, exception — instead of a status in each system. One definition of each state, written down and enforced. And one exception queue, so the five deposits that need a human are visible in one place instead of scattered across inboxes.",
    "None of this requires exotic technology. It requires deciding, once, which system owns the truth about each fact, and then refusing to let the others quietly invent their own. Do that, and the Monday meeting gets shorter every week — not because anyone worked harder, but because there is finally only one thing to argue about, and it is usually already resolved.",
  ],
  "partner-growth-without-the-spreadsheet": [
    "Every IB programme starts in a spreadsheet, and that is fine. One partner, one rebate rate, one monthly payout: a sheet is the right tool. The trouble arrives with the second tier. Then comes the sub-IB, the volume bonus, the CPA deal for one region and the rebate deal for another, and suddenly the spreadsheet has twelve tabs, three owners and a formula nobody dares to touch.",
    "The cost is not the admin time, though that is real. The cost is trust. A partner who cannot see how their earnings were calculated will assume the worst on the first month the number moves unexpectedly — and the number always moves unexpectedly. Volume changes, a client churns, a trade is adjusted. Without a ledger the partner can inspect, every correction looks like a decision made against them.",
    "A proper incentive ledger changes the conversation. Each earning is a row with a cause: this client, this volume, this rule, this rate, this period. Adjustments are rows too, with a reason and an approver, not silent edits to a cell. The partner sees the same rows the broker sees, and the monthly statement is a summary of a shared record rather than a number handed down from above.",
    "Attribution deserves the same discipline. First-touch or last-touch, cookie window or referral code, one rule or one per campaign — the specific choice matters less than writing it down, applying it the same way every time, and showing the partner which rule produced their result. Most partner disputes are not about money; they are about a rule nobody can point to.",
    "The spreadsheet is not the enemy. It is a prototype that outlived its brief. The moment a second tier appears, the programme has outgrown it — and the firms that notice early keep partners who trust the numbers, which is the only growth engine an IB programme ever really had.",
  ],
  "onboarding-is-a-journey-not-a-form": [
    "Ask a broker how many fields their application form has, and the answer is usually a shrug followed by a number nobody is proud of. Twenty, thirty, forty fields — every one of them added for a good reason, by someone who needed that piece of information, at some point, for some case. Each field made sense alone. Together, they are a wall between the firm and its next client.",
    "Every field you ask for before a client trusts you costs you applicants. That is not a theory; it is the shape of every funnel anyone has ever measured. The applicant at field three has no relationship with you yet. They have curiosity and a few minutes. The firm that asks for their life story before offering anything in return is selecting for persistence, not for good clients.",
    "The firms that convert treat onboarding as a guided journey. The first step is small and rewarding: an account exists, a dashboard appears, something is already theirs. Verification arrives when it earns its place — when the client can see what it unlocks. Corporate applicants get a different path from individuals, and returning clients are never asked for what the firm already knows.",
    "And at the end of the journey there is a human. The best onboarding automation does not remove people; it moves them to where they matter. Straightforward applications pass through; the unusual ones reach a reviewer with context attached — documents, flags, history — instead of arriving as a bare ticket. The client experiences speed, and the compliance team experiences judgement, which is what they were hired for.",
    "Measure it honestly. Drop-off by step, time to first deposit, approval queue age, the share of applications that need a second touch. Those four numbers tell you more about your onboarding than any satisfaction survey, and they tell you where the next field to remove is hiding.",
  ],
};

/* ------------------------------------------------------------------ */

/**
 * Mid-read photographic breaks for the blog index, keyed by the
 * INSIGHT_ARTICLES slug. Each break pairs a real photograph with a
 * pull-quote taken verbatim from the article's own text — no new
 * claims, just a visual pause halfway through a long read.
 */
export interface ArticleBreak {
  image: string;
  imageAlt: string;
  quote: string;
}

export const ARTICLE_BREAKS: Record<string, ArticleBreak> = {
  "one-ledger-one-truth": {
    image: "/images/compliance-desk.jpg",
    imageAlt: "Businesswoman reviewing paperwork in an office",
    quote: "Reconciliation stops being detective work and becomes a check.",
  },
  "partner-growth-without-the-spreadsheet": {
    image: "/images/handshake-partners.jpg",
    imageAlt: "Business partners shaking hands during a meeting",
    quote: "The spreadsheet is not the enemy. It is a prototype that outlived its brief.",
  },
  "onboarding-is-a-journey-not-a-form": {
    image: "/images/solutions-onboarding.jpg",
    imageAlt: "Client onboarding meeting",
    quote: "The firms that convert treat onboarding as a guided journey.",
  },
};

/* ------------------------------------------------------------------ */
/* FAQs (one set per page)                                             */
/* ------------------------------------------------------------------ */

export const HUB_FAQS: FaqItem[] = [
  {
    question: "What counts as a resource on BridgeX?",
    answer:
      "Anything we publish to help operators and decision-makers do their jobs: editorial articles, practical guides, product updates, developer documentation and event announcements. If it appears in the hub, you can read it in full on this site — nothing here is a teaser for a gated download.",
  },
  {
    question: "How often is the hub updated?",
    answer:
      "Whenever we have something worth publishing. We would rather publish one careful guide than four rushed ones, so there is no fixed cadence. Product updates appear here on the day a change is made, and the blog grows as new editorial is finished.",
  },
  {
    question: "Can I get notified about new resources?",
    answer:
      "Not yet — there is no mailing list today, and we will not pretend otherwise. The events page lets you register interest in webinars, saved on your own device for now. A proper notification option is part of the roadmap for the site.",
  },
  {
    question: "Do you publish case studies?",
    answer:
      "Not yet. We publish client stories only when a customer agrees to share theirs and the facts have been checked. Until then, the case studies page explains what future case studies will cover rather than inventing outcomes.",
  },
];

export const BLOG_FAQS: FaqItem[] = [
  {
    question: "Who writes the BridgeX editorial articles?",
    answer:
      "The BridgeX team. Every article is attributed to BridgeX editorial and written from our own view of brokerage operations — not syndicated, not sponsored, and not written to sell a specific feature.",
  },
  {
    question: "Why do articles expand on this page instead of opening their own page?",
    answer:
      "There are three articles so far, and a full page per article would add navigation without adding value. Expanding inline keeps the whole library one scroll away. As the library grows, individual article pages will follow.",
  },
  {
    question: "Can I share an article?",
    answer:
      "Yes — share the blog index link and name the article. We do not track shares, and there are no share buttons that phone home to social networks. If you quote an article, a link back to BridgeX is appreciated.",
  },
  {
    question: "Do the articles describe real BridgeX customers?",
    answer:
      "No. The articles are opinion and operations essays about how brokerages work. They make no claims about clients, results or deployments. When we have customer stories to tell, they will appear as case studies, with permission.",
  },
];

export const CASE_STUDY_FAQS: FaqItem[] = [
  {
    question: "Why are there no case studies yet?",
    answer:
      "Because we have not published any. A case study needs a real customer, their agreement to be named, and facts we have checked together. We would rather show this honest page than invent a logo wall and a set of outcomes nobody can verify.",
  },
  {
    question: "What will a BridgeX case study cover?",
    answer:
      "The starting point, what changed, and what it meant in the customer's own terms — launch timelines, onboarding conversion, partner growth, payment reliability, or the time a team got back. Numbers will appear only where the customer has agreed them and we can stand behind them.",
  },
  {
    question: "I am a BridgeX customer — can I be featured?",
    answer:
      "We would like that. Contact us and tell us what changed for your team. We will draft the story with you, check every fact together, and publish nothing until you have approved the final wording.",
  },
  {
    question: "How will I know when the first case study is published?",
    answer:
      "It will appear here and be noted in the product updates. There is no mailing list yet, so the updates page is the reliable place to watch.",
  },
];

export const GUIDE_FAQS: FaqItem[] = [
  {
    question: "Are the guides free to read?",
    answer:
      "Yes — every guide is readable in full on this page, with no form, no download and no paywall. If you would like the full guide as a document for your team, contact us and we will send it.",
  },
  {
    question: "Who are the guides written for?",
    answer:
      "Operators and decision-makers at financial businesses: founders, operations leads, partner managers, finance and compliance teams. Each guide names its audience at the top so you can tell in seconds whether it is for you.",
  },
  {
    question: "Do the guides describe BridgeX features?",
    answer:
      "They describe how the work should be done, and where BridgeX fits they say so plainly. A guide is not a sales page: if a practice matters whether or not you use BridgeX, the guide says that too.",
  },
  {
    question: "Can I suggest a guide topic?",
    answer:
      "Please do. Contact us with the topic and the problem it would solve for your team. The most useful suggestions come from operators describing a real week, not a feature request.",
  },
];

export const UPDATES_FAQS: FaqItem[] = [
  {
    question: "What do the status labels mean?",
    answer:
      "Live means available on the BridgeX website today, as described. Sandbox means available in a test environment with sample data only. Demo means a preview or illustration — not a working production module. Planned means on the roadmap, not built yet, with no date promised.",
  },
  {
    question: "Why do some updates describe the website rather than the platform?",
    answer:
      "Because the website is what is live today, and this page only reports what is real. Platform modules will appear here with honest labels as they reach sandbox and beyond — never before.",
  },
  {
    question: "How far back does this changelog go?",
    answer:
      "To the first seeded entries in October 2026. The log grows from here; entries are never rewritten to flatter the present, and corrections are published as new entries.",
  },
  {
    question: "Is there a feed or notification for updates?",
    answer:
      "Not yet. The updates page itself is the record for now. A feed is on the roadmap for the site, and it will be announced here when it exists.",
  },
];

export const DEVELOPER_FAQS: FaqItem[] = [
  {
    question: "Is there a live BridgeX API I can call today?",
    answer:
      "No. Every endpoint on this page is an example against a sandbox host that does not exist yet, and every sample is labelled as such. A sandbox environment is planned; until it exists, the docs describe the design, not a service.",
  },
  {
    question: "How will authentication work?",
    answer:
      "The design calls for scoped API keys issued per environment, with tokens that carry only the permissions their integration needs. That is the plan, not a specification — real authentication details will be published with the sandbox.",
  },
  {
    question: "How is the API versioned?",
    answer:
      "By URL: /v1, /v2, and so on. Additive changes stay within a version; breaking changes get a new one, with a deprecation notice period. Versions are part of the architecture from the start, so integrations are never surprised by a silent change.",
  },
  {
    question: "Can I build an integration now?",
    answer:
      "You can design against the examples on this page, but you cannot test against a live endpoint yet. If you are planning an integration, talk to us — we will tell you honestly where the sandbox stands and what to build first.",
  },
];

export const EVENTS_FAQS: FaqItem[] = [
  {
    question: "When is the next BridgeX event?",
    answer:
      "No date is set yet. The four webinar topics on this page are planned, and dates will be announced here first. Registering interest saves your topic preference on your own device so you can keep track of what you asked about.",
  },
  {
    question: "Where does my registration go?",
    answer:
      "Nowhere yet — and we say so on the form. Your interest is saved in your browser's local storage on this device only. It is not sent to BridgeX, because there is no backend connected to this form yet. When one is connected, the form will say so.",
  },
  {
    question: "Will webinars be recorded?",
    answer:
      "That is the plan, so people in other time zones can watch later. Recordings will be listed on this page when they exist. Nothing is recorded yet because no session has run.",
  },
  {
    question: "Can I suggest a webinar topic?",
    answer:
      "Yes — contact us with the topic and who it would help. The planned programme came from the questions operators actually ask us, and the next topics will come the same way.",
  },
];
