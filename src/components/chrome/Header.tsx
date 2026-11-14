/**
 * Header — fixed, transparent over dark heroes, frosted white on scroll.
 *
 * Behaviour:
 * - On routes in DARK_HERO_ROUTES (homepage today; Batch 2 extends the set)
 *   the header is transparent with a light logo until the user scrolls.
 * - Everywhere else — and once scrolled or a menu is open — it is frosted
 *   white with a dark logo and a light hairline.
 * - Desktop mega-menu: hover or focus opens, click toggles, ESC closes and
 *   returns focus to the trigger. Mouse leaving the header closes it.
 * - Mobile (<lg): hamburger opens the full-screen drill-down menu.
 *
 * The header is fixed (72px tall). Pages must clear it: the homepage hero
 * carries its own top padding; Batch 2 inner-page templates add pt-[72px]
 * (or a hero with built-in clearance) — see docs/ARCHITECTURE.md.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  DARK_HERO_ROUTES,
  HEADER_GROUPS,
  routeByHref,
  type NavGroupId,
} from "@/content/navigation";
import Icon from "../icons";
import Logo from "../Logo";
import SearchIcon from "../search/SearchIcon";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

const HEADER_HEIGHT = 72;
/** Fixed header height in px — Batch 2 inner-page templates clear it. */
export { HEADER_HEIGHT };

export default function Header() {
  const rawPathname = usePathname();
  // Normalise the router pathname to registry space: strip a leading
  // basePath if present (router behaviour differs across Next versions)
  // and drop a trailing slash (trailingSlash is on in next.config.ts).
  const pathname = (() => {
    let p = rawPathname.replace(/^\/bridgex(?=\/|$)/, "");
    if (p.length > 1) p = p.replace(/\/$/, "");
    return p || "/";
  })();
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<NavGroupId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRefs = useRef<Partial<Record<NavGroupId, HTMLButtonElement | null>>>(
    {},
  );
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll state (passive listener, threshold 24px).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close every menu on navigation.
  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  const isDarkHero = DARK_HERO_ROUTES.has(pathname);
  const overDark = isDarkHero && !scrolled && !openGroup && !mobileOpen;
  const activeGroup = HEADER_GROUPS.find(
    (g) => pathname === `/${g.id}` || pathname.startsWith(`/${g.id}/`),
  );

  const closeMenu = (returnFocus: boolean) => {
    if (returnFocus && openGroup) {
      triggerRefs.current[openGroup]?.focus();
    }
    setOpenGroup(null);
  };

  const onHeaderKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && openGroup) {
      e.stopPropagation();
      closeMenu(true);
    }
  };

  const demo = routeByHref("/book-demo");
  const openGroupData = HEADER_GROUPS.find((g) => g.id === openGroup);

  return (
    <>
      <header
        onKeyDown={onHeaderKeyDown}
        onMouseLeave={() => setOpenGroup(null)}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          overDark
            ? /* Own gradient scrim (fix, 14 Nov): the nav must stay readable
               from the first moment, even before the hero photograph has
               loaded or where it is bright at the top — never rely on the
               hero image alone for header contrast. Fades to transparent
               at the header's bottom edge, so no visible band remains. */
              "bg-gradient-to-b from-bx-navy-950/70 via-bx-navy-950/45 to-transparent"
            : "border-b border-[#E2E8F0] bg-bx-white/90 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.10)] backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            aria-label="BridgeX — home"
            className="shrink-0"
            onClick={() => setOpenGroup(null)}
          >
            <Logo variant={overDark ? "light" : "dark"} height={32} />
          </Link>

          {/* Desktop primary nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {HEADER_GROUPS.map((group) => {
                const isActive = activeGroup?.id === group.id;
                const isOpen = openGroup === group.id;
                return (
                  <li key={group.id}>
                    <button
                      ref={(el) => {
                        triggerRefs.current[group.id] = el;
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onMouseEnter={() => setOpenGroup(group.id)}
                      onFocus={() => setOpenGroup(group.id)}
                      onClick={() =>
                        setOpenGroup(isOpen ? null : group.id)
                      }
                      className={`relative flex min-h-[44px] items-center gap-1.5 px-3 font-sans text-[15px] font-bold transition-colors duration-200 xl:px-4 ${
                        overDark
                          ? "text-bx-white hover:text-bx-teal-400"
                          : "text-bx-navy-900 hover:text-bx-teal-700"
                      }`}
                    >
                      {group.label}
                      <span
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        } ${overDark ? "text-bx-teal-400" : "text-bx-teal-600"}`}
                      >
                        <Icon name="chevronDown" size={15} />
                      </span>
                      {/* Active-route underline */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-3 bottom-1 h-[2px] bg-bx-teal-500 transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/search"
              aria-label="Search the site"
              className={`flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors ${
                overDark
                  ? "text-bx-white hover:text-bx-teal-400"
                  : "text-bx-navy-900 hover:text-bx-teal-700"
              }`}
            >
              <SearchIcon size={22} />
            </Link>
            {demo && (
              <Link
                href={demo.href}
                className="hidden min-h-[44px] items-center gap-2 rounded-full bg-bx-teal-500 px-5 font-sans text-[14px] font-bold text-bx-white shadow-[0_8px_20px_-10px_rgba(20,184,166,0.7)] transition-colors duration-200 hover:bg-bx-teal-600 active:scale-[0.97] md:inline-flex"
              >
                {demo.label}
              </Link>
            )}
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className={`flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors lg:hidden ${
                overDark
                  ? "text-bx-white hover:text-bx-teal-400"
                  : "text-bx-navy-900 hover:text-bx-teal-700"
              }`}
            >
              <Icon name="menu" size={26} />
            </button>
          </div>
        </div>

        {/* Mega-menu panel */}
        <AnimatePresence>
          {openGroupData && (
            <MegaMenu
              key={openGroupData.id}
              group={openGroupData}
              onNavigate={() => setOpenGroup(null)}
            />
          )}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
