/**
 * PammPreview — interactive PAMM & Copy Trading preview (spec S3).
 * Strategy discovery with filters and a performance detail view, plus a
 * high-water-mark fee calculator that shows its working. All strategies,
 * figures and curves are illustrative — the engines are in development.
 */
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import DemoLabel from "@/components/ui/DemoLabel";
import Icon from "@/components/icons";
import TabList from "./TabList";

type Risk = "Conservative" | "Balanced" | "Aggressive";

interface Strategy {
  name: string;
  manager: string;
  risk: Risk;
  returnPct: number;
  drawdownPct: number;
  investors: number;
  minInvestment: number;
  perfFee: number;
  mgmtFee: number;
  /** Illustrative equity curve, 12 monthly points, indexed to 100. */
  curve: number[];
}

const STRATEGIES: Strategy[] = [
  { name: "Aurora FX Core", manager: "H. Lindqvist", risk: "Conservative", returnPct: 6.8, drawdownPct: 3.1, investors: 214, minInvestment: 1000, perfFee: 20, mgmtFee: 1, curve: [100, 101, 101.5, 102, 101.2, 102.4, 103, 103.8, 104.1, 105, 105.9, 106.8] },
  { name: "Meridian Momentum", manager: "D. Osei", risk: "Balanced", returnPct: 12.4, drawdownPct: 7.8, investors: 486, minInvestment: 500, perfFee: 25, mgmtFee: 1.5, curve: [100, 102, 101, 104, 103, 106, 104.5, 108, 107, 110, 109, 112.4] },
  { name: "Northgate Gold Trend", manager: "S. Ferreira", risk: "Balanced", returnPct: 10.1, drawdownPct: 6.4, investors: 329, minInvestment: 1000, perfFee: 20, mgmtFee: 1, curve: [100, 99, 101.5, 103, 102, 105, 106.5, 105, 108, 107.5, 109.2, 110.1] },
  { name: "Vantage Breakout", manager: "K. Tanaka", risk: "Aggressive", returnPct: 21.6, drawdownPct: 16.2, investors: 158, minInvestment: 2500, perfFee: 30, mgmtFee: 2, curve: [100, 104, 101, 107, 103, 112, 106, 116, 110, 119, 114, 121.6] },
  { name: "Atlas Income", manager: "M. Haddad", risk: "Conservative", returnPct: 4.8, drawdownPct: 2.2, investors: 402, minInvestment: 500, perfFee: 15, mgmtFee: 1, curve: [100, 100.6, 101, 101.4, 101.8, 102.1, 102.6, 103, 103.4, 103.9, 104.3, 104.8] },
  { name: "Coral Volatility", manager: "A. Novak", risk: "Aggressive", returnPct: 16.9, drawdownPct: 14.9, investors: 97, minInvestment: 5000, perfFee: 30, mgmtFee: 2, curve: [100, 97, 103, 100, 108, 104, 112, 107, 115, 110, 118, 116.9] },
];

const RISKS: ("All" | Risk)[] = ["All", "Conservative", "Balanced", "Aggressive"];

function EquityCurve({ strategy }: { strategy: Strategy }) {
  const w = 560;
  const h = 180;
  const pad = 8;
  const min = Math.min(...strategy.curve) - 1;
  const max = Math.max(...strategy.curve) + 1;
  const x = (i: number) => pad + (i / (strategy.curve.length - 1)) * (w - pad * 2);
  const y = (v: number) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  const points = strategy.curve.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const hwm = Math.max(...strategy.curve);
  return (
    <figure>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full"
        role="img"
        aria-label={`Illustrative equity curve for ${strategy.name}, indexed to 100, ending at ${strategy.curve[strategy.curve.length - 1].toFixed(1)}`}
      >
        <line x1={pad} y1={y(hwm)} x2={w - pad} y2={y(hwm)} stroke="#A77A2F" strokeWidth="1" strokeDasharray="4 4" />
        <polyline points={points} fill="none" stroke="#52182E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx={x(strategy.curve.length - 1)} cy={y(strategy.curve[strategy.curve.length - 1])} r="4" fill="#C29A55" stroke="#360F20" strokeWidth="1.5" />
      </svg>
      <figcaption className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-bx-muted">
        <span><span aria-hidden="true" className="mr-1.5 inline-block h-[2px] w-5 bg-bx-maroon-800 align-middle" />Illustrative equity, indexed to 100</span>
        <span><span aria-hidden="true" className="mr-1.5 inline-block h-0 w-5 border-t-2 border-dashed border-bx-gold-600 align-middle" />High-water mark</span>
      </figcaption>
    </figure>
  );
}

