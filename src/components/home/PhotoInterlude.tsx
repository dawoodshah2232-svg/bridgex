/**
 * H06 — Immersive photographic interlude: a full-bleed boardroom photograph
 * with a slow scroll-linked drift and a maroon overlay. One statement, one
 * line of support, one link. The drift is transform-only and disabled for
 * reduced motion.
 */
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { asset } from "@/lib/paths";
import { Container } from "../ui/Container";
import Icon from "../icons";

export default function PhotoInterlude() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      aria-label="Built for the people who run the business"
      className="relative flex min-h-[480px] items-center overflow-hidden bg-bx-maroon-950 text-bx-ivory lg:min-h-[70vh]"
    >
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { y }}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <img
          src={asset("/images/interlude-boardroom.jpg")}
          alt=""
          width={1920}
          height={1282}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-bx-maroon-950/62"
      />
      <Container className="relative py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-[13px] font-sans font-bold uppercase tracking-[0.28em] text-bx-gold-400">
            Operational excellence
          </p>
          <h2 className="mt-5 font-display text-[38px] font-semibold leading-[1.08] sm:text-6xl">
            Built for the people who run the business.
          </h2>
          <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-bx-champagne/90 sm:text-lg">
            Technology is judged at 9am on a Monday, in the middle of a queue
            — not in a demo. BridgeX is designed for the desks that live in it:
            clear queues, honest statuses, and nothing hidden behind a ticket.
          </p>
          <Link
            href="/company/about"
            className="group mt-8 inline-flex items-center gap-2 font-sans text-base font-bold text-bx-gold-400 hover:text-bx-champagne"
          >
            About BridgeX
            <Icon
              name="arrowRight"
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
