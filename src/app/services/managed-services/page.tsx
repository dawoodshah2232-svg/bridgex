import type { Metadata } from "next";
import { MANAGED_FAQ, MANAGED_PILLARS, MANAGED_REPORTING } from "@/content/company";
import { asset } from "@/lib/paths";
import InnerHero from "@/components/company/InnerHero";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import PhotoBand from "@/components/ui/PhotoBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Managed Services — Support, Monitoring & Optimisation",
  description:
    "BridgeX managed services: support workflows, platform monitoring, incident and change management, and continuous optimisation — with reporting based on what is actually measured.",
};

export default function ManagedServicesPage() {
  return (
    <>
      <InnerHero
        dark
        href="/services/managed-services"
        eyebrow="Services — Managed Services"
        title={
          <>
            Go-live is the beginning,{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              not the finish line.
            </em>
          </>
        }
        copy="After launch, managed services keep the platform healthy and your team supported: a clear support route, monitoring that surfaces problems early, disciplined change management, and regular reviews that keep the configuration aligned with your business."
        image="/images/banking-hall.jpg"
        imageAlt=""
        imageWidth={1600}
        imageHeight={1068}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/company/contact" size="lg">
            Discuss managed services
          </ButtonLink>
          <ButtonLink href="/services/implementation" variant="secondaryLight" size="lg">
            Implementation method
          </ButtonLink>
        </div>
      </InnerHero>

      {/* Four pillars */}
      <Section tone="white" ariaLabel="What managed services cover">
        <SectionIntro
          label="The service"
          heading="Four things, done steadily."
          copy="Managed services is not a hotline. It is a standing arrangement that covers support, monitoring, change and improvement — so the platform you launched is still the platform you need a year later."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {MANAGED_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i % 2) * 0.07}>
              <article className="flex h-full flex-col border border-bx-navy-900/15 bg-bx-white p-7 sm:p-8">
                <div className="flex items-center gap-5">
                  <FeatureIcon icon={pillar.icon} size="sm" className="shrink-0" />
                  <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 font-body text-base leading-relaxed text-bx-slate-500">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-bx-teal-500/30 pt-6">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-[15px] leading-relaxed text-bx-navy-900"
                    >
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-bx-teal-600">
                        <Icon name="check" size={18} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Photo interlude — watched, not just running */}
      <PhotoBand
        image="/images/band-bridge-london.jpg"
        alt="Hand pointing at candlestick charts across dark trading monitors"
        eyebrow="Managed services"
        heading={
          <>
            The platform,{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              watched.
            </em>
          </>
        }
        copy="Monitoring surfaces problems before your team has to report them — and every request is tracked to a resolution."
        height="sm"
        imageWidth={1600}
        imageHeight={900}
      >
        <ButtonLink href="/company/contact">Discuss managed services</ButtonLink>
      </PhotoBand>

      {/* Support workflow strip */}
      <Section tone="navy" ariaLabel="How a support request is handled">
        <SectionIntro
          dark
          label="Support workflow"
          heading="From &ldquo;something is wrong&rdquo; to resolved."
          copy="Every request follows the same path. Your team always knows where their request stands — and nothing is closed until you agree it is done."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "Raise", text: "Your team contacts the named support route with the issue." },
            { step: "Triage", text: "We assess impact first — urgent operational issues jump the queue." },
            { step: "Resolve", text: "The fix or answer, with you kept informed while it is in progress." },
            { step: "Close & learn", text: "Confirmed with you, then recorded so the next time is faster." },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 0.07}>
              <li className="h-full border border-bx-teal-500/30 bg-bx-navy-800/60 p-6">
                <span className="font-sans text-3xl font-semibold text-bx-teal-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-lg font-extrabold text-bx-white">
                  {item.step}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-slate-300/85">
                  {item.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Reporting — honest */}
      <Section tone="white" ariaLabel="What we report">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionIntro
              label="Reporting"
              heading="Reported from real data. Nothing else."
              copy="We report what we measure. Where the platform is instrumented, you see real availability and support figures. Where it is not, we say so — we do not publish numbers we cannot stand behind."
            />
            <Reveal className="mt-10">
              <div className="relative mb-3 mr-3 max-w-sm sm:mb-4 sm:mr-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-teal-500/60 sm:translate-x-4 sm:translate-y-4"
                />
                <img
                  src={asset("/images/support-headset.jpg")}
                  alt="Customer support agent wearing a headset and smiling"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="relative aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="space-y-4">
            {MANAGED_REPORTING.map((report, i) => (
              <Reveal key={report.title} delay={i * 0.06}>
                <article className="border border-bx-navy-900/15 bg-bx-white p-6 sm:p-7">
                  <h3 className="font-sans text-lg font-extrabold text-bx-navy-900">
                    {report.title}
                  </h3>
                  <p className="mt-2 max-w-[66ch] font-body text-[15px] leading-relaxed text-bx-slate-500">
                    {report.description}
                  </p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.18}>
              <p className="border border-bx-teal-600/50 bg-bx-mint-50 px-6 py-5 font-body text-[15px] leading-relaxed text-bx-navy-900">
                <span className="font-sans font-extrabold text-bx-teal-700">
                  No invented SLAs.{" "}
                </span>
                Support scope, response targets and reporting are agreed per
                engagement and written into your services agreement. Ask us
                and we will put the specifics in writing for your business.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="mint" ariaLabel="Managed services frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="About ongoing support."
          />
          <Reveal>
            <FaqAccordion items={MANAGED_FAQ} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Keep the platform working for you."
        copy="Talk to us about what managed services would look like for your deployment — scope, reporting and response, agreed in writing."
        primaryLabel="Book a Private Demo"
        primaryHref="/book-demo"
        secondaryLabel="Talk to an Expert"
        secondaryHref="/company/contact"
      />
    </>
  );
}
