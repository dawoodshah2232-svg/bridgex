/**
 * Inner-page hero for the platform routes — one component, two moods.
 *
 * - Light (default): ivory editorial hero, breadcrumbs above the headline,
 *   optional photograph on the right on desktop.
 * - Dark: full-bleed photographic hero via HeroMedia — slow Ken Burns
 *   drift, strong maroon scrim, gold bridge-line motif. All eight platform
 *   pages use the dark hero. Pages using it are reported to the coordinator
 *   so they can be added to DARK_HERO_ROUTES (transparent header state).
 *
 * Both variants clear the fixed 72px header. The h1 is the page's only h1.
 */
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/chrome/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import HeroMedia from "@/components/ui/HeroMedia";
import { asset } from "@/lib/paths";

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function PageHero({
  href,
  eyebrow,
  title,
  copy,
  dark = false,
  image,
  badge,
  primaryLabel = "Book a Private Demo",
  primaryHref = "/book-demo",
  secondaryLabel = "Talk to an Expert",
  secondaryHref = "/company/contact",
}: {
  href: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  dark?: boolean;
  image?: HeroImage;
  /** Small status label rendered above the headline (e.g. "In development"). */
  badge?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  if (dark) {
    return (
      <header className="relative overflow-hidden bg-bx-maroon-950 text-bx-ivory">
        {image && (
          <HeroMedia
            image={image.src}
            alt={image.alt}
            scrim="strong"
            kenBurns
            bridgeLine
            imageWidth={image.width}
            imageHeight={image.height}
          />
        )}
        <Container className="relative pb-16 pt-[72px] sm:pb-20 sm:pt-[72px] lg:pb-24">
          <div className="pt-10 sm:pt-14">
            <Breadcrumbs href={href} dark />
          </div>
          <div className="mt-8 max-w-3xl">
            {badge && (
              <p className="mb-5 inline-flex items-center gap-2 border border-bx-gold-500/60 px-3 py-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-bx-gold-400">
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-bx-gold-400" />
                {badge}
              </p>
            )}
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-gold-400">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-sans text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[76px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-bx-champagne/90 sm:text-lg">
              {copy}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondaryLight" size="lg">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className="bg-bx-ivory pt-[72px]">
      <Container className="pb-14 pt-10 sm:pb-20 sm:pt-14">
        <Breadcrumbs href={href} />
        <div className={`mt-8 ${image ? "grid items-center gap-10 lg:grid-cols-12 lg:gap-14" : ""}`}>
          <div className={image ? "lg:col-span-7" : "max-w-3xl"}>
            {badge && (
              <p className="mb-5 inline-flex items-center gap-2 border border-bx-gold-600/60 px-3 py-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700">
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-bx-gold-600" />
                {badge}
              </p>
            )}
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-sans text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance text-bx-ink sm:text-6xl lg:text-[72px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-bx-muted sm:text-lg">
              {copy}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={primaryHref} size="lg">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
          {image && (
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full border border-bx-gold-500/50"
                />
                <img
                  src={asset(image.src)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  fetchPriority="high"
                  className="relative aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
