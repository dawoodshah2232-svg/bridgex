/**
 * IndustryPage — the shared template for all nine industry pages
 * (spec §9). Server component; all copy comes from the typed content
 * entry in src/content/industries.ts.
 *
 * Section order: hero → challenges → module map → use cases →
 * service architecture → FAQ → CTA band. Tone rhythm stays mostly
 * ivory/cream/white, with a maroon architecture section on the pages
 * whose content flags it — the 60/30/10 palette ratio holds.
 */
import type { IndustryContent } from "@/content/industries";
import CtaBand from "../ui/CtaBand";
import IndustryHero from "./IndustryHero";
import {
  ArchitectureSection,
  ChallengesSection,
  FaqSection,
  ModuleMapSection,
  UseCasesSection,
} from "./IndustrySections";

export default function IndustryPage({
  content,
}: {
  content: IndustryContent;
}) {
  return (
    <>
      <IndustryHero content={content} />
      <ChallengesSection data={content.challenges} />
      <ModuleMapSection data={content.moduleMap} />
      <UseCasesSection
        data={content.useCases}
        image={content.secondaryImage}
        illustrative={content.illustrative}
      />
      <ArchitectureSection data={content.architecture} />
      <FaqSection faqs={content.faqs} />
      <CtaBand heading={content.cta.heading} copy={content.cta.copy} />
    </>
  );
}
