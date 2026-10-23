import { useId } from "react";

import { cn } from "@/lib/cn";

type SealProps = {
  className?: string;
  /** Oval (default) or circular form. */
  shape?: "oval" | "circle";
  title?: string;
};

/**
 * Decorative S&E seal: the monogram within a lettered oval band. Purely
 * typographic — no heraldry. Inherits `currentColor`.
 */
export function Seal({ className, shape = "oval", title }: SealProps) {
  const id = useId().replace(/:/g, "");
  const rx = 92;
  const ry = shape === "oval" ? 116 : 92;
  const innerRx = rx - 22;
  const innerRy = ry - 22;
  const pathId = `seal-path-${id}`;

  return (
    <svg
      viewBox="0 0 240 280"
      className={cn("block", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      <ellipse cx="120" cy="140" rx={rx + 8} ry={ry + 8} stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
      <ellipse cx="120" cy="140" rx={rx} ry={ry} stroke="currentColor" strokeWidth="1.25" />
      <ellipse cx="120" cy="140" rx={innerRx} ry={innerRy} stroke="currentColor" strokeWidth="0.75" />
      <path id={pathId} d={`M 120 ${140 + ry - 11} a ${rx - 11} ${ry - 11} 0 1 1 0.01 0`} fill="none" />
      <text fill="currentColor" className="font-sans" fontSize="10.5" letterSpacing="4.2" fontWeight="600">
        <textPath href={`#${pathId}`} startOffset="2%">
          SAMAR &amp; EARNEST · INDEPENDENT DIGITAL ADVISORY ·
        </textPath>
      </text>
      <text x="120" y="158" textAnchor="middle" fill="currentColor" className="font-display" fontSize="54">
        S
        <tspan className="font-serif" fontStyle="italic">
          &amp;
        </tspan>
        E
      </text>
      <line x1="94" y1="176" x2="146" y2="176" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
