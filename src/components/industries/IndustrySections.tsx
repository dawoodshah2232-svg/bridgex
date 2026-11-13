/**
 * IndustrySections — the shared body sections for industry pages.
 *
 * Each section has 2–3 layout variants, chosen per industry in the
 * content file, so the nine pages read as siblings — not copies.
 *
 * - Challenges: "numbered" (editorial numbered list), "grid" (cards),
 *   "split" (sticky intro, hairline-divided list).
 * - Module map: "rows" (linked ledger rows), "cards" (linked tiles),
 *   "table" (three-column grid ledger).
 * - Use cases: 3-column cards, or a split with a secondary photograph
 *   when the content provides one.
 * - Architecture: "layers" (stacked bands) or "flow" (FlowDiagram),
 *   plus an honest integration-status note on every page.
 */
import Link from "next/link";
import type {
  ArchitectureLayer,
  IllustrativePanel,
  IndustryContent,
  IndustryImage,
  ModuleMapItem,
} from "@/content/industries";
import { asset } from "@/lib/paths";
import Icon, { type IconName } from "../icons";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import FaqAccordion, { type FaqItem } from "../ui/FaqAccordion";
import DemoLabel from "../ui/DemoLabel";
import Reveal from "../ui/Reveal";
import { GoldRule } from "../ui/GoldLineDivider";
import FlowDiagram from "./FlowDiagram";

/** Icon for a module link, derived from its registry href. */
function moduleIcon(href: string): IconName {
  const map: Record<string, IconName> = {
    "/solutions/financial-crm": "crm",
    "/solutions/payment-orchestration": "payments",
    "/solutions/pamm-copy-trading": "pamm",
    "/solutions/ib-incentives": "ib",
    "/solutions/tradeops": "tradeops",
    "/solutions/digital-onboarding": "onboarding",
    "/solutions/trading-contests": "contests",
    "/platform": "layers",
    "/platform/architecture": "layers",
    "/platform/client-experience": "users",
    "/platform/financial-operations": "document",
    "/platform/no-code-studio": "sliders",
    "/platform/integrations": "exchanges",
    "/platform/analytics": "audit",
    "/platform/ai-assistance": "code",
  };
  return map[href] ?? "layers";
}

/* ---------------- Challenges ---------------- */

