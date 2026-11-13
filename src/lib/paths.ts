/**
 * Static-asset paths.
 *
 * Next.js `basePath` ("/bridgex") is applied automatically to <Link> hrefs
 * and router navigation, but NOT to raw asset URLs (<img src>, CSS url(),
 * metadata icons, favicon). Every static asset reference must go through
 * `asset()` so the site works both on GitHub Pages (basePath) and at a
 * custom domain (where basePath would be removed from next.config.ts and
 * this constant updated to match).
 */
export const BASE_PATH = "/bridgex";

/** Prefix a root-relative public asset path with the site basePath. */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export const SITE_NAME = "BridgeX";
export const SITE_URL = "https://dawoodshah2232-svg.github.io/bridgex";
export const SITE_TAGLINE = "Where Markets Connect.";
