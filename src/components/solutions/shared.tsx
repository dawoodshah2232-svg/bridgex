/**
 * Shared solution-page section atoms.
 *
 * Pages compose these in different orders and tones — the atoms are the
 * vocabulary, not a template. Each atom takes content from
 * src/content/solutions.ts and renders one section's worth of it.
 *
 * Visual language (enrichment pass): problem and benefit sections open
 * as alternating ImageText blocks; icons are meaningful IconNames from
 * the shared set, shown in gold-ring tiles — the FeatureIcon tile
 * language, in row layout (FeatureIcon itself is vertical-only, so the
 * local RingTile below reproduces its exact tile classes for rows).
 * Use-case cards carry a photograph per industry. The interactive
 * previews are never touched here — PreviewShell only frames them.
 */
import type { ReactNode } from "react";
import Link from "next/link";
import { asset } from "@/lib/paths";
import Icon, { industryIcon, type IconName } from "@/components/icons";
import type {
  CapabilityGroup,
  ComparisonRow,
  CopyBlock,
  RelatedLink,
  SolutionImage,
  WorkflowStep,
} from "@/content/solutions";
import { Container, Section } from "@/components/ui/Container";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { GoldRule } from "@/components/ui/GoldLineDivider";
import ImageText from "@/components/ui/ImageText";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";

type LightTone = "cream" | "ivory" | "white";

const LIGHT_TONE_BG: Record<LightTone, string> = {
  ivory: "bg-bx-ivory",
  cream: "bg-bx-cream",
  white: "bg-bx-white",
};

/**
 * Gold-ring icon tile in row layout — the FeatureIcon tile (circle,
 * thin gold ring, champagne wash on light / deep maroon wash on dark),
 * for rows where FeatureIcon's vertical tile-plus-label layout does
 * not fit. Classes match FeatureIcon exactly. The default tile is
 * 56px with a 26px glyph (fix, 14 Nov): the old 44px tile read as
 * decoration and the capability icons were missed entirely.
 */
