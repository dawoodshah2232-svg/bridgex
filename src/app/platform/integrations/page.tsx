/**
 * /platform/integrations — Integrations (spec §8).
 * Dark photographic hero, category explorer (provider CATEGORIES, plus
 * the published trading-platform list — MT4, MT5, DXTrade, Match
 * Trader, TradeLocker, Vertex, cTrader, verified on bridgexapps.com
 * 16 Nov 2026; no other named providers, no logos, no unverified
 * claims), adapter architecture, event/webhook retry model, and an
 * honest "what we do not claim" panel.
 *
 * DARK HERO — the coordinator adds "/platform/integrations" to
 * DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { INTEGRATIONS_FAQS } from "@/content/platform-studio";
import PageHero from "@/components/platform/PageHero";
import IntegrationExplorer from "@/components/platform/IntegrationExplorer";
import { FaqSection } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";
import Icon, { type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations — Adapters for Trading, Payments, KYC & Market Data",
  description:
    "Provider categories, adapter architecture and an event/webhook retry model — with sandbox-first testing and no claim to any integration that has not been signed and tested.",
};

const ADAPTER_STEPS = [
  {
    title: "One contract per category",
    text: "Each provider category works to a defined adapter contract: what it sends, what it expects back, and what happens when either side fails. A new provider is a new adapter against that contract — not a new integration project from scratch.",
  },
  {
    title: "Configuration, not custom code",
    text: "Credentials, endpoints, routing rules and field mappings are configuration, held per tenant and per environment. Swapping a provider changes configuration — it does not rewrite your workflows.",
  },
  {
    title: "Every run is logged",
    text: "Synchronisation runs, webhook deliveries and API calls are recorded with their outcome. When something does not match, the log shows what was sent, what came back, and when — so a mismatch is investigated, not guessed at.",
  },
];

const RETRY_STEPS = [
  {
    step: "01",
    title: "Event emitted",
    text: "A meaningful change — client verified, payment settled, commission approved — emits an event from the shared foundation.",
  },
  {
    step: "02",
    title: "Delivered with a signature",
    text: "Webhooks carry a signature the receiver can verify, so a connected system knows the event genuinely came from BridgeX.",
  },
  {
    step: "03",
    title: "Retried on failure",
    text: "If delivery fails, it is retried on a schedule with backoff. Each attempt is recorded — attempts, responses and timing.",
  },
  {
    step: "04",
    title: "Dead-lettered, never lost",
    text: "After the retry schedule is exhausted, the event lands in a dead-letter queue with its full payload and error, for an operator to inspect and replay.",
  },
];

const HONESTY = [
  {
    title: "No named providers on this page",
    text: "You will not find provider names or logos here — deliberately. An integration is only real once it has been configured and tested for a specific deployment, and a logo would claim otherwise.",
  },
  {
    title: "No integration is 'live' until it is proven",
    text: "Every connection goes through sandbox testing and reconciliation before it carries live records. Until that process passes, it is not presented as available.",
  },
  {
    title: "Feasibility depends on the provider",
    text: "Whether a specific provider can be connected depends on its own API, its terms and its test environment. We assess that during implementation and say so plainly if the answer is no.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        href="/platform/integrations"
        dark
        eyebrow="Platform · Integrations layer"
        title={
          <>
            Connected to your stack —{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              honestly connected.
            </span>
          </>
        }
        copy="BridgeX talks to trading platforms, payment providers, identity verification, communications and market data through adapters with defined contracts — tested in a sandbox before they touch real data, and never claimed before they are proven."
        image={{
          src: "/images/hero-skyline-sf.jpg",
          alt: "Multi-monitor trading desk showing candlestick and line charts",
          width: 1920,
          height: 1281,
        }}
      />

      {/* Category explorer */}
      <Section tone="mint" id="categories" ariaLabel="Integration categories">
        <SectionIntro
          label="Provider categories"
          heading="Five categories. One adapter model."
          copy="Select a category to see what its adapters handle and what a connection requires. We describe categories, not provider logos — because the honest unit of an integration is the contract it works to, not the logo on the slide. The trading platforms themselves are published, and named below."
        />
        <Reveal delay={0.1} className="mt-12">
          <IntegrationExplorer />
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <p className="border border-bx-teal-600/50 bg-bx-white px-6 py-5 text-[15px] leading-relaxed text-bx-navy-900">
            <strong className="font-sans font-bold text-bx-teal-700">
              Trading platforms BridgeX connects to:{" "}
            </strong>
            MT4, MT5, DXTrade, Match Trader, TradeLocker, Vertex and cTrader
            — as published on bridgexapps.com, November 2026. Other providers
            are named only once their adapter is built, tested and signed off.
          </p>
        </Reveal>
      </Section>

      {/* Adapter architecture — diagram in code */}
      <Section tone="white" id="adapters" ariaLabel="Adapter architecture">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionIntro
              label="Adapter architecture"
              heading="One model for every connection."
              copy="Adapters are the only way in or out. Nothing talks to a provider directly from a screen or a workflow — every call passes through an adapter that enforces the contract, logs the run and handles failure the same way."
            />
            <div className="mt-10 space-y-8">
              {ADAPTER_STEPS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex gap-5 border-t border-bx-teal-500/30 pt-6">
                    <span className="font-sans text-sm font-bold tracking-[0.18em] text-bx-teal-700">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-bx-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Diagram: BridgeX core ↔ adapters ↔ provider categories */}
          <Reveal delay={0.12} className="lg:col-span-6">
            <div className="border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-teal-700">
                How a connection is shaped
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-0 text-center">
                <div className="border border-bx-navy-900 bg-bx-navy-900 px-4 py-4">
                  <p className="font-sans text-base font-extrabold text-bx-white">
                    BridgeX core
                  </p>
                  <p className="mt-1 text-sm text-bx-slate-300/85">
                    Shared data model · Workflows · Events · Audit
                  </p>
                </div>
                <div aria-hidden="true" className="mx-auto h-8 w-px bg-bx-teal-500" />
                <div className="border border-bx-teal-600 bg-bx-mint-50 px-4 py-4">
                  <p className="font-sans text-base font-extrabold text-bx-navy-900">
                    Adapter layer
                  </p>
                  <p className="mt-1 text-sm text-bx-slate-500">
                    Contract · Mapping · Retry · Logging · Signatures
                  </p>
                </div>
                <div aria-hidden="true" className="mx-auto h-8 w-px bg-bx-teal-500" />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {(
                    [
                      ["Trading platforms", "brokers"],
                      ["Payment providers", "payments"],
                      ["KYC & AML", "shield"],
                      ["Communications", "mail"],
                      ["Market data", "chart"],
                      ["External CRM", "crm"],
                    ] as [string, IconName][]
                  ).map(([label, icon]) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-2 border border-bx-teal-500/30 bg-bx-white rounded-2xl px-2 py-3 font-sans text-sm font-bold text-bx-navy-900"
                    >
                      <Icon name={icon} size={22} className="text-bx-teal-600" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-bx-slate-500">
                Provider categories are shown, never provider names or logos.
                Each box is a category of connection, configured per tenant and
                proven in a sandbox before it goes live.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Photographic interlude — adapters are the only way in or out */}
      <PhotoBand
        image="/images/band-skyline-kl.jpg"
        alt="Two laptops showing trading charts with a hand holding a phone"
        eyebrow="Adapter architecture"
        heading={
          <>
            Adapters are{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              the only way in or out.
            </span>
          </>
        }
        copy="Nothing talks to a provider directly from a screen or a workflow — every call passes through an adapter that enforces the contract, logs the run and handles failure the same way."
        height="sm"
        imageWidth={1600}
        imageHeight={1067}
      />

      {/* Event / webhook retry model — dark */}
      <Section tone="navy" id="events" ariaLabel="Event and webhook retry model">
        <SectionIntro
          dark
          label="Events & webhooks"
          heading={
            <>
              When delivery fails,{" "}
              <span className="font-sans font-semibold italic text-bx-teal-400">
                nothing is lost.
              </span>
            </>
          }
          copy="Integrations fail — networks drop, providers go down, receivers are slow. The retry model treats failure as a normal event with a defined path, not as an emergency and never as silence."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RETRY_STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="h-full border-t-2 border-bx-teal-500 pt-5">
                <span className="font-sans text-sm font-bold tracking-[0.18em] text-bx-teal-400">
                  {step.step}
                </span>
                <h3 className="mt-2 font-sans text-lg font-extrabold leading-tight text-bx-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-300/85">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-[68ch] text-base leading-relaxed text-bx-slate-300/85">
            Idempotency is part of the contract: a retried delivery does not
            double-post a payment or duplicate a record. Financially material
            actions are designed to be safe to retry — because in production,
            they will be.
          </p>
        </Reveal>
      </Section>

      {/* What we do not claim */}
      <Section tone="white" ariaLabel="What we do not claim">
        <SectionIntro
          label="Honest limits"
          heading="What we do not claim — and why it matters."
          copy="An integration page that lists logos is making promises on behalf of other companies' systems. We would rather describe the categories, the contracts and the testing — and let the demo prove the connection you actually need."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {HONESTY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6">
                <Icon name="shield" size={26} className="text-bx-teal-600" />
                <h3 className="mt-4 font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-500">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-[68ch] text-base leading-relaxed text-bx-slate-500">
            Connections are assessed and built during implementation — see{" "}
            <Link href="/services/integration-migration" className="font-bold text-bx-teal-700 hover:underline">
              Integration &amp; Migration
            </Link>{" "}
            — and the event and API model is part of the{" "}
            <Link href="/platform/architecture" className="font-bold text-bx-teal-700 hover:underline">
              architecture
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <FaqSection
        heading="Integration questions, answered plainly."
        copy="Which providers, what happens when a webhook fails, and how a connection is proven before it goes live."
        items={INTEGRATIONS_FAQS}
        tone="mint"
      />

      <CtaBand
        heading="Bring your providers to the demo."
        copy="Tell us which trading platforms, payment providers and verification services you run on. A private demo maps them against the adapter model — and says plainly what connects, what needs work, and what does not."
      />
    </>
  );
}
