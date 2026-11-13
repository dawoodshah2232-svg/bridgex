/**
 * CodeSample — a code block with a copy button, for the developer docs.
 * Every sample on the developers page is an example against a host that
 * does not exist; the label says so next to the code, not in a footnote.
 */
"use client";

import { useEffect, useRef, useState } from "react";

export default function CodeSample({
  label,
  code,
  example = true,
}: {
  label: string;
  code: string;
  /** Show the "Example — not a live endpoint" label. Default true. */
  example?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Clipboard API unavailable (permissions or non-secure context):
      // fall back to a temporary textarea + execCommand.
      const area = document.createElement("textarea");
      area.value = code;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <figure className="overflow-hidden border border-bx-gold-500/30 bg-bx-maroon-950">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-gold-500/25 px-4 py-2.5">
        <span className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-bx-gold-400">
          {label}
        </span>
        <span className="flex items-center gap-3">
          {example && (
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-bx-champagne/80">
              Example — not a live endpoint
            </span>
          )}
          <button
            type="button"
            onClick={copy}
            aria-live="polite"
            className="min-h-[32px] border border-bx-champagne/40 px-3 font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-bx-champagne transition-colors hover:bg-bx-champagne hover:text-bx-maroon-950"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </span>
      </figcaption>
      <pre
        tabIndex={0}
        role="region"
        aria-label={`Code sample — ${label}`}
        className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-bx-ivory/90 sm:text-sm"
      >
        <code>{code}</code>
      </pre>
    </figure>
  );
}
