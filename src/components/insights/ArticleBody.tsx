import { type ArticleBlock, headingId } from "@/content/insights";

import { InlineText } from "./InlineText";

const dropCap =
  "first-letter:float-left first-letter:mt-[0.08em] first-letter:mr-2 first-letter:font-display first-letter:text-[4.4em] first-letter:leading-[0.8] first-letter:text-forest";

/** Renders structured article blocks with the journal's long-form typography. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="prose-estate">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className={index === 0 ? dropCap : undefined}>
                <InlineText text={block.text} />
              </p>
            );
          case "heading":
            return (
              <h2 key={index} id={headingId(block.text)} className="scroll-mt-[calc(var(--header-height)+2rem)]">
                {block.text}
              </h2>
            );
          case "subheading":
            return <h3 key={index}>{block.text}</h3>;
          case "quote":
            return (
              <blockquote key={index}>
                <p>
                  <InlineText text={block.text} />
                </p>
              </blockquote>
            );
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "steps":
            return (
              <ol key={index} className="list-none space-y-4 p-0">
                {block.items.map((item, step) => (
                  <li key={item} className="grid grid-cols-[2.25rem_1fr] gap-x-3">
                    <span aria-hidden="true" className="pt-0.5 font-serif text-lg italic text-brass-deep">
                      {step + 1}.
                    </span>
                    <span>
                      <InlineText text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={index}
                aria-label={block.title}
                className="texture-paper border-l-2 border-brass bg-paper px-6 py-5 text-[1rem] leading-relaxed"
              >
                <p className="eyebrow text-[0.6875rem] text-brass-deep">{block.title}</p>
                <p className="mt-2">
                  <InlineText text={block.text} />
                </p>
              </aside>
            );
        }
      })}
    </div>
  );
}
