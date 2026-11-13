/**
 * CtaBand — the maroon closing band used at the foot of the homepage (H12)
 * and, in Batch 2, at the foot of inner pages. City-skyline photograph
 * under a heavy maroon overlay, with an animated gold bridge-line motif
 * drawn in SVG (stroke draw on scroll into view; static when reduced
 * motion is preferred).
 */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { asset } from "@/lib/paths";
import { Container } from "./Container";
import { ButtonLink } from "./Button";

function BridgeLine() {
  const reduceMotion = useReducedMotion();
  const pathProps = reduceMotion
    ? {}
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const },
      };
  return (
    <svg
      viewBox="0 0 1200 120"
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      {/* Two bridge spans meeting at the centre pier */}
      <motion.path
        d="M0 100 L560 100 L600 34 L640 100 L1200 100"
        fill="none"
        stroke="#C29A55"
        strokeWidth="1.5"
        {...pathProps}
      />
      <motion.path
        d="M0 100 Q300 20 600 34 Q900 20 1200 100"
        fill="none"
        stroke="#C29A55"
        strokeOpacity="0.45"
        strokeWidth="1"
        {...pathProps}
      />
      {/* Suspenders — tops computed on the cable curve (exact quadratic values) */}
      {[
        [150, 66],
        [300, 44],
        [450, 33],
        [750, 33],
        [900, 44],
        [1050, 66],
      ].map(([x, yTop]) => (
        <line
          key={x}
          x1={x}
          y1={yTop}
          x2={x}
          y2="100"
          stroke="#C29A55"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {/* Centre pier */}
      <line x1="600" y1="34" x2="600" y2="112" stroke="#D9B875" strokeWidth="2" />
      <rect x="596" y="30" width="8" height="8" transform="rotate(45 600 34)" fill="#D9B875" />
    </svg>
  );
}

export default function CtaBand({
  heading = "Build what comes next.",
  copy = "See how BridgeX connects onboarding, operations, payments and partner growth for a business like yours — in a private demo, on your own workflows.",
  primaryLabel = "Book a Private Demo",
  primaryHref = "/book-demo",
  secondaryLabel = "Talk to an Expert",
  secondaryHref = "/company/contact",
}: {
  heading?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bx-maroon-900 text-bx-ivory">
      {/* Skyline photograph under a heavy maroon overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={asset("/images/skyline-sunset.jpg")}
          alt=""
          width={1600}
          height={899}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bx-maroon-950/85" />
      </div>
      <Container className="relative pb-16 pt-20 text-center sm:pt-24 lg:pt-28">
        <h2 className="mx-auto max-w-3xl font-sans text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[62ch] text-base leading-relaxed text-bx-champagne/90 sm:text-lg">
          {copy}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={primaryHref} size="lg">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondaryLight" size="lg">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Container>
      <div className="relative mx-auto max-w-[1280px] px-5 pb-10 sm:px-8 lg:px-10">
        <BridgeLine />
      </div>
    </section>
  );
}
