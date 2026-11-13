/**
 * Honest client-side persistence for BridgeX lead forms.
 *
 * Static export means there is no server action and no API route, so form
 * entries are stored in the visitor's own browser localStorage until a
 * backend is connected. Every success state says exactly that — we never
 * imply the data reached BridgeX.
 *
 * TODO (Batch 4): connect a real submission endpoint / CRM here. When that
 * lands, keep localStorage as a draft fallback only, and update the success
 * copy in the form components to describe the real submission.
 */

export const LEAD_STORAGE_PREFIX = "bridgex-lead-";

/** Minimum time (ms) between form mount and submit — bots are faster. */
export const MIN_SUBMIT_MS = 3000;

export interface StoredLead {
  form: string;
  submittedAt: string;
  data: Record<string, string>;
}

/** Save a lead entry. Returns false if storage is unavailable or full. */
export function saveLead(form: string, data: Record<string, string>): boolean {
  try {
    const entry: StoredLead = {
      form,
      submittedAt: new Date().toISOString(),
      data,
    };
    const key = `${LEAD_STORAGE_PREFIX}${form}`;
    const existing = window.localStorage.getItem(key);
    const list: StoredLead[] = existing ? JSON.parse(existing) : [];
    list.push(entry);
    window.localStorage.setItem(key, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Field validators shared by every form. Return an error string or null. */
export function required(value: string, label: string): string | null {
  return value.trim() ? null : `${label} is required.`;
}

export function validEmail(value: string): string | null {
  if (!value.trim()) return "Work email is required.";
  return EMAIL_RE.test(value.trim())
    ? null
    : "Enter a valid email address, for example name@company.com.";
}
