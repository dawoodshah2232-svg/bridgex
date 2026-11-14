/**
 * Seeded editorial articles — original BridgeX content, written for the
 * homepage insights section (H11) and reused by the Batch 2 blog index.
 *
 * These are opinion/operations essays, not case studies: they make no
 * claims about clients, results or certifications. Dates are the
 * publication dates of the seeded pieces.
 */

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. "2026-11-10". */
  date: string;
  readMinutes: number;
  /** Public image path (basePath-free; render through asset()). */
  image: string;
  imageAlt: string;
}

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: "one-ledger-one-truth",
    title: "One ledger, one truth: why reconciliation starts in the CRM",
    excerpt:
      "Most reconciliation pain is not a payments problem. It is a records problem — the same client, the same deposit, described three different ways in three different systems.",
    category: "Operations",
    date: "2026-11-10",
    readMinutes: 6,
    image: "/images/analyst-workstation.jpg",
    imageAlt:
      "Desk with a laptop and monitor showing charts, a calculator and papers",
  },
  {
    slug: "partner-growth-without-the-spreadsheet",
    title: "Partner growth without the spreadsheet",
    excerpt:
      "Rebate programmes outgrow spreadsheets the moment a second tier appears. A proper incentive ledger turns partner trust from a monthly argument into a standing fact.",
    category: "Partners",
    date: "2026-11-03",
    readMinutes: 5,
    image: "/images/team-discussion.jpg",
    imageAlt:
      "Business professionals discussing documents together in a modern meeting room",
  },
  {
    slug: "onboarding-is-a-journey-not-a-form",
    title: "Onboarding is a journey, not a form",
    excerpt:
      "Every field you ask for before a client trusts you costs you applicants. The firms that convert treat onboarding as a guided journey with a human at the end of it.",
    category: "Client experience",
    date: "2026-10-27",
    readMinutes: 7,
    image: "/images/boardroom-meeting.jpg",
    imageAlt:
      "Professionals in a business meeting inside a modern office boardroom",
  },
];

/** Human-readable date for an article, e.g. "10 Nov 2026". */
export function formatInsightDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
