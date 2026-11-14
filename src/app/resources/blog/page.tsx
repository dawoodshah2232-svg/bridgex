/**
 * Insights / Blog — the seeded BridgeX editorial index (spec §10).
 * Reuses INSIGHT_ARTICLES from insights.ts; each card expands inline to
 * reveal the full article text. There are no article detail routes.
 */
import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import TealLineDivider from "@/components/ui/TealLineDivider";
import { asset } from "@/lib/paths";
import { INSIGHT_ARTICLES } from "@/content/insights";
import { ARTICLE_BODIES, BLOG_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";
import ArticleReader, {
  type ReadableArticle,
} from "@/components/resources/ArticleReader";

export const metadata: Metadata = {
  title: "Insights / Blog",
  description:
    "Original BridgeX editorial on brokerage operations: reconciliation, partner growth and onboarding — written by the BridgeX team, readable in full on this page.",
};

const ARTICLES: ReadableArticle[] = INSIGHT_ARTICLES.map((a) => ({
  ...a,
  body: ARTICLE_BODIES[a.slug] ?? [],
}));

export default function BlogPage() {
  return (
    <>
      <ResourceHero
        href="/resources/blog"
        eyebrow="Insights / Blog"
        title={
          <>
            Notes on running a{" "}
            <span className="font-sans italic text-bx-teal-400">
              brokerage well.
            </span>
          </>
        }
        copy="Original editorial from the BridgeX team — on reconciliation, partner trust and onboarding that converts. Each article opens in full right here; there is nothing to download and nothing behind a form."
        image="/images/skyline-dusk.jpg"
        imageAlt="A city skyline at dusk, office lights coming on across the towers"
        imageWidth={1600}
        imageHeight={1067}
      />

      <Section tone="white" ariaLabel="Articles">
        <SectionIntro
          label="The library so far"
          heading="Three essays, three recurring problems"
          copy="Every brokerage we talk to wrestles with the same three things: records that disagree, partners who cannot see their earnings, and applicants who give up halfway through a form. These essays are our view on each — and what to do about it."
        />
        <Reveal className="mt-12">
          <ArticleReader articles={ARTICLES} />
        </Reveal>
      </Section>

      <Section tone="navy" ariaLabel="How we write">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            {/* Offset teal frame lives inside the wrapper's own
                margin, so nothing overflows at 375px. */}
            <div className="relative mb-3 mr-3 sm:mb-4 sm:mr-4">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-teal-500/60 sm:translate-x-4 sm:translate-y-4"
              />
              <img
                src={asset("/images/team-strategy.jpg")}
                alt="Colleagues discussing strategy in a relaxed office lounge"
                width={1600}
                height={1067}
                loading="lazy"
                className="relative aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionIntro
              dark
              label="How we write"
              heading="Written, not generated. Opinionated, not inflated."
            />
            <div className="mt-8 space-y-6 text-base leading-relaxed text-bx-slate-300/90 sm:text-lg">
              <p>
                Every article here is written by a person at BridgeX, from our
                own view of how brokerage operations work. We name the problem
                plainly, say what we would do about it, and leave out the
                adjectives that usually fill this kind of page.
              </p>
              <p>
                The essays describe no client, no deployment and no result.
                When we have customer stories to tell, they will appear as
                case studies — with permission, with checked facts, and with
                the customer’s name on them.
              </p>
              <TealLineDivider className="pt-2" />
              <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-bx-teal-400">
                BridgeX editorial · New pieces appear here as they are finished
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About Insights"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={BLOG_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Like the thinking? See the product behind it."
        copy="The essays describe how brokerage operations should run. A private demo shows how BridgeX runs them on your own workflows."
      />
    </>
  );
}
