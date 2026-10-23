import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type EnquiryBandProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tone?: "light" | "dark";
};

/** Closing call to enquire, reused at the foot of most pages. */
export function EnquiryBand({
  eyebrow = "Enquiries",
  title = "Begin a conversation.",
  text = "Tell us about the business, what is working, and what requires attention.",
  ctaLabel = "Make an Enquiry",
  ctaHref = "/contact",
  tone = "light",
}: EnquiryBandProps) {
  const dark = tone === "dark";
  return (
    <section
      aria-labelledby="enquiry-band-title"
      className={cn("py-24 md:py-32", dark ? "theme-dark border-b border-ivory/10" : "texture-paper bg-paper")}
    >
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Eyebrow className={dark ? "text-brass" : "text-brass-deep"}>{eyebrow}</Eyebrow>
            <h2 id="enquiry-band-title" className="mt-8 text-display-2">
              {title}
            </h2>
            <p className={cn("mt-6 max-w-xl text-lead", dark ? "text-ivory/80" : "text-ink/75")}>{text}</p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <ButtonLink href={ctaHref} tone={tone} fullWidthOnMobile>
              {ctaLabel}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
