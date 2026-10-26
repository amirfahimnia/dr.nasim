import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ArticleDetail } from "@/components/articles/ArticleDetail";
import { articleSlugs, getArticle } from "@/content/articles";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    articleSlugs.map((slug) => ({ locale, slug }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  const doctor = clinic.doctor.short[locale as Locale];

  return {
    title: `${article.title} | ${doctor}`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ${doctor}`,
      description: article.excerpt,
      images: [{ url: article.featured }]
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = getArticle(slug);

  if (!article || !routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "ArticlesPage" });

  return (
    <>
      <a href="#main" className="skip-link">
        {t("backToAll")}
      </a>
      <Navbar />
      <main id="main">
        <ArticleDetail article={article} locale={locale as Locale} />
      </main>
      <Footer />
    </>
  );
}
