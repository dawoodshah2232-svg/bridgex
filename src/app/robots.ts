/**
 * robots.txt (spec §12) — allow all crawlers, point at the sitemap.
 * Next.js generates robots.txt in `out/` at build time (static export
 * supports MetadataRoute robots).
 */
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Required for `output: 'export'` — metadata routes are dynamic by default.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
