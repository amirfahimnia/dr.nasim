import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { ServicesRail, type RailItem } from "@/components/services/ServicesRail";
import { services } from "@/content/services";
import type { Locale } from "@/content/clinic";
import { ArrowRightIcon } from "@/design-system/icons";

export async function Services() {
  const t = await getTranslations("Services");
  const locale = (await getLocale()) as Locale;

  const items: RailItem[] = services.map((service) => {
    const copy = service.copy[locale];
    return {
      slug: service.slug,
      image: service.image,
      title: copy.title,
      tagline: copy.tagline,
      category: copy.category
    };
  });

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
              href={`/${locale}/treatments`}
              variant="ghost"
              size="md"
              className="services__view-all"
            >
              {t("viewAll")}
              <ArrowRightIcon size={15} />
            </ButtonLink>
          </div>
        </header>

        <ServicesRail items={items} locale={locale} />
      </Container>
    </section>
  );
}
