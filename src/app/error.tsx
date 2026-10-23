"use client";

import { useEffect } from "react";

import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="pt-[calc(var(--header-height)+3rem)] pb-24 md:pt-[calc(var(--header-height)+5rem)] md:pb-32">
      <Container width="narrow">
        <Eyebrow className="text-brass-deep">Something went wrong</Eyebrow>
        <h1 className="mt-8 text-display-2">This page could not be displayed.</h1>
        <p className="mt-8 text-lead text-ink/75">
          We are sorry for the inconvenience. Please try again, or return to the homepage.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button onClick={reset} fullWidthOnMobile>
            Try again
          </Button>
          <ButtonLink href="/" variant="outline" arrow={false} fullWidthOnMobile>
            Return to the Firm
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
