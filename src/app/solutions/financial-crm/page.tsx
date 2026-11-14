/**
 * Financial CRM — solution page (spec S1).
 * Photographic dark hero. Composition: problem as an ImageText block
 * (handshake photo), then the preview on its maroon stage,
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
        tone="cream"
        image={{
          src: "/images/handshake-deal.jpg",
          alt: "Professional handshake sealing a business agreement",
          width: 1600,
          height: 1067,
        }}
      />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white">
        <CrmPreview />
      </PreviewShell>

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="ivory"
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
          alt: "Team in discussion around a table",
          width: 1400,
          height: 933,
        }}
        flip
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="cream"
        images={[
          { src: "/images/industries-brokers.jpg", alt: "Brokerage trading environment", width: 1600, height: 1200 },
          { src: "/images/banking-hall.jpg", alt: "Spacious modern banking hall with a dramatic ceiling", width: 1600, height: 1067 },
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

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <PhotoBand
        image="/images/band-bridge-istanbul.jpg"
        alt="Bosphorus Bridge glowing red above Istanbul at night"
        eyebrow="Financial CRM"
        heading="One source of truth."
        copy="Sales, support and compliance read the same record, so the client gets one coherent experience."
        height="sm"
        imageWidth={1920}
        imageHeight={1280}
      />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
