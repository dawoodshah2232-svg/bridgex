/**
 * InnerHero — shared hero for Batch 2 group-2D pages (services, company,
 * book-demo). Two variants: light editorial (ivory) and dark (maroon with
 * an optional photograph under a heavy scrim).
 *
 * Carries the 72px fixed-header clearance itself (pt-[72px] + padding),
 * renders Breadcrumbs from the route registry, and takes the H1 as
 * ReactNode so callers can set a short Cormorant accent phrase.
 *
 * DARK HEROES in this group (coordinator: add to DARK_HERO_ROUTES):
 *   /services/implementation, /book-demo
 */
import type { ReactNode } from "react";
import { asset } from "@/lib/paths";
import { Container } from "../ui/Container";
import Breadcrumbs from "../chrome/Breadcrumbs";
import Reveal from "../ui/Reveal";

export default function InnerHero({
  href,
  eyebrow,
  title,
  copy,
  dark = false,
  image,
  imageAlt = "",
  imageWidth,
  imageHeight,
  children,
}: {
  href: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  dark?: boolean;
  /** Optional photograph (dark variant: background scrim; light: side image). */
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Optional extra content under the copy (e.g. CTA row, notice). */
  children?: ReactNode;
}) {
  if (dark) {
    return (
      <header className="relative overflow-hidden bg-bx-maroon-900 text-bx-ivory">
        {image && (
          <div className="absolute inset-0" aria-hidden="true">
            <img
              src={asset(image)}
              alt=""
              width={imageWidth ?? 1600}
              height={imageHeight ?? 900}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-bx-maroon-950/85" />
          </div>
        )}
        <Container className="relative pb-16 pt-[72px] sm:pb-20 sm:pt-[72px] lg:pb-24">
          <div className="pt-8 sm:pt-10">
            <Breadcrumbs href={href} dark />
          </div>
          <Reveal className="mt-8 max-w-3xl sm:mt-10">
            <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-gold-400">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-sans text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[76px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-bx-champagne/90 sm:text-lg">
              {copy}
            </p>
            {children}
          </Reveal>
        </Container>
      </header>
    );
  }

  return (
    <header className="bg-bx-ivory pt-[72px]">
      <Container className="pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
        <Breadcrumbs href={href} />
        <div
          className={`mt-8 grid gap-10 sm:mt-10 lg:gap-16 ${
            image ? "lg:grid-cols-[1.15fr_1fr] lg:items-center" : ""
          }`}
        >
          <Reveal className="max-w-3xl">
            <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-sans text-[42px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance text-bx-ink sm:text-6xl lg:text-[68px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-bx-muted sm:text-lg">
              {copy}
            </p>
            {children}
          </Reveal>
          {image && (
            <Reveal delay={0.12} className="relative">
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full border border-bx-gold-500/50"
              />
              <img
                src={asset(image)}
                alt={imageAlt}
                width={imageWidth ?? 1600}
                height={imageHeight ?? 1067}
                fetchPriority="high"
                className="relative h-auto w-full object-cover"
              />
            </Reveal>
          )}
        </div>
      </Container>
    </header>
  );
}
