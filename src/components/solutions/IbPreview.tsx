/**
 * IbPreview — interactive IB & Incentive Management preview (spec S4).
 * A partner hierarchy tree and a commission ledger with status filters.
 * Every partner name and figure is fictional and labelled as such.
 */
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import DemoLabel from "@/components/ui/DemoLabel";
import Icon from "@/components/icons";
import TabList from "./TabList";

interface PartnerNode {
  name: string;
  tier: string;
  volume: string;
  partners: number;
  children?: PartnerNode[];
}

const HIERARCHY: PartnerNode = {
  name: "Meridian Partners",
  tier: "Master IB · Tier 1",
  volume: "1,240 lots",
  partners: 12,
  children: [
    {
      name: "Northgate IB",
      tier: "Sub-IB · Tier 2",
      volume: "860 lots",
      partners: 5,
      children: [
        { name: "Atlas Affiliates", tier: "Affiliate · Tier 3", volume: "512 lots", partners: 0 },
        { name: "Coral Trading Group", tier: "Affiliate · Tier 3", volume: "388 lots", partners: 0 },
      ],
    },
    {
      name: "Harborline Partners",
      tier: "Sub-IB · Tier 2",
      volume: "640 lots",
      partners: 3,
      children: [
        { name: "Beacon Referrals", tier: "Affiliate · Tier 3", volume: "205 lots", partners: 0 },
      ],
    },
    { name: "Summit Introducers", tier: "Sub-IB · Tier 2", volume: "431 lots", partners: 0 },
  ],
};

function countNodes(node: PartnerNode): number {
  return 1 + (node.children ?? []).reduce((n, c) => n + countNodes(c), 0);
}

function TreeNode({
  node,
  depth,
  selected,
  onSelect,
}: {
  node: PartnerNode;
  depth: number;
  selected: string;
  onSelect: (name: string) => void;
}) {
  const isSelected = selected === node.name;
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(node.name)}
        aria-pressed={isSelected}
        className={`flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-1 border px-4 py-3 text-left transition-colors duration-150 ${
          isSelected
            ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
            : "border-bx-gold-500/30 bg-bx-white text-bx-ink hover:border-bx-maroon-700"
        }`}
      >
        <span>
          <span className="block font-sans text-[15px] font-bold">{node.name}</span>
          <span className={`block text-[13px] ${isSelected ? "text-bx-champagne/80" : "text-bx-muted"}`}>
            {node.tier}
          </span>
        </span>
        <span className="text-right text-sm tabular-nums">
          <span className="block font-bold">{node.volume}</span>
          <span className={`block text-[13px] ${isSelected ? "text-bx-champagne/80" : "text-bx-muted"}`}>
            {node.partners === 0 ? "No sub-partners" : `${node.partners} sub-partners`}
          </span>
        </span>
      </button>
      {node.children && node.children.length > 0 && (
        <ul className="mt-2 space-y-2 border-l-2 border-bx-gold-500/40 pl-4 sm:pl-6">
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} depth={depth + 1} selected={selected} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
}

function findNode(node: PartnerNode, name: string): PartnerNode | null {
  if (node.name === name) return node;
  for (const child of node.children ?? []) {
    const found = findNode(child, name);
    if (found) return found;
  }
  return null;
}