function StrategiesPanel() {
  const [risk, setRisk] = useState<"All" | Risk>("All");
  const [maxMin, setMaxMin] = useState(5000);
  const [selected, setSelected] = useState<Strategy>(STRATEGIES[1]);

  const filtered = useMemo(
    () =>
      STRATEGIES.filter(
        (s) => (risk === "All" || s.risk === risk) && s.minInvestment <= maxMin,
      ),
    [risk, maxMin],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-ink">Strategy discovery</h3>
        <DemoLabel text="Illustrative data — fictional strategies" />
      </div>
      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by risk profile">
          {RISKS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRisk(r)}
              aria-pressed={risk === r}
              className={`min-h-[40px] border px-3.5 font-sans text-sm font-bold transition-colors duration-150 ${
                risk === r
                  ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                  : "border-bx-gold-500/40 bg-bx-white text-bx-maroon-700 hover:border-bx-maroon-700"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 font-sans text-sm font-bold text-bx-ink">
          Min. investment up to
          <select
            value={maxMin}
            onChange={(e) => setMaxMin(Number(e.target.value))}
            className="min-h-[44px] border border-bx-gold-500/40 bg-bx-white px-3 text-[15px]"
          >
            <option value={500}>$500</option>
            <option value={1000}>$1,000</option>
            <option value={2500}>$2,500</option>
            <option value={5000}>$5,000</option>
          </select>
        </label>
      </div>

      <div
        className="mt-5 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Strategies table — scroll sideways to see all columns"
      >
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-bx-gold-500/40 text-[12px] font-sans uppercase tracking-[0.14em] text-bx-muted">
              <th scope="col" className="py-3 pr-4 font-bold">Strategy</th>
              <th scope="col" className="py-3 pr-4 font-bold">Risk</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Return</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Max drawdown</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Investors</th>
              <th scope="col" className="py-3 text-right font-bold">Min.</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr
                key={s.name}
                onClick={() => setSelected(s)}
                className={`cursor-pointer border-b border-bx-gold-500/15 transition-colors hover:bg-bx-gold-500/10 ${
                  selected.name === s.name ? "bg-bx-gold-500/10" : ""
                }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(s);
                  }
                }}
                aria-label={`View ${s.name} performance`}
              >
                <td className="py-3.5 pr-4">
                  <span className="block text-sm font-bold text-bx-ink">{s.name}</span>
                  <span className="block text-[13px] text-bx-muted">Managed by {s.manager}</span>
                </td>
                <td className="py-3.5 pr-4 text-sm text-bx-muted">{s.risk}</td>
                <td className="py-3.5 pr-4 text-right text-sm font-bold tabular-nums text-bx-ink">
                  +{s.returnPct.toFixed(1)}%
                </td>
                <td className="py-3.5 pr-4 text-right text-sm tabular-nums text-bx-muted">
                  −{s.drawdownPct.toFixed(1)}%
                </td>
                <td className="py-3.5 pr-4 text-right text-sm tabular-nums text-bx-muted">{s.investors}</td>
                <td className="py-3.5 text-right text-sm tabular-nums text-bx-muted">
                  ${s.minInvestment.toLocaleString("en-US")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-bx-muted" role="status">
            No strategies match those filters. Widen the risk or minimum.
          </p>
        )}
      </div>

      <div className="mt-6 border border-bx-gold-500/30 bg-bx-white px-5 py-6 sm:px-6" aria-live="polite">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h4 className="font-sans text-lg font-extrabold text-bx-ink">{selected.name}</h4>
          <p className="text-sm text-bx-muted">
            Performance fee {selected.perfFee}% · Management fee {selected.mgmtFee}% p.a.
          </p>
        </div>
        <div className="mt-4">
          <EquityCurve strategy={selected} />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-bx-muted">
          Past performance in this demo is illustrative, not a forecast. The
          high-water mark is the peak the allocation must beat before a
          performance fee applies again.
        </p>
      </div>
    </div>
  );
}

