import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { PageHero } from "@/components/page-hero/PageHero";
import {
  CelebsGallery,
  type CelebItem
} from "@/components/guests/CelebsGallery";
import { celebs } from "@/content/celebs";
import type { Locale } from "@/content/clinic";

export async function GuestsPage() {
  const t = await getTranslations("GuestsPage");
  const tNav = await getTranslations("Navigation");
  const locale = (await getLocale()) as Locale;

  const items: CelebItem[] = celebs.map((celeb) => ({
    image: `/images/celebs/${celeb.image}`,
    full: `/images/celebs/full/${celeb.image}`,
    name: celeb.name[locale],
    alt: celeb.alt
  }));

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

          <CelebsGallery
            items={items}
            labels={{
              close: t("close"),
              prev: t("prev"),
              next: t("next")
            }}
          />
        </Container>
      </section>
    </>
  );
}