export function ChallengesSection({
  data,
}: {
  data: IndustryContent["challenges"];
}) {
  if (data.layout === "split") {
    return (
      <Section tone="ivory" id="challenges" ariaLabel="Industry challenges">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                label={data.label}
                heading={data.heading}
                copy={data.copy}
              />
            </div>
          </div>
          <ol className="lg:col-span-8">
            {data.items.map((item, i) => (
              <li
                key={item.title}
                className="border-t border-bx-gold-500/25 py-7 first:border-t-0 first:pt-0 lg:py-8"
              >
                <Reveal delay={i * 0.06}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl font-semibold leading-none text-bx-gold-600"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[62ch] leading-relaxed text-bx-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    );
  }

  if (data.layout === "grid") {
    return (
      <Section tone="ivory" id="challenges" ariaLabel="Industry challenges">
        <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2">
          {data.items.map((item, i) => (
            <li
              key={item.title}
              className="border border-bx-gold-500/25 bg-bx-white p-7 sm:p-8"
            >
              <Reveal delay={(i % 2) * 0.08}>
                <GoldRule />
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bx-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>
    );
  }

  // "numbered" — editorial two-column numbered list.
  return (
    <Section tone="ivory" id="challenges" ariaLabel="Industry challenges">
      <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
      <ol className="mt-12 grid gap-x-12 md:grid-cols-2">
        {data.items.map((item, i) => (
          <li
            key={item.title}
            className="border-t border-bx-gold-500/25 py-8"
          >
            <Reveal delay={(i % 2) * 0.08}>
              <p
                aria-hidden="true"
                className="font-display text-5xl font-semibold leading-none text-bx-gold-600"
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[58ch] leading-relaxed text-bx-muted">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Module map ---------------- */

function ModuleRows({ items }: { items: ModuleMapItem[] }) {
  return (
    <ul className="mt-12 border-b border-bx-gold-500/25">
      {items.map((item) => (
        <li key={item.href} className="border-t border-bx-gold-500/25">
          <Link
            href={item.href}
            className="group grid gap-2 py-7 transition-colors hover:bg-bx-white sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:px-4"
          >
            <span>
              <span className="flex items-center gap-3">
                <Icon
                  name={moduleIcon(item.href)}
                  size={22}
                  className="shrink-0 text-bx-gold-600"
                />
                <span className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink transition-colors group-hover:text-bx-maroon-700">
                  {item.label}
                </span>
              </span>
              <span className="mt-2 block max-w-[68ch] leading-relaxed text-bx-muted">
                {item.detail}
              </span>
            </span>
            <span className="flex items-center gap-2 sm:pt-1">
              <span className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-bx-maroon-700">
                {item.outcome}
              </span>
              <Icon
                name="arrowRight"
                size={18}
                className="text-bx-gold-600 transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ModuleCards({ items }: { items: ModuleMapItem[] }) {
  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.href}>
          <Reveal delay={(i % 3) * 0.08} className="h-full">
            <Link
              href={item.href}
              className="group flex h-full flex-col border border-bx-gold-500/25 bg-bx-white p-7 transition-colors hover:border-bx-gold-500/60"
            >
              <Icon
                name={moduleIcon(item.href)}
                size={28}
                className="text-bx-gold-600"
              />
              <span className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink transition-colors group-hover:text-bx-maroon-700">
                {item.label}
              </span>
              <span className="mt-1 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-bx-maroon-700">
                {item.outcome}
              </span>
              <span className="mt-3 flex-1 leading-relaxed text-bx-muted">
                {item.detail}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-maroon-700">
                Explore
                <Icon
                  name="arrowRight"
                  size={16}
                  className="text-bx-gold-600 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

function ModuleTable({ items }: { items: ModuleMapItem[] }) {
  return (
    <div className="mt-12">
      <div
        aria-hidden="true"
        className="hidden grid-cols-12 gap-6 border-b-2 border-bx-gold-500/40 pb-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700 md:grid"
      >
        <span className="col-span-4">BridgeX module</span>
        <span className="col-span-5">What it does here</span>
        <span className="col-span-3">Outcome</span>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.href}
            className="grid gap-2 border-b border-bx-gold-500/25 py-6 md:grid-cols-12 md:gap-6 md:py-7"
          >
            <span className="md:col-span-4">
              <Link
                href={item.href}
                className="group inline-flex items-center gap-2 font-sans text-lg font-extrabold tracking-[-0.01em] text-bx-ink transition-colors hover:text-bx-maroon-700"
              >
                {item.label}
                <Icon
                  name="arrowUpRight"
                  size={17}
                  className="shrink-0 text-bx-gold-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </span>
            <span className="leading-relaxed text-bx-muted md:col-span-5">
              {item.detail}
            </span>
            <span className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-bx-maroon-700 md:col-span-3 md:pt-1">
              {item.outcome}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ModuleMapSection({
  data,
}: {
  data: IndustryContent["moduleMap"];
}) {
  return (
    <Section tone="cream" id="modules" ariaLabel="How BridgeX modules map to outcomes">
      <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
      {data.layout === "rows" && <ModuleRows items={data.items} />}
      {data.layout === "cards" && <ModuleCards items={data.items} />}
      {data.layout === "table" && <ModuleTable items={data.items} />}
    </Section>
  );
}

/* ---------------- Use cases ---------------- */

function IllustrativePanelView({
  panel,
}: {
  panel: IllustrativePanel;
}) {
  return (
    <div className="mt-12 border border-bx-gold-500/40 bg-bx-white p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink">
          {panel.title}
        </h3>
        <DemoLabel />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-bx-muted">{panel.note}</p>
      <dl className="mt-5">
        {panel.rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-t border-bx-gold-500/25 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="font-sans font-bold text-bx-ink">{row.label}</dt>
            <dd className="text-bx-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function UseCasesSection({
  data,
  image,
  illustrative,
}: {
  data: IndustryContent["useCases"];
  image?: IndustryImage;
  illustrative?: IllustrativePanel;
}) {
  const portrait = image ? image.height > image.width : false;
  return (
    <Section tone="white" id="use-cases" ariaLabel="Use cases">
      <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
      {image ? (
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-full w-full border border-bx-gold-500/50"
              />
              <img
                src={asset(image.src)}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className={`relative w-full object-cover ${
                  portrait ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {data.items.map((item, i) => (
              <li
                key={item.title}
                className="border-t border-bx-gold-500/25 py-7 first:border-t-0 first:pt-0"
              >
                <Reveal delay={i * 0.06}>
                  <p
                    aria-hidden="true"
                    className="font-display text-3xl font-semibold leading-none text-bx-gold-600"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-bx-muted">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <ol className="mt-12 grid gap-px border border-bx-gold-500/25 bg-bx-gold-500/25 md:grid-cols-3">
          {data.items.map((item, i) => (
            <li key={item.title} className="bg-bx-ivory p-7 sm:p-8">
              <Reveal delay={i * 0.08}>
                <p
                  aria-hidden="true"
                  className="font-display text-4xl font-semibold leading-none text-bx-gold-600"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bx-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      )}
      {illustrative && <IllustrativePanelView panel={illustrative} />}
    </Section>
  );
}

/* ---------------- Architecture ---------------- */

function ArchitectureLayers({
  layers,
  dark,
}: {
  layers: ArchitectureLayer[];
  dark: boolean;
}) {
  return (
    <ol className="mt-12 space-y-4">
      {layers.map((layer, i) => (
        <li
          key={layer.name}
          className={`border p-6 sm:p-7 ${
            dark
              ? "border-bx-gold-500/30 bg-bx-maroon-800/60"
              : "border-bx-gold-500/25 bg-bx-white"
          }`}
        >
          <Reveal delay={i * 0.06}>
            <div className="grid gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <p
                  className={`font-sans text-[12px] font-bold uppercase tracking-[0.2em] ${
                    dark ? "text-bx-gold-400" : "text-bx-maroon-700"
                  }`}
                >
                  Layer {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className={`mt-2 font-sans text-xl font-extrabold tracking-[-0.01em] sm:text-2xl ${
                    dark ? "text-bx-ivory" : "text-bx-ink"
                  }`}
                >
                  {layer.name}
                </h3>
                <p
                  className={`mt-1 text-[15px] leading-relaxed ${
                    dark ? "text-bx-champagne/80" : "text-bx-muted"
                  }`}
                >
                  {layer.description}
                </p>
              </div>
              <ul className="flex flex-wrap content-start gap-2 md:col-span-8">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className={`inline-flex items-center border px-3 py-1.5 font-sans text-sm font-bold ${
                      dark
                        ? "border-bx-gold-500/40 text-bx-champagne"
                        : "border-bx-gold-600/40 text-bx-maroon-900"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function IntegrationNote({
  note,
  dark,
}: {
  note: string;
  dark: boolean;
}) {
  return (
    <div
      className={`mt-10 flex gap-4 border p-6 sm:p-7 ${
        dark
          ? "border-bx-gold-500/40 bg-bx-maroon-950/50"
          : "border-bx-gold-500/40 bg-bx-white"
      }`}
    >
      <Icon
        name="shield"
        size={26}
        className={`mt-0.5 shrink-0 ${dark ? "text-bx-gold-400" : "text-bx-gold-600"}`}
      />
      <div>
        <h3
          className={`font-sans text-[13px] font-bold uppercase tracking-[0.2em] ${
            dark ? "text-bx-gold-400" : "text-bx-maroon-700"
          }`}
        >
          Integration status — stated plainly
        </h3>
        <p
          className={`mt-2 max-w-[72ch] leading-relaxed ${
            dark ? "text-bx-champagne/85" : "text-bx-muted"
          }`}
        >
          {note}
        </p>
      </div>
    </div>
  );
}

export function ArchitectureSection({
  data,
}: {
  data: IndustryContent["architecture"];
}) {
  const dark = data.dark ?? false;
  return (
    <Section
      tone={dark ? "maroon" : "cream"}
      id="architecture"
      ariaLabel="Service architecture"
    >
      <SectionIntro
        label={data.label}
        heading={data.heading}
        copy={data.copy}
        dark={dark}
      />
      {data.variant === "layers" && data.layers && (
        <ArchitectureLayers layers={data.layers} dark={dark} />
      )}
      {data.variant === "flow" && data.steps && (
        <div className="mt-12">
          <FlowDiagram steps={data.steps} dark={dark} />
        </div>
      )}
      <IntegrationNote note={data.integrationNote} dark={dark} />
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <Section tone="ivory" id="faq" ariaLabel="Frequently asked questions">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionIntro
            label="FAQ"
            heading="Questions, answered plainly."
            copy="The questions decision-makers ask us first — about what BridgeX does, what it connects to, and what it deliberately does not claim."
          />
        </div>
        <div className="lg:col-span-8">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </Section>
  );
}
