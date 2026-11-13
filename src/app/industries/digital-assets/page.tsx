/**
 * Digital Asset Firms industry page (spec §9).
 * Copy lives in src/content/industries/digital-assets.ts.
 * DARK HERO — coordinator: add "/industries/digital-assets" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("digital-assets");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function DigitalAssetsPage() {
  return <IndustryPage content={content} />;
}
