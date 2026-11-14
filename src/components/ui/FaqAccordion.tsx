/**
 * FaqAccordion — accessible accordion, 180–260ms open/close.
 * Keyboard: native <button> semantics; Enter/Space toggle; Tab moves on.
 * Only one item open at a time (single-open); the first item starts open.
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Icon from "../icons";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({
  items,
  dark = false,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  dark?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const reduceMotion = useReducedMotion();

  return (
    <div className="divide-y divide-bx-teal-500/25 border-y border-bx-teal-500/25">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-lg font-bold transition-colors duration-200 sm:text-xl ${
                  dark
                    ? "text-bx-white hover:text-bx-teal-400"
                    : "text-bx-navy-900 hover:text-bx-teal-700"
                }`}
              >
                {item.question}
                <span
                  className={`shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  } ${dark ? "text-bx-teal-400" : "text-bx-teal-600"}`}
                >
                  <Icon name="plus" size={22} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.24,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className={`max-w-[68ch] pb-6 pr-10 text-base leading-relaxed ${
                      dark ? "text-bx-slate-300/85" : "text-bx-slate-500"
                    }`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
