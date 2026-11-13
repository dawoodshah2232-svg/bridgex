/**
 * SearchBox — the search experience for /search.
 *
 * Live filtering as the user types (client-side index from src/lib/search),
 * results grouped into Pages / Insights / Guides with counts, an empty
 * state, and a popular-pages state when the query is empty.
 *
 * Keyboard: ArrowDown / ArrowUp move the active result, Enter opens it
 * (or, with nothing active, saves the query to the URL so the search is
 * shareable), Escape clears the active result, then the query. The input
 * is a combobox wired to the results listbox via aria-activedescendant;
 * the result count is announced through a polite live region.
 */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import Icon from "../icons";
import {
  groupResults,
  popularEntries,
  searchEntries,
} from "@/lib/search";
import SearchIcon from "./SearchIcon";

export default function SearchBox({
  initialQuery = "",
  autoFocus = false,
}: {
  /** Query to start with — from the ?q= deep-link on the search page. */
  initialQuery?: string;
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();
  const inputId = useId();

  // Follow ?q= when the page is reached by client-side navigation to a
  // different query (typing never changes the URL until submit, so this
  // does not fight the user).
  useEffect(() => {
    setQuery(initialQuery);
    setActiveIndex(-1);
  }, [initialQuery]);

  const trimmed = query.trim();
  const results = useMemo(
    () => (trimmed ? searchEntries(trimmed) : []),
    [trimmed],
  );
  const groups = useMemo(() => groupResults(results), [results]);
  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  // Flat keyboard-nav index per result, precomputed so render stays pure.
  const indexedGroups = useMemo(() => {
    let idx = -1;
    return groups.map((group) => ({
      ...group,
      items: group.items.map((item) => ({ item, idx: ++idx })),
    }));
  }, [groups]);
  const popular = useMemo(() => popularEntries(), []);
  const searching = trimmed.length > 0;

  // Keep the active result visible while arrowing through the list.
  useEffect(() => {
    if (activeIndex < 0) return;
    document
      .getElementById(`${listboxId}-option-${activeIndex}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, listboxId]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && flat[activeIndex]) {
        e.preventDefault();
        router.push(flat[activeIndex].href);
      }
      // With nothing active, the form submits (see onSubmit) and saves
      // the query to the URL.
    } else if (e.key === "Escape") {
      if (activeIndex >= 0) {
        e.preventDefault();
        setActiveIndex(-1);
      } else if (query) {
        e.preventDefault();
        setQuery("");
        inputRef.current?.focus();
      }
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Persist the query in the URL so the search is shareable.
    router.replace(
      trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search",
      { scroll: false },
    );
  }

  function clearQuery() {
    setQuery("");
    setActiveIndex(-1);
    inputRef.current?.focus();
  }

  const activeId =
    activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined;
  const resultCountText = searching
    ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${trimmed}”`
    : "";

  return (
    <div>
      <form onSubmit={onSubmit} role="search" className="relative">
        <label htmlFor={inputId} className="sr-only">
          Search BridgeX
        </label>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bx-gold-600"
        >
          <SearchIcon size={22} />
        </span>
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          value={query}
          autoFocus={autoFocus}
          autoComplete="off"
          spellCheck={false}
          role="combobox"
          aria-expanded={searching}
          aria-controls={listboxId}
          aria-activedescendant={activeId}
          aria-autocomplete="list"
          aria-describedby={`${listboxId}-count`}
          placeholder="Search pages, insights and guides…"
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={onKeyDown}
          className="min-h-[56px] w-full border border-bx-maroon-900/25 bg-bx-white py-3 pl-12 pr-12 font-body text-lg text-bx-ink placeholder:text-bx-muted/70 transition-colors duration-200 hover:border-bx-maroon-900/50"
        />
        {query && (
          <button
            type="button"
            onClick={clearQuery}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center text-bx-muted transition-colors hover:text-bx-maroon-700"
          >
            <Icon name="close" size={20} />
          </button>
        )}
      </form>

      {/* Result count — polite live region so screen readers hear it. */}
      <p
        id={`${listboxId}-count`}
        aria-live="polite"
        className="mt-4 font-sans text-sm font-bold text-bx-muted"
      >
        {searching ? resultCountText : "Type to search every page, insight and guide."}
      </p>

      {searching && results.length === 0 && (
        <div className="mt-8 border border-bx-gold-500/40 bg-bx-cream px-6 py-10 text-center sm:px-10">
          <p className="font-sans text-xl font-extrabold text-bx-ink">
            Nothing matched “{trimmed}”.
          </p>
          <p className="mx-auto mt-3 max-w-[52ch] text-base leading-relaxed text-bx-muted">
            Try a different word — “onboarding”, “payments” or “partners”, for
            example — or start from one of the sections below.
          </p>
          <p className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 font-sans text-[15px] font-bold">
            <Link href="/platform" className="text-bx-maroon-700 underline underline-offset-4 hover:text-bx-maroon-900">
              Platform overview
            </Link>
            <Link href="/resources" className="text-bx-maroon-700 underline underline-offset-4 hover:text-bx-maroon-900">
              Resource hub
            </Link>
            <Link href="/company/contact" className="text-bx-maroon-700 underline underline-offset-4 hover:text-bx-maroon-900">
              Contact us
            </Link>
          </p>
        </div>
      )}

      {searching && indexedGroups.length > 0 && (
        <div id={listboxId} role="listbox" aria-label="Search results" className="mt-8 space-y-12">
          {indexedGroups.map((group) => (
            <div key={group.group} role="group" aria-label={group.label}>
              <h2 className="flex items-baseline gap-3 border-b border-bx-gold-500/30 pb-3 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bx-maroon-700">
                {group.label}
                <span className="text-[13px] font-bold normal-case tracking-normal text-bx-muted">
                  {group.items.length} {group.items.length === 1 ? "result" : "results"}
                </span>
              </h2>
              <ul className="divide-y divide-bx-gold-500/20">
                {group.items.map(({ item, idx }) => {
                  const isActive = idx === activeIndex;
                  return (
                    <li
                      key={item.id}
                      id={`${listboxId}-option-${idx}`}
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`transition-colors duration-150 ${isActive ? "bg-bx-cream" : ""}`}
                    >
                      <Link
                        href={item.href}
                        tabIndex={-1}
                        className="block px-3 py-5 sm:px-4"
                      >
                        <span className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-bx-gold-600">
                          {item.groupLabel}
                        </span>
                        <span className="mt-1 block font-sans text-lg font-extrabold leading-snug text-bx-ink sm:text-xl">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-[15px] leading-relaxed text-bx-muted">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      {!searching && (
        <div className="mt-10">
          <h2 className="border-b border-bx-gold-500/30 pb-3 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bx-maroon-700">
            Popular pages
          </h2>
          <ul className="mt-2 grid gap-x-10 sm:grid-cols-2">
            {popular.map((item) => (
              <li key={item.id} className="border-b border-bx-gold-500/20">
                <Link href={item.href} className="group block py-4">
                  <span className="flex items-center justify-between gap-4 font-sans text-[16px] font-bold text-bx-ink transition-colors group-hover:text-bx-maroon-700">
                    {item.title}
                    <Icon
                      name="arrowRight"
                      size={18}
                      className="shrink-0 text-bx-gold-600 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="mt-1 block text-[14px] leading-relaxed text-bx-muted">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
