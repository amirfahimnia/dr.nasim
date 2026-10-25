import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ServiceDetail } from "@/components/service-detail/ServiceDetail";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { getService, serviceSlugs } from "@/content/services";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({ locale, slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const copy = service.copy[locale as Locale];
  const doctor = clinic.doctor.short[locale as Locale];

  return {
    title: `${copy.title} | ${doctor}`,
    description: copy.tagline,
    openGraph: {
      title: `${copy.title} | ${doctor}`,
      description: copy.tagline,
      images: [{ url: service.image, width: 1200, height: 800 }]
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getService(slug);

  if (!service || !routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ServicePage" });

  return (
    <>
      <a href="#main" className="skip-link">
        {t("breadcrumb")}
      </a>
      <Navbar />
      <main id="main">
        <ServiceDetail
          service={service}
          locale={locale as Locale}
        />
      </main>
      <Footer />
    </>
  );
}
