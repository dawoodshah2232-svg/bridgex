/**
 * Contact form — /company/contact.
 *
 * Client-side validation, honeypot + minimum-time spam checks, honest
 * localStorage persistence (see leadStorage.ts). The success state says
 * the message is saved on this device — it does not claim BridgeX
 * received it. TODO (Batch 4): connect a real submission endpoint / CRM.
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

const TOPICS = [
  "General enquiry",
  "Implementation & services",
  "Partnership",
  "Technical question",
  "Media & press",
  "Something else",
];

type Errors = Partial<Record<"name" | "email" | "company" | "topic" | "message" | "consent", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
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
    const topicErr = required(topic, "Topic");
    if (topicErr) next.topic = topicErr;
    const messageErr = required(message, "Message");
    if (messageErr) next.message = messageErr;
    if (!consent) next.consent = "Please confirm you are happy for us to contact you about your enquiry.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Spam checks: honeypot filled, or submitted impossibly fast.
    if (honeypot.trim() !== "" || Date.now() - mountedAt.current < MIN_SUBMIT_MS) {
      setStatus("spam");
      return;
    }
    setStatus("submitting");
    // Small delay so the loading state is perceptible and honest.
    window.setTimeout(() => {
      const saved = saveLead("contact", {
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        topic,
        message: message.trim(),
      });
      setStatus(saved ? "success" : "error");
    }, 500);
  }

  function reset() {
    setName("");
    setEmail("");
    setCompany("");
    setTopic("");
    setMessage("");
    setConsent(false);
    setHoneypot("");
    setErrors({});
    setStatus("idle");
    mountedAt.current = Date.now();
  }

  if (status === "success") {
    return (
      <FormSuccess heading="Your message is saved." onReset={reset}>
        <p>
          Your enquiry has been saved on this device, in your browser&apos;s
          local storage. Online submission is being connected — once it is,
          messages sent here will reach the BridgeX team directly.
        </p>
        <p>
          If your enquiry is urgent, please use the contact details published
          on this page once they are confirmed, or book a demo and raise it
          there.
        </p>
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="contact-name"
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
          id="contact-email"
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
          id="contact-company"
          label="Company"
          value={company}
          onChange={setCompany}
          placeholder="Your company"
          autoComplete="organization"
          disabled={status === "submitting"}
        />
        <FormSelect
          id="contact-topic"
          label="Topic"
          required
          value={topic}
          onChange={(v) => {
            setTopic(v);
            if (errors.topic) setErrors({ ...errors, topic: undefined });
          }}
          error={errors.topic}
          options={TOPICS}
          placeholder="Choose a topic"
          disabled={status === "submitting"}
        />
      </div>
      <FormTextarea
        id="contact-message"
        label="Message"
        required
        value={message}
        onChange={(v) => {
          setMessage(v);
          if (errors.message) setErrors({ ...errors, message: undefined });
        }}
        error={errors.message}
        placeholder="Tell us about your business and what you would like to discuss."
        rows={6}
        disabled={status === "submitting"}
      />
      <FormCheckbox
        id="contact-consent"
        label={
          <>
            I am happy for BridgeX to contact me about my enquiry.{" "}
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
        <FormErrorBanner message="We could not save your message on this device — your browser may be blocking local storage. Please try again, or try another browser." />
      )}
      {status === "spam" && (
        <FormErrorBanner message="That submission looked automated, so it was not saved. Please take a moment, check the form, and try again." />
      )}
      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Saving…" : "Send message"}
      </Button>
      <p className="text-sm leading-relaxed text-bx-muted">
        Your message is stored locally on this device until online submission
        is connected. Nothing is sent anywhere yet.
      </p>
    </form>
  );
}
