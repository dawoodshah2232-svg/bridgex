/**
 * Platform overview — interactive four-layer explorer.
 * Left: the four layers as a tablist. Right: the selected layer's detail
 * with its capabilities and a link to its page. Keyboard: arrows move
 * between layers (see tabs.ts); panels animate with a short fade/slide.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PLATFORM_LAYERS } from "@/content/platform";
import Icon, { layerIcon } from "@/components/icons";
import { onTabListKeyDown } from "./tabs";

export default function LayerExplorer() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const layer = PLATFORM_LAYERS[selected];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div
          role="tablist"
          aria-label="Platform layers"
          aria-orientation="vertical"
          className="flex flex-col gap-3"
        >
          {PLATFORM_LAYERS.map((item, i) => {
            const isActive = i === selected;
            return (
              <button
                key={item.id}
                id={`layer-tab-${i}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="layer-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) =>
                  onTabListKeyDown(e, i, PLATFORM_LAYERS.length, "layer-tab", setSelected)
                }
                className={`flex min-h-[72px] items-center gap-4 border px-5 py-4 text-left transition-colors duration-200 ${
                  isActive
                    ? "border-bx-teal-500 bg-bx-navy-900 text-bx-white"
                    : "border-bx-teal-500/25 bg-bx-white text-bx-navy-900 hover:border-bx-teal-500/60"
                }`}
              >
                <span
                  className={`font-sans text-sm font-bold ${isActive ? "text-bx-teal-400" : "text-bx-teal-700"}`}
                >
                  0{i + 1}
                </span>
                <span className="flex-1">
                  <span className="block font-sans text-lg font-extrabold leading-tight">
                    {item.name}
                  </span>
                  <span
                    className={`mt-0.5 block text-sm leading-snug ${
                      isActive ? "text-bx-slate-300/85" : "text-bx-slate-500"
                    }`}
                  >
                    {item.tag}
                  </span>
                </span>
                <Icon
                  name={layerIcon(item.id)}
                  size={28}
                  className={isActive ? "text-bx-teal-400" : "text-bx-teal-600"}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-7">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={layer.id}
            id="layer-panel"
            role="tabpanel"
            aria-labelledby={`layer-tab-${selected}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-teal-700">
              Layer 0{selected + 1} — {layer.name}
            </p>
            <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-3xl">
              {layer.tag}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bx-slate-500">{layer.detail}</p>
            <ul className="mt-6 space-y-3">
              {layer.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-navy-900">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-600" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <Link
                href={layer.href}
                className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-teal-700 hover:text-bx-navy-900"
              >
                Explore the {layer.name} layer
                <Icon
                  name="arrowRight"
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
