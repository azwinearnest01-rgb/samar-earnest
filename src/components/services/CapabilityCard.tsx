import Link from "next/link";

import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { type Capability, capabilityHref } from "@/content/capabilities";
import { cn } from "@/lib/cn";

type CapabilityCardProps = {
  capability: Capability;
  /** Show the one-line summary beneath the name. */
  withSummary?: boolean;
  headingLevel?: "h3" | "h4";
  className?: string;
};

/** A capability as a single, fully clickable editorial row. */
export function CapabilityCard({
  capability,
  withSummary = true,
  headingLevel = "h3",
  className,
}: CapabilityCardProps) {
  const Heading = headingLevel;
  return (
    <article className={cn("group relative border-b border-ink/15 py-6", className)}>
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <Heading className="font-display text-[1.375rem] leading-snug">
            <Link href={capabilityHref(capability)} className="after:absolute after:inset-0">
              <span className="link-underline group-hover:bg-[length:100%_1px]">{capability.name}</span>
            </Link>
          </Heading>
          {withSummary ? (
            <p className="mt-2 text-[0.975rem] leading-relaxed text-ink/70">{capability.summary}</p>
          ) : null}
        </div>
        <ArrowIcon className="mt-3 text-brass-deep transition-transform duration-500 ease-estate group-hover:translate-x-1.5" />
      </div>
    </article>
  );
}
