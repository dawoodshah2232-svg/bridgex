/**
 * /platform/no-code-studio — No-Code Studio (spec §8).
 * Light hero, the eleven-builder interactive explorer with a clearly
 * labelled SIMULATED builder preview (no real publishing exists behind
 * this page), configuration governance, and a "what the studio cannot do"
 * honesty panel. Light hero.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { STUDIO_FAQS } from "@/content/platform-studio";
import PageHero from "@/components/platform/PageHero";
import StudioBuilderTabs from "@/components/platform/StudioBuilderTabs";
import { FaqSection, WorkflowSteps } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import DemoLabel from "@/components/ui/DemoLabel";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "No-Code Studio — Configure Objects, Forms, Workflows & Journeys",
  description:
    "Eleven builders — objects, forms, documents, assessments, emails, workflows, journeys, pipelines, incentives, reports and dashboards — configured, versioned and published without code.",
};

const GOVERNANCE = [
  {
    title: "Draft",
    text: "Build and change configuration in a non-production environment. Nothing a client sees is touched while you work.",
  },
  {
    title: "Review",
    text: "A second person reviews the change — what it touches, who it affects, and what could go wrong.",
  },
  {
    title: "Publish",
    text: "Publishing is a permission, not a default. The published version is recorded, and the previous version stays readable.",
  },
  {
    title: "Roll back",
    text: "If a published change misbehaves, a previous version can be restored. Cases already processed keep the version that ran.",
  },
];

const CANNOT = [
  {
    title: "It cannot change financial logic",
    text: "Ledger rules, fee calculations and reconciliation behaviour are platform logic, not configuration. The studio shapes the rules around them — it does not rewrite them.",
  },
  {
    title: "It cannot bypass permissions",
    text: "A workflow or form cannot grant access its author does not have. Permissions are a foundation capability; configuration sits inside them, never above them.",
  },
  {
    title: "It cannot skip approval",
    text: "Publishing, like money movement, is gated. A builder change that affects live clients goes through review — the studio makes change faster, not ungoverned.",
  },
];

export default function NoCodeStudioPage() {
  return (
    <>
      <PageHero
        href="/platform/no-code-studio"
        eyebrow="Platform · Configuration"
        title={
          <>
            Shape the platform{" "}
            <span className="font-display font-semibold italic text-bx-maroon-700">
              around your business.
            </span>
          </>
        }
        copy="Every brokerage works a little differently. The No-Code Studio is where those differences become configuration — objects, forms, documents, workflows, journeys, programs, reports and dashboards — built by the people who run the operation, without waiting on a release."
      />

      {/* Builder family — interactive explorer */}
      <Section tone="cream" id="builders" ariaLabel="The builder family">
        <SectionIntro
          label="Eleven builders, one studio"
          heading="Choose a builder to see what it shapes."
          copy="Each builder configures one kind of thing — and everything it produces is versioned, reviewed and published the same way. The preview panel is a simulation: it shows the shape of a builder screen, clearly labelled, because there is no live editor on this marketing page."
        />
        <div className="mt-6">
          <DemoLabel text="Simulated editing — demo preview" />
        </div>
        <div className="mt-8">
          <StudioBuilderTabs />
        </div>
      </Section>

      {/* Why no-code matters here */}
      <Section tone="ivory" ariaLabel="Why configuration matters">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              label="Why it matters"
              heading="Your operation changes faster than your release cycle."
              copy="A new country rule, a new partner program, a new document requirement — these are Tuesday problems, not roadmap items. Configuration is how a platform keeps up with the business it serves."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {[
                {
                  title: "The people who know, configure",
                  text: "The operations lead who knows why a form needs a step is the person who adds it — not a developer translating a ticket three weeks later. Knowledge stays where it lives.",
                },
                {
                  title: "Change is a version, not a mystery",
                  text: "Every published configuration is a version with an author, a reviewer and a date. When something behaves unexpectedly, the first question — what changed? — has an answer.",
                },
                {
                  title: "Consistency across every surface",
                  text: "A field defined once appears in forms, lists, workflows, reports and permissions the same way. Configuration is shared because the data model is shared.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex gap-5 border-t border-bx-gold-500/30 pt-6">
                    <Icon name="sliders" size={24} className="mt-0.5 shrink-0 text-bx-gold-600" />
                    <div>
                      <h3 className="font-sans text-xl font-extrabold leading-tight text-bx-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-bx-muted">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Governance — dark */}
      <Section tone="maroon" id="governance" ariaLabel="Configuration governance">
        <SectionIntro
          dark
          label="Governed change"
          heading={
            <>
              Fast to change.{" "}
              <span className="font-display font-semibold italic text-bx-champagne">
                Hard to break.
              </span>
            </>
          }
          copy="No-code does not mean ungoverned. Every configuration change follows the same path — draft, review, publish, and the ability to roll back — because a platform that anyone can change is a platform nobody can trust."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="h-full border-t-2 border-bx-gold-500 pt-5">
                <span className="font-sans text-sm font-bold tracking-[0.18em] text-bx-gold-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-sans text-lg font-extrabold leading-tight text-bx-ivory">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bx-champagne/85">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* What the studio cannot do — honesty panel */}
      <Section tone="white" ariaLabel="What the studio cannot do">
        <SectionIntro
          label="Honest limits"
          heading="What the studio cannot do — and why that is a feature."
          copy="A configuration tool earns trust by being clear about its edges. These are not roadmap gaps; they are deliberate boundaries that keep the platform safe to change."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CANNOT.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full border border-bx-gold-500/25 bg-bx-ivory p-6">
                <Icon name="shield" size={26} className="text-bx-gold-600" />
                <h3 className="mt-4 font-sans text-lg font-extrabold leading-tight text-bx-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bx-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-[68ch] text-base leading-relaxed text-bx-muted">
            Configuration sits on the shared foundation — the same permissions,
            workflows and audit log as everything else. The{" "}
            <Link href="/platform/architecture" className="font-bold text-bx-maroon-700 hover:underline">
              architecture page
            </Link>{" "}
            shows how the foundation holds it all together.
          </p>
        </Reveal>
      </Section>

      {/* Where builders show up */}
      <Section tone="ivory" ariaLabel="Where builders show up">
        <SectionIntro
          label="In practice"
          heading="Builders shape what clients and teams actually see."
          copy="A form built in the studio is the form a client completes. A journey built in the studio is the path a client walks. A report built in the studio is the report a reviewer reads. Configuration is not a back room — it is the surface of the business."
        />
        <div className="mt-12">
          <WorkflowSteps
            steps={[
              {
                title: "A form becomes a journey step",
                text: "Forms and assessments plug into client journeys — registration, verification, suitability — in the order you define.",
              },
              {
                title: "A workflow becomes an approval",
                text: "Workflows route cases, gate payments and escalate exceptions — the same engine, configured per process.",
              },
              {
                title: "A program becomes a ledger",
                text: "Incentive programs calculate commissions from live events, and the ledger records every entry they produce.",
              },
              {
                title: "A dashboard becomes a morning habit",
                text: "Reports and dashboards, published per role, are where each team starts its day — on the same records.",
              },
            ]}
          />
        </div>
      </Section>

      <FaqSection
        heading="Studio questions, answered plainly."
        copy="What configuration can and cannot change, who may publish, and how a wrong change is undone."
        items={STUDIO_FAQS}
        tone="cream"
      />

      <CtaBand
        heading="Configure a real workflow — in a demo."
        copy="Bring a form, a journey or a program your team actually runs. A private demo builds it in the studio with you, so you can judge the tool on your work, not on a tour."
      />
    </>
  );
}
