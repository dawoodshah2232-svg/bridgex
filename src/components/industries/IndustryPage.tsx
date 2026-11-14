/**
 * IndustryPage — the shared template for all nine industry pages
 * (spec §9). Server component; all copy comes from the typed content
 * entry in src/content/industries.ts.
 *
 * Section order: photographic hero → journey strip (banks/bonds
 * only, their former diagram hero) → challenges (image-paired) →
 * module map (FeatureIcon tiles) → use cases (photo + cards) →
 * service architecture → FAQ → CTA band. One full-bleed PhotoBand
 * interlude sits between heavy sections; its position varies per
 * industry (see `bandPosition` in content) so the nine pages don't
 * read as one stamped template.
 */
import type { IndustryContent } from "@/content/industries";
import CtaBand from "../ui/CtaBand";
import PhotoBand from "../ui/PhotoBand";
import IndustryHero from "./IndustryHero";
import {
  ArchitectureSection,
  ChallengesSection,
  FaqSection,
  JourneySection,
  ModuleMapSection,
  UseCasesSection,
} from "./IndustrySections";

export default function IndustryPage({
  content,
}: {
  content: IndustryContent;
}) {
  const band =
    content.band && content.bandImage ? (
      <PhotoBand
        image={content.bandImage.src}
        alt={content.bandImage.alt}
        eyebrow={content.band.eyebrow}
        heading={content.band.heading}
        copy={content.band.copy}
        height={content.bandHeight ?? "md"}
        imageWidth={content.bandImage.width}
        imageHeight={content.bandImage.height}
      />
    ) : null;
  const bandPosition = content.bandPosition ?? "after-modules";

  return (
    <>
      <IndustryHero content={content} />
      {content.heroDiagram && <JourneySection diagram={content.heroDiagram} />}
      <ChallengesSection
        data={content.challenges}
        image={content.challengeImage}
        imageFlip={content.challengeImageFlip}
      />
      {bandPosition === "after-challenges" && band}
      <ModuleMapSection data={content.moduleMap} />
      {bandPosition === "after-modules" && band}
      <UseCasesSection
        data={content.useCases}
        image={content.secondaryImage}
        illustrative={content.illustrative}
        flip={content.useCaseFlip}
      />
      {bandPosition === "after-use-cases" && band}
      <ArchitectureSection data={content.architecture} />
      <FaqSection faqs={content.faqs} />
      <CtaBand heading={content.cta.heading} copy={content.cta.copy} />
    </>
  );
}
