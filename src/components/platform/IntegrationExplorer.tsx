/**
 * Integrations — category explorer.
 *
 * Five provider CATEGORIES (never named providers, never logos): selecting
 * a category shows what its adapters handle and the honest note about what
 * a connection requires before it goes live. No claim is made that any
 * specific provider is integrated.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { INTEGRATION_CATEGORIES } from "@/content/platform-studio";
import Icon from "@/components/icons";
import { onTabListKeyDown } from "./tabs";

export default function IntegrationExplorer() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const category = INTEGRATION_CATEGORIES[selected];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Integration categories"
        className="grid grid-cols-2 gap-3 lg:grid-cols-5"
      >
        {INTEGRATION_CATEGORIES.map((item, i) => {
          const isActive = i === selected;
          return (
            <button
              key={item.id}
              id={`integration-tab-${i}`}
              role="tab"
              aria-selected={isActive}
              aria-controls="integration-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) =>
                onTabListKeyDown(
                  e,
                  i,
                  INTEGRATION_CATEGORIES.length,
                  "integration-tab",
                  setSelected,
                )
              }
              className={`flex min-h-[96px] flex-col items-start gap-2 border px-4 py-4 text-left transition-colors duration-200 ${
                isActive
                  ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                  : "border-bx-teal-500/25 bg-bx-white text-bx-navy-900 hover:border-bx-teal-500/60"
              }`}
            >
              <Icon
                name={item.icon}
                size={26}
                className={isActive ? "text-bx-teal-400" : "text-bx-teal-600"}
              />
              <span className="font-sans text-[15px] font-extrabold leading-tight">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={category.id}
          id="integration-panel"
          role="tabpanel"
          aria-labelledby={`integration-tab-${selected}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-8 border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
        >
          <div className="lg:col-span-7">
            <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-3xl">
              {category.name}
            </h3>
            <p className="mt-2 font-sans text-lg font-bold text-bx-teal-700">
              {category.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-bx-slate-500">{category.detail}</p>
            <p className="mt-6 border-l-2 border-bx-teal-500 bg-bx-mint-50 px-4 py-3 text-[15px] leading-relaxed text-bx-navy-900">
              {category.note}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-teal-700">
              What the adapter handles
            </p>
            <ul className="mt-4 space-y-3">
              {category.handles.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-navy-900">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
