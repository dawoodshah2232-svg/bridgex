/**
 * Analytics — role-view tabs: Executive, Finance, Compliance, Sales &
 * Partners. Each panel shows illustrative KPI cards and a code-drawn
 * funnel (real HTML bars, not an image). Every figure is sample data,
 * labelled with DemoLabel.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ANALYTICS_VIEWS } from "@/content/platform-studio";
import Icon from "@/components/icons";
import DemoLabel from "@/components/ui/DemoLabel";
import { onTabListKeyDown } from "./tabs";

export default function AnalyticsViews() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const view = ANALYTICS_VIEWS[selected];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Dashboard views by role"
        className="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {ANALYTICS_VIEWS.map((item, i) => {
          const isActive = i === selected;
          return (
            <button
              key={item.id}
              id={`analytics-tab-${i}`}
              role="tab"
              aria-selected={isActive}
              aria-controls="analytics-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) =>
                onTabListKeyDown(e, i, ANALYTICS_VIEWS.length, "analytics-tab", setSelected)
              }
              className={`flex min-h-[56px] items-center justify-center gap-3 border px-4 font-sans text-base font-bold transition-colors duration-200 ${
                isActive
                  ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                  : "border-bx-gold-500/30 bg-transparent text-bx-ink hover:border-bx-gold-500/70"
              }`}
            >
              <Icon
                name={item.icon}
                size={22}
                className={isActive ? "text-bx-gold-400" : "text-bx-gold-600"}
              />
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view.id}
          id="analytics-panel"
          role="tabpanel"
          aria-labelledby={`analytics-tab-${selected}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 border border-bx-gold-500/25 bg-bx-white p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink sm:text-3xl">
                {view.headline}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-bx-muted">{view.copy}</p>
            </div>
            <DemoLabel text="Illustrative data — demo preview" />
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {view.kpis.map((kpi) => (
              <div key={kpi.label} className="border border-bx-gold-500/25 bg-bx-ivory p-5">
                <dt className="text-sm leading-snug text-bx-muted">{kpi.label}</dt>
                <dd className="mt-2 font-sans text-[28px] font-extrabold leading-none tracking-[-0.01em] text-bx-ink">
                  {kpi.value}
                </dd>
                <dd className="mt-2 text-sm text-bx-muted">{kpi.note}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700">
              Funnel — illustrative proportions
            </p>
            <div className="mt-4 space-y-3">
              {view.funnel.map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-right text-sm font-bold text-bx-ink sm:w-40">
                    {stage.label}
                  </span>
                  <div className="h-9 flex-1 bg-bx-cream">
                    <motion.div
                      className={`flex h-full items-center justify-end pr-3 font-sans text-sm font-bold text-bx-ivory ${
                        ["bg-bx-maroon-800", "bg-bx-maroon-700", "bg-bx-gold-600", "bg-bx-gold-500"][i]
                      }`}
                      initial={reduceMotion ? false : { width: 0 }}
                      animate={{ width: `${stage.value}%` }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {stage.value}%
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bx-muted">
              Percentages are illustrative, showing the shape of a funnel — not
              the performance of any real business.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
