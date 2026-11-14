/**
 * Resource Hub — the index of everything BridgeX publishes (spec §10).
 * Searchable and filterable over the seeded content; full site search
 * arrives in Batch 4.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import PhotoBand from "@/components/ui/PhotoBand";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/icons";
import { asset } from "@/lib/paths";
import { INSIGHT_ARTICLES, formatInsightDate } from "@/content/insights";
import {
  RESOURCE_HUB_ITEMS,
  RESOURCE_SECTIONS,
  type HubItem,
} from "@/content/resources";
import { HUB_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";
import HubExplorer from "@/components/resources/HubExplorer";

export const metadata: Metadata = {
  title: "Resource Hub",
  description:
    "Everything BridgeX publishes in one place: editorial insights, practical guides, product updates, developer docs and planned events — searchable and free to read.",
};

/** Blog articles join the hub index from insights.ts (never duplicated). */
const ARTICLE_ITEMS: HubItem[] = INSIGHT_ARTICLES.map((a) => ({
  id: `article-${a.slug}`,
  title: a.title,
  summary: a.excerpt,
  category: "Insights",
  href: "/resources/blog",
  meta: `${a.category} · ${formatInsightDate(a.date)} · ${a.readMinutes} min read`,
  image: a.image,
  imageAlt: a.imageAlt,
}));

const ALL_ITEMS: HubItem[] = [...ARTICLE_ITEMS, ...RESOURCE_HUB_ITEMS];

export default function ResourcesPage() {
  return (
    <>
      <ResourceHero
        href="/resources"
        eyebrow="Resources"
        title={
          <>
            Everything we publish,{" "}
            <span className="font-display italic text-bx-gold-400">
              in one place.
            </span>
          </>
        }
        copy="Editorial insight, practical guides, honest product updates and developer docs — written by the BridgeX team, free to read, and searchable below."
        image="/images/resources-library.jpg"
        imageAlt="Rows of bookshelves filled with books in a bright library"
        imageWidth={1600}
        imageHeight={1066}
      />

      <Section tone="ivory" ariaLabel="Search and filter resources">
        <SectionIntro
          label="Search the library"
          heading="Find the piece you need"
          copy="Filter by type or search by topic. The hub covers what we have published so far — three articles, five guides and the first product updates — and grows with every release."
        />
        <Reveal className="mt-12">
          <HubExplorer items={ALL_ITEMS} />
        </Reveal>
      </Section>

      <Section tone="cream" ariaLabel="Browse by section">
        <SectionIntro
          label="Browse by section"
          heading="Six shelves, one library"
          copy="Each section has its own page, its own rhythm and its own promise about what is real and what is still planned."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_SECTIONS.map((section, i) => (
            <Reveal key={section.href} delay={(i % 3) * 0.08} className="h-full">
              <Link
                href={section.href}
                className="group flex h-full flex-col overflow-hidden border border-bx-gold-500/30 bg-bx-white transition-colors duration-200 hover:border-bx-gold-500/70"
              >
                <div className="overflow-hidden">
                  <img
                    src={asset(section.image)}
                    alt={section.imageAlt}
                    width={1200}
                    height={750}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <Icon
                    name={section.icon}
                    size={28}
                    className="text-bx-gold-600"
                  />
                  <span className="mt-4 font-sans text-xl font-extrabold leading-snug text-bx-ink">
                    {section.label}
                  </span>
                  <span className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-muted">
                    {section.description}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-maroon-700">
                    Browse {section.label}
                    <Icon
                      name="arrowRight"
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <PhotoBand
        image="/images/band-bridge-istanbul.jpg"
        alt="Bosphorus Bridge glowing red above Istanbul at night"
        eyebrow="The library"
        heading={
          <>
            New pieces appear here{" "}
            <span className="font-display italic text-bx-gold-400">
              as they are finished.
            </span>
          </>
        }
        copy="The hub grows with every release — the next guide, the next essay, the next update lands here first."
        height="sm"
        imageWidth={1920}
        imageHeight={1280}
      >
        <ButtonLink href="/resources/blog">Read the latest insights</ButtonLink>
      </PhotoBand>

      <Section tone="white" ariaLabel="Latest editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionIntro
            label="Latest editorial"
            heading="Fresh from the blog"
            copy="The newest BridgeX editorial — each piece readable in full on the blog index, no separate pages, no paywall."
          />
          <Reveal>
            <Link
              href="/resources/blog"
              className="inline-flex min-h-[48px] items-center gap-2.5 border-2 border-bx-maroon-900 px-6 font-sans text-[15px] font-bold text-bx-maroon-900 transition-colors hover:bg-bx-maroon-900 hover:text-bx-ivory"
            >
              All insights
              <Icon name="arrowRight" size={18} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {INSIGHT_ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08} className="h-full">
              <Link
                href="/resources/blog"
                className="group flex h-full flex-col border border-bx-gold-500/30 bg-bx-ivory transition-colors duration-200 hover:border-bx-gold-500/70"
              >
                <div className="overflow-hidden">
                  <img
                    src={asset(article.image)}
                    alt={article.imageAlt}
                    width={1400}
                    height={935}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-maroon-700">
                    {article.category} · {formatInsightDate(article.date)}
                  </span>
                  <span className="mt-3 font-sans text-lg font-extrabold leading-snug text-bx-ink">
                    {article.title}
                  </span>
                  <span className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-muted">
                    {article.excerpt}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-maroon-700">
                    Read on the blog index
                    <Icon
                      name="arrowRight"
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ivory" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About the Resource Hub"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={HUB_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Want the thinking applied to your business?"
        copy="The resources explain how the work should be done. A private demo shows how BridgeX does it on your own workflows."
      />
    </>
  );
}
