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
                    ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                    : "border-bx-gold-500/25 bg-bx-white text-bx-ink hover:border-bx-gold-500/60"
                }`}
              >
                <Icon
                  name={item.icon}
                  size={20}
                  className={`shrink-0 ${isActive ? "text-bx-gold-400" : "text-bx-gold-600"}`}
                />
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={builder.id}
            id="studio-panel"
            role="tabpanel"
            aria-labelledby={`studio-tab-${selected}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border border-bx-gold-500/25 bg-bx-white p-6 sm:p-8 lg:p-10"
          >
            <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink sm:text-3xl">
              {builder.name}
            </h3>
            <p className="mt-2 font-sans text-lg font-bold text-bx-maroon-700">
              {builder.tagline}
            </p>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-bx-muted">
              {builder.detail}
            </p>

            {/* Simulated builder panel — illustration only, never live editing */}
            <div className="mt-8 border border-bx-gold-500/30 bg-bx-ivory">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-gold-500/25 px-5 py-3">
                <p className="font-sans text-sm font-bold text-bx-ink">
                  {builder.name} builder — simulated view
                </p>
                <DemoLabel text="Simulated editing — demo preview" />
              </div>
              <ul className="divide-y divide-bx-gold-500/15 px-5 py-2">
                {builder.sample.map((line) => (
                  <li
                    key={line}
                    className="flex items-center gap-3 py-3 font-sans text-[15px] text-bx-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rotate-45 bg-bx-gold-600"
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="border-t border-bx-gold-500/25 px-5 py-3 text-sm leading-relaxed text-bx-muted">
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
