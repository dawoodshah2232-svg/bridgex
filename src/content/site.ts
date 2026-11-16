/**
 * Site configuration — the single source for site identity, contact
 * details, social links and legal-review flags (spec §10/§12).
 *
 * Contact details are the REAL BridgeX Apps details, verified live on
 * bridgexapps.com on 16 Nov 2026 (white-label rework): the site now
 * serves bridgexapps.com as its white-label offering, so the published
 * BridgeX Apps contact points are the site's contact points. Nothing
 * here is invented — every value below was read from the live site.
 *
 * SITE_NAME / SITE_TAGLINE / SITE_URL are defined in src/lib/paths.ts and
 * re-exported here so content and components have one import to reach for.
 */
export { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/paths";

/** Contact details confirmed from bridgexapps.com, 16 Nov 2026. */
export const CONTACT_STATUS = "confirmed" as const;

export interface SiteContact {
  /** General enquiries. */
  email: string | null;
  /** Sales enquiries. */
  salesEmail: string | null;
  /** Compliance enquiries. */
  complianceEmail: string | null;
  /** Phone & WhatsApp (see phoneNote). */
  phone: string | null;
  phoneNote: string | null;
  address: string | null;
  hours: string | null;
  /** Telegram handle, without the @. */
  telegram: string | null;
  status: typeof CONTACT_STATUS;
}

export const SITE_CONTACT: SiteContact = {
  email: "contact@bridgexapps.com",
  salesEmail: "sales@bridgexapps.com",
  complianceEmail: "compliance@bridgexapps.com",
  phone: "+971 58 543 1107",
  phoneNote: "Phone & WhatsApp",
  address: "Office 2201, API Trio Tower, Al Barsha 1, Dubai, UAE",
  hours: "Mon–Fri 9:00–18:00 GST · Sat 10:00–14:00 · Sun closed",
  telegram: "bridgingforex",
  status: CONTACT_STATUS,
};

export interface SocialLink {
  label: string;
  href: string;
}

/** Real BridgeX Apps social profiles (verified on bridgexapps.com). */
export const SITE_SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bridgexapps" },
  { label: "Facebook", href: "https://www.facebook.com/bridgexapps" },
  { label: "Telegram", href: "https://t.me/bridgingforex" },
];

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
