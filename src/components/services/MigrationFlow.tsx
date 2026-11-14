/**
 * MigrationFlow — the five migration stages as a vertical timeline with a
 * teal spine. Server component; each stage lists its checks.
 */
import type { MigrationStage } from "@/content/company";
import Icon from "../icons";
import Reveal from "../ui/Reveal";

export default function MigrationFlow({ stages }: { stages: MigrationStage[] }) {
  return (
    <ol className="relative space-y-10 border-l-2 border-bx-teal-500/40 pl-8 sm:pl-12">
      {stages.map((stage, i) => (
        <li key={stage.step} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-8 top-1 flex h-9 w-9 -translate-x-1/2 items-center justify-center border-2 border-bx-teal-500 bg-bx-white font-sans text-sm font-extrabold text-bx-teal-700 sm:-left-12"
          >
            {i + 1}
          </span>
          <Reveal delay={i * 0.05}>
            <h3 className="font-sans text-xl font-extrabold tracking-[-0.01em] text-bx-navy-900 sm:text-2xl">
              <span className="mr-3 font-sans text-2xl font-semibold text-bx-teal-600">
                {stage.step}
              </span>
              {stage.title}
            </h3>
            <p className="mt-2 max-w-[68ch] font-body text-base leading-relaxed text-bx-slate-500">
              {stage.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {stage.checks.map((check) => (
                <li
                  key={check}
                  className="inline-flex items-center gap-2 border border-bx-navy-900/15 bg-bx-white px-3 py-2 font-body text-sm leading-snug text-bx-navy-900"
                >
                  <span aria-hidden="true" className="shrink-0 text-bx-teal-600">
                    <Icon name="check" size={16} />
                  </span>
                  {check}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
