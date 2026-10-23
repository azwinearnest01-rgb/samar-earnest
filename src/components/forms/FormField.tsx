import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

export const controlClasses =
  "block w-full rounded-none border-0 border-b border-ink/35 bg-transparent px-0 py-3 text-[1.0625rem] text-ink placeholder:text-ink/45 transition-colors duration-300 hover:border-ink/60 focus:border-forest focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 aria-[invalid=true]:border-oxblood";

/** Label, hint and error wiring shared by every enquiry form control. */
export function FieldShell({ id, label, required, hint, error, children, className }: FieldShellProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="flex items-baseline justify-between gap-4">
        <span className="eyebrow text-[0.6875rem] text-ink">{label}</span>
        <span className="text-xs text-stone-deep">{required ? "Required" : "Optional"}</span>
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-ink/70">
          {hint}
        </p>
      ) : null}
      <div className="mt-1">{children}</div>
      <p id={`${id}-error`} className={cn("text-sm text-oxblood", error ? "mt-2" : "sr-only")} aria-live="polite">
        {error ?? ""}
      </p>
    </div>
  );
}

/** aria-describedby value for a field's hint and error. */
export function describedBy(id: string, hint?: string, error?: string) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined;
}
