/**
 * H08 — Integration ecosystem: category badges ONLY. No provider logos,
 * no provider names — BridgeX claims no integration until it is built,
 * tested and signed off. Five category cards in a hairline grid plus a
 * maroon "Talk to an expert" card, then the honest note.
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
    text: "Adapters for the trading platforms your clients use — accounts, groups, symbols and trade feeds, connected to the CRM instead of living beside it.",
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
    <Section tone="cream" ariaLabel="Integration ecosystem">
      <SectionIntro
        label="Integration ecosystem"
        heading={
          <>
            Connected to the tools{" "}
            <span className="font-display font-semibold italic text-bx-maroon-700">
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
            alt="City skyline at sunset"
            width={1600}
            height={899}
            loading="lazy"
            className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
          />
          <figcaption className="mt-3 text-sm text-bx-muted">
            One event-driven layer connects trading, payments, verification,
            communications and market data.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-12 lg:mt-16">
        <ul className="grid gap-px border border-bx-gold-500/30 bg-bx-gold-500/30 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <li key={cat.name} className="bg-bx-ivory">
              <Reveal delay={0.06 * i} className="h-full">
                <div className="flex h-full flex-col p-7 sm:p-8">
                  {/* FeatureIcon centres its tile; self-start pulls it
                      left to match the card's left-aligned text. */}
                  <FeatureIcon icon={cat.icon} size="md" className="[&>*]:self-start" />
                  <h3 className="mt-5 font-sans text-xl font-bold text-bx-ink">
                    {cat.name}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-bx-muted">
                    {cat.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
          <li className="bg-bx-maroon-900">
            <Reveal delay={0.3} className="h-full">
              <Link
                href="/company/contact"
                className="group flex h-full flex-col justify-between p-7 transition-colors duration-200 hover:bg-bx-maroon-800 sm:p-8"
              >
                <div>
                  <FeatureIcon icon="send" tone="dark" size="md" className="[&>*]:self-start" />
                  <h3 className="mt-5 font-sans text-xl font-bold text-bx-ivory">
                    Talk to an expert
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-bx-champagne/85">
                    Tell us which tools you run today — we will map the
                    adapters and the honest status of each one.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-gold-400">
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
          <p className="border border-bx-gold-600/50 bg-bx-ivory px-6 py-5 text-[15px] leading-relaxed text-bx-ink">
            <strong className="font-sans font-bold text-bx-maroon-700">
              An honest note on integrations:{" "}
            </strong>
            adapters are scoped per engagement. BridgeX claims no integration
            with any named provider until it is built, tested and signed off
            with that provider — and every integration page on this site says
            exactly what is live, what is in sandbox, and what is planned.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
