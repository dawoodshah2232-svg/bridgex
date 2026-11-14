/**
 * Payment Orchestration — solution page (spec S2).
 * Photographic dark hero. Composition: the payment-flow preview
 * leads on its maroon stage, then the problem as an ImageText block
 * (POS photo), capabilities, image-led benefits, a light workflow,
 * photographic use-case cards, security, comparison before
 * integrations, a Singapore skyline PhotoBand interlude, FAQ.
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
import PhotoBand from "@/components/ui/PhotoBand";

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
        image={{
          src: "/images/payments-pos.jpg",
          alt: "Card payment being processed at a point-of-sale terminal",
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
        tone="white"
        icons={["route", "refresh", "wallet"]}
      />

      <BenefitGrid
        label={s.benefitsLabel}
        heading={s.benefitsHeading}
        benefits={s.benefits}
        tone="cream"
        icons={["refresh", "network", "eye", "lock", "report", "sliders"]}
        image={{
          src: "/images/payments-contactless.jpg",
          alt: "Close-up of a contactless payment terminal",
          width: 1200,
          height: 801,
        }}
      />

      <WorkflowSteps
        label={s.workflowLabel}
        heading={s.workflowHeading}
        copy={s.workflowCopy}
        steps={s.workflowSteps}
        icons={["send", "route", "refresh", "checkCircle", "shield", "audit"]}
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
        icons={["lock", "shield", "key", "audit"]}
      />

      <ComparisonTable heading={s.comparisonHeading} copy={s.comparisonCopy} rows={s.comparisonRows} tone="cream" />

      <IntegrationList
        heading={s.integrationsHeading}
        copy={s.integrationsCopy}
        items={s.integrations}
        tone="white"
        icons={["network", "chart", "crm", "report"]}
      />

      <PhotoBand
        image="/images/band-skyline-singapore.jpg"
        alt="Singapore skyline with illuminated skyscrapers at dusk"
        eyebrow="Payment Orchestration"
        heading="Funding that behaves like infrastructure."
        copy="Three-way matching runs continuously, and only the exceptions need a human."
        height="sm"
        imageWidth={1920}
        imageHeight={1013}
      />

      <FaqSection faqs={s.faqs} tone="ivory" />

      <RelatedSolutions related={s.related} />
      <CtaBand heading={s.ctaHeading} copy={s.ctaCopy} />
    </>
  );
}
