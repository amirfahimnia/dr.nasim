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
      className="relative bg-cream-soft py-20 sm:py-28 lg:pb-36"
      aria-labelledby="about-title"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Text column — pinned to col-1 (visual left) in BOTH LTR and RTL */}
          <div className="lg:col-start-2 lg:row-start-1 lg:pt-2">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-eyebrow">
              <span className="h-px w-6 bg-eyebrow/50" />
              {t("eyebrow")}
            </p>
            <h2
              id="about-title"
              className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
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

          {/* Image column — pinned to col-2 (visual right) in BOTH LTR and RTL */}
          <div className="relative lg:col-start-1 lg:row-start-1">
            {/* Soft warm halo behind the portrait for premium feel */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold/20 via-cream-light to-eyebrow/15 blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg ring-1 ring-line/50">
              <Image
                src="/images/dr-nasim-about-bg.jpg"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Floating horizontal stats card — pulled up to overlap the bottom of both columns */}
        <div className="relative z-10 -mt-12 sm:-mt-14 lg:-mt-20">
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
