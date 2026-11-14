/**
 * TradeOpsPreview — interactive TradeOps Control Center preview (spec S5).
 * A simulated batch leverage change: define the job, run the dry-run,
 * request four-eyes approval, execute, and read the audit log. Dark
 * console styling inside a light page. No live server connection —
 * every value here is illustrative.
 */
"use client";

import { useEffect, useRef, useState } from "react";
import DemoLabel from "@/components/ui/DemoLabel";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/icons";

type Phase = "draft" | "dryrun" | "approved" | "executing" | "done";

interface DryRunRow {
  label: string;
  value: string;
  warn?: boolean;
}

const SERVERS = ["MT5-Live-01 (demo)", "MT5-Live-02 (demo)", "MT4-Live-01 (demo)"];
const GROUPS = ["Standard — EMEA", "Standard — APAC", "Raw — Global", "Pro — EMEA"];

const GROUP_SIZE: Record<string, number> = {
  "Standard — EMEA": 1240,
  "Standard — APAC": 860,
  "Raw — Global": 512,
  "Pro — EMEA": 148,
};

function LogLine({ time, text, tone }: { time: string; text: string; tone?: "ok" | "warn" | "plain" }) {
  return (
    <p className="flex gap-3 font-mono text-[13px] leading-relaxed">
      <span className="shrink-0 tabular-nums text-bx-teal-400/70">{time}</span>
      <span
        className={
          tone === "ok"
            ? "text-bx-slate-300"
            : tone === "warn"
              ? "text-bx-teal-400"
              : "text-bx-slate-300/80"
        }
      >
        {text}
      </span>
    </p>
  );
}

