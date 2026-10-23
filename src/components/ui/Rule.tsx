"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/cn";

type RuleProps = {
  className?: string;
  /** "plain" hairline, or "ornament" with a centred ampersand. */
  variant?: "plain" | "ornament";
  /** Draw the line from the left as it enters the viewport. */
  animate?: boolean;
};

/** Decorative horizontal rule. Hidden from assistive technology. */
export function Rule({ className, variant = "plain", animate = true }: RuleProps) {
  const line = (origin: "left" | "right") =>
    animate ? (
      <m.span
        data-reveal=""
        className="block h-px flex-1 bg-current"
        style={{ originX: origin === "left" ? 0 : 1 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -5% 0px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    ) : (
      <span className="block h-px flex-1 bg-current" />
    );

  if (variant === "ornament") {
    return (
      <div aria-hidden="true" className={cn("flex items-center gap-5 opacity-60", className)}>
        {line("right")}
        <span className="font-serif text-xl leading-none italic text-brass">&amp;</span>
        {line("left")}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={cn("flex opacity-30", className)}>
      {line("left")}
    </div>
  );
}
