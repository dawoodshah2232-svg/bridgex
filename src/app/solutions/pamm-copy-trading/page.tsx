/**
 * PAMM & Copy Trading — solution page (spec S3).
 * Photographic dark hero with an in-development notice. Composition:
 * preview first on its maroon stage, capabilities, problem as an
 * ImageText block (trader workstation), dark workflow, photographic
 * use-case cards before image-led benefits, security, integrations,
 * comparison, a Hong Kong skyline PhotoBand interlude, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import PammPreview from "@/components/solutions/PammPreview";
import {
  BenefitGrid,
  CapabilityGroups,
  ComparisonTable,
  FaqSection,
  IntegrationList,
  PreviewShell,
  ProblemSection,
  RelatedSolutions,
  SecurityPanel,
  UseCaseCards,
  WorkflowSteps,
} from "@/components/solutions/shared";
import CtaBand from "@/components/ui/CtaBand";
import PhotoBand from "@/components/ui/PhotoBand";

const s = SOLUTIONS["pamm-copy-trading"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function PammCopyTradingPage() {
  return (
    <>
      <SolutionHero solution={s} />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white">
        <PammPreview />
      </PreviewShell>

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="cream"
        icons={["search", "chart", "gauge"]}
      />

      <ProblemSection
        label={s.problemLabel}
        heading={s.problemHeading}
        copy={s.problemCopy}
        pains={s.pains}
        tone="ivory"
        image={{
          src: "/images/trader-workstation.jpg",
          alt: "Trading desk with a laptop showing a candlestick chart and a wall of monitors",
          width: 1600,
          height: 1067,
        }}
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
        icons={["search", "users", "wallet", "eye", "chart", "checkCircle"]}
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
        images={[
          { src: "/images/industries-asset-fund.jpg", alt: "Fund management office scene", width: 1600, height: 900 },
          { src: "/images/industries-wealth.jpg", alt: "Wealth management concept", width: 1600, height: 1067 },
          { src: "/images/industries-brokers.jpg", alt: "Brokerage trading environment", width: 1600, height: 1200 },
        ]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="cream"
        icons={["chart", "gauge", "database", "eye", "checkCircle", "users"]}
        image={{
          src: "/images/wealth-advisor.jpg",
          alt: "Financial advisor discussing plans with clients",
          width: 1600,
          height: 1068,
        }}
        flip
      />

      <SecurityPanel
        heading={s.securityHeading}
        copy={s.securityCopy}
        items={s.securityItems}
        icons={["gauge", "users", "audit", "document"]}
      />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="ivory"
        icons={["chart", "crm", "wallet", "report"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <PhotoBand
        image="/images/band-skyline-hongkong.jpg"
        alt="Hong Kong skyscrapers and skyline at twilight"
        eyebrow="PAMM & Copy Trading"
        heading="Trust, built on arithmetic."
        copy="High-water-mark logic shown step by step, so a fee is a calculation — not a claim."
        height="sm"
        imageWidth={1920}
        imageHeight={1440}
      />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
