/**
 * Prop Trading Firms industry page (spec §9).
 * Copy lives in src/content/industries/prop-firms.ts.
 * DARK HERO — coordinator: add "/industries/prop-firms" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("prop-firms");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function PropFirmsPage() {
  return <IndustryPage content={content} />;
}
