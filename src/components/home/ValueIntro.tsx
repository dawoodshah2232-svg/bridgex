/**
 * H02 — Value introduction: "One connected operating ecosystem."
 *
 * The argument: five disconnects every brokerage recognises, then the turn
 * to connection. Editorial split layout with a full-width skyline photograph
 * below — the city the business operates in.
 */
import Link from "next/link";
import { asset } from "@/lib/paths";
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import FeatureIcon from "../ui/FeatureIcon";
import Icon, { type IconName } from "../icons";

const DISCONNECTS: { title: string; icon: IconName; text: string }[] = [
  {
    title: "Leads",
    icon: "funnel",
    text: "Captured in one tool, worked in another, lost somewhere between the two.",
  },
  {
    title: "Accounts",
    icon: "users",
    text: "Client accounts that no single screen can describe end to end.",
  },
  {
    title: "Payments",
    icon: "wallet",
    text: "Deposits and withdrawals reconciled by hand, after the fact.",
  },
  {
    title: "Partners",
    icon: "ib",
    text: "Partner networks tracked in spreadsheets, commissions disputed monthly.",
  },
  {
    title: "Trading tools",
    icon: "chart",
    text: "Trading operations run on a separate island from the business around them.",
  },
];

export default function ValueIntro() {
  return (
    <Section id="value" tone="white" ariaLabel="One connected operating ecosystem">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionIntro
            label="The problem we solve"
            heading={
              <>
                One connected operating{" "}
                <span className="font-sans font-semibold italic text-bx-teal-700">
                  ecosystem.
                </span>
              </>
            }
            copy="A brokerage is not one business. It is five or six, running on five or six disconnected systems — and the gaps between them are where clients wait, money stalls and partners lose trust."
          />
          <Reveal delay={0.15} className="mt-8">
            <p className="max-w-[52ch] text-base leading-relaxed text-bx-navy-900">
              BridgeX was built from the connection outward: one shared record
              for every client, one ledger for every movement of money, one
              workflow engine tying onboarding, operations, payments and
              partners together. Add the capabilities you need today; connect
              more when you are ready — without rebuilding.
            </p>
            <Link
              href="/platform"
              className="group mt-7 inline-flex items-center gap-2 font-sans text-base font-bold text-bx-teal-700 hover:text-bx-navy-900"
            >
              Explore the platform
              <Icon
                name="arrowRight"
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <ul className="divide-y divide-bx-teal-500/25 border-y border-bx-teal-500/25">
              {DISCONNECTS.map((d) => (
                <li key={d.title} className="flex gap-5 py-5">
                  <FeatureIcon icon={d.icon} size="sm" className="shrink-0" />
                  <div>
                    <h3 className="font-sans text-lg font-bold text-bx-navy-900">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-bx-slate-500">
                      {d.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} className="mt-14 lg:mt-20">
        <figure>
          <img
            src={asset("/images/hero-bridge-night.jpg")}
            alt="Close-up of a monitor showing a rising candlestick chart"
            width={1600}
            height={1068}
            loading="lazy"
            className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
          />
          <figcaption className="mt-3 text-sm text-bx-slate-500">
            The markets never sleep in one timezone. Neither should your
            operations.
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
