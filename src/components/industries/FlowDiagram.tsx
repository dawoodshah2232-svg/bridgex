/**
 * FlowDiagram — a numbered step flow rendered as code (never an image).
 *
 * Used for the diagram heroes (banks, bonds) and for the "flow" variant
 * of the service-architecture section. Steps stack on mobile and sit in
 * a row on desktop; the numbers carry the order, so no fragile connector
 * positioning is needed at any width.
 */
import type { FlowStep } from "@/content/industries";
import Reveal from "../ui/Reveal";

export default function FlowDiagram({
  steps,
  dark = false,
}: {
  steps: FlowStep[];
  dark?: boolean;
}) {
  return (
    <ol
      className={`grid gap-px border sm:grid-cols-2 lg:grid-cols-5 ${
        dark
          ? "border-bx-gold-500/30 bg-bx-gold-500/20"
          : "border-bx-gold-500/25 bg-bx-gold-500/25"
      }`}
    >
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={`relative p-6 sm:p-7 ${
            dark ? "bg-bx-maroon-900" : "bg-bx-white"
          }`}
        >
          <Reveal delay={i * 0.07}>
            <span
              aria-hidden="true"
              className="block h-[2px] w-10 bg-bx-gold-500"
            />
            <p
              className={`mt-4 font-display text-[34px] font-semibold leading-none ${
                dark ? "text-bx-gold-400" : "text-bx-gold-600"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </p>
            <p
              className={`mt-3 font-sans text-[17px] font-extrabold leading-snug ${
                dark ? "text-bx-ivory" : "text-bx-ink"
              }`}
            >
              {step.title}
            </p>
            <p
              className={`mt-2 text-[15px] leading-relaxed ${
                dark ? "text-bx-champagne/80" : "text-bx-muted"
              }`}
            >
              {step.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
