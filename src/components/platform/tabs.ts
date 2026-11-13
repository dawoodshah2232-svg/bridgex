/**
 * Shared keyboard behaviour for the platform tablists (WAI-ARIA tabs
 * pattern): Left/Right/Home/End move between tabs and move focus with
 * them. Each tablist passes its own id prefix so focus targets stay
 * unique across the page.
 */
import type { KeyboardEvent } from "react";

export function onTabListKeyDown(
  e: KeyboardEvent<HTMLButtonElement>,
  index: number,
  count: number,
  idPrefix: string,
  select: (next: number) => void,
): void {
  let next: number | null = null;
  if (e.key === "ArrowRight") next = (index + 1) % count;
  else if (e.key === "ArrowLeft") next = (index - 1 + count) % count;
  else if (e.key === "Home") next = 0;
  else if (e.key === "End") next = count - 1;
  if (next === null) return;
  e.preventDefault();
  select(next);
  document.getElementById(`${idPrefix}-${next}`)?.focus();
}
