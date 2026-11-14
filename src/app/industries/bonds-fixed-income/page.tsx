/**
 * Bonds & Fixed Income industry page (spec §9).
 * Copy lives in src/content/industries/bonds-fixed-income.ts.
 * DARK HERO — coordinator: add "/industries/bonds-fixed-income" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("bonds-fixed-income");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function BondsFixedIncomePage() {
  return <IndustryPage content={content} />;
}
