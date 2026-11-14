/**
 * Trading Contest Management — solution page (spec S7).
 * Photographic dark hero (gold trophy on deep red, v2 image).
 * Composition: leaderboard preview on its maroon stage, problem as
 * an ImageText block (gold award statuette photo), capabilities, photographic
 * use-case cards, dark workflow, image-led benefits, security,
 * integrations, comparison, a sunset-skyline PhotoBand interlude,
 * FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import ContestsPreview from "@/components/solutions/ContestsPreview";
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

const s = SOLUTIONS["trading-contests"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function TradingContestsPage() {
  return (
    <>
      <SolutionHero solution={s} />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white">
        <ContestsPreview />
      </PreviewShell>

      <ProblemSection
        label={s.problemLabel}
        heading={s.problemHeading}
        copy={s.problemCopy}
        pains={s.pains}
        tone="cream"
        image={{
          src: "/images/solutions-contests-statuette.jpg",
          alt: "Gold award statuette with a star",
          width: 2133,
          height: 1600,
        }}
      />

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="ivory"
        icons={["contests", "chart", "shield"]}
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
        images={[
          { src: "/images/industries-prop-firms.jpg", alt: "Prop trading workspace", width: 1600, height: 1067 },
          { src: "/images/industries-brokers.jpg", alt: "Brokerage trading environment", width: 1600, height: 1200 },
          { src: "/images/industries-digital-assets.jpg", alt: "Digital assets concept", width: 1600, height: 987 },
        ]}
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
        icons={["plus", "users", "chart", "star", "eye", "wallet"]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="cream"
        icons={["chart", "eye", "report", "funnel", "star", "network"]}
        image={{
          src: "/images/workshop-presentation.jpg",
          alt: "Professionals attending a business seminar",
          width: 1600,
          height: 968,
        }}
        flip
      />

      <SecurityPanel
        heading={s.securityHeading}
        copy={s.securityCopy}
        items={s.securityItems}
        icons={["alert", "eye", "shield", "audit"]}
      />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="white"
        icons={["chart", "crm", "wallet", "ib"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <PhotoBand
        image="/images/skyline-sunset.jpg"
        alt="City skyline at sunset"
        eyebrow="Trading Contest Management"
        heading="Contests that build the brand instead of risking it."
        copy="Live, feed-driven boards with clear rules — no manual edits, no unexplained changes."
        height="sm"
        imageWidth={1600}
        imageHeight={899}
      />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
