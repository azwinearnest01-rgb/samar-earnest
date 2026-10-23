import { retainerComparison } from "@/content/engagements";

/**
 * Conventional retainer vs. the Private Digital Office.
 * A true table on tablet and desktop; stacked comparisons on mobile.
 */
export function RetainerComparison() {
  return (
    <>
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="sr-only">
          How the Private Digital Office differs from a conventional agency retainer
        </caption>
        <thead>
          <tr className="border-b border-ink/25">
            <th scope="col" className="eyebrow w-[24%] py-4 pr-6 text-[0.6875rem] font-semibold text-stone-deep">
              <span className="sr-only">Aspect</span>
            </th>
            <th scope="col" className="eyebrow w-[38%] py-4 pr-6 text-[0.6875rem] font-semibold text-stone-deep">
              A conventional retainer
            </th>
            <th scope="col" className="eyebrow py-4 text-[0.6875rem] font-semibold text-brass-deep">
              The Private Digital Office
            </th>
          </tr>
        </thead>
        <tbody>
          {retainerComparison.map((row) => (
            <tr key={row.aspect} className="border-b border-ink/15 align-top">
              <th scope="row" className="py-5 pr-6 font-sans text-sm font-semibold">
                {row.aspect}
              </th>
              <td className="py-5 pr-6 text-ink/70">{row.conventional}</td>
              <td className="py-5 font-display text-xl leading-snug">{row.office}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dl className="border-t border-ink/25 md:hidden">
        {retainerComparison.map((row) => (
          <div key={row.aspect} className="border-b border-ink/15 py-5">
            <dt className="eyebrow text-[0.6875rem] text-stone-deep">{row.aspect}</dt>
            <dd className="mt-3">
              <span className="block text-sm text-ink/70">
                <span className="sr-only">A conventional retainer: </span>
                {row.conventional}
              </span>
              <span className="mt-1 block font-display text-xl leading-snug">
                <span className="sr-only">The Private Digital Office: </span>
                {row.office}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}
