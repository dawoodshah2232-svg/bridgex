/**
 * HubExplorer — the Resource Hub's working filter: a text search plus
 * category pills over the seeded resource index. Client-side only and
 * honest about scope: it filters the resources on this site, not the
 * whole web. Full site search arrives in Batch 4.
 */
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Icon, { type IconName } from "@/components/icons";
import { asset } from "@/lib/paths";
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

/** Resource-type marker icon per category — shown on pills and cards. */
const CATEGORY_ICONS: Record<"All" | ResourceCategory, IconName> = {
  All: "layers",
  Insights: "book",
  Guides: "document",
  "Product updates": "refresh",
  Developers: "code",
  Events: "calendar",
  "Case studies": "users",
};

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
            className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-teal-700"
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
            className="mt-2 min-h-[52px] w-full border-2 border-bx-navy-900/25 bg-bx-white px-4 font-body text-base text-bx-navy-900 placeholder:text-bx-slate-500/80 focus:border-bx-navy-700 focus:outline-none"
          />
        </div>
        <p
          aria-live="polite"
          className="font-sans text-sm font-bold text-bx-slate-500"
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
              className={`inline-flex min-h-[44px] items-center gap-2 border-2 px-4 font-sans text-sm font-bold transition-colors duration-200 ${
                active
                  ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                  : "border-bx-navy-900/25 bg-transparent text-bx-navy-900 hover:border-bx-navy-900"
              }`}
            >
              <Icon
                name={CATEGORY_ICONS[c]}
                size={16}
                className={active ? "text-bx-teal-400" : "text-bx-teal-600"}
              />
              {c}
            </button>
          );
        })}
      </div>

      {results.length === 0 ? (
        <div className="mt-10 border border-bx-teal-500/30 bg-bx-white rounded-2xl px-6 py-12 text-center sm:px-10">
          <h3 className="font-sans text-xl font-extrabold text-bx-navy-900">
            Nothing matches that search
          </h3>
          <p className="mx-auto mt-3 max-w-[52ch] text-base leading-relaxed text-bx-slate-500">
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
            className="mt-6 min-h-[48px] border-2 border-bx-navy-900 px-6 font-sans text-[15px] font-bold text-bx-navy-900 transition-colors hover:bg-bx-navy-900 hover:text-bx-white"
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
                className="group flex h-full flex-col overflow-hidden border border-bx-teal-500/30 bg-bx-white rounded-2xl transition-colors duration-200 hover:border-bx-teal-500/70 hover:bg-bx-mint-50/60"
              >
                <div className="overflow-hidden">
                  <img
                    src={asset(item.image)}
                    alt={item.imageAlt}
                    width={1200}
                    height={750}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex items-center gap-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-teal-700">
                    <Icon
                      name={CATEGORY_ICONS[item.category]}
                      size={16}
                      className="text-bx-teal-600"
                    />
                    {item.category}
                  </span>
                  <span className="mt-3 font-sans text-xl font-extrabold leading-snug text-bx-navy-900">
                    {item.title}
                  </span>
                  <span className="mt-3 flex-1 text-[15px] leading-relaxed text-bx-slate-500">
                    {item.summary}
                  </span>
                  <span className="mt-5 flex items-center justify-between gap-3 border-t border-bx-teal-500/25 pt-4">
                    <span className="font-sans text-[13px] font-bold text-bx-slate-500">
                      {item.meta}
                    </span>
                    <Icon
                      name="arrowRight"
                      size={18}
                      className="shrink-0 text-bx-teal-600 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
