import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  sections: LegalSection[];
};

/**
 * Template for Privacy and Terms. Shows a prominent notice that the text is a
 * placeholder awaiting legal review — remove the role="note" block once the
 * final text has been approved by counsel.
 */
export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="pt-[calc(var(--header-height)+3rem)] pb-24 md:pt-[calc(var(--header-height)+5rem)] md:pb-32"
    >
      <Container width="narrow">
        <Eyebrow className="text-brass-deep">Legal</Eyebrow>
        <h1 id="page-title" className="mt-8 text-display-2">
          {title}
        </h1>

        <div role="note" className="mt-10 border-l-2 border-oxblood bg-oxblood/[0.05] p-5 text-sm text-ink/85">
          <p className="font-semibold text-oxblood">Draft — subject to legal review</p>
          <p className="mt-1.5">
            This page is a placeholder prepared for the website&rsquo;s launch. It has not yet been reviewed by a legal
            adviser and will be replaced with final text.
          </p>
        </div>

        <div className="prose-estate mt-14">
          {sections.map((section) => (
            <section key={section.heading} aria-label={section.heading}>
              <h2>{section.heading}</h2>
              <div className="mt-4 space-y-4">{section.body}</div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
