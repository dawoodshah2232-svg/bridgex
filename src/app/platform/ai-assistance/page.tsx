/**
 * /platform/ai-assistance — BriX AI, governed AI assistance.
 *
 * White-label rework (16 Nov 2026): BriX AI is a LIVE product on
 * bridgexapps.com (Starter $49/mo, Growth $99, Scale $199, Scale Plus
 * $299 — verified 16 Nov 2026), so the old "In Development / roadmap"
 * framing is gone. The four uses below stay ILLUSTRATIVE scenarios —
 * onboarding summary, document triage, exception triage, reconciliation
 * support — with human approval, evidence and role-limited context
 * throughout. The governance principles and hard limits are unchanged:
 * the assistant drafts and suggests; a person decides.
 *
 * Dark photographic hero — abstract glass imagery only, never
 * binary-digit clichés. DARK HERO — "/platform/ai-assistance" is in
 * DARK_HERO_ROUTES.
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
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "BriX AI — Governed AI Assistance",
  description:
    "BriX AI is the AI layer of the BridgeX suite, available on bridgexapps.com from $49/month: governed assistance in onboarding summary, document triage, exception triage and reconciliation support — always with human approval, evidence and role-limited context.",
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

// BriX AI tiers as published on bridgexapps.com, November 2026.
const TIERS = [
  { name: "Starter", price: "$49", per: "per month" },
  { name: "Growth", price: "$99", per: "per month" },
  { name: "Scale", price: "$199", per: "per month" },
  { name: "Scale Plus", price: "$299", per: "per month" },
];

export default function AiAssistancePage() {
  return (
    <>
      <PageHero
        href="/platform/ai-assistance"
        dark
        badge="BriX AI · Available on BridgeX Apps"
        eyebrow="Platform · Intelligence layer"
        title="BriX AI — Governed AI Assistance"
        copy="BriX AI is the AI layer of the BridgeX suite, available on bridgexapps.com from $49 per month. It is governed the way BridgeX governs everything else: with a human in the loop, evidence behind every suggestion, and permissions that hold."
        image={{
          src: "/images/abstract-glass-ceiling.jpg",
          alt: "Hand pointing at a candlestick chart on a dark trading monitor",
          width: 1920,
          height: 1080,
        }}
      />

      {/* Availability panel — BriX AI is live on bridgexapps.com */}
      <Section tone="mint" ariaLabel="Availability">
        <div className="grid gap-8 border border-bx-teal-500/40 bg-bx-white rounded-2xl p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
          <div className="lg:col-span-5">
            <DemoLabel text="Available now on BridgeX Apps" />
            <h2 className="mt-5 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-3xl">
              BriX AI, governed from the first suggestion.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-bx-slate-500">
              BriX AI is the AI layer of the BridgeX suite, available on{" "}
              <a
                href="https://bridgexapps.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-bx-teal-700 hover:underline"
              >
                bridgexapps.com
              </a>{" "}
              from $49 per month. The four uses on this page are illustrative
              scenarios showing how governed assistance works inside the
              platform&apos;s existing rules — the assistant gathers and
              drafts, a human checks and decides. The checkpoint is part of
              the design, not an afterthought.
            </p>
            <p className="mt-4 text-base leading-relaxed text-bx-slate-500">
              See the tiers below, or the full breakdown on the{" "}
              <Link href="/pricing" className="font-bold text-bx-teal-700 hover:underline">
                Pricing page
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* Illustrative uses */}
      <Section tone="white" id="uses" ariaLabel="Illustrative uses">
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
              <article className="bx-card-hover group flex h-full flex-col border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Icon name={use.icon} size={28} className="text-bx-teal-600" />
                  <h3 className="font-sans text-xl font-extrabold leading-tight text-bx-navy-900">
                    {use.title}
                  </h3>
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-bx-slate-500">
                  {use.scenario}
                </p>
                <p className="mt-6 border-l-2 border-bx-teal-500 bg-bx-mint-50 px-4 py-3 text-[15px] leading-relaxed text-bx-navy-900">
                  <span className="font-sans font-bold text-bx-teal-700">
                    Human checkpoint:{" "}
                  </span>
                  {use.checkpoint}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Photographic interlude — governed, by design */}
      <PhotoBand
        image="/images/abstract-mirrored-tower.jpg"
        alt="Hand holding a phone with a rising chart in front of a laptop with trading screens and a coffee"
        eyebrow="BriX AI"
        heading={
          <>
            Governed,{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              by design.
            </span>
          </>
        }
        copy="BriX AI drafts, summarises and suggests — a person decides. Approvals for onboarding, payments and payouts always require a human with the right permission."
        height="sm"
        imageWidth={1600}
        imageHeight={2411}
      />

      {/* Governance principles — dark */}
      <Section tone="navy" id="governance" ariaLabel="Governance principles">
        <SectionIntro
          dark
          label="How it is governed"
          heading={
            <>
              Four rules the design{" "}
              <span className="font-sans font-semibold italic text-bx-teal-400">
                does not bend.
              </span>
            </>
          }
          copy="These principles are set before the first line of assistance is built — because governance added after a capability ships is governance that gets negotiated away."
        />
        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-px border border-bx-teal-500/25 bg-bx-teal-500/25 sm:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title} className="bx-card-tint-dark group bg-bx-navy-900 rounded-2xl p-6 sm:p-8">
              <Icon name={principle.icon} size={28} className="text-bx-teal-400" />
              <h3 className="mt-4 font-sans text-lg font-extrabold leading-tight text-bx-white">
                {principle.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-300/85">
                {principle.text}
              </p>
            </div>
          ))}
          </div>
        </Reveal>
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
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-navy-900">
                  <Icon name="close" size={20} className="mt-0.5 shrink-0 text-bx-teal-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-teal-700">
              BriX AI tiers
            </p>
            <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-bx-navy-900 sm:text-4xl">
              Priced by tier, as published.
            </h2>
            <ul className="mt-8 divide-y divide-bx-teal-500/25 border-y border-bx-teal-500/25">
              {TIERS.map((tier) => (
                <li key={tier.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
                    {tier.name}
                  </span>
                  <span className="font-sans text-lg font-bold text-bx-teal-700">
                    {tier.price}
                    <span className="ml-1 text-sm font-bold text-bx-slate-500">
                      {tier.per}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-bx-slate-500">
              Prices as published on bridgexapps.com, November 2026. See the{" "}
              <Link href="/pricing" className="font-bold text-bx-teal-700 hover:underline">
                Pricing page
              </Link>{" "}
              for the full breakdown alongside the Forex suite tiers.
            </p>
          </div>
        </div>
      </Section>

      <FaqSection
        heading="AI assistance questions, answered plainly."
        copy="Availability, human approval, data access, evidence — and pricing."
        items={AI_FAQS}
        tone="mint"
      />

      <CtaBand
        heading="See BriX AI on your own workflows."
        copy="Book a private demo and watch governed assistance work on onboarding summaries, document triage and reconciliation — with a human deciding at every checkpoint."
      />
    </>
  );
}
