/**
 * Client experience — audience tabs: client room, partner portal, advisor
 * interface. Each panel pairs the audience story with a small illustrative
 * preview panel (clearly labelled sample data, never a real account).
 */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { AUDIENCES } from "@/content/platform";
import { asset } from "@/lib/paths";
import Icon from "@/components/icons";
import DemoLabel from "@/components/ui/DemoLabel";
import { onTabListKeyDown } from "./tabs";

export default function AudienceTabs() {
  const [selected, setSelected] = useState(0);
  const reduceMotion = useReducedMotion();
  const audience = AUDIENCES[selected];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Who the experience is built for"
        className="flex flex-col gap-3 sm:flex-row"
      >
        {AUDIENCES.map((item, i) => {
          const isActive = i === selected;
          return (
            <button
              key={item.id}
              id={`audience-tab-${i}`}
              role="tab"
              aria-selected={isActive}
              aria-controls="audience-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(e) =>
                onTabListKeyDown(e, i, AUDIENCES.length, "audience-tab", setSelected)
              }
              className={`flex min-h-[56px] flex-1 items-center justify-center gap-3 border px-5 font-sans text-base font-bold transition-colors duration-200 ${
                isActive
                  ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                  : "border-bx-teal-500/30 bg-transparent text-bx-navy-900 hover:border-bx-teal-500/70"
              }`}
            >
              <Icon
                name={item.icon}
                size={22}
                className={isActive ? "text-bx-teal-400" : "text-bx-teal-600"}
              />
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={audience.id}
          id="audience-panel"
          role="tabpanel"
          aria-labelledby={`audience-tab-${selected}`}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 grid gap-8 border border-bx-teal-500/25 bg-bx-white rounded-2xl p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
        >
          <div className="lg:col-span-7">
            <h3 className="font-sans text-2xl font-extrabold leading-tight tracking-[-0.01em] text-bx-navy-900 sm:text-3xl">
              {audience.headline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bx-slate-500">{audience.copy}</p>
            <div className="mt-8 space-y-6">
              {audience.features.map((feature) => (
                <div key={feature.title}>
                  <h4 className="font-sans text-lg font-bold text-bx-navy-900">{feature.title}</h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-bx-slate-500">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src={asset(audience.image)}
              alt={audience.imageAlt}
              width={audience.imageWidth}
              height={audience.imageHeight}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="mt-6 border border-bx-teal-500/25 bg-bx-white rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.18em] text-bx-teal-700">
                  {audience.label} — at a glance
                </p>
                <DemoLabel text="Illustrative data" />
              </div>
              <dl className="mt-5 divide-y divide-bx-teal-500/20">
                {audience.preview.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm text-bx-slate-500">{row.label}</dt>
                    <dd className="text-right font-sans text-[15px] font-bold text-bx-navy-900">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
                Sample values shown to illustrate the layout. Your portal shows
                your own records, in your brand.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
