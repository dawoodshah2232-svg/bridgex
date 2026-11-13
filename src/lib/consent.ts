/**
 * Cookie consent storage (spec §10/§12).
 *
 * The visitor's choice is persisted in their own browser localStorage as
 * versioned JSON with a timestamp. A stored choice from an older version
 * is treated as no choice, so the banner asks again when the consent
 * model changes.
 *
 * HONESTY: no analytics or marketing scripts are currently loaded on this
 * site. The preferences recorded here will apply automatically if and
 * when analytics are connected — the banner copy says exactly that.
 */

export const CONSENT_STORAGE_KEY = "bridgex-consent";

/** Bump this when the consent model changes to re-ask every visitor. */
export const CONSENT_VERSION = 1;

/** Window event that re-opens the banner (dispatched by the footer link). */
export const OPEN_COOKIE_SETTINGS_EVENT = "bridgex:open-cookie-settings";

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentState extends ConsentPreferences {
  version: number;
  /** ISO timestamp of when the choice was saved. */
  timestamp: string;
  /** Necessary storage is always on — recorded for completeness. */
  necessary: true;
}

/** Read the stored consent, or null when there is none (or it is stale). */
export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const candidate = parsed as Partial<ConsentState>;
    if (candidate.version !== CONSENT_VERSION) return null;
    if (typeof candidate.analytics !== "boolean") return null;
    if (typeof candidate.marketing !== "boolean") return null;
    if (typeof candidate.timestamp !== "string") return null;
    return {
      version: CONSENT_VERSION,
      timestamp: candidate.timestamp,
      necessary: true,
      analytics: candidate.analytics,
      marketing: candidate.marketing,
    };
  } catch {
    // Storage unavailable, blocked or corrupt — treat as no choice.
    return null;
  }
}

/** Save a consent choice. Returns the stored state, or null on failure. */
export function saveConsent(
  preferences: ConsentPreferences,
): ConsentState | null {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    return state;
  } catch {
    return null;
  }
}

/** Ask the cookie banner to open (used by the "Cookie settings" link). */
export function openCookieSettings(): void {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
