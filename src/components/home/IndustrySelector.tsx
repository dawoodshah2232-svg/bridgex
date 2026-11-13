/**
 * H07 — Industries: interactive 9-industry selector with deep links.
 * Left: industry list. Right: detail panel with industry-specific
 * challenges and a link to the industry page. Panel transitions with a
 * short fade/slide; on mobile the list becomes a two-column grid above
 * the panel.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Icon, { type IconName } from "../icons";
import { onTabListKeyDown } from "../platform/tabs";

interface Industry {
  href: string;
  icon: IconName;
  label: string;
  description: string;
  challenges: string[];
}

const INDUSTRIES: Industry[] = [
  {
    href: "/industries/multi-asset-brokers",
    icon: "brokers",
    label: "Multi-Asset Brokers",
    description:
      "The full trader lifecycle — onboarding, client area, partner commissions, deposits and risk operations — on one connected core.",
    challenges: [
      "Onboarding that keeps pace with campaign traffic",
      "Partner commissions that reconcile to the trade feed",
      "Deposits, withdrawals and risk in one operational view",
    ],
  },
  {
    href: "/industries/banks",
    icon: "banks",
    label: "Banks",
    description:
      "Bank-branded trading journeys for existing clients, with branch and relationship-manager coordination and compliance-grade permissions.",
    challenges: [
      "Trading journeys that carry the bank's brand and controls",
      "Branch and relationship-manager coordination",
      "Permissions that match how the bank already governs",
    ],
  },
  {
    href: "/industries/securities-derivatives",
    icon: "securities",
    label: "Securities & Derivatives",
    description:
      "Institutional and corporate account relationships, multi-entity CRM, controls and payment workflows — built for complexity.",
    challenges: [
      "Multi-entity relationships with many roles per contact",
      "Controls that survive an audit without a scramble",
      "Payment workflows across entities and currencies",
    ],
  },
  {
    href: "/industries/wealth-management",
    icon: "wealth",
    label: "Wealth Management",
    description:
      "Advisor workspaces, suitability evidence, pooled strategies, investor statements and introducer fees — connected, not bolted on.",
    challenges: [
      "Suitability evidence attached to every recommendation",
      "Investor statements that reconcile to the ledger",
      "Introducer fees without the monthly spreadsheet",
    ],
  },
  {
    href: "/industries/asset-fund-managers",
    icon: "assetFund",
    label: "Asset & Fund Managers",
    description:
      "Subscription workflows, an investor portal, capital calls and payouts, and distributor trail fees — handled as one flow.",
    challenges: [
      "Subscription workflows that don't stall on paperwork",
      "An investor portal that answers before the phone rings",
      "Distributor trail fees calculated, not estimated",
    ],
  },
  {
    href: "/industries/exchanges",
    icon: "exchanges",
    label: "Exchanges & Trading Venues",
    description:
      "Membership onboarding, participant service, fee schedules, registration and conformance workflows — for venues and their members.",
    challenges: [
      "Membership onboarding with conformance built in",
      "Fee schedules applied consistently, every time",
      "Participant service with a complete case history",
    ],
  },
  {
    href: "/industries/bonds-fixed-income",
    icon: "bonds",
    label: "Bonds & Fixed Income",
    description:
      "Onboarding and suitability for fixed-income clients, order and allocation visibility, and coupon and corporate-action service flows.",
    challenges: [
      "Suitability for instruments clients don't trade every day",
      "Allocation visibility from order to settlement",
      "Coupon and corporate-action service without the chase",
    ],
  },
  {
    href: "/industries/prop-firms",
    icon: "prop",
    label: "Prop Trading Firms",
    description:
      "Challenge lifecycles, affiliates, trading contests, profit-share workflows and risk compliance — the prop model, end to end.",
    challenges: [
      "Challenge lifecycles from signup to funded account",
      "Affiliates and contests on one incentive ledger",
      "Profit-share payouts with a clear audit trail",
    ],
  },
  {
    href: "/industries/digital-assets",
    icon: "digitalAssets",
    label: "Digital Asset Firms",
    description:
      "KYC, fiat on/off ramp concepts, CRM support, ambassador referrals and multi-jurisdiction review — for digital-asset businesses.",
    challenges: [
      "KYC that adapts by jurisdiction and product",
      "Fiat on/off ramp journeys that stay reviewable",
      "Ambassador referrals with attribution you can defend",
    ],
  },
];

export default function IndustrySelector() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const industry = INDUSTRIES[selected];

  return (
    <Section tone="ivory" ariaLabel="Industries">
      <SectionIntro
        label="Who BridgeX is for"
        heading={
          <>
            One core,{" "}
            <span className="font-display font-semibold italic text-bx-maroon-700">
              nine industries.
            </span>
          </>
        }
        copy="The same connected core, shaped around how each kind of financial business actually operates. Select an industry to see its challenges — and how BridgeX answers them."
      />

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
        {/* Industry list */}
        <div
          role="tablist"
          aria-label="Industries"
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
        >
          {INDUSTRIES.map((ind, i) => {
            const isSelected = i === selected;
            return (
              <button
                key={ind.href}
                id={`industry-tab-${i}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls="industry-panel"
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) =>
                  onTabListKeyDown(e, i, INDUSTRIES.length, "industry-tab", setSelected)
                }
                className={`flex min-h-[56px] items-center gap-4 border px-5 py-3 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                    : "border-bx-gold-500/30 bg-transparent text-bx-ink hover:border-bx-maroon-700 hover:bg-bx-cream"
                }`}
              >
                <span className={isSelected ? "text-bx-gold-400" : "text-bx-maroon-700"}>
                  <Icon name={ind.icon} size={24} />
                </span>
                <span className="flex-1 font-sans text-[15px] font-bold sm:text-base">
                  {ind.label}
                </span>
                <Icon
                  name="chevronRight"
                  size={18}
                  className={isSelected ? "text-bx-gold-400" : "text-bx-gold-600"}
                />
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={industry.href}
              id="industry-panel"
              role="tabpanel"
              aria-labelledby={`industry-tab-${selected}`}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col border border-bx-gold-500/30 bg-bx-white p-7 sm:p-9"
            >
              <span className="text-bx-maroon-700">
                <Icon name={industry.icon} size={36} strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-sans text-2xl font-bold text-bx-ink sm:text-[28px]">
                {industry.label}
              </h3>
              <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-bx-muted">
                {industry.description}
              </p>
              <p className="mt-7 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-bx-maroon-700">
                Common challenges
              </p>
              <ul className="mt-4 space-y-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-bx-ink">
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-2 w-2 shrink-0 rotate-45 bg-bx-gold-500"
                    />
                    {c}
                  </li>
                ))}
              </ul>
              <Link
                href={industry.href}
                className="group mt-8 inline-flex items-center gap-2 self-start font-sans text-base font-bold text-bx-maroon-700 hover:text-bx-maroon-900"
              >
                Explore {industry.label}
                <Icon
                  name="arrowRight"
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
