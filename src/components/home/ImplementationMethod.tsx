/**
 * H10 — Implementation method: Discover → Configure → Integrate → Launch →
 * Improve. A real <ol> (order carries meaning here), horizontal on desktop
 * with a connecting gold line, stacked on mobile. Each step names its
 * deliverable.
 */
import Link from "next/link";
import { asset } from "@/lib/paths";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import Icon, { type IconName } from "../icons";

const STEPS: { name: string; icon: IconName; text: string; deliverable: string }[] = [
  {
    name: "Discover",
    icon: "search",
    text: "We map how your business actually operates — desks, journeys, providers, edge cases.",
    deliverable: "A scoped plan with honest timelines.",
  },
  {
    name: "Configure",
    icon: "sliders",
    text: "Objects, forms, workflows and journeys are configured in No-Code Studio — no forked code.",
    deliverable: "A working system on your data model.",
  },
  {
    name: "Integrate",
    icon: "link",
    text: "Trading platforms, payments and KYC connect through adapters, tested against your real flows.",
    deliverable: "Tested integrations, signed off.",
  },
  {
    name: "Launch",
    icon: "send",
    text: "Staged rollout with your team trained and your queues staffed — not a big-bang switch.",
    deliverable: "A live system your team can run.",
  },
  {
    name: "Improve",
    icon: "refresh",
    text: "We review what the data says and tune the workflows — onboarding, routing, incentives.",
    deliverable: "A system that keeps getting better.",
  },
];

export default function ImplementationMethod() {
  return (
    <Section tone="ivory" ariaLabel="Implementation method">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro
          label="How we work with you"
          heading={
            <>
              From first workshop{" "}
              <span className="font-display font-semibold italic text-bx-maroon-700">
                to live operations.
              </span>
            </>
          }
          copy="Five steps, no surprises. You always know what is happening, what it costs, and what you get at the end of each one."
        />
        <Reveal delay={0.15} className="shrink-0">
          <Link
            href="/services/implementation"
            className="group inline-flex items-center gap-2 font-sans text-base font-bold text-bx-maroon-700 hover:text-bx-maroon-900"
          >
            Our implementation service
            <Icon
              name="arrowRight"
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>

      <ol className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-6">
        {/* Connecting line (desktop) */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[7px] hidden h-px bg-bx-gold-500/50 lg:block"
        />
        {STEPS.map((step, i) => (
          <li key={step.name} className="relative">
            <Reveal delay={0.08 * i}>
              <span
                aria-hidden="true"
                className="relative z-10 block h-[15px] w-[15px] rotate-45 border-2 border-bx-gold-500 bg-bx-ivory"
              />
              <h3 className="mt-5 flex items-center gap-2.5 font-sans text-xl font-bold text-bx-ink">
                <Icon
                  name={step.icon}
                  size={22}
                  className="shrink-0 text-bx-gold-600"
                />
                {step.name}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-bx-muted">
                {step.text}
              </p>
              <p className="mt-4 border-l-2 border-bx-gold-500 pl-3 text-sm leading-relaxed text-bx-maroon-700">
                <span className="font-sans font-bold">You get: </span>
                {step.deliverable}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1} className="mt-12 lg:mt-16">
        <figure>
          <img
            src={asset("/images/workshop-presentation.jpg")}
            alt="Professionals attending a business seminar"
            width={1600}
            height={968}
            loading="lazy"
            className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]"
          />
          <figcaption className="mt-3 text-sm text-bx-muted">
            Discovery starts with your team in the room — mapping how the
            business actually operates, before anything is configured.
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
