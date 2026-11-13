/**
 * Legal drafts — Batch 2, group 2D.
 *
 * Split out of company.ts so no content file exceeds 800 lines.
 * Each legal page is visibly flagged "Draft — pending legal review"
 * (see DraftNotice). Do not present these as final policy or claim
 * compliance or certification.
 */

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "what-we-collect",
    heading: "What we collect",
    paragraphs: [
      "When you use this website or contact us, we collect the information you choose to give us: your name, work email, company, role and the contents of your message. If you submit a form, we also record the time of submission so we can respond in order.",
      "We do not ask for payment card details, account passwords or trading credentials through this website, and you should never send them to us.",
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How we use it",
    paragraphs: [
      "We use the information you provide to respond to your enquiry, arrange a demonstration, and — where you have asked — send you product information. We do not sell personal data, and we do not share it with third parties for their marketing.",
      "Until a backend submission service is connected, form entries are stored locally in your own browser (see the note on each form) and are not transmitted to BridgeX. That local storage exists so your entry is not lost; it is not a substitute for a submitted enquiry.",
    ],
  },
  {
    id: "cookies-and-analytics",
    heading: "Cookies and analytics",
    paragraphs: [
      "This website uses a small number of cookies and local-storage entries, described in our Cookie Policy. Analytics, if enabled, will only run after you have given consent through the cookie banner.",
    ],
  },
  {
    id: "how-long-we-keep-it",
    heading: "How long we keep it",
    paragraphs: [
      "We keep enquiry records for as long as needed to handle your request and any follow-up, then delete them. If a retention period is required by law, we follow that requirement. Locally stored form entries remain in your browser until you clear them.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights",
    paragraphs: [
      "Depending on where you are, you may have the right to ask what personal data we hold about you, to ask us to correct or delete it, or to object to how we use it. To make such a request, contact us through the contact page. We will respond within the timeframe required by applicable law.",
    ],
  },
  {
    id: "security",
    heading: "Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect personal data — see our Security Policy for the approach. No system is perfectly secure, and we do not claim otherwise.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    paragraphs: [
      "If we change this policy, we will update this page and change the date below. Material changes will be highlighted. This document is a draft pending legal review; the final policy will state its effective date and the legal entity responsible for it.",
    ],
  },
];

export const COOKIE_SECTIONS: LegalSection[] = [
  {
    id: "what-are-cookies",
    heading: "What cookies are",
    paragraphs: [
      "Cookies are small text files stored in your browser when you visit a website. This site also uses local storage — a similar browser store — for form entries you choose to save on your own device. Neither mechanism can read files from your computer or identify you to other websites.",
    ],
  },
  {
    id: "cookies-we-use",
    heading: "Cookies and storage we use",
    paragraphs: [
      "This website is designed to work with minimal storage. The categories below describe what may be present; the consent banner lets you control the optional ones.",
    ],
    bullets: [
      "Strictly necessary — required for the site to function (for example, remembering your cookie choice itself). These cannot be switched off.",
      "Preferences — remember choices such as language or region, if you make them.",
      "Analytics — only loaded after you consent, to help us understand which pages are useful. No analytics runs before consent.",
      "Form drafts — form entries are stored in your browser's local storage under keys starting bridgex-lead-, only when you submit a form, and only on your own device.",
    ],
  },
  {
    id: "consent",
    heading: "How consent works",
    paragraphs: [
      "When you first visit, a banner asks you to accept or decline optional cookies. Your choice is stored so we do not ask again on every visit, and you can change it at any time — a preferences control will be available in the site footer once the consent system is fully implemented.",
      "Declining optional cookies does not prevent you from using the site. If you decline analytics, no analytics code loads.",
    ],
  },
  {
    id: "managing-cookies",
    heading: "Managing cookies yourself",
    paragraphs: [
      "You can delete cookies and clear local storage from your browser settings at any time. Doing so will remove any locally saved form entries and reset your cookie choice, so the banner will appear again on your next visit.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    paragraphs: [
      "If we change how we use cookies, we will update this page and, where the change is material, ask for consent again. This document is a draft pending legal review.",
    ],
  },
];

export const SECURITY_SECTIONS: LegalSection[] = [
  {
    id: "approach",
    heading: "Our approach",
    paragraphs: [
      "BridgeX builds technology for financial businesses, so security is a design concern, not a feature added at the end. This page describes the principles we build to. It is a draft pending legal and security review, and it does not claim any certification — we do not hold ISO 27001 or SOC 2 certification unless and until that is independently verified and stated here.",
    ],
  },
  {
    id: "design-principles",
    heading: "Design principles",
    paragraphs: [
      "The platform is designed around tenant separation, role-based access with field-level permissions, approval workflows for sensitive actions, and audit trails that record who did what and when. Financially material actions are designed for maker-checker approval, idempotency and reconciliation.",
    ],
    bullets: [
      "Tenant isolation — one organisation's data is not visible to another.",
      "Least privilege — users see only what their role requires.",
      "Approval gates — sensitive operations require a second pair of eyes.",
      "Audit evidence — actions are logged, and the log is itself protected.",
      "No raw card data — payment card details are never stored by BridgeX.",
    ],
  },
  {
    id: "data-protection",
    heading: "Data protection",
    paragraphs: [
      "Data is encrypted in transit using current TLS standards, and sensitive data at rest is encrypted. Access to production systems is restricted to the people who need it, with credentials managed through a secrets manager rather than shared in documents or chat.",
      "Backups are taken regularly and their restoration is tested — a backup that has never been restored is not a backup.",
    ],
  },
  {
    id: "integrations",
    heading: "Third-party integrations",
    paragraphs: [
      "Connections to trading platforms, payment providers and KYC services use adapter interfaces with signed webhooks, retry handling and sandbox testing before any production use. No live trading account is connected or mutated without authorised credentials, broker approval and explicit production go-live sign-off.",
    ],
  },
  {
    id: "vulnerabilities",
    heading: "Reporting a vulnerability",
    paragraphs: [
      "If you believe you have found a security vulnerability in BridgeX, please report it through the contact page with enough detail for us to reproduce it. Do not test vulnerabilities against live systems, and do not access or modify data that is not yours. We will acknowledge receipt and work to address confirmed issues.",
    ],
  },
  {
    id: "limits",
    heading: "What this policy does not claim",
    paragraphs: [
      "This page describes design principles and intentions. It is not an audit report, a certification, or a guarantee that no incident will ever occur. Where a claim on this page depends on a system not yet built, that system is labelled Planned or In Development elsewhere on the site.",
    ],
  },
];
