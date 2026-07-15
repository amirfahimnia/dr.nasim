import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { CheckIcon } from "@/design-system/icons";

type StatItem = { value: string; label: string };

export async function About() {
  const t = await getTranslations("About");
  const features = t.raw("features") as string[];
  const stats = t.raw("stats.items") as StatItem[];

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-cream-soft py-20 pb-12 sm:py-24 sm:pb-16 lg:py-28 lg:pb-32"
      aria-labelledby="about-title"
    >
      {/* === Section backdrop === */}
      {/* Full-bleed portrait — `-z-10` keeps it below in-flow inside the section's `isolate`. */}
      <Image
        src="/images/dr-nasim-about-bg.jpg"
        alt={t("imageAlt")}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      {/* Bottom ink wash adds premium depth and contrast for the stats card. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-[5] h-1/2 bg-gradient-to-t from-ink/40 via-ink/10 to-transparent"
      />

      {/* === Foreground: 12-col grid, text on visual LEFT (RTL) + stats on visual RIGHT (RTL) ===
          `col-start-7` places the text column on the visual LEFT in RTL (right in LTR).
          `col-start-1` places the stats card on the visual RIGHT in RTL (left in LTR).
          `lg:items-end` aligns the stats card's bottom edge to the text panel's bottom edge,
          producing the side-by-side "align with the text" composition. */}
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-x-10 xl:gap-x-14">
          {/* TEXT — visual LEFT in RTL. Own cream/glass backdrop so it stays
              readable wherever the grid column lands (LTR or RTL). */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-3xl bg-cream/85 p-6 shadow-xl ring-1 ring-line/25 backdrop-blur supports-[backdrop-filter]:bg-cream/70 sm:p-8 lg:p-10">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-eyebrow">
                <span className="h-px w-6 bg-eyebrow/50" />
                {t("eyebrow")}
              </p>
              <h2
                id="about-title"
                className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
              >
                {t("title")}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-body sm:text-lg">
                {t("description")}
              </p>

              <ul className="mt-8 grid max-w-xl gap-3" role="list">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-base text-ink"
                  >
                    <span
                      className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep"
                      aria-hidden
                    >
                      <CheckIcon size={12} />
                    </span>
                    <span className="leading-7">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button variant="gold" size="lg">
                  {t("cta")}
                </Button>
              </div>
            </div>
          </div>

          {/* STATS CARD — visual RIGHT in RTL, bottom-aligned via grid `items-end`. */}
          <div className="lg:col-span-6 lg:col-start-1">
            <ul
              dir="ltr"
              aria-label={t("stats.heading")}
              role="list"
              className="grid grid-cols-2 gap-y-6 overflow-hidden rounded-2xl bg-cream/95 px-6 py-7 shadow-xl ring-1 ring-line/40 backdrop-blur supports-[backdrop-filter]:bg-cream/85 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-line/40 sm:px-8 sm:py-8"
            >
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1 px-4 text-center sm:py-0"
                >
                  <span className="text-3xl font-semibold leading-none tracking-tight text-ink sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-xs leading-tight text-muted sm:text-sm">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
