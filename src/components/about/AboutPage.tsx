import { getTranslations, getLocale } from "next-intl/server";

import { PageHero } from "@/components/page-hero/PageHero";
import { About } from "@/components/about/About";
import { Team } from "@/components/about/Team";
import type { Locale } from "@/content/clinic";

export async function AboutPage() {
  const t = await getTranslations("AboutPage");
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
      <About />
      <Team />
    </>
  );
}
