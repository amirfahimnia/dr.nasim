import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { services } from "@/content/services";
import type { Locale } from "@/content/clinic";
import { ArrowLeftIcon, ArrowIcon } from "@/design-system/icons";

export async function Services() {
  const t = await getTranslations("Services");
  const locale = (await getLocale()) as Locale;

  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-title"
    >
      <Container>
        <header className="services__header">
          <div className="services__header-text">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2
              id="services-title"
              className="services__title preserve-lines"
            >
              {t("title")}
            </h2>
          </div>

          <div className="services__header-aside">
            <p className="services__description">{t("description")}</p>
            <ButtonLink
              href={`/${locale}/services`}
              variant="ghost"
              size="md"
              className="services__view-all"
            >
              {t("viewAll")}
              <ArrowLeftIcon size={15} />
            </ButtonLink>
          </div>
        </header>

        <ul className="services__grid" role="list">
          {services.map((service) => {
            const copy = service.copy[locale];
            return (
              <li key={service.slug} className="services__card">
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="services__card-link"
                >
                  <span className="services__card-media">
                    <Image
                      src={service.image}
                      alt={copy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="services__card-img"
                    />
                    <span className="services__card-scrim" aria-hidden />
                    <span className="services__card-category">
                      {copy.category}
                    </span>
                    <span
                      aria-hidden
                      className="services__card-arrow services__card-arrow--light"
                    >
                      <ArrowIcon size={16} />
                    </span>
                  </span>

                  <span className="services__card-body">
                    <span className="services__card-title">
                      {copy.title}
                    </span>
                    <span className="services__card-tagline">
                      {copy.tagline}
                    </span>
                    <span className="services__card-more">
                      {t("explore")}
                      <ArrowLeftIcon size={14} />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
