/**
 * CrmPreview — interactive Financial CRM preview (spec S1).
 * Three tabs: a filterable lead list, a pipeline filtered by desk, and a
 * Contact 360 record with its own sub-tabs. All data is fictional and
 * labelled illustrative.
 */
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import DemoLabel from "@/components/ui/DemoLabel";
import Icon from "@/components/icons";
import TabList from "./TabList";

type Stage = "New" | "Contacted" | "Qualified" | "Converted";

interface Lead {
  name: string;
  country: string;
  desk: string;
  source: string;
  stage: Stage;
  owner: string;
}

const LEADS: Lead[] = [
  { name: "Layla Haddad", country: "UAE", desk: "EMEA", source: "Website", stage: "New", owner: "S. Okafor" },
  { name: "Marcus Webb", country: "United Kingdom", desk: "EMEA", source: "Partner referral", stage: "Contacted", owner: "S. Okafor" },
  { name: "Priya Nair", country: "India", desk: "APAC", source: "Webinar", stage: "Qualified", owner: "J. Tan" },
  { name: "Diego Ramírez", country: "Mexico", desk: "LATAM", source: "Event", stage: "New", owner: "M. Costa" },
  { name: "Amara Chen", country: "Singapore", desk: "APAC", source: "Website", stage: "Contacted", owner: "J. Tan" },
  { name: "Tomás Silva", country: "Brazil", desk: "LATAM", source: "Partner referral", stage: "Qualified", owner: "M. Costa" },
  { name: "Elena Petrova", country: "Bulgaria", desk: "EMEA", source: "Website", stage: "Converted", owner: "S. Okafor" },
  { name: "Kenji Mori", country: "Japan", desk: "APAC", source: "Event", stage: "New", owner: "J. Tan" },
];

const STAGES: Stage[] = ["New", "Contacted", "Qualified", "Converted"];
const DESKS = ["All desks", "EMEA", "APAC", "LATAM"];

const STAGE_STYLE: Record<Stage, string> = {
  New: "border-bx-teal-600/60 text-bx-teal-700",
  Contacted: "border-bx-navy-800/50 text-bx-navy-800",
  Qualified: "border-bx-navy-700 bg-bx-navy-700/10 text-bx-teal-700",
  Converted: "border-bx-navy-900 bg-bx-navy-900 text-bx-white",
};

function StagePill({ stage }: { stage: Stage }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap border px-2.5 py-1 text-[12px] font-bold ${STAGE_STYLE[stage]}`}
    >
      {stage}
    </span>
  );
}

function LeadListPanel() {
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<Stage | "All">("All");
  const filtered = useMemo(
    () =>
      LEADS.filter(
        (l) =>
          (stage === "All" || l.stage === stage) &&
          (query.trim() === "" ||
            l.name.toLowerCase().includes(query.toLowerCase()) ||
            l.country.toLowerCase().includes(query.toLowerCase())),
      ),
    [query, stage],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">Leads — this week</h3>
        <DemoLabel text="Illustrative data — fictional leads" />
      </div>
      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="sr-only" htmlFor="crm-lead-search">
          Search leads by name or country
        </label>
        <input
          id="crm-lead-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or country…"
          className="min-h-[44px] w-full border border-bx-teal-500/40 bg-bx-white rounded-2xl px-4 text-[15px] text-bx-navy-900 placeholder:text-bx-slate-500 lg:max-w-xs"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by stage">
          {(["All", ...STAGES] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStage(s)}
              aria-pressed={stage === s}
              className={`min-h-[40px] border px-3.5 font-sans text-sm font-bold transition-colors duration-150 ${
                stage === s
                  ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                  : "border-bx-teal-500/40 bg-bx-white text-bx-teal-700 hover:border-bx-navy-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div
        className="mt-5 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label="Leads table — scroll sideways to see all columns"
      >
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-bx-teal-500/40 text-[12px] font-sans uppercase tracking-[0.14em] text-bx-slate-500">
              <th scope="col" className="py-3 pr-4 font-bold">Lead</th>
              <th scope="col" className="py-3 pr-4 font-bold">Country</th>
              <th scope="col" className="py-3 pr-4 font-bold">Desk</th>
              <th scope="col" className="py-3 pr-4 font-bold">Source</th>
              <th scope="col" className="py-3 pr-4 font-bold">Owner</th>
              <th scope="col" className="py-3 font-bold">Stage</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.name} className="border-b border-bx-teal-500/15">
                <td className="py-3.5 pr-4 text-sm font-bold text-bx-navy-900">{lead.name}</td>
                <td className="py-3.5 pr-4 text-sm text-bx-slate-500">{lead.country}</td>
                <td className="py-3.5 pr-4 text-sm text-bx-slate-500">{lead.desk}</td>
                <td className="py-3.5 pr-4 text-sm text-bx-slate-500">{lead.source}</td>
                <td className="py-3.5 pr-4 text-sm text-bx-slate-500">{lead.owner}</td>
                <td className="py-3.5"><StagePill stage={lead.stage} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-8 text-center text-sm text-bx-slate-500" role="status">
            No leads match that search and stage. Try clearing the search.
          </p>
        )}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bx-slate-500" role="status">
        Showing {filtered.length} of {LEADS.length} leads.
        Duplicates are flagged at capture, and every lead has one owner.
      </p>
    </div>
  );
}

