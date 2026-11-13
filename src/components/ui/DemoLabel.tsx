/**
 * DemoLabel — the "Illustrative data" badge required on every product
 * preview that shows sample data (spec §3, §6 H05). Small, honest, always
 * visible next to the preview it labels.
 */
export default function DemoLabel({
  text = "Illustrative data — demo preview",
  dark = false,
  className = "",
}: {
  text?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 border px-3 py-1.5 font-sans text-[12px] font-bold uppercase tracking-[0.14em] ${
        dark
          ? "border-bx-gold-500/50 text-bx-gold-400"
          : "border-bx-gold-600/50 text-bx-maroon-700"
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rotate-45 ${dark ? "bg-bx-gold-400" : "bg-bx-gold-600"}`}
      />
      {text}
    </span>
  );
}
