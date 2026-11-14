import type { Metadata } from "next";
import {
  ABOUT_FAQ,
  ABOUT_PRINCIPLES,
  EDITABLE_COMPANY_DETAILS,
} from "@/content/company";
import InnerHero from "@/components/company/InnerHero";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import TealLineDivider from "@/components/ui/TealLineDivider";
import PhotoBand from "@/components/ui/PhotoBand";
import ImageText from "@/components/ui/ImageText";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "About BridgeX — Mission, Philosophy & Principles",
  description:
    "BridgeX builds connected infrastructure for modern financial businesses. Our mission, our philosophy, and the product principles that shape every decision.",
};

export default function AboutPage() {
  return (
    <>
      <InnerHero
        href="/company/about"
        eyebrow="Company — About BridgeX"
        title={
          <>
            Connected infrastructure for{" "}
            <em className="font-sans font-semibold italic text-bx-teal-700">
              modern financial businesses.
            </em>
          </>
        }
        copy="BridgeX exists because financial businesses run on too many disconnected systems. Onboarding in one place, client records in another, payments somewhere else, partners tracked in spreadsheets. We build the connected layer that brings them together."
        image="/images/company-collaboration.jpg"
        imageAlt="Two traders reviewing a tablet and notebook on a sofa"
        imageWidth={1600}
        imageHeight={900}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/book-demo" size="lg">
            See it in action
          </ButtonLink>
          <ButtonLink href="/platform" variant="secondary" size="lg">
            Explore the Platform
          </ButtonLink>
        </div>
      </InnerHero>

      {/* Mission — editorial statement */}
      <Section tone="navy" ariaLabel="Our mission">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-sans font-bold uppercase tracking-[0.22em] text-bx-teal-400">
            Our mission
          </p>
          <p className="mt-6 font-sans text-3xl font-semibold leading-[1.25] text-bx-white sm:text-4xl lg:text-[44px]">
            &ldquo;Where markets connect&rdquo; is not a slogan. It is the
            job: every client, every account, every payment and every partner,
            connected — so the business can see itself clearly and act on what
            it sees.
          </p>
          <TealLineDivider className="mx-auto mt-10 max-w-md" />
          <p className="mx-auto mt-8 max-w-[62ch] font-body text-base leading-relaxed text-bx-slate-300/85">
            We measure that by whether your teams stop reconciling systems by
            hand — not by how many features we can list.
          </p>
        </Reveal>
      </Section>

      {/* Philosophy */}
      <ImageText
        image="/images/boardroom-executives.jpg"
        alt="Trader at a laptop in a dark office with a wall of market data"
        eyebrow="Philosophy"
        heading={
          <>
            Technology should fit the business —{" "}
            <em className="font-sans font-semibold italic text-bx-teal-700">
              not the other way round.
            </em>
          </>
        }
        copy="Every financial business runs differently: different desks, different products, different rules. A platform that forces one shape on all of them creates workarounds, and workarounds become the real system. We build the other way. BridgeX is configured around how your business actually operates — your entities, your journeys, your approval habits. Configuration, not custom code, so your setup stays upgradeable and every change stays reversible."
        flip
        tone="white"
        imageWidth={1920}
        imageHeight={1280}
      >
        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-bx-slate-500 sm:text-lg">
          And we are honest about the boundary. We build technology for
          financial businesses. We do not run your brokerage, hold your
          clients&rsquo; funds, or make regulatory claims on your behalf.
          Your obligations stay yours; our job is to make the evidence
          for them easy to produce.
        </p>
      </ImageText>

      {/* Principles */}
      <Section tone="white" ariaLabel="Product principles">
        <SectionIntro
          label="Product principles"
          heading="Four principles behind every decision."
          copy="These are the tests a feature has to pass before we build it — and the standards we hold ourselves to when we describe what is ready and what is not."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ABOUT_PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={(i % 2) * 0.07}>
              <article className="flex h-full gap-5 border border-bx-navy-900/15 bg-bx-white p-7">
                <span className="shrink-0 text-bx-teal-600">
                  <Icon name={principle.icon} size={30} />
                </span>
                <div>
                  <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-slate-500">
                    {principle.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Photo interlude — the tagline, as a photograph */}
      <PhotoBand
        image="/images/hero-bridge-night.jpg"
        alt="Close-up of a monitor showing a rising candlestick chart"
        eyebrow="Where markets connect"
        heading={
          <>
            Every client, every account,{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              every partner — connected.
            </em>
          </>
        }
        copy="So the business can see itself clearly and act on what it sees."
        height="sm"
        imageWidth={1600}
        imageHeight={1068}
      >
        <ButtonLink href="/book-demo">See it in action</ButtonLink>
      </PhotoBand>

      {/* Company details — explicitly editable placeholders */}
      <Section tone="mint" ariaLabel="Company details">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Company details"
            heading="The factual record, as it stands."
            align="center"
          />
          <Reveal className="mt-10">
            <div className="border border-bx-teal-600/50 bg-bx-white">
              <p className="border-b border-bx-teal-500/30 bg-bx-mint-50 px-6 py-4 font-body text-[15px] leading-relaxed text-bx-navy-900">
                <span className="font-sans font-extrabold uppercase tracking-[0.08em] text-bx-teal-700">
                  Editable placeholders —{" "}
                </span>
                these details are being confirmed and will be updated here.
                We publish nothing invented in their place.
              </p>
              <dl className="divide-y divide-bx-teal-500/20">
                {EDITABLE_COMPANY_DETAILS.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid gap-1 px-6 py-4 sm:grid-cols-[1fr_1fr] sm:gap-6"
                  >
                    <dt className="font-sans text-sm font-extrabold uppercase tracking-[0.08em] text-bx-teal-700">
                      {detail.label}
                    </dt>
                    <dd className="font-body text-base text-bx-slate-500">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" ariaLabel="About BridgeX frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="What people ask about us."
          />
          <Reveal>
            <FaqAccordion items={ABOUT_FAQ} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Meet the people behind the platform."
        copy="Book a demo or get in touch — you will talk to the people who build and support BridgeX, not a call script."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Contact Us"
        secondaryHref="/company/contact"
      />
    </>
  );
}
