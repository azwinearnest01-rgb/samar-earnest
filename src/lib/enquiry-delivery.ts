import "server-only";

import { type Enquiry, getEnquiryAreaLabel } from "./enquiry";

/**
 * Enquiry delivery — PRODUCTION FORM ENDPOINT ATTACHES HERE.
 *
 * Two transports are supported out of the box, chosen by environment
 * variables (see .env.example):
 *
 * 1. ENQUIRY_WEBHOOK_URL — the enquiry is POSTed as JSON to this URL
 *    (e.g. a CRM inbound webhook, Zapier/Make, or your own service).
 *    Optional ENQUIRY_WEBHOOK_SECRET is sent as a Bearer token.
 * 2. RESEND_API_KEY + ENQUIRY_TO_EMAIL + ENQUIRY_FROM_EMAIL — the enquiry is
 *    emailed via the Resend HTTP API (no SDK dependency).
 *
 * If neither is configured, delivery reports "not_configured" and the visitor
 * is told plainly that the enquiry was not sent. It never pretends otherwise.
 */

export type DeliveryResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

type Meta = { receivedAt: string; userAgent: string | null };

export function isDeliveryConfigured(): boolean {
  return Boolean(
    process.env.ENQUIRY_WEBHOOK_URL ||
    (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL && process.env.ENQUIRY_FROM_EMAIL),
  );
}

function plainText(enquiry: Enquiry, meta: Meta): string {
  return [
    `Name: ${enquiry.name}`,
    `Business: ${enquiry.business}`,
    `Email: ${enquiry.email}`,
    `Website: ${enquiry.website || "—"}`,
    `Area requiring attention: ${getEnquiryAreaLabel(enquiry.area)}`,
    "",
    enquiry.message,
    "",
    `Received: ${meta.receivedAt}`,
  ].join("\n");
}

async function sendWebhook(url: string, enquiry: Enquiry, meta: Meta): Promise<boolean> {
  const secret = process.env.ENQUIRY_WEBHOOK_SECRET;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
    },
    body: JSON.stringify({
      source: "samar-earnest-website",
      enquiry: { ...enquiry, areaLabel: getEnquiryAreaLabel(enquiry.area) },
      meta,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  return response.ok;
}

async function sendResend(enquiry: Enquiry, meta: Meta): Promise<boolean> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL,
      to: [process.env.ENQUIRY_TO_EMAIL],
      reply_to: enquiry.email,
      subject: `Enquiry: ${enquiry.business} — ${getEnquiryAreaLabel(enquiry.area)}`,
      text: plainText(enquiry, meta),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  return response.ok;
}

export async function deliverEnquiry(enquiry: Enquiry, meta: Meta): Promise<DeliveryResult> {
  if (!isDeliveryConfigured()) return { ok: false, reason: "not_configured" };

  try {
    const webhook = process.env.ENQUIRY_WEBHOOK_URL;
    const delivered = webhook ? await sendWebhook(webhook, enquiry, meta) : await sendResend(enquiry, meta);
    return delivered ? { ok: true } : { ok: false, reason: "failed" };
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return { ok: false, reason: "failed" };
  }
}
