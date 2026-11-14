/**
 * Digital Onboarding & KYC — solution page (spec S6).
 * Photographic dark hero. Composition: problem as an ImageText block
 * (compliance review), preview stepper on its maroon stage, dark
 * workflow, capabilities, photographic use-case cards before
 * image-led benefits, security, comparison before integrations, a
 * London bridge PhotoBand interlude, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import OnboardingPreview from "@/components/solutions/OnboardingPreview";
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

const s = SOLUTIONS["digital-onboarding"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function DigitalOnboardingPage() {
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
          src: "/images/compliance-review.jpg",
          alt: "Professional reviewing documents at a desk",
          width: 1600,
          height: 1200,
        }}
        flip
      />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="white">
        <OnboardingPreview />
      </PreviewShell>

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
        icons={["send", "checkCircle", "filter", "shield", "plus", "headset"]}
      />

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="ivory"
        icons={["route", "shield", "checkCircle"]}
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
        images={[
          { src: "/images/banking-hall.jpg", alt: "Spacious modern banking hall with a dramatic ceiling", width: 1600, height: 1067 },
          { src: "/images/industries-brokers.jpg", alt: "Brokerage trading environment", width: 1600, height: 1200 },
          { src: "/images/industries-digital-assets.jpg", alt: "Digital assets concept", width: 1600, height: 987 },
        ]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="cream"
        icons={["funnel", "clock", "checkCircle", "building", "workflow", "audit"]}
        image={{
          src: "/images/solutions-onboarding.jpg",
          alt: "Two people at a wooden table signing a formal document, one holding a pen over the paperwork",
          width: 1600,
          height: 1067,
        }}
      />

      <SecurityPanel
        heading={s.securityHeading}
        copy={s.securityCopy}
        items={s.securityItems}
        icons={["document", "key", "lock", "audit"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="ivory"
        icons={["checkCircle", "shield", "chart", "crm"]}
      />

      <PhotoBand
        image="/images/band-bridge-london.jpg"
        alt="London bridge and skyscrapers at twilight"
        eyebrow="Digital Onboarding & KYC"
        heading="Faster for good applicants, stricter where it counts."
        copy="Applicants only answer what applies to them, so fewer abandon the form halfway."
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
