/**
 * H01 — Cinematic hero.
 *
 * Real photography (dark trading desk: laptop with candlestick chart,
 * blurred market-data monitors behind), navy vignette scrim for
 * headline contrast, spec-required eyebrow, H1, support copy, two
 * CTAs, scroll cue, and an animated teal bridge-line motif.
 * A compact operations preview (desktop only) shows the product in miniature
 * — clearly labelled as illustrative demo data.
 *
 * Entrance is transform-only (fix, 13 Nov): the headline is visible in the
 * server-rendered HTML at first paint and settles into place within ~0.5s
 * after hydration. Never hide hero text behind an opacity-0 initial state —
 * framer-motion bakes it into the SSR HTML and the hero stayed blank for
 * ~5s on a cold load.
 */
"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { asset } from "@/lib/paths";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import DemoLabel from "../ui/DemoLabel";
import Icon from "../icons";

const EASE = [0.22, 1, 0.36, 1] as const;

function BridgeMotif() {
  const reduceMotion = useReducedMotion();
  const draw = reduceMotion
    ? {}
    : {
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 1.4, delay: 0.2, ease: EASE },
      };
  return (
    <svg
      viewBox="0 0 1200 140"
      className="h-auto w-full"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      {/* Deck */}
      <motion.path
        d="M0 110 L1200 110"
        fill="none"
        stroke="#14B8A6"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        {...draw}
      />
      {/* Suspension cables */}
      <motion.path
        d="M0 110 Q300 30 600 44 Q900 30 1200 110"
        fill="none"
        stroke="#2DD4BF"
        strokeOpacity="0.55"
        strokeWidth="1.25"
        {...draw}
      />
      {/* Towers */}
      <motion.path
        d="M300 18 V118 M900 18 V118"
        fill="none"
        stroke="#14B8A6"
        strokeOpacity="0.8"
        strokeWidth="2"
        {...draw}
      />
      {/* Suspenders — tops computed on the cable curve (exact quadratic values) */}
      {[
        [150, 76],
        [225, 63],
        [375, 47],
        [450, 43],
        [525, 42],
        [675, 42],
        [750, 43],
        [825, 47],
        [975, 63],
        [1050, 76],
      ].map(([x, yTop]) => (
        <line
          key={x}
          x1={x}
          y1={yTop}
          x2={x}
          y2="110"
          stroke="#14B8A6"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {/* Tower beacons */}
      <circle cx="300" cy="14" r="3" fill="#2DD4BF" />
      <circle cx="900" cy="14" r="3" fill="#2DD4BF" />
    </svg>
  );
}

const PREVIEW_ROWS = [
  { label: "Onboarding review", detail: "Individual application · Awaiting documents", state: "In review" },
  { label: "Funding approval", detail: "Deposit · Dual approval required", state: "Pending" },
  { label: "Partner payout", detail: "March cycle · 42 partners", state: "Ready" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  // Pause the drift while the hero is fully offscreen — it resumes
  // mid-flight when scrolled back (animationPlayState, not a restart).
  const inView = useInView(sectionRef);

  // Transform-only entrance: text is visible at first paint (SSR HTML
  // carries no opacity: 0) and settles in ≤0.55s after hydration.
  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { y: 16 },
          animate: { y: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bx-navy-950 text-bx-white"
    >
      {/* Background photograph + navy vignette scrim. The scrim is
          light enough for the trading photograph to show (fix, 14 Nov:
          the old 95/85/65 gradient left the left two-thirds almost
          black; final polish the same day: 80/60/35 → 65/45/25, bottom
          gradient 100% → 85%). Rework, 16 Nov: the hero photograph is
          now a dark laptop + blurred trading monitors (Pexels 38412415,
          BINANCE wordmark blurred out) — desaturated + dimmed like the
          inner heroes, with a subtle teal tint from the bottom-left.
          White H1 contrast over the treated hero is 16.6:1 mean /
          6.3:1 at the brightest pixel in the H1 zone (PIL-verified,
          16 Nov, desktop + mobile, incl. Ken Burns drift end-state).
          Re-verify headline contrast whenever the hero photograph
          changes — the old 12.5:1 / 5.4:1 figures were computed
          against the previous bridge photo. */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* fetchPriority="high" makes React 19 emit a preload link for
            this image during SSR — no manual <link> needed. */}
        <img
          src={asset("/images/hero-bridge.jpg")}
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
          style={{ animationPlayState: inView ? "running" : "paused" }}
          className="h-full w-full object-cover object-[70%_center] saturate-[0.8] brightness-[0.92] animate-bx-drift"
        />
        <div className="absolute inset-0 bg-bx-navy-950/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-bx-navy-950/65 via-bx-navy-950/45 to-bx-navy-950/25" />
        <div className="absolute inset-0 bg-gradient-to-tr from-bx-teal-700/15 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bx-navy-950/85 to-transparent" />
      </div>

      <Container className="relative flex flex-1 flex-col justify-center pb-16 pt-[136px] sm:pt-[152px]">
        <div className="max-w-3xl">
          <motion.p
            {...rise(0)}
            className="flex items-center gap-3 text-[13px] font-sans font-bold uppercase tracking-[0.28em] text-bx-teal-400"
          >
            <span aria-hidden="true" className="h-px w-10 bg-bx-teal-400" />
            BridgeX&nbsp;|&nbsp;Capital Markets Technology
          </motion.p>

          <motion.h1
            {...rise(0.05)}
            className="mt-6 font-sans text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[76px]"
          >
            Connect{" "}
            <em className="bg-gradient-to-r from-bx-teal-400 to-bx-cyan-500 bg-clip-text not-italic text-transparent">
              every part
            </em>{" "}
            of your financial business.
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bx-slate-300/90 sm:text-xl"
          >
            From onboarding and client relationships to trading operations,
            payments and partner growth — BridgeX brings your workflows
            together in one adaptable technology ecosystem.
          </motion.p>

          <motion.div
            {...rise(0.15)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <ButtonLink href="/book-demo" size="lg">
                Book a Private Demo
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/platform" variant="secondaryLight" size="lg">
              Explore Our Platform
            </ButtonLink>
          </motion.div>
        </div>

        {/* Operations preview — desktop only, illustrative data */}
        <motion.aside
          {...rise(0.2)}
          aria-label="Operations preview"
          className="absolute bottom-24 right-10 hidden w-[340px] border border-bx-teal-500/40 bg-bx-navy-950/85 p-5 backdrop-blur-sm xl:block"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-slate-300">
              Operations · Today
            </p>
          </div>
          <div className="mt-3">
            <DemoLabel dark />
          </div>
          <ul className="mt-4 divide-y divide-bx-teal-500/20">
            {PREVIEW_ROWS.map((row) => (
              <li key={row.label} className="flex items-baseline justify-between gap-3 py-2.5">
                <span>
                  <span className="block text-sm font-bold text-bx-white">
                    {row.label}
                  </span>
                  <span className="block text-[13px] text-bx-slate-300/70">
                    {row.detail}
                  </span>
                </span>
                <span className="shrink-0 text-[12px] font-bold uppercase tracking-wide text-bx-teal-400">
                  {row.state}
                </span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </Container>

      {/* Teal bridge-line motif + scroll cue */}
      <div className="relative">
        <div className="mx-auto max-w-[1440px] px-5 opacity-70 sm:px-8 lg:px-10">
          <BridgeMotif />
        </div>
        <Container className="relative pb-8">
          <Link
            href="#value"
            className="group inline-flex items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-slate-300/80 transition-colors hover:text-bx-teal-400"
          >
            Scroll
            <span className="animate-bounce text-bx-teal-400">
              <Icon name="chevronDown" size={18} />
            </span>
          </Link>
        </Container>
      </div>
    </section>
  );
}
