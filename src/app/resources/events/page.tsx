/**
 * Events & Webinars — honest "coming soon" page (spec §10). No real
 * events exist: four webinar topics are marked as planned, with no
 * dates, and the register-interest form persists to localStorage with
 * an explicit "saved on this device" note.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/icons";
import { EVENT_TOPICS } from "@/content/resources";
import { EVENTS_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";
import EventsForm from "@/components/resources/EventsForm";
import StatusBadge from "@/components/resources/StatusBadge";

export const metadata: Metadata = {
  title: "Events & Webinars",
  description:
    "BridgeX events are coming soon. Four webinars are planned — onboarding, partner economics, payments and TradeOps. Register interest and be first to hear when dates are set.",
};

const WHAT_TO_EXPECT = [
  {
    icon: "users" as const,
    title: "Operators, not salespeople",
    text: "Sessions are led by the people who build and run the platform, and the Q&A is the point — not the last five minutes.",
  },
  {
    icon: "calendar" as const,
    title: "45 minutes, plus questions",
    text: "Short enough to fit a working day, long enough to go past the slogans. Bring a real problem; the best sessions start there.",
  },
  {
    icon: "document" as const,
    title: "Recorded for later",
    text: "Sessions are planned to be recorded, so other time zones can watch afterwards. Recordings will be listed on this page when they exist.",
  },
];

export default function EventsPage() {
  return (
    <>
      <ResourceHero
        href="/resources/events"
        eyebrow="Events & Webinars"
        title={
          <>
            Events,{" "}
            <span className="font-display italic text-bx-maroon-700">
              coming soon.
            </span>
          </>
        }
        copy="No BridgeX event has a date yet — and this page will not pretend otherwise. Four webinars are planned, on the topics operators ask us about most. Register interest below and you will hear first when registration opens."
        image="/images/resources-audience.jpg"
        imageAlt="An audience seated in rows, watching a presentation in a darkened hall"
        imageWidth={1600}
        imageHeight={1067}
        layout="split"
      />

      <Section tone="ivory" ariaLabel="Planned webinars">
        <SectionIntro
          label="The planned programme"
          heading="Four sessions, four recurring questions"
          copy="Every topic below comes from a question operators actually ask us. Dates are to be announced — the programme is planned, and this page will be the first place to say when a session is scheduled."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {EVENT_TOPICS.map((topic, i) => (
            <Reveal key={topic.id} delay={(i % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col border border-bx-gold-500/30 bg-bx-white p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status="Planned" />
                  <span className="font-sans text-[13px] font-bold text-bx-muted">
                    {topic.format}
                  </span>
                </div>
                <h3 className="mt-4 font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-ink">
                  {topic.title}
                </h3>
                <p className="mt-1 font-sans text-sm font-bold text-bx-muted">
                  For {topic.audience}
                </p>
                <p className="mt-3 flex-1 text-base leading-relaxed text-bx-muted">
                  {topic.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-bx-gold-500/25 pt-5">
                  {topic.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-bx-ink/90"
                    >
                      <Icon
                        name="check"
                        size={18}
                        className="mt-0.5 shrink-0 text-bx-gold-600"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-sans text-sm font-bold text-bx-maroon-700">
                  Date to be announced
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream" ariaLabel="What to expect">
        <SectionIntro
          label="What to expect"
          heading="Sessions worth an hour of your day"
          copy="When the webinars run, this is the format. Short, practical, and built around questions rather than slides."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {WHAT_TO_EXPECT.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col border border-bx-gold-500/30 bg-bx-white p-7">
                <Icon name={item.icon} size={28} className="text-bx-gold-600" />
                <h3 className="mt-4 font-sans text-xl font-extrabold leading-snug text-bx-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ivory" id="register" ariaLabel="Register interest">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionIntro
              label="Register interest"
              heading="Be first to hear when a date is set"
              copy="Choose the session you would attend and save your interest. It stays in your browser on this device — nothing is sent to BridgeX yet, and the form says so plainly."
            />
            <p className="mt-8 text-base leading-relaxed text-bx-muted">
              Prefer to talk now instead of waiting for a webinar?{" "}
              <Link
                href="/company/contact"
                className="font-bold text-bx-maroon-700 underline decoration-bx-gold-500 decoration-2 underline-offset-2 hover:text-bx-maroon-900"
              >
                Contact us
              </Link>{" "}
              or{" "}
              <Link
                href="/book-demo"
                className="font-bold text-bx-maroon-700 underline decoration-bx-gold-500 decoration-2 underline-offset-2 hover:text-bx-maroon-900"
              >
                book a private demo
              </Link>
              .
            </p>
          </div>
          <Reveal>
            <EventsForm />
          </Reveal>
        </div>
      </Section>

      <Section tone="cream" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About BridgeX events"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={EVENTS_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Do not wait for a webinar to see the platform."
        copy="The sessions will come. In the meantime, a private demo answers your questions on your own workflows — this week, not someday."
      />
    </>
  );
}
