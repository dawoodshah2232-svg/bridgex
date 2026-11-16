/**
 * CtaBand — the solid teal closing band (bridgexapps.com style) used
 * at the foot of the homepage (H12) and at the foot of inner pages.
 * White heading and copy, white pill CTA, with an animated white
 * bridge-line motif drawn in SVG (stroke draw on scroll into view;
 * static when reduced motion is preferred).
 */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./Container";
import { ButtonLink } from "./Button";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

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
        stroke="#FFFFFF"
        strokeWidth="1.5"
        {...pathProps}
      />
      <motion.path
        d="M0 100 Q300 20 600 34 Q900 20 1200 100"
        fill="none"
        stroke="#FFFFFF"
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
          stroke="#FFFFFF"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {/* Centre pier */}
      <line x1="600" y1="34" x2="600" y2="112" stroke="#FFFFFF" strokeWidth="2" />
      <rect x="596" y="30" width="8" height="8" transform="rotate(45 600 34)" fill="#FFFFFF" />
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
    <section className="relative overflow-hidden bg-bx-teal-500 text-bx-white">
      {/* Slow-drifting light glow behind the heading — the band's one
          ambient moment (transform-only, still under reduced motion). */}
      <span
        aria-hidden="true"
        className="bx-glow bx-glow--light left-[12%] top-0 h-80 w-[76%]"
      />
      <Container className="relative pb-16 pt-20 text-center sm:pt-24 lg:pt-28">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-sans text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance sm:text-6xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[62ch] text-base leading-relaxed text-bx-white/90 sm:text-lg">
            {copy}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Magnetic>
              <ButtonLink href={primaryHref} variant="onTeal" size="lg">
                {primaryLabel}
              </ButtonLink>
            </Magnetic>
            <ButtonLink href={secondaryHref} variant="secondaryLight" size="lg">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
      <div className="relative mx-auto max-w-[1280px] px-5 pb-10 sm:px-8 lg:px-10">
        <BridgeLine />
      </div>
    </section>
  );
}
