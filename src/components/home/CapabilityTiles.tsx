/**
 * H03 — Seven capability tiles, each linking to its real solution route.
 *
 * Editorial asymmetric grid: Financial CRM leads as a wide tile; the rest
 * follow in a three-column rhythm, closed by a platform tile. Drawn line
 * icons (no tinted icon squares), tone-step surfaces, teal hairline on
 * hover. Every tile is one link — no dead CTAs.
 */
import Link from "next/link";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import Icon, { solutionIcon } from "../icons";

interface Capability {
  href: string;
  slug: string;
  title: string;
  benefit: string;
}

const CAPABILITIES: Capability[] = [
  {
    href: "/solutions/financial-crm",
    slug: "financial-crm",
    title: "Financial CRM",
    benefit:
      "Every lead, contact and account in one record — with pipelines, cases and documents attached, not scattered across tools.",
  },
  {
    href: "/solutions/payment-orchestration",
    slug: "payment-orchestration",
    title: "Payment Orchestration",
    benefit:
      "Route deposits and withdrawals across providers, retry intelligently after declines, reconcile automatically.",
  },
  {
    href: "/solutions/pamm-copy-trading",
    slug: "pamm-copy-trading",
    title: "PAMM & Copy Trading",
    benefit:
      "Strategies, subscriptions and fees on one engine — allocations, high-water marks and investor transparency built in.",
  },
  {
    href: "/solutions/ib-incentives",
    slug: "ib-incentives",
    title: "IB & Incentive Management",
    benefit:
      "Multi-tier partner programmes with a ledger you can defend: attribution, rebates, approvals and payouts.",
  },
  {
    href: "/solutions/tradeops",
    slug: "tradeops",
    title: "TradeOps Control Center",
    benefit:
      "Change leverage, groups and sessions across servers with dry-run, dual approval and a full audit trail.",
  },
  {
    href: "/solutions/digital-onboarding",
    slug: "digital-onboarding",
    title: "Digital Onboarding & KYC",
    benefit:
      "Adaptive journeys for individuals and corporates — verification, screening and approval queues in one flow.",
  },
  {
    href: "/solutions/trading-contests",
    slug: "trading-contests",
    title: "Trading Contest Management",
    benefit:
      "Run trading competitions with live rankings, fairness review and prize payouts your clients can trust.",
  },
];

function Tile({ cap }: { cap: Capability }) {
  return (
    <Link
      href={cap.href}
      className="bx-card-hover group relative flex h-full flex-col rounded-2xl border border-[#E5E7EB] bg-bx-white p-7 sm:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-bx-teal-500 transition-transform duration-300 group-hover:scale-x-100"
      />
      <span className="text-bx-teal-700 transition-colors duration-200 group-hover:text-bx-teal-600">
        <Icon name={solutionIcon(cap.slug)} size={34} strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 font-sans text-xl font-bold leading-snug text-bx-navy-900 sm:text-2xl">
        {cap.title}
      </h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-bx-slate-500">
        {cap.benefit}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-teal-700 group-hover:text-bx-navy-900">
        Explore {cap.title}
        <Icon
          name="arrowRight"
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

export default function CapabilityTiles() {
  return (
    <Section tone="mint" ariaLabel="Capabilities">
      <SectionIntro
        label="What BridgeX does"
        glow
        heading={
          <>
            Seven capabilities.{" "}
            <span className="font-sans font-semibold italic text-bx-teal-700">
              One connected core.
            </span>
          </>
        }
        copy="Choose the capabilities you need today, then connect more without rebuilding your workflow. Each one works alone; together they share one client record, one ledger, one audit trail."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <Reveal className="h-full sm:col-span-2 lg:col-span-2" delay={0}>
          <Tile cap={CAPABILITIES[0]} />
        </Reveal>
        {CAPABILITIES.slice(1).map((cap, i) => (
          <Reveal key={cap.href} className="h-full" delay={0.08 * ((i % 3) + 1)}>
            <Tile cap={cap} />
          </Reveal>
        ))}
        {/* Closing tile — the platform story */}
        <Reveal className="h-full" delay={0.16}>
          <Link
            href="/platform"
            className="bx-card-hover-dark group flex h-full flex-col bg-bx-navy-900 rounded-2xl p-7 text-bx-white hover:bg-bx-navy-800 sm:p-8"
          >
            <span className="font-sans text-[28px] font-semibold leading-snug">
              See how they connect.
            </span>
            <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-bx-slate-300/85">
              Four layers, one shared foundation. The architecture that makes
              seven capabilities behave as one system.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-teal-400 group-hover:text-bx-slate-300">
              Explore the platform
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
