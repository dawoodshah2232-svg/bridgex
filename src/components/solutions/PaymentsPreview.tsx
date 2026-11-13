/**
 * PaymentsPreview — interactive Payment Orchestration preview (spec S2).
 * Configure an illustrative payment, see the routing decision, then run
 * the attempt: the first gateway declines and the cascade retries through
 * the next eligible provider. Nothing here moves real funds.
 */
"use client";

import { useState } from "react";
import DemoLabel from "@/components/ui/DemoLabel";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/icons";

type Method = "Card" | "Bank transfer" | "Alternative method";

interface RouteOption {
  gateway: string;
  note: string;
  weight: number;
}

const ROUTES: Record<Method, RouteOption[]> = {
  Card: [
    { gateway: "Primary card gateway", note: "Best approval rate for this region", weight: 60 },
    { gateway: "Secondary card gateway", note: "Failover route for this region", weight: 30 },
    { gateway: "Regional card rail", note: "Final route in the cascade", weight: 10 },
  ],
  "Bank transfer": [
    { gateway: "Regional bank rail", note: "Local settlement, same-day", weight: 70 },
    { gateway: "International bank rail", note: "Cross-border fallback", weight: 30 },
  ],
  "Alternative method": [
    { gateway: "Alternative methods gateway", note: "Wallets and local methods", weight: 55 },
    { gateway: "Regional card rail", note: "Card fallback for this method", weight: 45 },
  ],
};

interface TraceStep {
  time: string;
  text: string;
  state: "done" | "failed" | "active" | "upcoming";
}

type Phase = "configure" | "routed" | "attempted" | "settled";

const COUNTRIES = ["United Arab Emirates", "United Kingdom", "India", "Brazil", "Singapore", "Nigeria"];

