/**
 * BridgeX logo — inline SVG symbol + HTML wordmark.
 *
 * The symbol geometry here is identical to public/brand/bridgex-logo-icon.svg
 * (angular B/X bridge glyph: a maroon bar crossed by a gold bar that passes
 * behind it at the centre). The wordmark is real HTML text so it renders in
 * the self-hosted Manrope font; the standalone SVG files in public/brand/
 * carry the wordmark as vector outlines for use outside the site.
 *
 * Variants:
 * - "dark":  maroon/gold symbol, ink wordmark — for light backgrounds
 * - "light": champagne/gold symbol, ivory wordmark — for dark backgrounds
 * - "icon":  symbol only, dark colours
 * - "icon-light": symbol only, light colours
 */

interface LogoProps {
  variant?: "dark" | "light" | "icon" | "icon-light";
  /** Symbol height in px (wordmark scales with it). Default 32. */
  height?: number;
  className?: string;
}

function Symbol({
  bar,
  gold,
  height,
}: {
  bar: string;
  gold: string;
  height: number;
}) {
  return (
    <svg
      width={height}
      height={height}
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        points="35.2,7.2 40.8,12.8 30.3,23.3 24.7,17.7"
        fill={gold}
      />
      <polygon
        points="17.7,24.7 23.3,30.3 12.8,40.8 7.2,35.2"
        fill={gold}
      />
      <polygon
        points="7.2,12.8 12.8,7.2 40.8,35.2 35.2,40.8"
        fill={bar}
      />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  height = 32,
  className = "",
}: LogoProps) {
  const isLight = variant === "light" || variant === "icon-light";
  const iconOnly = variant === "icon" || variant === "icon-light";
  const bar = isLight ? "#F0DFB8" : "#360F20";
  const gold = isLight ? "#D9B875" : "#C29A55";
  const wordColor = isLight ? "text-bx-ivory" : "text-bx-ink";
  const xColor = isLight ? "text-bx-gold-400" : "text-bx-gold-600";

  if (iconOnly) {
    return (
      <span className={`inline-flex shrink-0 ${className}`}>
        <Symbol bar={bar} gold={gold} height={height} />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      role="img"
      aria-label="BridgeX"
    >
      <Symbol bar={bar} gold={gold} height={height} />
      <span
        aria-hidden="true"
        className={`font-sans font-extrabold tracking-[0.08em] ${wordColor}`}
        style={{ fontSize: Math.round(height * 0.66), lineHeight: 1 }}
      >
        BRIDGE<span className={xColor}>X</span>
      </span>
    </span>
  );
}
