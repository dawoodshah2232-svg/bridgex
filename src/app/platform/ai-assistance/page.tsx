/**
 * /platform/ai-assistance — Governed AI Assistance, IN DEVELOPMENT.
 *
 * Title is locked by spec §8: "Governed AI Assistance — In Development".
 * This page describes ILLUSTRATIVE uses only — onboarding summary,
 * document triage, exception triage, reconciliation support — with human
 * approval, evidence and role-limited context throughout. Nothing here
 * claims AI agents are operational; the "In development" label stays
 * visible in the hero and in the status panel. Route status in the
 * registry is "roadmap". Light hero.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { AI_FAQS, AI_USES } from "@/content/platform-studio";
import PageHero from "@/components/platform/PageHero";
import { FaqSection } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import DemoLabel from "@/components/ui/DemoLabel";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Governed AI Assistance — In Development",
  description:
    "Governed AI assistance is in development at BridgeX: illustrative uses in onboarding summary, document triage, exception triage and reconciliation support — always with human approval, evidence and role-limited context.",
};

const PRINCIPLES = [
  {
    title: "Human approval, always",
    text: "The assistant drafts, summarises and suggests. A person decides. Approvals for onboarding, payments and payouts always require a human with the right permission — that is a design rule, not a setting.",
    icon: "check" as const,
  },
  {
    title: "Evidence with every suggestion",
    text: "A suggestion carries its sources: the documents, records or events it drew on, linked so a reviewer can check them. A summary without traceable evidence is not a usable summary.",
    icon: "audit" as const,
  },
  {
    title: "Role-limited context",
    text: "The assistant can only see what the requesting user is already permitted to see. It cannot reach across roles, tenants or permissions to gather information a user could not open themselves.",
    icon: "shield" as const,
  },
  {
    title: "Recorded like any other action",
    text: "Assisted actions are written to the audit log with the suggestion, the evidence and the human decision — so a review can see what the assistant proposed and what the person did with it.",
    icon: "document" as const,
  },
];

const NEVER = [
  "Approve or reject a client application on its own",
  "Release, approve or reverse a payment without a human",
  "Change a commission, a payout or a ledger entry",
  "Access records the requesting user cannot open",
  "Decide a screening flag or a compliance outcome",
  "Send a message to a client without review",
];

const ROADMAP = [
  {
    stage: "Now",
    title: "Design",
    text: "Use cases, governance rules and evidence requirements are being defined — this page describes that design, not a shipped feature.",
  },
  {
    stage: "Next",
    title: "Sandbox evaluation",
    text: "Assisted workflows are evaluated against test data in a non-production environment, measuring accuracy against human reviewers.",
  },
  {
    stage: "Later",
    title: "Pilot",
    text: "A limited pilot with selected operations teams, where every suggestion is reviewed and every outcome is measured before anything widens.",
  },
  {
    stage: "After that",
    title: "General availability",
    text: "Wider release only after the pilot passes its review — with documentation, training and the same governance rules, unchanged.",
  },
];

export default function AiAssistancePage() {
  return (
    <>
      <PageHero
        href="/platform/ai-assistance"
        badge="In development — roadmap"
        eyebrow="Platform · Intelligence layer"
        title="Governed AI Assistance — In Development"
        copy="BridgeX is designing AI assistance the way it designs everything else: with a human in the loop, evidence behind every suggestion, and permissions that hold. This page describes what that assistance is intended to do — not what it does today, because it is not operational yet."
      />

      {/* Status panel — honest, prominent */}
      <Section tone="cream" ariaLabel="Current status">
        <div className="grid gap-8 border border-bx-gold-500/40 bg-bx-white p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="lg:col-span-5">
            <DemoLabel text="Status: In development" />
            <h2 className="mt-5 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink sm:text-3xl">
              Not live. Not promised for a date. Designed in the open.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-bx-muted">
              Governed AI assistance is a roadmap capability. The uses on this
              page are illustrative designs — scenarios showing how assistance
              would work inside the platform&apos;s existing rules. No AI agent
              is making decisions on BridgeX today, and no launch date is
              published: the work moves through design, sandbox evaluation and
              pilot, and each stage has to pass its own review before the next
              begins.
            </p>
            <p className="mt-4 text-base leading-relaxed text-bx-muted">
              Product updates will describe progress as it happens — see{" "}
              <Link href="/resources/product-updates" className="font-bold text-bx-maroon-700 hover:underline">
                Product Updates
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Illustrative uses */}
      <Section tone="ivory" id="uses" ariaLabel="Illustrative uses">
        <SectionIntro
          label="Illustrative uses"
          heading="Four places assistance would earn its keep."
          copy="Each scenario shows the same shape: the assistant gathers and drafts, a human checks and decides. The checkpoint is part of the design — not an afterthought bolted onto an autonomous agent."
        />
        <div className="mt-6">
          <DemoLabel text="Illustrative scenarios — not live features" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {AI_USES.map((use, i) => (
            <Reveal key={use.title} delay={(i % 2) * 0.08}>
              <article className="flex h-full flex-col border border-bx-gold-500/25 bg-bx-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Icon name={use.icon} size={28} className="text-bx-gold-600" />
                  <h3 className="font-sans text-xl font-extrabold leading-tight text-bx-ink">
                    {use.title}
                  </h3>
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-bx-muted">
                  {use.scenario}
                </p>
                <p className="mt-6 border-l-2 border-bx-gold-500 bg-bx-cream px-4 py-3 text-[15px] leading-relaxed text-bx-ink">
                  <span className="font-sans font-bold text-bx-maroon-700">
                    Human checkpoint:{" "}
                  </span>
                  {use.checkpoint}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Governance principles — dark */}
      <Section tone="maroon" id="governance" ariaLabel="Governance principles">
        <SectionIntro
          dark
          label="How it is governed"
          heading={
            <>
              Four rules the design{" "}
              <span className="font-display font-semibold italic text-bx-champagne">
                does not bend.
              </span>
            </>
          }
          copy="These principles are set before the first line of assistance is built — because governance added after a capability ships is governance that gets negotiated away."
        />
        <div className="mt-12 grid gap-px border border-bx-gold-500/25 bg-bx-gold-500/25 sm:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="bg-bx-maroon-900 p-6 sm:p-8">
              <Icon name={principle.icon} size={28} className="text-bx-gold-400" />
              <h3 className="mt-4 font-sans text-lg font-extrabold leading-tight text-bx-ivory">
                {principle.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bx-champagne/85">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What it will never do + roadmap */}
      <Section tone="white" ariaLabel="What AI assistance will never do">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionIntro
              label="Hard limits"
              heading="What AI assistance will never do."
              copy="Some lines are not use cases waiting for a better model. They are decisions that belong to people, and the design keeps them there."
            />
            <ul className="mt-8 space-y-3">
              {NEVER.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-ink">
                  <Icon name="close" size={20} className="mt-0.5 shrink-0 text-bx-maroon-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
              The road to launch
            </p>
            <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-bx-ink sm:text-4xl">
              Stages, not dates.
            </h2>
            <ol className="mt-8 space-y-0">
              {ROADMAP.map((stage, i) => (
                <li key={stage.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < ROADMAP.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[7px] top-5 h-full w-px bg-bx-gold-500/50"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rotate-45 border ${
                      i === 0
                        ? "border-bx-gold-600 bg-bx-gold-600"
                        : "border-bx-gold-600 bg-bx-white"
                    }`}
                  />
                  <div>
                    <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-gold-600">
                      {stage.stage}
                    </p>
                    <h3 className="mt-1 font-sans text-lg font-extrabold leading-tight text-bx-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-bx-muted">
                      {stage.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <FaqSection
        heading="AI assistance questions, answered plainly."
        copy="Availability, human approval, data access, evidence — and when it will launch."
        items={AI_FAQS}
        tone="cream"
      />

      <CtaBand
        heading="Talk to us about what assistance should do."
        copy="If your team spends its days summarising applications, triaging documents or chasing reconciliation breaks, we would like to hear about it. The roadmap is shaped by the work it needs to help with — tell us yours."
      />
    </>
  );
}
