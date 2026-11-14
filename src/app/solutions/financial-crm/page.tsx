/**
 * Financial CRM — solution page (spec S1).
 * Photographic dark hero. Composition: problem as an ImageText block
 * (handshake photo), then the preview on its navy stage,
 * capabilities, a dark workflow, image-led benefits, photographic
 * use-case cards, security, integrations, comparison, a Bosphorus
 * PhotoBand interlude, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import CrmPreview from "@/components/solutions/CrmPreview";
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

const s = SOLUTIONS["financial-crm"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function FinancialCrmPage() {
  return (
    <>
      <SolutionHero solution={s} />

      <ProblemSection
        label={s.problemLabel}
        heading={s.problemHeading}
        copy={s.problemCopy}
        pains={s.pains}
        tone="mint"
        image={{
          src: "/images/solutions-crm-handshake.jpg",
          alt: "Bearded trader looking at a screen with market data behind him",
          width: 1422,
          height: 1067,
        }}
      />

      {/* Tightened boundary (final polish, 14 Nov): the preview table and
          the capabilities heading sat ~192px apart (two full section
          paddings). 48px + 48px matches the ~96px gaps elsewhere. */}
      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white" className="pb-10 sm:pb-12 lg:pb-12">
        <CrmPreview />
      </PreviewShell>

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="white"
        className="pt-10 sm:pt-12 lg:pt-12"
        icons={["funnel", "crm", "shield"]}
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
        icons={["funnel", "route", "filter", "refresh", "headset", "report"]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="white"
        icons={["database", "clock", "chart", "users", "key", "audit"]}
        image={{
          src: "/images/team-discussion.jpg",
          alt: "Trader on the phone reviewing a tablet at his desk",
          width: 1600,
          height: 1068,
        }}
        flip
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="mint"
        images={[
          { src: "/images/industries-brokers.jpg", alt: "Brokerage trading environment", width: 1600, height: 1200 },
          { src: "/images/banking-hall.jpg", alt: "Trader with a tablet working at a multi-monitor trading desk", width: 1600, height: 1068 },
          { src: "/images/industries-wealth.jpg", alt: "Wealth management concept", width: 1600, height: 1067 },
        ]}
      />

      <SecurityPanel
        heading={s.securityHeading}
        copy={s.securityCopy}
        items={s.securityItems}
        icons={["key", "audit", "layers", "shield"]}
      />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="white"
        icons={["chart", "shield", "wallet", "mail", "report"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="mint" />

      <PhotoBand
        image="/images/band-bridge-istanbul.jpg"
        alt="Dark trading monitors showing candlestick charts"
        eyebrow="Financial CRM"
        heading="One source of truth."
        copy="Sales, support and compliance read the same record, so the client gets one coherent experience."
        height="sm"
        imageWidth={1600}
        imageHeight={1067}
      />

      <FaqSection faqs={s.faqs} tone="white" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
