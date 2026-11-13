/**
 * Drawn icon system — one consistent stroke (1.75, round caps/joins,
 * 24×24 viewBox, currentColor). No emoji, no unicode glyphs as icons.
 *
 * Icons are referenced by name from navigation-adjacent components and the
 * homepage; Batch 2 reuses them for solution/industry pages.
 */
import type { ReactNode } from "react";

export type IconName =
  | "crm"
  | "payments"
  | "pamm"
  | "ib"
  | "tradeops"
  | "onboarding"
  | "contests"
  | "brokers"
  | "banks"
  | "securities"
  | "wealth"
  | "assetFund"
  | "exchanges"
  | "bonds"
  | "prop"
  | "digitalAssets"
  | "shield"
  | "users"
  | "audit"
  | "layers"
  | "sliders"
  | "arrowRight"
  | "arrowUpRight"
  | "chevronDown"
  | "chevronRight"
  | "menu"
  | "close"
  | "check"
  | "plus"
  | "building"
  | "book"
  | "calendar"
  | "code"
  | "mail"
  | "document";

const PATHS: Record<IconName, ReactNode> = {
  crm: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3.5 19.5c.6-3.2 2.9-4.8 5.5-4.8s4.9 1.6 5.5 4.8" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M16.6 14.7c2.3.3 3.9 1.8 4.4 4.5" />
    </>
  ),
  payments: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M2.5 10h19" />
      <path d="M6 15h4" />
    </>
  ),
  pamm: (
    <>
      <path d="M3 17.5 8.5 12l4 4L21 7.5" />
      <path d="M16.5 7.5H21V12" />
    </>
  ),
  ib: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.3 7.3 10.7 16" />
      <path d="M15.7 7.3 13.3 16" />
      <path d="M8.5 6h7" />
    </>
  ),
  tradeops: (
    <>
      <path d="M4 7h10M18 7h2" />
      <path d="M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  onboarding: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="11" r="2" />
      <path d="M5.5 16.5c.5-1.8 1.7-2.5 3-2.5s2.5.7 3 2.5" />
      <path d="M14.5 10h3.5M14.5 13.5h3.5" />
    </>
  ),
  contests: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4.5a2.5 2.5 0 0 0 2.6 3.9" />
      <path d="M17 6h2.5a2.5 2.5 0 0 1-2.6 3.9" />
      <path d="M12 14v3.5" />
      <path d="M8.5 20.5h7" />
    </>
  ),
  brokers: (
    <>
      <path d="M6 5v4M6 15v4" />
      <rect x="4" y="9" width="4" height="6" />
      <path d="M18 4v3M18 13v7" />
      <rect x="16" y="7" width="4" height="6" />
    </>
  ),
  banks: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3 21h18" />
      <path d="M3 18h18" />
    </>
  ),
  securities: (
    <>
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
      <path d="M3 13h18" />
    </>
  ),
  wealth: (
    <>
      <path d="M7 4h10l3 5-8 11L4 9l3-5Z" />
      <path d="M4 9h16" />
      <path d="M12 20 9 9l3-5 3 5-3 11" />
    </>
  ),
  assetFund: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17.5l9 5 9-5" />
    </>
  ),
  exchanges: (
    <>
      <path d="M3 8h13M13 5l3 3-3 3" />
      <path d="M21 16H8M11 13l-3 3 3 3" />
    </>
  ),
  bonds: (
    <>
      <circle cx="7.5" cy="7.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
      <path d="M19 5 5 19" />
    </>
  ),
  prop: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  digitalAssets: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9" />
      <path d="M15 9.8c0-1.6-1.3-2.3-3-2.3s-3 .8-3 2.2 1 1.9 3 2.2 3 .9 3 2.2-1.3 2.4-3 2.4-3-.9-3-2.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 2.8v5.4c0 4.5-3 7.6-7 9.8-4-2.2-7-5.3-7-9.8V5.8L12 3Z" />
      <path d="M9 11.5l2 2 4-4.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3.5 19.5c.6-3.2 2.9-4.8 5.5-4.8s4.9 1.6 5.5 4.8" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M16.6 14.7c2.3.3 3.9 1.8 4.4 4.5" />
    </>
  ),
  audit: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <circle cx="10.5" cy="14" r="2.5" />
      <path d="M12.4 15.9 14.5 18" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17.5l9 5 9-5" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h10M18 7h2" />
      <path d="M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  chevronRight: <path d="M9.5 6l6 6-6 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a1 1 0 0 1 1 1v11" />
      <path d="M8 7h2M8 11h2M8 15h2" />
      <path d="M3 21h18" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M4 19a2 2 0 0 1 2-2h13" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  code: (
    <>
      <path d="M8 8l-4 4 4 4" />
      <path d="M16 8l4 4-4 4" />
      <path d="M13 5l-2 14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
};

export default function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 1.75,
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
