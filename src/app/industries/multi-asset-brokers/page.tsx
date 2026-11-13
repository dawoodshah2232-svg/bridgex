/**
 * Multi-Asset Brokers industry page (spec §9).
 * Copy lives in src/content/industries/multi-asset-brokers.ts.
 * DARK HERO — coordinator: add "/industries/multi-asset-brokers" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("multi-asset-brokers");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function MultiAssetBrokersPage() {
  return <IndustryPage content={content} />;
}
