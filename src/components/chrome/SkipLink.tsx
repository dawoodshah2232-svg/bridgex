/**
 * SkipLink — first focusable element on every page; jumps to #main.
 * Visually hidden until focused.
 */
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-[60] bg-bx-navy-900 px-5 py-3 font-sans text-sm font-bold text-bx-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-2 focus:outline-bx-teal-400"
    >
      Skip to main content
    </a>
  );
}
