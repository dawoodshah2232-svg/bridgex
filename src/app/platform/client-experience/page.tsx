/**
 * /platform/client-experience — Client Experience (spec §8).
 * Dark photographic hero, audience tabs (client room / partner
 * portal / advisor interface), mobile-first layouts, notifications &
 * documents, and branded journeys.
 *
 * DARK HERO — the coordinator adds "/platform/client-experience" to
 * DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT_EXPERIENCE_FAQS } from "@/content/platform";
import PageHero from "@/components/platform/PageHero";
import AudienceTabs from "@/components/platform/AudienceTabs";
import { FaqSection, WorkflowSteps } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import DemoLabel from "@/components/ui/DemoLabel";
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Client Experience — Branded Rooms, Portals & Advisor Interfaces",
  description:
    "White-label client rooms, partner portals and advisor interfaces — responsive, mobile-first, and branded as your business. Notifications, documents and journeys that clients can follow.",
};

const MOBILE_POINTS = [
  {
    title: "Registration that fits a thumb",
    text: "Short steps, large targets, progress that survives an interruption — a client can start on the train and finish at their desk.",
  },
  {
    title: "Documents from the camera",
    text: "Uploads work from a phone camera, with a visible status for each document: received, under review, approved, or needs attention.",
  },
  {
    title: "Funding without a desktop",
    text: "Deposit and withdrawal requests, with status at each step, are fully usable on a phone — because that is where most clients are.",
  },
  {
    title: "Notifications that respect attention",
    text: "Status changes arrive as push or email notifications the client chose. No noise, no marketing dressed as an update.",
  },
];

const JOURNEY_STEPS = [
  {
    title: "Welcome in your words",
    text: "The first email, the first screen and the first step all carry your copy, your tone and your brand.",
  },
  {
    title: "Steps that adapt",
    text: "Country, client type and product shape the journey — a corporate applicant sees beneficial-owner steps; an individual does not.",
  },
  {
    title: "Progress, always visible",
    text: "Clients see what is done, what is outstanding and what happens next — at every step, on every device.",
  },
  {
    title: "A human, one tap away",
    text: "Every journey ends at a person when it needs to: a case, a message, a call-back — with the journey's context attached.",
  },
];

const PHONE_ROWS = [
  { label: "Verification", value: "Approved" },
  { label: "Live account", value: "Ready to fund" },
  { label: "Deposit", value: "Settled · 09:41" },
  { label: "Support case", value: "Replied 12 min ago" },
];

export default function ClientExperiencePage() {
  return (
    <>
      <PageHero
        href="/platform/client-experience"
        dark
        eyebrow="Platform · Experience layer"
        title={
          <>
            The room your clients{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              actually meet you in.
            </span>
          </>
        }
        copy="Most of what a client thinks of your business is the room you give them: how it looks, whether it answers, and whether it remembers them. BridgeX builds that room in your brand — for clients, for partners, and for the advisors who look after them."
        image={{
          src: "/images/team-collaboration.jpg",
          alt: "Hand pointing at a printed bar chart and line graph on a wooden desk",
          width: 1500,
          height: 994,
          objectPosition: "50% 8%",
        }}
      />

      {/* Audiences — interactive tabs */}
      <Section tone="mint" id="audiences" ariaLabel="Who the experience is built for">
        <SectionIntro
          label="Three audiences, one record"
          heading="One platform, three very different rooms."
          copy="A client, a partner and an advisor should never see the same screen — they need different things, and they are permitted different things. Select an audience to see what their room holds."
        />
        <div className="mt-12">
          <AudienceTabs />
        </div>
      </Section>

      {/* Photographic interlude — the room reads as your business */}
      <PhotoBand
        image="/images/lobby-office.jpg"
        alt="Overhead desk with printed charts, a magnifier, cash and a calculator"
        eyebrow="Your brand, not ours"
        heading={
          <>
            A room that reads{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              as your business.
            </span>
          </>
        }
        copy="Logo, colours, wording and domain are all configurable, and the journeys clients walk use your copy and your steps. BridgeX stays in the background."
        height="sm"
        imageWidth={1600}
        imageHeight={1067}
      />

      {/* Mobile-first — phone mock in code */}
      <Section tone="white" id="mobile" ariaLabel="Mobile-first layouts">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionIntro
              label="Mobile-first"
              heading="Designed for the phone first — not squeezed onto it."
              copy="Most clients meet you on a phone, often on a slow connection, often in a hurry. The client room is laid out for that reality: short steps, honest progress, and nothing that requires a desktop to complete."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {MOBILE_POINTS.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.07}>
                  <div className="h-full border border-bx-teal-500/25 bg-bx-white rounded-2xl p-5">
                    <h3 className="font-sans text-base font-extrabold leading-tight text-bx-navy-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-500">{point.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Phone frame — code-drawn, illustrative */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="mx-auto max-w-[340px] border border-bx-teal-500/40 bg-bx-navy-950 p-3">
              <div className="bg-bx-white p-5">
                <div className="flex items-center justify-between">
                  <p className="font-sans text-sm font-extrabold text-bx-navy-900">Your Brand</p>
                  <span
                    aria-hidden="true"
                    className="block h-2 w-2 rotate-45 bg-bx-teal-600"
                  />
                </div>
                <p className="mt-4 font-sans text-xl font-extrabold leading-tight text-bx-navy-900">
                  Good morning, Amira.
                </p>
                <p className="mt-1 text-sm text-bx-slate-500">
                  Your account is verified and ready.
                </p>
                <div className="mt-5 space-y-3">
                  {PHONE_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-3 border-b border-bx-teal-500/20 pb-3"
                    >
                      <span className="text-sm text-bx-slate-500">{row.label}</span>
                      <span className="text-right font-sans text-sm font-bold text-bx-navy-900">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border border-bx-teal-600/50 px-3 py-2 text-center font-sans text-sm font-bold text-bx-teal-700">
                  Fund your account
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <DemoLabel text="Illustrative layout — fictional client" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Notifications & documents — dark */}
      <Section tone="navy" id="notifications" ariaLabel="Notifications and documents">
        <SectionIntro
          dark
          label="Staying in touch"
          heading={
            <>
              Notifications and documents,{" "}
              <span className="font-sans font-semibold italic text-bx-teal-400">
                where they belong.
              </span>
            </>
          }
          copy="Clients do not chase updates when updates come to them — and documents do not get lost when they live on the record instead of in an inbox."
        />
        <div className="mt-12 grid gap-px border border-bx-teal-500/25 bg-bx-teal-500/25 md:grid-cols-2">
          <div className="bg-bx-navy-900 rounded-2xl p-6 sm:p-8">
            <Icon name="mail" size={28} className="text-bx-teal-400" />
            <h3 className="mt-4 font-sans text-xl font-extrabold leading-tight text-bx-white">
              Notifications with a reason
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-bx-slate-300/85">
              Every notification is tied to a status change the client cares
              about: a document approved, a payment settled, a reply from
              support. Clients choose their channels, and every message is
              logged on the record — so support can see exactly what a client
              was told, and when.
            </p>
            <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-bx-slate-300/85">
              <li className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Email, SMS and push — per client preference
              </li>
              <li className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Status changes, not marketing noise
              </li>
              <li className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Every send logged against the client record
              </li>
            </ul>
          </div>
          <div className="bg-bx-navy-900 rounded-2xl p-6 sm:p-8">
            <Icon name="document" size={28} className="text-bx-teal-400" />
            <h3 className="mt-4 font-sans text-xl font-extrabold leading-tight text-bx-white">
              Documents on the record
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-bx-slate-300/85">
              Identity documents, agreements, statements and uploads live
              against the client, the case or the account they belong to —
              versioned, permissioned and retrievable. When a document
              expires, the client is asked for a new one before it becomes a
              problem.
            </p>
            <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-bx-slate-300/85">
              <li className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Versioned, so the signed copy is the retrievable copy
              </li>
              <li className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Expiry reminders before a document lapses
              </li>
              <li className="flex gap-3">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-400" />
                Access governed by role, like everything else
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Branded journeys */}
      <Section tone="white" ariaLabel="Branded client journeys">
        <SectionIntro
          label="Branded journeys"
          heading="A journey is a story you tell in your own words."
          copy="Registration, verification, funding and beyond — each journey is a sequence of steps with your copy, your brand and your rules. The studio is where those journeys are shaped; this is what they feel like from the client's side."
        />
        <div className="mt-12">
          <WorkflowSteps steps={JOURNEY_STEPS} />
        </div>
        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-[68ch] text-base leading-relaxed text-bx-slate-500">
            Journeys are configured in the{" "}
            <Link href="/platform/no-code-studio" className="font-bold text-bx-teal-700 hover:underline">
              No-Code Studio
            </Link>{" "}
            and run through the operations layer — so a journey step that
            needs a human lands in a queue with the client’s whole history
            attached, and the{" "}
            <Link href="/solutions/digital-onboarding" className="font-bold text-bx-teal-700 hover:underline">
              onboarding solution
            </Link>{" "}
            describes the verification detail.
          </p>
        </Reveal>
      </Section>

      <FaqSection
        heading="Client experience questions, answered plainly."
        copy="Branding, partner visibility, mobile behaviour, and what happens when an advisor leaves."
        items={CLIENT_EXPERIENCE_FAQS}
        tone="mint"
      />

      <CtaBand
        heading="Walk through the client room yourself."
        copy="The best way to judge an experience is to use it. A private demo puts you in the client room, the partner portal and the advisor interface — as your own clients would see them."
      />
    </>
  );
}
