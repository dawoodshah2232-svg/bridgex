/**
 * No-Code Studio — builder family explorer.
 *
 * Left: the eleven builders as a list. Right: the selected builder's story
 * plus a SIMULATED builder panel — a static illustration of what a builder
 * screen looks like, clearly labelled as a demo. Nothing here edits or
 * publishes real configuration; there is no live publishing behind this
 * page, and the UI says so.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { STUDIO_BUILDERS } from "@/content/platform-studio";
import Icon from "@/components/icons";
import DemoLabel from "@/components/ui/DemoLabel";
import { onTabListKeyDown } from "./tabs";

export default function StudioBuilderTabs() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const builder = STUDIO_BUILDERS[selected];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-4">
        <div
          role="tablist"
          aria-label="Studio builders"
          aria-orientation="vertical"
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1"
        >
          {STUDIO_BUILDERS.map((item, i) => {
            const isActive = i === selected;
            return (
              <button
                key={item.id}
                id={`studio-tab-${i}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="studio-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) =>
                  onTabListKeyDown(e, i, STUDIO_BUILDERS.length, "studio-tab", setSelected)
                }
                className={`flex min-h-[52px] items-center gap-3 border px-4 text-left font-sans text-[15px] font-bold transition-colors duration-200 ${
                  isActive
                    ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                    : "border-bx-teal-500/25 bg-bx-white text-bx-navy-900 hover:border-bx-teal-500/60"
                }`}
              >
                <Icon
                  name={item.icon}
                  size={20}
                  className={`shrink-0 ${isActive ? "text-bx-teal-400" : "text-bx-teal-600"}`}
                />
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={builder.id}
            id="studio-panel"
            role="tabpanel"
            aria-labelledby={`studio-tab-${selected}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-3xl">
              {builder.name}
            </h3>
            <p className="mt-2 font-sans text-lg font-bold text-bx-teal-700">
              {builder.tagline}
            </p>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-bx-slate-500">
              {builder.detail}
            </p>

            {/* Simulated builder panel — illustration only, never live editing */}
            <div className="mt-8 border border-bx-teal-500/30 bg-bx-white rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-teal-500/25 px-5 py-3">
                <p className="font-sans text-sm font-bold text-bx-navy-900">
                  {builder.name} builder — simulated view
                </p>
                <DemoLabel text="Simulated editing — demo preview" />
              </div>
              <ul className="divide-y divide-bx-teal-500/15 px-5 py-2">
                {builder.sample.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 py-3 font-sans text-[15px] text-bx-navy-900"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rotate-45 bg-bx-teal-600"
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="border-t border-bx-teal-500/25 px-5 py-3 text-sm leading-relaxed text-bx-slate-500">
                This panel illustrates the shape of a builder screen. It does
                not edit or publish configuration — a working studio is shown
                in a private demo.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