function RingTile({
  icon,
  dark = false,
  size = 26,
  tileClass = "h-14 w-14",
}: {
  icon: IconName;
  dark?: boolean;
  size?: number;
  tileClass?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full border ${tileClass} ${
        dark
          ? "border-bx-gold-400/50 bg-bx-maroon-800/60 text-bx-gold-400"
          : "border-bx-gold-500/60 bg-bx-champagne/40 text-bx-gold-600"
      }`}
    >
      <Icon name={icon} size={size} />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Preview shell — the anchor target for "See the preview" CTAs.       */
/* The preview itself is untouched; it sits on a deep-maroon stage     */
/* with a gold hairline, like a console on a desk.                     */
/* ------------------------------------------------------------------ */

export function PreviewShell({
  label,
  heading,
  copy,
  tone = "white",
  className = "",
  children,
}: {
  label: string;
  heading: ReactNode;
  copy: string;
  tone?: "white" | "ivory" | "cream";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Section tone={tone} id="preview" ariaLabel="Interactive preview" className={className}>
      <SectionIntro label={label} heading={heading} copy={copy} />
      <Reveal className="mt-12 lg:mt-16" delay={0.08}>
        <div className="border border-bx-gold-500/40 bg-bx-maroon-900 p-3 sm:p-4">
          {children}
        </div>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Problem — an ImageText block (photo + intro) with the pain points   */
/* as a numbered two-column list below it. `flip` alternates the      */
/* image side per page, so neighbouring ImageText blocks mirror.       */
/* ------------------------------------------------------------------ */

export function ProblemSection({
  label,
  heading,
  copy,
  pains,
  tone = "cream",
  image,
  flip = false,
}: {
  label: string;
  heading: string;
  copy: string;
  pains: CopyBlock[];
  tone?: LightTone;
  image: SolutionImage;
  flip?: boolean;
}) {
  return (
    <>
      <ImageText
        image={image.src}
        alt={image.alt}
        eyebrow={label}
        heading={heading}
        copy={copy}
        flip={flip}
        tone={tone}
        imageWidth={image.width}
        imageHeight={image.height}
        eager
      />
      {/* Same tone as the ImageText above, pulled up over its bottom
          padding — one section visually, with a comfortable gap. */}
      <section
        aria-label="Pain points"
        className={`${LIGHT_TONE_BG[tone]} -mt-6 pb-16 sm:-mt-8 sm:pb-20 lg:-mt-12 lg:pb-24`}
      >
        <Container>
          <ol className="grid gap-x-12 sm:grid-cols-2">
            {pains.map((pain, i) => (
              <li
                key={pain.title}
                className="flex gap-5 border-t border-bx-gold-500/30 py-6 sm:gap-7"
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
        </Container>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Capabilities — grouped feature breakdown (spec §7 inventory).       */
/* Each group carries its icon in a gold-ring tile; the `icons` array  */
/* maps by group index (IconName strings, resolved by <Icon>).         */
/* ------------------------------------------------------------------ */

export function CapabilityGroups({
  label,
  heading,
  copy,
  groups,
  tone = "ivory",
  className = "",
  icons,
}: {
  label: string;
  heading: string;
  copy: string;
  groups: CapabilityGroup[];
  tone?: LightTone;
  className?: string;
  icons: IconName[];
}) {
  return (
    <Section tone={tone} ariaLabel="Capabilities" className={className}>
      <SectionIntro label={label} heading={heading} copy={copy} />
      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="border-t-2 border-bx-maroon-800 pt-6">
              <span className="flex items-center gap-4">
                <RingTile icon={icons[gi % icons.length]} />
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
/* Workflow — numbered steps on a connecting line. Each step keeps     */
/* its number (sequence matters) and gains a small meaningful icon     */
/* beside its title.                                                   */
/* ------------------------------------------------------------------ */

export function WorkflowSteps({
  label,
  heading,
  copy,
  steps,
  dark = false,
  icons,
}: {
  label: string;
  heading: string;
  copy: string;
  steps: WorkflowStep[];
  dark?: boolean;
  icons?: IconName[];
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
              className={`mt-4 flex items-center gap-2.5 font-sans text-lg font-bold ${
                dark ? "text-bx-ivory" : "text-bx-ink"
              }`}
            >
              {icons && (
                <Icon
                  name={icons[i % icons.length]}
                  size={20}
                  className={`shrink-0 ${dark ? "text-bx-gold-400" : "text-bx-gold-600"}`}
                />
              )}
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
/* Benefits — two-column detailed benefit list. With `image`, the      */
/* section opens as an ImageText block (photo + label + heading) and   */
/* the list follows below; without it, the classic SectionIntro        */
/* header is used. Each benefit carries its own icon in a ring tile.   */
/* ------------------------------------------------------------------ */

export function BenefitGrid({
  label,
  heading,
  benefits,
  tone = "white",
  icons,
  image,
  flip = false,
}: {
  label: string;
  heading: string;
  benefits: CopyBlock[];
  tone?: LightTone;
  icons?: IconName[];
  image?: SolutionImage;
  flip?: boolean;
}) {
  const list = (
    <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      {benefits.map((benefit, i) => (
        <li key={benefit.title} className="flex gap-5">
          <RingTile icon={icons ? icons[i % icons.length] : "check"} />
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
  );

  if (!image) {
    return (
      <Section tone={tone} ariaLabel="Benefits">
        <SectionIntro label={label} heading={heading} />
        <div className="mt-12 lg:mt-16">{list}</div>
      </Section>
    );
  }

  return (
    <>
      <ImageText
        image={image.src}
        alt={image.alt}
        eyebrow={label}
        heading={heading}
        flip={flip}
        tone={tone}
        imageWidth={image.width}
        imageHeight={image.height}
      />
      {/* Same tone as the ImageText above, pulled up over its bottom
          padding — one section visually, with a comfortable gap. */}
      <section
        aria-label="Benefits"
        className={`${LIGHT_TONE_BG[tone]} -mt-6 pb-16 sm:-mt-8 sm:pb-20 lg:-mt-12 lg:pb-24`}
      >
        <Container>{list}</Container>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Use cases — linked cards to industry routes. With `images`, each    */
/* card opens with its industry photograph (lazy, 16:10 crop, with a   */
/* slow hover zoom — transform-only, neutralised by reduced motion).   */
/* ------------------------------------------------------------------ */

export function UseCaseCards({
  label,
  heading,
  copy,
  useCases,
  tone = "cream",
  images,
}: {
  label: string;
  heading: string;
  copy: string;
  useCases: (CopyBlock & { href: string })[];
  tone?: LightTone;
  images?: SolutionImage[];
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
                className="group flex h-full flex-col overflow-hidden border border-bx-gold-500/30 bg-bx-white transition-colors duration-200 hover:border-bx-gold-500/70"
              >
                {images?.[i] && (
                  <div className="overflow-hidden">
                    <img
                      src={asset(images[i].src)}
                      alt={images[i].alt}
                      width={images[i].width}
                      height={images[i].height}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <GoldRule />
                  <h3 className="mt-5 flex items-center gap-2.5 font-sans text-xl font-extrabold text-bx-ink group-hover:text-bx-maroon-700">
                    <Icon
                      name={industryIcon(useCase.href.split("/").pop() ?? "")}
                      size={22}
                      className="shrink-0 text-bx-gold-600"
                    />
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
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Security — maroon panel with permission/audit items. Each item      */
/* carries its own icon in a dark gold-ring tile.                      */
/* ------------------------------------------------------------------ */

export function SecurityPanel({
  heading,
  copy,
  items,
  icons,
}: {
  heading: string;
  copy: string;
  items: CopyBlock[];
  icons?: IconName[];
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
          <div className="mt-10 hidden lg:block">
            <FeatureIcon icon="shield" label="Control by design" tone="dark" size="lg" />
          </div>
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map((item, i) => (
            <li key={item.title} className="border-t border-bx-gold-500/30 pt-5">
              <h3 className="flex items-center gap-3 font-sans text-base font-bold text-bx-ivory">
                <RingTile
                  icon={icons ? icons[i % icons.length] : "shield"}
                  dark
                  size={18}
                  tileClass="h-9 w-9"
                />
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
/* Integrations — category list, no provider names or logos. Each      */
/* cell carries its own icon in a gold-ring tile.                      */
/* ------------------------------------------------------------------ */

export function IntegrationList({
  heading,
  copy,
  items,
  tone = "white",
  icons,
}: {
  heading: string;
  copy: string;
  items: CopyBlock[];
  tone?: "white" | "ivory";
  icons?: IconName[];
}) {
  return (
    <Section tone={tone} ariaLabel="Integrations">
      <SectionIntro label="Integration approach" heading={heading} copy={copy} />
      <ul className="mt-12 grid gap-px overflow-hidden border border-bx-gold-500/30 bg-bx-gold-500/30 sm:grid-cols-2 lg:mt-16">
        {items.map((item, i) => (
          <li key={item.title} className="bg-bx-ivory p-6 sm:p-7">
            {icons && <RingTile icon={icons[i % icons.length]} />}
            <h3
              className={`font-sans text-base font-bold text-bx-ink ${
                icons ? "mt-4" : ""
              }`}
            >
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
    <section aria-label="Related solutions" className="bg-bx-ivory pb-16 sm:pb-20 lg:pb-24">
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
