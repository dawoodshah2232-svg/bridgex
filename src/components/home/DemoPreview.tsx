/**
 * H05 — Interactive demo preview: three functional tabs (Operations /
 * Partners / Client Journey) with real HTML UI and clearly labelled
 * illustrative sample data. Tabs follow the ARIA tabs pattern:
 * arrow keys move between tabs, Tab moves into the panel.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import DemoLabel from "../ui/DemoLabel";
import Icon from "../icons";

type TabId = "operations" | "partners" | "journey";

const TABS: { id: TabId; label: string; hint: string }[] = [
  { id: "operations", label: "Operations", hint: "Queues, cases & approvals" },
  { id: "partners", label: "Partners", hint: "Commission ledger" },
  { id: "journey", label: "Client Journey", hint: "Onboarding, end to end" },
];

const OPERATIONS_ROWS = [
  { ref: "ONB-2481", type: "Individual onboarding", desk: "Compliance", status: "Awaiting documents" },
  { ref: "FND-1093", type: "Deposit approval", desk: "Finance", status: "Dual approval" },
  { ref: "CST-5530", type: "Account enquiry", desk: "Support", status: "In progress" },
  { ref: "ONB-2477", type: "Corporate onboarding", desk: "Compliance", status: "Approved" },
  { ref: "FND-1088", type: "Withdrawal request", desk: "Finance", status: "Settled" },
];

const PARTNER_ROWS = [
  { partner: "Meridian Partners", period: "Mar 2026", volume: "1,240", commission: "$8,410", status: "Approved" },
  { partner: "Northgate IB", period: "Mar 2026", volume: "860", commission: "$5,980", status: "Approved" },
  { partner: "Atlas Affiliates", period: "Mar 2026", volume: "512", commission: "$3,204", status: "Pending review" },
  { partner: "Coral Trading Group", period: "Feb 2026", volume: "1,905", commission: "$12,760", status: "Settled" },
];

const JOURNEY_STEPS = [
  { title: "Application submitted", detail: "Individual application · Dubai · 09:41", state: "done" as const },
  { title: "Identity verified", detail: "ID document & liveness check passed · 10:02", state: "done" as const },
  { title: "Suitability & approval", detail: "With the compliance desk — suitability questionnaire complete", state: "active" as const },
  { title: "Account ready", detail: "Trading account creation handoff, once approved", state: "upcoming" as const },
];

function StatusPill({ status }: { status: string }) {
  return (
    <span className="inline-flex whitespace-nowrap border border-bx-teal-600/50 px-2.5 py-1 text-[12px] font-bold text-bx-teal-700">
      {status}
    </span>
  );
}

function OperationsPanel() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">
          Today&apos;s queues
        </h3>
        <DemoLabel />
      </div>
      <div
        className="mt-5 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Today's queues table — scroll sideways to see all columns"
      >
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b border-bx-teal-500/40 text-[12px] font-sans uppercase tracking-[0.14em] text-bx-slate-500">
              <th scope="col" className="py-3 pr-4 font-bold">Reference</th>
              <th scope="col" className="py-3 pr-4 font-bold">Case</th>
              <th scope="col" className="py-3 pr-4 font-bold">Desk</th>
              <th scope="col" className="py-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {OPERATIONS_ROWS.map((row) => (
              <tr key={row.ref} className="border-b border-bx-teal-500/15">
                <td className="py-3.5 pr-4 font-sans text-sm font-bold tabular-nums text-bx-teal-700">
                  {row.ref}
                </td>
                <td className="py-3.5 pr-4 text-sm text-bx-navy-900">{row.type}</td>
                <td className="py-3.5 pr-4 text-sm text-bx-slate-500">{row.desk}</td>
                <td className="py-3.5">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
        One queue for onboarding, funding and service cases — routed by desk,
        visible by role, with every action written to the audit log.
      </p>
    </div>
  );
}

function PartnersPanel() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">
          Commission ledger
        </h3>
        <DemoLabel text="Illustrative data — fictional partners" />
      </div>
      <div
        className="mt-5 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Commission ledger table — scroll sideways to see all columns"
      >
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="border-b border-bx-teal-500/40 text-[12px] font-sans uppercase tracking-[0.14em] text-bx-slate-500">
              <th scope="col" className="py-3 pr-4 font-bold">Partner</th>
              <th scope="col" className="py-3 pr-4 font-bold">Period</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Volume (lots)</th>
              <th scope="col" className="py-3 pr-4 text-right font-bold">Commission</th>
              <th scope="col" className="py-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {PARTNER_ROWS.map((row) => (
              <tr key={row.partner} className="border-b border-bx-teal-500/15">
                <td className="py-3.5 pr-4 text-sm font-bold text-bx-navy-900">{row.partner}</td>
                <td className="py-3.5 pr-4 text-sm tabular-nums text-bx-slate-500">{row.period}</td>
                <td className="py-3.5 pr-4 text-right text-sm tabular-nums text-bx-navy-900">{row.volume}</td>
                <td className="py-3.5 pr-4 text-right text-sm font-bold tabular-nums text-bx-navy-900">{row.commission}</td>
                <td className="py-3.5">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
        Every figure traces back to its source trades — attribution, tier and
        adjustments included — so a partner statement is never an argument.
      </p>
    </div>
  );
}

function JourneyPanel() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">
          Amara Chen — individual application
        </h3>
        <DemoLabel text="Illustrative data — fictional applicant" />
      </div>
      <ol className="relative mt-6">
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[15px] top-4 w-px bg-bx-teal-500/40"
        />
        {JOURNEY_STEPS.map((step) => (
          <li key={step.title} className="relative flex gap-5 pb-6 last:pb-0">
            <span
              aria-hidden="true"
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                step.state === "done"
                  ? "border-bx-navy-700 bg-bx-navy-700 text-bx-white"
                  : step.state === "active"
                    ? "border-bx-teal-600 bg-bx-white text-bx-teal-600"
                    : "border-bx-teal-500/50 bg-bx-white text-bx-slate-500"
              }`}
            >
              {step.state === "done" ? (
                <Icon name="check" size={16} />
              ) : (
                <span className="h-2 w-2 rounded-full bg-current" />
              )}
            </span>
            <span className="pt-0.5">
              <span className="block font-sans text-base font-bold text-bx-navy-900">
                {step.title}
                {step.state === "active" && (
                  <span className="ml-2 border border-bx-teal-600/60 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase tracking-[0.12em] text-bx-teal-700">
                    In progress
                  </span>
                )}
              </span>
              <span className="mt-0.5 block text-sm text-bx-slate-500">
                {step.detail}
              </span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm leading-relaxed text-bx-slate-500">
        The applicant sees the same journey from their side — what is needed,
        what is next, and who to contact — instead of silence.
      </p>
    </div>
  );
}

export default function DemoPreview() {
  const [active, setActive] = useState<TabId>("operations");
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({});

  const onTabKeyDown = (e: React.KeyboardEvent, id: TabId) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const idx = TABS.findIndex((t) => t.id === id);
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = TABS[(idx + dir + TABS.length) % TABS.length];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <Section tone="white" ariaLabel="Product preview">
      <SectionIntro
        label="See it working"
        heading={
          <>
            A preview of the{" "}
            <span className="font-sans font-semibold italic text-bx-teal-700">
              working day.
            </span>
          </>
        }
        copy="Three views of the same connected system — operations, partners and the client journey. Sample data throughout; the real product shows your business, not ours."
      />

      <div className="mt-12 lg:mt-16">
        {/* Tab list */}
        <div
          role="tablist"
          aria-label="Demo preview"
          className="flex flex-col gap-2 border-b border-bx-teal-500/30 sm:flex-row sm:gap-0"
        >
          {TABS.map((tab) => {
            const selected = active === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                role="tab"
                id={`demo-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`demo-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                onKeyDown={(e) => onTabKeyDown(e, tab.id)}
                className={`relative min-h-[56px] px-5 py-3 text-left transition-colors duration-200 sm:px-6 ${
                  selected
                    ? "text-bx-navy-900"
                    : "text-bx-slate-500 hover:text-bx-teal-700"
                }`}
              >
                <span className="block font-sans text-base font-bold">
                  {tab.label}
                </span>
                <span className="block text-[13px]">{tab.hint}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-[2px] bg-bx-teal-500 transition-opacity duration-200 ${
                    selected ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Panels */}
        <div className="bg-bx-mint-50/60 px-5 py-8 sm:px-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              role="tabpanel"
              id={`demo-panel-${active}`}
              aria-labelledby={`demo-tab-${active}`}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              {active === "operations" && <OperationsPanel />}
              {active === "partners" && <PartnersPanel />}
              {active === "journey" && <JourneyPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </Section>
  );
}
