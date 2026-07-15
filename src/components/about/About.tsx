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
      className="relative isolate overflow-hidden bg-cream-soft py-20 sm:py-24 lg:py-32 lg:pb-44"
      aria-labelledby="about-title"
    >
      {/* === Background layers (all stacking BELOW in-flow content) === */}

      {/* Full-bleed background image — `-z-10` keeps it behind the cream-overlay text region */}
      <Image
        src="/images/dr-nasim-about-bg.jpg"
        alt={t("imageAlt")}
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {/* Cream-soft overlay — solid on the LEFT ~55%, fades to the image on the right.
          NOTE: rgb(251,247,242) = --color-cream-soft (#fbf7f2). Tailwind v4
          arbitrary-value `bg-[…]` can't read CSS variables in rgba stops, so
          the literal is hard-coded; track any token rename. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-cream-soft)_0%,rgba(251,247,242,0.95)_30%,rgba(251,247,242,0.85)_45%,rgba(251,247,242,0)_70%)]"
      />

      {/* Bottom ink wash for premium depth and stats-card contrast */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/35 via-ink/10 to-transparent"
      />

      {/* === Foreground content === */}

      <Container>
        {/* Text — pinned to the LEFT on lg+ so it sits over the cream overlay region */}
        <div className="grid lg:grid-cols-12 lg:gap-12">
          <div className="relative lg:col-span-7 lg:col-start-1 lg:py-2">
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

          {/* Empty right column — balances the cream panel on lg+ */}
          <div
            aria-hidden
            className="hidden lg:col-start-8 lg:col-span-5 lg:block"
          />
        </div>
      </Container>

      {/* Floating stats card — uses `relative z-10` to clear all background
          layers and the section's `isolate` stacking context. */}
      <Container>
        <div className="relative z-10 -mt-12 sm:-mt-16 lg:-mt-20">
          <ul
            dir="ltr"
            aria-label={t("stats.heading")}
            className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 overflow-hidden rounded-2xl bg-cream/95 px-6 py-8 shadow-xl ring-1 ring-line/40 backdrop-blur supports-[backdrop-filter]:bg-cream/85 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-line/40 sm:px-8"
            role="list"
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
      </Container>
    </section>
  );
}
