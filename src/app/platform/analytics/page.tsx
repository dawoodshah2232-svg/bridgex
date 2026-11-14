/**
 * /platform/analytics — Data & Analytics (spec §8).
 * Dark photographic hero, role-view dashboard tabs with illustrative KPI
 * cards and a code-drawn funnel, exception queues, payment monitoring,
 * and exports & audit.
 *
 * DARK HERO — the coordinator adds "/platform/analytics" to
 * DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ANALYTICS_FAQS } from "@/content/platform-studio";
import PageHero from "@/components/platform/PageHero";
import AnalyticsViews from "@/components/platform/AnalyticsViews";
import { FaqSection } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import DemoLabel from "@/components/ui/DemoLabel";
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";
import { asset } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Data & Analytics — Dashboards, Funnels, Exceptions & Audit Trails",
  description:
    "Executive dashboards, sales and partner funnels, exception queues, payment monitoring, exports and audit trails — role-specific views on the same operational records.",
};

const EXCEPTIONS = [
  {
    title: "A payment that did not reconcile",
    text: "The provider says settled; the ledger says otherwise. The exception carries the request, the provider event and the ledger entry — so finance investigates one break, not a month.",
    tag: "Finance",
  },
  {
    title: "A document about to expire",
    text: "An identity document lapses in thirty days. The exception exists before it becomes a blocked account — and the client has already been asked for a replacement.",
    tag: "Compliance",
  },
  {
    title: "A screening flag awaiting review",
    text: "A watchlist screen returned a possible match. The exception holds the flag, the evidence and the application — and waits for a human decision, not an automatic one.",
    tag: "Compliance",
  },
  {
    title: "A lead gone quiet",
    text: "Seven days without activity on a qualified lead. The exception is a nudge, not an alarm — but it is visible, assigned and ageing in the open.",
    tag: "Sales",
  },
];

const MONITORING = [
  {
    title: "Provider health at a glance",
    text: "Approval rates, decline reasons and settlement timing per provider — so a degrading provider is visible before clients start reporting failures.",
  },
  {
    title: "Declines with a reason, not a code",
    text: "A declined payment shows its reason in plain language, with the retry path already decided by the routing rules — cascading retry is a configuration, not a support task.",
  },
  {
    title: "Settlement you can prove",
    text: "Every payment traces from request to provider event to ledger entry. When finance closes the day, the trail is the evidence — not a reconstruction from three dashboards.",
  },
];

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        href="/platform/analytics"
        dark
        eyebrow="Platform · Intelligence layer"
        title={
          <>
            The number in the board pack{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              and the number in the queue agree.
            </span>
          </>
        }
        copy="Dashboards, funnels and exception queues drawn from the same operational records your teams work with. There is no reporting copy to drift out of sync — so the figure a manager sees and the figure an agent works from are the same figure."
        image={{
          src: "/images/trader-workstation.jpg",
          alt: "Trading desk with a laptop showing a candlestick chart and a wall of monitors",
          width: 1600,
          height: 1067,
        }}
      />

      {/* Role views — interactive tabs */}
      <Section tone="mint" id="dashboards" ariaLabel="Dashboards by role">
        <SectionIntro
          label="Role-specific views"
          heading="The same records, seen through four different jobs."
          copy="An executive, a finance lead, a compliance reviewer and a sales lead do not need the same dashboard — they need the same truth, arranged for their decisions. Select a role to see its view. Every figure is illustrative sample data."
        />
        <div className="mt-12">
          <AnalyticsViews />
        </div>
      </Section>

      {/* Photographic interlude — the same truth, four jobs */}
      <PhotoBand
        image="/images/band-skyline-hongkong.jpg"
        alt="Hand gesturing at a candlestick chart on a dark trading monitor"
        eyebrow="Role-specific views"
        heading={
          <>
            The same truth,{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              arranged for their decisions.
            </span>
          </>
        }
        copy="Executives, finance, compliance and sales each get views built for their job — drawn from the same operational records, so the numbers agree everywhere."
        height="sm"
        imageWidth={1600}
        imageHeight={900}
      />

      {/* Funnels — editorial + photo */}
      <Section tone="white" id="funnels" ariaLabel="Funnels">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionIntro
              label="Funnels"
              heading="A funnel is a question, not a decoration."
              copy="Where do leads stall? Where do applications drop off? Where does funding fail? A funnel that cannot be drilled into — down to the actual records at each stage — is wallpaper. BridgeX funnels open into the queues behind them."
            />
            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Sales funnel — lead to funded account",
                  text: "Each stage is a live count of real records. Click a stage and you see the leads in it, their desks, and how long they have waited.",
                },
                {
                  title: "Partner funnel — referral to payout",
                  text: "Referred clients, attributed signups, earned commissions and settled payouts — the partner's journey and the business's, in one view.",
                },
                {
                  title: "Onboarding funnel — application to approval",
                  text: "Documents complete, checks passed, approvals granted — with drop-off visible by country, client type and step, so the fix lands on the step, not the applicant.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <Icon name="pamm" size={24} className="mt-0.5 shrink-0 text-bx-teal-600" />
                  <div>
                    <h3 className="font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-[58ch] text-[15px] leading-relaxed text-bx-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-full w-full border border-bx-teal-500/50"
              />
              <img
                src={asset("/images/boardroom-executives.jpg")}
                alt="Trader at a laptop in a dark office with a wall of market data"
                width={1920}
                height={1280}
                loading="lazy"
                className="relative aspect-[3/2] w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
              Decisions are made with a view of the whole business — not one
              desk&apos;s spreadsheet.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Exceptions — dark */}
      <Section tone="navy" id="exceptions" ariaLabel="Exception queues">
        <SectionIntro
          dark
          label="Exceptions"
          heading={
            <>
              The platform tells you{" "}
              <span className="font-sans font-semibold italic text-bx-teal-400">
                what needs a human.
              </span>
            </>
          }
          copy="Most of the business runs without attention. Exceptions are the small part that should not — items that did not match, complete or reconcile, each carrying the records and the reason it was raised."
        />
        <div className="mt-12 grid gap-px border border-bx-teal-500/25 bg-bx-teal-500/25 sm:grid-cols-2">
          {EXCEPTIONS.map((item) => (
            <div key={item.title} className="bg-bx-navy-900 rounded-2xl p-6 sm:p-8">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-bx-teal-400">
                {item.tag}
              </p>
              <h3 className="mt-3 font-sans text-lg font-extrabold leading-tight text-bx-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bx-slate-300/85">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <p className="max-w-[68ch] text-base leading-relaxed text-bx-slate-300/85">
            Exceptions are ordered by risk and age, assigned to a role, and
            tracked until resolved. An exception that nobody owns is not an
            exception queue — it is a pile. BridgeX keeps the queue owned.
          </p>
        </Reveal>
      </Section>

      {/* Payment monitoring + exports & audit */}
      <Section tone="white" ariaLabel="Payment monitoring, exports and audit">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionIntro
              label="Payment monitoring"
              heading="Watch the money move — and watch it match."
              copy="Deposits, withdrawals, provider performance and reconciliation state, monitored continuously. The question is never 'did the money move' — it is 'does every record agree that it moved'."
            />
            <div className="mt-8 space-y-6">
              {MONITORING.map((item) => (
                <div key={item.title}>
                  <h3 className="font-sans text-lg font-extrabold leading-tight text-bx-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-bx-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15px] leading-relaxed text-bx-slate-500">
              Routing and retry detail lives on the{" "}
              <Link href="/solutions/payment-orchestration" className="font-bold text-bx-teal-700 hover:underline">
                payment orchestration
              </Link>{" "}
              page.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8">
              <Icon name="audit" size={28} className="text-bx-teal-600" />
              <h3 className="mt-4 font-sans text-2xl font-extrabold leading-tight text-bx-navy-900">
                Exports and audit trails
              </h3>
              <p className="mt-3 text-base leading-relaxed text-bx-slate-500">
                Reports and dashboards export in standard formats for your own
                analysis — and exports are themselves logged, so data leaving
                the platform is accounted for. The audit trail behind them
                records who did what, when, and what changed, in a form a
                reviewer can follow without a developer in the room.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Scheduled and on-demand exports, per role",
                  "Exports logged: who exported what, and when",
                  "Audit events searchable by record, actor and date",
                  "Before-and-after values on significant changes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-bx-navy-900">
                    <Icon name="check" size={20} className="mt-0.5 shrink-0 text-bx-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <DemoLabel text="All figures on this page are illustrative" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FaqSection
        heading="Analytics questions, answered plainly."
        copy="Where the numbers come from, who sees what, what an exception is, and whether the figures on this page are real."
        items={ANALYTICS_FAQS}
        tone="mint"
      />

      <CtaBand
        heading="See your numbers the way BridgeX would show them."
        copy="A private demo builds a dashboard from your own structure — your desks, your providers, your funnel stages — so you can judge the reporting on your business, not on sample data."
      />
    </>
  );
}
