import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { CheckIcon, ArrowLeftIcon } from "@/design-system/icons";

type StatItem = { value: string; label: string };

export async function About() {
  const t = await getTranslations("About");
  const locale = (await getLocale()) as Locale;
  const features = (t.raw("features") as string[]) ?? [];
  const stats = (t.raw("stats.items") as StatItem[]) ?? [];

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <Container>
        <div className="about__grid">
          {/* Portrait — framed with an offset gold rule */}
          <div className="about__media">
            <span aria-hidden className="about__media-frame" />
            <div className="about__media-inner">
              <Image
                src="/images/dr-nasim-portrait.webp"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
                className="about__media-img"
              />
            </div>
            <div className="about__license-card">
              <p className="about__license-label">
                {clinic.doctor.license[locale]}
              </p>
              <p className="about__license-name">{t("title")}</p>
            </div>
          </div>

          {/* Copy */}
          <div className="about__text">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 id="about-title" className="about__title">
              {t("title")}
            </h2>
            <p className="about__lead">{t("lead")}</p>
            <p className="about__description">{t("description")}</p>

            <ul className="about__features" role="list">
              {features.map((feature) => (
                <li key={feature} className="about__feature">
                  <span aria-hidden className="about__feature-check">
                    <CheckIcon size={12} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="about__cta">
              <ButtonLink
                href={clinic.socials.whatsapp}
                external
                variant="gold"
                size="lg"
              >
                {t("cta")}
                <ArrowLeftIcon size={16} />
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Practice figures */}
        <dl className="about__stats" aria-label={t("stats.heading")}>
          {stats.map((stat) => (
            <div key={stat.label} className="about__stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
