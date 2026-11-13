/**
 * Scroll reveal — framer-motion, honours prefers-reduced-motion.
 *
 * Fast by design (fix, 13 Nov): content must never sit invisible for
 * seconds. The hidden initial state is gated on client mount — the
 * server-rendered HTML is fully visible, so the page is readable with
 * no JavaScript and at first paint before hydration. Elements already
 * in view at hydration render visible with no hide-then-reveal flash;
 * below-fold elements reveal in 0.5s once scrolled into view, with
 * stagger delays capped at 0.15s. With reduced motion, no transform
 * is applied at all.
 *
 * Background: framer-motion bakes `initial={{ opacity: 0 }}` into the
 * SSR HTML as an inline style, so an ungated reveal hides content
 * until JS loads AND the animation runs — the live hero stayed blank
 * for ~5s on a cold load. Never put opacity: 0 in an SSR initial state.
 */
"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
/** Reveal duration in seconds — reveals must not hide content. */
const DURATION = 0.5;
/** Stagger delays are capped so the last sibling is never late. */
const MAX_DELAY = 0.15;

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  /** Stagger delay in seconds (capped at 0.15s). */
  delay?: number;
  /** Rise distance in px (16–32). */
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR / no-JS / reduced motion / already in view: always visible.
  if (!mounted || reduceMotion || inView) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: DURATION,
        delay: Math.min(delay, MAX_DELAY),
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
