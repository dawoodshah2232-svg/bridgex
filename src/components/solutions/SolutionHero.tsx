/**
 * SolutionHero — the inner-page hero for solution routes.
 *
 * One photographic treatment for all seven solutions: a full-bleed
 * photograph with a slow Ken Burns drift (HeroMedia) under a strong
 * maroon scrim, the solution's icon from SOLUTION_ICONS in a
 * gold-ring FeatureIcon tile, and white headline copy. Every
 * solution hero is dark, so every solution route belongs in
 * DARK_HERO_ROUTES (navigation.ts) — the coordinator owns that
 * list; this component only renders.
 * The header clears the fixed 72px header with built-in padding.
 * Motion: the content Reveal is transform-only (see Reveal — its
 * hidden state is gated on client mount, so SSR renders visible).
 */
import Breadcrumbs from "@/components/chrome/Breadcrumbs";
import type { SolutionContent } from "@/content/solutions";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import FeatureIcon from "@/components/ui/FeatureIcon";
import HeroMedia from "@/components/ui/HeroMedia";
import Reveal from "@/components/ui/Reveal";

function Headline({ solution }: { solution: SolutionContent }) {
  return (
    <h1 className="mt-5 font-sans text-[40px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance text-bx-ivory sm:text-6xl lg:text-[68px]">
      {solution.heroHeadline}{" "}
      <span className="font-display font-semibold italic text-bx-gold-400">
        {solution.heroAccent}
      </span>
    </h1>
  );
}

function HeroCopy({ solution }: { solution: SolutionContent }) {
  return (
    <>
      <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-bx-champagne/90 sm:text-lg">
        {solution.heroIntro}
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <ButtonLink href="/book-demo" size="lg">
          Book a Private Demo
        </ButtonLink>
        <ButtonLink href="#preview" variant="secondaryLight" size="lg" arrow={false}>
          See the preview
        </ButtonLink>
      </div>
    </>
  );
}

function Notice({ text }: { text: string }) {
  return (
    <p className="mt-8 border-l-2 border-bx-gold-400/70 bg-bx-maroon-950/60 px-4 py-3 text-sm leading-relaxed text-bx-champagne/90">
      <strong className="font-sans font-bold">Please note: </strong>
      {text}
    </p>
  );
}

export default function SolutionHero({ solution }: { solution: SolutionContent }) {
  const img = solution.heroImage;

  return (
    <header className="relative flex min-h-[560px] overflow-hidden bg-bx-maroon-950 pt-[72px] text-bx-ivory sm:min-h-[620px] lg:min-h-[680px]">
      <HeroMedia
        image={img.src}
        alt={img.alt}
        scrim="strong"
        kenBurns
        bridgeLine
        objectPosition={img.objectPosition}
        imageWidth={img.width}
        imageHeight={img.height}
      />
      <Container className="relative flex flex-1 flex-col justify-center pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
        <Breadcrumbs href={solution.href} dark />
        <Reveal className="mt-8 max-w-4xl">
          <div className="flex items-center gap-4">
            <FeatureIcon icon={solution.icon} tone="dark" size="md" />
            <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-gold-400">
              {solution.eyebrow}
            </p>
          </div>
          <Headline solution={solution} />
          <HeroCopy solution={solution} />
          {solution.notice && <Notice text={solution.notice} />}
        </Reveal>
      </Container>
    </header>
  );
}
