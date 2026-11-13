/**
 * DraftNotice — the visible "Draft — pending legal review" flag required
 * on every legal page (spec §10). Rendered at the top of the page body,
 * impossible to miss, and honest about what the document is.
 */
import Icon from "../icons";

export default function DraftNotice({ updated }: { updated: string }) {
  return (
    <div
      role="note"
      aria-label="Draft document notice"
      className="flex items-start gap-4 border border-bx-gold-600/50 bg-bx-cream px-5 py-5 sm:px-6"
    >
      <span className="mt-0.5 shrink-0 text-bx-gold-600" aria-hidden="true">
        <Icon name="document" size={24} />
      </span>
      <div>
        <p className="font-sans text-[15px] font-extrabold uppercase tracking-[0.12em] text-bx-maroon-700">
          Draft — pending legal review
        </p>
        <p className="mt-1.5 max-w-[70ch] font-body text-[15px] leading-relaxed text-bx-muted">
          This document is a working draft for legal review. It is not a final
          policy, and it makes no claim of regulatory compliance or
          certification. The final version will state its effective date and
          the legal entity responsible for it.
        </p>
        <p className="mt-2 font-body text-sm text-bx-muted">
          Draft updated: {updated}
        </p>
      </div>
    </div>
  );
}
