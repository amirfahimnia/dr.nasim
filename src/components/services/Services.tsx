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
      className="services"
      aria-labelledby="services-title"
    >
      <Container>
        <header className="services__header">
          <p className="services__eyebrow">
            <span className="services__eyebrow-rule" />
            {t("eyebrow")}
            <span className="services__eyebrow-rule" />
          </p>
          <h2 id="services-title" className="services__title">
            {t("title")}
          </h2>
        </header>

        <ul className="services__list" role="list">
          {KEYS.map((key, idx) => {
            const Icon = ICONS[idx];
            return (
              <li key={key} className="services__card">
                <PlaceholderImage
                  tone="soft"
                  kind="service"
                  ratio="5/4"
                  label={t(`items.${key}.title`)}
                />
                <div className="services__card-head">
                  <h3 className="services__card-title">
                    {t(`items.${key}.title`)}
                  </h3>
                  <span className="services__card-icon" aria-hidden>
                    <Icon size={18} />
                  </span>
                </div>
                <p className="services__card-description">
                  {t(`items.${key}.description`)}
                </p>
                <a href="#contact" className="services__card-link">
                  <span>
                    {t("viewAll").split(" ").slice(0, 2).join(" ")}
                  </span>
                  <ArrowLeftIcon size={14} />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="services__cta-row">
          <Button variant="ghost" size="lg">
            {t("viewAll")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
