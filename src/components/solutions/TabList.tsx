/**
 * TabList — the ARIA tabs pattern shared by solution previews.
 * Arrow keys move between tabs; Tab moves into the panel. Roving
 * tabindex, unique ids per `prefix` so several tablists can share a page.
 */
"use client";

import { useRef } from "react";

export interface TabDef {
  id: string;
  label: string;
  hint?: string;
}

export default function TabList({
  tabs,
  activeId,
  onSelect,
  prefix,
  ariaLabel,
  dark = false,
}: {
  tabs: TabDef[];
  activeId: string;
  onSelect: (id: string) => void;
  prefix: string;
  ariaLabel: string;
  dark?: boolean;
}) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const idx = tabs.findIndex((t) => t.id === id);
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(idx + dir + tabs.length) % tabs.length];
    onSelect(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex flex-col gap-2 border-b border-bx-gold-500/30 sm:flex-row sm:gap-0"
    >
      {tabs.map((tab) => {
        const selected = activeId === tab.id;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
            role="tab"
            id={`${prefix}-tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={`${prefix}-panel-${tab.id}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(tab.id)}
            onKeyDown={(e) => onKeyDown(e, tab.id)}
            className={`relative min-h-[56px] px-5 py-3 text-left transition-colors duration-200 sm:px-6 ${
              selected
                ? dark
                  ? "text-bx-champagne"
                  : "text-bx-maroon-900"
                : dark
                  ? "text-bx-champagne/60 hover:text-bx-champagne"
                  : "text-bx-muted hover:text-bx-maroon-700"
            }`}
          >
            <span className="block font-sans text-base font-bold">{tab.label}</span>
            {tab.hint && <span className="block text-[13px]">{tab.hint}</span>}
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 -bottom-px h-[2px] bg-bx-gold-500 transition-opacity duration-200 ${
                selected ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
