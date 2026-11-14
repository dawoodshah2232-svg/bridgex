/**
 * Scroll reveal — framer-motion, honours prefers-reduced-motion.
 *
 * Transform-only by design (fix, 14 Nov): the reveal moves content
 * up into place but never touches opacity, so content is at full
 * opacity at every moment — a scroll reveal can no longer leave a
 * section looking pale or washed out mid-animation, and there is no
 * hidden state for a missed trigger to strand. The mount gate stays:
 * the server-rendered HTML is fully visible, so the page is readable
 * with no JavaScript and at first paint before hydration. Elements
 * already in view at hydration render visible with no flash;
 * below-fold elements rise in 0.5s once scrolled into view, with
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

  // Transform-only: opacity is never animated, so content can never
  // be caught pale mid-reveal or stranded below full opacity.
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y }}
      whileInView={{ y: 0 }}
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
