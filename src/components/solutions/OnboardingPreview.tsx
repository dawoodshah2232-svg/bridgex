/**
 * OnboardingPreview — interactive Digital Onboarding preview (spec S6).
 * An adaptive stepper: the steps change with the journey type
 * (individual / corporate / professional). Validations are simulated and
 * safe — no real documents or personal data are collected.
 */
"use client";

import { useMemo, useState } from "react";
import DemoLabel from "@/components/ui/DemoLabel";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/icons";

type Journey = "Individual" | "Corporate" | "Professional";

interface StepDef {
  id: string;
  title: string;
  hint: string;
}

const JOURNEY_STEPS: Record<Journey, StepDef[]> = {
  Individual: [
    { id: "details", title: "Your details", hint: "Name, contact & country" },
    { id: "documents", title: "Documents", hint: "ID & proof of address" },
    { id: "verification", title: "Verification", hint: "Simulated ID check" },
    { id: "suitability", title: "Suitability", hint: "Experience & products" },
    { id: "review", title: "Review & submit", hint: "Check and send" },
  ],
  Corporate: [
    { id: "details", title: "Company details", hint: "Entity, country & contact" },
    { id: "ownership", title: "Beneficial ownership", hint: "Owners & directors" },
    { id: "documents", title: "Documents", hint: "Incorporation & ownership" },
    { id: "verification", title: "Verification", hint: "Simulated entity check" },
    { id: "review", title: "Review & submit", hint: "Check and send" },
  ],
  Professional: [
    { id: "details", title: "Your details", hint: "Name, contact & country" },
    { id: "documents", title: "Documents", hint: "ID & proof of status" },
    { id: "verification", title: "Verification", hint: "Simulated ID check" },
    { id: "suitability", title: "Suitability", hint: "Professional assessment" },
    { id: "review", title: "Review & submit", hint: "Check and send" },
  ],
};

