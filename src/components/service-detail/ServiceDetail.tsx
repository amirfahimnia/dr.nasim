import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { CallToAction } from "@/components/cta/CallToAction";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { services } from "@/content/services";
import type { Service } from "@/content/services";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  PlusIcon
} from "@/design-system/icons";

type Props = {
  service: Service;
  locale: Locale;
};

export async function ServiceDetail({ service, locale }: Props) {
  const copy = service.copy[locale];
  const t = await getTranslations("ServicePage");
  const tNav = await getTranslations("Navigation");

  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero ------------------------------------------------------------- */}
      <section className="detail-hero" aria-labelledby="detail-title">
        <div className="detail-hero__media">
          <Image
            src={service.image}
            alt={copy.title}
            fill
            priority
            sizes="100vw"
            className="detail-hero__img"
          />
        </div>
        <div aria-hidden className="detail-hero__scrim" />

        <Container>
          <div className="detail-hero__inner">
            <nav
              aria-label="Breadcrumb"
              className="page-hero__crumbs detail-hero__crumbs"
            >
              <ol>
                <li>
                  <Link href={`/${locale}`} className="page-hero__crumb">
                    {tNav("items.home")}
                  </Link>
                  <ArrowRightIcon
                    size={12}
                    className="page-hero__crumb-sep flip-rtl"
                  />
                </li>
                <li>
                  <Link
                    href={`/${locale}/treatments`}
                    className="page-hero__crumb"
                  >
                    {t("breadcrumb")}
                  </Link>
                  <ArrowRightIcon
                    size={12}
                    className="page-hero__crumb-sep flip-rtl"
                  />
                </li>
                <li>
                  <span
                    aria-current="page"
                    className="page-hero__crumb page-hero__crumb--current"
                  >
                    {copy.title}
                  </span>
                </li>
              </ol>
            </nav>

            <span className="detail-hero__category">{copy.category}</span>
            <h1 id="detail-title" className="detail-hero__title">
              {copy.title}
            </h1>
            <p className="detail-hero__tagline">{copy.tagline}</p>

            <div className="detail-hero__actions">
              <ButtonLink
                href={`/${locale}/appointment?service=${service.slug}`}
                variant="gold"
                size="lg"
              >
                {t("bookService")}
                <ArrowRightIcon size={16} />
              </ButtonLink>
              <Link
                href={`/${locale}/treatments`}
                className="detail-hero__back"
              >
                {t("breadcrumb")}
                <ArrowLeftIcon size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Facts ------------------------------------------------------------ */}
      <section className="detail-facts" aria-label={t("sections.facts")}>
        <Container>
          <dl className="detail-facts__list">
            {copy.facts.map((fact) => (
              <div key={fact.label} className="detail-facts__item">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Intro + price ---------------------------------------------------- */}
      <section className="detail-body" aria-labelledby="detail-about">
        <Container>
          <div className="detail-body__grid">
            <div className="detail-body__text">
              <p className="eyebrow">{t("sections.intro")}</p>
              <h2 id="detail-about" className="detail-body__title">
                {copy.title}
              </h2>
              {copy.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="detail-body__p">
                  {paragraph}
                </p>
              ))}

              {/* Benefits */}
              <div className="detail-block">
                <h3 className="detail-block__title">
                  {t("sections.benefits")}
                </h3>
                <ul className="detail-benefits" role="list">
                  {copy.benefits.map((benefit) => (
                    <li key={benefit} className="detail-benefits__item">
                      <span
                        aria-hidden
                        className="detail-benefits__check"
                      >
                        <CheckIcon size={12} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable for */}
              <div className="detail-block">
                <h3 className="detail-block__title">
                  {t("sections.suitableFor")}
                </h3>
                <ul className="detail-tags" role="list">
                  {copy.suitableFor.map((item) => (
                    <li key={item} className="detail-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky booking card */}
            <aside className="detail-aside">
              <div className="detail-aside__card">
                <p className="detail-aside__eyebrow">{t("sections.price")}</p>
                <p className="detail-aside__note">{copy.priceNote}</p>
                <p className="detail-aside__hint">
                  {t("consultationNote")}
                </p>

                <ButtonLink
                  href={`/${locale}/appointment?service=${service.slug}`}
                  variant="gold"
                  size="lg"
                  className="detail-aside__cta"
                >
                  {t("bookService")}
                </ButtonLink>

                <a
                  href={`tel:${clinic.phone.tel}`}
                  className="detail-aside__phone"
                >
                  <PhoneIcon size={16} />
                  <span dir="ltr">{clinic.phone.display}</span>
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Process ---------------------------------------------------------- */}
      <section
        className="detail-process"
        aria-labelledby="detail-process-title"
      >
        <Container>
          <p className="eyebrow">{t("sections.process")}</p>
          <h2 id="detail-process-title" className="detail-process__title">
            {t("sections.process")}
          </h2>

          <ol className="detail-process__list">
            {copy.process.map((step, idx) => (
              <li key={step.title} className="detail-process__item">
                <span className="detail-process__index">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="detail-process__step-title">
                    {step.title}
                  </h3>
                  <p className="detail-process__step-text">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ -------------------------------------------------------------- */}
      <section className="detail-faq" aria-labelledby="detail-faq-title">
        <Container>
          <div className="detail-faq__grid">
            <div className="detail-faq__intro">
              <p className="eyebrow">{t("sections.faq")}</p>
              <h2 id="detail-faq-title" className="detail-faq__title">
                {t("sections.faq")}
              </h2>
            </div>

            <div className="detail-faq__list">
              {copy.faq.map((item) => (
                <details key={item.question} className="detail-faq__item">
                  <summary className="detail-faq__question">
                    <span>{item.question}</span>
                    <span aria-hidden className="detail-faq__icon">
                      <PlusIcon size={16} />
                    </span>
                  </summary>
                  <p className="detail-faq__answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related ---------------------------------------------------------- */}
      <section
        className="detail-related"
        aria-labelledby="detail-related-title"
      >
        <Container>
          <h2 id="detail-related-title" className="detail-related__title">
            {t("sections.related")}
          </h2>

          <ul className="detail-related__grid" role="list">
            {related.map((item) => (
              <li key={item.slug} className="detail-related__item">
                <Link
                  href={`/${locale}/treatments/${item.slug}`}
                  className="detail-related__card"
                >
                  <span className="detail-related__media">
                    <Image
                      src={item.image}
                      alt={item.copy[locale].title}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      className="detail-related__img"
                    />
                  </span>
                  <span className="detail-related__body">
                    <span className="detail-related__name">
                      {item.copy[locale].title}
                    </span>
                    <span className="detail-related__tagline">
                      {item.copy[locale].tagline}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CallToAction />
    </>
  );
}
