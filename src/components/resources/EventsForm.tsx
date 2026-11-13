/**
 * EventsForm — "register interest" for the planned webinar programme.
 *
 * Honest persistence: this static site has no backend yet, so a
 * submission is saved to the visitor's own browser (localStorage) and
 * the success state says exactly that — nothing has been sent to
 * BridgeX. A honeypot field silently discards bot submissions.
 *
 * TODO (Batch 4): connect this form to a real backend or mailing list.
 * When that lands, replace the localStorage write with the submission
 * call, keep the honeypot, and update the success copy to say the
 * registration was received.
 */
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "@/components/icons";
import { EVENT_TOPICS } from "@/content/resources";
import { MIN_SUBMIT_MS } from "../forms/leadStorage";

const STORAGE_KEY = "bridgex:event-interest";

interface SavedInterest {
  name: string;
  email: string;
  topic: string;
  savedAt: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  topic?: string;
  consent?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function topicLabel(id: string): string {
  return (
    EVENT_TOPICS.find((t) => t.id === id)?.title ??
    (id === "any" ? "Any topic" : id)
  );
}

export default function EventsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [consent, setConsent] = useState(false);
  // Honeypot: visible to bots, hidden from people (see the field below).
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [saved, setSaved] = useState<SavedInterest | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [spam, setSpam] = useState(false);
  // Minimum-time spam check, matching the other four lead forms.
  const mountedAt = useRef(Date.now());

