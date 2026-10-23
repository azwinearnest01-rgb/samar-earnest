import Image from "next/image";

import { Seal } from "@/components/brand/Seal";
import type { TeamMember } from "@/content/team";

/**
 * Founder profile. Until an approved biography and portrait are supplied in
 * src/content/team.ts, a composed placeholder is shown — never invented copy.
 */
export function FounderProfile({ member }: { member: TeamMember }) {
  const hasBiography = member.biography.length > 0;

  return (
    <article
      aria-labelledby={`${member.slug}-name`}
      className="grid gap-8 sm:grid-cols-[minmax(0,14rem)_1fr] lg:grid-cols-1 xl:grid-cols-[minmax(0,15rem)_1fr]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-forest">
        {member.portrait ? (
          <Image
            src={member.portrait.src}
            alt={member.portrait.alt}
            fill
            sizes="(min-width: 640px) 15rem, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        ) : (
          <div className="theme-dark absolute inset-0 flex flex-col items-center justify-center">
            <Seal className="absolute inset-0 m-auto h-[85%] w-auto text-ivory/[0.06]" />
            <span aria-hidden="true" className="relative font-display text-6xl tracking-[0.08em] text-ivory/90">
              {member.initials}
            </span>
            <span className="eyebrow relative mt-4 text-[0.625rem] text-brass">Portrait forthcoming</span>
          </div>
        )}
      </div>

      <div>
        <p className="eyebrow text-[0.6875rem] text-brass-deep">{member.role}</p>
        <h3 id={`${member.slug}-name`} className="mt-3 text-display-4">
          {member.name}
        </h3>

        {hasBiography ? (
          <div className="mt-6 space-y-4 text-ink/80">
            {member.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="mt-6 max-w-md text-ink/70">
            A biography of {member.name.split(" ")[0]} will be published here in due course.
          </p>
        )}

        {member.focus.length > 0 ? (
          <dl className="mt-8 border-t border-ink/15 pt-5">
            <dt className="eyebrow text-[0.6875rem] text-stone-deep">Focus within the firm</dt>
            <dd className="mt-2">{member.focus.join(" · ")}</dd>
          </dl>
        ) : null}
      </div>
    </article>
  );
}