function PipelinePanel() {
  const [desk, setDesk] = useState("All desks");
  const inDesk = LEADS.filter((l) => desk === "All desks" || l.desk === desk);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">Pipeline by stage</h3>
        <DemoLabel text="Illustrative data — fictional pipeline" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter pipeline by desk">
        {DESKS.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDesk(d)}
            aria-pressed={desk === d}
            className={`min-h-[40px] border px-3.5 font-sans text-sm font-bold transition-colors duration-150 ${
              desk === d
                ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                : "border-bx-teal-500/40 bg-bx-white text-bx-teal-700 hover:border-bx-navy-700"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((stage) => {
          const leads = inDesk.filter((l) => l.stage === stage);
          return (
            <div key={stage} className="border border-bx-teal-500/30 bg-bx-white rounded-2xl p-4">
              <p className="flex items-baseline justify-between font-sans">
                <span className="text-sm font-bold text-bx-navy-900">{stage}</span>
                <span className="text-2xl font-extrabold text-bx-teal-700 tabular-nums">
                  {leads.length}
                </span>
              </p>
              <span aria-hidden="true" className="mt-3 block h-[3px] w-full bg-bx-mint-50">
                <span
                  className="block h-[3px] bg-bx-teal-500"
                  style={{ width: `${inDesk.length === 0 ? 0 : Math.round((leads.length / inDesk.length) * 100)}%` }}
                />
              </span>
              <ul className="mt-4 space-y-2.5">
                {leads.map((lead) => (
                  <li key={lead.name} className="border-l-2 border-bx-teal-500/60 pl-3">
                    <p className="text-sm font-bold text-bx-navy-900">{lead.name}</p>
                    <p className="text-[13px] text-bx-slate-500">
                      {lead.country} · {lead.owner}
                    </p>
                  </li>
                ))}
                {leads.length === 0 && (
                  <li className="text-sm text-bx-slate-500">No leads at this stage.</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bx-slate-500">
        {desk === "All desks"
          ? "All desks combined. Filter by desk to see each team's pipeline."
          : `Showing the ${desk} desk — ${inDesk.length} leads in the pipeline.`}
      </p>
    </div>
  );
}

interface Contact {
  name: string;
  type: string;
  roles: string;
  kyc: string;
  suitability: string;
  accounts: string;
  activities: { when: string; text: string }[];
  documents: { name: string; status: string }[];
  cases: { ref: string; subject: string; status: string }[];
}

const CONTACTS: Contact[] = [
  {
    name: "Amara Chen",
    type: "Individual · Singapore",
    roles: "Trader · Account holder",
    kyc: "Verified",
    suitability: "Assessed — standard products",
    accounts: "MT5-884120 (Standard) · MT5-884121 (Demo)",
    activities: [
      { when: "12 Nov · 10:02", text: "Call — discussed leverage options for the standard account." },
      { when: "10 Nov · 15:40", text: "Email — sent platform guide and funding instructions." },
      { when: "08 Nov · 09:15", text: "Note — prefers contact by email; mornings, Singapore time." },
    ],
    documents: [
      { name: "Passport — identity page", status: "Accepted" },
      { name: "Proof of address — utility bill", status: "Accepted" },
      { name: "Source of funds declaration", status: "Under review" },
    ],
    cases: [
      { ref: "CST-5530", subject: "Deposit not showing on account", status: "In progress" },
      { ref: "CST-5491", subject: "Platform login reset", status: "Resolved" },
    ],
  },
  {
    name: "Meridian Capital Ltd",
    type: "Corporate · United Kingdom",
    roles: "Corporate client · 3 linked people",
    kyc: "In review",
    suitability: "Assessed — professional products",
    accounts: "MT5-771004 (Corporate)",
    activities: [
      { when: "12 Nov · 11:20", text: "Meeting — onboarding call with the finance director." },
      { when: "09 Nov · 14:05", text: "Task — chase certificate of incorporation (due 14 Nov)." },
    ],
    documents: [
      { name: "Certificate of incorporation", status: "Accepted" },
      { name: "Register of directors", status: "Accepted" },
      { name: "Beneficial ownership declaration", status: "Awaiting documents" },
    ],
    cases: [
      { ref: "CST-5544", subject: "Corporate account fee schedule", status: "Open" },
    ],
  },
  {
    name: "Priya Nair",
    type: "Individual · India",
    roles: "Trader · Referred by Northgate IB",
    kyc: "Verified",
    suitability: "Assessed — standard products",
    accounts: "MT5-902318 (Standard)",
    activities: [
      { when: "11 Nov · 16:30", text: "Call — welcome call; interested in gold and indices." },
      { when: "10 Nov · 09:00", text: "Email — onboarding complete, account details sent." },
    ],
    documents: [
      { name: "National ID — front and back", status: "Accepted" },
      { name: "Proof of address — bank statement", status: "Accepted" },
    ],
    cases: [],
  },
];

const CONTACT_TABS = [
  { id: "overview", label: "Overview" },
  { id: "activities", label: "Activities" },
  { id: "documents", label: "Documents" },
  { id: "cases", label: "Cases" },
];

function Contact360Panel() {
  const [contactIdx, setContactIdx] = useState(0);
  const [subTab, setSubTab] = useState("overview");
  const contact = CONTACTS[contactIdx];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-sans text-xl font-bold text-bx-navy-900">Contact 360</h3>
        <DemoLabel text="Illustrative data — fictional contacts" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Choose a contact record">
        {CONTACTS.map((c, i) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setContactIdx(i)}
            aria-pressed={contactIdx === i}
            className={`min-h-[44px] border px-4 font-sans text-sm font-bold transition-colors duration-150 ${
              contactIdx === i
                ? "border-bx-navy-900 bg-bx-navy-900 text-bx-white"
                : "border-bx-teal-500/40 bg-bx-white text-bx-teal-700 hover:border-bx-navy-700"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="mt-6 border border-bx-teal-500/30 bg-bx-white rounded-2xl">
        <div className="border-b border-bx-teal-500/30 px-5 py-4 sm:px-6">
          <p className="font-sans text-lg font-extrabold text-bx-navy-900">{contact.name}</p>
          <p className="mt-0.5 text-sm text-bx-slate-500">
            {contact.type} · {contact.roles}
          </p>
        </div>
        <TabList
          tabs={CONTACT_TABS}
          activeId={subTab}
          onSelect={setSubTab}
          prefix="crm-contact"
          ariaLabel="Contact record sections"
        />
        <div className="px-5 py-6 sm:px-6" role="tabpanel" id={`crm-contact-panel-${subTab}`} aria-labelledby={`crm-contact-tab-${subTab}`}>
          {subTab === "overview" && (
            <dl className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {[
                ["KYC status", contact.kyc],
                ["Suitability", contact.suitability],
                ["Linked accounts", contact.accounts],
                ["Open cases", contact.cases.filter((c) => c.status !== "Resolved").length.toString()],
              ].map(([term, value]) => (
                <div key={term} className="border-l-2 border-bx-teal-500/60 pl-3">
                  <dt className="text-[12px] font-sans font-bold uppercase tracking-[0.14em] text-bx-slate-500">{term}</dt>
                  <dd className="mt-1 text-[15px] font-bold text-bx-navy-900">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {subTab === "activities" && (
            <ol className="space-y-4">
              {contact.activities.map((a) => (
                <li key={a.when} className="flex gap-4">
                  <span className="shrink-0 text-[13px] font-bold tabular-nums text-bx-teal-700">{a.when}</span>
                  <span className="text-[15px] leading-relaxed text-bx-navy-900">{a.text}</span>
                </li>
              ))}
            </ol>
          )}
          {subTab === "documents" && (
            <ul className="space-y-3">
              {contact.documents.map((d) => (
                <li key={d.name} className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-teal-500/15 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-[15px] font-bold text-bx-navy-900">{d.name}</span>
                  <span className="border border-bx-teal-600/50 px-2.5 py-1 text-[12px] font-bold text-bx-teal-700">{d.status}</span>
                </li>
              ))}
            </ul>
          )}
          {subTab === "cases" && (
            <div>
              {contact.cases.length === 0 ? (
                <p className="text-[15px] text-bx-slate-500">No support cases on this record.</p>
              ) : (
                <ul className="space-y-3">
                  {contact.cases.map((c) => (
                    <li key={c.ref} className="flex flex-wrap items-center justify-between gap-3 border-b border-bx-teal-500/15 pb-3 last:border-b-0 last:pb-0">
                      <span>
                        <span className="font-sans text-sm font-bold tabular-nums text-bx-teal-700">{c.ref} · </span>
                        <span className="text-[15px] text-bx-navy-900">{c.subject}</span>
                      </span>
                      <span className="border border-bx-teal-600/50 px-2.5 py-1 text-[12px] font-bold text-bx-teal-700">{c.status}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-bx-slate-500">
        <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-bx-teal-600" />
        Field-level access applies here: a sales user sees the pipeline view, a
        compliance user sees KYC and documents — the same record, different
        permissions.
      </p>
    </div>
  );
}

const TABS = [
  { id: "leads", label: "Lead list", hint: "Search & filter by stage" },
  { id: "pipeline", label: "Pipeline", hint: "By stage & desk" },
  { id: "contact", label: "Contact 360", hint: "One record, whole history" },
];

export default function CrmPreview() {
  const [active, setActive] = useState("leads");
  const reduceMotion = useReducedMotion();

  return (
    <div className="border border-bx-teal-500/30 bg-bx-white rounded-2xl">
      <TabList tabs={TABS} activeId={active} onSelect={setActive} prefix="crm" ariaLabel="CRM preview" />
      <div className="bg-bx-mint-50/60 px-5 py-8 sm:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            role="tabpanel"
            id={`crm-panel-${active}`}
            aria-labelledby={`crm-tab-${active}`}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === "leads" && <LeadListPanel />}
            {active === "pipeline" && <PipelinePanel />}
            {active === "contact" && <Contact360Panel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
