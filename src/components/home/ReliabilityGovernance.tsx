/**
 * H09 — Reliability & governance: design principles, not audit claims.
 * Four principles in a grid, safe configuration as a full-width strip,
 * and an explicit honesty line (no certifications claimed).
 */
import { Section } from "../ui/Container";
import SectionIntro from "../ui/SectionIntro";
import Reveal from "../ui/Reveal";
import FeatureIcon from "../ui/FeatureIcon";
import type { IconName } from "../icons";

const PRINCIPLES: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "users",
    title: "Role-based access",
    text: "People see only what their role allows — down to individual fields. Permissions are configuration, not code, and they travel with every record.",
  },
  {
    icon: "shield",
    title: "Dual approval",
    text: "Material actions need a second pair of eyes. Maker-checker is built into funding, payouts and server changes — not added as an afterthought.",
  },
  {
    icon: "audit",
    title: "Audit evidence",
    text: "Every action writes an immutable record: who, what, when, and what changed. Evidence is a byproduct of doing the work, not a separate project.",
  },
  {
    icon: "layers",
    title: "Tenant boundaries",
    text: "Each organisation's data is separated by design — in the data model, in the API, in every query. Boundaries are enforced, not assumed.",
  },
];

export default function ReliabilityGovernance() {
  return (
    <Section tone="navy" ariaLabel="Reliability and governance">
      <SectionIntro
        dark
        label="Reliability & governance"
        heading={
          <>
            Designed to be{" "}
            <span className="font-sans font-semibold italic text-bx-teal-400">
              trusted.
            </span>
          </>
        }
        copy="Financial infrastructure is judged by what it refuses to let go wrong. These principles shape every BridgeX workflow — they are design decisions, stated plainly."
      />

      <div className="mt-12 grid gap-px border border-bx-teal-500/25 bg-bx-teal-500/25 sm:grid-cols-2 lg:mt-16">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={0.07 * i} className="h-full">
            {/* Hairline grid: tint, not lift — a translate would
                break the grid lines. */}
            <div className="bx-card-tint-dark group flex h-full flex-col bg-bx-navy-900 rounded-2xl p-7 sm:p-8">
              {/* Teal-ring tile (fix, 14 Nov): the bare 30px glyphs read
                  as small marks; the FeatureIcon tile gives each
                  principle a visible anchor. */}
              <FeatureIcon icon={p.icon} tone="dark" size="md" className="[&>*]:self-start" />
              <h3 className="mt-5 font-sans text-xl font-bold text-bx-white">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-bx-slate-300/85">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-px">
        <div className="flex flex-col gap-4 border border-t-0 border-bx-teal-500/25 bg-bx-navy-950/70 p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <FeatureIcon icon="sliders" tone="dark" size="md" className="shrink-0" />
          <div>
            <h3 className="font-sans text-xl font-bold text-bx-white">
              Safe configuration
            </h3>
            <p className="mt-1.5 max-w-[72ch] text-[15px] leading-relaxed text-bx-slate-300/85">
              Changes go through draft, review and publish — with rollback.
              Nothing reaches production by accident, and nothing changes
              without a record of who approved it.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-8 text-sm leading-relaxed text-bx-slate-300/60">
          These are design principles of the platform, not audit claims.
          BridgeX claims no certification, licence or regulatory status unless
          it has been independently obtained — and any such claim will name its
          issuer and scope.
        </p>
      </Reveal>
    </Section>
  );
}
