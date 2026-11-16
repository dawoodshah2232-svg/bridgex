/**
 * H08 — Integration ecosystem: category cards plus the published
 * trading-platform list. Trading platform names (MT4, MT5, DXTrade,
 * Match Trader, TradeLocker, Vertex, cTrader) are published on
 * bridgexapps.com (verified 16 Nov 2026) and may be named; every other
 * provider stays unnamed until its adapter is built, tested and signed
 * off. Five category cards in a hairline grid plus a navy "Talk to an
 * expert" card, then the honest note.
 *
 * Card grid (fix, 14 Nov): the old five-row text list read as a
 * document — the categories now carry FeatureIcon tiles in a visual
 * grid, matching the Reliability section's hairline pattern.
 */
import Link from "next/link";
import { asset } from "@/lib/paths";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import FeatureIcon from "../ui/FeatureIcon";
import Icon, { type IconName } from "../icons";

const CATEGORIES: { name: string; icon: IconName; text: string }[] = [
  {
    name: "Trading platforms",
    icon: "brokers",
    text: "MT4, MT5, DXTrade, Match Trader, TradeLocker, Vertex and cTrader — accounts, groups, symbols and trade feeds, connected to the CRM instead of living beside it.",
  },
  {
    name: "Payment providers",
    icon: "payments",
    text: "Card, bank and alternative payment methods behind one routing layer — with retry, approval and reconciliation built in.",
  },
  {
    name: "KYC & AML",
    icon: "shield",
    text: "Identity verification and screening providers plugged into onboarding — documents, checks and decisions in a single queue.",
  },
  {
    name: "Communications",
    icon: "mail",
    text: "Email, SMS and messaging connected to journeys and cases — so clients hear from you at the right moment, not from silence.",
  },
  {
    name: "Market data",
    icon: "chart",
    text: "Pricing and reference data feeding dashboards, statements and risk views — from the sources you already trust.",
  },
];

export default function IntegrationEcosystem() {
  return (
    // Tightened top (final polish, 14 Nov): with the Industries
    // section's tightened bottom above, the boundary gap is ~96px at
    // lg instead of ~192px (two full section paddings).
    <Section tone="mint" ariaLabel="Integration ecosystem" className="pt-10 sm:pt-12 lg:pt-12">
      <SectionIntro
        label="Integration ecosystem"
        heading={
          <>
            Connected to the tools{" "}
            <span className="font-sans font-semibold italic text-bx-teal-700">
              you already use.
            </span>
          </>
        }
        copy="BridgeX is built to coexist: adapters connect your trading platforms, payment providers and verification services through one event-driven layer — with retries, webhooks and an audit trail on every call."
      />

      <Reveal delay={0.1} className="mt-12 lg:mt-16">
        <figure>
          <img
            src={asset("/images/skyline-sunset.jpg")}
            alt="Trader on the phone at a desk with two laptops showing charts, seen from behind"
            width={1600}
            height={1067}
            loading="lazy"
            className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
          />
          <figcaption className="mt-3 text-sm text-bx-slate-500">
            One event-driven layer connects trading, payments, verification,
            communications and market data.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-12 lg:mt-16">
        <ul className="grid gap-px border border-bx-teal-500/30 bg-bx-teal-500/30 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <li key={cat.name} className="bg-bx-white">
              <Reveal delay={0.06 * i} className="h-full">
                {/* Hairline grid: tint, not lift — a translate would
                    break the grid lines. */}
                <div className="bx-card-tint group flex h-full flex-col p-7 sm:p-8">
                  {/* FeatureIcon centres its tile; self-start pulls it
                      left to match the card's left-aligned text. */}
                  <FeatureIcon icon={cat.icon} size="md" className="[&>*]:self-start" />
                  <h3 className="mt-5 font-sans text-xl font-bold text-bx-navy-900">
                    {cat.name}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-bx-slate-500">
                    {cat.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
          <li className="bg-bx-navy-900">
            <Reveal delay={0.3} className="h-full">
              <Link
                href="/company/contact"
                className="bx-card-tint-dark group flex h-full flex-col justify-between p-7 sm:p-8"
              >
                <div>
                  <FeatureIcon icon="send" tone="dark" size="md" className="[&>*]:self-start" />
                  <h3 className="mt-5 font-sans text-xl font-bold text-bx-white">
                    Talk to an expert
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-bx-slate-300/85">
                    Tell us which tools you run today — we will map the
                    adapters and the honest status of each one.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-teal-400">
                  Contact us
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          </li>
        </ul>

        <Reveal delay={0.1} className="mt-8">
          <p className="border border-bx-teal-600/50 bg-bx-white px-6 py-5 text-[15px] leading-relaxed text-bx-navy-900">
            <strong className="font-sans font-bold text-bx-teal-700">
              An honest note on integrations:{" "}
            </strong>
            the trading platforms above are the published connection list
            (bridgexapps.com, November 2026). Every other adapter is scoped
            per engagement: BridgeX claims no integration with any other
            named provider until it is built, tested and signed off with
            that provider — and every integration page on this site says
            exactly what is live, what is in sandbox, and what is planned.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
