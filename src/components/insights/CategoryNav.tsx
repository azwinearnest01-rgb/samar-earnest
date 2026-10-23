import Link from "next/link";

import { insightCategories } from "@/content/insights";
import { cn } from "@/lib/cn";

/** Links to each journal subject; the current one is marked. */
export function CategoryNav({ current }: { current?: string }) {
  return (
    <nav aria-label="Subjects">
      <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem]">
        <li>
          <Link
            href="/insights"
            aria-current={current ? undefined : "page"}
            className={cn("link-underline", !current && "text-forest")}
          >
            All
          </Link>
        </li>
        {insightCategories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/insights/category/${category.slug}`}
              aria-current={current === category.slug ? "page" : undefined}
              className={cn("link-underline", current === category.slug && "text-forest")}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
