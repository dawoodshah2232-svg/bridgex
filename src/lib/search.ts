/**
 * Client-side search index (spec §4/§12).
 *
 * The index is built from the route registry (all 44 routes: label +
 * description + href + group) plus the seeded insights (title + excerpt)
 * and guides (title + summary). No server, no fetch — the whole index is
 * a few kilobytes of static data, filtered in memory as the user types.
 *
 * Insights and guides have no individual routes: they render as
 * accordions on /resources/blog and /resources/guides, so their results
 * link to the index page with a hash anchor on the item's accordion
 * button (ArticleReader / GuideReader use `article-button-<slug>` and
 * `guide-button-<slug>` ids). If those ids ever change, the link still
 * lands on the right index page — only the scroll-to-item is lost.
 */
import { NAV_GROUPS, ROUTES, type NavGroupId } from "@/content/navigation";
import { INSIGHT_ARTICLES } from "@/content/insights";
import { GUIDES } from "@/content/resources";

export type SearchGroupId = "pages" | "insights" | "guides";

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  href: string;
  group: SearchGroupId;
  /** Small label shown on the result (nav group, or Insights / Guides). */
  groupLabel: string;
  /** Lowercased haystack for matching. */
  haystack: string;
  /** Registry / content order, for stable ties in ranking. */
  order: number;
}

export interface SearchResult extends SearchEntry {
  score: number;
}

function navGroupLabel(group: NavGroupId | "home" | "cta"): string {
  if (group === "home") return "Home";
  if (group === "cta") return "Demo";
  return NAV_GROUPS.find((g) => g.id === group)?.label ?? group;
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  ROUTES.forEach((route, i) => {
    const label = navGroupLabel(route.group);
    entries.push({
      id: `page:${route.href}`,
      title: route.label,
      description: route.description,
      href: route.href,
      group: "pages",
      groupLabel: label,
      haystack: `${route.label} ${route.description} ${label}`.toLowerCase(),
      order: i,
    });
  });

  INSIGHT_ARTICLES.forEach((article, i) => {
    entries.push({
      id: `insight:${article.slug}`,
      title: article.title,
      description: article.excerpt,
      href: `/resources/blog#article-button-${article.slug}`,
      group: "insights",
      groupLabel: "Insights",
      haystack:
        `${article.title} ${article.excerpt} ${article.category}`.toLowerCase(),
      order: 1000 + i,
    });
  });

  GUIDES.forEach((guide, i) => {
    entries.push({
      id: `guide:${guide.slug}`,
      title: guide.title,
      description: guide.summary,
      href: `/resources/guides#guide-button-${guide.slug}`,
      group: "guides",
      groupLabel: "Guides",
      haystack:
        `${guide.title} ${guide.summary} ${guide.category} ${guide.keyPoints.join(" ")}`.toLowerCase(),
      order: 2000 + i,
    });
  });

  return entries;
}

/** The full index — built once at module load; static data, tiny. */
export const SEARCH_INDEX = buildSearchIndex();

/**
 * Filter and rank the index for a query. Every token must appear in the
 * entry's haystack; title matches score highest, then description, then
 * group label, with a bonus for title-start matches. Ties keep registry
 * order. An empty query returns no results (the page shows popular pages
 * instead).
 */
export function searchEntries(
  query: string,
  entries: SearchEntry[] = SEARCH_INDEX,
): SearchResult[] {
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: SearchResult[] = [];
  for (const entry of entries) {
    if (!tokens.every((token) => entry.haystack.includes(token))) continue;
    let score = 0;
    const title = entry.title.toLowerCase();
    const description = entry.description.toLowerCase();
    const groupLabel = entry.groupLabel.toLowerCase();
    for (const token of tokens) {
      if (title.includes(token)) score += 10;
      if (description.includes(token)) score += 5;
      if (groupLabel.includes(token)) score += 2;
    }
    if (title.startsWith(tokens[0])) score += 5;
    scored.push({ ...entry, score });
  }
  scored.sort((a, b) => b.score - a.score || a.order - b.order);
  return scored;
}

export interface SearchGroup {
  group: SearchGroupId;
  label: string;
  items: SearchResult[];
}

/** Split ranked results into Pages / Insights / Guides, dropping empties. */
export function groupResults(results: SearchResult[]): SearchGroup[] {
  const order: { group: SearchGroupId; label: string }[] = [
    { group: "pages", label: "Pages" },
    { group: "insights", label: "Insights" },
    { group: "guides", label: "Guides" },
  ];
  return order
    .map((g) => ({
      ...g,
      items: results.filter((r) => r.group === g.group),
    }))
    .filter((g) => g.items.length > 0);
}

/**
 * Popular pages for the empty-query state: every group's overview and
 * featured route (legal excluded), plus the demo booking page — all from
 * the registry, nothing hardcoded.
 */
export function popularEntries(): SearchEntry[] {
  const hrefs = new Set<string>();
  for (const group of NAV_GROUPS) {
    if (group.id === "legal") continue;
    if (group.overviewHref) hrefs.add(group.overviewHref);
    hrefs.add(group.featuredHref);
  }
  hrefs.add("/book-demo");
  return SEARCH_INDEX.filter(
    (entry) => entry.group === "pages" && hrefs.has(entry.href),
  );
}
