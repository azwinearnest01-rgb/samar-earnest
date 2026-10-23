"use client";

import Link from "next/link";
import { type ChangeEvent, type FormEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import {
  type EnquiryErrors,
  type EnquiryField,
  type EnquiryFields,
  type EnquiryResponse,
  HONEYPOT_FIELD,
  STARTED_AT_FIELD,
  emptyEnquiry,
  enquiryAreas,
  enquiryFieldOrder,
  hasErrors,
  isEnquiryArea,
  normaliseEnquiry,
  validateEnquiry,
} from "@/lib/enquiry";

import { FieldShell, controlClasses, describedBy } from "./FormField";

type Status = "idle" | "submitting" | "success" | "error";

const noopSubscribe = () => () => {};

/** An area passed as ?area= (e.g. from a "Request an Audit" link), read without a Suspense boundary. */
function usePresetArea(): string {
  const search = useSyncExternalStore(
    noopSubscribe,
    () => window.location.search,
    () => "",
  );
  const area = new URLSearchParams(search).get("area");
  return isEnquiryArea(area) ? area : "";
}

const labels: Record<EnquiryField, string> = {
  name: "Name",
  business: "Business",
  email: "Email",
  website: "Website",
  area: "Area requiring attention",
  message: "Message",
};

const hints: Partial<Record<EnquiryField, string>> = {
  website: "If the business has one.",
  message: "What is working, and what requires attention?",
};

/**
 * The enquiry form. Validates on blur and on submit (with the same rules as
 * the server), manages focus for errors and outcomes, and reports exactly
 * what the server said — it never shows success unless the server confirms.
 */
export function EnquiryForm() {
  const [draft, setValues] = useState<EnquiryFields>(emptyEnquiry);
  const presetArea = usePresetArea();
  // Until the visitor chooses an area, fall back to the one in the URL.
  const values: EnquiryFields = draft.area ? draft : { ...draft, area: presetArea };
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<EnquiryField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const startedAt = useRef(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  // Record when the visitor began (used to detect automated submissions).
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") outcomeRef.current?.focus();
    if (status === "error") errorRef.current?.focus();
  }, [status]);

  const update =
    (field: EnquiryField) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const next = { ...values, [field]: event.target.value };
      setValues(next);
      if (touched[field] || showSummary) {
        const fieldError = validateEnquiry(normaliseEnquiry(next))[field];
        setErrors((previous) => ({ ...previous, [field]: fieldError }));
      }
    };

  const blur = (field: EnquiryField) => () => {
    setTouched((previous) => ({ ...previous, [field]: true }));
    const fieldError = validateEnquiry(normaliseEnquiry(values))[field];
    setErrors((previous) => ({ ...previous, [field]: fieldError }));
  };

  const fieldProps = (field: EnquiryField) => ({
    id: `enquiry-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    onBlur: blur(field),
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": describedBy(`enquiry-${field}`, hints[field], errors[field]),
    className: controlClasses,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const normalised = normaliseEnquiry(values);
    const validation = validateEnquiry(normalised);
    setErrors(validation);
    if (hasErrors(validation)) {
      setShowSummary(true);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setShowSummary(false);

    const honeypot = new FormData(event.currentTarget).get(HONEYPOT_FIELD);
    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...normalised,
          [HONEYPOT_FIELD]: typeof honeypot === "string" ? honeypot : "",
          [STARTED_AT_FIELD]: startedAt.current,
        }),
      });
      const result = (await response.json().catch(() => null)) as EnquiryResponse | null;

      if (response.ok && result?.ok) {
        setStatus("success");
        return;
      }
      if (result && !result.ok && result.errors && hasErrors(result.errors)) {
        setErrors(result.errors);
        setShowSummary(true);
        setStatus("idle");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }
      setServerMessage(
        result && !result.ok ? result.message : "We could not send your enquiry. Please try again in a moment.",
      );
      setStatus("error");
    } catch {
      setServerMessage("We could not reach our server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-forest/25 bg-paper p-8 sm:p-12">
        <p className="eyebrow text-[0.6875rem] text-brass-deep">Enquiry received</p>
        <h2 ref={outcomeRef} tabIndex={-1} className="mt-5 text-display-4 outline-none">
          Thank you. Your enquiry has been received by Samar &amp; Earnest.
        </h2>
        <p className="mt-5 text-ink/75">We will review it and reply to {values.email.trim()}.</p>
      </div>
    );
  }

  const summaryFields = enquiryFieldOrder.filter((field) => errors[field]);
  const submitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} aria-describedby="enquiry-form-note" className="relative">
      {showSummary && summaryFields.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-10 border-l-2 border-oxblood bg-oxblood/[0.06] p-5 outline-none"
        >
          <p className="font-semibold text-oxblood">
            Please review {summaryFields.length === 1 ? "one detail" : `${summaryFields.length} details`} before
            sending:
          </p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {summaryFields.map((field) => (
              <li key={field}>
                <a href={`#enquiry-${field}`} className="link-prose text-oxblood">
                  {labels[field]} — {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mb-10 border-l-2 border-oxblood bg-oxblood/[0.06] p-5 outline-none"
        >
          <p className="font-semibold text-oxblood">Your enquiry has not been sent.</p>
          <p className="mt-2 text-sm text-ink/80">{serverMessage}</p>
          <p className="mt-2 text-sm text-ink/80">
            You may also write to us at{" "}
            <a href={`mailto:${siteConfig.email.general}`} className="link-prose">
              {siteConfig.email.general}
            </a>
            .
          </p>
        </div>
      ) : null}

      <fieldset disabled={submitting} className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
        <legend className="sr-only">Your enquiry</legend>

        <FieldShell id="enquiry-name" label={labels.name} required error={errors.name}>
          <input type="text" autoComplete="name" required maxLength={120} {...fieldProps("name")} />
        </FieldShell>

        <FieldShell id="enquiry-business" label={labels.business} required error={errors.business}>
          <input type="text" autoComplete="organization" required maxLength={160} {...fieldProps("business")} />
        </FieldShell>

        <FieldShell id="enquiry-email" label={labels.email} required error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            {...fieldProps("email")}
          />
        </FieldShell>

        <FieldShell id="enquiry-website" label={labels.website} hint={hints.website} error={errors.website}>
          <input
            type="text"
            autoComplete="url"
            inputMode="url"
            maxLength={300}
            placeholder="business.com"
            {...fieldProps("website")}
          />
        </FieldShell>

        <FieldShell id="enquiry-area" label={labels.area} required error={errors.area} className="sm:col-span-2">
          <div className="relative">
            <select required {...fieldProps("area")} className={`${controlClasses} appearance-none pr-10`}>
              <option value="" disabled>
                Please choose
              </option>
              {enquiryAreas.map((area) => (
                <option key={area.value} value={area.value}>
                  {area.label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              viewBox="0 0 12 8"
              className="pointer-events-none absolute top-1/2 right-1 h-2 w-3 -translate-y-1/2 text-ink/70"
            >
              <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </FieldShell>

        <FieldShell
          id="enquiry-message"
          label={labels.message}
          required
          hint={hints.message}
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            rows={6}
            required
            maxLength={5000}
            {...fieldProps("message")}
            className={`${controlClasses} min-h-40 resize-y`}
          />
        </FieldShell>

        {/* Honeypot: hidden from people and assistive technology; bots tend to fill it. */}
        <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
          <label htmlFor={HONEYPOT_FIELD}>Fax number</label>
          <input
            id={HONEYPOT_FIELD}
            name={HONEYPOT_FIELD}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
      </fieldset>

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p id="enquiry-form-note" className="max-w-sm text-sm text-ink/70">
          Your details are used only to respond to this enquiry. See our{" "}
          <Link href="/privacy" className="link-prose">
            Privacy notice
          </Link>
          .
        </p>
        <Button type="submit" disabled={submitting} aria-busy={submitting} fullWidthOnMobile>
          {submitting ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
