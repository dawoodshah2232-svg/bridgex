import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONTACT, SITE_SOCIAL_LINKS } from "@/content/site";
import InnerHero from "@/components/company/InnerHero";
import ContactForm from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import PhotoBand from "@/components/ui/PhotoBand";
import { ButtonLink } from "@/components/ui/Button";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Talk to a Person",
  description:
    "Talk to a person about your business. Call or WhatsApp +971 58 543 1107, email sales@bridgexapps.com, or send an enquiry through the contact form — a member of the BridgeX team will respond.",
};

const NEXT_STEPS = [
  {
    title: "We read it",
    text: "Every message is read by a person on the BridgeX team — not filtered by an autoresponder.",
  },
  {
    title: "We reply",
    text: "We aim to respond within a few working days, sooner when the message says it is urgent.",
  },
  {
    title: "We talk",
    text: "If your enquiry needs a conversation, we will arrange a call at a time that suits you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <InnerHero
        href="/company/contact"
        eyebrow="Company — Contact"
        title={
          <>
            Talk to a person{" "}
            <em className="font-sans font-semibold italic text-bx-teal-700">
              about your business.
            </em>
          </>
        }
        copy="Call, message or write — a member of the BridgeX team will read it and reply. Phone & WhatsApp +971 58 543 1107, Mon–Fri 9:00–18:00 GST."
        image="/images/lobby-office.jpg"
        imageAlt="Overhead desk with printed charts, a magnifier, cash and a calculator"
        imageWidth={1600}
        imageHeight={1067}
      />
      <div className="bg-bx-white pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="border border-bx-navy-900/15 bg-bx-white px-6 py-8 sm:px-10 sm:py-10">
                <h2 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-navy-900">
                  Send us a message
                </h2>
                <p className="mt-2 font-body text-base leading-relaxed text-bx-slate-500">
                  Tell us about your business and what you would like to
                  discuss. The more specific you are, the more useful our
                  reply will be.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* Side panel */}
            <div className="space-y-6">
              <Reveal delay={0.08}>
                <div className="bg-bx-navy-900 px-7 py-8 text-bx-white">
                  <h2 className="font-sans text-xl font-extrabold tracking-[-0.01em]">
                    What happens next
                  </h2>
                  <ol className="mt-6 space-y-6">
                    {NEXT_STEPS.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="font-sans text-2xl font-semibold text-bx-teal-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="font-sans text-base font-extrabold">
                            {step.title}
                          </h3>
                          <p className="mt-1 font-body text-[15px] leading-relaxed text-bx-slate-300/85">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="border border-bx-teal-600/50 bg-bx-mint-50 px-7 py-8">
                  <span className="text-bx-teal-600">
                    <Icon name="mail" size={28} />
                  </span>
                  <h2 className="mt-4 font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                    Business details
                  </h2>
                  <dl className="mt-4 space-y-4 font-body text-[15px] leading-relaxed text-bx-navy-900">
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        Sales
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${SITE_CONTACT.salesEmail}`}
                          className="font-bold text-bx-teal-700 hover:underline"
                        >
                          {SITE_CONTACT.salesEmail}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        General enquiries
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${SITE_CONTACT.email}`}
                          className="font-bold text-bx-teal-700 hover:underline"
                        >
                          {SITE_CONTACT.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        Compliance
                      </dt>
                      <dd>
                        <a
                          href={`mailto:${SITE_CONTACT.complianceEmail}`}
                          className="font-bold text-bx-teal-700 hover:underline"
                        >
                          {SITE_CONTACT.complianceEmail}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        {SITE_CONTACT.phoneNote}
                      </dt>
                      <dd>
                        <a
                          href={`tel:${(SITE_CONTACT.phone ?? "").replace(/[\s-]/g, "")}`}
                          className="font-bold text-bx-teal-700 hover:underline"
                        >
                          {SITE_CONTACT.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        Office
                      </dt>
                      <dd>{SITE_CONTACT.address}</dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        Hours
                      </dt>
                      <dd>{SITE_CONTACT.hours}</dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-bx-slate-500">
                        Follow us
                      </dt>
                      <dd className="flex flex-wrap gap-x-4 gap-y-1">
                        {SITE_SOCIAL_LINKS.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-bx-teal-700 hover:underline"
                          >
                            {link.label}
                          </a>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="border border-bx-navy-900/15 bg-bx-white px-7 py-8">
                  <h2 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900">
                    Prefer a demo instead?
                  </h2>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-bx-slate-500">
                    If you want to see the platform running on your own
                    workflows, a private demo is the fastest route — 45 to 60
                    minutes, built around your business.
                  </p>
                  <p className="mt-4">
                    <Link
                      href="/book-demo"
                      className="inline-flex items-center gap-2 font-sans text-[15px] font-extrabold text-bx-teal-700 hover:text-bx-navy-900"
                    >
                      Book a Private Demo
                      <Icon name="arrowRight" size={18} />
                    </Link>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Below the fold: reassurance, not filler */}
          <div className="mt-16 lg:mt-20">
            <SectionIntro
              label="Good to know"
              heading="We will be direct with you."
              copy="If BridgeX is not the right fit for what you need, we will say so — and say why. If it is, we will tell you honestly what the path to production looks like, including the parts that take time."
            />
          </div>
        </Container>
      </div>

      {/* Photo interlude — a person, not a queue */}
      <PhotoBand
        image="/images/skyline-sunset.jpg"
        alt="Trader on the phone at a desk with two laptops showing charts, seen from behind"
        eyebrow="Company — Contact"
        heading={
          <>
            We read{" "}
            <em className="font-sans font-semibold italic text-bx-teal-400">
              every message.
            </em>
          </>
        }
        copy="No phone queues, no chatbot loops — a member of the BridgeX team will read it and reply."
        height="sm"
        imageWidth={1600}
        imageHeight={1067}
      >
        <ButtonLink href="/book-demo">Book a Private Demo</ButtonLink>
      </PhotoBand>
    </>
  );
}
