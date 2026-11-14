/**
 * Footer — full sitemap from the route registry, dynamic copyright year,
 * back-to-top, legal links. Social icons are deliberately omitted: no real
 * BridgeX social URLs exist yet (spec §4 — only show icons where real URLs
 * exist). Photography credit line is included (Pexels).
 *
 * bridgexapps.com style: light mist background, four columns, a dark-navy
 * disclaimer box with an orange heading and darker inner cards, slim
 * bottom bar. The disclaimer copy is generic positioning text, not legal
 * advice — flag it for review alongside the legal pages.
 */
import Link from "next/link";
import {
  FOOTER_GROUPS,
  routesByGroup,
} from "@/content/navigation";
import { Container } from "../ui/Container";
import Logo from "../Logo";
import { CookieSettingsLink } from "../CookieBanner";
import BackToTop from "./BackToTop";

export default function Footer() {
  const year = new Date().getFullYear();
  const legal = routesByGroup("legal");

  return (
    <footer className="bg-bx-mist text-bx-navy-900">
      {/* Teal hairline */}
      <div aria-hidden="true" className="h-px bg-bx-teal-500/50" />
      <Container className="pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="BridgeX — home">
              <Logo variant="dark" height={36} />
            </Link>
            <p className="mt-5 font-sans text-[26px] font-semibold leading-snug text-bx-navy-900">
              Where Markets Connect.
            </p>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-bx-slate-500">
              Connected infrastructure for modern financial businesses —
              onboarding, client relationships, trading operations, payments
              and partner growth in one adaptable ecosystem.
            </p>
            <Link
              href="/book-demo"
              className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-bx-teal-500 px-6 font-sans text-[15px] font-bold text-bx-white shadow-[0_8px_20px_-10px_rgba(20,184,166,0.7)] transition-colors duration-200 hover:bg-bx-teal-600 active:scale-[0.97]"
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
                <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bx-navy-900">
                  {group.overviewHref ? (
                    <Link
                      href={group.overviewHref}
                      className="transition-colors hover:text-bx-teal-600"
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
                          className="inline-flex min-h-[32px] items-center text-[14px] leading-snug text-bx-slate-500 transition-colors hover:text-bx-teal-600"
                        >
                          {route.label}
                          {route.status === "roadmap" && (
                            <span className="ml-2 text-[11px] uppercase tracking-wide text-bx-teal-600">
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

        {/* Disclaimer box — dark navy, orange heading, darker inner cards */}
        <div className="mt-14 rounded-2xl bg-bx-navy-900 rounded-2xl p-6 sm:p-8">
          <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bx-amber-400">
            Important notice
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-bx-navy-800 rounded-2xl p-5">
              <h3 className="font-sans text-[15px] font-bold text-bx-white">
                Technology partner
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bx-slate-300">
                BridgeX supplies the software. Licensing, compliance and
                client money remain your firm&apos;s responsibility.
              </p>
            </div>
            <div className="rounded-xl bg-bx-navy-800 rounded-2xl p-5">
              <h3 className="font-sans text-[15px] font-bold text-bx-white">
                No investment advice
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bx-slate-300">
                Nothing on this site is investment advice, a recommendation,
                or an offer of financial services.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-6 border-t border-[#E2E8F0] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-bx-slate-500">
              © {year} BridgeX. All rights reserved.
            </p>
            <p className="mt-1 text-[13px] text-bx-slate-500/80">
              Photography on this site is licensed stock photography via
              Pexels. Product previews show illustrative demo data.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/search"
              className="flex min-h-[44px] items-center text-sm text-bx-slate-500 transition-colors hover:text-bx-teal-600"
            >
              Search
            </Link>
            {legal.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="flex min-h-[44px] items-center text-sm text-bx-slate-500 transition-colors hover:text-bx-teal-600"
              >
                {route.label}
              </Link>
            ))}
            <CookieSettingsLink />
            <BackToTop />
          </div>
        </div>
      </Container>
    </footer>
  );
}
