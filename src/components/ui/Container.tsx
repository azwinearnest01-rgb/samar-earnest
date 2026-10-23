import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** "wide" for full editorial grids, "narrow" for reading measure. */
  width?: "wide" | "default" | "narrow";
} & ComponentPropsWithoutRef<T>;

const widths = {
  wide: "max-w-[110rem]",
  default: "max-w-[90rem] 3xl:max-w-[100rem]",
  narrow: "max-w-[48rem]",
} as const;

/** Horizontal page frame with responsive gutters (20px mobile → 64px desktop). */
export function Container<T extends ElementType = "div">({
  as,
  width = "default",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component className={cn("mx-auto w-full px-5 sm:px-8 md:px-10 xl:px-16", widths[width], className)} {...props} />
  );
}
