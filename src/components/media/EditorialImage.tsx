"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import { Seal } from "@/components/brand/Seal";
import { getImage, type ImageKey } from "@/content/images";
import { cn } from "@/lib/cn";

type EditorialImageProps = {
  image: ImageKey;
  /** Responsive `sizes` attribute — describe the rendered width. */
  sizes: string;
  /** Aspect-ratio utility for the frame, e.g. "aspect-[4/5]". Omit when the parent sizes the frame. */
  ratio?: string;
  className?: string;
  imageClassName?: string;
  /** Load eagerly with high fetch priority (above-the-fold imagery only). */
  priority?: boolean;
  /** Subtle vertical drift on scroll. Disabled under reduced motion. */
  parallax?: boolean;
  /** A Forest panel lifts away to reveal the image on first paint. */
  unveil?: boolean;
  /** Override the registry alt text; pass "" for purely decorative use. */
  alt?: string;
  caption?: string;
  /** Darken the image slightly for legibility on dark sections. */
  tint?: boolean;
};

/**
 * The single image component used across the site. Images are referenced by
 * registry key (src/content/images.ts), so commissioned photography can
 * replace placeholders without touching layouts. Falls back to a branded
 * panel if the image cannot load.
 */
export function EditorialImage({
  image,
  sizes,
  ratio,
  className,
  imageClassName,
  priority,
  parallax,
  unveil,
  alt,
  caption,
  tint,
}: EditorialImageProps) {
  const entry = getImage(image);
  const frameRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();
  const drift = parallax && !reduceMotion;

  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const altText = alt ?? entry.alt;

  const frame = (
    <div ref={frameRef} className={cn("relative overflow-hidden bg-forest", ratio, !caption && className)}>
      {failed ? (
        <div className="theme-dark absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <Seal className="h-24 w-auto text-brass/70" />
          {altText ? <span className="sr-only">{altText}</span> : null}
        </div>
      ) : (
        <m.div className="absolute inset-0" style={drift ? { y, scale: 1.12 } : undefined}>
          <Image
            src={entry.src}
            alt={altText}
            fill
            sizes={sizes}
            placeholder="blur"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className={cn("object-cover", imageClassName)}
            onError={() => setFailed(true)}
          />
        </m.div>
      )}
      {tint ? <div aria-hidden="true" className="absolute inset-0 bg-forest/25" /> : null}
      {unveil ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 origin-top animate-unveil bg-forest [animation-delay:150ms]"
        />
      ) : null}
    </div>
  );

  if (!caption) return frame;

  return (
    <figure className={className}>
      {frame}
      <figcaption className="eyebrow mt-4 flex items-center gap-3 text-[0.6875rem] opacity-70">
        <span aria-hidden="true" className="h-px w-6 bg-current" />
        {caption}
      </figcaption>
    </figure>
  );
}
