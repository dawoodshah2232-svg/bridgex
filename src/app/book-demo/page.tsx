import type { Metadata } from "next";
import Link from "next/link";
import { DEMO_FAQ } from "@/content/company";
import { asset } from "@/lib/paths";
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
            <em className="font-sans font-semibold italic text-bx-teal-400">
              on your workflows.
            </em>
          </>
        }
        copy="Three short steps. Tell us who you are, what your business does, and what you want to see — and we will build a demo around it."
        image="/images/handshake-deal.jpg"
        imageAlt=""
        imageWidth={1600}
        imageHeight={1152}
      />

      {/* Form + promises */}
      <Section tone="white" ariaLabel="Book a demo">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <Reveal>
            <div className="border border-bx-navy-900/15 bg-bx-white px-6 py-8 sm:px-10 sm:py-10">
              <DemoBookingForm />
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <div className="relative mb-3 mr-3 sm:mb-4 sm:mr-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-teal-500/60 sm:translate-x-4 sm:translate-y-4"
                />
                <img
                  src={asset("/images/portrait-window.jpg")}
                  alt="Close-up of a monitor showing a candlestick chart with volume bars"
                  width={1600}
                  height={1068}
                  loading="lazy"
                  className="relative aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>
            {DEMO_PROMISES.map((promise, i) => (
              <Reveal key={promise.title} delay={0.08 + i * 0.06}>
                <div className="border border-bx-navy-900/15 bg-bx-white p-6 sm:p-7">
                  <span className="text-bx-teal-600">
                    <Icon name={promise.icon} size={28} />
                  </span>
                  <h2 className="mt-4 font-sans text-lg font-extrabold text-bx-navy-900">
                    {promise.title}
                  </h2>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-slate-500">
                    {promise.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.26}>
              <div className="bg-bx-navy-900 px-6 py-7 text-bx-white sm:px-7">
                <h2 className="font-sans text-lg font-extrabold">
                  Not ready for a demo?
                </h2>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-slate-300/85">
                  Explore the platform and solutions first — or send a message
                  and ask a question. There is no obligation either way.
                </p>
                <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-2 font-sans text-[15px] font-extrabold text-bx-teal-400 hover:text-bx-slate-300"
                  >
                    Explore the Platform
                    <Icon name="arrowRight" size={16} />
                  </Link>
                  <Link
                    href="/company/contact"
                    className="inline-flex items-center gap-2 font-sans text-[15px] font-extrabold text-bx-teal-400 hover:text-bx-slate-300"
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
      <Section tone="mint" ariaLabel="Demo frequently asked questions">
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
