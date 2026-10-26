import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";

import { Container } from "@/design-system/ui/Container";
import { PageHero } from "@/components/page-hero/PageHero";
import { celebs } from "@/content/celebs";
import type { Locale } from "@/content/clinic";

export async function GuestsPage() {
  const t = await getTranslations("GuestsPage");
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

      <section className="celebs" aria-labelledby="celebs-title">
        <Container>
          <h2 id="celebs-title" className="celebs__title">
            {t("title")}
          </h2>

          <ul className="celebs__grid" role="list">
            {celebs.map((celeb, idx) => (
              <li key={`${celeb.image}-${idx}`} className="celebs__item">
                <figure className="celebs__card">
                  <span className="celebs__media">
                    <Image
                      src={`/images/celebs/${celeb.image}`}
                      alt={celeb.alt}
                      width={600}
                      height={600}
                      sizes="(max-width: 640px) 50vw, (max-width: 1099px) 33vw, 25vw"
                      className="celebs__img"
                    />
                    <span aria-hidden className="celebs__scrim" />
                    <figcaption className="celebs__caption">
                      <span aria-hidden className="celebs__index">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="celebs__name">
                        {celeb.name[locale]}
                      </span>
                    </figcaption>
                  </span>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
