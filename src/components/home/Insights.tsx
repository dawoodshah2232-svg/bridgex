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
    <Section tone="mint" ariaLabel="Editorial insights">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          label="From the BridgeX team"
          heading={
            <>
              Notes on running a{" "}
              <span className="font-sans font-semibold italic text-bx-teal-700">
                financial business.
              </span>
            </>
          }
          copy="Original editorial on brokerage operations — written by the people building the platform, not generated filler."
        />
        <Reveal delay={0.15} className="shrink-0">
          <Link
            href="/resources/blog"
            className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-teal-700 hover:text-bx-navy-900"
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
              className="bx-card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-bx-white"
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
                  <span className="uppercase tracking-[0.14em] text-bx-teal-700">
                    {article.category}
                  </span>
                  <span aria-hidden="true" className="text-bx-teal-600">·</span>
                  <span className="text-bx-slate-500">
                    {formatInsightDate(article.date)} · {article.readMinutes}{" "}
                    min read
                  </span>
                </span>
                <span className="mt-3 font-sans text-xl font-bold leading-snug text-bx-navy-900 group-hover:text-bx-teal-700">
                  {article.title}
                </span>
                <span className="mt-2.5 flex-1 text-[15px] leading-relaxed text-bx-slate-500">
                  {article.excerpt}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-teal-700 group-hover:text-bx-navy-900">
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
