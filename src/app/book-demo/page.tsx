import type { Metadata } from "next";
import Link from "next/link";
import { DEMO_FAQ } from "@/content/company";
import InnerHero from "@/components/company/InnerHero";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Book a Private Demo — See BridgeX on Your Workflows",
  description:
    "Book a private BridgeX demo: a 45–60 minute working session built around your business, your workflows and your hardest questions. Three short steps.",
};

const DEMO_PROMISES = [
  {
    title: "Built around your business",
    text: "Tell us what you run and what you want to see — the demo follows your workflows, not a generic script.",
    icon: "layers" as const,
  },
  {
    title: "A working session, not a pitch",
    text: "Bring your hardest questions. We will show the product, answer directly, and say plainly what it does not do.",
    icon: "users" as const,
  },
  {
    title: "45–60 minutes, your time",
    text: "Long enough to go deep on the modules that matter to you, short enough to respect your day.",
    icon: "calendar" as const,
  },
];

export default function BookDemoPage() {
  return (
    <>
      <InnerHero
        dark
        href="/book-demo"
        eyebrow="Book a Private Demo"
        title={
          <>
            See BridgeX running{" "}
            <em className="font-display font-semibold italic text-bx-gold-400">
              on your workflows.
            </em>
          </>
        }
        copy="Three short steps. Tell us who you are, what your business does, and what you want to see — and we will build a demo around it."
      />

      {/* Form + promises */}
      <Section tone="ivory" ariaLabel="Book a demo">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <div className="border border-bx-maroon-900/15 bg-bx-white px-6 py-8 sm:px-10 sm:py-10">
              <DemoBookingForm />
            </div>
          </Reveal>

          <div className="space-y-6">
            {DEMO_PROMISES.map((promise, i) => (
              <Reveal key={promise.title} delay={0.08 + i * 0.06}>
                <div className="border border-bx-maroon-900/15 bg-bx-white p-6 sm:p-7">
                  <span className="text-bx-gold-600">
                    <Icon name={promise.icon} size={28} />
                  </span>
                  <h2 className="mt-4 font-sans text-lg font-extrabold text-bx-ink">
                    {promise.title}
                  </h2>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-muted">
                    {promise.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.26}>
              <div className="bg-bx-maroon-900 px-6 py-7 text-bx-ivory sm:px-7">
                <h2 className="font-sans text-lg font-extrabold">
                  Not ready for a demo?
                </h2>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-champagne/85">
                  Explore the platform and solutions first — or send a message
                  and ask a question. There is no obligation either way.
                </p>
                <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-2 font-sans text-[15px] font-extrabold text-bx-gold-400 hover:text-bx-champagne"
                  >
                    Explore the Platform
                    <Icon name="arrowRight" size={16} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="inline-flex items-center gap-2 font-sans text-[15px] font-extrabold text-bx-gold-400 hover:text-bx-champagne"
                  >
                    Contact Us
                    <Icon name="arrowRight" size={16} />
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream" ariaLabel="Demo frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="About the demo."
          />
          <Reveal>
            <FaqAccordion items={DEMO_FAQ} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
