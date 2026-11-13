/**
 * Multi-step demo booking form — /book-demo.
 *
 * Three steps with a progress indicator, back/next navigation and
 * per-step validation:
 *   1. You — name, work email, company
 *   2. Your business — role, region, solution interest
 *   3. The demo — message, consent
 *
 * Spam prevention: honeypot + minimum-time check. Persistence is honest
 * localStorage (see leadStorage.ts) — the success state says the request
 * is saved on this device.
 * TODO (Batch 4): connect a real submission endpoint / CRM + scheduling.
 */
"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/Button";
import Icon from "../icons";
import { DEMO_INTERESTS, DEMO_REGIONS, DEMO_ROLES } from "@/content/company";
import {
  FormCheckbox,
  FormErrorBanner,
  FormField,
  FormSelect,
  FormSuccess,
  FormTextarea,
  Honeypot,
} from "./fields";
import {
  MIN_SUBMIT_MS,
  required,
  saveLead,
  validEmail,
} from "./leadStorage";

const STEPS = [
  { title: "You", description: "Who should we talk to?" },
  { title: "Your business", description: "What do you do?" },
  { title: "The demo", description: "What should we show you?" },
];

type Errors = Partial<
  Record<"name" | "email" | "company" | "role" | "region" | "interest" | "message" | "consent", string>
>;