function Trace({ steps }: { steps: TraceStep[] }) {
  return (
    <ol className="relative">
      <span aria-hidden="true" className="absolute bottom-4 left-[15px] top-4 w-px bg-bx-gold-500/40" />
      {steps.map((step) => (
        <li key={step.text} className="relative flex gap-5 pb-5 last:pb-0">
          <span
            aria-hidden="true"
            className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
              step.state === "done"
                ? "border-bx-maroon-700 bg-bx-maroon-700 text-bx-ivory"
                : step.state === "failed"
                  ? "border-bx-maroon-700 bg-bx-ivory text-bx-maroon-700"
                  : step.state === "active"
                    ? "border-bx-gold-600 bg-bx-ivory text-bx-gold-600"
                    : "border-bx-gold-500/50 bg-bx-ivory text-bx-muted"
            }`}
          >
            {step.state === "done" ? (
              <Icon name="check" size={16} />
            ) : step.state === "failed" ? (
              <Icon name="close" size={14} />
            ) : (
              <span className="h-2 w-2 rounded-full bg-current" />
            )}
          </span>
          <span className="pt-0.5">
            <span className="block font-sans text-[15px] font-bold text-bx-ink">{step.text}</span>
            <span className="mt-0.5 block text-[13px] tabular-nums text-bx-muted">{step.time}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function PaymentsPreview() {
  const [method, setMethod] = useState<Method>("Card");
  const [amount, setAmount] = useState("2,500");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [direction, setDirection] = useState<"Deposit" | "Withdrawal">("Deposit");
  const [phase, setPhase] = useState<Phase>("configure");
  const [busy, setBusy] = useState(false);

  const routes = ROUTES[method];
  const amountNum = Number(amount.replace(/[,\s]/g, "")) || 0;
  const amountValid = amountNum > 0 && amountNum <= 100000;

  const trace: TraceStep[] =
    phase === "configure"
      ? [
          { time: "—", text: "Awaiting routing decision", state: "upcoming" },
          { time: "—", text: "Attempt via selected gateway", state: "upcoming" },
          { time: "—", text: "Confirmation and reconciliation", state: "upcoming" },
        ]
      : phase === "routed"
        ? [
            { time: "14:02:11", text: `Routed to ${routes[0].gateway} (${routes[0].weight}% weight)`, state: "done" },
            { time: "—", text: "Attempt via selected gateway", state: "active" },
            { time: "—", text: "Confirmation and reconciliation", state: "upcoming" },
          ]
        : phase === "attempted"
          ? [
              { time: "14:02:11", text: `Routed to ${routes[0].gateway} (${routes[0].weight}% weight)`, state: "done" },
              { time: "14:02:14", text: `Declined by ${routes[0].gateway} — issuer timeout`, state: "failed" },
              { time: "14:02:15", text: `Cascading retry via ${routes[1].gateway}`, state: "active" },
              { time: "—", text: "Confirmation and reconciliation", state: "upcoming" },
            ]
          : [
              { time: "14:02:11", text: `Routed to ${routes[0].gateway} (${routes[0].weight}% weight)`, state: "done" },
              { time: "14:02:14", text: `Declined by ${routes[0].gateway} — issuer timeout`, state: "failed" },
              { time: "14:02:15", text: `Cascading retry via ${routes[1].gateway}`, state: "done" },
              { time: "14:02:19", text: `Approved — ${direction.toLowerCase()} confirmed and reconciled`, state: "done" },
            ];

  const runStep = (next: Phase) => {
    setBusy(true);
    window.setTimeout(() => {
      setPhase(next);
      setBusy(false);
    }, 700);
  };

  const reset = () => {
    setPhase("configure");
  };

  return (
    <div className="border border-bx-gold-500/30 bg-bx-ivory">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-gold-500/30 px-5 py-4 sm:px-8">
        <h3 className="font-sans text-xl font-bold text-bx-ink">Payment flow — illustrative transaction</h3>
        <DemoLabel text="Illustrative data — no real funds" />
      </div>
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Left: configure + route */}
        <div className="border-b border-bx-gold-500/30 px-5 py-6 sm:px-8 lg:border-b-0 lg:border-r">
          <fieldset disabled={phase !== "configure"}>
            <legend className="sr-only">Configure the illustrative payment</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="pay-direction" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-muted">
                  Direction
                </label>
                <select
                  id="pay-direction"
                  value={direction}
                  onChange={(e) => setDirection(e.target.value as "Deposit" | "Withdrawal")}
                  className="mt-2 min-h-[48px] w-full border border-bx-gold-500/40 bg-bx-white px-3 text-[15px] text-bx-ink"
                >
                  <option>Deposit</option>
                  <option>Withdrawal</option>
                </select>
              </div>
              <div>
                <label htmlFor="pay-method" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-muted">
                  Method category
                </label>
                <select
                  id="pay-method"
                  value={method}
                  onChange={(e) => setMethod(e.target.value as Method)}
                  className="mt-2 min-h-[48px] w-full border border-bx-gold-500/40 bg-bx-white px-3 text-[15px] text-bx-ink"
                >
                  <option>Card</option>
                  <option>Bank transfer</option>
                  <option>Alternative method</option>
                </select>
              </div>
              <div>
                <label htmlFor="pay-amount" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-muted">
                  Amount (USD)
                </label>
                <input
                  id="pay-amount"
                  inputMode="numeric"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-invalid={!amountValid}
                  aria-describedby="pay-amount-hint"
                  className="mt-2 min-h-[48px] w-full border border-bx-gold-500/40 bg-bx-white px-3 text-[15px] tabular-nums text-bx-ink"
                />
                <p id="pay-amount-hint" className="mt-1.5 text-[13px] text-bx-muted">
                  Illustrative only. Enter 1 – 100,000.
                </p>
              </div>
              <div>
                <label htmlFor="pay-country" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-muted">
                  Client country
                </label>
                <select
                  id="pay-country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-2 min-h-[48px] w-full border border-bx-gold-500/40 bg-bx-white px-3 text-[15px] text-bx-ink"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          {!amountValid && (
            <p role="alert" className="mt-4 border-l-2 border-bx-maroon-700 bg-bx-cream px-4 py-3 text-sm text-bx-ink">
              Enter an amount between 1 and 100,000 USD to route this payment.
            </p>
          )}

          <div className="mt-6">
            <h4 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-bx-muted">
              Routing decision — {method} · {country}
            </h4>
            <ol className="mt-3 space-y-2.5">
              {routes.map((route, i) => (
                <li
                  key={route.gateway}
                  className={`flex items-center justify-between gap-4 border px-4 py-3 ${
                    phase !== "configure" && i === 0
                      ? "border-bx-maroon-700 bg-bx-maroon-700/5"
                      : "border-bx-gold-500/30 bg-bx-white"
                  }`}
                >
                  <span>
                    <span className="block font-sans text-[15px] font-bold text-bx-ink">
                      {i + 1}. {route.gateway}
                    </span>
                    <span className="block text-[13px] text-bx-muted">{route.note}</span>
                  </span>
                  <span className="shrink-0 font-sans text-sm font-extrabold tabular-nums text-bx-maroon-700">
                    {route.weight}%
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[13px] leading-relaxed text-bx-muted">
              Priority and weighted routing, restricted by country, currency,
              amount and client profile. Restrictions are configuration, not code.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {phase === "configure" && (
              <Button onClick={() => runStep("routed")} disabled={!amountValid || busy}>
                {busy ? "Routing…" : "Route this payment"}
              </Button>
            )}
            {phase === "routed" && (
              <Button onClick={() => runStep("attempted")} disabled={busy}>
                {busy ? "Attempting…" : "Simulate attempt"}
              </Button>
            )}
            {phase === "attempted" && (
              <Button onClick={() => runStep("settled")} disabled={busy}>
                {busy ? "Confirming…" : "Complete the retry"}
              </Button>
            )}
            {phase === "settled" && (
              <Button onClick={reset} variant="secondary">
                Run another payment
              </Button>
            )}
            {phase !== "configure" && phase !== "settled" && (
              <Button onClick={reset} variant="secondary">
                Reset
              </Button>
            )}
          </div>
          {direction === "Withdrawal" && (
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-bx-muted">
              <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-bx-gold-600" />
              Withdrawals pass an approval step before release. This preview
              shows the routing and retry; approval happens in the finance queue.
            </p>
          )}
        </div>

        {/* Right: status trace */}
        <div className="bg-bx-cream/60 px-5 py-6 sm:px-8">
          <h4 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-bx-muted">
            Payment status trace
          </h4>
          <p className="mt-1 text-[13px] tabular-nums text-bx-muted">
            Reference PAY-2026-11842 · {direction} · ${amountNum.toLocaleString("en-US")} · {method}
          </p>
          <div className="mt-6" aria-live="polite">
            <Trace steps={trace} />
          </div>
          {phase === "settled" && (
            <div className="mt-6 border border-bx-maroon-700/40 bg-bx-white px-4 py-4">
              <p className="font-sans text-[15px] font-bold text-bx-ink">
                Settled — and the client never saw the failure.
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-bx-muted">
                The decline was retried automatically through the next eligible
                provider. The trace, the retry and the reconciliation are all
                recorded — support can answer “where is my money?” in seconds.
              </p>
            </div>
          )}
          {phase === "configure" && (
            <p className="mt-6 text-sm leading-relaxed text-bx-muted">
              Route the payment to see the trace build. The first gateway will
              decline — watch the cascade recover it.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
