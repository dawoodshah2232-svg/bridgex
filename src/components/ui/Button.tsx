/**
 * Buttons — one system, used everywhere.
 *
 * - primary: antique gold fill, maroon-950 text (7.5:1 contrast).
 * - secondary: ink/maroon outline on light backgrounds.
 * - secondaryLight: champagne outline on dark backgrounds.
 *
 * Press feedback (scale 0.97 on :active) per the Apple motion rules.
 * Never render a button without a real destination.
 */
import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "../icons";

type Variant = "primary" | "secondary" | "secondaryLight";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2.5 font-sans font-bold tracking-[0.01em] transition-all duration-200 active:scale-[0.97] select-none";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-bx-gold-500 text-bx-maroon-950 hover:bg-bx-gold-400 hover:text-bx-maroon-950",
  secondary:
    "border-2 border-bx-maroon-900 text-bx-maroon-900 hover:bg-bx-maroon-900 hover:text-bx-ivory bg-transparent",
  secondaryLight:
    "border-2 border-bx-champagne/70 text-bx-champagne hover:bg-bx-champagne hover:text-bx-maroon-950 hover:border-bx-champagne bg-transparent",
};

const SIZES: Record<Size, string> = {
  md: "min-h-[48px] px-6 text-[15px]",
  lg: "min-h-[56px] px-8 text-base",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Show the trailing arrow. Default true for links, false for buttons. */
  arrow?: boolean;
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
}: ButtonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
      {arrow && (
        <Icon
          name="arrowRight"
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps & {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
      {arrow && <Icon name="arrowRight" size={18} />}
    </button>
  );
}