  // Read any previously saved interest once, on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SavedInterest;
        if (parsed?.name && parsed?.email && parsed?.topic) {
          setSaved(parsed);
        }
      }
    } catch {
      // Storage unavailable or corrupt — the form still works; the
      // submission simply cannot be persisted on this device.
    }
    setLoaded(true);
  }, []);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!EMAIL_RE.test(email.trim())) {
      next.email = "Please enter a valid work email address.";
    }
    if (!topic) {
      next.topic = "Please choose a topic — or “Any topic”.";
    }
    if (!consent) {
      next.consent =
        "Please confirm you are happy for us to contact you about this event.";
    }
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Honeypot filled: a bot. Show the same success state without
    // storing anything, so the trap stays invisible.
    if (website.trim() !== "") {
      setSaved({
        name: name.trim() || "Guest",
        email: email.trim(),
        topic: topic || "any",
        savedAt: new Date().toISOString(),
      });
      setEditing(false);
      return;
    }
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Submitted impossibly fast — likely automated. Unlike the honeypot
    // path, this is shown honestly: a real person just retries.
    if (Date.now() - mountedAt.current < MIN_SUBMIT_MS) {
      setSpam(true);
      return;
    }
    setSpam(false);

    const entry: SavedInterest = {
      name: name.trim(),
      email: email.trim(),
      topic,
      savedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
    } catch {
      // Storage full or blocked: still show the saved state, since the
      // copy below is explicit that this is device-only. The entry is
      // kept in component state for this session.
    }
    setSaved(entry);
    setEditing(false);
  }

  function clearSaved() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing to remove, or storage blocked — state is cleared anyway.
    }
    setSaved(null);
    setName("");
    setEmail("");
    setTopic("");
    setConsent(false);
    setWebsite("");
    setErrors({});
    setSpam(false);
    setEditing(false);
    mountedAt.current = Date.now();
  }

  function startEdit() {
    if (!saved) return;
    setName(saved.name);
    setEmail(saved.email);
    setTopic(saved.topic);
    setConsent(true);
    setErrors({});
    setEditing(true);
  }

  if (!loaded) {
    // Avoid a flash of the empty form before the saved state is known.
    return (
      <div className="border border-bx-gold-500/30 bg-bx-white p-8 sm:p-10">
        <p className="text-base text-bx-muted">Loading the form…</p>
      </div>
    );
  }

  if (saved && !editing) {
    return (
      <div className="border border-bx-gold-500/30 bg-bx-white p-8 sm:p-10">
        <p className="flex items-start gap-3 font-sans text-xl font-extrabold leading-snug text-bx-ink">
          <Icon
            name="check"
            size={24}
            className="mt-0.5 shrink-0 text-bx-gold-600"
          />
          Interest saved on this device
        </p>
        <dl className="mt-6 space-y-3 text-base leading-relaxed">
          <div className="flex flex-wrap gap-x-3">
            <dt className="font-sans font-bold text-bx-muted">Name</dt>
            <dd className="text-bx-ink">{saved.name}</dd>
          </div>
          <div className="flex flex-wrap gap-x-3">
            <dt className="font-sans font-bold text-bx-muted">Email</dt>
            <dd className="text-bx-ink">{saved.email}</dd>
          </div>
          <div className="flex flex-wrap gap-x-3">
            <dt className="font-sans font-bold text-bx-muted">Topic</dt>
            <dd className="text-bx-ink">{topicLabel(saved.topic)}</dd>
          </div>
        </dl>
        <p className="mt-6 border-t border-bx-gold-500/25 pt-5 text-base leading-relaxed text-bx-muted">
          This is saved in your browser on this device only. It has{" "}
          <strong className="text-bx-ink">not</strong> been sent to BridgeX
          — there is no backend connected to this form yet. When event
          registration opens, this page will say so, and you can register
          properly then.
        </p>
        <div className="mt-7 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={startEdit}
            className="min-h-[48px] border-2 border-bx-maroon-900 px-6 font-sans text-[15px] font-bold text-bx-maroon-900 transition-colors hover:bg-bx-maroon-900 hover:text-bx-ivory"
          >
            Update your details
          </button>
          <button
            type="button"
            onClick={clearSaved}
            className="min-h-[48px] px-2 font-sans text-[15px] font-bold text-bx-maroon-700 hover:underline"
          >
            Remove saved interest
          </button>
        </div>
      </div>
    );
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-bx-gold-500/30 bg-bx-white p-8 sm:p-10"
    >
      <p className="font-sans text-xl font-extrabold text-bx-ink">
        Register interest
      </p>
      <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-bx-muted">
        Tell us which session you would attend. Your interest is saved in
        this browser only — nothing is sent to BridgeX until registration
        properly opens.
      </p>

      {hasErrors && (
        <div
          role="alert"
          className="mt-6 border border-bx-maroon-700/50 bg-bx-cream px-5 py-4"
        >
          <p className="font-sans font-bold text-bx-maroon-700">
            Please check the highlighted fields below.
          </p>
        </div>
      )}

      {spam && (
        <div
          role="alert"
          className="mt-6 border border-bx-maroon-700/50 bg-bx-cream px-5 py-4"
        >
          <p className="font-sans font-bold text-bx-maroon-700">
            That submission looked automated, so it was not saved. Please
            take a moment, check the form, and try again.
          </p>
        </div>
      )}

      {/* Honeypot — hidden from sighted users and screen readers. Bots
          that fill every field trip it; people never see it. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="events-website">Company website (leave blank)</label>
        <input
          id="events-website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="events-name"
            className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700"
          >
            Full name
          </label>
          <input
            id="events-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "events-name-error" : undefined}
            className="mt-2 min-h-[52px] w-full border-2 border-bx-maroon-900/25 bg-bx-ivory px-4 font-body text-base text-bx-ink focus:border-bx-maroon-700 focus:outline-none"
          />
          {errors.name && (
            <p id="events-name-error" role="alert" className="mt-2 text-sm font-bold text-bx-maroon-700">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="events-email"
            className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700"
          >
            Work email
          </label>
          <input
            id="events-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "events-email-error" : undefined}
            className="mt-2 min-h-[52px] w-full border-2 border-bx-maroon-900/25 bg-bx-ivory px-4 font-body text-base text-bx-ink focus:border-bx-maroon-700 focus:outline-none"
          />
          {errors.email && (
            <p id="events-email-error" role="alert" className="mt-2 text-sm font-bold text-bx-maroon-700">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="events-topic"
          className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-maroon-700"
        >
          Topic interest
        </label>
        <select
          id="events-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "events-topic-error" : undefined}
          className="mt-2 min-h-[52px] w-full border-2 border-bx-maroon-900/25 bg-bx-ivory px-4 font-body text-base text-bx-ink focus:border-bx-maroon-700 focus:outline-none"
        >
          <option value="">Choose a session…</option>
          {EVENT_TOPICS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
          <option value="any">Any topic — tell me about all of them</option>
        </select>
        {errors.topic && (
          <p id="events-topic-error" role="alert" className="mt-2 text-sm font-bold text-bx-maroon-700">
            {errors.topic}
          </p>
        )}
      </div>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id="events-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "events-consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0 accent-bx-maroon-700"
          />
          <label
            htmlFor="events-consent"
            className="text-base leading-relaxed text-bx-ink"
          >
            I am happy for BridgeX to contact me about this event when
            registration opens.
          </label>
        </div>
        {errors.consent && (
          <p id="events-consent-error" role="alert" className="mt-2 text-sm font-bold text-bx-maroon-700">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-2.5 bg-bx-gold-500 px-8 font-sans text-base font-bold text-bx-maroon-950 transition-all duration-200 hover:bg-bx-gold-400 active:scale-[0.97]"
      >
        Save my interest
        <Icon name="arrowRight" size={18} />
      </button>
      <p className="mt-4 text-sm leading-relaxed text-bx-muted">
        Saved on this device only. No account is created, and nothing
        leaves your browser.
      </p>
    </form>
  );
}
