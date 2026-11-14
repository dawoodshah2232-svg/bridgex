/**
 * Banks industry page (spec §9).
 * Copy lives in src/content/industries/banks.ts.
 * DARK HERO — coordinator: add "/industries/banks" to
 * DARK_HERO_ROUTES in src/content/navigation.ts.
 */
import type { Metadata } from "next";
import { industryBySlug } from "@/content/industries";
import IndustryPage from "@/components/industries/IndustryPage";

const content = industryBySlug("banks");

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function BanksPage() {
  return <IndustryPage content={content} />;
}
