import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type NumberedSectionProps = {
  /** e.g. "01" */
  number: string;
  label: string;
  title: ReactNode;
  id?: string;
  children: ReactNode;
  tone?: "light" | "paper" | "dark";
  className?: string;
};

const tones = {
  light: "",
  paper: "texture-paper bg-paper",
  dark: "theme-dark",
} as const;

/**
 * A chapter of a long-form page: "01 — The Principle". The label column sits
 * beside the content on large screens and above it on smaller ones.
 */
export function NumberedSection({
  number,
  label,
  title,
  id,
  children,
  tone = "light",
  className,
}: NumberedSectionProps) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "border-t py-20 md:py-28 xl:py-32",
        tone === "dark" ? "border-ivory/10" : "border-ink/10",
        tones[tone],
        className,
      )}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className={cn("eyebrow flex items-center gap-3", tone === "dark" ? "text-brass" : "text-brass-deep")}>
              <span className="tabular">{number}</span>
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
              <span>{label}</span>
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 id={headingId} className="text-display-3">
                {title}
              </h2>
            </Reveal>
            <div className="mt-10 md:mt-12">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
