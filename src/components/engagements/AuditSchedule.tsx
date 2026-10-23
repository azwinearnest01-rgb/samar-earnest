import { Seal } from "@/components/brand/Seal";
import { auditScope } from "@/content/engagements";
import { cn } from "@/lib/cn";

const numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"];

/**
 * The audit's scope, set as a formal schedule — the visual language of an
 * advisory document rather than an automated report.
 */
export function AuditSchedule({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative border border-ink/20 bg-ivory p-6 shadow-[0_1px_0_rgba(23,24,21,0.04)] sm:p-10",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6 border-b border-ink/15 pb-6">
        <div>
          <p className="eyebrow text-[0.6875rem] text-brass-deep">Schedule of Review</p>
          <p className="mt-2 font-display text-2xl">The Digital Estate Audit</p>
        </div>
        <Seal className="h-16 w-auto shrink-0 text-brass-deep/70" />
      </div>
      <ol className="divide-y divide-ink/10">
        {auditScope.map((item, index) => (
          <li key={item.name} className="grid grid-cols-[2.25rem_1fr] gap-x-3 py-4 sm:grid-cols-[3rem_1fr]">
            <span className="font-serif text-lg italic text-brass-deep">{numerals[index]}.</span>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-2 border-t border-ink/15 pt-6 text-sm text-stone-deep">
        Delivered as a written report with recommendations in order of priority.
      </p>
    </div>
  );
}
