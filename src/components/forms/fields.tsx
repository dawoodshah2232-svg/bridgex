/**
 * Shared form primitives for BridgeX lead forms.
 *
 * Accessible by construction: every field has a visible <label>, errors are
 * announced via aria-invalid + aria-describedby, and the honeypot is hidden
 * from sighted users AND assistive technology (aria-hidden + tabIndex -1).
 */
import type { ReactNode } from "react";
import Icon from "../icons";

const INPUT_CLS =
  "w-full border bg-bx-white px-4 py-3 font-body text-base text-bx-ink placeholder:text-bx-muted/70 transition-colors duration-200 disabled:opacity-60";
const INPUT_OK = "border-bx-maroon-900/25 hover:border-bx-maroon-900/50";
const INPUT_ERR = "border-red-800";

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm font-bold text-red-800">
      {error}
    </p>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

function FieldWrap({ id, label, error, hint, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-sans text-sm font-bold text-bx-ink"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-bx-maroon-700">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-sm text-bx-muted">
          {hint}
        </p>
      )}
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

export function FormField({
  id,
  label,
  error,
  hint,
  required = false,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  disabled = false,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
}) {
  return (
    <FieldWrap id={id} label={label} error={error} hint={hint} required={required}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={`${INPUT_CLS} min-h-[48px] ${error ? INPUT_ERR : INPUT_OK}`}
      />
    </FieldWrap>
  );
}

export function FormTextarea({
  id,
  label,
  error,
  hint,
  required = false,
  value,
  onChange,
  placeholder,
  rows = 5,
  disabled = false,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}) {
  return (
    <FieldWrap id={id} label={label} error={error} hint={hint} required={required}>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={`${INPUT_CLS} resize-y ${error ? INPUT_ERR : INPUT_OK}`}
      />
    </FieldWrap>
  );
}

export function FormSelect({
  id,
  label,
  error,
  hint,
  required = false,
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <FieldWrap id={id} label={label} error={error} hint={hint} required={required}>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={`${INPUT_CLS} min-h-[48px] appearance-none ${error ? INPUT_ERR : INPUT_OK} ${value ? "" : "text-bx-muted"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldWrap>
  );
}

export function FormCheckbox({
  id,
  label,
  error,
  checked,
  onChange,
  disabled = false,
}: {
  id: string;
  label: ReactNode;
  error?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-5 w-5 shrink-0 accent-bx-maroon-700"
        />
        <label
          htmlFor={id}
          className="font-body text-[15px] leading-relaxed text-bx-ink"
        >
          {label}
        </label>
      </div>
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

/**
 * Honeypot — invisible to humans, tempting to bots. A filled value means
 * the submission is spam. Never rendered in a way a screen reader or a
 * keyboard user can reach.
 *
 * Pass a per-form `id`: the previous fixed "website-url" id would
 * duplicate if two forms ever shared a page (invalid HTML, broken
 * label association).
 */
export function Honeypot({
  value,
  onChange,
  id = "website-url",
}: {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-[9999px] top-0 h-0 overflow-hidden opacity-0"
    >
      <label htmlFor={id}>Website URL (leave blank)</label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}

/** Shared success panel — honest about local-only storage. */
export function FormSuccess({
  heading,
  children,
  onReset,
  resetLabel = "Send another message",
}: {
  heading: string;
  children: ReactNode;
  onReset: () => void;
  resetLabel?: string;
}) {
  return (
    <div
      role="status"
      className="border border-bx-gold-500/40 bg-bx-cream px-6 py-8 sm:px-8"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center bg-bx-maroon-900 text-bx-gold-400">
        <Icon name="check" size={24} />
      </span>
      <h3 className="mt-5 font-sans text-2xl font-extrabold tracking-[-0.02em] text-bx-ink">
        {heading}
      </h3>
      <div className="mt-3 space-y-3 font-body text-base leading-relaxed text-bx-muted">
        {children}
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 font-sans text-[15px] font-bold text-bx-maroon-700 underline underline-offset-4 hover:text-bx-maroon-900"
      >
        {resetLabel}
      </button>
    </div>
  );
}

/** Shared form-level error banner. */
export function FormErrorBanner({ message }: { message: string }) {
  return (
    <div
      role="alert"
      className="border border-red-800/50 bg-red-50 px-5 py-4 font-body text-[15px] leading-relaxed text-red-900"
    >
      {message}
    </div>
  );
}
