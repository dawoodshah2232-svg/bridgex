/**
 * IB & Incentive Management — solution page (spec S4).
 * Dark hero. Composition: problem, capabilities, preview, dark workflow,
 * benefits, use cases, security, comparison before integrations, FAQ.
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
      />

      <CapabilityGroups
        label={s.capabilitiesLabel}
        heading={s.capabilitiesHeading}
        copy={s.capabilitiesCopy}
        groups={s.capabilityGroups}
        tone="ivory"
        icons={["ib", "users", "audit"]}
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
      />

      <BenefitGrid label={s.benefitsLabel} heading={s.benefitsHeading} benefits={s.benefits} tone="cream" />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
      />

      <SecurityPanel heading={s.securityHeading} copy={s.securityCopy} items={s.securityItems} />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <IntegrationList heading={s.integrationsHeading} copy={s.integrationsCopy} items={s.integrations} tone="ivory" />

      <FaqSection faqs={s.faqs} tone="white" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
