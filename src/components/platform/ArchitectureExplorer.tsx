/**
 * Architecture page — interactive stacked diagram.
 *
 * The four layers render as a stacked SVG-free diagram (real HTML buttons,
 * so the diagram is keyboard-operable and readable without JS), joined by
 * a gold trace line on the left. Below the stack, the shared foundation
 * bar lists the six cross-cutting capabilities; selecting a layer or a
 * foundation item swaps the detail panel on the right.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FOUNDATION_ITEMS, PLATFORM_LAYERS } from "@/content/platform";
import Icon from "@/components/icons";
import { onTabListKeyDown } from "./tabs";

type Selection =
  | { kind: "layer"; index: number }
  | { kind: "foundation"; index: number };

export default function ArchitectureExplorer() {
  const [selection, setSelection] = useState<Selection>({ kind: "layer", index: 0 });
  const reduceMotion = useReducedMotion();

  const isLayer = selection.kind === "layer";
  const layer = PLATFORM_LAYERS[isLayer ? selection.index : 0];
  const foundation = FOUNDATION_ITEMS[!isLayer ? selection.index : 0];

  const selectLayer = (i: number) => setSelection({ kind: "layer", index: i });
  const selectFoundation = (i: number) =>
    setSelection({ kind: "foundation", index: i });

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* The stack */}
      <div className="lg:col-span-6">
        <div
          role="tablist"
          aria-label="Architecture layers"
          aria-orientation="vertical"
          className="relative"
        >
          {/* Gold trace line joining the layers */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[27px] top-6 w-px bg-bx-gold-500/50"
          />
          <div className="relative flex flex-col gap-3">
            {PLATFORM_LAYERS.map((item, i) => {
              const isActive = isLayer && selection.index === i;
              return (
                <button
                  key={item.id}
                  id={`arch-layer-${i}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="arch-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectLayer(i)}
                  onKeyDown={(e) =>
                    onTabListKeyDown(e, i, PLATFORM_LAYERS.length, "arch-layer", selectLayer)
                  }
                  className={`flex min-h-[76px] items-center gap-4 border px-5 py-4 text-left transition-colors duration-200 ${
                    isActive
                      ? "border-bx-gold-500 bg-bx-maroon-900 text-bx-ivory"
                      : "border-bx-gold-500/25 bg-bx-white text-bx-ink hover:border-bx-gold-500/60"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`relative z-10 h-3 w-3 shrink-0 rotate-45 border ${
                      isActive
                        ? "border-bx-gold-400 bg-bx-gold-400"
                        : "border-bx-gold-600 bg-bx-ivory"
                    }`}
                  />
                  <span className="flex-1">
                    <span className="block font-sans text-lg font-extrabold leading-tight">
                      {item.name}
                    </span>
                    <span
                      className={`mt-0.5 block text-sm leading-snug ${
                        isActive ? "text-bx-champagne/85" : "text-bx-muted"
                      }`}
                    >
                      {item.text}
                    </span>
                  </span>
                  <Icon
                    name={item.icon}
                    size={26}
                    className={isActive ? "text-bx-gold-400" : "text-bx-gold-600"}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Shared foundation */}
        <p className="mb-3 mt-8 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
          Shared foundation — select to inspect
        </p>
        <div
          role="tablist"
          aria-label="Shared foundation"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {FOUNDATION_ITEMS.map((item, i) => {
            const isActive = !isLayer && selection.index === i;
            return (
              <button
                key={item.title}
                id={`arch-foundation-${i}`}
                role="tab"
                aria-selected={isActive}
                aria-controls="arch-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectFoundation(i)}
                onKeyDown={(e) =>
                  onTabListKeyDown(
                    e,
                    i,
                    FOUNDATION_ITEMS.length,
                    "arch-foundation",
                    selectFoundation,
                  )
                }
                className={`flex min-h-[64px] flex-col items-start gap-1.5 border px-4 py-3 text-left transition-colors duration-200 ${
                  isActive
                    ? "border-bx-gold-500 bg-bx-maroon-800 text-bx-ivory"
                    : "border-bx-gold-500/25 bg-bx-cream text-bx-ink hover:border-bx-gold-500/60"
                }`}
              >
                <Icon
                  name={item.icon}
                  size={20}
                  className={isActive ? "text-bx-gold-400" : "text-bx-gold-600"}
                />
                <span className="font-sans text-sm font-bold leading-tight">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="lg:col-span-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isLayer ? `layer-${selection.index}` : `foundation-${selection.index}`}
            id="arch-panel"
            role="tabpanel"
            aria-labelledby={
              isLayer ? `arch-layer-${selection.index}` : `arch-foundation-${selection.index}`
            }
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col border border-bx-gold-500/25 bg-bx-white p-6 sm:p-8 lg:p-10"
          >
            {isLayer ? (
              <>
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
                  Layer — {layer.name}
                </p>
                <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink sm:text-3xl">
                  {layer.tag}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-bx-muted">{layer.detail}</p>
                <ul className="mt-6 space-y-3">
                  {layer.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-ink">
                      <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-gold-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    href={layer.href}
                    className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-maroon-700 hover:text-bx-maroon-900"
                  >
                    Open the {layer.name} page
                    <Icon
                      name="arrowRight"
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
                  Shared foundation
                </p>
                <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink sm:text-3xl">
                  {foundation.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-bx-muted">{foundation.text}</p>
                <p className="mt-4 text-base leading-relaxed text-bx-muted">{foundation.detail}</p>
                <p className="mt-auto pt-8 text-sm leading-relaxed text-bx-muted">
                  Foundation capabilities run under every layer — they are the
                  reason a change in one layer is visible to the others without
                  a sync, a copy or a second source of truth.
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
