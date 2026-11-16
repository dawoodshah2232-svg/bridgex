/**
 * Counter — animated count-up for real numbers already on the site.
 *
 * The final value is rendered at SSR, so no-JS and first paint always
 * show the true number; the count-up only runs in the browser, once,
 * when the number scrolls into view (IntersectionObserver, rAF,
 * ease-out cubic, ~1.2s). With prefers-reduced-motion the number
 * stays at its final value and never animates. Only wire this to
 * numbers that are already published on the site — never invent
 * stats to count (the site deliberately claims no metrics it
 * cannot stand behind).
 */
"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1200,
  className = "",
}: {
  /** The real final number — rendered at SSR, so always visible. */
  value: number;
  /** Decimal places (default 0). */
  decimals?: number;
  /** Text before the number, e.g. "$". */
  prefix?: string;
  /** Text after the number, e.g. "%". */
  suffix?: string;
  /** Count-up duration in ms (default 1200). */
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Reduced motion: stay at the final value, no animation.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCurrent(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setCurrent(value * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  // SSR / no-JS / pre-hydration: the final value, always.
  const shown = mounted ? current : value;
  const formatted = shown.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
