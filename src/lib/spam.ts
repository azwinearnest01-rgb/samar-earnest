import "server-only";

import { MIN_FILL_TIME_MS } from "./enquiry";

/**
 * Spam prevention for the enquiry endpoint.
 *
 * Layers in place:
 * - Honeypot field (bots fill hidden inputs; people cannot see it).
 * - Minimum fill time (instant submissions are automated).
 * - Per-IP rate limit (in memory; per server instance).
 *
 * EXTENSION POINT: for stronger protection, add a challenge such as
 * Cloudflare Turnstile or hCaptcha — render its widget in EnquiryForm, send
 * its token with the request, and verify it in `verifyChallenge` below. For
 * multi-instance deployments, replace the in-memory limiter with a shared
 * store (e.g. Upstash Redis).
 */

export function looksAutomated(honeypot: unknown, startedAt: unknown, now = Date.now()): boolean {
  if (typeof honeypot === "string" && honeypot.trim() !== "") return true;
  if (typeof startedAt !== "number" || !Number.isFinite(startedAt) || startedAt <= 0) return true;
  return now - startedAt < MIN_FILL_TIME_MS;
}

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

/** Returns true when this key has exceeded the allowed submissions in the window. */
export function isRateLimited(key: string, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    // Prevent unbounded growth on long-lived instances.
    for (const [entryKey, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(entryKey);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

/** Placeholder for a third-party challenge. Returns true when no challenge is configured. */
export async function verifyChallenge(token: unknown): Promise<boolean> {
  void token;
  return true;
}
