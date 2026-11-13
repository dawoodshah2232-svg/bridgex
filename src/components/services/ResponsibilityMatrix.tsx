/**
 * ResponsibilityMatrix — who owns what during implementation, as a real
 * <table> (semantic, screen-reader friendly). Horizontally scrollable on
 * narrow screens with a visible scroll region label.
 */
import type { ResponsibilityRow } from "@/content/company";

export default function ResponsibilityMatrix({ rows }: { rows: ResponsibilityRow[] }) {
  return (
    <div
      className="overflow-x-auto border border-bx-maroon-900/15 bg-bx-white"
      role="region"
      aria-label="Responsibility matrix — BridgeX and client ownership by area"
      tabIndex={0}
    >
      <table className="w-full min-w-[640px] border-collapse text-left font-body text-[15px] leading-relaxed">
        <caption className="sr-only">
          For each implementation area, what BridgeX owns and what the client owns.
        </caption>
        <thead>
          <tr className="bg-bx-maroon-900 text-bx-ivory">
            <th scope="col" className="w-[22%] px-5 py-4 font-sans text-sm font-extrabold uppercase tracking-[0.08em]">
              Area
            </th>
            <th scope="col" className="w-[39%] px-5 py-4 font-sans text-sm font-extrabold uppercase tracking-[0.08em]">
              BridgeX owns
            </th>
            <th scope="col" className="w-[39%] px-5 py-4 font-sans text-sm font-extrabold uppercase tracking-[0.08em]">
              You own
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.area}
              className={i % 2 === 1 ? "bg-bx-cream/60" : "bg-bx-white"}
            >
              <th scope="row" className="px-5 py-4 align-top font-sans font-extrabold text-bx-ink">
                {row.area}
              </th>
              <td className="px-5 py-4 align-top text-bx-muted">{row.bridgex}</td>
              <td className="px-5 py-4 align-top text-bx-muted">{row.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
