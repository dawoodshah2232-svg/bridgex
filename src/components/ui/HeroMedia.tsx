/**
 * HeroMedia — the full-bleed media layer for area heroes.
 *
 * Place inside a `relative` hero section as its first child; the
 * hero's content sits above it in the normal flow (positioned
 * `relative`). Layers, bottom to top: photograph with a slow
 * Ken Burns drift (`.bx-kenburns`, transform-only, ~24s), softly
 * desaturated + dimmed so chromatic candle noise stops competing
 * with the headline → flat navy tint → vertical navy gradient
 * (darker at the top for the nav, darkest at the bottom where the
 * H1 sits) → left-weighted horizontal gradient (the H1 sits left,
 * the photograph stays open on the right) → subtle teal-tinted
 * gradient from the bottom-left → optional teal bridge-line motif
 * along the bottom edge.
 *
 * The image is eager with fetchPriority="high" — heroes are
 * above the fold. React 19 automatically emits a
 * <link rel="preload" as="image"> for fetchPriority="high"
 * images during SSR (verified in the built HTML, 14 Nov), so the
 * photograph starts loading before the body is parsed — do NOT
 * add a manual preload link, it would duplicate React's. This is
 * the fix for inner-page heroes arriving as plain burgundy with
 * the photo still pending.
 * `scrim="strong"` is the default and the safe choice for white
 * H1 text over any photograph; use "medium" only over an
 * already-dark image. Scrims are deliberately light enough for
 * the photography to show (fix, 14 Nov) while the gradient stays
 * darkest at the bottom, where the H1 sits. Rework, 16 Nov: the
 * desaturation + left-weighted gradient were added because busy
 * chart photos made white headlines read unclean — the left text
 * zone is now a near-clean panel while the right stays photographic.
 * White H1 contrast over the treated heroes is ≥6:1 even at the
 * brightest pixel in the H1 zone (PIL-verified, 16 Nov).
 *
 * `objectPosition` repositions the crop for images whose subject
 * is not centred (e.g. a portrait trophy whose cup sits high in
 * the frame) — pass a CSS object-position value such as "50% 30%".
 *
 * `image` is a root-relative public path ("/images/hero-bridge.jpg");
 * it is routed through `asset()` for the /bridgex basePath.
 */
import { asset } from "@/lib/paths";

type HeroScrim = "strong" | "medium";

/** Flat tint + vertical gradient + left-weighted horizontal gradient per
 * scrim strength. The vertical gradient is darkest at the bottom, where
 * the headline sits; the horizontal gradient darkens the left text zone
 * and fades to open on the right so the photograph still reads. */
const SCRIMS: Record<
  HeroScrim,
  { flat: string; gradient: string; horizontal: string }
> = {
  strong: {
    flat: "bg-bx-navy-950/50",
    gradient:
      "bg-gradient-to-b from-bx-navy-950/60 via-bx-navy-950/25 to-bx-navy-950/80",
    horizontal:
      "bg-gradient-to-r from-bx-navy-950/40 via-bx-navy-950/15 to-transparent",
  },
  medium: {
    flat: "bg-bx-navy-950/40",
    gradient:
      "bg-gradient-to-b from-bx-navy-950/50 via-bx-navy-950/10 to-bx-navy-950/70",
    horizontal:
      "bg-gradient-to-r from-bx-navy-950/30 via-bx-navy-950/10 to-transparent",
  },
};

/** Subtle teal cast from the bottom-left — ties the photograph into
 * the bridgexapps teal theme without tinting the text zone. Shared
 * by both scrim strengths. */
const TEAL_TINT =
  "bg-gradient-to-tr from-bx-teal-700/15 via-transparent to-transparent";

/** Thin teal bridge-line motif — same geometry language as CtaBand. */
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
        stroke="#2DD4BF"
        strokeWidth="1.5"
      />
      {/* Suspension cable */}
      <path
        d="M0 70 Q300 18 600 14 Q900 18 1200 70"
        fill="none"
        stroke="#2DD4BF"
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
  objectPosition = "50% 50%",
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
  /** Teal bridge-line motif along the bottom edge. */
  bridgeLine?: boolean;
  /** CSS object-position for the crop (default centred). */
  objectPosition?: string;
  /** Intrinsic image dimensions (aspect-ratio hint, no layout shift). */
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}) {
  const href = asset(image);
  const layers = SCRIMS[scrim];
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* fetchPriority="high" makes React 19 emit a preload link for
          this image during SSR — no manual <link> needed. */}
      <img
        src={href}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        fetchPriority="high"
        style={{ objectPosition }}
        className={`h-full w-full object-cover saturate-[0.8] brightness-[0.92] ${kenBurns ? "bx-kenburns" : ""}`}
      />
      <div className={`absolute inset-0 ${layers.flat}`} aria-hidden="true" />
      <div className={`absolute inset-0 ${layers.gradient}`} aria-hidden="true" />
      <div className={`absolute inset-0 ${layers.horizontal}`} aria-hidden="true" />
      <div className={`absolute inset-0 ${TEAL_TINT}`} aria-hidden="true" />
      {bridgeLine && <BridgeLine />}
    </div>
  );
}
