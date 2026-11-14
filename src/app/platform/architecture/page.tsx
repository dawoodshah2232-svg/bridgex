/**
 * /platform/architecture — Architecture (spec §8).
 * Dark photographic hero, the interactive stacked architecture diagram,
 * API-first, enterprise controls and coexistence.
 *
 * DARK HERO — the coordinator adds "/platform/architecture" to
 * DARK_HERO_ROUTES.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ARCHITECTURE_FAQS, ENTERPRISE_CONTROLS } from "@/content/platform";
import { asset } from "@/lib/paths";
import PageHero from "@/components/platform/PageHero";
import ArchitectureExplorer from "@/components/platform/ArchitectureExplorer";
import { FaqSection, WorkflowSteps } from "@/components/platform/Sections";
import { Section } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import Reveal from "@/components/ui/Reveal";
import PhotoBand from "@/components/ui/PhotoBand";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/icons";

export const metadata: Metadata = {
  title: "Architecture — Separated Layers, One Shared Foundation",
  description:
    "Experience, operations, integrations and intelligence — separated by design, connected through one tenant, data, roles, workflow, events and audit foundation. API-first and built to coexist.",
};

const API_POINTS = [
  {
    title: "The interface is an API client",
    text: "Everything a screen can do, an API call can do — with the same permissions, the same validation and the same audit trail. There is no privileged back door around the rules.",
  },
  {
    title: "Events, not polling",
    text: "When something meaningful changes — a client is verified, a payment settles, a commission is approved — BridgeX emits an event. Connected systems subscribe; they do not poll.",
  },
  {
    title: "Contracts before code",
    text: "Each adapter and endpoint works to a defined contract: what it sends, what it expects back, and what happens when either side fails. Contracts are versioned, so a change is a decision, not an accident.",
  },
  {
    title: "Sandbox first, always",
    text: "New integrations and API consumers are proven against a non-production environment before they touch live records. Production access is granted deliberately, never by default.",
  },
];

const COEXISTENCE = [
  {
    title: "Map what you have",
    text: "We start from your current stack — trading platforms, PSPs, CRM — and map which records BridgeX owns and which it mirrors.",
  },
  {
    title: "Connect one workflow",
    text: "The first integration goes live on a single workflow, reconciled daily, so the connection is proven before it carries weight.",
  },
  {
    title: "Move in stages",
    text: "Workflows migrate one at a time. Teams keep working in the old system for what has not moved yet — nothing switches in a single cutover.",
  },
  {
    title: "Retire with evidence",
    text: "A legacy system is switched off only when its records reconcile and its workflows have a tested home. The evidence, not the calendar, decides.",
  },
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        href="/platform/architecture"
        dark
        eyebrow="Platform · Architecture"
        title={
          <>
            Separated by design.{" "}
            <span className="font-display font-semibold italic text-bx-champagne">
              Connected by foundation.
            </span>
          </>
        }
        copy="BridgeX keeps its four layers apart on purpose — so each can change without breaking the others — and joins them through one foundation: one tenant model, one data model, one set of roles, one workflow engine, one event system and one audit log."
        image={{
          src: "/images/hero-bridge-rotterdam.jpg",
          alt: "Erasmus Bridge and Rotterdam skyline at blue hour",
          width: 1920,
          height: 1280,
        }}
      />

      {/* Interactive architecture diagram */}
      <Section tone="cream" id="diagram" ariaLabel="Interactive architecture diagram">
        <SectionIntro
          label="The diagram"
          heading="Explore the architecture — layer by layer."
          copy="Select a layer to see what it holds, or a foundation capability to see what runs underneath everything. The diagram is the architecture: layers never talk to each other directly, and never keep private copies of data."
        />
        <div className="mt-12">
          <ArchitectureExplorer />
        </div>
      </Section>

      {/* Why separation matters */}
      <Section tone="ivory" ariaLabel="Why separation matters">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              label="Design principle"
              heading="Separation is what makes change safe."
              copy="When the client experience changes, the ledger does not notice. When a payment provider is swapped, the onboarding journey does not care. That is not an accident of the diagram — it is the point of it."
            />
            <Reveal delay={0.12} className="mt-10">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full border border-bx-gold-500/50"
                />
                <img
                  src={asset("/images/banking-hall.jpg")}
                  alt="Spacious modern banking hall with a dramatic ceiling"
                  width={1600}
                  height={1067}
                  loading="lazy"
                  className="relative aspect-[3/2] w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-bx-muted">
                A structure holds because its parts are separate — and joined
                through one foundation.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {[
                {
                  title: "Change one layer, not four",
                  text: "A new client-room design, a new payment provider, a new dashboard — each lands in its own layer. The foundation absorbs the change; the other layers keep working exactly as they did.",
                },
                {
                  title: "One record, read four ways",
                  text: "A client is one record. The experience layer shows it, the operations layer works it, the integrations layer moves money against it, and the intelligence layer reports on it. Four views, one truth — so the numbers in the board pack and the numbers in the queue agree.",
                },
                {
                  title: "Boundaries you can test",
                  text: "Tenant separation, permissions and audit are foundation capabilities, not features of a single screen. They can be tested as a whole — which is how you know a permission set once actually holds everywhere.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex gap-5 border-t border-bx-gold-500/30 pt-6">
                    <span className="font-sans text-sm font-bold tracking-[0.18em] text-bx-maroon-700">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-sans text-xl font-extrabold leading-tight text-bx-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-bx-muted">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Photographic interlude — the diagram is the architecture */}
      <PhotoBand
        image="/images/skyline-sunset.jpg"
        alt="City skyline at sunset"
        eyebrow="The diagram"
        heading={
          <>
            The diagram{" "}
            <span className="font-display font-semibold italic text-bx-champagne">
              is the architecture.
            </span>
          </>
        }
        copy="Layers never talk to each other directly, and never keep private copies of data — a change in one layer is visible to the others because it lands in the same records."
        height="sm"
        imageWidth={1600}
        imageHeight={899}
      />

      {/* API-first */}
      <Section tone="white" id="api-first" ariaLabel="API-first design">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionIntro
              label="API-first"
              heading="Every capability is an API — the screens are just one client."
              copy="Your developers and your own systems get the same access the BridgeX interface has, governed by the same permissions and recorded in the same audit log."
            />
            <div className="mt-10 space-y-6">
              {API_POINTS.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <Icon name="code" size={24} className="mt-0.5 shrink-0 text-bx-gold-600" />
                  <div>
                    <h3 className="font-sans text-lg font-extrabold leading-tight text-bx-ink">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-bx-muted">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="border border-bx-gold-500/25 bg-bx-maroon-950 p-6 sm:p-7">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-gold-400">
                Example — not a live endpoint
              </p>
              <pre className="mt-4 overflow-x-auto font-sans text-sm leading-relaxed text-bx-champagne/90">
                <code>{`GET  /v1/clients/{id}
POST /v1/clients/{id}/accounts
POST /v1/payments/{id}/approve
GET  /v1/partners/{id}/ledger
POST /v1/webhooks/subscriptions

Events:
  client.verified
  payment.settled
  commission.approved
  case.escalated`}</code>
              </pre>
              <p className="mt-5 border-t border-bx-gold-500/25 pt-4 text-sm leading-relaxed text-bx-champagne/75">
                Endpoint shapes shown to illustrate the API-first design.
                Versioned API documentation is published with the developer
                resources — see the{" "}
                <Link href="/resources/developers" className="font-bold text-bx-gold-400 hover:underline">
                  developer docs
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Enterprise controls — dark */}
      <Section tone="maroon" id="controls" ariaLabel="Enterprise controls">
        <SectionIntro
          dark
          label="Enterprise controls"
          heading={
            <>
              Controls that hold{" "}
              <span className="font-display font-semibold italic text-bx-champagne">
                under review.
              </span>
            </>
          }
          copy="These are design principles of the platform — how it is built to behave — not audit claims or certifications. Each one exists so that a decision, a payment or a change can be explained afterwards."
        />
        <div className="mt-12 grid gap-px border border-bx-gold-500/25 bg-bx-gold-500/25 sm:grid-cols-2 lg:grid-cols-3">
          {ENTERPRISE_CONTROLS.map((control) => (
            <div key={control.title} className="bg-bx-maroon-900 p-6 sm:p-7">
              <Icon name={control.icon} size={28} className="text-bx-gold-400" />
              <h3 className="mt-4 font-sans text-lg font-extrabold leading-tight text-bx-ivory">
                {control.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-bx-champagne/85">
                {control.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Coexistence */}
      <Section tone="ivory" ariaLabel="Built to coexist">
        <SectionIntro
          label="Coexistence"
          heading="Built to live alongside what you already run."
          copy="Nobody replaces their whole stack on a Tuesday. BridgeX is designed to arrive one workflow at a time — connected, reconciled, and proven — while the systems it will eventually replace keep working."
        />
        <div className="mt-12">
          <WorkflowSteps steps={COEXISTENCE} />
        </div>
        <Reveal delay={0.1} className="mt-12">
          <p className="max-w-[68ch] text-base leading-relaxed text-bx-muted">
            The same staged approach governs data migration: source mapping,
            staged loads, dual running where it helps, and reconciliation
            before anything is switched off. The{" "}
            <Link href="/services/integration-migration" className="font-bold text-bx-maroon-700 hover:underline">
              integration &amp; migration service
            </Link>{" "}
            describes the process in full.
          </p>
        </Reveal>
      </Section>

      <FaqSection
        heading="Architecture questions, answered plainly."
        copy="How the layers communicate, how changes are controlled, and what the audit log actually keeps."
        items={ARCHITECTURE_FAQS}
        tone="cream"
      />

      <CtaBand
        heading="Bring your architects to the demo."
        copy="The most useful demo is the one where your technical team asks the hard questions — about tenancy, events, permissions and coexistence. We would rather answer them now than after you have signed."
      />
    </>
  );
}
