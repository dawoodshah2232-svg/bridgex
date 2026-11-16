/**
 * Buttons — one system, used everywhere (bridgexapps.com style).
 *
 * - primary: solid teal fill, white text, soft teal shadow.
 * - secondary: white pill, light-grey border, navy text.
 * - secondaryLight: white outline on dark backgrounds.
 * - onTeal: white pill with teal text, for use on the teal CTA band.
 *
 * All buttons are fully pill-shaped (rounded-full). Press feedback
 * (scale 0.97 on :active) per the Apple motion rules. The primary
 * variant adds a shine sweep + teal glow pulse on hover
 * (.bx-btn-shine / .bx-btn-glow in globals.css); the trailing arrow
 * slides on hover (BASE carries `group` for that).
 * Never render a button without a real destination.
 */
import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "../icons";

type Variant = "primary" | "secondary" | "secondaryLight" | "onTeal";
type Size = "md" | "lg";

const BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-bold tracking-[0.01em] transition-all duration-200 active:scale-[0.97] select-none";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bx-btn-shine bx-btn-glow bg-bx-teal-500 text-bx-white shadow-[0_10px_24px_-10px_rgba(20,184,166,0.7)] hover:bg-bx-teal-600",
  secondary:
    "border border-[#E2E8F0] bg-bx-white text-bx-navy-900 hover:border-bx-teal-500 hover:text-bx-teal-600",
  secondaryLight:
    "border border-bx-white/70 text-bx-white hover:bg-bx-white hover:text-bx-navy-900 hover:border-bx-white bg-transparent",
  onTeal:
    "bg-bx-white text-bx-teal-700 shadow-[0_10px_24px_-10px_rgba(0,0,0,0.35)] hover:bg-bx-mint-100",
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
