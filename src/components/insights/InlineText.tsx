import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

/**
 * Renders article text with two inline conventions:
 * [link text](/path) — internal links use the router; others open externally.
 * **bold** — strong emphasis.
 */
export function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    const [, label, href, bold] = match;
    if (bold) {
      parts.push(
        <strong key={index} className="font-semibold text-ink">
          {bold}
        </strong>,
      );
    } else if (href.startsWith("/")) {
      parts.push(
        <Link key={index} href={href} className="link-prose text-forest">
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a key={index} href={href} className="link-prose text-forest" target="_blank" rel="noopener noreferrer">
          {label}
        </a>,
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