export default function TradeOpsPreview() {
  const [server, setServer] = useState(SERVERS[0]);
  const [group, setGroup] = useState(GROUPS[0]);
  const [leverage, setLeverage] = useState("100");
  const [phase, setPhase] = useState<Phase>("draft");
  const [progress, setProgress] = useState(0);
  const [busy, setBusy] = useState(false);
  const timer = useRef<number | null>(null);

  const affected = GROUP_SIZE[group];
  const excluded = Math.max(2, Math.round(affected * 0.008));
  const leverageNum = Number(leverage) || 0;
  const leverageValid = [30, 50, 100, 200, 500].includes(leverageNum);

  const dryRunRows: DryRunRow[] = [
    { label: "Accounts in scope", value: affected.toLocaleString("en-US") },
    { label: "Accounts to be updated", value: (affected - excluded).toLocaleString("en-US") },
    { label: "Excluded — open positions locked", value: String(excluded), warn: true },
    { label: "New leverage", value: `1:${leverageNum}` },
    { label: "Estimated duration", value: "~2 min 40 s" },
    { label: "Rollback", value: "Available — previous values retained for 30 days" },
  ];

  useEffect(() => {
    if (phase !== "executing") return;
    setProgress(0);
    timer.current = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (timer.current) window.clearInterval(timer.current);
          return 100;
        }
        return Math.min(100, p + 4 + Math.floor(Math.random() * 6));
      });
    }, 180);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "executing" && progress >= 100) {
      const t = window.setTimeout(() => setPhase("done"), 500);
      return () => window.clearTimeout(t);
    }
  }, [phase, progress]);

  const runDryRun = () => {
    setBusy(true);
    window.setTimeout(() => {
      setPhase("dryrun");
      setBusy(false);
    }, 800);
  };

  const requestApproval = () => {
    setBusy(true);
    window.setTimeout(() => {
      setPhase("approved");
      setBusy(false);
    }, 900);
  };

  const reset = () => {
    setPhase("draft");
    setProgress(0);
  };

  const stepState = (step: Phase): "done" | "active" | "upcoming" => {
    const order: Phase[] = ["draft", "dryrun", "approved", "executing", "done"];
    const current = order.indexOf(phase);
    const target = order.indexOf(step);
    if (target < current || (step === "executing" && phase === "done")) return "done";
    if (target === current) return "active";
    return "upcoming";
  };

  const steps: { id: Phase; label: string }[] = [
    { id: "draft", label: "Draft" },
    { id: "dryrun", label: "Dry-run" },
    { id: "approved", label: "Approve" },
    { id: "executing", label: "Execute" },
    { id: "done", label: "Audit" },
  ];

  return (
    <div className="overflow-hidden border border-bx-navy-900 bg-bx-navy-950 text-bx-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-teal-500/30 px-5 py-4 sm:px-8">
        <h3 className="font-sans text-xl font-bold">Batch change — simulated dry-run</h3>
        <DemoLabel dark text="Illustrative data — no live server" />
      </div>

      {/* Stepper */}
      <ol className="flex flex-wrap gap-x-6 gap-y-2 border-b border-bx-teal-500/30 px-5 py-4 sm:px-8" aria-label="Job progress">
        {steps.map((step, i) => {
          const state = stepState(step.id);
          return (
            <li key={step.id} className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 items-center justify-center font-sans text-[13px] font-extrabold ${
                  state === "done"
                    ? "bg-bx-teal-500 text-bx-white"
                    : state === "active"
                      ? "border-2 border-bx-teal-400 text-bx-teal-400"
                      : "border border-bx-teal-500/40 text-bx-slate-300/50"
                }`}
              >
                {state === "done" ? <Icon name="check" size={14} /> : i + 1}
              </span>
              <span
                className={`font-sans text-sm font-bold ${
                  state === "upcoming" ? "text-bx-slate-300/50" : "text-bx-white"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="grid gap-0 lg:grid-cols-2">
        {/* Left: job definition + actions */}
        <div className="border-b border-bx-teal-500/30 px-5 py-6 sm:px-8 lg:border-b-0 lg:border-r">
          <fieldset disabled={phase !== "draft"}>
            <legend className="sr-only">Define the batch change</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="ops-server" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                  Server
                </label>
                <select
                  id="ops-server"
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-navy-900 px-3 text-[15px] text-bx-white"
                >
                  {SERVERS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ops-group" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                  Account group
                </label>
                <select
                  id="ops-group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-navy-900 px-3 text-[15px] text-bx-white"
                >
                  {GROUPS.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="ops-change" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                  Change type
                </label>
                <input
                  id="ops-change"
                  value="Leverage update"
                  readOnly
                  className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-navy-900/60 px-3 text-[15px] text-bx-slate-300/80"
                />
              </div>
              <div>
                <label htmlFor="ops-leverage" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                  New leverage (1:x)
                </label>
                <select
                  id="ops-leverage"
                  value={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                  className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-navy-900 px-3 text-[15px] text-bx-white"
                >
                  <option value="30">30</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                </select>
              </div>
            </div>
          </fieldset>

          <div className="mt-6 flex flex-wrap gap-3">
            {phase === "draft" && (
              <Button onClick={runDryRun} disabled={!leverageValid || busy}>
                {busy ? "Validating…" : "Validate & dry-run"}
              </Button>
            )}
            {phase === "dryrun" && (
              <>
                <Button onClick={requestApproval} disabled={busy}>
                  {busy ? "Requesting…" : "Request four-eyes approval"}
                </Button>
                <Button onClick={reset} variant="secondaryLight">
                  Edit job
                </Button>
              </>
            )}
            {phase === "approved" && (
              <>
                <Button onClick={() => setPhase("executing")}>Execute job</Button>
                <Button onClick={reset} variant="secondaryLight">
                  Cancel job
                </Button>
              </>
            )}
            {phase === "done" && (
              <Button onClick={reset} variant="secondaryLight">
                Run another job
              </Button>
            )}
          </div>

          {phase === "approved" && (
            <p className="mt-5 border border-bx-teal-500/40 bg-bx-navy-900 px-4 py-3 text-sm leading-relaxed text-bx-slate-300/90" role="status">
              <strong className="font-sans text-bx-white">Approved by R. Alvarez, Operations Lead</strong>
              <span className="block text-[13px] text-bx-slate-300/70">
                Four-eyes review complete — the approver is not the operator who drafted the job.
              </span>
            </p>
          )}
          {(phase === "executing" || phase === "done") && (
            <div className="mt-5" aria-live="polite">
              <p className="flex justify-between font-sans text-sm font-bold">
                <span>Job progress</span>
                <span className="tabular-nums text-bx-teal-400">{progress}%</span>
              </p>
              <div className="mt-2 h-2 w-full bg-bx-navy-800" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Job execution progress">
                <div className="h-2 bg-bx-teal-500 transition-[width] duration-200" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-2 text-[13px] tabular-nums text-bx-slate-300/70">
                {phase === "done"
                  ? `${(affected - excluded).toLocaleString("en-US")} accounts updated · ${excluded} excluded · 0 errors`
                  : `${Math.floor(((affected - excluded) * progress) / 100).toLocaleString("en-US")} of ${(affected - excluded).toLocaleString("en-US")} accounts updated…`}
              </p>
            </div>
          )}
        </div>

        {/* Right: dry-run results + audit log */}
        <div className="bg-bx-navy-900/60 px-5 py-6 sm:px-8" aria-live="polite">
          {phase === "draft" ? (
            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                Dry-run results
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-bx-slate-300/80">
                Run the dry-run to see exactly what this job would change —
                which accounts, which values, and what is excluded — before
                anything is applied.
              </p>
              <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-bx-slate-300/70">
                <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Role scoping applies: this operator can draft jobs for these
                groups, but cannot approve their own work.
              </p>
            </div>
          ) : (
            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                Dry-run — {server} · {group}
              </h4>
              <dl className="mt-4 space-y-2.5">
                {dryRunRows.map((row) => (
                  <div key={row.label} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 border-b border-bx-teal-500/15 pb-2.5">
                    <dt className="text-sm text-bx-slate-300/80">{row.label}</dt>
                    <dd className={`font-sans text-sm font-bold tabular-nums ${row.warn ? "text-bx-teal-400" : "text-bx-white"}`}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <h4 className="mt-6 font-sans text-sm font-bold uppercase tracking-[0.12em] text-bx-teal-400">
                Audit log
              </h4>
              <div className="mt-3 space-y-1.5">
                <LogLine time="09:41:02" text="Job JOB-4471 drafted by operator j.chen — leverage 1:100" tone="plain" />
                <LogLine time="09:41:09" text={`Validation passed — ${affected.toLocaleString("en-US")} accounts in scope`} tone="ok" />
                <LogLine time="09:41:09" text={`Dry-run complete — ${excluded} accounts excluded (open positions locked)`} tone="warn" />
                {phase !== "dryrun" && (
                  <LogLine time="09:42:31" text="Approved by r.alvarez (four-eyes) — maker-checker satisfied" tone="ok" />
                )}
                {(phase === "executing" || phase === "done") && (
                  <LogLine time="09:43:05" text="Execution started — batch size 100, progress tracked" tone="plain" />
                )}
                {phase === "done" && (
                  <>
                    <LogLine time="09:45:48" text={`Execution complete — ${(affected - excluded).toLocaleString("en-US")} updated, 0 errors`} tone="ok" />
                    <LogLine time="09:45:48" text="Rollback snapshot retained — previous values restorable for 30 days" tone="plain" />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
