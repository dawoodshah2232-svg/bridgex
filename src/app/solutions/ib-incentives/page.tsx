/**
 * IB & Incentive Management — solution page (spec S4).
 * Photographic dark hero. Composition: problem as an ImageText block
 * (partners photo), capabilities, preview on its maroon stage, dark
 * workflow, image-led benefits, photographic use-case cards,
 * security, comparison before integrations, a Kuala Lumpur skyline
 * PhotoBand interlude, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import IbPreview from "@/components/solutions/IbPreview";
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

const s = SOLUTIONS["ib-incentives"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function IbIncentivesPage() {
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
          src: "/images/solutions-partners.jpg",
          alt: "Two businessmen shaking hands and smiling in a bright modern office",
          width: 1600,
          height: 1067,
        }}
        flip
      />

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="ivory"
        icons={["ib", "chart", "report"]}
      />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white">
        <IbPreview />
      </PreviewShell>

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
        icons={["users", "route", "chart", "shield", "wallet", "report"]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="cream"
        icons={["route", "report", "network", "document", "refresh", "users"]}
        image={{
          src: "/images/team-collaboration.jpg",
          alt: "Colleagues reviewing documents together at a meeting table",
          width: 1600,
          height: 1067,
        }}
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
          { src: "/images/industries-digital-assets.jpg", alt: "Digital assets concept", width: 1600, height: 987 },
        ]}
      />

      <SecurityPanel
        heading={s.securityHeading}
        copy={s.securityCopy}
        items={s.securityItems}
        icons={["shield", "audit", "lock", "key"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="ivory"
        icons={["chart", "crm", "wallet", "report"]}
      />

      <PhotoBand
        image="/images/band-skyline-kl.jpg"
        alt="Kuala Lumpur cityscape with towers at sunset"
        eyebrow="IB & Incentive Management"
        heading="A partner channel that scales without the arguments."
        copy="A configured rule, applied the same way every time, with a log to show it."
        height="sm"
        imageWidth={1920}
        imageHeight={1280}
      />

      <FaqSection faqs={s.faqs} tone="white" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
