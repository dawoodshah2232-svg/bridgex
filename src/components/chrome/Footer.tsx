/**
 * Footer — full sitemap from the route registry, dynamic copyright year,
 * back-to-top, legal links. Social icons are deliberately omitted: no real
 * BridgeX social URLs exist yet (spec §4 — only show icons where real URLs
 * exist). Photography credit line is included (Pexels).
 */
import Link from "next/link";
import {
  FOOTER_GROUPS,
  routesByGroup,
} from "@/content/navigation";
import { Container } from "../ui/Container";
import Logo from "../Logo";
import BackToTop from "./BackToTop";

export default function Footer() {
  const year = new Date().getFullYear();
  const legal = routesByGroup("legal");

  return (
    <footer className="bg-bx-maroon-950 text-bx-ivory">
      {/* Gold hairline */}
      <div aria-hidden="true" className="h-px bg-bx-gold-500/50" />
      <Container className="pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="BridgeX — home">
              <Logo variant="light" height={36} />
            </Link>
            <p className="mt-5 font-display text-[26px] font-semibold leading-snug text-bx-champagne">
              Where Markets Connect.
            </p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-bx-champagne/75">
              Connected infrastructure for modern financial businesses —
              onboarding, client relationships, trading operations, payments
              and partner growth in one adaptable ecosystem.
            </p>
            <Link
              href="/book-demo"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 bg-bx-gold-500 px-6 font-sans text-[15px] font-bold text-bx-maroon-950 transition-colors duration-200 hover:bg-bx-gold-400 active:scale-[0.97]"
            >
              Book a Private Demo
            </Link>
          </div>

          {/* Sitemap columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8"
          >
            {FOOTER_GROUPS.map((group) => (
              <div key={group.id}>
                <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bx-gold-400">
                  {group.overviewHref ? (
                    <Link
                      href={group.overviewHref}
                      className="transition-colors hover:text-bx-champagne"
                    >
                      {group.label}
                    </Link>
                  ) : (
                    group.label
                  )}
                </h2>
                <ul className="mt-4 space-y-1">
                  {routesByGroup(group.id)
                    .filter((r) => r.href !== group.overviewHref)
                    .map((route) => (
                      <li key={route.href}>
                        <Link
                          href={route.href}
                          className="inline-flex min-h-[32px] items-center text-[14px] leading-snug text-bx-champagne/80 transition-colors hover:text-bx-ivory"
                        >
                          {route.label}
                          {route.status === "roadmap" && (
                            <span className="ml-2 text-[11px] uppercase tracking-wide text-bx-gold-400">
                              In development
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-bx-gold-500/20 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-bx-champagne/70">
              © {year} BridgeX. All rights reserved.
            </p>
            <p className="mt-1 text-[13px] text-bx-champagne/50">
              Photography on this site is licensed stock photography via
              Pexels. Product previews show illustrative demo data.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legal.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="flex min-h-[44px] items-center text-sm text-bx-champagne/80 transition-colors hover:text-bx-ivory"
              >
                {route.label}
              </Link>
            ))}
            <BackToTop />
          </div>
        </div>
      </Container>
    </footer>
  );
}
