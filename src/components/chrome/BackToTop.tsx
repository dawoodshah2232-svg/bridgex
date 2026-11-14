/**
 * BackToTop — footer button. Smooth scrolls to the top; honours
 * prefers-reduced-motion by jumping instantly.
 */
"use client";

import Icon from "../icons";

export default function BackToTop() {
  const goTop = () => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#E2E8F0] px-4 font-sans text-sm font-bold text-bx-slate-500 transition-colors duration-200 hover:border-bx-teal-500 hover:text-bx-teal-600 active:scale-[0.97]"
    >
      Back to top
      <span className="rotate-180">
        <Icon name="chevronDown" size={16} />
      </span>
    </button>
  );
}
