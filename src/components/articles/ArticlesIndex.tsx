import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/design-system/ui/Container";
import { PageHero } from "@/components/page-hero/PageHero";
import { articles } from "@/content/articles";
import { formatArticleDate } from "@/lib/formatArticleDate";
import type { Locale } from "@/content/clinic";

export async function ArticlesIndex() {
  const t = await getTranslations("ArticlesPage");
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

      <section
        className="articles-index"
        aria-labelledby="articles-index-title"
      >
        <Container>
          <h2 id="articles-index-title" className="articles-index__title">
            {t("title")}
          </h2>

          <ul className="articles-index__grid" role="list">
            {articles.map((article, idx) => (
              <li key={article.slug} className="articles-index__item">
                <Link
                  href={`/${locale}/artikelen/${article.slug}`}
                  className="articles-index__card"
                >
                  <span className="articles-index__media">
                    <Image
                      src={article.featured}
                      alt={article.title}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1099px) 50vw, 33vw"
                      className="articles-index__img"
                    />
                    <span aria-hidden className="articles-index__scrim" />
                    <span className="articles-index__index">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <span className="articles-index__body">
                    <span className="articles-index__date">
                      <time dateTime={article.date}>
                        {formatArticleDate(article.date, locale)}
                      </time>
                    </span>
                    <span className="articles-index__name">
                      {article.title}
                    </span>
                    <span className="articles-index__excerpt">
                      {article.excerpt}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
