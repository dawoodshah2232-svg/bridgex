/**
 * Shared solution-page section atoms.
 *
 * Pages compose these in different orders and tones — the atoms are the
 * vocabulary, not a template. Each atom takes content from
 * src/content/solutions.ts and renders one section's worth of it.
 */
import type { ReactNode } from "react";
import Link from "next/link";
import { asset } from "@/lib/paths";
import Icon, { type IconName } from "@/components/icons";
import type {
  CapabilityGroup,
  ComparisonRow,
  CopyBlock,
  RelatedLink,
  WorkflowStep,
} from "@/content/solutions";
import { Container, Section } from "@/components/ui/Container";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import { GoldRule } from "@/components/ui/GoldLineDivider";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";

/* ------------------------------------------------------------------ */
/* Preview shell — the anchor target for "See the preview" CTAs.       */
/* ------------------------------------------------------------------ */

export function PreviewShell({
  label,
  heading,
  copy,
  tone = "white",
  children,
}: {
  label: string;
  heading: ReactNode;
  copy: string;
  tone?: "white" | "ivory" | "cream";
  children: ReactNode;
}) {
  return (
    <Section tone={tone} id="preview" ariaLabel="Interactive preview">
      <SectionIntro label={label} heading={heading} copy={copy} />
      <Reveal className="mt-12 lg:mt-16" delay={0.08}>
        {children}
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Problem — pain points as a numbered list beside the intro.          */
/* ------------------------------------------------------------------ */

export function ProblemSection({
  label,
  heading,
  copy,
  pains,
  tone = "cream",
  image,
}: {
  label: string;
  heading: string;
  copy: string;
  pains: CopyBlock[];
  tone?: "cream" | "ivory" | "white";
  image?: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <Section tone={tone} ariaLabel="The problem">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionIntro label={label} heading={heading} copy={copy} />
          {image && (
            <Reveal delay={0.1} className="mt-10">
              <img
                src={asset(image.src)}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="aspect-[3/2] w-full border border-bx-gold-500/30 object-cover"
              />
            </Reveal>
          )}
        </div>
        <ol className="space-y-0 border-t border-bx-gold-500/30">
          {pains.map((pain, i) => (
            <li
              key={pain.title}
              className="flex gap-5 border-b border-bx-gold-500/30 py-6 sm:gap-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-2xl font-semibold text-bx-gold-600"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-sans text-lg font-bold text-bx-ink">
                  {pain.title}
                </span>
                <span className="mt-1 block max-w-[58ch] text-[15px] leading-relaxed text-bx-muted">
                  {pain.copy}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Capabilities — grouped feature breakdown (spec §7 inventory).       */
/* ------------------------------------------------------------------ */

export function CapabilityGroups({
  label,
  heading,
  copy,
  groups,
  tone = "ivory",
  icons,
}: {
  label: string;
  heading: string;
  copy: string;
  groups: CapabilityGroup[];
  tone?: "ivory" | "white" | "cream";
  icons: IconName[];
}) {
  return (
    <Section tone={tone} ariaLabel="Capabilities">
      <SectionIntro label={label} heading={heading} copy={copy} />
      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="border-t-2 border-bx-maroon-800 pt-6">
              <span className="flex items-center gap-3 text-bx-maroon-700">
                <Icon name={icons[gi % icons.length]} size={26} />
                <h3 className="font-sans text-xl font-extrabold text-bx-ink">
                  {group.title}
                </h3>
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-bx-muted">
                {group.intro}
              </p>
              <ul className="mt-6 space-y-5">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <p className="font-sans text-[15px] font-bold text-bx-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-bx-muted">
                      {item.copy}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Workflow — numbered steps on a connecting line.                     */
/* ------------------------------------------------------------------ */

export function WorkflowSteps({
  label,
  heading,
  copy,
  steps,
  dark = false,
}: {
  label: string;
  heading: string;
  copy: string;
  steps: WorkflowStep[];
  dark?: boolean;
}) {
  return (
    <Section tone={dark ? "maroon" : "ivory"} ariaLabel="Workflow">
      <SectionIntro label={label} heading={heading} copy={copy} dark={dark} />
      <div className="relative mt-12 lg:mt-16">
        {/* Connecting line — centred on the 40px number squares (top 20px). */}
        <span
          aria-hidden="true"
          className={`absolute left-0 right-0 top-[20px] hidden h-px lg:block ${
            dark ? "bg-bx-gold-500/40" : "bg-bx-gold-500/50"
          }`}
        />
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <span
              aria-hidden="true"
              className={`relative z-10 flex h-10 w-10 items-center justify-center font-sans text-sm font-extrabold ${
                dark
                  ? "bg-bx-gold-500 text-bx-maroon-950"
                  : "bg-bx-maroon-800 text-bx-ivory"
              }`}
            >
              {i + 1}
            </span>
            <h3
              className={`mt-4 font-sans text-lg font-bold ${
                dark ? "text-bx-ivory" : "text-bx-ink"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-1.5 max-w-[52ch] text-[15px] leading-relaxed ${
                dark ? "text-bx-champagne/85" : "text-bx-muted"
              }`}
            >
              {step.copy}
            </p>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Benefits — two-column detailed benefit list.                        */
/* ------------------------------------------------------------------ */

export function BenefitGrid({
  label,
  heading,
  benefits,
  tone = "white",
}: {
  label: string;
  heading: string;
  benefits: CopyBlock[];
  tone?: "white" | "ivory" | "cream";
}) {
  return (
    <Section tone={tone} ariaLabel="Benefits">
      <SectionIntro label={label} heading={heading} />
      <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-16">
        {benefits.map((benefit, i) => (
          <li key={benefit.title} className="flex gap-5">
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 text-bx-gold-600"
            >
              <Icon name="check" size={22} />
            </span>
            <div>
              <h3 className="font-sans text-lg font-bold text-bx-ink">
                <span className="sr-only">Benefit {i + 1}: </span>
                {benefit.title}
              </h3>
              <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-bx-muted">
                {benefit.copy}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Use cases — linked cards to industry routes.                        */
/* ------------------------------------------------------------------ */

export function UseCaseCards({
  label,
  heading,
  copy,
  useCases,
  tone = "cream",
}: {
  label: string;
  heading: string;
  copy: string;
  useCases: (CopyBlock & { href: string })[];
  tone?: "cream" | "ivory" | "white";
}) {
  return (
    <Section tone={tone} ariaLabel="Use cases">
      <SectionIntro label={label} heading={heading} copy={copy} />
      <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
        {useCases.map((useCase, i) => (
          <li key={useCase.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <Link
                href={useCase.href}
                className="group flex h-full flex-col border border-bx-gold-500/30 bg-bx-white p-7 transition-colors duration-200 hover:border-bx-gold-500/70"
              >
                <GoldRule />
                <h3 className="mt-5 font-sans text-xl font-extrabold text-bx-ink group-hover:text-bx-maroon-700">
                  {useCase.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-muted">
                  {useCase.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-bold text-bx-maroon-700">
                  Explore this industry
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Security — maroon panel with permission/audit items.                */
/* ------------------------------------------------------------------ */

export function SecurityPanel({
  heading,
  copy,
  items,
}: {
  heading: string;
  copy: string;
  items: CopyBlock[];
}) {
  return (
    <Section tone="maroon" ariaLabel="Security and permissions">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionIntro
            label="Security & permissions"
            heading={heading}
            copy={copy}
            dark
          />
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="border-t border-bx-gold-500/30 pt-5">
              <h3 className="flex items-center gap-2.5 font-sans text-base font-bold text-bx-ivory">
                <Icon name="shield" size={20} className="shrink-0 text-bx-gold-400" />
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bx-champagne/85">
                {item.copy}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Integrations — category list, no provider names or logos.           */
/* ------------------------------------------------------------------ */

export function IntegrationList({
  heading,
  copy,
  items,
  tone = "white",
}: {
  heading: string;
  copy: string;
  items: CopyBlock[];
  tone?: "white" | "ivory";
}) {
  return (
    <Section tone={tone} ariaLabel="Integrations">
      <SectionIntro label="Integration approach" heading={heading} copy={copy} />
      <ul className="mt-12 grid gap-px overflow-hidden border border-bx-gold-500/30 bg-bx-gold-500/30 sm:grid-cols-2 lg:mt-16">
        {items.map((item) => (
          <li key={item.title} className="bg-bx-ivory p-6 sm:p-7">
            <h3 className="font-sans text-base font-bold text-bx-ink">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-bx-muted">
              {item.copy}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Comparison — BridgeX approach vs. generic alternatives. No named    */
/* competitors, no unsupported attacks: the "typical" column describes */
/* spreadsheets, generic tools and disconnected point products.        */
/* ------------------------------------------------------------------ */

export function ComparisonTable({
  heading,
  copy,
  rows,
  tone = "cream",
}: {
  heading: string;
  copy: string;
  rows: ComparisonRow[];
  tone?: "cream" | "ivory";
}) {
  return (
    <Section tone={tone} ariaLabel="Comparison">
      <SectionIntro label="Comparison" heading={heading} copy={copy} />
      <div
        className="mt-12 overflow-x-auto lg:mt-16"
        tabIndex={0}
        role="region"
        aria-label="Comparison table — scroll sideways to see all columns"
      >
        <table className="w-full min-w-[720px] border-collapse bg-bx-white text-left">
          <thead>
            <tr className="bg-bx-maroon-900 text-bx-ivory">
              <th scope="col" className="w-[18%] px-5 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em]">
                Aspect
              </th>
              <th scope="col" className="w-[41%] px-5 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-gold-400">
                With BridgeX
              </th>
              <th scope="col" className="w-[41%] px-5 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em]">
                The usual alternative
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.aspect} className="border-b border-bx-gold-500/25 align-top last:border-b-0">
                <th scope="row" className="px-5 py-4 font-sans text-[15px] font-bold text-bx-ink">
                  {row.aspect}
                </th>
                <td className="px-5 py-4 text-[15px] leading-relaxed text-bx-ink">
                  {row.bridgex}
                </td>
                <td className="px-5 py-4 text-[15px] leading-relaxed text-bx-muted">
                  {row.typical}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ + related links.                                                */
/* ------------------------------------------------------------------ */

export function FaqSection({ faqs, tone = "ivory" }: { faqs: FaqItem[]; tone?: "ivory" | "white" }) {
  return (
    <Section tone={tone} ariaLabel="Frequently asked questions">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <SectionIntro
          label="Questions"
          heading="Asked by operators like you"
          copy="Straight answers about how the capability works, what it connects to, and what it does not claim to do."
        />
        <FaqAccordion items={faqs} />
      </div>
    </Section>
  );
}

export function RelatedSolutions({ related }: { related: RelatedLink[] }) {
  return (
    <section aria-label="Related solutions" className="bg-bx-ivory pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <div className="border-t border-bx-gold-500/30 pt-10">
          <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-bx-maroon-700">
            Continue exploring
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
            {related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-ink hover:text-bx-maroon-700"
                >
                  {link.label}
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="text-bx-gold-600 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
