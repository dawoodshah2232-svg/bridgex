/**
 * Wealth Management industry page (spec §9).
 * Copy lives in src/content/industries/wealth-management.ts.
 * Light photo hero — no DARK_HERO_ROUTES entry needed.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("wealth-management");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function WealthManagementPage() {
  return <IndustryPage content={content} />;
}
