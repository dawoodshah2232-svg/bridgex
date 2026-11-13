/**
 * H08 — Integration ecosystem: category badges ONLY. No provider logos,
 * no provider names — BridgeX claims no integration until it is built,
 * tested and signed off. Five category rows, then the honest note.
 */
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";

const CATEGORIES = [
  {
    name: "Trading platforms",
    text: "Adapters for the trading platforms your clients use — accounts, groups, symbols and trade feeds, connected to the CRM instead of living beside it.",
  },
  {
    name: "Payment providers",
    text: "Card, bank and alternative payment methods behind one routing layer — with retry, approval and reconciliation built in.",
  },
  {
    name: "KYC & AML",
    text: "Identity verification and screening providers plugged into onboarding — documents, checks and decisions in a single queue.",
  },
  {
    name: "Communications",
    text: "Email, SMS and messaging connected to journeys and cases — so clients hear from you at the right moment, not from silence.",
  },
  {
    name: "Market data",
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

      <div className="mt-12 lg:mt-16">
        <ul className="divide-y divide-bx-gold-500/25 border-y border-bx-gold-500/25">
          {CATEGORIES.map((cat, i) => (
            <li key={cat.name}>
              <Reveal delay={0.06 * i}>
                <div className="grid gap-2 py-7 sm:grid-cols-12 sm:gap-8">
                  <h3 className="font-sans text-xl font-bold text-bx-ink sm:col-span-4 sm:text-2xl">
                    {cat.name}
                  </h3>
                  <p className="max-w-[68ch] text-base leading-relaxed text-bx-muted sm:col-span-8">
                    {cat.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
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
