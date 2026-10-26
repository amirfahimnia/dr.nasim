import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { PageHero } from "@/components/page-hero/PageHero";
import { articles, type Article } from "@/content/articles";
import { formatArticleDate } from "@/lib/formatArticleDate";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";

type ArticleDetailProps = {
  article: Article;
  locale: Locale;
};

export async function ArticleDetail({ article, locale }: ArticleDetailProps) {
  const t = await getTranslations("ArticlesPage");
  const tNav = await getTranslations("Navigation");

  const related = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Internal links inside the migrated HTML carry a %LOCALE% placeholder.
  const html = article.html.split("%LOCALE%").join(`/${locale}`);

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={article.title}
        breadcrumbs={[
          { label: tNav("items.home"), href: `/${locale}` },
          { label: t("eyebrow"), href: `/${locale}/artikelen` },
          { label: article.title }
        ]}
      >
        <p className="article-hero__meta">
          <time dateTime={article.date}>
            {formatArticleDate(article.date, locale)}
          </time>
          <span aria-hidden className="article-hero__dot">
            •
          </span>
          <span>{clinic.doctor.short[locale]}</span>
        </p>
      </PageHero>

      <article className="article">
        <Container>
          <div className="article__cover">
            <Image
              src={article.featured}
              alt={article.title}
              width={1600}
              height={900}
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="article__cover-img"
            />
          </div>

          {/* The migrated body is always Persian — keep it right-to-left. */}
          <div
            className="article-body"
            dir="rtl"
            lang="fa"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="article__footer">
            <ButtonLink
              href={`/${locale}/artikelen`}
              variant="ghost"
              size="md"
            >
              {t("backToAll")}
            </ButtonLink>
            <ButtonLink
              href={`/${locale}/appointment`}
              variant="gold"
              size="md"
            >
              {tNav("bookAppointment")}
            </ButtonLink>
          </div>
        </Container>
      </article>

      {/* Related articles — the three most recent others */}
      <section className="article-related" aria-labelledby="article-related-title">
        <Container>
          <h2 id="article-related-title" className="article-related__title">
            {t("related")}
          </h2>
          <ul className="article-related__grid" role="list">
            {related.map((item) => (
              <li key={item.slug} className="article-related__item">
                <Link
                  href={`/${locale}/artikelen/${item.slug}`}
                  className="article-related__card"
                >
                  <span className="article-related__media">
                    <Image
                      src={item.featured}
                      alt={item.title}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                      className="article-related__img"
                    />
                  </span>
                  <span className="article-related__body">
                    <span className="article-related__date">
                      <time dateTime={item.date}>
                        {formatArticleDate(item.date, locale)}
                      </time>
                    </span>
                    <span className="article-related__name">
                      {item.title}
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
