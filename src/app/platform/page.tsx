/**
 * /platform — Platform overview (spec §8).
 * Dark cinematic hero, the interactive four-layer explorer, the shared
 * foundation, a client journey across the layers, and links into the
 * seven solutions that run on top.
 *
 * DARK HERO — the coordinator adds "/platform" to DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { FOUNDATION_ITEMS, PLATFORM_FAQS, PLATFORM_LAYERS } from "@/content/platform";
import { faqJsonLd, jsonLdString } from "@/lib/seo";
import PageHero from "@/components/platform/PageHero";
import LayerExplorer from "@/components/platform/LayerExplorer";
import { FaqSection, WorkflowSteps } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import GoldLineDivider from "@/components/ui/GoldLineDivider";
import CtaBand from "@/components/ui/CtaBand";
import Icon, { type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Platform Overview — Four Layers, One Connected Business",
  description:
    "Experience, operations, integrations and intelligence — four connected layers on one shared foundation of tenants, roles, workflows, events and audit.",
};

const PAINS = [
  {
    title: "Leads in one tool, accounts in another",
    text: "Sales works a CRM, operations works a back office, and nobody can say where a client actually stands without asking three people.",
  },
  {
    title: "Payments that reconcile at month-end",
    text: "Deposits and withdrawals are matched long after they happen, so breaks surface as surprises instead of exceptions.",
  },
  {
    title: "Partners paid from spreadsheets",
    text: "Commissions are calculated outside the system that holds the trades, and every payout round starts with an argument about the numbers.",
  },
  {
    title: "A client experience that says someone else's name",
    text: "Clients meet a generic portal while your brand — the one they chose — is nowhere in the room.",
  },
];

const JOURNEY = [
  {
    title: "Register",
    text: "A client registers in your branded room. The record is created once, in the shared data model.",
  },
  {
    title: "Verify",
    text: "Documents and checks run through the operations layer, with the case and its evidence in one place.",
  },
  {
    title: "Fund",
    text: "The wallet is funded through the integrations layer; the payment reconciles against the same record.",
  },
  {
    title: "Grow",
    text: "Partners earn, dashboards report and the intelligence layer shows what happened — from the same source.",
  },
];

const SOLUTIONS: { href: string; label: string; text: string; icon: IconName }[] = [
  {
    href: "/solutions/financial-crm",
    label: "Financial CRM",
    text: "Leads, contact 360 and pipelines.",
    icon: "crm",
  },
  {
    href: "/solutions/payment-orchestration",
    label: "Payment Orchestration",
    text: "Routing, retry and reconciliation.",
    icon: "payments",
  },
  {
    href: "/solutions/pamm-copy-trading",
    label: "PAMM & Copy Trading",
    text: "Strategies, allocations and fees.",
    icon: "pamm",
  },
  {
    href: "/solutions/ib-incentives",
    label: "IB & Incentive Management",
    text: "Hierarchies, ledgers and payouts.",
    icon: "ib",
  },
  {
    href: "/solutions/tradeops",
    label: "TradeOps Control Center",
    text: "Server operations with approval.",
    icon: "tradeops",
  },
  {
    href: "/solutions/digital-onboarding",
    label: "Digital Onboarding & KYC",
    text: "Adaptive journeys and verification.",
    icon: "onboarding",
  },
  {
    href: "/solutions/trading-contests",
    label: "Trading Contest Management",
    text: "Contests, rankings and prizes.",
    icon: "contests",
  },
];

export default function PlatformOverview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(faqJsonLd(PLATFORM_FAQS)),
        }}
      />
      <PageHero
        href="/platform"
        dark
        eyebrow="Platform"
        title={
          <>
            Four layers.{" "}
            <span className="font-display font-semibold italic text-bx-champagne">
              One connected business.
            </span>
          </>
        }
        copy="BridgeX is not four products bolted together. It is one platform organised as four layers — experience, operations, integrations and intelligence — all standing on the same foundation, reading from the same records."
        image={{
          src: "/images/hero-bridge.jpg",
          alt: "",
          width: 1920,
          height: 1080,
        }}
      />

      {/* The problem: disconnected tools */}
      <Section tone="ivory" ariaLabel="The cost of disconnected tools">
        <SectionIntro
          label="Why one platform"
          heading={
            <>
              Disconnected tools tax{" "}
              <span className="font-display font-semibold italic text-bx-maroon-700">
                every team.
              </span>
            </>
          }
          copy="A brokerage rarely fails for lack of software. It fails because the software does not agree with itself — and the reconciliation happens in people's heads, in spreadsheets, and in support tickets."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.08}>
              <div className="h-full border border-bx-gold-500/25 bg-bx-white p-6">
                <span className="font-sans text-sm font-bold tracking-[0.18em] text-bx-maroon-700">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-sans text-lg font-extrabold leading-tight text-bx-ink">
                  {pain.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bx-muted">{pain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The four layers — interactive explorer */}
      <Section tone="cream" id="layers" ariaLabel="The four platform layers">
        <SectionIntro
          label="The platform"
          heading="Four layers, each with its own job."
          copy="Select a layer to see what it does, what it holds, and where it leads. The layers are separated on purpose — so each can change without breaking the others — and connected through the foundation, so nothing is ever copied between them."
        />
        <div className="mt-12">
          <LayerExplorer />
        </div>
      </Section>

      {/* Shared foundation — dark */}
      <Section tone="maroon" id="foundation" ariaLabel="The shared foundation">
        <SectionIntro
          dark
          label="Cross-cutting model"
          heading={
            <>
              The foundation every layer{" "}
              <span className="font-display font-semibold italic text-bx-champagne">
                stands on.
              </span>
            </>
          }
          copy="Six capabilities run under everything in BridgeX. They are why a change made in one layer is visible to the others immediately — and why a permission set once applies everywhere."
        />
        <div className="mt-12 grid gap-px border border-bx-gold-500/25 bg-bx-gold-500/25 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDATION_ITEMS.map((item) => (
            <div key={item.title} className="bg-bx-maroon-900 p-6 sm:p-7">
              <Icon name={item.icon} size={28} className="text-bx-gold-400" />
              <h3 className="mt-4 font-sans text-lg font-extrabold leading-tight text-bx-ivory">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bx-champagne/85">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/platform/architecture"
            className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-gold-400 hover:text-bx-champagne"
          >
            See how the foundation is built — Architecture
            <Icon
              name="arrowRight"
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Section>

      {/* One journey across the layers */}
      <Section tone="ivory" ariaLabel="One client journey across the layers">
        <SectionIntro
          label="How it connects"
          heading="One client, one journey, four layers working together."
          copy="Follow a single client from first registration to a funded, growing relationship — and notice how many systems never get involved, because the layers share the record."
        />
        <div className="mt-12">
          <WorkflowSteps steps={JOURNEY} />
        </div>
        <Reveal delay={0.1} className="mt-12">
          <GoldLineDivider />
          <p className="mt-8 max-w-[68ch] text-base leading-relaxed text-bx-muted">
            At every step, the same record is being read and written: the
            client room shows it, operations works it, integrations move money
            against it, and intelligence reports on it. There is no nightly
            sync to drift, and no second copy of the truth.
          </p>
        </Reveal>
      </Section>

      {/* Solutions that run on the platform */}
      <Section tone="white" ariaLabel="Solutions built on the platform">
        <SectionIntro
          label="Built on the platform"
          heading="Seven capabilities, one connected core."
          copy="Each solution is a capability that runs on the four layers — adopt one, or adopt several, and they share the same clients, the same permissions and the same audit trail."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group flex items-start gap-4 border border-bx-gold-500/25 bg-bx-ivory p-5 transition-colors duration-200 hover:border-bx-gold-500/60 hover:bg-bx-cream"
            >
              <Icon name={solution.icon} size={28} className="mt-0.5 shrink-0 text-bx-gold-600" />
              <span>
                <span className="flex items-center gap-2 font-sans text-base font-extrabold leading-tight text-bx-ink">
                  {solution.label}
                  <Icon
                    name="arrowUpRight"
                    size={16}
                    className="text-bx-gold-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-bx-muted">
                  {solution.text}
                </span>
              </span>
            </Link>
          ))}
          <Link
            href="/platform/no-code-studio"
            className="group flex items-start gap-4 border border-bx-maroon-900 bg-bx-maroon-900 p-5 transition-colors duration-200 hover:bg-bx-maroon-800"
          >
            <Icon name="sliders" size={28} className="mt-0.5 shrink-0 text-bx-gold-400" />
            <span>
              <span className="flex items-center gap-2 font-sans text-base font-extrabold leading-tight text-bx-ivory">
                Configure it yourself
                <Icon
                  name="arrowUpRight"
                  size={16}
                  className="text-bx-gold-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-bx-champagne/85">
                No-Code Studio — shape objects, forms, workflows and journeys
                without code.
              </span>
            </span>
          </Link>
        </div>
        <p className="mt-8 text-sm text-bx-muted">
          Layer pages:{" "}
          {PLATFORM_LAYERS.map((layer, i) => (
            <span key={layer.href}>
              <Link href={layer.href} className="font-bold text-bx-maroon-700 hover:underline">
                {layer.name}
              </Link>
              {i < PLATFORM_LAYERS.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </Section>

      <FaqSection
        heading="Platform questions, answered plainly."
        copy="The questions decision-makers ask first — about adoption, coexistence, access and what happens when something fails."
        items={PLATFORM_FAQS}
        tone="cream"
      />

      <CtaBand
        heading="See the platform on your own workflows."
        copy="A private demo walks through the layers that matter to your business — with your client journeys, your providers and your questions, not a generic tour."
      />
    </>
  );
}
