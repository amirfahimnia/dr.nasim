import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { clinic } from "@/content/clinic";
import {
  ArrowLeftIcon,
  AwardIcon,
  CalendarIcon,
  ShieldIcon,
  SparkleIcon
} from "@/design-system/icons";

const BADGE_ICONS = [AwardIcon, ShieldIcon, SparkleIcon] as const;

type StatItem = { value: string; label: string };

export async function Hero() {
  const t = await getTranslations("Hero");
  const tTrust = await getTranslations("Trust");
  const locale = await getLocale();

  const badges = (t.raw("certifications") as string[]) ?? [];
  const stats = (tTrust.raw("items") as StatItem[]) ?? [];
  const patients = stats[1];
  const experience = stats[0];

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Full-bleed portrait, darkened toward the copy side */}
      <div className="hero__media">
        <Image
          src="/images/dr-nasim-hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__media-img"
        />
      </div>
      <div aria-hidden className="hero__scrim" />
      <div aria-hidden className="hero__grain" />

      <Container>
        <div className="hero__inner">
          <div className="hero__content animate-fade-up">
            <p className="hero__eyebrow">
              <span aria-hidden className="hero__eyebrow-dot" />
              {t("eyebrow")}
            </p>

            <h1 id="hero-title" className="hero__title preserve-lines">
              {t("title")}
            </h1>

            <p className="hero__description">{t("description")}</p>

            <div className="hero__actions">
              <ButtonLink
                href={`/${locale}/appointment`}
                variant="gold"
                size="lg"
              >
                <CalendarIcon size={17} />
                {t("primaryAction")}
              </ButtonLink>
              <ButtonLink
                href={`/${locale}/treatments`}
                variant="outline-light-solid"
                size="lg"
              >
                {t("secondaryAction")}
                <ArrowLeftIcon size={16} />
              </ButtonLink>
            </div>

            <ul className="hero__badges" role="list">
              {badges.map((badge, idx) => {
                const Icon = BADGE_ICONS[idx % BADGE_ICONS.length];
                return (
                  <li key={badge} className="hero__badge">
                    <Icon size={15} />
                    <span>{badge}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>

      {/* Practice facts — sit on the bottom edge of the photograph */}
      <div className="hero__rail">
        <Container>
          <dl className="hero__rail-list">
            <div className="hero__rail-item">
              <dt>{patients?.label}</dt>
              <dd>{patients?.value}</dd>
            </div>
            <div className="hero__rail-item">
              <dt>{experience?.label}</dt>
              <dd>{experience?.value}</dd>
            </div>
            <div className="hero__rail-item">
              <dt>{clinic.doctor.title[locale as "fa" | "en" | "de"]}</dt>
              <dd aria-hidden className="hero__rail-mark">
                DN
              </dd>
            </div>
          </dl>
        </Container>
      </div>
    </section>
  );
}
