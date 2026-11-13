/**
 * Asset & Fund Managers industry page (spec §9).
 * Copy lives in src/content/industries/asset-fund-managers.ts.
 * Light photo hero — no DARK_HERO_ROUTES entry needed.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("asset-fund-managers");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function AssetFundManagersPage() {
  return <IndustryPage content={content} />;
}
