/**
 * StatusBadge — the honest status label for product updates (spec §11).
 * Colour never carries the meaning alone: the word is always printed.
 */
import type { UpdateStatus } from "@/content/resources";

const STYLES: Record<UpdateStatus, string> = {
  Live: "border-bx-navy-700/60 bg-bx-navy-700 text-bx-white",
  Sandbox: "border-bx-teal-600/60 bg-bx-teal-600/10 text-bx-teal-700",
  Demo: "border-bx-teal-500/60 bg-bx-mint-50 text-bx-teal-700",
  Planned: "border-dashed border-bx-slate-500/60 bg-transparent text-bx-slate-500",
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
