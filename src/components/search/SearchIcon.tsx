/**
 * Search (magnifier) glyph in the house icon style — 24×24 viewBox, 1.75
 * stroke, round caps/joins, currentColor — matching src/components/icons.tsx.
 *
 * Kept here, not in icons.tsx, because the icon system is Batch 3's scope
 * in this batch; the coordinator may move this glyph into icons.tsx at
 * integration and re-point the two imports (Header, SearchBox).
 */
export default function SearchIcon({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" />
    </svg>
  );
}
