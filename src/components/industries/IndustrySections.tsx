/**
 * IndustrySections — the shared body sections for industry pages.
 *
 * Each section has 2–3 layout variants, chosen per industry in the
 * content file, so the nine pages read as siblings — not copies.
 * The visual-enrichment pass (Nov 2026) made every section
 * image-led: challenges pair with a photograph (the pairing differs
 * by layout), the module map uses FeatureIcon tiles, use cases sit
 * beside a photograph as cards, and architecture layers carry their
 * layer icon. All copy is unchanged — only the presentation moved.
 *
 * - Challenges: "numbered" (photo + intro lead row, numbered list
 *   below), "grid" (sticky photo panel beside the cards), "split"
 *   (photo under the sticky intro).
 * - Module map: "rows" (linked ledger rows), "cards" (linked tiles),
 *   "table" (three-column grid ledger) — all with FeatureIcon tiles.
 * - Use cases: photograph beside card-stacked cases; the photo side
 *   flips per industry (see `useCaseFlip` in content).
 * - Journey: the banks/bonds hero diagrams, now a section directly
 *   below the photographic hero (FlowDiagram, unchanged behaviour).
 * - Architecture: "layers" (stacked bands, layer icons) or "flow"
 *   (FlowDiagram), plus an honest integration-status note.
 */
