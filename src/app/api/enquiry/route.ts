import { NextResponse } from "next/server";

import {
  type EnquiryResponse,
  HONEYPOT_FIELD,
  STARTED_AT_FIELD,
  hasErrors,
  isEnquiryArea,
  normaliseEnquiry,
  validateEnquiry,
} from "@/lib/enquiry";
import { deliverEnquiry } from "@/lib/enquiry-delivery";
import { isRateLimited, looksAutomated, verifyChallenge } from "@/lib/spam";

const MAX_BODY_BYTES = 20_000;

function reply(body: EnquiryResponse, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return reply({ ok: false, code: "bad_request", message: "The enquiry is too large to send." }, 413);
  }

  let payload: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid body");
    payload = parsed as Record<string, unknown>;
  } catch {
    return reply({ ok: false, code: "bad_request", message: "The enquiry could not be read. Please try again." }, 400);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return reply(
      {
        ok: false,
        code: "rate_limited",
        message:
          "Several enquiries have been sent from this connection recently. Please wait a few minutes and try again.",
      },
      429,
    );
  }

  if (
    looksAutomated(payload[HONEYPOT_FIELD], payload[STARTED_AT_FIELD]) ||
    !(await verifyChallenge(payload.challenge))
  ) {
    return reply(
      {
        ok: false,
        code: "spam",
        message: "The enquiry could not be accepted. Please try again, or write to us directly.",
      },
      400,
    );
  }

  const fields = normaliseEnquiry(payload);
  const errors = validateEnquiry(fields);
  if (hasErrors(errors) || !isEnquiryArea(fields.area)) {
    return reply({ ok: false, code: "invalid", message: "Please review the highlighted details.", errors }, 422);
  }

  const result = await deliverEnquiry(
    { ...fields, area: fields.area },
    { receivedAt: new Date().toISOString(), userAgent: request.headers.get("user-agent") },
  );

  if (!result.ok) {
    if (result.reason === "not_configured") {
      return reply(
        {
          ok: false,
          code: "not_configured",
          message: "Online enquiries are not yet connected on this website, so your message has not been sent.",
        },
        503,
      );
    }
    return reply(
      {
        ok: false,
        code: "delivery_failed",
        message: "Something went wrong while sending your enquiry. Please try again shortly.",
      },
      502,
    );
  }

  return reply({ ok: true }, 200);
}
