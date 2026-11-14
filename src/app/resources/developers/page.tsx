/**
 * Developer / API Docs — versioned API architecture with clearly-labelled
 * EXAMPLE/SANDBOX endpoints only (spec §10). No real authentication specs:
 * auth is marked as planned. Practical, docs-style tone (spec §5).
 */
import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/ui/Container";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import ImageText from "@/components/ui/ImageText";
import PhotoBand from "@/components/ui/PhotoBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Reveal from "@/components/ui/Reveal";
import DemoLabel from "@/components/ui/DemoLabel";
import { ButtonLink } from "@/components/ui/Button";
import Icon from "@/components/icons";
import {
  API_ENDPOINTS,
  EXAMPLE_API_BASE,
  WEBHOOK_EVENTS,
} from "@/content/resources";
import { DEVELOPER_FAQS } from "@/content/resource-editorial";
import ResourceHero from "@/components/resources/ResourceHero";
import CodeSample from "@/components/resources/CodeSample";
import StatusBadge from "@/components/resources/StatusBadge";

export const metadata: Metadata = {
  title: "Developer / API Docs",
  description:
    "BridgeX developer documentation: versioned API architecture, example endpoints and planned webhooks. All samples are examples against a sandbox host — no live endpoint exists yet.",
};

const ANCHORS = [
  { href: "#start", label: "Start here" },
  { href: "#versioning", label: "Versioning" },
  { href: "#authentication", label: "Authentication" },
  { href: "#endpoints", label: "Endpoints" },
  { href: "#webhooks", label: "Webhooks" },
  { href: "#limits", label: "Limits & errors" },
];

