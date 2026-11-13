/**
 * H03 — Seven capability tiles, each linking to its real solution route.
 *
 * Editorial asymmetric grid: Financial CRM leads as a wide tile; the rest
 * follow in a three-column rhythm, closed by a platform tile. Drawn line
 * icons (no tinted icon squares), tone-step surfaces, gold hairline on
 * hover. Every tile is one link — no dead CTAs.
 */
import Link from "next/link";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import Icon, { type IconName } from "../icons";

interface Capability {
  href: string;
  icon: IconName;
  title: string;
  benefit: string;
}

const CAPABILITIES: Capability[] = [
  {
    href: "/solutions/financial-crm",
    icon: "crm",
    title: "Financial CRM",
    benefit:
      "Every lead, contact and account in one record — with pipelines, cases and documents attached, not scattered across tools.",
  },
  {
    href: "/solutions/payment-orchestration",
    icon: "payments",
    title: "Payment Orchestration",
    benefit:
      "Route deposits and withdrawals across providers, retry intelligently after declines, reconcile automatically.",
  },
  {
    href: "/solutions/pamm-copy-trading",
    icon: "pamm",
    title: "PAMM & Copy Trading",
    benefit:
      "Strategies, subscriptions and fees on one engine — allocations, high-water marks and investor transparency built in.",
  },
  {
    href: "/solutions/ib-incentives",
    icon: "ib",
    title: "IB & Incentive Management",
    benefit:
      "Multi-tier partner programmes with a ledger you can defend: attribution, rebates, approvals and payouts.",
  },
  {
    href: "/solutions/tradeops",
    icon: "tradeops",
    title: "TradeOps Control Center",
    benefit:
      "Change leverage, groups and sessions across servers with dry-run, dual approval and a full audit trail.",
  },
  {
    href: "/solutions/digital-onboarding",
    icon: "onboarding",
    title: "Digital Onboarding & KYC",
    benefit:
      "Adaptive journeys for individuals and corporates — verification, screening and approval queues in one flow.",
  },
  {
    href: "/solutions/trading-contests",
    icon: "contests",
    title: "Trading Contest Management",
    benefit:
      "Run trading competitions with live rankings, fairness review and prize payouts your clients can trust.",
  },
];

function Tile({ cap }: { cap: Capability }) {
  return (
    <Link
      href={cap.href}
      className="group relative flex h-full flex-col bg-bx-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(35,11,22,0.35)] sm:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-bx-gold-500 transition-transform duration-300 group-hover:scale-x-100"
      />
      <span className="text-bx-maroon-700 transition-colors duration-200 group-hover:text-bx-gold-600">
        <Icon name={cap.icon} size={34} strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 font-sans text-xl font-bold leading-snug text-bx-ink sm:text-2xl">
        {cap.title}
      </h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-bx-muted">
        {cap.benefit}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-maroon-700 group-hover:text-bx-maroon-900">
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
    <Section tone="cream" ariaLabel="Capabilities">
      <SectionIntro
        label="What BridgeX does"
        heading={
          <>
            Seven capabilities.{" "}
            <span className="font-display font-semibold italic text-bx-maroon-700">
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
            className="group flex h-full flex-col bg-bx-maroon-900 p-7 text-bx-ivory transition-all duration-200 hover:-translate-y-0.5 hover:bg-bx-maroon-800 sm:p-8"
          >
            <span className="font-display text-[28px] font-semibold leading-snug">
              See how they connect.
            </span>
            <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-bx-champagne/85">
              Four layers, one shared foundation. The architecture that makes
              seven capabilities behave as one system.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-gold-400 group-hover:text-bx-champagne">
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
