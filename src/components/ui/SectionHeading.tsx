import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Reveal } from "../motion/Reveal";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  /** id for the heading, for aria-labelledby on the parent section. */
  id?: string;
  intro?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  align?: "start" | "center";
  className?: string;
  /** Eyebrow/intro colour on dark surfaces. */
  tone?: "light" | "dark";
};

const titleSizes = {
  xl: "text-display-2",
  lg: "text-display-3",
  md: "text-display-4",
} as const;

export function SectionHeading({
  eyebrow,
  index,
  title,
  id,
  intro,
  as: Heading = "h2",
  size = "lg",
  align = "start",
  className,
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-4xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Eyebrow
          index={index}
          className={cn(
            "mb-6 md:mb-8",
            tone === "dark" ? "text-brass" : "text-brass-deep",
            centered && "justify-center",
          )}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading id={id} className={titleSizes[size]}>
        {title}
      </Heading>
      {intro ? (
        <div
          className={cn(
            "mt-6 max-w-2xl text-lead md:mt-8",
            tone === "dark" ? "text-ivory/80" : "text-ink/80",
            centered && "mx-auto",
          )}
        >
          {intro}
        </div>
      ) : null}
    </Reveal>
  );
}
