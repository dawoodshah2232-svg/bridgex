/**
 * ImageText — the alternating image / text block.
 *
 * Photograph on one side inside a gold hairline frame, offset
 * down-right (the frame sits in the wrapper's own margin, so it
 * never overflows — safe at 375px). Eyebrow / heading / copy /
 * check-marked bullets / CTA on the other. `flip` mirrors the
 * two-column layout on desktop; on mobile the image always stacks
 * first, because it is first in the DOM.
 *
 * `image` is a root-relative public path ("/images/team-discussion.jpg");
 * it is routed through `asset()` for the /bridgex basePath.
 */
import type { ReactNode } from "react";
import { asset } from "@/lib/paths";
import Icon from "../icons";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import Reveal from "./Reveal";

type ImageTextTone = "ivory" | "cream" | "white";

const TONES: Record<ImageTextTone, string> = {
  ivory: "bg-bx-ivory",
  cream: "bg-bx-cream",
  white: "bg-bx-white",
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
  tone = "ivory",
  imageWidth = 1200,
  imageHeight = 900,
  className = "",
  children,
}: {
  /** Root-relative public image path, e.g. "/images/team-discussion.jpg". */
  image: string;
  /** Real alt text describing the actual photograph. */
  alt: string;
  /** Optional small tracked label above the heading (maroon-700 on light). */
  eyebrow?: string;
  /** Heading — ReactNode so callers can set a Cormorant accent phrase. */
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
  className?: string;
  /** Optional extra content between the bullets and the CTA. */
  children?: ReactNode;
}) {
  return (
    <section className={`${TONES[tone]} py-20 sm:py-24 lg:py-32 ${className}`}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image first in the DOM: stacks image-first on mobile. */}
          <Reveal className={flip ? "lg:order-2" : ""}>
            {/* The offset gold frame lives inside the wrapper's own
                right/bottom margin, so nothing overflows at 375px. */}
            <div className="relative mb-3 mr-3 sm:mb-4 sm:mr-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-gold-500/60 sm:translate-x-4 sm:translate-y-4"
              />
              <img
                src={asset(image)}
                alt={alt}
                width={imageWidth}
                height={imageHeight}
                loading="lazy"
                className="relative aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.05} className={flip ? "lg:order-1" : ""}>
            {eyebrow && (
              <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-4 font-sans text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-balance text-bx-ink sm:text-5xl">
              {heading}
            </h2>
            {copy && (
              <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-bx-muted sm:text-lg">
                {copy}
              </p>
            )}
            {bullets && bullets.length > 0 && (
              <ul className="mt-7 space-y-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-gold-600" />
                    <span className="text-[15px] leading-relaxed text-bx-ink sm:text-base">
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
