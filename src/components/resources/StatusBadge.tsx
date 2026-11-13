/**
 * StatusBadge — the honest status label for product updates (spec §11).
 * Colour never carries the meaning alone: the word is always printed.
 */
import type { UpdateStatus } from "@/content/resources";

const STYLES: Record<UpdateStatus, string> = {
  Live: "border-bx-maroon-700/60 bg-bx-maroon-700 text-bx-ivory",
  Sandbox: "border-bx-gold-600/60 bg-bx-gold-600/10 text-bx-maroon-700",
  Demo: "border-bx-gold-500/60 bg-bx-cream text-bx-maroon-700",
  Planned: "border-dashed border-bx-muted/60 bg-transparent text-bx-muted",
};

export default function StatusBadge({ status }: { status: UpdateStatus }) {
  return (
    <span
      className={`inline-flex items-center border px-3 py-1 font-sans text-[12px] font-bold uppercase tracking-[0.14em] ${STYLES[status]}`}
    >
      {status}
    </span>
  );
}
