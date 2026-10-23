import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  /** Show the descriptor line beneath the name. */
  withDescriptor?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[0.95rem] tracking-[0.2em]",
  md: "text-[1.05rem] tracking-[0.22em] lg:text-[1.125rem]",
  lg: "text-[clamp(1.6rem,1rem+3.6vw,4.25rem)] tracking-[0.14em]",
} as const;

/**
 * Text logo. The ampersand is set in the italic Caslon text face and coloured
 * brass — the firm's central identity device.
 */
export function Wordmark({ className, withDescriptor, size = "md" }: WordmarkProps) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className={cn("font-display whitespace-nowrap uppercase", sizes[size])}>
        Samar{" "}
        <span aria-hidden="true" className="font-serif normal-case italic text-brass">
          &amp;
        </span>
        <span className="sr-only">and</span> Earnest
      </span>
      {withDescriptor ? (
        <span className="eyebrow mt-2 text-[0.625rem] tracking-[0.28em] opacity-70">Independent Digital Advisory</span>
      ) : null}
    </span>
  );
}
