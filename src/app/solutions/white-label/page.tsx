/**
 * White-Label Solutions — solution-style page (rework, 16 Nov 2026).
 *
 * Content is held in this file (src/content/solutions.ts is owned by
 * the coordinator and is not edited here). All facts are as published
 * on bridgexapps.com, November 2026 (verified live 16 Nov 2026) —
 * no clients, testimonials, awards, stats or offices are claimed.
 *
 * Hero: InnerHero dark (photographic, dark) rather than SolutionHero,
 * because this page has no interactive preview — SolutionHero's
 * "See the preview" button would point at an anchor that does not
 * exist. DARK HERO: coordinator adds /solutions/white-label to
 * DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import type { RelatedLink, WorkflowStep } from "@/content/solutions";
import type { FaqItem } from "@/components/ui/FaqAccordion";
import { WHITE_LABEL_ADD_ONS } from "@/content/pricing";
import InnerHero from "@/components/company/InnerHero";
import {
  FaqSection,
  RelatedSolutions,
  WorkflowSteps,
} from "@/components/solutions/shared";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { TealRule } from "@/components/ui/TealLineDivider";
import PhotoBand from "@/components/ui/PhotoBand";
import ImageText from "@/components/ui/ImageText";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Icon, { type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "White-Label Solutions — Your Brand, Your Domain, Your Pricing",
  description:
    "Sell BridgeX under your own brand, with your own pricing, on your own domain. The complete brokerage platform, rebranded as yours — we stay invisible.",
};

const SOURCE_NOTE =
  "Pricing and partner terms as published on bridgexapps.com, November 2026.";

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: "Your brand",
    copy: "Your logo, colours and name on every client-facing surface.",
  },
  {
    title: "Your domain",
    copy: "Clients reach the platform on your own domain.",
  },
  {
    title: "Your pricing",
    copy: "You set the prices your clients pay.",
  },
  {
    title: "Your clients",
    copy: "You own the client relationship, end to end.",
  },
  {
    title: "Our technology",
    copy: "We provide the technology and infrastructure behind the scenes.",
  },
  {
    title: "Our support",
    copy: "We provide the support behind the scenes — invisible to your clients.",
  },
];

const WORKFLOW_ICONS: IconName[] = [
  "experience",
  "globe",
  "wallet",
  "users",
  "operations",
  "headset",
];

const PARTNER_MODELS: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Technology partner",
    description: "Native integrations, open APIs — your product connecting to the brokerage platform.",
    icon: "ecosystem",
  },
  {
    title: "Referral partner",
    description: "Introduce a business that fits BridgeX, and earn commission for life.",
    icon: "link",
  },
  {
    title: "Implementation partner",
    description: "Turn-key setup, migration and training for clients adopting BridgeX.",
    icon: "workflow",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "Will my clients ever see the BridgeX name?",
    answer:
      "No. Our team stays completely invisible to your clients. They see your brand, on your domain, at your pricing — BridgeX provides the technology, infrastructure and support behind the scenes.",
  },
  {
    question: "What do I own as a white-label partner?",
    answer:
      "You own the client relationship, the pricing and the brand. The platform, its infrastructure and its support run behind the scenes under your name.",
  },
  {
    question: "How does the partner earning work?",
    answer:
      "BridgeX white-label partners earn 30% of every new client account activated — for the lifetime of the account. That is the published term; the full arrangement is agreed directly with us, so book a demo to talk it through.",
  },
  {
    question: "What does it cost to start?",
    answer:
      "The published white-label add-ons are Custom domain $9/mo, Branded Client Portal $49/mo, Custom Branding $49/mo and TechX Grey-label MT5 $149/mo. The Forex suite itself starts at $499/mo — see Pricing — with a 14-day free trial and no setup fee. The full white-label arrangement is agreed directly with us, so book a demo rather than guessing at a figure here.",
  },
  {
    question: "Which trading platforms can I offer my clients?",
    answer:
      "BridgeX connects to MT4, MT5, DXTrade, Match Trader, TradeLocker, Vertex and cTrader. The TechX Grey-label MT5 add-on ($149/mo) puts MT5 under your brand.",
  },
];

const RELATED: RelatedLink[] = [
  { href: "/company/partners", label: "Partner With Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/platform/client-experience", label: "Client Experience" },
];

export default function WhiteLabelPage() {
  return (
    <>
      <InnerHero
        href="/solutions/white-label"
        eyebrow="Solutions · White-Label"
        title={
          <>
            Your brand. Your domain.{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              Your pricing.
            </em>
          </>
        }
        copy="Sell BridgeX under your own brand, with your own pricing, on your own domain. The complete brokerage platform, rebranded as yours — we stay invisible."
        dark
        image="/images/hero-skyline-sf.jpg"
        imageAlt="Multi-monitor trading desk showing candlestick and line charts"
        imageWidth={1920}
        imageHeight={1281}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/book-demo" size="lg">
            Book a Private Demo
          </ButtonLink>
          <ButtonLink href="#partner-models" variant="secondaryLight" size="lg" arrow={false}>
            See the partner models
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-bx-slate-300/80">
          {SOURCE_NOTE}
        </p>
      </InnerHero>

      {/* (1) What you get — the platform, rebranded as yours */}
      <ImageText
        image="/images/generated/white-label-portal.png"
        alt="The same client portal shown twice — once in a teal brand theme, once in dark navy — both branded YourBrand"
        eyebrow="What you get"
        heading={
          <>
            The complete brokerage platform,{" "}
            <em className="font-sans font-semibold italic text-bx-teal-700">
              rebranded as yours.
            </em>
          </>
        }
        copy="White-label reselling means the whole BridgeX suite under your name. You own the client relationship, the pricing and the brand — your clients never meet us."
        bullets={[
          "Your brand on every client-facing surface",
          "Your own domain, your own pricing",
          "The full brokerage suite behind it — CRM, trading, payments, partners",
        ]}
        tone="white"
        imageWidth={1920}
        imageHeight={1280}
        eager
      />

      {/* The white-label building blocks, with published add-on prices */}
      <Section tone="mint" ariaLabel="White-label add-ons">
        <SectionIntro
          label="The building blocks"
          heading="Branding, priced by the piece."
          copy="The white-label add-ons, at their published monthly prices. Add the pieces your brand needs — nothing more."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHITE_LABEL_ADD_ONS.map((addOn, i) => (
            <Reveal key={addOn.name} delay={(i % 4) * 0.05} className="h-full">
              <article className="bx-card-hover flex h-full flex-col border border-bx-navy-900/15 bg-bx-white p-7">
                <FeatureIcon icon={addOn.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {addOn.name}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-bx-slate-500">
                  {addOn.description}
                </p>
                <p className="mt-6 border-t border-bx-teal-500/30 pt-5 font-sans text-3xl font-extrabold tracking-[-0.02em] text-bx-navy-900">
                  ${addOn.monthly}
                  <span className="ml-1 font-sans text-base font-bold text-bx-slate-500">
                    /month
                  </span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* (2) How it works — you own the business, we run the platform */}
      <WorkflowSteps
        label="How it works"
        heading="You run the business. We run the platform."
        copy="You own the client relationship, the pricing and the brand — we provide the technology, infrastructure and support behind the scenes."
        steps={WORKFLOW_STEPS}
        dark
        icons={WORKFLOW_ICONS}
      />

      {/* (3) Partner earning — the published 30% term */}
      <Section tone="white" ariaLabel="Partner earning">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionIntro
              label="Partner earning"
              heading="Earn on every account you activate."
              copy="The white-label partner term, as published: BridgeX white-label partners earn 30% of every new client account activated — for the lifetime of the account. The full arrangement is agreed directly with us."
            />
            <div className="mt-8">
              <ButtonLink href="/book-demo" variant="secondary">
                Talk through the terms
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border border-bx-teal-500/40 bg-bx-mint-50 px-8 py-10 text-center sm:px-10">
              <p className="font-sans text-7xl font-extrabold tracking-[-0.03em] text-bx-teal-600 sm:text-8xl">
                30%
              </p>
              <p className="mx-auto mt-4 max-w-[40ch] font-body text-base leading-relaxed text-bx-navy-900">
                of every new client account activated — for the lifetime of
                the account.
              </p>
              <TealRule />
              <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
                The published white-label partner term.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <PhotoBand
        image="/images/band-skyline-hongkong.jpg"
        alt="Hand gesturing at a candlestick chart on a dark trading monitor"
        eyebrow="White-label"
        heading="Your brand in front. BridgeX behind the scenes."
        copy="Our team stays completely invisible to your clients — the platform, the infrastructure and the support all run under your name."
        height="sm"
        imageWidth={1600}
        imageHeight={900}
      >
        <ButtonLink href="/book-demo">Book a Private Demo</ButtonLink>
      </PhotoBand>

      {/* (4) The other partner models */}
      <Section tone="mint" id="partner-models" ariaLabel="Other partner models">
        <SectionIntro
          label="More ways to partner"
          heading="Not a reseller? There are other ways in."
          copy="White-label is one of four partner models. Whichever route fits, the shape is the same: a real conversation first, and terms agreed in writing."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PARTNER_MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 0.07} className="h-full">
              <Link
                href="/company/partners"
                className="bx-card-hover group flex h-full flex-col border border-bx-navy-900/15 bg-bx-white p-7 hover:bg-bx-mint-50"
              >
                <FeatureIcon icon={model.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {model.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-bx-slate-500">
                  {model.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-extrabold text-bx-teal-700">
                  Explore partnerships
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* (5) FAQ — honest answers only, the rest goes to Book a Demo */}
      <FaqSection faqs={FAQS} tone="white" />

      <RelatedSolutions related={RELATED} />
      <CtaBand
        heading="Sell BridgeX under your own brand."
        copy="Book a private demo and talk through the white-label arrangement, the branding options and the partner terms — on your own workflows."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/company/contact"
      />
    </>
  );
}