function HierarchyPanel() {
  const [selected, setSelected] = useState("Meridian Partners");
  const node = findNode(HIERARCHY, selected) ?? HIERARCHY;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-ink">Partner hierarchy</h3>
        <DemoLabel text="Illustrative data — fictional partners" />
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-bx-muted">
        {countNodes(HIERARCHY)} partners across three tiers. Select any partner
        to see their position in the network.
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <ul className="space-y-2">
          <TreeNode node={HIERARCHY} depth={0} selected={selected} onSelect={setSelected} />
        </ul>
        <div className="h-fit border border-bx-gold-500/30 bg-bx-white px-5 py-6" aria-live="polite">
          <h4 className="font-sans text-lg font-extrabold text-bx-ink">{node.name}</h4>
          <p className="mt-0.5 text-sm text-bx-muted">{node.tier}</p>
          <dl className="mt-5 space-y-4">
            {[
              ["Referred volume (Mar 2026)", node.volume],
              ["Direct sub-partners", node.partners === 0 ? "None" : String(node.partners)],
              ["Attribution rule", "First touch — referral link"],
              ["Program", "Volume rebate · Tier rates apply"],
            ].map(([term, value]) => (
              <div key={term} className="border-b border-bx-gold-500/15 pb-3 last:border-b-0 last:pb-0">
                <dt className="text-[12px] font-sans font-bold uppercase tracking-[0.14em] text-bx-muted">{term}</dt>
                <dd className="mt-1 text-[15px] font-bold text-bx-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-bx-muted">
            <Icon name="audit" size={18} className="mt-0.5 shrink-0 text-bx-gold-600" />
            Overrides are computed from this structure — a Tier 1 partner earns
            on their own volume and on their downline, per the program rules.
          </p>
        </div>
      </div>
    </div>
  );
}

type LedgerStatus = "Earned" | "Approved" | "Settled" | "Adjusted";

interface LedgerRow {
  partner: string;
  period: string;
  model: string;
  volume: number;
  commission: number;
  status: LedgerStatus;
  source: string;
}

const LEDGER: LedgerRow[] = [
  { partner: "Meridian Partners", period: "Mar 2026", model: "Volume rebate", volume: 1240, commission: 8410, status: "Approved", source: "312 trades · Tier 1 + overrides" },
  { partner: "Northgate IB", period: "Mar 2026", model: "Volume rebate", volume: 860, commission: 5980, status: "Approved", source: "204 trades · Tier 2" },
  { partner: "Atlas Affiliates", period: "Mar 2026", model: "CPA + volume", volume: 512, commission: 3204, status: "Earned", source: "18 new clients · 96 trades" },
  { partner: "Coral Trading Group", period: "Feb 2026", model: "Volume rebate", volume: 1905, commission: 12760, status: "Settled", source: "441 trades · Tier 3" },
  { partner: "Harborline Partners", period: "Mar 2026", model: "Volume rebate", volume: 640, commission: 4320, status: "Adjusted", source: "Clawback −$180 · duplicate attribution corrected" },
  { partner: "Beacon Referrals", period: "Mar 2026", model: "CPA", volume: 205, commission: 2100, status: "Earned", source: "7 new clients" },
  { partner: "Summit Introducers", period: "Feb 2026", model: "Performance", volume: 431, commission: 2890, status: "Settled", source: "Quarterly performance bonus" },
];

const LEDGER_STATUSES: ("All" | LedgerStatus)[] = ["All", "Earned", "Approved", "Settled", "Adjusted"];

const STATUS_STYLE: Record<LedgerStatus, string> = {
  Earned: "border-bx-gold-600/60 text-bx-maroon-700",
  Approved: "border-bx-maroon-700 bg-bx-maroon-700/10 text-bx-maroon-700",
  Settled: "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory",
  Adjusted: "border-bx-maroon-800/60 text-bx-maroon-800",
};

function LedgerPanel() {
  const [status, setStatus] = useState<"All" | LedgerStatus>("All");
  const filtered = useMemo(
    () => LEDGER.filter((r) => status === "All" || r.status === status),
    [status],
  );
  const total = filtered.reduce((sum, r) => sum + r.commission, 0);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-ink">Commission ledger</h3>
        <DemoLabel text="Illustrative data — fictional ledger" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter ledger by status">
        {LEDGER_STATUSES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            aria-pressed={status === s}
            className={`min-h-[40px] border px-3.5 font-sans text-sm font-bold transition-colors duration-150 ${
              status === s
                ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                : "border-bx-gold-500/40 bg-bx-white text-bx-maroon-700 hover:border-bx-maroon-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div
        className="mt-5 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Ledger table — scroll sideways to see all columns"
      >
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-bx-gold-500/40 text-[12px] font-sans uppercase tracking-[0.14em] text-bx-muted">
              <th scope="col" className="py-3 pr-4 font-bold">Partner</th>
              <th scope="col" className="py-3 pr-4 font-bold">Period</th>
              <th scope="col" className="py-3 pr-4 font-bold">Model</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Volume (lots)</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Commission</th>
              <th scope="col" className="py-3 pr-4 font-bold">Status</th>
              <th scope="col" className="py-3 font-bold">Source</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={`${row.partner}-${row.period}`} className="border-b border-bx-gold-500/15 align-top">
                <td className="py-3.5 pr-4 text-sm font-bold text-bx-ink">{row.partner}</td>
                <td className="py-3.5 pr-4 text-sm tabular-nums text-bx-muted">{row.period}</td>
                <td className="py-3.5 pr-4 text-sm text-bx-muted">{row.model}</td>
                <td className="py-3.5 pr-4 text-right text-sm tabular-nums text-bx-ink">{row.volume.toLocaleString("en-US")}</td>
                <td className="py-3.5 pr-4 text-right text-sm font-bold tabular-nums text-bx-ink">
                  ${row.commission.toLocaleString("en-US")}
                </td>
                <td className="py-3.5 pr-4">
                  <span className={`inline-flex whitespace-nowrap border px-2.5 py-1 text-[12px] font-bold ${STATUS_STYLE[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3.5 text-sm leading-snug text-bx-muted">{row.source}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-bx-maroon-800">
              <td colSpan={4} className="py-4 pr-4 font-sans text-sm font-bold text-bx-ink">
                Total shown ({filtered.length} {filtered.length === 1 ? "entry" : "entries"})
              </td>
              <td className="py-4 pr-4 text-right font-sans text-base font-extrabold tabular-nums text-bx-maroon-700">
                ${total.toLocaleString("en-US")}
              </td>
              <td colSpan={2} />
            </tr>
          </tfoot>
        </table>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bx-muted">
        Every entry traces to its source trades — attribution, tier and
        adjustments included. The adjusted Harborline entry shows a clawback
        recorded as a ledger event, not a quiet edit.
      </p>
    </div>
  );
}

const TABS = [
  { id: "hierarchy", label: "Hierarchy", hint: "Multi-tier partner network" },
  { id: "ledger", label: "Commission ledger", hint: "Earn · adjust · approve · settle" },
];

export default function IbPreview() {
  const [active, setActive] = useState("hierarchy");
  const reduceMotion = useReducedMotion();

  return (
    <div className="border border-bx-gold-500/30 bg-bx-ivory">
      <TabList tabs={TABS} activeId={active} onSelect={setActive} prefix="ib" ariaLabel="IB preview" />
      <div className="bg-bx-cream/60 px-5 py-8 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`ib-panel-${active}`}
            aria-labelledby={`ib-tab-${active}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === "hierarchy" && <HierarchyPanel />}
            {active === "ledger" && <LedgerPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
