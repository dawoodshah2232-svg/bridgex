/**
 * Securities & Derivatives industry page (spec §9).
 * Copy lives in src/content/industries/securities-derivatives.ts.
 * DARK HERO — coordinator: add "/industries/securities-derivatives" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("securities-derivatives");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function SecuritiesDerivativesPage() {
  return <IndustryPage content={content} />;
}
