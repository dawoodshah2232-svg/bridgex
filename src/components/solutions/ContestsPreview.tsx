/**
 * ContestsPreview — interactive Trading Contest Management preview
 * (spec S7). A live countdown, a leaderboard filterable by contest
 * format, suspicious-activity flags held for review, prize tiers and a
 * simulated registration. Every trader and figure is illustrative.
 */
"use client";

import { useEffect, useMemo, useState } from "react";
import DemoLabel from "@/components/ui/DemoLabel";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/icons";

/** Illustrative contest end — 20 December 2026, 23:59 UTC. */
const CONTEST_END = new Date("2026-12-20T23:59:59Z").getTime();

type Format = "Profit %" | "Volume" | "Streak";

interface Trader {
  handle: string;
  profitPct: number;
  volume: number;
  streak: number;
  flagged?: string;
}

const TRADERS: Trader[] = [
  { handle: "FalconTrader", profitPct: 42.6, volume: 1840, streak: 9 },
  { handle: "DesertFox", profitPct: 38.1, volume: 2210, streak: 7 },
  { handle: "AuroraFX", profitPct: 31.4, volume: 1560, streak: 11 },
  { handle: "NightOwl_7", profitPct: 27.9, volume: 980, streak: 5, flagged: "Unusual win pattern — under review" },
  { handle: "CopperKing", profitPct: 24.3, volume: 2640, streak: 6 },
  { handle: "SilentPips", profitPct: 21.8, volume: 1310, streak: 8 },
  { handle: "MarinaTrade", profitPct: 18.2, volume: 1740, streak: 4 },
  { handle: "VectorNine", profitPct: 15.7, volume: 1120, streak: 6, flagged: "Coordinated activity — under review" },
  { handle: "GoldenHour", profitPct: 12.9, volume: 890, streak: 3 },
  { handle: "BlueHorizon", profitPct: 9.4, volume: 760, streak: 4 },
];

const PRIZE_TIERS = [
  { place: "1st", prize: "$5,000 trading credit", note: "Plus featured profile on the microsite" },
  { place: "2nd", prize: "$2,500 trading credit", note: "Plus one month of premium analytics" },
  { place: "3rd", prize: "$1,000 trading credit", note: "Plus contest badge on the profile" },
  { place: "4th – 10th", prize: "$250 trading credit each", note: "Paid after fairness review" },
];

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, []);
  const diff = Math.max(0, CONTEST_END - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);
  return { days, hours, mins, secs, ended: diff <= 0 };
}

