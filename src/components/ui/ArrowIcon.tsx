import { cn } from "@/lib/cn";

type ArrowIconProps = {
  className?: string;
  direction?: "right" | "down" | "up-right";
};

const rotations = {
  right: "",
  down: "rotate-90",
  "up-right": "-rotate-45",
} as const;

/** Fine-lined arrow used in buttons and links. Decorative. */
export function ArrowIcon({ className, direction = "right" }: ArrowIconProps) {
  return (
    <svg
      viewBox="0 0 24 12"
      width="24"
      height="12"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", rotations[direction], className)}
    >
      <path d="M0 6h22.5M17.5 1l5 5-5 5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
