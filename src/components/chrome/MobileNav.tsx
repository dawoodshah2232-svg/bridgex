/**
 * MobileNav — full-screen nested drill-down menu for <lg screens.
 *
 * - 44px minimum touch targets, accordions per group, closes on navigation.
 * - ESC closes; body scroll is locked while open; focus moves to the close
 *   button on open and back to the hamburger on close (handled by Header).
 * - All 44 routes reachable: 6 group accordions + book-demo CTA + legal.
 */
"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HEADER_GROUPS,
  routeByHref,
  routesByGroup,
} from "@/content/navigation";
import Icon from "../icons";
import Logo from "../Logo";
import { menuIconForRoute } from "./menuIcons";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll + focus the close button while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const legal = routesByGroup("legal");
  const demo = routeByHref("/book-demo");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, x: 48 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[70] flex flex-col bg-bx-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-bx-teal-500/30 px-5 sm:px-8">
            <Link href="/" onClick={onClose} aria-label="BridgeX — home">
              <Logo variant="dark" height={30} />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-bx-navy-900 transition-colors hover:text-bx-teal-700"
            >
              <Icon name="close" size={26} />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="min-h-0 flex-1 overflow-y-auto px-5 pb-8 pt-2 sm:px-8"
          >
            {HEADER_GROUPS.map((group) => {
              const routes = routesByGroup(group.id);
              const isOpen = expanded === group.id;
              return (
                <div
                  key={group.id}
                  className="border-b border-bx-teal-500/25"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-group-${group.id}`}
                    onClick={() =>
                      setExpanded(isOpen ? null : group.id)
                    }
                    className="flex min-h-[56px] w-full items-center justify-between py-3 text-left font-sans text-lg font-bold text-bx-navy-900"
                  >
                    {group.label}
                    <span
                      className={`text-bx-teal-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <Icon name="chevronDown" size={20} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`mobile-group-${group.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.24,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <ul className="pb-4">
                          {group.overviewHref && (
                            <li>
                              <Link
                                href={group.overviewHref}
                                onClick={onClose}
                                className="flex min-h-[44px] items-center gap-2 py-2 pl-1 font-sans text-[15px] font-bold text-bx-teal-700"
                              >
                                <Icon
                                  name={menuIconForRoute(group.overviewHref)}
                                  size={18}
                                  className="shrink-0"
                                />
                                {group.label} overview
                                <Icon name="arrowRight" size={16} />
                              </Link>
                            </li>
                          )}
                          {routes
                            .filter((r) => r.href !== group.overviewHref)
                            .map((route) => (
                              <li key={route.href}>
                                <Link
                                  href={route.href}
                                  onClick={onClose}
                                  className="flex min-h-[44px] items-center gap-2 py-2 pl-1 text-[15px] text-bx-navy-900"
                                >
                                  <Icon
                                    name={menuIconForRoute(route.href)}
                                    size={18}
                                    className="shrink-0 text-bx-teal-600"
                                  />
                                  {route.label}
                                  {route.status === "roadmap" && (
                                    <span className="border border-bx-teal-600/60 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-bx-teal-700">
                                      In development
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="pt-6">
              {demo && (
                <Link
                  href={demo.href}
                  onClick={onClose}
                  className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-bx-teal-500 px-6 font-sans text-base font-bold text-bx-white transition-colors hover:bg-bx-teal-600 active:scale-[0.98]"
                >
                  {demo.label}
                  <Icon name="arrowRight" size={18} />
                </Link>
              )}
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {legal.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={onClose}
                    className="flex min-h-[44px] items-center text-sm text-bx-slate-500 hover:text-bx-teal-700"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
