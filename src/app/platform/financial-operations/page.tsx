/**
 * /platform/financial-operations — Financial Operations (spec §8).
 * Dark photographic hero, the interactive lifecycle stepper
 * (Onboard → Open → Fund → Serve → Settle), wallets & payments, and a
 * dark approvals panel.
 *
 * DARK HERO — the coordinator adds "/platform/financial-operations" to
 * DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { FINANCIAL_OPERATIONS_FAQS } from "@/content/platform";
import PageHero from "@/components/platform/PageHero";
import OpsLifecycle from "@/components/platform/OpsLifecycle";
import { FaqSection } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import DemoLabel from "@/components/ui/DemoLabel";
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Financial Operations — Accounts, Wallets, Payments & Approvals",
  description:
    "The customer and account lifecycle, wallets and payments, service cases, incentives and approvals — one queue, one record, one audit trail.",
};

const WALLET_ROWS = [
  { label: "Deposit — card", value: "+ 5,000.00 USD", status: "Settled" },
  { label: "Withdrawal — bank", value: "− 1,250.00 USD", status: "Awaiting approval" },
  { label: "Internal transfer", value: "2,000.00 USD", status: "Completed" },
  { label: "Deposit — bank", value: "+ 10,000.00 USD", status: "Reconciling" },
];

const MONEY_POINTS = [
  {
    title: "One queue for money",
    text: "Deposits, withdrawals and internal transfers arrive in a single queue with their payment method, amount and client context — not scattered across provider dashboards.",
    icon: "payments" as const,
  },
  {
    title: "Routing with rules, not habits",
    text: "Which provider path a payment takes is a configured rule — by country, currency, amount or client profile — so routing is consistent, reviewable and changeable in one place.",
    icon: "exchanges" as const,
  },
  {
    title: "Reconciliation as a habit",
    text: "Provider events are matched against the ledger and the platform's own requests continuously. A break becomes an exception with the records attached — not a month-end investigation.",
    icon: "audit" as const,
  },
];

const APPROVAL_POINTS = [
  {
    title: "Maker-checker on money",
    text: "High-impact actions — releasing a large withdrawal, adjusting a commission, changing a payout — can require a second person to approve. Maker and checker are never the same account.",
  },
  {
    title: "Thresholds, not judgement calls",
    text: "Approval rules are configured by amount, client segment or case type, so the same request gets the same treatment whoever is on shift.",
  },
  {
    title: "Every decision, recorded",
    text: "Approvals and rejections carry the approver, the time and the reason — written to the audit log and to the record itself.",
  },
  {
    title: "Escalation with a clock",
    text: "A request that waits too long escalates on its own. Service targets are configured, measured and visible — not hoped for.",
  },
];

export default function FinancialOperationsPage() {
  return (
    <>
      <PageHero
        href="/platform/financial-operations"
        dark
        eyebrow="Platform · Operations layer"
        title={
          <>
            The work of the business,{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              in one queue.
            </span>
          </>
        }
        copy="Onboarding, accounts, wallets, payments, cases, incentives and approvals — the daily work of a financial business, run from one record with one audit trail. Nobody reconstructs a case from three systems before answering it."
        image={{
          src: "/images/compliance-review.jpg",
          alt: "Professional reviewing documents at a desk",
          width: 1600,
          height: 1200,
        }}
      />

      {/* Lifecycle — interactive stepper */}
      <Section tone="mint" id="lifecycle" ariaLabel="Account lifecycle">
        <SectionIntro
          label="The lifecycle"
          heading="Five stages. One record, carried through all of them."
          copy="A client moves through the same record from first application to settled payout. Select a stage to see what happens there — and notice what never happens: re-keying, re-verifying, or starting over."
        />
        <div className="mt-12">
          <OpsLifecycle />
        </div>
      </Section>

      {/* Wallets & payments */}
      <Section tone="white" id="payments" ariaLabel="Wallets and payments">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionIntro
              label="Wallets & payments"
              heading="Money moves through rules — and leaves a trail."
              copy="Every funding request, every routing decision and every reconciliation match is a record: visible, reviewable and explainable. That is what makes the money side of the business operable instead of merely busy."
            />
            <div className="mt-10 space-y-8">
              {MONEY_POINTS.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <Icon name={point.icon} size={26} className="mt-0.5 shrink-0 text-bx-teal-600" />
                    <div>
                      <h3 className="font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-bx-slate-500">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="mt-10">
              <p className="max-w-[62ch] text-base leading-relaxed text-bx-slate-500">
                Routing, cascading retry and provider failover are described in
                detail on the{" "}
                <Link href="/solutions/payment-orchestration" className="font-bold text-bx-teal-700 hover:underline">
                  payment orchestration
                </Link>{" "}
                page. BridgeX never stores raw card data — collection uses
                provider-hosted flows.
              </p>
            </Reveal>
          </div>

          {/* Illustrative wallet ledger */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-teal-700">
                  Wallet activity — sample
                </p>
                <DemoLabel text="Illustrative data" />
              </div>
              <ul className="mt-5 divide-y divide-bx-teal-500/20">
                {WALLET_ROWS.map((row) => (
                  <li key={row.label} className="py-3.5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[15px] font-bold text-bx-navy-900">{row.label}</span>
                      <span className="font-sans text-[15px] font-bold text-bx-navy-900">
                        {row.value}
                      </span>
                    </div>
                    <span className="mt-1 inline-block text-sm text-bx-slate-500">{row.status}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-bx-teal-500/20 pt-4 text-sm leading-relaxed text-bx-slate-500">
                Fictional entries shown to illustrate the ledger layout. Real
                entries link to their payment request, provider event and
                reconciliation match.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Photographic interlude — the operations floor */}
      <PhotoBand
        image="/images/trading-floor-desk.jpg"
        alt="Hands over a trading desk with laptops showing charts"
        eyebrow="The lifecycle"
        heading={
          <>
            One queue, one record,{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              one audit trail.
            </span>
          </>
        }
        copy="From first application to settled payout, the same record carries the client through every stage — no re-keying, no re-verifying, no starting over."
        height="sm"
        imageWidth={1920}
        imageHeight={1280}
      />

      {/* Service cases + incentives — split editorial */}
      <Section tone="white" ariaLabel="Service cases and incentives">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-teal-700">
              Service cases
            </p>
            <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-bx-navy-900 sm:text-4xl">
              Cases arrive with the answers half-attached.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-bx-slate-500">
              A case opens with the client&apos;s accounts, payments, documents
              and history already linked — so the agent starts by helping, not
              by investigating. Assignment and escalation follow configured
              rules by case type, and the client can follow the case&apos;s
              status in their own room.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Full client context attached to every case",
                "Document requests and uploads inside the case",
                "Escalation rules by type, age and value",
                "Client-visible status, so fewer cases chase their own update",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-navy-900">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-teal-700">
              Incentives
            </p>
            <h2 className="mt-4 font-sans text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-bx-navy-900 sm:text-4xl">
              Commissions a partner can audit — and so can you.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-bx-slate-500">
              Partner earnings are calculated from configured program rules and
              held as ledger entries: earned, adjusted, approved, settled. Each
              entry traces to its source event and its rule — so when a partner
              asks why, the ledger answers, and when finance closes the month,
              the numbers are already reconciled.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Rebate, CPA, volume and performance programs as rules",
                "Earn, adjust, approve and settle as distinct states",
                "Clawbacks recorded, never silently edited",
                "Partner statements generated from the ledger",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-navy-900">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-bx-slate-500">
              Full detail:{" "}
              <Link href="/solutions/ib-incentives" className="font-bold text-bx-teal-700 hover:underline">
                IB &amp; Incentive Management
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Approvals — dark */}
      <Section tone="navy" id="approvals" ariaLabel="Approvals and maker-checker controls">
        <SectionIntro
          dark
          label="Approvals"
          heading={
            <>
              Nothing material moves{" "}
              <span className="font-sans font-semibold italic text-bx-teal-400">
                on one person’s say-so.
              </span>
            </>
          }
          copy="Approvals are not a formality in BridgeX — they are the mechanism by which the business proves, afterwards, that the right person released the right amount for the right reason."
        />
        <div className="mt-12 grid gap-px border border-bx-teal-500/25 bg-bx-teal-500/25 sm:grid-cols-2">
          {APPROVAL_POINTS.map((point) => (
            <div key={point.title} className="bg-bx-navy-900 rounded-2xl p-6 sm:p-8">
              <h3 className="font-sans text-lg font-extrabold leading-tight text-bx-white">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-300/85">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <FaqSection
        heading="Operations questions, answered plainly."
        copy="Approvals, reconciliation, escalation, commissions and card data — the questions finance and compliance ask first."
        items={FINANCIAL_OPERATIONS_FAQS}
        tone="mint"
      />

      <CtaBand
        heading="Run your operations through it — in a demo."
        copy="Bring a real workflow: a withdrawal, a case, a commission question. A private demo runs it through the platform so you can see the queue, the approval and the audit trail, not a slide about them."
      />
    </>
  );
}
