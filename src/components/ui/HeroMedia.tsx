/**
 * HeroMedia — the full-bleed media layer for area heroes.
 *
 * Place inside a `relative` hero section as its first child; the
 * hero's content sits above it in the normal flow (positioned
 * `relative`). Layers, bottom to top: photograph with a slow
 * Ken Burns drift (`.bx-kenburns`, transform-only, ~24s) → flat
 * maroon tint → vertical maroon gradient (darker at the top for
 * the nav, darkest at the bottom where the H1 sits) → optional
 * gold bridge-line motif along the bottom edge.
 *
 * The image is eager with fetchPriority="high" — heroes are
 * above the fold. `scrim="strong"` is the default and the safe
 * choice for white H1 text over any photograph; use "medium"
 * only over an already-dark image.
 *
 * `image` is a root-relative public path ("/images/hero-bridge.jpg");
 * it is routed through `asset()` for the /bridgex basePath.
 */
import { asset } from "@/lib/paths";

type HeroScrim = "strong" | "medium";

const SCRIMS: Record<HeroScrim, string> = {
  strong: "bg-bx-maroon-950/70",
  medium: "bg-bx-maroon-950/45",
};

/** Thin gold bridge-line motif — same geometry language as CtaBand. */
function BridgeLine() {
  return (
    <svg
      viewBox="0 0 1200 80"
      className="absolute bottom-0 left-0 h-auto w-full"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
    >
      {/* Two deck spans meeting at the centre pier */}
      <path
        d="M0 70 L560 70 L600 14 L640 70 L1200 70"
        fill="none"
        stroke="#C29A55"
        strokeWidth="1.5"
      />
      {/* Suspension cable */}
      <path
        d="M0 70 Q300 18 600 14 Q900 18 1200 70"
        fill="none"
        stroke="#C29A55"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function HeroMedia({
  image,
  alt,
  scrim = "strong",
  kenBurns = true,
  bridgeLine = false,
  imageWidth = 1920,
  imageHeight = 1080,
  className = "",
}: {
  /** Root-relative public image path, e.g. "/images/hero-bridge.jpg". */
  image: string;
  /** Real alt text describing the actual photograph. */
  alt: string;
  /** Scrim strength — "strong" for white H1 text over any photo. */
  scrim?: HeroScrim;
  /** Slow Ken Burns drift (default true; disabled by reduced motion). */
  kenBurns?: boolean;
  /** Gold bridge-line motif along the bottom edge. */
  bridgeLine?: boolean;
  /** Intrinsic image dimensions (aspect-ratio hint, no layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={asset(image)}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        fetchPriority="high"
        className={`h-full w-full object-cover ${kenBurns ? "bx-kenburns" : ""}`}
      />
      <div className={`absolute inset-0 ${SCRIMS[scrim]}`} aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-bx-maroon-950/70 via-transparent to-bx-maroon-950/80"
        aria-hidden="true"
      />
      {bridgeLine && <BridgeLine />}
    </div>
  );
}
