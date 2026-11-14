/**
 * TradeOps Control Center — solution page (spec S5).
 * Photographic dark hero with a concept notice. Composition: the
 * dark-console preview leads on its navy stage, then the problem
 * as an ImageText block (compliance desk), dark workflow,
 * capabilities, image-led benefits, photographic use-case cards,
 * security, integrations, comparison, a glass-tower PhotoBand
 * interlude, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import TradeOpsPreview from "@/components/solutions/TradeOpsPreview";
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

const s = SOLUTIONS["tradeops"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function TradeOpsPage() {
  return (
    <>
      <SolutionHero solution={s} />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white">
        <TradeOpsPreview />
      </PreviewShell>

      <ProblemSection
        label={s.problemLabel}
        heading={s.problemHeading}
        copy={s.problemCopy}
        pains={s.pains}
        tone="mint"
        image={{
          src: "/images/compliance-desk.jpg",
          alt: "Businesswoman reviewing paperwork in an office",
          width: 1600,
          height: 1068,
        }}
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
        icons={["document", "checkCircle", "eye", "shield", "play", "audit"]}
      />

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="white"
        icons={["operations", "workflow", "checkCircle"]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="mint"
        icons={["eye", "users", "workflow", "calendar", "audit", "refresh"]}
        image={{
          src: "/images/analyst-workstation.jpg",
          alt: "Desk with a laptop and monitor showing charts",
          width: 1600,
          height: 1067,
        }}
        flip
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
        images={[
          { src: "/images/industries-brokers.jpg", alt: "Brokerage trading environment", width: 1600, height: 1200 },
          { src: "/images/industries-prop-firms.jpg", alt: "Prop trading workspace", width: 1600, height: 1067 },
          { src: "/images/industries-securities.jpg", alt: "Securities trading concept", width: 1600, height: 1067 },
        ]}
      />

      <SecurityPanel
        heading={s.securityHeading}
        copy={s.securityCopy}
        items={s.securityItems}
        icons={["key", "users", "lock", "audit"]}
      />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="white"
        icons={["code", "crm", "wallet", "send"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="mint" />

      <PhotoBand
        image="/images/band-glass-tower.jpg"
        alt="Curved glass skyscraper facade against a dusk sky"
        eyebrow="TradeOps Control Center"
        heading="Fewer incidents, calmer operations."
        copy="Validation and dry-run surface bad scope and bad values while they are still free to fix."
        height="sm"
        imageWidth={1920}
        imageHeight={1098}
      />

      <FaqSection faqs={s.faqs} tone="white" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
