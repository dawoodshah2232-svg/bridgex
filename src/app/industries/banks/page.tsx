/**
 * Banks industry page (spec §9).
 * Copy lives in src/content/industries/banks.ts.
 * Light diagram hero — no DARK_HERO_ROUTES entry needed.
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
