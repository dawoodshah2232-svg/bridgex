/**
 * Product Updates — an honest changelog (spec §10/§11). Entries describe
 * the website and the platform roadmap with Live / Sandbox / Demo /
 * Planned labels, defined on the page. Nothing claims a live production
 * module that does not exist.
 */
import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import PhotoBand from "@/components/ui/PhotoBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/icons";
import {
  PRODUCT_UPDATES,
  UPDATE_STATUS_DEFINITIONS,
  formatResourceDate,
} from "@/content/resources";
import { UPDATES_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";
import StatusBadge from "@/components/resources/StatusBadge";

export const metadata: Metadata = {
  title: "Product Updates",
  description:
    "What shipped, what changed and what is next at BridgeX — labelled honestly as Live, Sandbox, Demo or Planned. The changelog for the website and the platform roadmap.",
};

export default function ProductUpdatesPage() {
  return (
    <>
      <ResourceHero
        href="/resources/product-updates"
        eyebrow="Product Updates"
        title={
          <>
            What shipped, what changed,{" "}
            <span className="font-sans italic text-bx-teal-400">
              what is next.
            </span>
          </>
        }
        copy="The changelog for the BridgeX website and the platform roadmap. Every entry carries an honest status label — Live, Sandbox, Demo or Planned — so you can always tell a preview from a product."
        image="/images/hero-skyline-sf.jpg"
        imageAlt="Multi-monitor trading desk showing candlestick and line charts"
        imageWidth={1920}
        imageHeight={1281}
      />

      <Section tone="mint" ariaLabel="What the status labels mean">
        <SectionIntro
          label="Read the labels"
          heading="Four words, four honest meanings"
          copy="We label everything we describe, on this page and across the site. If a feature is a preview, it says Demo. If it is not built yet, it says Planned. No exceptions."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {UPDATE_STATUS_DEFINITIONS.map((def, i) => (
            <Reveal key={def.status} delay={i * 0.08} className="h-full">
              <div className="bx-card-hover group flex h-full flex-col items-center border border-bx-teal-500/30 bg-bx-white rounded-2xl p-6 text-center">
                <FeatureIcon icon={def.icon} size="md" />
                <div className="mt-5">
                  <StatusBadge status={def.status} />
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-bx-slate-500">
                  {def.meaning}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white" ariaLabel="Changelog">
        <SectionIntro
          label="The changelog"
          heading="Newest first, back to October 2026"
          copy="Entries are never rewritten to flatter the present. When something changes, the correction is published as a new entry."
        />
        <ol className="relative mt-12 space-y-10 border-l-2 border-bx-teal-500/40 pl-8 sm:pl-12">
          {PRODUCT_UPDATES.map((update, i) => (
            <Reveal key={update.id} delay={Math.min(i, 3) * 0.06}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-2 block h-3.5 w-3.5 rotate-45 border-2 border-bx-teal-500 bg-bx-white sm:-left-12"
                />
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <time
                    dateTime={update.date}
                    className="font-sans text-sm font-bold text-bx-slate-500"
                  >
                    {formatResourceDate(update.date)}
                  </time>
                  <StatusBadge status={update.status} />
                </div>
                <h3 className="mt-3 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900">
                  {update.title}
                </h3>
                <p className="mt-2 max-w-[68ch] text-base leading-relaxed text-bx-slate-500">
                  {update.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {update.items.map((item) => (
                    <li
                      key={item}
                      className="flex max-w-[68ch] items-start gap-2.5 text-[15px] leading-relaxed text-bx-navy-900/90"
                    >
                      <Icon
                        name="check"
                        size={18}
                        className="mt-0.5 shrink-0 text-bx-teal-600"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-14">
          <p className="border-t border-bx-teal-500/25 pt-6 text-base leading-relaxed text-bx-slate-500">
            That is the whole log so far. The next entry appears here on
            the day the next change is made — not before.
          </p>
        </Reveal>
      </Section>

      <PhotoBand
        image="/images/band-skyline-kl.jpg"
        alt="Two laptops showing trading charts with a hand holding a phone"
        eyebrow="The roadmap"
        heading={
          <>
            Planned means{" "}
            <span className="font-sans italic text-bx-teal-400">
              planned.
            </span>
          </>
        }
        copy="No date is promised until there is one to promise. When a module reaches the sandbox, the entry appears here first — and the developer docs say so too."
        height="sm"
        imageWidth={1600}
        imageHeight={1067}
      >
        <ButtonLink href="/resources/developers">
          Read the developer docs
        </ButtonLink>
      </PhotoBand>

      <Section tone="mint" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About product updates"
            align="center"
          />
          <Reveal className="mt-10">
            <FaqAccordion items={UPDATES_FAQS} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="See what is live — and what is coming."
        copy="The changelog tells you where BridgeX stands. A private demo shows you what it does today, on your own workflows."
      />
    </>
  );
}
