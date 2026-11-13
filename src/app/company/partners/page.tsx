import type { Metadata } from "next";
import { PARTNERS_FAQ, PARTNER_MODELS } from "@/content/company";
import InnerHero from "@/components/company/InnerHero";
import PartnerForm from "@/components/forms/PartnerForm";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Partner With Us — Go-to-Market, Integrations & Referrals",
  description:
    "Partner with BridgeX: joint go-to-market, technology integrations, and referrals. Terms agreed per relationship, in writing — apply through the partner form.",
};

export default function PartnersPage() {
  return (
    <>
      <InnerHero
        href="/company/partners"
        eyebrow="Company — Partner With Us"
        title={
          <>
            Better together,{" "}
            <em className="font-display font-semibold italic text-bx-maroon-700">
              on honest terms.
            </em>
          </>
        }
        copy="BridgeX works best as part of an ecosystem — firms that sell into financial businesses, technology providers whose products connect to brokerage operations, and introducers who spot a fit. Partnership terms are agreed per relationship, in writing."
        image="/images/interlude-boardroom.jpg"
        imageAlt="A diverse team collaborating in a modern conference room"
        imageWidth={1920}
        imageHeight={1282}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="#apply" size="lg">
            Apply to partner
          </ButtonLink>
          <ButtonLink href="/platform/integrations" variant="secondary" size="lg">
            Integration architecture
          </ButtonLink>
        </div>
      </InnerHero>

      {/* Three models */}
      <Section tone="white" ariaLabel="Ways to partner">
        <SectionIntro
          label="Three ways in"
          heading="How partnerships work."
          copy="Whichever route fits, the shape is the same: a real conversation first, terms agreed in writing, and attribution that starts from first contact."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PARTNER_MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 0.07}>
              <article className="flex h-full flex-col border border-bx-maroon-900/15 bg-bx-ivory p-7">
                <span className="text-bx-gold-600">
                  <Icon name={model.icon} size={30} />
                </span>
                <h3 className="mt-5 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-ink">
                  {model.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-bx-muted">
                  {model.description}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-bx-gold-500/30 pt-5">
                  {model.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-bx-ink"
                    >
                      <span aria-hidden="true" className="mt-0.5 shrink-0 text-bx-gold-600">
                        <Icon name="check" size={16} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Application form */}
      <Section tone="cream" id="apply" ariaLabel="Partner application">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionIntro
              label="Apply"
              heading="Tell us about the opportunity."
              copy="A few lines is enough to start. Tell us what your company does, who your clients are, and what working together might look like."
            />
            <Reveal className="mt-8">
              <div className="border border-bx-gold-600/50 bg-bx-white px-6 py-6">
                <h3 className="font-sans text-base font-extrabold text-bx-ink">
                  What happens after you apply
                </h3>
                <ol className="mt-4 space-y-3 font-body text-[15px] leading-relaxed text-bx-muted">
                  <li>
                    <span className="font-sans font-extrabold text-bx-maroon-700">1. </span>
                    A person reads your application — not an autoresponder.
                  </li>
                  <li>
                    <span className="font-sans font-extrabold text-bx-maroon-700">2. </span>
                    We reply within a few working days to arrange a conversation.
                  </li>
                  <li>
                    <span className="font-sans font-extrabold text-bx-maroon-700">3. </span>
                    If there is a fit, terms are agreed per relationship, in writing.
                  </li>
                </ol>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="border border-bx-maroon-900/15 bg-bx-white px-6 py-8 sm:px-10 sm:py-10">
              <h2 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-ink">
                Partner application
              </h2>
              <p className="mt-2 font-body text-base leading-relaxed text-bx-muted">
                We do not publish tier tables or commission rates — the right
                terms depend on what each side brings, and we agree them
                together.
              </p>
              <div className="mt-8">
                <PartnerForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="ivory" ariaLabel="Partnership frequently asked questions">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <SectionIntro
            label="Questions"
            heading="Before you apply."
          />
          <Reveal>
            <FaqAccordion items={PARTNERS_FAQ} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Know a business that needs us?"
        copy="Even a short introduction helps — tell us who they are and why BridgeX fits, and we will take it from there."
        primaryLabel="Apply to partner"
        primaryHref="/company/partners#apply"
        secondaryLabel="Book a Private Demo"
        secondaryHref="/book-demo"
      />
    </>
  );
}
