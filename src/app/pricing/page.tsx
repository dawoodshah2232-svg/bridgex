/**
 * Pricing — the Forex suite, BriX AI and build-your-package pricing,
 * as published on bridgexapps.com, November 2026 (verified live
 * 16 Nov 2026). No tier is marked "most popular" — bridgexapps.com
 * does not say so. No feature lists are invented for tiers whose
 * comparison details were not published.
 *
 * Light hero (InnerHero light variant) — NOT a dark hero route.
 */
import type { Metadata } from "next";
import Link from "next/link";
import {
  BRIX_TIERS,
  BUILD_YOUR_PACKAGE,
  FOREX_TIERS,
  PRICING_SOURCE,
} from "@/content/pricing";
import { asset } from "@/lib/paths";
import InnerHero from "@/components/company/InnerHero";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { TealRule } from "@/components/ui/TealLineDivider";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — Simple, Transparent Pricing",
  description:
    "Simple, transparent pricing for the BridgeX Forex suite, BriX AI and build-your-package apps. No hidden fees. No setup costs. Cancel anytime. 14-day free trial.",
};

const fmt = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function PricingPage() {
  return (
    <>
      <InnerHero
        href="/pricing"
        eyebrow="Pricing"
        title={
          <>
            Simple, transparent pricing.{" "}
            <em className="font-sans font-semibold italic text-bx-teal-700">
              No hidden fees.
            </em>
          </>
        }
        copy="No hidden fees. No setup costs. Cancel anytime. Every plan starts with a 14-day free trial — the Forex suite, BriX AI, or a package you build app by app."
        image="/images/payments-contactless.jpg"
        imageAlt="Laptop with trading charts beside euro banknotes, coins and a calculator"
        imageWidth={1600}
        imageHeight={1067}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/book-demo" size="lg">
            Book a Private Demo
          </ButtonLink>
          <ButtonLink href="#build-your-package" variant="secondary" size="lg" arrow={false}>
            Build your package
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-bx-slate-500">
          {PRICING_SOURCE}
        </p>
      </InnerHero>

      {/* Forex suite — monthly and annual on every card */}
      <Section tone="mint" id="forex-suite" ariaLabel="Forex suite pricing">
        <SectionIntro
          label="Forex suite"
          heading="One suite, four sizes."
          copy="Monthly or annual — annual billing saves 15%. Every tier starts with a 14-day free trial, and there is no setup fee."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOREX_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={(i % 4) * 0.05} className="h-full">
              <article className="bx-card-hover flex h-full flex-col border border-bx-navy-900/15 bg-bx-white p-7">
                <FeatureIcon icon={tier.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {tier.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-bx-slate-500">
                  {tier.scope}
                </p>
                <div className="mt-6 border-t border-bx-teal-500/30 pt-6">
                  <p className="font-sans text-4xl font-extrabold tracking-[-0.02em] text-bx-navy-900">
                    {fmt(tier.monthly)}
                    <span className="ml-1 font-sans text-base font-bold text-bx-slate-500">
                      /month
                    </span>
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-bx-slate-500">
                    or {fmt(tier.annual)} /year, billed annually —{" "}
                    <span className="font-sans font-bold text-bx-teal-700">
                      save 15%
                    </span>
                  </p>
                </div>
                <div className="mt-6 flex-1" />
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-2 font-sans text-sm font-extrabold text-bx-teal-700"
                >
                  Book a demo
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-12">
          <figure>
            <img
              src={asset("/images/generated/dashboard-trading.png")}
              alt="Illustrated trading dashboard: XAUUSD candlestick chart with Balance and Equity cards"
              width={1920}
              height={1280}
              loading="lazy"
              className="h-auto w-full border border-bx-navy-900/15 bg-bx-white"
            />
            <figcaption className="mt-3 text-sm text-bx-slate-500">
              Illustrated dashboard — trading, balance and equity in one
              view. The Forex suite, whatever size you buy it at.
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* BriX AI — names and prices only; no invented feature lists */}
      <Section tone="white" id="brix-ai" ariaLabel="BriX AI pricing">
        <SectionIntro
          label="BriX AI"
          heading="AI assistance, priced by tier."
          copy="Four BriX AI tiers, from $49 to $299 a month. See bridgexapps.com for the full comparison — or book a demo and we will walk through which tier fits your volume."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BRIX_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={(i % 4) * 0.05} className="h-full">
              <article className="bx-card-hover flex h-full flex-col border border-bx-navy-900/15 bg-bx-white p-7">
                <FeatureIcon icon={tier.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {tier.name}
                </h3>
                <p className="mt-6 border-t border-bx-teal-500/30 pt-6 font-sans text-4xl font-extrabold tracking-[-0.02em] text-bx-navy-900">
                  {fmt(tier.monthly)}
                  <span className="ml-1 font-sans text-base font-bold text-bx-slate-500">
                    /month
                  </span>
                </p>
                <div className="mt-6 flex-1" />
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center gap-2 font-sans text-sm font-extrabold text-bx-teal-700"
                >
                  Book a demo
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-[15px] leading-relaxed text-bx-slate-500">
          Full tier comparison lives on{" "}
          <a
            href="https://bridgexapps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-bold text-bx-teal-700 underline underline-offset-2 hover:text-bx-teal-600"
          >
            bridgexapps.com
          </a>
          .
        </p>
      </Section>

      {/* Build your package — per-app pricing, grouped by price */}
      <Section tone="mint" id="build-your-package" ariaLabel="Build your package pricing">
        <SectionIntro
          label="Build your package"
          heading="Pick the apps. Pay per app."
          copy="Prefer to build your own package? Each app is priced per month, grouped below. Talk to us in a demo about the combination that fits your business."
        />
        <Reveal delay={0.1} className="mt-12">
          <figure>
            <img
              src={asset("/images/bridgexapps/marketplace-banner-1.webp")}
              alt="Illustrated app marketplace: a small storefront surrounded by floating app-icon tiles"
              width={1683}
              height={467}
              loading="lazy"
              className="h-auto w-full border border-bx-navy-900/15 bg-bx-white"
            />
            <figcaption className="mt-3 text-sm text-bx-slate-500">
              Every app in the suite, priced per month — pick the ones your
              business needs. Marketplace artwork from bridgexapps.com.
            </figcaption>
          </figure>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {BUILD_YOUR_PACKAGE.map((group, i) => (
            <Reveal key={group.price} delay={(i % 2) * 0.07} className="h-full">
              <article className="bx-card-hover flex h-full flex-col border border-bx-navy-900/15 bg-bx-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <FeatureIcon icon={group.icon} size="sm" className="items-start" />
                  <p className="text-right font-sans text-3xl font-extrabold tracking-[-0.02em] text-bx-navy-900">
                    {fmt(group.price)}
                    <span className="ml-1 font-sans text-base font-bold text-bx-slate-500">
                      /month
                    </span>
                    <span className="block font-body text-sm font-normal leading-relaxed text-bx-slate-500">
                      per app
                    </span>
                  </p>
                </div>
                <TealRule />
                <ul
                  className={`mt-5 grid gap-x-6 gap-y-2.5 ${
                    group.apps.length > 4 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {group.apps.map((app) => (
                    <li
                      key={app}
                      className="flex items-start gap-2.5 font-body text-[15px] leading-relaxed text-bx-navy-900"
                    >
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-bx-teal-600">
                        <Icon name="check" size={16} />
                      </span>
                      {app}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Every plan includes — only the three published facts */}
      <Section tone="white" ariaLabel="Every plan includes">
        <SectionIntro
          label="Every plan"
          heading="Included, on every plan."
          copy="The same honest terms whichever way you buy — suite, BriX AI, or app by app."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: "clock" as const,
              title: "14-day free trial",
              copy: "Two weeks to try the platform on your own workflows before you pay anything.",
            },
            {
              icon: "checkCircle" as const,
              title: "No setup fee",
              copy: "No setup costs, on any plan — the price you see is the price you pay.",
            },
            {
              icon: "refresh" as const,
              title: "Cancel anytime",
              copy: "No lock-in. If BridgeX stops fitting, you stop paying.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col border border-bx-teal-500/30 bg-bx-white p-7">
                <FeatureIcon icon={item.icon} size="sm" className="items-start" />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-bx-slate-500">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="See the price work for your business."
        copy="Book a private demo and talk through the tier, the apps and the billing that fit — on your own workflows, with the numbers in front of you."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/company/contact"
      />
    </>
  );
}
