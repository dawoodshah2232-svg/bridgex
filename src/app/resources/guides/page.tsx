/**
 * Guides & Reports — original seeded BridgeX guides (spec §10).
 * Each guide expands inline to reveal its full text; there are no
 * detail routes and no dead download links. "Request the full guide"
 * links to the real contact page.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { GUIDES } from "@/content/resources";
import { GUIDE_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";
import GuideReader from "@/components/resources/GuideReader";

export const metadata: Metadata = {
  title: "Guides & Reports",
  description:
    "Practical BridgeX guides for operators and decision-makers: launching a brokerage, designing an IB programme, onboarding and KYC, payment routing and reporting — free to read in full.",
};

const HOW_TO_USE = [
  {
    icon: "book" as const,
    title: "Read it where you are",
    text: "Every guide opens in full on this page. No form, no download, no paywall — the whole thing, in the open.",
  },
  {
    icon: "users" as const,
    title: "Share it with your team",
    text: "Each guide names its audience at the top, so the right person reads the right guide. Send the page link; it just works.",
  },
  {
    icon: "document" as const,
    title: "Want it as a document?",
    text: "Contact us and name the guide — we will send the full text as a document your team can keep and annotate.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <ResourceHero
        href="/resources/guides"
        eyebrow="Guides & Reports"
        title={
          <>
            Practical guides,{" "}
            <span className="font-sans italic text-bx-teal-400">
              written for operators.
            </span>
          </>
        }
        copy="Five guides on the work financial businesses actually do: launching, partnering, onboarding, getting paid and knowing what is going on. Read each one in full, right here."
        image="/images/workshop-presentation-wide.jpg"
        imageAlt="Hand gesturing at a candlestick chart on a dark trading monitor"
        imageWidth={1920}
        imageHeight={1080}
      />

      <Section tone="white" ariaLabel="Guides">
        <SectionIntro
          label="The collection"
          heading="Five guides, five jobs to be done"
          copy="Each guide is written for a named audience and a real week of work. Open one to read it in full — and if you want it as a document for your team, the request link is at the end of every guide."
        />
        <Reveal className="mt-12">
          <GuideReader guides={GUIDES} />
        </Reveal>
      </Section>

      <Section tone="mint" ariaLabel="How to use these guides">
        <SectionIntro
          label="How to use these guides"
          heading="Built to be read, shared and argued with"
          copy="A guide earns its place when a team actually uses it. Three ways to get value out of this page."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {HOW_TO_USE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col items-center border border-bx-teal-500/30 bg-bx-white rounded-2xl p-7 text-center">
                <FeatureIcon icon={item.icon} size="md" />
                <h3 className="mt-5 font-sans text-xl font-extrabold leading-snug text-bx-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-slate-500">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="text-base leading-relaxed text-bx-slate-500">
            Have a topic we should cover next?{" "}
            <Link
              href="/company/contact"
              className="font-bold text-bx-teal-700 underline decoration-bx-teal-500 decoration-2 underline-offset-2 hover:text-bx-navy-900"
            >
              Suggest a guide topic
            </Link>{" "}
            — the best ones come from operators describing a real week.
          </p>
        </Reveal>
      </Section>

      <Section tone="white" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About the guides"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={GUIDE_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Guides explain the work. A demo shows it running."
        copy="Read how onboarding, payments and partner growth should work — then see BridgeX doing it on your own workflows."
      />
    </>
  );
}
