/**
 * FeatureIcon — a premium icon tile with a label.
 *
 * A CIRCLE with a thin gold ring (never the tinted square the
 * house rules ban): soft champagne wash on light surfaces, gold
 * icon on a deep maroon wash on dark surfaces. The label sits
 * under the tile in small tracked capitals.
 *
 * `icon` takes either an IconName ("crm") or one of the named
 * icon components from "@/components/icons" (CrmIcon).
 */
import type { ReactNode } from "react";
import Icon, { type IconComponent, type IconName } from "../icons";

type FeatureIconSize = "sm" | "md" | "lg";
type FeatureIconTone = "light" | "dark";

const SIZES: Record<FeatureIconSize, { tile: string; icon: number }> = {
  sm: { tile: "h-12 w-12", icon: 22 },
  md: { tile: "h-16 w-16", icon: 28 },
  lg: { tile: "h-20 w-20", icon: 36 },
};

export default function FeatureIcon({
  icon,
  label,
  size = "md",
  tone = "light",
  className = "",
}: {
  /** An IconName ("crm") or a named icon component (CrmIcon). */
  icon: IconName | IconComponent;
  /** Label under the tile — short, one or two words. */
  label?: ReactNode;
  size?: FeatureIconSize;
  tone?: FeatureIconTone;
  className?: string;
}) {
  const { tile, icon: iconSize } = SIZES[size];
  const tileCls =
    tone === "dark"
      ? "border-bx-gold-400/50 bg-bx-maroon-800/60 text-bx-gold-400"
      : "border-bx-gold-500/60 bg-bx-champagne/40 text-bx-gold-600";
  const labelCls = tone === "dark" ? "text-bx-champagne" : "text-bx-maroon-700";
  // A component prop renders directly; a string name goes through <Icon>.
  const Glyph: IconComponent | null = typeof icon === "string" ? null : icon;

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div
        className={`flex items-center justify-center rounded-full border ${tile} ${tileCls}`}
      >
        {Glyph ? (
          <Glyph size={iconSize} />
        ) : (
          // Glyph is null exactly when `icon` is a string name.
          <Icon name={icon as IconName} size={iconSize} />
        )}
      </div>
      {label && (
        <p
          className={`mt-3 text-[13px] font-sans font-bold uppercase tracking-[0.14em] ${labelCls}`}
        >
          {label}
        </p>
      )}
    </div>
  );
}
