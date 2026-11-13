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

/** Maximum entries kept per form — bounds localStorage growth. */
export const MAX_STORED_LEADS = 50;

export interface StoredLead {
  form: string;
  submittedAt: string;
  data: Record<string, string>;
}

/**
 * Read the stored entries for a form. A corrupt value (unparseable JSON,
 * or JSON that is not an array) yields an empty list instead of throwing:
 * previously, one bad value made every later save fail forever.
 */
function readStoredLeads(key: string): StoredLead[] {
  try {
    const existing = window.localStorage.getItem(key);
    if (!existing) return [];
    const parsed: unknown = JSON.parse(existing);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (entry): entry is StoredLead =>
        typeof entry === "object" && entry !== null,
    );
  } catch {
    return [];
  }
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
    const list = readStoredLeads(key);
    list.push(entry);
    window.localStorage.setItem(
      key,
      JSON.stringify(list.slice(-MAX_STORED_LEADS)),
    );
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
