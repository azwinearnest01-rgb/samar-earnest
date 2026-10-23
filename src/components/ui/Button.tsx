import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

import { ArrowIcon } from "./ArrowIcon";

export type ButtonVariant = "solid" | "outline" | "text";
/** The surface the button sits on: "light" (Ivory) or "dark" (Forest). */
export type ButtonTone = "light" | "dark";

type StyleProps = {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  /** Show the trailing arrow (default true for solid/outline). */
  arrow?: boolean;
  fullWidthOnMobile?: boolean;
  className?: string;
};

const boxBase =
  "group relative isolate inline-flex min-h-12 items-center justify-center gap-4 overflow-hidden border px-6 py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ease-estate sm:px-7 disabled:cursor-not-allowed disabled:opacity-60";

const boxVariants: Record<ButtonTone, Record<Exclude<ButtonVariant, "text">, { base: string; sweep: string }>> = {
  light: {
    solid: {
      base: "border-forest bg-forest text-ivory hover:text-forest focus-visible:text-forest",
      sweep: "bg-ivory",
    },
    outline: {
      base: "border-ink/35 text-ink hover:border-forest hover:text-ivory focus-visible:text-ivory",
      sweep: "bg-forest",
    },
  },
  dark: {
    solid: {
      base: "border-ivory bg-ivory text-forest hover:text-ivory focus-visible:text-ivory",
      sweep: "bg-forest",
    },
    outline: {
      base: "border-ivory/40 text-ivory hover:border-ivory hover:text-forest focus-visible:text-forest",
      sweep: "bg-ivory",
    },
  },
};

const textVariant: Record<ButtonTone, string> = {
  light: "text-ink",
  dark: "text-ivory",
};

function classesFor({ variant = "solid", tone = "light", fullWidthOnMobile, className }: StyleProps) {
  if (variant === "text") {
    return cn(
      "group inline-flex min-h-11 items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em]",
      textVariant[tone],
      className,
    );
  }
  return cn(boxBase, boxVariants[tone][variant].base, fullWidthOnMobile && "w-full sm:w-auto", className);
}

function Inner({ children, variant = "solid", tone = "light", arrow }: StyleProps & { children: ReactNode }) {
  const showArrow = arrow ?? true;
  if (variant === "text") {
    return (
      <>
        <span className="link-underline group-hover:bg-[length:100%_1px]">{children}</span>
        {showArrow ? (
          <ArrowIcon className="transition-transform duration-500 ease-estate group-hover:translate-x-1.5" />
        ) : null}
      </>
    );
  }
  return (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-estate group-hover:scale-x-100 group-focus-visible:scale-x-100",
          boxVariants[tone][variant].sweep,
        )}
      />
      <span>{children}</span>
      {showArrow ? (
        <ArrowIcon className="transition-transform duration-500 ease-estate group-hover:translate-x-1" />
      ) : null}
    </>
  );
}

type ButtonLinkProps = StyleProps & Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & { children: ReactNode };

/** A link styled as a button. Use for navigation. */
export function ButtonLink({
  variant,
  tone,
  arrow,
  fullWidthOnMobile,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={classesFor({ variant, tone, fullWidthOnMobile, className })} {...props}>
      <Inner variant={variant} tone={tone} arrow={arrow}>
        {children}
      </Inner>
    </Link>
  );
}

type ButtonProps = StyleProps & Omit<ComponentPropsWithoutRef<"button">, "className"> & { children: ReactNode };

/** A native button. Use for actions (submit, toggle). */
export function Button({
  variant,
  tone,
  arrow,
  fullWidthOnMobile,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={classesFor({ variant, tone, fullWidthOnMobile, className })} {...props}>
      <Inner variant={variant} tone={tone} arrow={arrow}>
        {children}
      </Inner>
    </button>
  );
}
