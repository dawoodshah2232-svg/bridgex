/**
 * PhotoBand — a full-bleed photographic band between page sections.
 *
 * Real photograph under a navy gradient scrim, with an optional
 * eyebrow / heading / copy and any children (usually a CTA row).
 * The image is lazy-loaded — bands sit below the fold by design.
 * The scrim is heavy enough for white text at every height.
 *
 * `image` is a root-relative public path ("/images/skyline-dusk.jpg");
 * it is routed through `asset()` for the /bridgex basePath.
 */
import type { ReactNode } from "react";
import { asset } from "@/lib/paths";
import { Container } from "./Container";
import Reveal from "./Reveal";

type PhotoBandHeight = "sm" | "md" | "lg";

const HEIGHTS: Record<PhotoBandHeight, string> = {
  sm: "min-h-[320px] sm:min-h-[360px]",
  md: "min-h-[420px] sm:min-h-[480px]",
  lg: "min-h-[520px] sm:min-h-[600px]",
};

export default function PhotoBand({
  image,
  alt,
  eyebrow,
  heading,
  copy,
  children,
  height = "md",
  imageWidth = 1600,
  imageHeight = 900,
  className = "",
}: {
  /** Root-relative public image path, e.g. "/images/skyline-dusk.jpg". */
  image: string;
  /** Real alt text describing the actual photograph. */
  alt: string;
  /** Optional small tracked label above the heading (teal-400 on dark). */
  eyebrow?: string;
  /** Optional heading — ReactNode so callers can set a teal-gradient accent. */
  heading?: ReactNode;
  copy?: string;
  /** Optional extra content below the copy — usually a CTA row. */
  children?: ReactNode;
  height?: PhotoBandHeight;
  /** Intrinsic image dimensions (aspect-ratio hint, no layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-bx-navy-950 text-bx-white ${className}`}>
      <div className="absolute inset-0">
        <img
          src={asset(image)}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* Navy scrim: darker at the edges, readable white text.
            Light enough for the photograph to show (fix, 14 Nov) — the
            band photos are night/dusk shots, so white text keeps strong
            contrast even at these levels. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-bx-navy-950/65 via-bx-navy-950/40 to-bx-navy-950/65"
          aria-hidden="true"
        />
      </div>
      <Container
        className={`relative flex ${HEIGHTS[height]} flex-col justify-center py-16 sm:py-20`}
      >
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-teal-400">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="mt-4 font-sans text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl">
              {heading}
            </h2>
          )}
          {copy && (
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-bx-slate-300/90 sm:text-lg">
              {copy}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
