/**
 * Small shared section patterns for the platform pages — kept here so the
 * page files stay lean and the rhythm stays consistent.
 *
 * - FaqSection: standard FAQ block (SectionIntro + FaqAccordion).
 * - WorkflowSteps: numbered step strip for "how it flows" sequences.
 * - CheckList: a titled list of check-marked items.
 */
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion, { type FaqItem } from "@/components/ui/FaqAccordion";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/icons";

export function FaqSection({
  id = "faq",
  label = "Questions",
  heading,
  copy,
  items,
  tone = "white",
}: {
  id?: string;
  label?: string;
  heading: string;
  copy?: string;
  items: FaqItem[];
  tone?: "white" | "mint" | "white";
}) {
  return (
    <Section tone={tone} id={id} ariaLabel="Frequently asked questions">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionIntro label={label} heading={heading} copy={copy} />
        </div>
        <Reveal delay={0.1} className="lg:col-span-8">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </Section>
  );
}

export function WorkflowSteps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative border-t-2 border-bx-teal-500 pt-5">
          <Reveal delay={i * 0.08}>
            <span className="font-sans text-sm font-bold tracking-[0.18em] text-bx-teal-700">
              0{i + 1}
            </span>
            <h3 className="mt-2 font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-500">{step.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({
  title,
  items,
  dark = false,
}: {
  title: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <div>
      <h3
        className={`font-sans text-xl font-extrabold leading-tight ${
          dark ? "text-bx-white" : "text-bx-navy-900"
        }`}
      >
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 text-[15px] leading-relaxed ${
              dark ? "text-bx-slate-300/90" : "text-bx-navy-900"
            }`}
          >
            <Icon
              name="check"
              size={20}
              className={`mt-0.5 shrink-0 ${dark ? "text-bx-teal-400" : "text-bx-teal-600"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
