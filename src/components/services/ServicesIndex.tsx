import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/design-system/ui/Container";
import { PageHero } from "@/components/page-hero/PageHero";
import { services } from "@/content/services";
import type { Locale } from "@/content/clinic";
import { ArrowIcon } from "@/design-system/icons";

export async function ServicesIndex() {
  const t = await getTranslations("ServicesPage");
  const tNav = await getTranslations("Navigation");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        lead={t("lead")}
        breadcrumbs={[
          { label: tNav("items.home"), href: `/${locale}` },
          { label: t("eyebrow") }
        ]}
      />

      <section className="services-index" aria-labelledby="services-index-title">
        <Container>
          <h2 id="services-index-title" className="services-index__title">
            {t("title")}
          </h2>

          <ul className="services-index__grid" role="list">
            {services.map((service, idx) => {
              const copy = service.copy[locale];
              const sessions = copy.facts[0];
              const downtime = copy.facts[2];

              return (
                <li key={service.slug} className="services-index__item">
                  <Link
                    href={`/${locale}/treatments/${service.slug}`}
                    className="services-index__card"
                  >
                    <span className="services-index__media">
                      <Image
                        src={service.image}
                        alt={copy.title}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1099px) 50vw, 33vw"
                        className="services-index__img"
                      />
                      <span
                        aria-hidden
                        className="services-index__scrim"
                      />
                      <span className="services-index__index">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="services-index__category">
                        {copy.category}
                      </span>
                    </span>

                    <span className="services-index__body">
                      <span className="services-index__heading">
                        <span className="services-index__name">
                          {copy.title}
                        </span>
                        <span
                          aria-hidden
                          className="services-index__arrow"
                        >
                          <ArrowIcon size={16} />
                        </span>
                      </span>

                      <span className="services-index__tagline">
                        {copy.tagline}
                      </span>

                      <span className="services-index__facts">
                        {sessions ? (
                          <span className="services-index__fact">
                            <span className="services-index__fact-label">
                              {sessions.label}
                            </span>
                            <span className="services-index__fact-value">
                              {sessions.value}
                            </span>
                          </span>
                        ) : null}
                        {downtime ? (
                          <span className="services-index__fact">
                            <span className="services-index__fact-label">
                              {downtime.label}
                            </span>
                            <span className="services-index__fact-value">
                              {downtime.value}
                            </span>
                          </span>
                        ) : null}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
