/**
 * Case Studies — honest "coming soon" page (spec §10). No fabricated
 * outcomes: this page says plainly that no case study is published yet,
 * explains what future case studies will cover, and how they will be
 * produced with customer permission and checked facts.
 */
import type { Metadata } from "next";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { asset } from "@/lib/paths";
import { CASE_STUDY_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "BridgeX case studies are coming soon. We publish client stories only with the customer's agreement and checked facts — here is what future case studies will cover.",
};

const COVERAGE_AREAS = [
  {
    icon: "building" as const,
    title: "Launches",
    text: "How a new brokerage went from decision to live: the timeline, the choices that mattered, and what the team would do differently.",
  },
  {
    icon: "onboarding" as const,
    title: "Onboarding conversion",
    text: "What changed when the application journey was redesigned — where applicants stopped dropping off, and how the team knows.",
  },
  {
    icon: "ib" as const,
    title: "Partner growth",
    text: "How an IB programme grew past the spreadsheet: attribution rules, a ledger partners trust, and payouts on schedule.",
  },
  {
    icon: "payments" as const,
    title: "Payment reliability",
    text: "Routing, retry and reconciliation in practice — fewer failed deposits, and a finance team that stops dreading month-end.",
  },
  {
    icon: "tradeops" as const,
    title: "Operations time returned",
    text: "The hours a dealing and operations team got back when batch changes, approvals and audit trails replaced manual work.",
  },
  {
    icon: "layers" as const,
    title: "Migrations",
    text: "Moving from disconnected tools to one connected record — staged, reconciled, and rolled back safely where it needed to be.",
  },
];

const PUBLISHING_STEPS = [
  {
    step: "1",
    title: "The customer agrees",
    text: "No story starts without the customer's say-so. They choose what is on the record and what stays private, before a word is drafted.",
  },
  {
    step: "2",
    title: "We write it together",
    text: "The draft is built from the customer's own account of what changed — in their words, about their team, with their context intact.",
  },
  {
    step: "3",
    title: "Every fact is checked",
    text: "Numbers appear only where the customer has agreed them and we can stand behind them. Anything unverified stays out.",
  },
  {
    step: "4",
    title: "They approve the final wording",
    text: "Nothing is published until the customer has read the finished piece and approved it. They can withdraw it afterwards, too.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <ResourceHero
        href="/resources/case-studies"
        eyebrow="Case Studies"
        title={
          <>
            Case studies,{" "}
            <span className="font-sans italic text-bx-teal-400">
              coming soon.
            </span>
          </>
        }
        copy="We have no client stories to publish yet — and we would rather say so than invent a logo wall. When the first BridgeX customers agree to share their stories, they will appear here, with their names on them and their facts checked."
        image="/images/band-glass-tower.jpg"
        imageAlt="Two traders pointing at a tablet showing a chart on a desk"
        imageWidth={1600}
        imageHeight={1040}
      />

      <Section tone="mint" ariaLabel="Why this page is empty">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-teal-700">
              An honest page
            </p>
            <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-balance text-bx-navy-900 sm:text-4xl">
              A case study is a promise. We only make promises we can keep.
            </h2>
            <p className="mx-auto mt-5 max-w-[62ch] text-base leading-relaxed text-bx-slate-500 sm:text-lg">
              A real case study needs three things: a real customer, their
              agreement to be named, and facts checked together. Until all
              three exist, this page stays exactly as it is — an
              explanation, not a fabrication.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white" ariaLabel="What future case studies will cover">
        <SectionIntro
          label="What we will document"
          heading="When the stories arrive, this is what they will cover"
          copy="Six kinds of change, told the same way each time: the starting point, what changed, and what it meant in the customer's own terms."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COVERAGE_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="flex h-full flex-col items-center border border-bx-teal-500/30 bg-bx-white rounded-2xl p-7 text-center">
                <FeatureIcon icon={area.icon} size="md" />
                <h3 className="mt-5 font-sans text-xl font-extrabold leading-snug text-bx-navy-900">
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-slate-500">
                  {area.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy" ariaLabel="How we publish case studies">
        <SectionIntro
          dark
          label="How we publish"
          heading="Permission first, facts second, publication last"
          copy="The process every BridgeX case study will go through — so that when the first one appears, you know exactly what stands behind it."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PUBLISHING_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08} className="h-full">
              <li className="flex h-full flex-col border border-bx-teal-500/30 bg-bx-navy-800/60 p-6">
                <span className="font-sans text-5xl font-semibold italic text-bx-teal-400">
                  {s.step}
                </span>
                <h3 className="mt-4 font-sans text-lg font-extrabold leading-snug text-bx-white">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-slate-300/85">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="white" ariaLabel="Are you a BridgeX customer">
        {/* Abstract architecture imagery only — no client photos, no
            logos, nothing that implies client work exists yet. */}
        <div className="grid items-stretch gap-10 overflow-hidden border border-bx-teal-500/30 bg-bx-white rounded-2xl lg:grid-cols-[0.8fr_1.4fr_1fr] lg:gap-0">
          <div className="overflow-hidden">
            <img
              src={asset("/images/abstract-glass-lines.jpg")}
              alt="Hands holding a phone with a trading app in front of a laptop showing candlestick charts"
              width={1400}
              height={2100}
              loading="lazy"
              className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto lg:min-h-[320px]"
            />
          </div>
          <div className="p-8 sm:p-10 lg:py-12">
            <h2 className="font-sans text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-bx-navy-900 sm:text-4xl">
              Are you a BridgeX customer with a story to tell?
            </h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-bx-slate-500 sm:text-lg">
              Tell us what changed for your team. We will draft the story
              with you, check every fact together, and publish nothing
              until you have approved the final wording.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 pt-0 sm:flex-row sm:p-10 sm:pt-0 lg:flex-col lg:p-10">
            <ButtonLink href="/company/contact" size="lg">
              Tell us your story
            </ButtonLink>
            <ButtonLink href="/book-demo" variant="secondary" size="lg">
              Book a Private Demo
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="mint" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About case studies"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={CASE_STUDY_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand
        heading="The stories come later. The product is here now."
        copy="Case studies will arrive when our customers are ready to tell them. Until then, see BridgeX running on your own workflows in a private demo."
      />
    </>
  );
}
