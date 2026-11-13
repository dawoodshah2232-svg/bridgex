/**
 * HubExplorer — the Resource Hub's working filter: a text search plus
 * category pills over the seeded resource index. Client-side only and
 * honest about scope: it filters the resources on this site, not the
 * whole web. Full site search arrives in Batch 4.
 */
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Icon from "@/components/icons";
import type { HubItem, ResourceCategory } from "@/content/resources";

const CATEGORIES: ("All" | ResourceCategory)[] = [
  "All",
  "Insights",
  "Guides",
  "Product updates",
  "Developers",
  "Events",
  "Case studies",
];

export default function HubExplorer({ items }: { items: HubItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ResourceCategory>("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== "All" && item.category !== category) return false;
      if (!q) return true;
      return `${item.title} ${item.summary} ${item.category}`
        .toLowerCase()
        .includes(q);
    });
  }, [items, query, category]);

  const isFiltered = query.trim() !== "" || category !== "All";

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full max-w-xl">
          <label
            htmlFor="hub-search"
            className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700"
          >
            Search resources
          </label>
          <input
            id="hub-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “onboarding”, “payments”, “rebates”…"
            autoComplete="off"
            className="mt-2 min-h-[52px] w-full border-2 border-bx-maroon-900/25 bg-bx-white px-4 font-body text-base text-bx-ink placeholder:text-bx-muted/80 focus:border-bx-maroon-700 focus:outline-none"
          />
        </div>
        <p
          aria-live="polite"
          className="font-sans text-sm font-bold text-bx-muted"
        >
          {results.length} {results.length === 1 ? "result" : "results"}
          {isFiltered ? " — filters active" : ` of ${items.length}`}
        </p>
      </div>

      <div
        role="group"
        aria-label="Filter by type"
        className="mt-6 flex flex-wrap gap-2.5"
      >
        {CATEGORIES.map((c) => {
          const active = category === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(c)}
              className={`min-h-[44px] border-2 px-4 font-sans text-sm font-bold transition-colors duration-200 ${
                active
                  ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                  : "border-bx-maroon-900/25 bg-transparent text-bx-maroon-900 hover:border-bx-maroon-900"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {results.length === 0 ? (
        <div className="mt-10 border border-bx-gold-500/30 bg-bx-white px-6 py-12 text-center sm:px-10">
          <h3 className="font-sans text-xl font-extrabold text-bx-ink">
            Nothing matches that search
          </h3>
          <p className="mx-auto mt-3 max-w-[52ch] text-base leading-relaxed text-bx-muted">
            The hub is still small — three articles, five guides and a
            handful of updates so far. Try a broader word, or clear the
            filters to see everything.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-6 min-h-[48px] border-2 border-bx-maroon-900 px-6 font-sans text-[15px] font-bold text-bx-maroon-900 transition-colors hover:bg-bx-maroon-900 hover:text-bx-ivory"
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <li key={item.id} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full flex-col border border-bx-gold-500/30 bg-bx-white p-6 transition-colors duration-200 hover:border-bx-gold-500/70 hover:bg-bx-cream/60"
              >
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-maroon-700">
                  {item.category}
                </span>
                <span className="mt-3 font-sans text-xl font-extrabold leading-snug text-bx-ink">
                  {item.title}
                </span>
                <span className="mt-3 flex-1 text-[15px] leading-relaxed text-bx-muted">
                  {item.summary}
                </span>
                <span className="mt-5 flex items-center justify-between gap-3 border-t border-bx-gold-500/25 pt-4">
                  <span className="font-sans text-[13px] font-bold text-bx-muted">
                    {item.meta}
                  </span>
                  <Icon
                    name="arrowRight"
                    size={18}
                    className="shrink-0 text-bx-gold-600 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
