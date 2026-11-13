/**
 * IndustryHero — three hero compositions, one per industry (spec §9:
 * unique hero per page, photograph or specialised diagram).
 *
 * - photo-dark: full-bleed photograph under a maroon scrim (brokers,
 *   securities, exchanges, digital-assets). These routes are DARK HERO
 *   routes — the coordinator adds them to DARK_HERO_ROUTES.
 * - photo-light: editorial split with the photograph beside the copy
 *   (wealth, asset & fund managers, prop firms).
 * - diagram: centred editorial hero with a FlowDiagram below the copy
 *   (banks, bonds & fixed income).
 *
 * All variants clear the fixed 72px header: dark heroes carry built-in
 * top padding; light heroes start with pt-[72px].
 */
import type { IndustryContent } from "@/content/industries";
import { asset } from "@/lib/paths";
import Breadcrumbs from "../chrome/Breadcrumbs";
import Icon from "../icons";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import FlowDiagram from "./FlowDiagram";

function HeroHeading({
  content,
  dark,
}: {
  content: IndustryContent;
  dark: boolean;
}) {
  return (
    <h1
      className={`mt-6 font-sans text-[40px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[68px] ${
        dark ? "text-bx-ivory" : "text-bx-ink"
      }`}
    >
      {content.heroBefore}
      <em
        className={`font-display font-semibold italic tracking-normal ${
          dark ? "text-bx-champagne" : "text-bx-maroon-700"
        }`}
      >
        {content.heroAccent}
      </em>
      {content.heroAfter}
    </h1>
  );
}

function HeroEyebrow({
  content,
  dark,
}: {
  content: IndustryContent;
  dark: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[13px] font-sans font-bold uppercase tracking-[0.24em] ${
        dark ? "text-bx-gold-400" : "text-bx-maroon-700"
      }`}
    >
      <Icon
        name={content.icon}
        size={20}
        className={dark ? "text-bx-gold-400" : "text-bx-gold-600"}
      />
      {content.eyebrow}
    </p>
  );
}

function HeroCtas({ dark }: { dark: boolean }) {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
      <ButtonLink href="/book-demo" size="lg">
        Book a Private Demo
      </ButtonLink>
      <ButtonLink
        href="/platform"
        variant={dark ? "secondaryLight" : "secondary"}
        size="lg"
      >
        Explore Our Platform
      </ButtonLink>
    </div>
  );
}

function PhotoDarkHero({ content }: { content: IndustryContent }) {
  const image = content.image;
  if (!image) return null;
  return (
    <section className="relative overflow-hidden bg-bx-maroon-950 text-bx-ivory">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={asset(image.src)}
          alt=""
          width={image.width}
          height={image.height}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bx-maroon-950/95 via-bx-maroon-950/80 to-bx-maroon-950/45" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bx-maroon-950 to-transparent" />
      </div>
      <Container className="relative pb-20 pt-[136px] sm:pt-[152px] lg:pb-28">
        <Breadcrumbs href={content.href} dark />
        <div className="mt-8 max-w-3xl">
          <HeroEyebrow content={content} dark />
          <HeroHeading content={content} dark />
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bx-champagne/90">
            {content.heroSupport}
          </p>
          <HeroCtas dark />
        </div>
      </Container>
    </section>
  );
}

function PhotoLightHero({ content }: { content: IndustryContent }) {
  const image = content.image;
  if (!image) return null;
  return (
    <section className="bg-bx-ivory pt-[72px]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <Breadcrumbs href={content.href} />
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <HeroEyebrow content={content} dark={false} />
            <HeroHeading content={content} dark={false} />
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-bx-muted">
              {content.heroSupport}
            </p>
            <HeroCtas dark={false} />
          </div>
          <div className="relative lg:col-span-6">
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
      </Container>
    </section>
  );
}

function DiagramHero({ content }: { content: IndustryContent }) {
  const diagram = content.heroDiagram;
  if (!diagram) return null;
  return (
    <section className="bg-bx-ivory pt-[72px]">
      <Container className="py-12 sm:py-16 lg:py-20">
        <Breadcrumbs href={content.href} />
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="flex justify-center">
            <HeroEyebrow content={content} dark={false} />
          </div>
          <HeroHeading content={content} dark={false} />
          <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-bx-muted">
            {content.heroSupport}
          </p>
          <div className="flex justify-center">
            <HeroCtas dark={false} />
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-[1100px] border border-bx-gold-500/30 bg-bx-white p-5 sm:p-8 lg:p-10">
          <h2 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink sm:text-2xl">
            {diagram.title}
          </h2>
          <div className="mt-6">
            <FlowDiagram steps={diagram.steps} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function IndustryHero({
  content,
}: {
  content: IndustryContent;
}) {
  if (content.heroVariant === "photo-dark") {
    return <PhotoDarkHero content={content} />;
  }
  if (content.heroVariant === "photo-light") {
    return <PhotoLightHero content={content} />;
  }
  return <DiagramHero content={content} />;
}
