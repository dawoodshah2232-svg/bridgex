import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_OFFERINGS, SERVICES_FAQ } from "@/content/company";
import InnerHero from "@/components/company/InnerHero";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import GoldLineDivider, { GoldRule } from "@/components/ui/GoldLineDivider";
import PhotoBand from "@/components/ui/PhotoBand";
import ImageText from "@/components/ui/ImageText";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Services — Implementation, Migration & Managed Support",
  description:
    "Implementation, onboarding, customisation, integrations, data migration, training and managed support — the services that carry BridgeX from plan to production.",
};

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        href="/services"
        eyebrow="Services"
        title={
          <>
            The platform is only half of it.{" "}
            <em className="font-display font-semibold italic text-bx-maroon-700">
              The rest is how it lands.
            </em>
          </>
        }
        copy="Software does not implement itself. BridgeX services carry the platform from first workshop to daily operations — implementation, migration, training and ongoing support, from the people who built it."
        image="/images/services-team.jpg"
        imageAlt="BridgeX delivery team and client colleagues working through a plan around a table"
        imageWidth={1600}
        imageHeight={900}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/services/implementation" size="lg">
            How implementation works
          </ButtonLink>
          <ButtonLink href="/book-demo" variant="secondary" size="lg">
            Book a Private Demo
          </ButtonLink>
        </div>
      </InnerHero>

      {/* The seven services */}
      <Section tone="white" ariaLabel="What our services cover">
        <SectionIntro
          label="What we do"
          heading="Seven services, one delivery team."
          copy="Each service stands alone. Together they cover the whole journey — from deciding what to build, through moving your data, to running the platform day after day."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_OFFERINGS.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.07}>
              <Link
                href={service.href}
                className="group flex h-full flex-col border border-bx-maroon-900/15 bg-bx-ivory p-7 transition-colors duration-200 hover:border-bx-gold-500/70 hover:bg-bx-cream"
              >
                <FeatureIcon icon={service.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-bx-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-bx-gold-500/30 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 font-body text-sm text-bx-ink"
                    >
                      <span aria-hidden="true" className="text-bx-gold-600">
                        <Icon name="check" size={16} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-extrabold text-bx-maroon-700">
                  Learn more
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}

          {/* The eighth tile: the conversation itself */}
          <Reveal delay={0.14}>
            <div className="flex h-full flex-col bg-bx-maroon-900 p-7 text-bx-ivory">
              <GoldRule />
              <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em]">
                Not sure where to start?
              </h3>
              <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-bx-champagne/85">
                Most engagements begin with a conversation, not a purchase
                order. Tell us what you are trying to run, and we will tell
                you honestly what it takes — including when the answer is
                &ldquo;less than you think&rdquo;.
              </p>
              <div className="mt-6">
                <ButtonLink href="/company/contact" variant="secondaryLight">
                  Talk to an Expert
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Photo interlude — the delivery team, in the room */}
      <PhotoBand
        image="/images/band-bridge-istanbul.jpg"
        alt="Bosphorus Bridge glowing red above Istanbul at night"
        eyebrow="Delivery, not just software"
        heading={
          <>
            The people who built it{" "}
            <em className="font-display font-semibold italic text-bx-gold-400">
              carry it into production.
            </em>
          </>
        }
        copy="From the first workshop to daily operations — implementation, migration, training and ongoing support, from one delivery team."
        height="sm"
        imageWidth={1920}
        imageHeight={1280}
      >
        <ButtonLink href="/book-demo">Book a Private Demo</ButtonLink>
      </PhotoBand>

      {/* How engagements work */}
      <ImageText
        image="/images/team-collaboration.jpg"
        alt="Team collaborating over a laptop in a bright office"
        eyebrow="How we work"
        heading={
          <>
            Scoped in phases.{" "}
            <em className="font-display font-semibold italic text-bx-maroon-700">
              Signed off at each step.
            </em>
          </>
        }
        copy="Every engagement follows the same discipline: agree the scope, build in a staging environment, validate against your real workflows, and only then go live. You always know what phase you are in and what comes next."
        tone="cream"
        imageWidth={1600}
        imageHeight={1068}
        ctaLabel="See the full implementation method"
        ctaHref="/services/implementation"
      >
        <ol className="mt-8 space-y-0">
          {[
            {
              step: "Scope",
              text: "We agree what is in, what is out, and what success looks like — in writing.",
            },
            {
              step: "Build",
              text: "Configuration and integrations take shape in staging, visible to you as they progress.",
            },
            {
              step: "Validate",
              text: "Your team tests with realistic data. Nothing proceeds until validation passes.",
            },
            {
              step: "Launch & support",
              text: "A planned cutover, close support in the first weeks, then managed services take over.",
            },
          ].map((item, i) => (
            <li
              key={item.step}
              className="flex gap-5 border-t border-bx-gold-500/30 py-6 last:border-b"
            >
              <span className="font-display text-3xl font-semibold text-bx-gold-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-lg font-extrabold text-bx-ink">
                  {item.step}
                </h3>
                <p className="mt-1 max-w-[60ch] font-body text-[15px] leading-relaxed text-bx-muted">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ImageText>

      {/* FAQ */}
      <Section tone="ivory" ariaLabel="Services frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="Asked before every engagement."
            copy="The honest answers, including the ones about timelines and who does the work."
          />
          <Reveal>
            <FaqAccordion items={SERVICES_FAQ} />
          </Reveal>
        </div>
        <GoldLineDivider className="mt-16" />
      </Section>

      <CtaBand
        heading="Tell us what you are building."
        copy="A short conversation is enough to say whether BridgeX fits — and what the honest path to production looks like for your business."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/company/contact"
      />
    </>
  );
}
