/**
 * Scroll reveal — framer-motion, honours prefers-reduced-motion.
 *
 * Content is visible if JS fails: framer-motion applies the hidden initial
 * state only after hydration, so the server-rendered HTML is fully visible
 * with no JavaScript. With reduced motion, no transform is applied at all.
 */
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  /** Stagger delay in seconds (60–90ms steps between siblings). */
  delay?: number;
  /** Rise distance in px (16–32). */
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
