import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { AboutPage } from "@/components/about/AboutPage";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: `${t("title")} | ${clinic.doctor.short[locale as Locale]}`,
    description: t("lead")
  };
}

export default async function AboutRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
