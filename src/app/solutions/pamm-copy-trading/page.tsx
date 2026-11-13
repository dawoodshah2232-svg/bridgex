/**
 * PAMM & Copy Trading — solution page (spec S3).
 * Plain light hero with an in-development notice. Composition: preview
 * first, capabilities, problem, dark workflow, use cases before benefits,
 * security, integrations, comparison, FAQ.
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
        icons={["pamm", "users", "audit"]}
      />

      <ProblemSection
        label={s.problemLabel}
        heading={s.problemHeading}
        copy={s.problemCopy}
        pains={s.pains}
        tone="ivory"
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
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

      <IntegrationList heading={s.integrationsHeading} copy={s.integrationsCopy} items={s.integrations} tone="ivory" />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
