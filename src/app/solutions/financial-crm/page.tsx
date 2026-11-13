/**
 * Financial CRM — solution page (spec S1).
 * Composition: problem first (with photo), then the preview, capabilities,
 * a dark workflow, benefits, use cases, security, integrations,
 * comparison, FAQ.
 */
import type { Metadata } from "next";
import { SOLUTIONS } from "@/content/solutions";
import { asset } from "@/lib/paths";
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
          src: asset("/images/team-discussion.jpg"),
          alt: "Professionals discussing documents together in a meeting room",
          width: 1400,
          height: 933,
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
        icons={["users", "document", "sliders"]}
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        dark
      />

      <BenefitGrid label={s.benefitsLabel} heading={s.benefitsHeading} benefits={s.benefits} tone="white" />

      <UseCaseCards
        label={s.useCasesLabel}
        heading={s.useCasesHeading}
        copy={s.useCasesCopy}
        useCases={s.useCases}
        tone="cream"
      />

      <SecurityPanel heading={s.securityHeading} copy={s.securityCopy} items={s.securityItems} />

      <IntegrationList heading={s.integrationsHeading} copy={s.integrationsCopy} items={s.integrations} tone="white" />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
