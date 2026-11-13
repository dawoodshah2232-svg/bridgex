/**
 * Magnetic — tasteful magnetic hover for primary CTAs (Batch 3).
 *
 * The child drifts a few pixels toward the cursor with a spring and
 * settles back on leave. Desktop pointer only (matchMedia pointer:fine)
 * and disabled for prefers-reduced-motion. Transform-only, no layout
 * shift: the wrapper is inline-block and the motion stays within a few
 * pixels, so neighbouring content never moves.
 */
"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

export default function Magnetic({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  // Render output never depends on this — it only gates the handlers —
  // so evaluating it during render cannot cause a hydration mismatch.
  const finePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches;

  function onMove(e: MouseEvent) {
    if (!finePointer || reduceMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
