/**
 * Financial operations — lifecycle stepper: Onboard → Open → Fund → Serve
 * → Settle. The five stages render as a connected horizontal stepper on
 * desktop (stacked on mobile); selecting a stage shows its detail panel.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { OPS_STAGES } from "@/content/platform";
import Icon from "@/components/icons";
import { onTabListKeyDown } from "./tabs";

export default function OpsLifecycle() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = OPS_STAGES[selected];

  return (
    <div>
      <div role="tablist" aria-label="Account lifecycle stages">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {OPS_STAGES.map((item, i) => {
            const isActive = i === selected;
            return (
              <li key={item.id} className="relative">
                <button
                  id={`ops-tab-${i}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="ops-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) =>
                    onTabListKeyDown(e, i, OPS_STAGES.length, "ops-tab", setSelected)
                  }
                  className={`flex min-h-[92px] w-full flex-col items-start gap-1 border px-5 py-4 text-left transition-colors duration-200 ${
                    isActive
                      ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                      : "border-bx-gold-500/25 bg-bx-white text-bx-ink hover:border-bx-gold-500/60"
                  }`}
                >
                  <span
                    className={`font-sans text-[13px] font-bold tracking-[0.18em] ${
                      isActive ? "text-bx-gold-400" : "text-bx-maroon-700"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span className="font-sans text-lg font-extrabold leading-tight">
                    {item.title}
                  </span>
                  {i < OPS_STAGES.length - 1 && (
                    <Icon
                      name="arrowRight"
                      size={18}
                      aria-hidden="true"
                      className={`absolute right-3 top-4 hidden lg:block ${
                        isActive ? "text-bx-gold-400" : "text-bx-gold-600"
                      }`}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={stage.id}
          id="ops-panel"
          role="tabpanel"
          aria-labelledby={`ops-tab-${selected}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-8 border border-bx-gold-500/25 bg-bx-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
        >
          <div className="lg:col-span-7">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
              Stage {stage.step} — {stage.title}
            </p>
            <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink sm:text-3xl">
              {stage.text}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bx-muted">{stage.detail}</p>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700">
              What happens here
            </p>
            <ul className="mt-4 space-y-3">
              {stage.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-ink">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-gold-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
