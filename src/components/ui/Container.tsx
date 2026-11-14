/**
 * Layout helpers — one grid, one pair of equal outer margins, used everywhere.
 */
import type { ReactNode } from "react";

/** Centred content column: max 1280px, equal side margins at every width. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

type SectionTone = "ivory" | "cream" | "maroon" | "white";

const TONES: Record<SectionTone, string> = {
  ivory: "bg-bx-ivory text-bx-ink",
  cream: "bg-bx-cream text-bx-ink",
  maroon: "bg-bx-maroon-900 text-bx-ivory",
  white: "bg-bx-white text-bx-ink",
};

/**
 * Page section with consistent vertical rhythm. Padding is deliberately
 * moderate (fix, 14 Nov): the previous lg:py-32 left ~300px dead voids
 * between sections on desktop. Gaps come from the section padding +
 * neighbour spacing, never from margins on inner blocks.
 */
export function Section({
  children,
  tone = "ivory",
  id,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-16 sm:py-20 lg:py-24 ${TONES[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
