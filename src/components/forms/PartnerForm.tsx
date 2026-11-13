/**
 * Partner application form — /company/partners.
 *
 * Same honest pattern as the contact form: client-side validation,
 * honeypot + minimum-time spam checks, localStorage persistence.
 * TODO (Batch 4): connect a real submission endpoint / CRM.
 */
"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/Button";
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

const PARTNER_TYPES = [
  "Joint go-to-market",
  "Technology integration",
  "Referral / introducer",
  "Not sure yet — let's talk",
];

type Errors = Partial<
  Record<"name" | "email" | "company" | "type" | "message" | "consent", string>
>;

export default function PartnerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "spam">("idle");
  const mountedAt = useRef(Date.now());

  function validate(): Errors {
    const next: Errors = {};
    const nameErr = required(name, "Your name");
    if (nameErr) next.name = nameErr;
    const emailErr = validEmail(email);
    if (emailErr) next.email = emailErr;
    const companyErr = required(company, "Company");
    if (companyErr) next.company = companyErr;
    const typeErr = required(type, "Partnership type");
    if (typeErr) next.type = typeErr;
    const messageErr = required(message, "Tell us about the opportunity");
    if (messageErr) next.message = messageErr;
    if (!consent)
      next.consent = "Please confirm you are happy for us to contact you about your application.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    if (honeypot.trim() !== "" || Date.now() - mountedAt.current < MIN_SUBMIT_MS) {
      setStatus("spam");
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => {
      const saved = saveLead("partner", {
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        type,
        message: message.trim(),
      });
      setStatus(saved ? "success" : "error");
    }, 500);
  }

  function reset() {
    setName("");
    setEmail("");
    setCompany("");
    setType("");
    setMessage("");
    setConsent(false);
    setHoneypot("");
    setErrors({});
    setStatus("idle");
    mountedAt.current = Date.now();
  }

  if (status === "success") {
    return (
      <FormSuccess heading="Your application is saved." onReset={reset} resetLabel="Submit another application">
        <p>
          Your partner application has been saved on this device, in your
          browser&apos;s local storage. Online submission is being connected —
          once it is, applications sent here will reach the BridgeX team
          directly.
        </p>
        <p>
          Partner inquiries are read by a person, not an autoresponder, and we
          aim to reply within a few working days of receiving them.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <Honeypot value={honeypot} onChange={setHoneypot} id="partner-website-url" />
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="partner-name"
          label="Your name"
          required
          value={name}
          onChange={(v) => {
            setName(v);
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          error={errors.name}
          placeholder="Alex Morgan"
          autoComplete="name"
          disabled={status === "submitting"}
        />
        <FormField
          id="partner-email"
          label="Work email"
          required
          type="email"
          value={email}
          onChange={(v) => {
            setEmail(v);
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          error={errors.email}
          placeholder="alex@yourcompany.com"
          autoComplete="email"
          disabled={status === "submitting"}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="partner-company"
          label="Company"
          required
          value={company}
          onChange={(v) => {
            setCompany(v);
            if (errors.company) setErrors({ ...errors, company: undefined });
          }}
          error={errors.company}
          placeholder="Your company"
          autoComplete="organization"
          disabled={status === "submitting"}
        />
        <FormSelect
          id="partner-type"
          label="Partnership type"
          required
          value={type}
          onChange={(v) => {
            setType(v);
            if (errors.type) setErrors({ ...errors, type: undefined });
          }}
          error={errors.type}
          options={PARTNER_TYPES}
          placeholder="Choose a partnership type"
          disabled={status === "submitting"}
        />
      </div>
      <FormTextarea
        id="partner-message"
        label="Tell us about the opportunity"
        required
        value={message}
        onChange={(v) => {
          setMessage(v);
          if (errors.message) setErrors({ ...errors, message: undefined });
        }}
        error={errors.message}
        placeholder="What does your company do, who are your clients, and what would working together look like?"
        rows={6}
        disabled={status === "submitting"}
      />
      <FormCheckbox
        id="partner-consent"
        label={
          <>
            I am happy for BridgeX to contact me about this partnership
            application.{" "}
            <span className="text-bx-muted">
              We use your details only to respond — see the Privacy Policy.
            </span>
          </>
        }
        checked={consent}
        onChange={(c) => {
          setConsent(c);
          if (errors.consent) setErrors({ ...errors, consent: undefined });
        }}
        error={errors.consent}
        disabled={status === "submitting"}
      />
      {status === "error" && (
        <FormErrorBanner message="We could not save your application on this device — your browser may be blocking local storage. Please try again, or try another browser." />
      )}
      {status === "spam" && (
        <FormErrorBanner message="That submission looked automated, so it was not saved. Please take a moment, check the form, and try again." />
      )}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Saving…" : "Submit application"}
      </Button>
      <p className="text-sm leading-relaxed text-bx-muted">
        Your application is stored locally on this device until online
        submission is connected. Nothing is sent anywhere yet.
      </p>
    </form>
  );
}
