/**
 * XML sitemap (spec §12) — all 44 registry routes, absolute URLs.
 *
 * /search is deliberately excluded: it is a utility route, not content,
 * and it is not in the registry. Next.js generates sitemap.xml in `out/`
 * at build time (static export supports MetadataRoute sitemaps).
 */
import type { MetadataRoute } from "next";
import { NAV_GROUPS, ROUTES } from "@/content/navigation";
import { SITE_URL } from "@/content/site";

// Required for `output: 'export'` — metadata routes are dynamic by default.
export const dynamic = "force-static";

/** Group overview pages + the demo page get higher priority. */
const HIGH_PRIORITY = new Set<string>([
  ...NAV_GROUPS.map((g) => g.overviewHref).filter(
    (href): href is string => href !== null,
  ),
  "/book-demo",
]);

function absoluteUrl(href: string): string {
  // trailingSlash is on: canonical URLs carry the trailing slash.
  return href === "/" ? `${SITE_URL}/` : `${SITE_URL}${href}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => {
    const isHome = route.href === "/";
    return {
      url: absoluteUrl(route.href),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome
        ? 1
        : HIGH_PRIORITY.has(route.href)
          ? 0.9
          : route.group === "legal"
            ? 0.3
            : 0.7,
    };
  });
}
