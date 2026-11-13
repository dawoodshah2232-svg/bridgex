/**
 * Exchanges & Trading Venues industry page (spec §9).
 * Copy lives in src/content/industries/exchanges.ts.
 * DARK HERO — coordinator: add "/industries/exchanges" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("exchanges");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ExchangesPage() {
  return <IndustryPage content={content} />;
}
