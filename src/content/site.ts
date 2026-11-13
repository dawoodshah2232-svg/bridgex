/**
 * Site configuration — the single source for site identity, contact
 * placeholders, social links and legal-review flags (spec §10/§12).
 *
 * Contact details are explicitly "to be confirmed": nothing here invents
 * an email address, phone number or office address. When real details are
 * confirmed, fill SITE_CONTACT in and the contact page can read them.
 *
 * Social links are empty because no real BridgeX social URLs exist yet
 * (spec §4 — only show social icons where real URLs exist).
 *
 * SITE_NAME / SITE_TAGLINE / SITE_URL are defined in src/lib/paths.ts and
 * re-exported here so content and components have one import to reach for.
 */
export { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/paths";

/** Contact details have not been confirmed yet — do not invent any. */
export const CONTACT_STATUS = "to-be-confirmed" as const;

export interface SiteContact {
  email: string | null;
  phone: string | null;
  address: string | null;
  status: typeof CONTACT_STATUS;
}

export const SITE_CONTACT: SiteContact = {
  email: null,
  phone: null,
  address: null,
  status: CONTACT_STATUS,
};

export interface SocialLink {
  label: string;
  href: string;
}

/** No BridgeX social profiles exist yet — this stays empty until they do. */
export const SITE_SOCIAL_LINKS: SocialLink[] = [];

/**
 * Legal-review flags for the three policy pages. All three are drafts
 * pending legal review (see src/content/legal.ts) — the flags exist so a
 * future CMS/admin surface can flip them without touching page code.
 */
export const LEGAL_REVIEW = {
  privacy: "draft-pending-legal-review",
  cookies: "draft-pending-legal-review",
  securityPolicy: "draft-pending-legal-review",
} as const;

/** True while any legal page is still a draft pending review. */
export const LEGAL_REVIEW_PENDING = Object.values(LEGAL_REVIEW).some(
  (status) => status === "draft-pending-legal-review",
);