import Link from "next/link";
import type {
  ArchitectureLayer,
  FlowStep,
  IllustrativePanel,
  IndustryContent,
  IndustryImage,
  ModuleMapItem,
} from "@/content/industries";
import { asset } from "@/lib/paths";
import Icon, { type IconName } from "../icons";
import { Container, Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import FaqAccordion, { type FaqItem } from "../ui/FaqAccordion";
import DemoLabel from "../ui/DemoLabel";
import Reveal from "../ui/Reveal";
import FeatureIcon from "../ui/FeatureIcon";
import { TealRule } from "../ui/TealLineDivider";
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

/** Icon for an architecture layer, by layer name. */
function layerIconName(name: string): IconName {
  const map: Record<string, IconName> = {
    Experience: "experience",
    Operations: "operations",
    Integrations: "ecosystem",
    Intelligence: "intelligence",
  };
  return map[name] ?? "layers";
}

/**
 * Photograph in the house teal hairline frame (offset up-left).
 * Lazy-loaded — every use sits below the fold. The frame offset
 * stays inside the page's side padding, so it never overflows
 * at 375px. The warm pale mint background behind the photo keeps
 * the frame from reading as an empty outlined rectangle while
 * the image is still loading (fix, 14 Nov).
 */
function FramedImage({
  image,
  aspect,
  className = "",
}: {
  image: IndustryImage;
  aspect: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -left-3 -top-3 h-full w-full border border-bx-teal-500/50"
      />
      <img
        src={asset(image.src)}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        className={`relative w-full bg-bx-mint-100/60 object-cover ${aspect}`}
      />
    </div>
  );
}

/* ---------------- Journey (banks / bonds hero diagrams) ---------------- */

export function JourneySection({
  diagram,
}: {
  diagram: { title: string; steps: FlowStep[] };
}) {
  return (
    <section
      aria-label={diagram.title}
      className="bg-bx-white pb-2 pt-16 sm:pt-20 lg:pt-24"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[1100px] border border-bx-teal-500/30 bg-bx-white rounded-2xl p-5 sm:p-8 lg:p-10">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-teal-700">
              The journey
            </p>
            <h2 className="mt-3 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
              {diagram.title}
            </h2>
            <div className="mt-6">
              <FlowDiagram steps={diagram.steps} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Challenges ---------------- */

export function ChallengesSection({
  data,
  image,
  imageFlip = false,
}: {
  data: IndustryContent["challenges"];
  image?: IndustryImage;
  imageFlip?: boolean;
}) {
  if (data.layout === "split") {
    // Sticky intro column carries the photograph under the copy.
    const portrait = image ? image.height > image.width : false;
    return (
      <Section tone="white" id="challenges" ariaLabel="Industry challenges">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                label={data.label}
                heading={data.heading}
                copy={data.copy}
              />
              {image && (
                <Reveal className="mt-10">
                  <FramedImage
                    image={image}
                    aspect={portrait ? "aspect-[4/5]" : "aspect-[4/3]"}
                  />
                </Reveal>
              )}
            </div>
          </div>
          <ol className="lg:col-span-8">
            {data.items.map((item, i) => (
              <li
                key={item.title}
                className="border-t border-bx-teal-500/25 py-7 first:border-t-0 first:pt-0 lg:py-8"
              >
                <Reveal delay={i * 0.06}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="font-sans text-3xl font-semibold leading-none text-bx-teal-600"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[62ch] leading-relaxed text-bx-slate-500">
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
    // Sticky photo panel beside the card grid; flip swaps the side.
    return (
      <Section tone="white" id="challenges" ariaLabel="Industry challenges">
        <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {image && (
            <div className={imageFlip ? "lg:order-2 lg:col-span-4" : "lg:col-span-4"}>
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <FramedImage image={image} aspect="aspect-[4/3]" />
                </Reveal>
              </div>
            </div>
          )}
          <ol
            className={`grid gap-6 sm:grid-cols-2 ${
              image
                ? imageFlip
                  ? "lg:order-1 lg:col-span-8"
                  : "lg:col-span-8"
                : ""
            }`}
          >
            {data.items.map((item, i) => (
              <li
                key={item.title}
                className="bx-card-hover group border border-bx-teal-500/25 bg-bx-white rounded-2xl p-7 sm:p-8"
              >
                <Reveal delay={(i % 2) * 0.08}>
                  <TealRule />
                  <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bx-slate-500">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    );
  }

  // "numbered" — photo + intro lead row, editorial numbered list below.
  return (
    <Section tone="white" id="challenges" ariaLabel="Industry challenges">
      {image ? (
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={imageFlip ? "lg:order-2" : ""}>
            <FramedImage image={image} aspect="aspect-[4/3]" />
          </Reveal>
          <div className={imageFlip ? "lg:order-1" : ""}>
            <SectionIntro
              label={data.label}
              heading={data.heading}
              copy={data.copy}
            />
          </div>
        </div>
      ) : (
        <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
      )}
      <ol className="mt-12 grid gap-x-12 md:grid-cols-2">
        {data.items.map((item, i) => (
          <li
            key={item.title}
            className="border-t border-bx-teal-500/25 py-8"
          >
            <Reveal delay={(i % 2) * 0.08}>
              <p
                aria-hidden="true"
                className="font-sans text-5xl font-semibold leading-none text-bx-teal-600"
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[58ch] leading-relaxed text-bx-slate-500">
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
    <Reveal delay={0.1} className="mt-12">
      <ul className="border-b border-bx-teal-500/25">
      {items.map((item) => (
        <li key={item.href} className="border-t border-bx-teal-500/25">
          <Link
            href={item.href}
            className="group grid gap-2 py-7 transition-colors hover:bg-bx-white sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 sm:px-4"
          >
            <div>
              <div className="flex items-center gap-4">
                <FeatureIcon
                  icon={moduleIcon(item.href)}
                  size="sm"
                  className="shrink-0"
                />
                <span className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 transition-colors group-hover:text-bx-teal-700">
                  {item.label}
                </span>
              </div>
              <span className="mt-3 block max-w-[68ch] leading-relaxed text-bx-slate-500 sm:pl-16">
                {item.detail}
              </span>
            </div>
            <span className="flex items-center gap-2 sm:pt-3">
              <span className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-bx-teal-700">
                {item.outcome}
              </span>
              <Icon
                name="arrowRight"
                size={18}
                className="text-bx-teal-600 transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </li>
      ))}
      </ul>
    </Reveal>
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
              className="bx-card-hover group flex h-full flex-col border border-bx-teal-500/25 bg-bx-white rounded-2xl p-7"
            >
              <div className="flex justify-start">
                <FeatureIcon icon={moduleIcon(item.href)} size="md" />
              </div>
              <span className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 transition-colors group-hover:text-bx-teal-700">
                {item.label}
              </span>
              <span className="mt-1 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-bx-teal-700">
                {item.outcome}
              </span>
              <span className="mt-3 flex-1 leading-relaxed text-bx-slate-500">
                {item.detail}
              </span>
              <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-teal-700">
                Explore
                <Icon
                  name="arrowRight"
                  size={16}
                  className="text-bx-teal-600 transition-transform duration-200 group-hover:translate-x-1"
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
    <Reveal delay={0.1} className="mt-12">
      <div
        aria-hidden="true"
        className="hidden grid-cols-12 gap-6 border-b-2 border-bx-teal-500/40 pb-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-bx-teal-700 md:grid"
      >
        <span className="col-span-4">BridgeX module</span>
        <span className="col-span-5">What it does here</span>
        <span className="col-span-3">Outcome</span>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item.href}
            className="grid gap-2 border-b border-bx-teal-500/25 py-6 md:grid-cols-12 md:items-center md:gap-6 md:py-7"
          >
            <span className="md:col-span-4">
              <Link
                href={item.href}
                className="group inline-flex items-center gap-3 font-sans text-lg font-extrabold tracking-[-0.01em] text-bx-navy-900 transition-colors hover:text-bx-teal-700"
              >
                <FeatureIcon
                  icon={moduleIcon(item.href)}
                  size="sm"
                  className="shrink-0"
                />
                {item.label}
                <Icon
                  name="arrowUpRight"
                  size={17}
                  className="shrink-0 text-bx-teal-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </span>
            <span className="leading-relaxed text-bx-slate-500 md:col-span-5">
              {item.detail}
            </span>
            <span className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-bx-teal-700 md:col-span-3 md:pt-1">
              {item.outcome}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function ModuleMapSection({
  data,
}: {
  data: IndustryContent["moduleMap"];
}) {
  return (
    <Section tone="mint" id="modules" ariaLabel="How BridgeX modules map to outcomes">
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
    <div className="mt-12 border border-bx-teal-500/40 bg-bx-white rounded-2xl p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
          {panel.title}
        </h3>
        <DemoLabel />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-bx-slate-500">{panel.note}</p>
      <dl className="mt-5">
        {panel.rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 border-t border-bx-teal-500/25 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <dt className="font-sans font-bold text-bx-navy-900">{row.label}</dt>
            <dd className="text-bx-slate-500">{row.value}</dd>
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
  flip = false,
}: {
  data: IndustryContent["useCases"];
  image?: IndustryImage;
  illustrative?: IllustrativePanel;
  flip?: boolean;
}) {
  const portrait = image ? image.height > image.width : false;
  return (
    <Section tone="white" id="use-cases" ariaLabel="Use cases">
      <SectionIntro label={data.label} heading={data.heading} copy={data.copy} />
      {image ? (
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className={flip ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <FramedImage
                  image={image}
                  aspect={portrait ? "aspect-[4/5]" : "aspect-[4/3]"}
                />
              </Reveal>
            </div>
          </div>
          <ol
            className={`space-y-5 lg:col-span-7 ${flip ? "lg:order-1" : ""}`}
          >
            {data.items.map((item, i) => (
              <li
                key={item.title}
                className="bx-card-hover group border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-7"
              >
                <Reveal delay={i * 0.06}>
                  <p
                    aria-hidden="true"
                    className="font-sans text-3xl font-semibold leading-none text-bx-teal-600"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-bx-slate-500">
                    {item.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <ol className="mt-12 grid gap-px border border-bx-teal-500/25 bg-bx-teal-500/25 md:grid-cols-3">
          {data.items.map((item, i) => (
            <li key={item.title} className="bx-card-tint group bg-bx-white p-7 sm:p-8">
              {/* Hairline grid: tint, not lift — a translate would
                  break the grid lines. */}
              <Reveal delay={i * 0.08}>
                <p
                  aria-hidden="true"
                  className="font-sans text-4xl font-semibold leading-none text-bx-teal-600"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bx-slate-500">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      )}
      {illustrative && (
        <Reveal delay={0.1}>
          <IllustrativePanelView panel={illustrative} />
        </Reveal>
      )}
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
          className={`group border p-6 sm:p-7 ${
            dark
              ? "bx-card-hover-dark border-bx-teal-500/30 bg-bx-navy-800/60"
              : "bx-card-hover border-bx-teal-500/25 bg-bx-white"
          }`}
        >
          <Reveal delay={i * 0.06}>
            <div className="grid gap-4 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <div className="flex items-start gap-4">
                  <FeatureIcon
                    icon={layerIconName(layer.name)}
                    size="sm"
                    tone={dark ? "dark" : "light"}
                    className="shrink-0"
                  />
                  <div>
                    <p
                      className={`font-sans text-[12px] font-bold uppercase tracking-[0.2em] ${
                        dark ? "text-bx-teal-400" : "text-bx-teal-700"
                      }`}
                    >
                      Layer {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className={`mt-1 font-sans text-xl font-extrabold tracking-[-0.01em] sm:text-2xl ${
                        dark ? "text-bx-white" : "text-bx-navy-900"
                      }`}
                    >
                      {layer.name}
                    </h3>
                  </div>
                </div>
                <p
                  className={`mt-3 text-[15px] leading-relaxed ${
                    dark ? "text-bx-slate-300/80" : "text-bx-slate-500"
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
                        ? "border-bx-teal-500/40 text-bx-slate-300"
                        : "border-bx-teal-600/40 text-bx-navy-900"
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
          ? "border-bx-teal-500/40 bg-bx-navy-950/50"
          : "border-bx-teal-500/40 bg-bx-white"
      }`}
    >
      <Icon
        name="shield"
        size={26}
        className={`mt-0.5 shrink-0 ${dark ? "text-bx-teal-400" : "text-bx-teal-600"}`}
      />
      <div>
        <h3
          className={`font-sans text-[13px] font-bold uppercase tracking-[0.2em] ${
            dark ? "text-bx-teal-400" : "text-bx-teal-700"
          }`}
        >
          Integration status — stated plainly
        </h3>
        <p
          className={`mt-2 max-w-[72ch] leading-relaxed ${
            dark ? "text-bx-slate-300/85" : "text-bx-slate-500"
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
      tone={dark ? "navy" : "mint"}
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
      <Reveal delay={0.1}>
        <IntegrationNote note={data.integrationNote} dark={dark} />
      </Reveal>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <Section tone="white" id="faq" ariaLabel="Frequently asked questions">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionIntro
            label="FAQ"
            heading="Questions, answered plainly."
            copy="The questions decision-makers ask us first — about what BridgeX does, what it connects to, and what it deliberately does not claim."
          />
        </div>
        <Reveal delay={0.1} className="lg:col-span-8">
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  );
}
