import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** Optional index shown before the label, e.g. "01". */
  index?: string;
  as?: "p" | "span" | "div";
};

/** Small uppercase label preceded by a short brass rule. */
export function Eyebrow({ children, className, index, as: Component = "p" }: EyebrowProps) {
  return (
    <Component className={cn("eyebrow flex items-center gap-3", className)}>
      <span aria-hidden="true" className="h-px w-8 shrink-0 bg-current opacity-50" />
      {index ? <span className="tabular opacity-70">{index}</span> : null}
      <span>{children}</span>
    </Component>
  );
}
