/**
 * Menu icons — one shared resolver for the desktop mega-menu
 * (MegaMenu.tsx) and the mobile drill-down (MobileNav.tsx), so both
 * menus show the same icon for the same route.
 *
 * Resolution order:
 *   1. `MENU_ROUTE_ICONS` — explicit href-keyed icons for routes the
 *      slug maps don't cover (platform overview/specials, services,
 *      resources, company, book-demo).
 *   2. The slug maps in `@/components/icons` — `/solutions/<slug>` via
 *      `solutionIcon`, `/industries/<slug>` via `industryIcon`,
 *      `/platform/<slug>` via `layerIcon`.
 *   3. Fallback `"layers"` for anything unlisted.
 *
 * Icons are decorative (the `Icon` component is aria-hidden); the
 * label always carries the meaning.
 */
import {
  industryIcon,
  layerIcon,
  solutionIcon,
  type IconName,
} from "@/components/icons";

/** Explicit icons for routes the slug maps don't cover. */
export const MENU_ROUTE_ICONS: Record<string, IconName> = {
  // Platform — overview + pages with no layer slug
  "/platform": "layers",
  "/platform/architecture": "layers",
  "/platform/no-code-studio": "sliders",
  "/platform/ai-assistance": "spark",
  // Services
  "/services": "headset",
  "/services/implementation": "workflow",
  "/services/managed-services": "headset",
  "/services/integration-migration": "refresh",
  // Resources
  "/resources": "layers",
  "/resources/blog": "book",
  "/resources/case-studies": "quote",
  "/resources/guides": "report",
  "/resources/product-updates": "spark",
  "/resources/developers": "code",
  "/resources/events": "calendar",
  // Company
  "/company/about": "building",
  "/company/contact": "mail",
  "/company/partners": "ib",
  "/company/careers": "users",
  // Persistent CTA
  "/book-demo": "play",
};

/**
 * Resolve a nav route href (basePath-free, as in
 * src/content/navigation.ts) to its menu icon.
 */
export function menuIconForRoute(href: string): IconName {
  const direct = MENU_ROUTE_ICONS[href];
  if (direct) return direct;
  const [, group, slug] = href.split("/");
  if (!slug) return "layers";
  if (group === "solutions") return solutionIcon(slug);
  if (group === "industries") return industryIcon(slug);
  if (group === "platform") return layerIcon(slug);
  return "layers";
}
