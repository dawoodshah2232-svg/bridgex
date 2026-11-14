/**
 * IndustryHero — the photographic hero for all nine industry pages
 * (visual-enrichment pass, Nov 2026).
 *
 * One cinematic composition per page: a full-bleed per-industry
 * photograph via HeroMedia (slow Ken Burns drift, strong maroon
 * scrim, optional gold bridge-line motif), the industry icon from
 * INDUSTRY_ICONS in the eyebrow, the split H1, support copy and
 * the two CTAs. All nine industry routes are DARK HERO routes —
 * the coordinator keeps DARK_HERO_ROUTES in
 * src/content/navigation.ts in sync.
 *
 * Banks and bonds previously used a diagram hero; their journey
 * diagrams now render as a JourneySection directly below the hero
 * (see IndustrySections), so no content was lost in the conversion.
 *
 * Motion: the hero's one authored motion is the Ken Burns drift.
 * Above-fold hero blocks get no reveal — they render visible.
 */
import type { IndustryContent } from "@/content/industries";
import Icon, { industryIcon } from "../icons";
import Breadcrumbs from "../chrome/Breadcrumbs";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import HeroMedia from "../ui/HeroMedia";

export default function IndustryHero({
  content,
}: {
  content: IndustryContent;
}) {
  const image = content.image;
  if (!image) return null;
  return (
    <section className="relative overflow-hidden bg-bx-maroon-950 text-bx-ivory">
      <HeroMedia
        image={image.src}
        alt={image.alt}
        scrim="strong"
        kenBurns
        bridgeLine={content.heroBridgeLine ?? false}
        imageWidth={image.width}
        imageHeight={image.height}
      />
      <Container className="relative pb-20 pt-[136px] sm:pt-[152px] lg:pb-28">
        <Breadcrumbs href={content.href} dark />
        <div className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-[13px] font-sans font-bold uppercase tracking-[0.24em] text-bx-gold-400">
            <Icon
              name={industryIcon(content.slug)}
              size={20}
              className="shrink-0 text-bx-gold-400"
            />
            {content.eyebrow}
          </p>
          <h1 className="mt-6 font-sans text-[40px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance text-bx-ivory sm:text-6xl lg:text-[68px]">
            {content.heroBefore}
            <em className="font-display font-semibold italic tracking-normal text-bx-champagne">
              {content.heroAccent}
            </em>
            {content.heroAfter}
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bx-champagne/90">
            {content.heroSupport}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href="/book-demo" size="lg">
              Book a Private Demo
            </ButtonLink>
            <ButtonLink href="/platform" variant="secondaryLight" size="lg">
              Explore Our Platform
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
