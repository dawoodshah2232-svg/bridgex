/**
 * SolutionHero — the inner-page hero for solution routes.
 *
 * Variants:
 * - dark + split: maroon backdrop, photo right (payments, IB).
 * - light + split: ivory, photo right (onboarding).
 * - light + stacked: ivory, wide photo below the copy (contests).
 * - light + plain: ivory, no photo (CRM, PAMM, TradeOps).
 *
 * Dark heroes need the route listed in DARK_HERO_ROUTES (navigation.ts)
 * — the coordinator owns that list; this component only renders.
 * Every variant clears the fixed 72px header with built-in padding.
 */
import Breadcrumbs from "@/components/chrome/Breadcrumbs";
import Icon from "@/components/icons";
import { asset } from "@/lib/paths";
import type { SolutionContent } from "@/content/solutions";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

function Eyebrow({ solution, dark }: { solution: SolutionContent; dark: boolean }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[13px] font-sans font-bold uppercase tracking-[0.22em] ${
        dark ? "text-bx-gold-400" : "text-bx-maroon-700"
      }`}
    >
      <Icon name={solution.icon} size={20} />
      {solution.eyebrow}
    </p>
  );
}

function Headline({ solution, dark }: { solution: SolutionContent; dark: boolean }) {
  return (
    <h1
      className={`mt-5 font-sans text-[40px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[68px] ${
        dark ? "text-bx-ivory" : "text-bx-ink"
      }`}
    >
      {solution.heroHeadline}{" "}
      <span
        className={`font-display font-semibold italic ${
          dark ? "text-bx-gold-400" : "text-bx-maroon-700"
        }`}
      >
        {solution.heroAccent}
      </span>
    </h1>
  );
}

function HeroCopy({ solution, dark }: { solution: SolutionContent; dark: boolean }) {
  return (
    <>
      <p
        className={`mt-6 max-w-[62ch] text-base leading-relaxed sm:text-lg ${
          dark ? "text-bx-champagne/90" : "text-bx-muted"
        }`}
      >
        {solution.heroIntro}
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <ButtonLink href="/book-demo" size="lg">
          Book a Private Demo
        </ButtonLink>
        <ButtonLink
          href="#preview"
          variant={dark ? "secondaryLight" : "secondary"}
          size="lg"
          arrow={false}
        >
          See the preview
        </ButtonLink>
      </div>
    </>
  );
}

function Notice({ text, dark }: { text: string; dark: boolean }) {
  return (
    <p
      className={`mt-8 border-l-2 px-4 py-3 text-sm leading-relaxed ${
        dark
          ? "border-bx-gold-400/70 bg-bx-maroon-950/60 text-bx-champagne/90"
          : "border-bx-gold-600 bg-bx-cream text-bx-ink/80"
      }`}
    >
      <strong className="font-sans font-bold">Please note: </strong>
      {text}
    </p>
  );
}

export default function SolutionHero({ solution }: { solution: SolutionContent }) {
  const dark = solution.darkHero;
  const img = solution.heroImage;

  if (dark) {
    return (
      <header className="relative overflow-hidden bg-bx-maroon-950 pt-[72px] text-bx-ivory">
        {/* Subtle gold hairline motif, decorative */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bx-gold-500/50 to-transparent"
        />
        <Container className="relative pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
          <Breadcrumbs href={solution.href} dark />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Eyebrow solution={solution} dark />
              <Headline solution={solution} dark />
              <HeroCopy solution={solution} dark />
              {solution.notice && <Notice text={solution.notice} dark />}
            </Reveal>
            {img && (
              <Reveal delay={0.12} className="relative">
                <div className="relative overflow-hidden border border-bx-gold-500/30">
                  <img
                    src={asset(img.src)}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    fetchPriority="high"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-bx-maroon-950/40 via-transparent to-transparent"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-bx-gold-500/60"
                />
              </Reveal>
            )}
          </div>
        </Container>
      </header>
    );
  }

  if (solution.heroLayout === "stacked" && img) {
    return (
      <header className="bg-bx-ivory pt-[72px]">
        <Container className="pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-16">
          <Breadcrumbs href={solution.href} />
          <Reveal className="mt-8 max-w-4xl">
            <Eyebrow solution={solution} dark={false} />
            <Headline solution={solution} dark={false} />
            <HeroCopy solution={solution} dark={false} />
            {solution.notice && <Notice text={solution.notice} dark={false} />}
          </Reveal>
          <Reveal delay={0.12} className="mt-12">
            <img
              src={asset(img.src)}
              alt={img.alt}
              width={img.width}
              height={img.height}
              fetchPriority="high"
              className="aspect-[21/9] w-full object-cover"
            />
          </Reveal>
        </Container>
      </header>
    );
  }

  if (solution.heroLayout === "split" && img) {
    return (
      <header className="bg-bx-ivory pt-[72px]">
        <Container className="pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
          <Breadcrumbs href={solution.href} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Eyebrow solution={solution} dark={false} />
              <Headline solution={solution} dark={false} />
              <HeroCopy solution={solution} dark={false} />
              {solution.notice && <Notice text={solution.notice} dark={false} />}
            </Reveal>
            <Reveal delay={0.12} className="relative">
              <img
                src={asset(img.src)}
                alt={img.alt}
                width={img.width}
                height={img.height}
                fetchPriority="high"
                className="aspect-[3/2] w-full border border-bx-gold-500/30 object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 h-16 w-16 border-b-2 border-r-2 border-bx-gold-500/60"
              />
            </Reveal>
          </div>
        </Container>
      </header>
    );
  }

  // Plain light hero — type-led, no photo.
  return (
    <header className="bg-bx-ivory pt-[72px]">
      <Container className="pb-16 pt-10 sm:pt-14 lg:pb-20 lg:pt-16">
        <Breadcrumbs href={solution.href} />
        <Reveal className="mt-8 max-w-4xl">
          <Eyebrow solution={solution} dark={false} />
          <Headline solution={solution} dark={false} />
          <HeroCopy solution={solution} dark={false} />
          {solution.notice && <Notice text={solution.notice} dark={false} />}
        </Reveal>
      </Container>
    </header>
  );
}
