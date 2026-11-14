/**
 * TealLineDivider — the brand's hairline separator: a fine teal rule with
 * a small rotated-square (bridge-joint) ornament at its centre.
 * Decorative only (aria-hidden).
 */
export default function TealLineDivider({
  className = "",
  ornament = true,
}: {
  className?: string;
  ornament?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-3 ${className}`}
    >
      <span className="h-px flex-1 bg-bx-teal-500/40" />
      {ornament && (
        <span className="block h-1.5 w-1.5 rotate-45 bg-bx-teal-500" />
      )}
      <span className="h-px flex-1 bg-bx-teal-500/40" />
    </div>
  );
}

/** Short left-aligned teal rule used under section labels and card titles. */
export function TealRule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[2px] w-12 bg-bx-teal-500 ${className}`}
    />
  );
}