const START_STEPS = [
  {
    step: "1",
    title: "Read the versioning rules",
    text: "The API is versioned by URL from day one. Additive changes stay in a version; breaking changes get a new one. Nothing changes silently.",
  },
  {
    step: "2",
    title: "Explore the example endpoints",
    text: "Four annotated examples show the shape of the API: contacts, onboarding, payments and webhooks. Copy them, adapt them — but do not call them; the host does not exist yet.",
  },
  {
    step: "3",
    title: "Talk to us before you build",
    text: "If you are planning an integration, tell us what you are building. We will give you an honest answer about where the sandbox stands.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <ResourceHero
        href="/resources/developers"
        eyebrow="Developer / API Docs"
        title={
          <>
            Build on BridgeX,{" "}
            <span className="font-display italic text-bx-gold-400">
              when the sandbox lands.
            </span>
          </>
        }
        copy="Versioned API architecture, example endpoints and a planned webhook catalogue — documented honestly. There is no live endpoint today; every sample on this page is an example, and it says so next to the code."
        image="/images/resources-code.jpg"
        imageAlt="A laptop screen showing a code editor with syntax-highlighted source code"
        imageWidth={1600}
        imageHeight={1063}
      />

      <nav
        aria-label="On this page"
        className="sticky top-[72px] z-30 border-b border-bx-gold-500/30 bg-bx-ivory/95 backdrop-blur"
      >
        <Container className="flex gap-1 overflow-x-auto py-3">
          {ANCHORS.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="shrink-0 whitespace-nowrap px-3 py-2 font-sans text-sm font-bold text-bx-maroon-700 hover:bg-bx-cream hover:text-bx-maroon-900"
            >
              {a.label}
            </Link>
          ))}
        </Container>
      </nav>

      <Section tone="ivory" id="start" ariaLabel="Start here">
        <SectionIntro
          label="Start here"
          heading="Three steps before you write a line of integration code"
          copy="The honest starting position: the API design is documented, the sandbox is planned, and no endpoint is callable yet. Work through these in order."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {START_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08} className="h-full">
              <li className="flex h-full flex-col border border-bx-gold-500/30 bg-bx-white p-7">
                <span className="font-display text-5xl font-semibold italic text-bx-gold-600">
                  {s.step}
                </span>
                <h3 className="mt-4 font-sans text-xl font-extrabold leading-snug text-bx-ink">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-bx-muted">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <ImageText
        image="/images/team-laptop.jpg"
        alt="Diverse team collaborating around a laptop"
        eyebrow="For engineers"
        heading={
          <>
            Built for the engineers who will{" "}
            <span className="font-display italic text-bx-maroon-700">
              integrate BridgeX.
            </span>
          </>
        }
        copy="Versioned API architecture, example endpoints and a planned webhook catalogue — documented before the sandbox exists, so integration design can start now."
        bullets={[
          "Versioned from the first request",
          "Four example endpoints, annotated",
          "A planned webhook catalogue with signed delivery",
        ]}
        ctaLabel="See the example endpoints"
        ctaHref="#endpoints"
        tone="white"
        imageWidth={1200}
        imageHeight={1800}
      />

      <Section tone="cream" id="versioning" ariaLabel="API versioning">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionIntro
              label="Versioning"
              heading="Versioned from the first request"
              copy="The API versions by URL: /v1, /v2, and so on. The version is part of the contract, not an afterthought bolted on after the first breaking change."
            />
            <div className="mt-8 space-y-4">
              <div className="border border-bx-gold-500/30 bg-bx-white p-6">
                <p className="font-mono text-sm font-bold text-bx-maroon-700">
                  {EXAMPLE_API_BASE}/v1/…
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-bx-muted">
                  Example base URL for every sample on this page. The host
                  is an example — it does not resolve, and the samples
                  cannot be executed against it.
                </p>
              </div>
              <DemoLabel text="Example base URL — not a live endpoint" />
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-bx-ink/90">
            <p>
              <strong className="font-sans text-bx-ink">
                Additive changes stay in a version.
              </strong>{" "}
              New fields, new endpoints and new optional parameters arrive
              without breaking existing integrations. Clients that ignore
              unknown fields keep working — which is why we ask you to
              ignore unknown fields.
            </p>
            <p>
              <strong className="font-sans text-bx-ink">
                Breaking changes get a new version.
              </strong>{" "}
              Renamed fields, removed endpoints and changed semantics ship
              as /v2, with the previous version supported through a
              published deprecation notice period. No silent changes, ever.
            </p>
            <p>
              <strong className="font-sans text-bx-ink">
                v1 is planned, not live.
              </strong>{" "}
              The version number in these examples is a design decision,
              not a deployment. When the sandbox opens, this page will say
              so, and the samples will point at a host that answers.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ivory" id="authentication" ariaLabel="Authentication">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionIntro
            label="Authentication"
            heading="Planned, not specified"
            copy="There are no real credentials, no token endpoint and no auth specification yet. This section describes the design direction only."
          />
          <div>
            <div className="border border-bx-gold-500/30 bg-bx-white p-7 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status="Planned" />
                <span className="font-sans text-sm font-bold text-bx-muted">
                  Design direction — details with the sandbox
                </span>
              </div>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-bx-ink/90">
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-bx-gold-600" />
                  Scoped API keys issued per environment, so a sandbox key
                  can never touch production data.
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-bx-gold-600" />
                  Tokens carry only the permissions their integration
                  needs — least privilege, enforced server-side.
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-bx-gold-600" />
                  Keys are revocable per integration, with rotation that
                  does not require downtime.
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-1 shrink-0 text-bx-gold-600" />
                  Every authenticated call is written to the audit trail,
                  like every other action on the platform.
                </li>
              </ul>
              <p className="mt-6 border-t border-bx-gold-500/25 pt-5 text-[15px] leading-relaxed text-bx-muted">
                The samples below use{" "}
                <code className="rounded bg-bx-cream px-1.5 py-0.5 font-mono text-sm text-bx-maroon-700">
                  Bearer EXAMPLE_TOKEN
                </code>{" "}
                as a placeholder. It is not a credential and will never
                authenticate anything.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream" id="endpoints" ariaLabel="Example endpoints">
        <SectionIntro
          label="Endpoints"
          heading="Four examples, annotated"
          copy="Each example shows a request and the response shape. Data is illustrative — example identifiers, example timestamps, example everything. The host does not exist, and the labels say so."
        />
        <div className="mt-12 space-y-12">
          {API_ENDPOINTS.map((endpoint) => (
            <Reveal key={endpoint.id}>
              <article className="border border-bx-gold-500/30 bg-bx-white">
                <div className="border-b border-bx-gold-500/25 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`px-3 py-1 font-mono text-sm font-bold ${
                        endpoint.method === "GET"
                          ? "bg-bx-maroon-700 text-bx-ivory"
                          : "bg-bx-gold-500 text-bx-maroon-950"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="break-all font-mono text-base font-bold text-bx-ink sm:text-lg">
                      {endpoint.path}
                    </code>
                    <StatusBadge status="Demo" />
                  </div>
                  <h3 className="mt-4 font-sans text-xl font-extrabold text-bx-ink">
                    {endpoint.title}
                  </h3>
                  <p className="mt-2 max-w-[72ch] text-base leading-relaxed text-bx-muted">
                    {endpoint.description}
                  </p>
                </div>
                <div className="grid gap-5 p-6 sm:p-8 lg:grid-cols-2">
                  <CodeSample label="Example request" code={endpoint.request} />
                  <CodeSample label="Example response" code={endpoint.response} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <PhotoBand
        image="/images/abstract-glass-ceiling.jpg"
        alt="Skyscrapers seen through a glass ceiling"
        eyebrow="The shape of the API"
        heading={
          <>
            Plain HTTP.{" "}
            <span className="font-display italic text-bx-gold-400">
              Any client, any language.
            </span>
          </>
        }
        copy="Until the sandbox proves the API shape, the examples on this page are plain HTTP — no SDK to install, no client library to learn."
        height="sm"
        imageWidth={1600}
        imageHeight={900}
      />

      <Section tone="ivory" id="webhooks" ariaLabel="Webhooks and events">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionIntro
              label="Webhooks"
              heading="Events, delivered to you"
              copy="The planned event catalogue covers the moments other systems need to know about. Delivery is designed around signed payloads, retries and idempotency — the boring parts that make webhooks trustworthy."
            />
            <div className="mt-8">
              <ButtonLink href="/company/contact" variant="secondary">
                Ask about the webhook design
              </ButtonLink>
            </div>
          </div>
          <div>
            <div
              className="overflow-x-auto border border-bx-gold-500/30 bg-bx-white"
              tabIndex={0}
              role="region"
              aria-label="Webhook events table — scroll sideways to see all columns"
            >
              <table className="w-full min-w-[520px] text-left">
                <thead>
                  <tr className="border-b border-bx-gold-500/30 bg-bx-cream">
                    <th scope="col" className="px-5 py-4 font-sans text-sm font-extrabold text-bx-ink">
                      Event
                    </th>
                    <th scope="col" className="px-5 py-4 font-sans text-sm font-extrabold text-bx-ink">
                      When it fires
                    </th>
                    <th scope="col" className="px-5 py-4 font-sans text-sm font-extrabold text-bx-ink">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {WEBHOOK_EVENTS.map((event) => (
                    <tr key={event.event} className="border-b border-bx-gold-500/20 last:border-b-0">
                      <td className="px-5 py-4 font-mono text-sm font-bold text-bx-maroon-700">
                        {event.event}
                      </td>
                      <td className="px-5 py-4 text-[15px] leading-relaxed text-bx-muted">
                        {event.description}
                      </td>
                      <td className="px-5 py-4">
                        <StatusBadge status="Planned" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-bx-muted">
              Planned delivery: signed payloads, exponential-backoff
              retries, and an idempotency key on every event so a redelivery
              never double-applies.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="maroon" id="limits" ariaLabel="Rate limits and errors">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionIntro
            dark
            label="Limits & errors"
            heading="Rate limits and errors, as designed"
            copy="The limits below are the design targets for the sandbox, stated as plans — not enforced anywhere today, because there is nothing to enforce them on yet."
          />
          <div className="space-y-5">
            <div className="border border-bx-gold-500/30 bg-bx-maroon-800/60 p-6">
              <div className="flex items-center gap-4">
                <FeatureIcon icon="gauge" size="sm" tone="dark" />
                <h3 className="font-sans text-lg font-extrabold text-bx-ivory">
                  Rate limits (planned)
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-bx-champagne/85">
                Per-key limits with clear headers on every response, so a
                client always knows how much budget remains. Exceeding a
                limit returns HTTP 429 with a retry-after hint — never a
                silent failure.
              </p>
            </div>
            <div className="border border-bx-gold-500/30 bg-bx-maroon-800/60 p-6">
              <div className="flex items-center gap-4">
                <FeatureIcon icon="alert" size="sm" tone="dark" />
                <h3 className="font-sans text-lg font-extrabold text-bx-ivory">
                  Errors (planned)
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-bx-champagne/85">
                Every error carries a stable machine-readable code, a
                human-readable message and a link to the relevant docs
                section. 4xx errors mean the request was wrong; 5xx errors
                mean we were — and the message will say which.
              </p>
            </div>
            <div className="border border-bx-gold-500/30 bg-bx-maroon-800/60 p-6">
              <div className="flex items-center gap-4">
                <FeatureIcon icon="spark" size="sm" tone="dark" />
                <h3 className="font-sans text-lg font-extrabold text-bx-ivory">
                  SDKs (planned)
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-bx-champagne/85">
                Client libraries are on the roadmap after the sandbox
                proves the API shape. Until then, the examples on this page
                are plain HTTP — any client, any language.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ivory" ariaLabel="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            label="Questions"
            heading="About the API"
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={DEVELOPER_FAQS} />
          </div>
        </div>
      </Section>

      <CtaBand
        heading="Planning an integration? Talk to the people building it."
        copy="We will tell you honestly where the sandbox stands, what to build first, and what to wait for — before you write a line of code."
        primaryLabel="Talk to an Expert"
        primaryHref="/company/contact"
        secondaryLabel="Book a Private Demo"
        secondaryHref="/book-demo"
      />
    </>
  );
}
