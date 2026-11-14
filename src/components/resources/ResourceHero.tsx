/**
 * ResourceHero — the shared photographic hero for the Resources section.
 *
 * Every resource page opens with the same cinematic treatment: a
 * full-bleed photograph with the slow Ken Burns drift (HeroMedia),
 * a strong navy scrim, white editorial type, and breadcrumbs.
 * All seven resource routes are dark heroes — the coordinator keeps
 * them in DARK_HERO_ROUTES (navigation.ts) for the transparent
 * header state. The hero content renders visible at SSR (no reveal
 * on above-fold blocks, per the standing motion rules).
 */
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/chrome/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import HeroMedia from "@/components/ui/HeroMedia";

export default function ResourceHero({
  href,
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  imageWidth = 1600,
  imageHeight = 1067,
}: {
  href: string;
  eyebrow: string;
  title: ReactNode;
  copy: string;
  /** Root-relative public image path, e.g. "/images/resources-library.jpg". */
  image: string;
  /** Real alt text describing the actual photograph. */
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <header className="relative overflow-hidden bg-bx-navy-950 pt-[72px] text-bx-white">
      <HeroMedia
        image={image}
        alt={imageAlt}
        scrim="strong"
        kenBurns
        bridgeLine
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
      <Container className="relative flex min-h-[480px] flex-col justify-center pb-20 pt-12 sm:min-h-[540px] sm:pt-16">
        <Breadcrumbs href={href} dark />
        <p className="mt-8 text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-teal-400">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-sans text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-bx-slate-300/90 sm:text-lg">
          {copy}
        </p>
      </Container>
    </header>
  );
}
