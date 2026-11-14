/**
 * ImageText — the alternating image / text block.
 *
 * Photograph on one side inside a teal hairline frame, offset
 * down-right (the frame sits in the wrapper's own margin, so it
 * never overflows — safe at 375px). Eyebrow / heading / copy /
 * check-marked bullets / CTA on the other. `flip` mirrors the
 * two-column layout on desktop; on mobile the image always stacks
 * first, because it is first in the DOM.
 *
 * `image` is a root-relative public path ("/images/team-discussion.jpg");
 * it is routed through `asset()` for the /bridgex basePath.
 *
 * The photograph carries a warm pale mint background behind it, so the
 * teal frame never reads as an empty outlined rectangle while the image
 * is still loading (fix, 14 Nov). Pass `eager` for blocks directly
 * below the hero — their images are in or near the first viewport.
 */
import type { ReactNode } from "react";
import { asset } from "@/lib/paths";
import Icon from "../icons";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import Reveal from "./Reveal";

type ImageTextTone = "white" | "mint";

const TONES: Record<ImageTextTone, string> = {
  white: "bg-bx-white",
  mint: "bg-bx-mint-50",
};

export default function ImageText({
  image,
  alt,
  eyebrow,
  heading,
  copy,
  bullets,
  ctaLabel,
  ctaHref,
  flip = false,
  tone = "white",
  imageWidth = 1200,
  imageHeight = 900,
  eager = false,
  className = "",
  children,
}: {
  /** Root-relative public image path, e.g. "/images/team-discussion.jpg". */
  image: string;
  /** Real alt text describing the actual photograph. */
  alt: string;
  /** Optional small tracked label above the heading (teal-700 on light). */
  eyebrow?: string;
  /** Heading — ReactNode so callers can set a teal-gradient accent phrase. */
  heading: ReactNode;
  copy?: string;
  /** Optional check-marked bullet list under the copy. */
  bullets?: string[];
  /** Optional CTA — both label and href are required to render it. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Mirror the columns on desktop (image right, text left). */
  flip?: boolean;
  tone?: ImageTextTone;
  /** Intrinsic image dimensions (aspect-ratio hint, no layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  /** Load the image eagerly with high priority (near-fold blocks). */
  eager?: boolean;
  className?: string;
  /** Optional extra content between the bullets and the CTA. */
  children?: ReactNode;
}) {
  return (
    <section className={`${TONES[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image first in the DOM: stacks image-first on mobile. */}
          <Reveal className={flip ? "lg:order-2" : ""}>
            {/* The offset teal frame lives inside the wrapper's own
                right/bottom margin, so nothing overflows at 375px. */}
            <div className="relative mb-3 mr-3 sm:mb-4 sm:mr-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-teal-500/60 sm:translate-x-4 sm:translate-y-4"
              />
              <img
                src={asset(image)}
                alt={alt}
                width={imageWidth}
                height={imageHeight}
                loading={eager ? "eager" : "lazy"}
                fetchPriority={eager ? "high" : undefined}
                className="relative aspect-[4/3] w-full bg-bx-mint-100/60 object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.05} className={flip ? "lg:order-1" : ""}>
            {eyebrow && (
              <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-teal-700">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-4 font-sans text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-balance text-bx-navy-900 sm:text-5xl">
              {heading}
            </h2>
            {copy && (
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-bx-slate-500 sm:text-lg">
                {copy}
              </p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="mt-7 space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-600" />
                    <span className="text-[15px] leading-relaxed text-bx-navy-900 sm:text-base">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {children}
            {ctaLabel && ctaHref && (
              <div className="mt-8">
                <ButtonLink href={ctaHref} variant="secondary">
                  {ctaLabel}
                </ButtonLink>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