function FeeCalculatorPanel() {
  const [allocation, setAllocation] = useState("10000");
  const [current, setCurrent] = useState("11500");
  const [hwm, setHwm] = useState("11000");
  const [rate, setRate] = useState("20");

  const alloc = Number(allocation.replace(/[,\s]/g, "")) || 0;
  const curr = Number(current.replace(/[,\s]/g, "")) || 0;
  const mark = Number(hwm.replace(/[,\s]/g, "")) || 0;
  const pct = Number(rate) || 0;
  const valid = alloc > 0 && curr >= 0 && mark >= 0 && pct >= 0 && pct <= 100;
  const profitAboveHwm = Math.max(0, curr - mark);
  const fee = (profitAboveHwm * pct) / 100;
  const newHwm = Math.max(mark, curr);

  const money = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-ink">High-water-mark fee calculator</h3>
        <DemoLabel text="Illustrative data — example figures" />
      </div>
      <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-bx-muted">
        A performance fee applies only to profit above the previous peak. Change
        the figures and watch the working — this is the same arithmetic the fee
        engine applies, shown step by step.
      </p>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { id: "fee-alloc", label: "Starting allocation (USD)", value: allocation, set: setAllocation },
            { id: "fee-current", label: "Current value (USD)", value: current, set: setCurrent },
            { id: "fee-hwm", label: "High-water mark (USD)", value: hwm, set: setHwm },
            { id: "fee-rate", label: "Performance fee (%)", value: rate, set: setRate },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-muted">
                {field.label}
              </label>
              <input
                id={field.id}
                inputMode="decimal"
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                className="mt-2 min-h-[48px] w-full border border-bx-gold-500/40 bg-bx-white px-3 text-[15px] tabular-nums text-bx-ink"
              />
            </div>
          ))}
          <p className="text-sm leading-relaxed text-bx-muted sm:col-span-2">
            Try setting the current value below the high-water mark: the fee
            falls to zero, because no new profit has been made.
          </p>
        </div>
        <div className="border border-bx-gold-500/30 bg-bx-white px-5 py-6 sm:px-6" aria-live="polite">
          {!valid ? (
            <p role="alert" className="text-sm text-bx-ink">
              Enter valid figures — amounts of 0 or more, and a fee rate between 0 and 100%.
            </p>
          ) : (
            <ol className="space-y-4">
              {[
                [`Profit above the watermark`, `${money(curr)} − ${money(mark)} = ${money(profitAboveHwm)}`],
                [`Performance fee at ${pct}%`, `${money(profitAboveHwm)} × ${pct}% = ${money(fee)}`],
                [`New high-water mark`, `${money(newHwm)} — the next fee is charged only above this`],
              ].map(([label, working]) => (
                <li key={label} className="border-b border-bx-gold-500/15 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-[13px] font-sans font-bold uppercase tracking-[0.12em] text-bx-muted">{label}</p>
                  <p className="mt-1 font-sans text-[15px] font-bold tabular-nums text-bx-ink">{working}</p>
                </li>
              ))}
              <li className="bg-bx-maroon-900 px-4 py-4 text-bx-ivory">
                <p className="text-[13px] font-sans font-bold uppercase tracking-[0.12em] text-bx-gold-400">
                  Performance fee due
                </p>
                <p className="mt-1 font-sans text-2xl font-extrabold tabular-nums">{money(fee)}</p>
              </li>
            </ol>
          )}
        </div>
      </div>
      <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-bx-muted">
        <Icon name="audit" size={18} className="mt-0.5 shrink-0 text-bx-gold-600" />
        Every fee calculation keeps its inputs — watermark, period and rate —
        so any investor or auditor can re-derive the figure.
      </p>
    </div>
  );
}

const TABS = [
  { id: "strategies", label: "Strategies", hint: "Discovery & performance" },
  { id: "fees", label: "Fee calculator", hint: "High-water-mark maths" },
];

export default function PammPreview() {
  const [active, setActive] = useState("strategies");
  const reduceMotion = useReducedMotion();

  return (
    <div className="border border-bx-gold-500/30 bg-bx-ivory">
      <TabList tabs={TABS} activeId={active} onSelect={setActive} prefix="pamm" ariaLabel="PAMM preview" />
      <div className="bg-bx-cream/60 px-5 py-8 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`pamm-panel-${active}`}
            aria-labelledby={`pamm-tab-${active}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === "strategies" && <StrategiesPanel />}
            {active === "fees" && <FeeCalculatorPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
