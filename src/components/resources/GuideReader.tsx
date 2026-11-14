/**
 * GuideReader — the guides index's expandable guide cards, same honest
 * pattern as the blog: no detail routes, no dead download links. Each
 * card expands inline to reveal the full original guide, and the
 * "request the full guide" action links to the real contact page.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Fragment, useState } from "react";
import Icon from "@/components/icons";
import { asset } from "@/lib/paths";
import type { Guide } from "@/content/resources";

export default function GuideReader({ guides }: { guides: Guide[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(
    guides[0]?.slug ?? null,
  );
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-8">
      {guides.map((guide, index) => {
        const isOpen = openSlug === guide.slug;
        const panelId = `guide-panel-${guide.slug}`;
        const buttonId = `guide-button-${guide.slug}`;
        return (
          <article
            key={guide.slug}
            className="overflow-hidden border border-bx-teal-500/30 bg-bx-white rounded-2xl"
          >
            <div className="grid sm:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
              <div className="relative overflow-hidden">
                <img
                  src={asset(guide.image)}
                  alt={guide.imageAlt}
                  width={1200}
                  height={800}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : undefined}
                  className="aspect-[16/10] h-full w-full object-cover sm:aspect-auto sm:min-h-[260px]"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-teal-700">
                  {guide.category}
                </span>
                <span className="font-sans text-[13px] font-bold text-bx-slate-500">
                  For {guide.audience} · {guide.readMinutes} min read
                </span>
              </div>
              <h3 className="mt-3 max-w-3xl font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-[28px]">
                {guide.title}
              </h3>
              <p className="mt-3 max-w-[68ch] text-base leading-relaxed text-bx-slate-500">
                {guide.summary}
              </p>

              <div className="mt-6">
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-teal-700">
                  In this guide
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {guide.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-bx-navy-900/90"
                    >
                      <Icon
                        name="check"
                        size={18}
                        className="mt-0.5 shrink-0 text-bx-teal-600"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenSlug(isOpen ? null : guide.slug)}
                  className="inline-flex min-h-[48px] items-center gap-2.5 border-2 border-bx-navy-900 px-6 font-sans text-[15px] font-bold text-bx-navy-900 transition-colors hover:bg-bx-navy-900 hover:text-bx-white"
                >
                  {isOpen ? "Close guide" : "Read the guide"}
                  <span
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <Icon name="chevronDown" size={18} />
                  </span>
                </button>
              </div>
            </div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-bx-teal-500/25 bg-bx-white px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
                    <div className="max-w-[68ch]">
                      {guide.sections.map((section, sectionIndex) => (
                        <Fragment key={section.heading}>
                          <div className="mb-8 last:mb-0">
                            <h4 className="font-sans text-xl font-extrabold leading-snug text-bx-navy-900">
                              {section.heading}
                            </h4>
                            {section.body.map((paragraph, i) => (
                              <p
                                key={i}
                                className="mt-3 text-base leading-relaxed text-bx-navy-900/90 sm:text-[17px]"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                          {/* Photographic break after the first
                              section: a real photo plus a pull-quote
                              taken from the guide's own text. */}
                          {sectionIndex === 0 && (
                            <figure className="mb-8">
                              <div className="overflow-hidden border border-bx-teal-500/30">
                                <img
                                  src={asset(guide.breakImage)}
                                  alt={guide.breakImageAlt}
                                  width={1600}
                                  height={762}
                                  loading="lazy"
                                  className="aspect-[21/10] w-full object-cover"
                                />
                              </div>
                              <figcaption className="mt-4 border-l-2 border-bx-teal-500 pl-4 font-sans text-xl italic leading-snug text-bx-teal-700 sm:text-2xl">
                                “{guide.breakQuote}”
                              </figcaption>
                            </figure>
                          )}
                        </Fragment>
                      ))}
                      <p className="mt-8 border-t border-bx-teal-500/25 pt-5 text-base leading-relaxed text-bx-slate-500">
                        Want this guide as a document for your team?{" "}
                        <Link
                          href="/company/contact"
                          className="font-bold text-bx-teal-700 underline decoration-bx-teal-500 decoration-2 underline-offset-2 hover:text-bx-navy-900"
                        >
                          Request the full guide
                        </Link>{" "}
                        and tell us which one — we will send it.
                      </p>
                      <button
                        type="button"
                        onClick={() => setOpenSlug(null)}
                        className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-sans text-[15px] font-bold text-bx-teal-700 hover:underline"
                      >
                        Close this guide
                        <Icon name="chevronDown" size={18} className="rotate-180" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
