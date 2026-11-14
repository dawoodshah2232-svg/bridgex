/**
 * MegaMenu — desktop dropdown panel for one nav group.
 *
 * Layout: featured editorial panel (navy) + route links in 2–3 columns
 * (max 3, per spec §4). No focus trap: focus moves naturally from the
 * trigger button into the panel and out again. ESC handling lives in the
 * Header, which owns the open state.
 */
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  routeByHref,
  routesByGroup,
  type NavGroup,
} from "@/content/navigation";
import Icon from "../icons";

export default function MegaMenu({
  group,
  onNavigate,
}: {
  group: NavGroup;
  onNavigate: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const routes = routesByGroup(group.id);
  const featured = routeByHref(group.featuredHref);
  const cols = routes.length >= 9 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full border-t border-bx-teal-500/40 bg-bx-white text-bx-navy-900 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.15)]"
    >
      <div className="mx-auto flex max-w-[1280px] gap-10 px-5 py-9 sm:px-8 lg:px-10">
        {/* Featured editorial panel */}
        <div className="hidden w-[300px] shrink-0 flex-col bg-bx-navy-900 rounded-2xl p-6 text-bx-white md:flex">
          <p className="text-[12px] font-sans font-bold uppercase tracking-[0.22em] text-bx-teal-400">
            {group.label}
          </p>
          <p className="mt-3 font-sans text-[26px] font-semibold leading-snug">
            {featured?.label}
          </p>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-bx-slate-300/85">
            {group.blurb}
          </p>
          {featured && (
            <Link
              href={featured.href}
              onClick={onNavigate}
              className="group mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-teal-400 hover:text-bx-slate-300"
            >
              Explore {featured.label}
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>

        {/* Route links */}
        <div className="min-w-0 flex-1">
          <div className={`grid grid-cols-1 gap-x-8 gap-y-1 ${cols}`}>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={onNavigate}
                className="group rounded-sm px-3 py-3 transition-colors duration-150 hover:bg-bx-mint-50"
              >
                <span className="flex items-center gap-2 font-sans text-[15px] font-bold text-bx-navy-900 group-hover:text-bx-teal-700">
                  {route.label}
                  {route.status === "roadmap" && (
                    <span className="border border-bx-teal-600/60 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-bx-teal-700">
                      In development
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-bx-slate-500">
                  {route.description}
                </span>
              </Link>
            ))}
          </div>
          {group.overviewHref && (
            <Link
              href={group.overviewHref}
              onClick={onNavigate}
              className="group mt-4 inline-flex items-center gap-2 px-3 font-sans text-sm font-bold text-bx-teal-700 hover:text-bx-navy-900"
            >
              View all {group.label}
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
