/**
 * Structured-data (JSON-LD) helpers (spec §12).
 *
 * Pure functions returning schema.org objects — render them with
 * `jsonLdString()` inside a <script type="application/ld+json"> tag.
 * Nothing here invents facts: the Organization schema carries only the
 * name, URL, logo and description that are real (no founding date,
 * address or social profiles — none are established).
 */
import { SITE_URL } from "@/content/site";
import type { NavRoute } from "@/content/navigation";

export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * Serialize a JSON-LD object for a <script> tag, escaping "<" so content
 * can never break out of the script element.
 */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Organization schema for the root layout. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BridgeX",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/bridgex-logo.svg`,
    description:
      "BridgeX brings onboarding, client relationships, trading operations, payments and partner growth together in one adaptable technology ecosystem.",
  };
}

/** BreadcrumbList schema for a breadcrumb trail from the route registry. */
export function breadcrumbJsonLd(
  trail: NavRoute[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.href}/`,
    })),
  };
}

/**
 * FAQPage schema for a page's FAQ items (same shape as FaqAccordion's
 * FaqItem). Wire it into any page that renders an FAQ — /platform is the
 * proof of use; other pages can follow the same one-line pattern.
 */
export function faqJsonLd(items: FaqEntry[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
