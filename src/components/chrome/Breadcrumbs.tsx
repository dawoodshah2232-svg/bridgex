/**
 * Breadcrumbs — server component. Pass `href` to build the trail from the
 * route registry (Home → group overview → page), or `items` for a custom
 * trail. The current page is plain text with aria-current="page".
 * Also emits BreadcrumbList JSON-LD for the same trail (spec §12); the
 * visible component is unchanged.
 */
import Link from "next/link";
import {
  breadcrumbsFor,
  type NavRoute,
} from "@/content/navigation";
import { breadcrumbJsonLd, jsonLdString } from "@/lib/seo";
import Icon from "../icons";

export default function Breadcrumbs({
  href,
  items,
  dark = false,
}: {
  href?: string;
  items?: NavRoute[];
  dark?: boolean;
}) {
  const trail = items ?? (href ? breadcrumbsFor(href) : []);
  if (trail.length === 0) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(breadcrumbJsonLd(trail)),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 font-sans text-sm">
          {trail.map((item, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <Icon
                    name="chevronRight"
                    size={14}
                    className={dark ? "text-bx-teal-400/70" : "text-bx-teal-600/70"}
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={`font-bold ${dark ? "text-bx-white" : "text-bx-navy-900"}`}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors hover:underline ${
                      dark
                        ? "text-bx-slate-300/80 hover:text-bx-slate-300"
                        : "text-bx-slate-500 hover:text-bx-teal-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