export default function DemoBookingForm() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [region, setRegion] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "spam">("idle");
  const mountedAt = useRef(Date.now());
  const reduceMotion = useReducedMotion();

  function validateStep(s: number): Errors {
    const next: Errors = {};
    if (s === 0) {
      const nameErr = required(name, "Your name");
      if (nameErr) next.name = nameErr;
      const emailErr = validEmail(email);
      if (emailErr) next.email = emailErr;
      const companyErr = required(company, "Company");
      if (companyErr) next.company = companyErr;
    }
    if (s === 1) {
      const roleErr = required(role, "Role");
      if (roleErr) next.role = roleErr;
      const regionErr = required(region, "Region");
      if (regionErr) next.region = regionErr;
      const interestErr = required(interest, "Solution interest");
      if (interestErr) next.interest = interestErr;
    }
    if (s === 2) {
      if (!consent)
        next.consent = "Please confirm you are happy for us to contact you about your demo.";
    }
    return next;
  }

  function nextStep() {
    const next = validateStep(step);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    if (step < STEPS.length - 1) {
      nextStep();
      return;
    }
    const next = validateStep(2);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    if (honeypot.trim() !== "" || Date.now() - mountedAt.current < MIN_SUBMIT_MS) {
      setStatus("spam");
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => {
      const saved = saveLead("book-demo", {
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        role,
        region,
        interest,
        message: message.trim(),
      });
      setStatus(saved ? "success" : "error");
    }, 500);
  }

  function reset() {
    setStep(0);
    setName("");
    setEmail("");
    setCompany("");
    setRole("");
    setRegion("");
    setInterest("");
    setMessage("");
    setConsent(false);
    setHoneypot("");
    setErrors({});
    setStatus("idle");
    mountedAt.current = Date.now();
  }

  function clearError(key: keyof Errors) {
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  }

  if (status === "success") {
    return (
      <FormSuccess heading="Your demo request is saved." onReset={reset} resetLabel="Book another demo">
        <p>
          Your request has been saved on this device, in your browser&apos;s
          local storage. Online submission is being connected — once it is,
          demo requests sent here will reach the BridgeX team directly, and
          we will be in touch to arrange a time.
        </p>
        <p>
          A demo usually runs 45 to 60 minutes and is built around your
          workflows, not a generic slide deck.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <Honeypot value={honeypot} onChange={setHoneypot} />

      {/* Progress indicator */}
      <ol
        aria-label="Demo booking progress"
        className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start"
      >
        {STEPS.map((s, i) => {
          const state = i < step ? "done" : i === step ? "current" : "todo";
          return (
            <li key={s.title} className="flex flex-1 items-start gap-3">
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 shrink-0 items-center justify-center font-sans text-sm font-extrabold ${
                  state === "current"
                    ? "bg-bx-maroon-900 text-bx-gold-400"
                    : state === "done"
                      ? "bg-bx-gold-500 text-bx-maroon-950"
                      : "border border-bx-maroon-900/25 text-bx-muted"
                }`}
              >
                {state === "done" ? <Icon name="check" size={18} /> : i + 1}
              </span>
              <span className="pt-0.5">
                <span
                  className={`block font-sans text-[15px] font-bold ${
                    state === "todo" ? "text-bx-muted" : "text-bx-ink"
                  }`}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  Step {i + 1}: {s.title}
                </span>
                <span className="block text-sm text-bx-muted">{s.description}</span>
              </span>
            </li>
          );
        })}
      </ol>

      <motion.div
        key={step}
        initial={reduceMotion ? false : { opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {step === 0 && (
          <div className="space-y-6">
            <FormField
              id="demo-name"
              label="Your name"
              required
              value={name}
              onChange={(v) => {
                setName(v);
                clearError("name");
              }}
              error={errors.name}
              placeholder="Alex Morgan"
              autoComplete="name"
              disabled={status === "submitting"}
            />
            <FormField
              id="demo-email"
              label="Work email"
              required
              type="email"
              value={email}
              onChange={(v) => {
                setEmail(v);
                clearError("email");
              }}
              error={errors.email}
              placeholder="alex@yourcompany.com"
              autoComplete="email"
              disabled={status === "submitting"}
            />
            <FormField
              id="demo-company"
              label="Company"
              required
              value={company}
              onChange={(v) => {
                setCompany(v);
                clearError("company");
              }}
              error={errors.company}
              placeholder="Your company"
              autoComplete="organization"
              disabled={status === "submitting"}
            />
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <FormSelect
              id="demo-role"
              label="Your role"
              required
              value={role}
              onChange={(v) => {
                setRole(v);
                clearError("role");
              }}
              error={errors.role}
              options={DEMO_ROLES}
              placeholder="Choose your role"
              disabled={status === "submitting"}
            />
            <FormSelect
              id="demo-region"
              label="Region"
              required
              value={region}
              onChange={(v) => {
                setRegion(v);
                clearError("region");
              }}
              error={errors.region}
              options={DEMO_REGIONS}
              placeholder="Choose your region"
              disabled={status === "submitting"}
            />
            <FormSelect
              id="demo-interest"
              label="Solution interest"
              required
              value={interest}
              onChange={(v) => {
                setInterest(v);
                clearError("interest");
              }}
              error={errors.interest}
              options={DEMO_INTERESTS}
              placeholder="What are you most interested in?"
              disabled={status === "submitting"}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <FormTextarea
              id="demo-message"
              label="What should we focus on?"
              value={message}
              onChange={setMessage}
              hint="Optional — tell us about your business, your current systems, or the workflows you most want to see. It helps us build the demo around you."
              placeholder="We run a multi-asset brokerage and want to see onboarding and partner commissions…"
              rows={5}
              disabled={status === "submitting"}
            />
            <FormCheckbox
              id="demo-consent"
              label={
                <>
                  I am happy for BridgeX to contact me about this demo
                  request.{" "}
                  <span className="text-bx-muted">
                    We use your details only to arrange the demo — see the
                    Privacy Policy.
                  </span>
                </>
              }
              checked={consent}
              onChange={(c) => {
                setConsent(c);
                clearError("consent");
              }}
              error={errors.consent}
              disabled={status === "submitting"}
            />
          </div>
        )}
      </motion.div>

      {status === "error" && (
        <div className="mt-6">
          <FormErrorBanner message="We could not save your request on this device — your browser may be blocking local storage. Please try again, or try another browser." />
        </div>
      )}
      {status === "spam" && (
        <div className="mt-6">
          <FormErrorBanner message="That submission looked automated, so it was not saved. Please take a moment, check the form, and try again." />
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <Button
            type="button"
            variant="secondary"
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            disabled={status === "submitting"}
          >
            Back
          </Button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {step < STEPS.length - 1 ? (
          <Button type="button" size="lg" onClick={nextStep} arrow>
            Continue
          </Button>
        ) : (
          <Button type="submit" size="lg" disabled={status === "submitting"}>
            {status === "submitting" ? "Saving…" : "Request my demo"}
          </Button>
        )}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-bx-muted">
        Your request is stored locally on this device until online submission
        is connected. Nothing is sent anywhere yet.
      </p>
    </form>
  );
}
