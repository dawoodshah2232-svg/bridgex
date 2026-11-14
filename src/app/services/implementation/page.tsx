import type { Metadata } from "next";
import {
  IMPLEMENTATION_FAQ,
  IMPLEMENTATION_PHASES,
  RESPONSIBILITY_MATRIX,
} from "@/content/company";
import { asset } from "@/lib/paths";
import InnerHero from "@/components/company/InnerHero";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import PhotoBand from "@/components/ui/PhotoBand";
import PhaseTimeline from "@/components/services/PhaseTimeline";
import ResponsibilityMatrix from "@/components/services/ResponsibilityMatrix";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Implementation — Discover, Design, Build, Validate, Deploy",
  description:
    "BridgeX implementation in five phases: Discover, Design, Build, Validate, Deploy. A joint delivery plan, a clear responsibility split, and validation that is never compressed.",
};

export default function ImplementationPage() {
  return (
    <>
      <InnerHero
        dark
        href="/services/implementation"
        eyebrow="Services — Implementation"
        title={
          <>
            Five phases.{" "}
            <em className="font-display font-semibold italic text-bx-gold-400">
              No surprises.
            </em>
          </>
        }
        copy="Implementation is a joint project with a named team on both sides, a written plan, and a gate at the end of every phase. You always know where things stand — and nothing goes live until your team has tested it."
        image="/images/workshop-presentation-wide.jpg"
        imageAlt=""
        imageWidth={1600}
        imageHeight={450}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="#phases" size="lg">
            Explore the phases
          </ButtonLink>
          <ButtonLink href="/services/integration-migration" variant="secondaryLight" size="lg">
            Migration & Integrations
          </ButtonLink>
        </div>
      </InnerHero>

      {/* Phases */}
      <Section tone="ivory" id="phases" ariaLabel="The five implementation phases">
        <SectionIntro
          label="The method"
          heading="Discover, design, build, validate, deploy."
          copy="Each phase ends with an exit gate: a decision, in writing, that the work is done well enough to proceed. Select a phase to see what happens in it, what it produces, and what closes it."
        />
        <div className="mt-12">
          <PhaseTimeline phases={IMPLEMENTATION_PHASES} />
        </div>
      </Section>

      {/* Photo interlude — the gate, not the rush */}
      <PhotoBand
        image="/images/interlude-boardroom.jpg"
        alt="Colleague presenting to teammates in a meeting room"
        eyebrow="The method, in one line"
        heading={
          <>
            A gate at the end of{" "}
            <em className="font-display font-semibold italic text-bx-gold-400">
              every phase.
            </em>
          </>
        }
        copy="Each phase closes with a decision, in writing — that the work is done well enough to proceed. Validation is never compressed."
        height="sm"
        imageWidth={1800}
        imageHeight={1280}
      >
        <ButtonLink href="#responsibility">See who owns what</ButtonLink>
      </PhotoBand>

      {/* Responsibility matrix */}
      <Section tone="cream" id="responsibility" ariaLabel="Who owns what">
        <SectionIntro
          label="Joint delivery"
          heading="Who owns what — agreed up front."
          copy="Most implementation problems are ownership problems in disguise. This matrix is agreed before work starts, so nobody discovers mid-project that a task belonged to no one."
        />
        <Reveal className="mt-12">
          <ResponsibilityMatrix rows={RESPONSIBILITY_MATRIX} />
        </Reveal>
        <Reveal className="mt-8">
          <p className="max-w-[70ch] font-body text-base leading-relaxed text-bx-muted">
            The pattern is deliberate: BridgeX does the building, your team
            does the deciding. We will never ask you to configure the system
            yourself, and we will never make a business decision on your
            behalf.
          </p>
        </Reveal>
      </Section>

      {/* Realistic deliverables */}
      <Section tone="white" ariaLabel="What you receive">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionIntro
              label="Deliverables"
              heading="What you actually receive."
              copy="No vague promises. These are the artefacts every implementation produces, and they stay with you whether or not you continue with managed services."
            />
            <Reveal className="mt-10">
              <div className="relative mb-3 mr-3 sm:mb-4 sm:mr-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-gold-500/60 sm:translate-x-4 sm:translate-y-4"
                />
                <img
                  src={asset("/images/services-workshop.jpg")}
                  alt="Workshop session in progress"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  className="relative aspect-[3/2] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Discovery & scope statement",
                text: "What we agreed to build, and what success looks like.",
                icon: "document" as const,
              },
              {
                title: "Configuration design",
                text: "Data model, journeys, roles and integrations — documented.",
                icon: "sliders" as const,
              },
              {
                title: "Staging environment",
                text: "The full build, tested by your team before it matters.",
                icon: "layers" as const,
              },
              {
                title: "Reconciliation report",
                text: "Migrated data proven against the source, in writing.",
                icon: "audit" as const,
              },
              {
                title: "Training records",
                text: "Who was trained, on what, and what they can do now.",
                icon: "book" as const,
              },
              {
                title: "Go-live runbook & handover",
                text: "Cutover steps, rollback trigger, and the support handover.",
                icon: "checkCircle" as const,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.07}>
                <li className="h-full border border-bx-maroon-900/15 bg-bx-ivory p-6">
                  <span className="text-bx-gold-600">
                    <Icon name={item.icon} size={28} />
                  </span>
                  <h3 className="mt-4 font-sans text-lg font-extrabold text-bx-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-muted">
                    {item.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="ivory" ariaLabel="Implementation frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="Before you commit to a project."
          />
          <Reveal>
            <FaqAccordion items={IMPLEMENTATION_FAQ} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Start with discovery."
        copy="The first step is a conversation about how your business runs today — and what a phased plan to BridgeX would look like for you."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/company/contact"
      />
    </>
  );
}
