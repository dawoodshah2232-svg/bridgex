import type { Metadata } from "next";
import {
  MIGRATION_DISCOVERY_CHECKLIST,
  MIGRATION_FAQ,
  MIGRATION_STAGES,
} from "@/content/company";
import InnerHero from "@/components/company/InnerHero";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import PhotoBand from "@/components/ui/PhotoBand";
import ImageText from "@/components/ui/ImageText";
import FeatureIcon from "@/components/ui/FeatureIcon";
import MigrationFlow from "@/components/services/MigrationFlow";

export const metadata: Metadata = {
  title: "Integration & Migration — Staged, Reconciled, Reversible",
  description:
    "BridgeX integration and migration: discovery checklist, source mapping, staged migration in a staging environment, dual-write and rollback where applicable, and reconciliation against the source.",
};

export default function IntegrationMigrationPage() {
  return (
    <>
      <InnerHero
        dark
        href="/services/integration-migration"
        eyebrow="Services — Integration & Migration"
        title={
          <>
            Your history moves with you.{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              Verified, not hoped for.
            </em>
          </>
        }
        copy="Migration is where most platform projects fail — quietly, in the data. We map every source, migrate in stages to a staging environment first, reconcile against the source, and agree a rollback plan before anything goes live."
        image="/images/hero-bridge-rotterdam.jpg"
        imageAlt=""
        imageWidth={1920}
        imageHeight={1280}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="#stages" size="lg">
            See the five stages
          </ButtonLink>
          <ButtonLink href="/platform/integrations" variant="secondaryLight" size="lg">
            Integration architecture
          </ButtonLink>
        </div>
      </InnerHero>

      {/* Discovery checklist */}
      <ImageText
        image="/images/compliance-review.jpg"
        alt="Overhead view of printed market analytics with a magnifier, notebook and pencils"
        eyebrow="Before anything moves"
        heading="The discovery checklist."
        copy="Every migration starts with these questions. If you can answer most of them, you are further along than most. If you cannot, that is what discovery is for — we work through them with you."
        flip
        tone="white"
        imageWidth={1600}
        imageHeight={1067}
      >
        <ul className="mt-8 divide-y divide-bx-teal-500/25 border-y border-bx-teal-500/25">
          {MIGRATION_DISCOVERY_CHECKLIST.map((item, i) => (
            <li key={item} className="flex items-start gap-4 py-4">
              <span className="mt-0.5 font-sans text-xl font-semibold text-bx-teal-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="pt-1 font-body text-base leading-relaxed text-bx-navy-900">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </ImageText>

      {/* Five stages */}
      <Section tone="white" id="stages" ariaLabel="The five migration stages">
        <SectionIntro
          label="The migration path"
          heading="Five stages, each one proven before the next."
          copy="Staging first, production last. Reconciliation closes the loop — and sign-off only happens when the numbers agree or the gap is explained."
        />
        <div className="mt-14 max-w-4xl">
          <MigrationFlow stages={MIGRATION_STAGES} />
        </div>
      </Section>

      {/* Photo interlude — staging first, production last */}
      <PhotoBand
        image="/images/band-glass-tower.jpg"
        alt="Two traders pointing at a tablet showing a chart on a desk"
        eyebrow="The migration path"
        heading={
          <>
            Staging first,{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              production last.
            </em>
          </>
        }
        copy="Data is migrated into a staging environment first, so your team can inspect the result before it matters — and sign-off only happens when the numbers agree or the gap is explained."
        height="sm"
        imageWidth={1600}
        imageHeight={1040}
      >
        <ButtonLink href="/book-demo">Book a Private Demo</ButtonLink>
      </PhotoBand>

      {/* Dual-write / rollback / reconciliation — three honest cards */}
      <Section tone="mint" ariaLabel="Safety nets">
        <SectionIntro
          label="Safety nets"
          heading="What protects the cutover."
          copy="Three mechanisms, described honestly — including what each one can and cannot do."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Dual-write, where applicable",
              icon: "exchanges" as const,
              text: "Where the systems support it, both old and new run in parallel for a defined window, so a problem in one does not strand you. Where dual-write is not technically feasible, we say so in the plan — we do not pretend otherwise.",
            },
            {
              title: "Rollback, agreed in advance",
              icon: "route" as const,
              text: "The rollback plan — including the trigger that activates it — is written before cutover, not improvised during it. What rollback can cover depends on the systems involved, and the runbook is explicit about that.",
            },
            {
              title: "Reconciliation, not trust",
              icon: "checkCircle" as const,
              text: "After cutover, record counts, balances and samples are compared against the source. Every exception is listed and resolved — or explicitly explained — before the migration is accepted.",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 0.07}>
              <article className="h-full border border-bx-navy-900/15 bg-bx-white p-7">
                <FeatureIcon icon={card.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {card.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-bx-slate-500">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="white" ariaLabel="Integration and migration frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="About moving your data."
          />
          <Reveal>
            <FaqAccordion items={MIGRATION_FAQ} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Plan the move before you make it."
        copy="Start with discovery: what you have, where it lives, and what a staged, reconciled migration would look like for your business."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/company/contact"
      />
    </>
  );
}
