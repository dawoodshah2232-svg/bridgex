/**
 * Payment Orchestration — solution page (spec S2).
 * Dark hero. Composition: the payment-flow preview leads, then the
 * problem, capabilities, benefits, a light workflow, use cases,
 * security, comparison before integrations, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import SolutionHero from "@/components/solutions/SolutionHero";
import PaymentsPreview from "@/components/solutions/PaymentsPreview";
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

const s = SOLUTIONS["payment-orchestration"];

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
};

export default function PaymentOrchestrationPage() {
  return (
    <>
      <SolutionHero solution={s} />

      <PreviewShell label={s.previewLabel} heading={s.previewHeading} copy={s.previewCopy} tone="ivory">
        <PaymentsPreview />
      </PreviewShell>

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
        tone="white"
        icons={["sliders", "shield", "audit"]}
      />

      <BenefitGrid label={s.benefitsLabel} heading={s.benefitsHeading} benefits={s.benefits} tone="cream" />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
      />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="white"
      />

      <SecurityPanel heading={s.securityHeading} copy={s.securityCopy} items={s.securityItems} />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <IntegrationList heading={s.integrationsHeading} copy={s.integrationsCopy} items={s.integrations} tone="white" />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
