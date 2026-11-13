/**
 * H11 — Editorial insights: three original seeded article cards from
 * src/content/insights.ts. Each card links to /resources/blog — the blog
 * index itself lands in Batch 2, which reuses this same content file.
 */
import Link from "next/link";
import { asset } from "@/lib/paths";
import { INSIGHT_ARTICLES, formatInsightDate } from "@/content/insights";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import Icon from "../icons";

export default function Insights() {
  return (
    <Section tone="cream" ariaLabel="Editorial insights">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          label="From the BridgeX team"
          heading={
            <>
              Notes on running a{" "}
              <span className="font-display font-semibold italic text-bx-maroon-700">
                financial business.
              </span>
            </>
          }
          copy="Original editorial on brokerage operations — written by the people building the platform, not generated filler."
        />
        <Reveal delay={0.15} className="shrink-0">
          <Link
            href="/resources/blog"
            className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-maroon-700 hover:text-bx-maroon-900"
          >
            All insights
            <Icon
              name="arrowRight"
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
        {INSIGHT_ARTICLES.map((article, i) => (
          <Reveal key={article.slug} delay={0.08 * i} className="h-full">
            <Link
              href="/resources/blog"
              className="group flex h-full flex-col bg-bx-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(35,11,22,0.35)]"
            >
              <span className="block overflow-hidden">
                <img
                  src={asset(article.image)}
                  alt={article.imageAlt}
                  width={1400}
                  height={933}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-sans font-bold">
                  <span className="uppercase tracking-[0.14em] text-bx-maroon-700">
                    {article.category}
                  </span>
                  <span aria-hidden="true" className="text-bx-gold-600">·</span>
                  <span className="text-bx-muted">
                    {formatInsightDate(article.date)} · {article.readMinutes}{" "}
                    min read
                  </span>
                </span>
                <span className="mt-3 font-sans text-xl font-bold leading-snug text-bx-ink group-hover:text-bx-maroon-700">
                  {article.title}
                </span>
                <span className="mt-2.5 flex-1 text-[15px] leading-relaxed text-bx-muted">
                  {article.excerpt}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-maroon-700 group-hover:text-bx-maroon-900">
                  Read on the blog
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
