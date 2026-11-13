/**
 * PhaseTimeline — interactive implementation-phase explorer for
 * /services/implementation. Keyboard-operable: phases are buttons, arrow
 * keys move between them, and the detail panel is labelled by the active
 * phase. Works without JS only as far as the first phase is visible —
 * the server render shows phase one in full.
 */
"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ImplementationPhase } from "@/content/company";
import Icon from "../icons";

export default function PhaseTimeline({ phases }: { phases: ImplementationPhase[] }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "ArrowDown" && e.key !== "ArrowUp") {
      return;
    }
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    const next = (index + dir + phases.length) % phases.length;
    setActive(next);
    buttons.current[next]?.focus();
  }

  const phase = phases[active];

  return (
    <div>
      {/* Phase selector — horizontal on desktop, stacked on mobile */}
      <div
        role="tablist"
        aria-label="Implementation phases"
        className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {phases.map((p, i) => {
          const isActive = i === active;
          return (
            <button
              key={p.step}
              ref={(el) => {
                buttons.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`phase-tab-${i}`}
              aria-selected={isActive}
              aria-controls="phase-panel"
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-[76px] border px-4 py-4 text-left transition-colors duration-200 ${
                isActive
                  ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                  : "border-bx-maroon-900/20 bg-bx-white text-bx-ink hover:border-bx-maroon-900/60"
              }`}
            >
              <span
                className={`block font-display text-xl font-semibold ${
                  isActive ? "text-bx-gold-400" : "text-bx-gold-600"
                }`}
              >
                {p.step}
              </span>
              <span className="mt-1 block font-sans text-[15px] font-extrabold">
                {p.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          id="phase-panel"
          role="tabpanel"
          aria-labelledby={`phase-tab-${active}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 border border-bx-maroon-900/15 bg-bx-white px-6 py-8 sm:px-10 sm:py-10"
        >
          <p className="font-body text-base leading-relaxed text-bx-muted sm:text-lg">
            {phase.summary}
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
                What happens
              </h3>
              <ul className="mt-4 space-y-3">
                {phase.activities.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-ink">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-bx-gold-600">
                      <Icon name="check" size={18} />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
                Deliverables
              </h3>
              <ul className="mt-4 space-y-3">
                {phase.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-ink">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-bx-gold-600">
                      <Icon name="document" size={18} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-bx-gold-500/30 pt-6 font-body text-[15px] leading-relaxed text-bx-ink">
            <span className="font-sans font-extrabold text-bx-maroon-700">
              Exit criteria:{" "}
            </span>
            {phase.exit}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
