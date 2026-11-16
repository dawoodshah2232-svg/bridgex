/**
 * ArticleReader — the blog index's expandable article cards.
 *
 * Individual article routes do not exist, so each card expands inline
 * (accessible accordion pattern: a real button, aria-expanded, and a
 * labelled region) to reveal the full original article text. The first
 * article starts open; only one is open at a time.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Fragment, useState } from "react";
import Icon from "@/components/icons";
import { asset } from "@/lib/paths";
import {
  formatInsightDate,
  type InsightArticle,
} from "@/content/insights";
import { ARTICLE_BREAKS } from "@/content/resource-editorial";

export interface ReadableArticle extends InsightArticle {
  body: string[];
}

export default function ArticleReader({
  articles,
}: {
  articles: ReadableArticle[];
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(
    articles[0]?.slug ?? null,
  );
  const reduceMotion = useReducedMotion();

  return (
    <div className="space-y-8">
      {articles.map((article, index) => {
        const isOpen = openSlug === article.slug;
        const panelId = `article-panel-${article.slug}`;
        const buttonId = `article-button-${article.slug}`;
        const featured = index === 0;
        return (
          <article
            key={article.slug}
            className="group overflow-hidden border border-bx-teal-500/30 bg-bx-white rounded-2xl"
          >
            <div
              className={
                featured ? "grid lg:grid-cols-2" : "grid sm:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]"
              }
            >
              <div className="relative overflow-hidden">
                <img
                  src={asset(article.image)}
                  alt={article.imageAlt}
                  width={1400}
                  height={935}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : undefined}
                  className={`bx-img-zoom h-full w-full object-cover ${featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[320px]" : "aspect-[16/10] sm:aspect-auto sm:min-h-[220px]"}`}
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-teal-700">
                  {article.category} · {formatInsightDate(article.date)} ·{" "}
                  {article.readMinutes} min read
                </p>
                <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-[28px]">
                  {article.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bx-slate-500">
                  {article.excerpt}
                </p>
                <p className="mt-4 font-sans text-sm font-bold text-bx-slate-500">
                  BridgeX editorial
                </p>
                <div className="mt-6">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenSlug(isOpen ? null : article.slug)}
                    className="inline-flex min-h-[48px] items-center gap-2.5 border-2 border-bx-navy-900 px-6 font-sans text-[15px] font-bold text-bx-navy-900 transition-colors hover:bg-bx-navy-900 hover:text-bx-white"
                  >
                    {isOpen ? "Close article" : "Read the full article"}
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
                      {article.body.map((paragraph, i) => {
                        const breakInfo = ARTICLE_BREAKS[article.slug];
                        return (
                          <Fragment key={i}>
                            <p className="mb-5 text-base leading-relaxed text-bx-navy-900/90 last:mb-0 sm:text-lg sm:leading-relaxed">
                              {paragraph}
                            </p>
                            {/* Photographic break halfway through the
                                read: a real photo plus a pull-quote
                                taken verbatim from the article. */}
                            {i === 2 && breakInfo && (
                              <figure className="my-8">
                                <div className="overflow-hidden border border-bx-teal-500/30">
                                  <img
                                    src={asset(breakInfo.image)}
                                    alt={breakInfo.imageAlt}
                                    width={1600}
                                    height={762}
                                    loading="lazy"
                                    className="aspect-[21/10] w-full object-cover"
                                  />
                                </div>
                                <figcaption className="mt-4 border-l-2 border-bx-teal-500 pl-4 font-sans text-xl italic leading-snug text-bx-teal-700 sm:text-2xl">
                                  “{breakInfo.quote}”
                                </figcaption>
                              </figure>
                            )}
                          </Fragment>
                        );
                      })}
                      <p className="mt-8 border-t border-bx-teal-500/25 pt-5 font-sans text-sm text-bx-slate-500">
                        Published {formatInsightDate(article.date)} by
                        BridgeX editorial. This is an opinion piece about
                        brokerage operations — it describes no client,
                        deployment or result.
                      </p>
                      <button
                        type="button"
                        onClick={() => setOpenSlug(null)}
                        className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-sans text-[15px] font-bold text-bx-teal-700 hover:underline"
                      >
                        Close this article
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
