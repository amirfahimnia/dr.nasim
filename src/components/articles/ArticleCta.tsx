"use client";

import * as React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { ArrowLeftIcon, CheckIcon, PhoneIcon } from "@/design-system/icons";

/**
 * Sticky consultation card shown next to the article body: doctor portrait,
 * a few USPs and a two-field "free consultation request" that hands the
 * request to WhatsApp — same approach as the appointment form.
 */
export function ArticleCta() {
  const t = useTranslations("ArticleCta");
  const locale = useLocale() as Locale;

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [errors, setErrors] = React.useState<{ name?: string; phone?: string }>({});
  const [sent, setSent] = React.useState(false);

  const usps = (t.raw("usps") as string[]) ?? [];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) next.name = t("required");
    const digits = phone.replace(/[^\d]/g, "");
    if (digits.length < 10) next.phone = t("invalidPhone");
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const message = [
    `${t("nameLabel")}: ${name}`,
    `${t("phoneLabel")}: ${phone}`
  ].join("\n");
  const whatsappHref = `${clinic.socials.whatsapp}?text=${encodeURIComponent(message)}`;

  if (sent) {
    return (
      <div className="article-cta" aria-live="polite">
        <div className="article-cta__success">
          <span aria-hidden className="article-cta__success-icon">
            <CheckIcon size={18} />
          </span>
          <h3 className="article-cta__success-title">{t("successTitle")}</h3>
          <p className="article-cta__success-note">{t("successNote")}</p>

          <dl className="article-cta__summary">
            <div>
              <dt>{t("nameLabel")}</dt>
              <dd>{name}</dd>
            </div>
            <div>
              <dt>{t("phoneLabel")}</dt>
              <dd dir="ltr">{phone}</dd>
            </div>
          </dl>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--gold button--md article-cta__whatsapp"
          >
            WhatsApp
            <ArrowLeftIcon size={14} />
          </a>

          <a href={`tel:${clinic.phone.tel}`} className="article-cta__call">
            <PhoneIcon size={13} />
            <span dir="ltr">{clinic.phone.display}</span>
          </a>

          <button
            type="button"
            onClick={() => setSent(false)}
            className="article-cta__edit"
          >
            {t("edit")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-cta">
      <div className="article-cta__head">
        <span className="article-cta__photo">
          <Image
            src="/images/dr-nasim-portrait.webp"
            alt={clinic.doctor.short[locale]}
            width={120}
            height={120}
            sizes="3.75rem"
            className="article-cta__photo-img"
          />
        </span>
        <span className="article-cta__identity">
          <span className="article-cta__name">{clinic.doctor.short[locale]}</span>
          <span className="article-cta__role">{clinic.doctor.title[locale]}</span>
        </span>
      </div>

      <ul className="article-cta__usps" role="list">
        {usps.map((usp) => (
          <li key={usp} className="article-cta__usp">
            <span aria-hidden className="article-cta__usp-check">
              <CheckIcon size={10} />
            </span>
            <span>{usp}</span>
          </li>
        ))}
      </ul>

      <p className="article-cta__note">{t("note")}</p>

      <form className="article-cta__form" onSubmit={onSubmit} noValidate>
        <h3 id="article-cta-title" className="article-cta__title">
          {t("title")}
        </h3>

        <label htmlFor="article-cta-name" className="article-cta__label">
          {t("nameLabel")} *
        </label>
        <input
          id="article-cta-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          aria-invalid={Boolean(errors.name)}
          className="article-cta__input"
        />
        {errors.name ? <p className="article-cta__error">{errors.name}</p> : null}

        <label htmlFor="article-cta-phone" className="article-cta__label">
          {t("phoneLabel")} *
        </label>
        <input
          id="article-cta-phone"
          name="phone"
          type="tel"
          dir="ltr"
          autoComplete="tel"
          placeholder={t("phonePlaceholder")}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setErrors((prev) => ({ ...prev, phone: undefined }));
          }}
          aria-invalid={Boolean(errors.phone)}
          className="article-cta__input article-cta__input--ltr"
        />
        {errors.phone ? (
          <p className="article-cta__error">{errors.phone}</p>
        ) : null}

        <button
          type="submit"
          className="button button--gold button--md article-cta__submit"
        >
          {t("submit")}
          <ArrowLeftIcon size={14} />
        </button>
      </form>
    </div>
  );
}
