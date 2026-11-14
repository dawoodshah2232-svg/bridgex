/**
 * General careers inquiry form — /company/careers.
 *
 * There are no open roles listed right now, so this is a general inquiry:
 * who you are, what you do, and what kind of work interests you. Same
 * honest localStorage pattern as the other forms.
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

const AREAS = [
  "Engineering",
  "Product & design",
  "Implementation & services",
  "Sales & partnerships",
  "Operations & support",
  "Something else",
];

type Errors = Partial<
  Record<"name" | "email" | "area" | "message" | "consent", string>
>;

export default function CareersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
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
    const areaErr = required(area, "Area of interest");
    if (areaErr) next.area = areaErr;
    const messageErr = required(message, "Tell us about yourself");
    if (messageErr) next.message = messageErr;
    if (!consent)
      next.consent = "Please confirm you are happy for us to keep your details on file.";
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
      const saved = saveLead("careers", {
        name: name.trim(),
        email: email.trim(),
        area,
        message: message.trim(),
      });
      setStatus(saved ? "success" : "error");
    }, 500);
  }

  function reset() {
    setName("");
    setEmail("");
    setArea("");
    setMessage("");
    setConsent(false);
    setHoneypot("");
    setErrors({});
    setStatus("idle");
    mountedAt.current = Date.now();
  }

  if (status === "success") {
    return (
      <FormSuccess heading="Your inquiry is saved." onReset={reset} resetLabel="Send another inquiry">
        <p>
          Your inquiry has been saved on this device, in your browser&apos;s
          local storage. Online submission is being connected — once it is,
          inquiries sent here will reach the BridgeX team directly.
        </p>
        <p>
          There are no open roles right now, so we cannot promise a reply
          timeline — but every inquiry is read by a person when a relevant
          role opens.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <Honeypot value={honeypot} onChange={setHoneypot} id="careers-website-url" />
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="careers-name"
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
          id="careers-email"
          label="Email"
          required
          type="email"
          value={email}
          onChange={(v) => {
            setEmail(v);
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          error={errors.email}
          placeholder="alex@example.com"
          autoComplete="email"
          disabled={status === "submitting"}
        />
      </div>
      <FormSelect
        id="careers-area"
        label="Area of interest"
        required
        value={area}
        onChange={(v) => {
          setArea(v);
          if (errors.area) setErrors({ ...errors, area: undefined });
        }}
        error={errors.area}
        options={AREAS}
        placeholder="Choose an area"
        disabled={status === "submitting"}
      />
      <FormTextarea
        id="careers-message"
        label="Tell us about yourself"
        required
        value={message}
        onChange={(v) => {
          setMessage(v);
          if (errors.message) setErrors({ ...errors, message: undefined });
        }}
        error={errors.message}
        hint="A few lines about what you do and what kind of work interests you. Links to a portfolio or profile are welcome — please do not paste sensitive personal documents here."
        placeholder="I build… / I have worked on… / I am interested in…"
        rows={6}
        disabled={status === "submitting"}
      />
      <FormCheckbox
        id="careers-consent"
        label={
          <>
            I am happy for BridgeX to keep my details on file for future
            roles.{" "}
            <span className="text-bx-slate-500">
              You can ask us to delete them at any time — see the Privacy
              Policy.
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
        <FormErrorBanner message="We could not save your inquiry on this device — your browser may be blocking local storage. Please try again, or try another browser." />
      )}
      {status === "spam" && (
        <FormErrorBanner message="That submission looked automated, so it was not saved. Please take a moment, check the form, and try again." />
      )}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Saving…" : "Send inquiry"}
      </Button>
      <p className="text-sm leading-relaxed text-bx-slate-500">
        Your inquiry is stored locally on this device until online submission
        is connected. Nothing is sent anywhere yet.
      </p>
    </form>
  );
}
