/**
 * SectionIntro — the standard section opening: small label, heading, copy.
 *
 * The label is sentence-case at a readable size (13px, tracked) — never a
 * pill badge. On light sections the label is teal-700 (7.5:1 on white);
 * on dark sections it is teal-400. Headings take ReactNode so callers can
 * set a short teal-gradient accent phrase where the brand voice calls for it.
 */
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionIntro({
  label,
  heading,
  copy,
  dark = false,
  align = "left",
  glow = false,
  className = "",
}: {
  label: string;
  heading: ReactNode;
  copy?: string;
  dark?: boolean;
  align?: "left" | "center";
  /** Soft drifting teal/cyan glow behind the heading — opt-in, for
      key section headings only (one per screen at most). */
  glow?: boolean;
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`relative max-w-3xl ${alignCls} ${className}`}>
      {glow && (
        <span
          aria-hidden="true"
          className="bx-glow -left-16 -top-14 h-72 w-72"
        />
      )}
      <p
        className={`text-[13px] font-sans font-bold uppercase tracking-[0.22em] ${
          dark ? "text-bx-teal-400" : "text-bx-teal-700"
        }`}
      >
        {label}
      </p>
      <h2
        className={`mt-4 font-sans text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] text-balance sm:text-5xl ${
          dark ? "text-bx-white" : "text-bx-navy-900"
        }`}
      >
        {heading}
      </h2>
      {copy && (
        <p
          className={`mt-5 max-w-[65ch] text-base leading-relaxed sm:text-lg ${
            dark ? "text-bx-slate-300/90" : "text-bx-slate-500"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {copy}
        </p>
      )}
    </Reveal>
  );
}