export default function ContestsPreview() {
  const [format, setFormat] = useState<Format>("Profit %");
  const [query, setQuery] = useState("");
  const [registered, setRegistered] = useState(false);
  const { days, hours, mins, secs, ended } = useCountdown();

  const ranked = useMemo(() => {
    const key: Record<Format, keyof Trader> = {
      "Profit %": "profitPct",
      Volume: "volume",
      Streak: "streak",
    };
    const k = key[format];
    return [...TRADERS]
      .filter((t) => t.handle.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => (b[k] as number) - (a[k] as number));
  }, [format, query]);

  const metricLabel: Record<Format, string> = {
    "Profit %": "Profit",
    Volume: "Volume (lots)",
    Streak: "Best streak (wins)",
  };

  const metricValue = (t: Trader) =>
    format === "Profit %"
      ? `+${t.profitPct.toFixed(1)}%`
      : format === "Volume"
        ? t.volume.toLocaleString("en-US")
        : `${t.streak} wins`;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="border border-bx-gold-500/30 bg-bx-ivory">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-gold-500/30 px-5 py-4 sm:px-8">
        <h3 className="font-sans text-xl font-bold text-bx-ink">
          Winter Trading Cup — illustrative contest
        </h3>
        <DemoLabel text="Illustrative data — fictional traders" />
      </div>

      {/* Countdown + registration */}
      <div className="flex flex-col gap-6 border-b border-bx-gold-500/30 bg-bx-maroon-900 px-5 py-6 text-bx-ivory sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-gold-400">
            {ended ? "Contest ended" : "Contest ends in"}
          </p>
          {ended ? (
            <p className="mt-2 font-sans text-2xl font-extrabold">
              Final standings under fairness review.
            </p>
          ) : (
            <p className="mt-2 font-sans text-3xl font-extrabold tabular-nums sm:text-4xl" aria-live="off" suppressHydrationWarning>
              {days}d : {pad(hours)}h : {pad(mins)}m : {pad(secs)}s
            </p>
          )}
          <p className="mt-1.5 text-sm text-bx-champagne/80">
            1 – 20 December 2026 · Open to funded standard accounts · Prizes
            paid after approval.
          </p>
        </div>
        <div className="shrink-0">
          {registered ? (
            <p className="border border-bx-gold-500/60 px-5 py-3.5 text-center font-sans text-sm font-bold text-bx-champagne" role="status">
              Registered for the demo contest.
              <span className="block text-[13px] font-normal text-bx-champagne/70">
                No account was created — this is a simulated registration.
              </span>
            </p>
          ) : (
            <Button onClick={() => setRegistered(true)} disabled={ended} size="lg">
              {ended ? "Registration closed" : "Register (demo)"}
            </Button>
          )}
        </div>
      </div>

      <div className="px-5 py-6 sm:px-8">
        {/* Format filter + search */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Rank by contest format">
            {(["Profit %", "Volume", "Streak"] as Format[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormat(f)}
                aria-pressed={format === f}
                className={`min-h-[40px] border px-3.5 font-sans text-sm font-bold transition-colors duration-150 ${
                  format === f
                    ? "border-bx-maroon-900 bg-bx-maroon-900 text-bx-ivory"
                    : "border-bx-gold-500/40 bg-bx-white text-bx-maroon-700 hover:border-bx-maroon-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="sr-only" htmlFor="contest-search">
            Search traders by handle
          </label>
          <input
            id="contest-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by trader handle…"
            className="min-h-[44px] w-full border border-bx-gold-500/40 bg-bx-white px-4 text-[15px] text-bx-ink placeholder:text-bx-muted lg:max-w-xs"
          />
        </div>

        {/* Leaderboard */}
        <div
          className="mt-5 overflow-x-auto"
          tabIndex={0}
          role="region"
          aria-label="Leaderboard table — scroll sideways to see all columns"
        >
          <table className="w-full min-w-[620px] border-collapse text-left">
            <thead>
              <tr className="border-b border-bx-gold-500/40 text-[12px] font-sans uppercase tracking-[0.14em] text-bx-muted">
                <th scope="col" className="py-3 pr-4 font-bold">Rank</th>
                <th scope="col" className="py-3 pr-4 font-bold">Trader</th>
                <th scope="col" className="py-3 pr-4 text-right font-bold">{metricLabel[format]}</th>
                <th scope="col" className="py-3 pr-4 text-right font-bold">Profit %</th>
                <th scope="col" className="py-3 pr-4 text-right font-bold">Volume</th>
                <th scope="col" className="py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {ranked.map((t, i) => (
                <tr key={t.handle} className="border-b border-bx-gold-500/15">
                  <td className="py-3.5 pr-4">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center font-sans text-sm font-extrabold tabular-nums ${
                        i === 0
                          ? "bg-bx-gold-500 text-bx-maroon-950"
                          : i < 3
                            ? "bg-bx-maroon-800 text-bx-ivory"
                            : "border border-bx-gold-500/40 text-bx-maroon-700"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="block text-sm font-bold text-bx-ink">{t.handle}</span>
                    {t.flagged && (
                      <span className="mt-0.5 block text-[13px] text-bx-maroon-700">{t.flagged}</span>
                    )}
                  </td>
                  <td className="py-3.5 pr-4 text-right text-sm font-bold tabular-nums text-bx-ink">
                    {metricValue(t)}
                  </td>
                  <td className="py-3.5 pr-4 text-right text-sm tabular-nums text-bx-muted">
                    +{t.profitPct.toFixed(1)}%
                  </td>
                  <td className="py-3.5 pr-4 text-right text-sm tabular-nums text-bx-muted">
                    {t.volume.toLocaleString("en-US")}
                  </td>
                  <td className="py-3.5">
                    {t.flagged ? (
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap border border-bx-maroon-700 bg-bx-maroon-700/10 px-2.5 py-1 text-[12px] font-bold text-bx-maroon-700">
                        <Icon name="shield" size={13} /> Under review
                      </span>
                    ) : (
                      <span className="inline-flex whitespace-nowrap border border-bx-gold-600/50 px-2.5 py-1 text-[12px] font-bold text-bx-maroon-700">
                        Verified
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {ranked.length === 0 && (
            <p className="py-8 text-center text-sm text-bx-muted" role="status">
              No traders match that search.
            </p>
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-bx-muted">
          Flagged entries stay on the board, marked for review — they are not
          quietly removed, and no prize is paid until a human has decided.
        </p>

        {/* Prize tiers */}
        <h4 className="mt-8 font-sans text-lg font-extrabold text-bx-ink">Prize tiers</h4>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRIZE_TIERS.map((tier) => (
            <li key={tier.place} className="border border-bx-gold-500/30 bg-bx-white p-5">
              <p className="font-display text-2xl font-semibold text-bx-maroon-700">{tier.place}</p>
              <p className="mt-2 font-sans text-[15px] font-bold text-bx-ink">{tier.prize}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-bx-muted">{tier.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
