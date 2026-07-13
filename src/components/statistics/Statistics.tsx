import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";

interface Stat {
  value: string;
  label: string;
}

export async function Statistics() {
  const t = await getTranslations("Statistics");
  const items = t.raw("items") as Stat[];

  return (
    <section
      aria-label="Clinic statistics"
      className="relative bg-cream-soft py-16 sm:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-line/60" aria-hidden />
      <Container>
        <ul
          className="grid grid-cols-2 gap-y-10 sm:grid-cols-4"
          role="list"
        >
          {items.map((stat, idx) => (
            <li
              key={stat.label}
              className={[
                "relative flex flex-col items-center text-center",
                idx > 0 ? "sm:before:absolute sm:before:-end-px sm:before:top-1/4 sm:before:h-1/2 sm:before:w-px sm:before:bg-line/60 sm:before:content-['']"
                  : ""
              ].join(" ")}
            >
              <span className="text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl">
                {stat.value}
              </span>
              <span className="mt-3 text-sm text-body">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
