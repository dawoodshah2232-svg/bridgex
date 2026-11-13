/**
 * Digital Onboarding & KYC — solution page (spec S6).
 * Split light hero with photo. Composition: problem, preview stepper,
 * dark workflow, capabilities, use cases before benefits, security,
 * comparison before integrations, FAQ.
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
      />

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="ivory"
        icons={["onboarding", "shield", "document"]}
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
      />

      <BenefitGrid label={s.benefitsLabel} heading={s.benefitsHeading} benefits={s.benefits} tone="cream" />

      <SecurityPanel heading={s.securityHeading} copy={s.securityCopy} items={s.securityItems} />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <IntegrationList heading={s.integrationsHeading} copy={s.integrationsCopy} items={s.integrations} tone="ivory" />

      <FaqSection faqs={s.faqs} tone="white" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
