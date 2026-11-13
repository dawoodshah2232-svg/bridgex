/**
 * H01 — Cinematic hero.
 *
 * Real photography (illuminated cable-stayed bridge at night), maroon
 * vignette scrim for headline contrast, spec-required eyebrow, H1, support
 * copy, two CTAs, scroll cue, and an animated gold bridge-line motif.
 * A compact operations preview (desktop only) shows the product in miniature
 * — clearly labelled as illustrative demo data.
 */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { asset } from "@/lib/paths";
import { Container } from "../ui/Container";
import { ButtonLink } from "../ui/Button";
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
        transition: { duration: 2, delay: 0.6, ease: EASE },
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
        stroke="#C29A55"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        {...draw}
      />
      {/* Suspension cables */}
      <motion.path
        d="M0 110 Q300 30 600 44 Q900 30 1200 110"
        fill="none"
        stroke="#D9B875"
        strokeOpacity="0.55"
        strokeWidth="1.25"
        {...draw}
      />
      {/* Towers */}
      <motion.path
        d="M300 18 V118 M900 18 V118"
        fill="none"
        stroke="#C29A55"
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
          stroke="#C29A55"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      ))}
      {/* Tower beacons */}
      <circle cx="300" cy="14" r="3" fill="#D9B875" />
      <circle cx="900" cy="14" r="3" fill="#D9B875" />
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

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bx-maroon-950 text-bx-ivory">
      {/* Background photograph + maroon vignette scrim */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={asset("/images/hero-bridge.jpg")}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_center] animate-bx-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bx-maroon-950/95 via-bx-maroon-950/72 to-bx-maroon-950/35" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bx-maroon-950 to-transparent" />
      </div>

      <Container className="relative flex flex-1 flex-col justify-center pb-16 pt-[136px] sm:pt-[152px]">
        <div className="max-w-3xl">
          <motion.p
            {...rise(0.1)}
            className="flex items-center gap-3 text-[13px] font-sans font-bold uppercase tracking-[0.28em] text-bx-gold-400"
          >
            <span aria-hidden="true" className="h-px w-10 bg-bx-gold-400" />
            BridgeX&nbsp;|&nbsp;Capital Markets Technology
          </motion.p>

          <motion.h1
            {...rise(0.22)}
            className="mt-6 font-sans text-[42px] font-extrabold leading-[1.04] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[76px]"
          >
            Connect{" "}
            <em className="font-display font-semibold italic tracking-normal text-bx-champagne">
              every part
            </em>{" "}
            of your financial business.
          </motion.h1>

          <motion.p
            {...rise(0.34)}
            className="mt-6 max-w-[62ch] text-lg leading-relaxed text-bx-champagne/90 sm:text-xl"
          >
            From onboarding and client relationships to trading operations,
            payments and partner growth — BridgeX brings your workflows
            together in one adaptable technology ecosystem.
          </motion.p>

          <motion.div
            {...rise(0.46)}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <ButtonLink href="/book-demo" size="lg">
              Book a Private Demo
            </ButtonLink>
            <ButtonLink href="/platform" variant="secondaryLight" size="lg">
              Explore Our Platform
            </ButtonLink>
          </motion.div>
        </div>

        {/* Operations preview — desktop only, illustrative data */}
        <motion.aside
          {...rise(0.6)}
          aria-label="Operations preview"
          className="absolute bottom-24 right-10 hidden w-[340px] border border-bx-gold-500/40 bg-bx-maroon-950/85 p-5 backdrop-blur-sm xl:block"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-champagne">
              Operations · Today
            </p>
          </div>
          <div className="mt-3">
            <DemoLabel dark />
          </div>
          <ul className="mt-4 divide-y divide-bx-gold-500/20">
            {PREVIEW_ROWS.map((row) => (
              <li key={row.label} className="flex items-baseline justify-between gap-3 py-2.5">
                <span>
                  <span className="block text-sm font-bold text-bx-ivory">
                    {row.label}
                  </span>
                  <span className="block text-[13px] text-bx-champagne/70">
                    {row.detail}
                  </span>
                </span>
                <span className="shrink-0 text-[12px] font-bold uppercase tracking-wide text-bx-gold-400">
                  {row.state}
                </span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </Container>

      {/* Gold bridge-line motif + scroll cue */}
      <div className="relative">
        <div className="mx-auto max-w-[1440px] px-5 opacity-70 sm:px-8 lg:px-10">
          <BridgeMotif />
        </div>
        <Container className="relative pb-8">
          <Link
            href="#value"
            className="group inline-flex items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-champagne/80 transition-colors hover:text-bx-gold-400"
          >
            Scroll
            <span className="animate-bounce text-bx-gold-400">
              <Icon name="chevronDown" size={18} />
            </span>
          </Link>
        </Container>
      </div>
    </section>
  );
}
