import type { Metadata } from "next";
import { CAREERS_VALUES } from "@/content/company";
import { asset } from "@/lib/paths";
import InnerHero from "@/components/company/InnerHero";
import CareersForm from "@/components/forms/CareersForm";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers — Work at BridgeX",
  description:
    "Careers at BridgeX: no open roles are currently listed, but we welcome general inquiries from people who build things that hold up.",
};

export default function CareersPage() {
  return (
    <>
      <InnerHero
        href="/company/careers"
        eyebrow="Company — Careers"
        title={
          <>
            Build things{" "}
            <em className="font-display font-semibold italic text-bx-maroon-700">
              that hold up.
            </em>
          </>
        }
        copy="BridgeX is built by a small team that owns its work end to end — from the first workshop note to the system running in production. Financial operations software has to be right, not just fast, and that shapes how we work."
        image="/images/team-strategy.jpg"
        imageAlt="Colleagues discussing strategy in a relaxed office lounge"
        imageWidth={1600}
        imageHeight={1067}
      />

      {/* No open roles — stated plainly */}
      <Section tone="white" ariaLabel="Open roles">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="border border-bx-gold-600/50 bg-bx-cream px-6 py-10 sm:px-10">
            <span className="mx-auto block w-fit text-bx-gold-600">
              <Icon name="users" size={36} />
            </span>
            <h2 className="mt-5 font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-ink sm:text-3xl">
              No open roles currently listed
            </h2>
            <p className="mx-auto mt-3 max-w-[58ch] font-body text-base leading-relaxed text-bx-muted">
              We do not post roles that do not exist. When a role opens, it
              will be listed here with a real description and a real hiring
              process. In the meantime, the general inquiry form below is open
              — every inquiry is read by a person when a relevant role appears.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* What working here is like */}
      <Section tone="ivory" ariaLabel="What working at BridgeX is like">
        <SectionIntro
          label="How we work"
          heading="What it is like here."
          copy="Four things that are true about working at BridgeX — the same standards we hold the product to."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {CAREERS_VALUES.map((value, i) => (
            <Reveal key={value.title} delay={(i % 2) * 0.07}>
              <article className="flex h-full gap-5 border border-bx-maroon-900/15 bg-bx-white p-7">
                <span className="shrink-0 text-bx-gold-600">
                  <Icon name={value.icon} size={30} />
                </span>
                <div>
                  <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-muted">
                    {value.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* General inquiry form */}
      <Section tone="cream" ariaLabel="General inquiry">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionIntro
              label="General inquiry"
              heading="Interested anyway? Say hello."
              copy="Tell us what you do and what kind of work interests you. If a role opens that fits, your inquiry is already in front of us."
            />
            <Reveal className="mt-8">
              <div className="relative mb-3 mr-3 max-w-sm sm:mb-4 sm:mr-4">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-bx-gold-500/60 sm:translate-x-4 sm:translate-y-4"
                />
                <img
                  src={asset("/images/team-laptop.jpg")}
                  alt="Diverse team in discussion around a boardroom table"
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="relative aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="mt-8">
              <p className="border border-bx-gold-600/50 bg-bx-white px-6 py-5 font-body text-[15px] leading-relaxed text-bx-muted">
                <span className="font-sans font-extrabold text-bx-maroon-700">
                  An honest note:{" "}
                </span>
                there are no open roles right now, so we cannot promise a
                reply timeline. We can promise that your inquiry will be read
                by a person, and that you can ask us to delete your details at
                any time.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="border border-bx-maroon-900/15 bg-bx-white px-6 py-8 sm:px-10 sm:py-10">
              <h2 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-ink">
                General inquiry
              </h2>
              <p className="mt-2 font-body text-base leading-relaxed text-bx-muted">
                A few lines about what you do and what interests you — links
                to a portfolio or profile are welcome.
              </p>
              <div className="mt-8">
                <CareersForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
