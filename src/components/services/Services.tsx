import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { PlaceholderImage } from "@/design-system/ui/PlaceholderImage";
import {
  ArrowLeftIcon,
  BotoxIcon,
  FaceRejuvenationIcon,
  FillerIcon,
  LaserIcon,
  MesoPrpIcon
} from "@/design-system/icons";

const ICONS = [
  FaceRejuvenationIcon,
  FillerIcon,
  BotoxIcon,
  LaserIcon,
  MesoPrpIcon
] as const;

const KEYS = ["rejuvenation", "filler", "botox", "laser", "meso"] as const;

export async function Services() {
  const t = await getTranslations("Services");

  return (
    <section
      id="services"
      className="relative bg-cream py-20 sm:py-28"
      aria-labelledby="services-title"
    >
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-eyebrow">
            <span className="h-px w-6 bg-eyebrow/50" />
            {t("eyebrow")}
            <span className="h-px w-6 bg-eyebrow/50" />
          </p>
          <h2
            id="services-title"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {t("title")}
          </h2>
        </header>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          role="list"
        >
          {KEYS.map((key, idx) => {
            const Icon = ICONS[idx];
            return (
              <li
                key={key}
                className="group flex flex-col rounded-2xl bg-surface p-3 shadow-xs ring-1 ring-line/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <PlaceholderImage
                  tone="soft"
                  kind="service"
                  aspect="aspect-[5/4]"
                  label={t(`items.${key}.title`)}
                  className="mb-4"
                />
                <div className="flex items-start justify-between gap-3 px-1">
                  <h3 className="text-base font-semibold text-ink">
                    {t(`items.${key}.title`)}
                  </h3>
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream-soft text-gold-deep ring-1 ring-line/50 transition group-hover:bg-gold group-hover:text-surface group-hover:ring-gold"
                    aria-hidden
                  >
                    <Icon size={18} />
                  </span>
                </div>
                <p className="mt-2 px-1 text-sm leading-6 text-body">
                  {t(`items.${key}.description`)}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 px-1 text-sm font-medium text-gold-deep transition hover:text-gold"
                >
                  <span>{t("viewAll").split(" ").slice(0, 2).join(" ")}</span>
                  <ArrowLeftIcon size={14} />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button variant="ghost" size="lg">
            {t("viewAll")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
