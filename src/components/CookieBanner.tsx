/**
 * Cookie consent banner (spec §10/§12).
 *
 * Shows only when no consent choice is stored, and re-opens on demand via
 * the "Cookie settings" footer link (window event
 * `bridgex:open-cookie-settings`). Accept-all / reject-non-essential /
 * customise (necessary always on; analytics + marketing toggles). The
 * choice is persisted in localStorage as versioned JSON (src/lib/consent).
 *
 * HONESTY: no analytics or marketing scripts are currently loaded on this
 * site. The copy says so plainly — the toggles record preferences that
 * will apply if and when such scripts are connected. Nothing here claims
 * tracking exists today.
 */
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  openCookieSettings,
  readConsent,
  saveConsent,
} from "@/lib/consent";
import Icon from "./icons";

function Toggle({
  id,
  label,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-t border-bx-gold-500/20 py-4 first:border-t-0 first:pt-0 last:pb-0">
      <div>
        <p className="font-sans text-[15px] font-bold text-bx-ivory">
          {label}
          {disabled && (
            <span className="ml-2 text-[12px] font-bold uppercase tracking-wide text-bx-gold-400">
              Always on
            </span>
          )}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-bx-champagne/75">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        id={id}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-1 h-7 w-12 shrink-0 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${
          checked ? "bg-bx-gold-500" : "bg-bx-champagne/30"
        }`}
      >
        <span className="sr-only" id={`${id}-label`}>
          {label}
        </span>
        <span
          aria-hidden="true"
          className={`absolute top-[3px] h-[22px] w-[22px] bg-bx-white transition-all duration-200 ${
            checked ? "left-[23px]" : "left-[3px]"
          }`}
        />
      </button>
    </div>
  );
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  /** Whether a stored choice exists — controls the close button. */
  const [hasStoredChoice, setHasStoredChoice] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Read the stored choice after mount (localStorage is client-only).
  // Render nothing until mounted so server and client HTML match.
  useEffect(() => {
    setMounted(true);
    const stored = readConsent();
    if (stored) {
      setHasStoredChoice(true);
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    } else {
      setVisible(true);
    }
  }, []);

  // Re-open from the footer "Cookie settings" link.
  useEffect(() => {
    const onOpen = () => {
      const stored = readConsent();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setCustomising(true);
      setVisible(true);
      // Move focus to the banner so keyboard users land on it.
      window.setTimeout(() => headingRef.current?.focus(), 0);
    };
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () =>
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, []);

  function choose(analyticsChoice: boolean, marketingChoice: boolean) {
    saveConsent({ analytics: analyticsChoice, marketing: marketingChoice });
    setAnalytics(analyticsChoice);
    setMarketing(marketingChoice);
    setHasStoredChoice(true);
    setCustomising(false);
    setVisible(false);
  }

  if (!mounted || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-bx-gold-500/50 bg-bx-maroon-950 text-bx-ivory shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.5)]"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-6 sm:px-8 sm:py-7 lg:px-10">
        <div className="flex items-start justify-between gap-6">
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="font-sans text-xl font-extrabold tracking-[-0.02em] text-bx-ivory focus:outline-none"
          >
            Cookies, your way
          </h2>
          {hasStoredChoice && (
            <button
              type="button"
              onClick={() => {
                setCustomising(false);
                setVisible(false);
              }}
              aria-label="Close cookie settings"
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center text-bx-champagne/80 transition-colors hover:text-bx-ivory"
            >
              <Icon name="close" size={20} />
            </button>
          )}
        </div>

        <p className="mt-2 max-w-[72ch] text-[15px] leading-relaxed text-bx-champagne/85">
          BridgeX stores your cookie choice — and any form entries you save —
          in this browser. We do not currently load analytics or marketing
          scripts; the choices you make here will apply automatically if we
          connect them later. See the{" "}
          <Link
            href="/cookies"
            className="font-bold text-bx-champagne underline underline-offset-4 hover:text-bx-ivory"
          >
            Cookie Policy
          </Link>{" "}
          for details.
        </p>

        {customising ? (
          <div className="mt-5">
            <Toggle
              id="consent-necessary"
              label="Strictly necessary"
              description="Required for the site to work — remembering this choice itself, and keeping your saved form entries on this device."
              checked
              disabled
            />
            <Toggle
              id="consent-analytics"
              label="Analytics"
              description="Helps us understand which pages are useful. No analytics runs today; if we add it, it will only load with this switched on."
              checked={analytics}
              onChange={setAnalytics}
            />
            <Toggle
              id="consent-marketing"
              label="Marketing"
              description="Used to measure campaigns and show relevant content elsewhere. No marketing scripts run today."
              checked={marketing}
              onChange={setMarketing}
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => choose(analytics, marketing)}
                className="inline-flex min-h-[48px] items-center justify-center bg-bx-gold-500 px-6 font-sans text-[15px] font-bold text-bx-maroon-950 transition-colors duration-200 hover:bg-bx-gold-400 active:scale-[0.97]"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => setCustomising(false)}
                className="inline-flex min-h-[48px] items-center justify-center border-2 border-bx-champagne/70 px-6 font-sans text-[15px] font-bold text-bx-champagne transition-colors duration-200 hover:bg-bx-champagne hover:text-bx-maroon-950 active:scale-[0.97]"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => choose(true, true)}
              className="inline-flex min-h-[48px] items-center justify-center bg-bx-gold-500 px-6 font-sans text-[15px] font-bold text-bx-maroon-950 transition-colors duration-200 hover:bg-bx-gold-400 active:scale-[0.97]"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => choose(false, false)}
              className="inline-flex min-h-[48px] items-center justify-center border-2 border-bx-champagne/70 px-6 font-sans text-[15px] font-bold text-bx-champagne transition-colors duration-200 hover:bg-bx-champagne hover:text-bx-maroon-950 active:scale-[0.97]"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => setCustomising(true)}
              className="inline-flex min-h-[48px] items-center justify-center px-4 font-sans text-[15px] font-bold text-bx-champagne underline underline-offset-4 transition-colors hover:text-bx-ivory"
            >
              Customise
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Footer "Cookie settings" link — re-opens the banner in its customise
 * view. Styled to match the footer's legal links.
 */
export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => openCookieSettings()}
      className="flex min-h-[44px] items-center text-sm text-bx-champagne/80 transition-colors hover:text-bx-ivory"
    >
      Cookie settings
    </button>
  );
}