const COUNTRIES = ["United Arab Emirates", "United Kingdom", "India", "Singapore", "Germany", "Nigeria"];

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function OnboardingPreview() {
  const [journey, setJourney] = useState<Journey>("Individual");
  const [stepIdx, setStepIdx] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [ownerName, setOwnerName] = useState("");
  const [ownerShare, setOwnerShare] = useState("51");
  const [docId, setDocId] = useState(false);
  const [docAddress, setDocAddress] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [experience, setExperience] = useState("1–3 years");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const steps = JOURNEY_STEPS[journey];
  const step = steps[stepIdx];

  const detailsValid = useMemo(
    () => name.trim().length >= 2 && isEmail(email),
    [name, email],
  );
  const ownershipValid = ownerName.trim().length >= 2 && Number(ownerShare) >= 25 && Number(ownerShare) <= 100;
  const docsValid = docId && docAddress;

  const canContinue = () => {
    if (step.id === "details") return detailsValid;
    if (step.id === "ownership") return ownershipValid;
    if (step.id === "documents") return docsValid;
    if (step.id === "verification") return verified;
    return true;
  };

  const stepError = () => {
    if (step.id === "details") {
      if (name.trim().length < 2) return "Enter the full name — at least 2 characters.";
      if (!isEmail(email)) return "Enter a valid email address, like name@example.com.";
    }
    if (step.id === "ownership") {
      if (ownerName.trim().length < 2) return "Enter a beneficial owner's full name.";
      if (!(Number(ownerShare) >= 25 && Number(ownerShare) <= 100)) return "Ownership share must be between 25% and 100%.";
    }
    if (step.id === "documents") return "Simulate both document uploads to continue.";
    if (step.id === "verification") return "Run the simulated verification check to continue.";
    return "";
  };

  const next = () => {
    if (!canContinue()) {
      setError(stepError());
      return;
    }
    setError("");
    if (stepIdx < steps.length - 1) {
      setStepIdx(stepIdx + 1);
    } else {
      setSubmitted(true);
    }
  };

  const back = () => {
    setError("");
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  };

  const switchJourney = (j: Journey) => {
    setJourney(j);
    setStepIdx(0);
    setVerified(false);
    setVerifying(false);
    setDocId(false);
    setDocAddress(false);
    setSubmitted(false);
    setError("");
  };

  const runVerification = () => {
    setVerifying(true);
    window.setTimeout(() => {
      setVerified(true);
      setVerifying(false);
    }, 1400);
  };

  const reset = () => {
    setSubmitted(false);
    setStepIdx(0);
    setVerified(false);
    setDocId(false);
    setDocAddress(false);
    setName("");
    setEmail("");
    setOwnerName("");
  };

  return (
    <div className="border border-bx-teal-500/30 bg-bx-white rounded-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-teal-500/30 px-5 py-4 sm:px-8">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">Onboarding journey — interactive stepper</h3>
        <DemoLabel text="Illustrative data — simulated checks" />
      </div>

      <div className="px-5 py-6 sm:px-8">
        {/* Journey picker */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Choose an applicant journey">
          {(["Individual", "Corporate", "Professional"] as Journey[]).map((j) => (
            <button
              key={j}
              type="button"
              onClick={() => switchJourney(j)}
              aria-pressed={journey === j}
              className={`min-h-[44px] border px-4 font-sans text-sm font-bold transition-colors duration-150 ${
                journey === j
                  ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                  : "border-bx-teal-500/40 bg-bx-white text-bx-teal-700 hover:border-bx-navy-700"
              }`}
            >
              {j}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="mt-8 border border-bx-navy-700/40 bg-bx-white px-6 py-8 text-center" role="status">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bx-navy-700 text-bx-white">
              <Icon name="check" size={24} />
            </span>
            <h4 className="mt-4 font-sans text-xl font-extrabold text-bx-navy-900">
              Application submitted — {journey} journey
            </h4>
            <p className="mx-auto mt-2 max-w-[56ch] text-[15px] leading-relaxed text-bx-slate-500">
              Reference <strong className="font-sans tabular-nums text-bx-teal-700">ONB-2026-2481</strong> (illustrative).
              In the real flow this application would now sit in the compliance
              approval queue, with documents, verification results and
              suitability attached — and approval would hand straight to
              trading-account creation.
            </p>
            <div className="mt-6">
              <Button onClick={reset} variant="secondary">
                Try another journey
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Stepper */}
            <ol className="mt-8 flex flex-wrap gap-x-5 gap-y-3" aria-label="Onboarding steps">
              {steps.map((s, i) => {
                const state = i < stepIdx ? "done" : i === stepIdx ? "active" : "upcoming";
                return (
                  <li key={s.id} className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 items-center justify-center font-sans text-[13px] font-extrabold ${
                        state === "done"
                          ? "bg-bx-navy-700 text-bx-white"
                          : state === "active"
                            ? "border-2 border-bx-teal-600 text-bx-teal-700"
                            : "border border-bx-teal-500/50 text-bx-slate-500"
                      }`}
                    >
                      {state === "done" ? <Icon name="check" size={14} /> : i + 1}
                    </span>
                    <span className={`font-sans text-sm font-bold ${state === "upcoming" ? "text-bx-slate-500" : "text-bx-navy-900"}`}>
                      {s.title}
                      <span className="sr-only">
                        {state === "done" ? " — complete" : state === "active" ? " — current step" : ""}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ol>

            <div className="mt-8 border border-bx-teal-500/30 bg-bx-white rounded-2xl px-5 py-6 sm:px-8" aria-live="polite">
              <h4 className="font-sans text-lg font-extrabold text-bx-navy-900">{step.title}</h4>
              <p className="mt-1 text-sm text-bx-slate-500">{step.hint}</p>

              <div className="mt-6">
                {step.id === "details" && (
                  <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="onb-name" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-slate-500">
                        {journey === "Corporate" ? "Company name" : "Full name"}
                      </label>
                      <input
                        id="onb-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={journey === "Corporate" ? "e.g. Meridian Capital Ltd" : "e.g. Amara Chen"}
                        autoComplete="off"
                        className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-white rounded-2xl px-3 text-[15px] text-bx-navy-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="onb-email" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-slate-500">
                        {journey === "Corporate" ? "Contact email" : "Email address"}
                      </label>
                      <input
                        id="onb-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        autoComplete="off"
                        className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-white rounded-2xl px-3 text-[15px] text-bx-navy-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="onb-country" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-slate-500">
                        {journey === "Corporate" ? "Country of incorporation" : "Country of residence"}
                      </label>
                      <select
                        id="onb-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-white rounded-2xl px-3 text-[15px] text-bx-navy-900"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <p className="self-end text-sm leading-relaxed text-bx-slate-500">
                      Country and product rules shape the steps that follow —
                      this is what “adaptive” means in practice.
                    </p>
                  </div>
                )}

                {step.id === "ownership" && (
                  <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="onb-owner" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-slate-500">
                        Beneficial owner — full name
                      </label>
                      <input
                        id="onb-owner"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        placeholder="e.g. Daniel Reyes"
                        autoComplete="off"
                        className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-white rounded-2xl px-3 text-[15px] text-bx-navy-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="onb-share" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-slate-500">
                        Ownership share (%)
                      </label>
                      <input
                        id="onb-share"
                        inputMode="numeric"
                        value={ownerShare}
                        onChange={(e) => setOwnerShare(e.target.value)}
                        className="mt-2 min-h-[48px] w-full border border-bx-teal-500/40 bg-bx-white rounded-2xl px-3 text-[15px] tabular-nums text-bx-navy-900"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-bx-slate-500 sm:col-span-2">
                      Corporate journeys collect every beneficial owner at 25%
                      or more, each with their own verification status. This
                      demo asks for one; the real journey repeats the step per
                      owner.
                    </p>
                  </div>
                )}

                {step.id === "documents" && (
                  <div className="max-w-2xl space-y-3">
                    {[
                      { id: "doc-id", label: journey === "Corporate" ? "Certificate of incorporation" : "Identity document (passport or national ID)", checked: docId, set: setDocId },
                      { id: "doc-addr", label: journey === "Corporate" ? "Beneficial ownership declaration" : "Proof of address (utility bill or bank statement)", checked: docAddress, set: setDocAddress },
                    ].map((doc) => (
                      <div key={doc.id} className="flex flex-wrap items-center justify-between gap-3 border border-bx-teal-500/30 px-4 py-3.5">
                        <span className="flex items-center gap-3 text-[15px] font-bold text-bx-navy-900">
                          <Icon name="document" size={20} className="shrink-0 text-bx-teal-600" />
                          {doc.label}
                        </span>
                        {doc.checked ? (
                          <span className="inline-flex items-center gap-2 border border-bx-navy-700 bg-bx-navy-700/10 px-3 py-1.5 font-sans text-[13px] font-bold text-bx-teal-700">
                            <Icon name="check" size={14} /> Uploaded (simulated)
                          </span>
                        ) : (
                          <Button size="md" variant="secondary" onClick={() => doc.set(true)}>
                            Simulate upload
                          </Button>
                        )}
                      </div>
                    ))}
                    <p className="text-sm leading-relaxed text-bx-slate-500">
                      No files leave your browser in this demo — the buttons
                      simulate an upload and a format check. The real journey
                      stores documents as controlled application records.
                    </p>
                  </div>
                )}

                {step.id === "verification" && (
                  <div className="max-w-2xl">
                    {!verified ? (
                      <div>
                        <p className="text-[15px] leading-relaxed text-bx-slate-500">
                          The {journey === "Corporate" ? "entity" : "identity"} check runs through a
                          verification provider adapter, with AML screening
                          alongside. Run the simulated check to continue.
                        </p>
                        <div className="mt-5">
                          <Button onClick={runVerification} disabled={verifying}>
                            {verifying ? "Checking…" : "Run simulated verification"}
                          </Button>
                        </div>
                        {verifying && (
                          <p className="mt-4 text-sm text-bx-slate-500" role="status">
                            Checking document, liveness and sanctions lists…
                          </p>
                        )}
                      </div>
                    ) : (
                      <div role="status">
                        <p className="flex items-center gap-2.5 font-sans text-base font-bold text-bx-navy-900">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bx-navy-700 text-bx-white">
                            <Icon name="check" size={16} />
                          </span>
                          Verification passed (simulated)
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-bx-slate-500">
                          <li>Document authenticity — passed</li>
                          <li>AML / sanctions screening — no matches</li>
                          <li>Email and phone verification — confirmed</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {step.id === "suitability" && (
                  <div className="max-w-2xl">
                    <label htmlFor="onb-exp" className="block font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-bx-slate-500">
                      Trading experience
                    </label>
                    <select
                      id="onb-exp"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="mt-2 min-h-[48px] w-full max-w-sm border border-bx-teal-500/40 bg-bx-white rounded-2xl px-3 text-[15px] text-bx-navy-900"
                    >
                      <option>Less than 1 year</option>
                      <option>1–3 years</option>
                      <option>3–5 years</option>
                      <option>More than 5 years</option>
                    </select>
                    <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
                      Suitability scoring maps experience to product access. A
                      {journey === "Professional" ? " professional" : ""} applicant with {experience.toLowerCase()} of
                      experience would be assessed against the product rules for
                      this journey — the score lands on the application for the
                      compliance queue.
                    </p>
                  </div>
                )}

                {step.id === "review" && (
                  <div className="max-w-2xl">
                    <dl className="space-y-3">
                      {[
                        ["Journey", journey],
                        [journey === "Corporate" ? "Company" : "Applicant", name || "—"],
                        ["Email", email || "—"],
                        ["Country", country],
                        ...(journey === "Corporate" ? [["Beneficial owner", `${ownerName || "—"} (${ownerShare}%)`] as [string, string]] : []),
                        ["Documents", "2 uploaded (simulated)"],
                        ["Verification", verified ? "Passed (simulated)" : "Passed in a previous step"],
                      ].map(([term, value]) => (
                        <div key={term} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-bx-teal-500/15 pb-2.5">
                          <dt className="text-sm text-bx-slate-500">{term}</dt>
                          <dd className="font-sans text-sm font-bold text-bx-navy-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
                      Submitting sends the application to the compliance
                      approval queue. Consent and retention terms are captured
                      with the application — nothing here is stored.
                    </p>
                  </div>
                )}
              </div>

              {error && (
                <p role="alert" className="mt-6 border-l-2 border-bx-navy-700 bg-bx-mint-50 px-4 py-3 text-sm text-bx-navy-900">
                  {error}
                </p>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                {stepIdx > 0 && (
                  <Button onClick={back} variant="secondary">
                    Back
                  </Button>
                )}
                <Button onClick={next}>
                  {stepIdx === steps.length - 1 ? "Submit application" : "Continue"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
