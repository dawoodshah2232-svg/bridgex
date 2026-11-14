/**
 * H04 — Platform architecture: four connected layers, each clickable to its
 * platform page, over a shared foundation bar. Dark maroon section; a gold
 * trace line with node dots joins the layers on the left.
 */
import Link from "next/link";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import Icon, { layerIcon } from "../icons";

const LAYERS = [
  {
    href: "/platform/client-experience",
    slug: "client-experience",
    name: "Experience",
    tag: "What clients, partners and advisors touch",
    text: "Branded client rooms, partner portals and advisor interfaces — web and mobile, in your brand.",
  },
  {
    href: "/platform/financial-operations",
    slug: "financial-operations",
    name: "Operations",
    tag: "How the business runs day to day",
    text: "Accounts, wallets, payments, service cases and approvals — one queue, one record, one audit trail.",
  },
  {
    href: "/platform/integrations",
    slug: "integrations",
    name: "Integrations",
    tag: "How BridgeX talks to the rest of your stack",
    text: "Adapters for trading platforms, payment providers, KYC and market data, with webhooks and retries.",
  },
  {
    href: "/platform/analytics",
    slug: "analytics",
    name: "Intelligence",
    tag: "How you see what is happening",
    text: "Executive dashboards, partner and sales funnels, exception queues and audit-ready reporting.",
  },
];

const FOUNDATION = [
  "Tenant separation",
  "Shared data model",
  "Roles & permissions",
  "Workflow engine",
  "Events & webhooks",
  "Audit logging",
];

export default function ArchitectureDiagram() {
  return (
    <Section tone="maroon" ariaLabel="Platform architecture">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionIntro
            dark
            label="Platform architecture"
            heading={
              <>
                Four layers.{" "}
                <span className="font-display font-semibold italic text-bx-champagne">
                  One foundation.
                </span>
              </>
            }
            copy="Everything in BridgeX sits on the same foundation: one tenant model, one data model, one set of roles and one audit log. Layers connect through it — never around it."
          />
          <Reveal delay={0.15} className="mt-8">
            <Link
              href="/platform/architecture"
              className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-gold-400 hover:text-bx-champagne"
            >
              Explore the architecture
              <Icon
                name="arrowRight"
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="relative">
            {/* Gold trace line joining the layers — centred on the node
                diamonds (1px border + 24/28px padding + half the 14px
                diamond = 32px mobile, 36px from sm). */}
            <span
              aria-hidden="true"
              className="absolute bottom-6 left-[32px] top-6 w-px bg-bx-gold-500/50 sm:left-[36px]"
            />
            <ol>
            {LAYERS.map((layer, i) => (
              <li key={layer.href} className="relative pb-4 last:pb-0">
                <Reveal delay={0.08 * i}>
                  <Link
                    href={layer.href}
                    className="group flex gap-5 border border-bx-gold-500/25 bg-bx-maroon-950/60 p-6 transition-colors duration-200 hover:border-bx-gold-500/70 hover:bg-bx-maroon-800/80 sm:gap-7 sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="relative z-10 mt-1.5 block h-3.5 w-3.5 shrink-0 rotate-45 border-2 border-bx-gold-400 bg-bx-maroon-900 transition-colors duration-200 group-hover:bg-bx-gold-400"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-sans text-xl font-bold text-bx-ivory sm:text-2xl">
                          {layer.name}
                        </span>
                        <span className="text-sm text-bx-champagne/70">
                          {layer.tag}
                        </span>
                      </span>
                      <span className="mt-2 block text-[15px] leading-relaxed text-bx-champagne/85">
                        {layer.text}
                      </span>
                    </span>
                    <span className="mt-1 flex shrink-0 flex-col items-center gap-2">
                      <Icon
                        name={layerIcon(layer.slug)}
                        size={28}
                        className="text-bx-gold-400"
                      />
                      <Icon
                        name="arrowUpRight"
                        size={22}
                        className="text-bx-gold-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
            </ol>
          </div>

          {/* Shared foundation */}
          <Reveal delay={0.35} className="mt-6">
            <div className="border border-bx-gold-500/40 bg-bx-maroon-800/50 p-6 sm:p-7">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-gold-400">
                Shared foundation
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                {FOUNDATION.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[15px] text-bx-ivory"
                  >
                    <Icon name="check" size={16} className="text-bx-gold-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
