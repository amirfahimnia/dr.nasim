"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";

import { clinic } from "@/content/clinic";
import { ArrowLeftIcon, CalendarIcon, PhoneIcon } from "@/design-system/icons";

export type ServiceOption = { value: string; label: string };

type FormValues = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const EMPTY: FormValues = {
  name: "",
  phone: "",
  service: "",
  date: "",
  message: ""
};

/**
 * Two-step booking request: the form collects the details, the review step
 * hands the message to WhatsApp (or a phone call). No server involved, so the
 * request genuinely reaches the practice instead of sitting in a dead form.
 */
export function AppointmentForm({
  options,
  defaultValue
}: {
  options: ServiceOption[];
  defaultValue?: string;
}) {
  const t = useTranslations("AppointmentPage.form");
  const locale = useLocale();

  const [values, setValues] = React.useState<FormValues>({
    ...EMPTY,
    service: defaultValue ?? ""
  });
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormValues, string>>>({});
  const [stage, setStage] = React.useState<"form" | "review">("form");

  const update =
    (key: keyof FormValues) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) next.name = t("required");

    const digits = values.phone.replace(/[^\d]/g, "");
    if (digits.length < 10) next.phone = t("invalidPhone");

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) setStage("review");
  };

  const serviceLabel =
    options.find((option) => option.value === values.service)?.label ?? "—";

  const message = [
    `${t("name")}: ${values.name}`,
    `${t("phone")}: ${values.phone}`,
    `${t("service")}: ${serviceLabel}`,
    values.date ? `${t("date")}: ${values.date}` : "",
    values.message ? `${t("message")}: ${values.message}` : ""
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = `${clinic.socials.whatsapp}?text=${encodeURIComponent(message)}`;

  if (stage === "review") {
    return (
      <div className="booking__review" aria-live="polite">
        <p className="booking__review-eyebrow">{t("submit")}</p>
        <h3 className="booking__review-title">{t("successTitle")}</h3>
        <p className="booking__review-note">{t("successNote")}</p>

        <dl className="booking__summary">
          <div>
            <dt>{t("name")}</dt>
            <dd>{values.name}</dd>
          </div>
          <div>
            <dt>{t("phone")}</dt>
            <dd dir="ltr">{values.phone}</dd>
          </div>
          <div>
            <dt>{t("service")}</dt>
            <dd>{serviceLabel}</dd>
          </div>
          {values.date ? (
            <div>
              <dt>{t("date")}</dt>
              <dd>{values.date}</dd>
            </div>
          ) : null}
        </dl>

        <div className="booking__review-actions">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--gold button--lg"
          >
            WhatsApp
            <ArrowLeftIcon size={16} />
          </a>
          <a
            href={`tel:${clinic.phone.tel}`}
            className="button button--ghost button--lg"
          >
            <PhoneIcon size={16} />
            {t("callInstead")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setStage("form")}
          className="booking__edit"
        >
          {t("submit")} ←
        </button>
      </div>
    );
  }

  return (
    <form className="booking" onSubmit={onSubmit} noValidate>
      <div className="booking__row">
        <div className="booking__field">
          <label htmlFor="booking-name" className="booking__label">
            {t("name")}
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            className="booking__input"
          />
          {errors.name ? (
            <p className="booking__error">{errors.name}</p>
          ) : null}
        </div>

        <div className="booking__field">
          <label htmlFor="booking-phone" className="booking__label">
            {t("phone")}
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            dir="ltr"
            autoComplete="tel"
            placeholder={t("phonePlaceholder")}
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            className="booking__input booking__input--ltr"
          />
          {errors.phone ? (
            <p className="booking__error">{errors.phone}</p>
          ) : null}
        </div>
      </div>

      <div className="booking__row">
        <div className="booking__field">
          <label htmlFor="booking-service" className="booking__label">
            {t("service")}
          </label>
          <select
            id="booking-service"
            name="service"
            value={values.service}
            onChange={update("service")}
            className="booking__input booking__select"
          >
            <option value="">{t("servicePlaceholder")}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="booking__field">
          <label htmlFor="booking-date" className="booking__label">
            {t("date")}
          </label>
          <input
            id="booking-date"
            name="date"
            type="text"
            placeholder={t("dateHint")}
            value={values.date}
            onChange={update("date")}
            className="booking__input"
          />
        </div>
      </div>

      <div className="booking__field">
        <label htmlFor="booking-message" className="booking__label">
          {t("message")}
        </label>
        <textarea
          id="booking-message"
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          value={values.message}
          onChange={update("message")}
          className="booking__input booking__textarea"
        />
      </div>

      <button type="submit" className="button button--gold button--lg booking__submit">
        <CalendarIcon size={17} />
        {t("submit")}
        <ArrowLeftIcon size={16} />
      </button>

      <p className="booking__footnote" lang={locale}>
        {t("callInstead")}:{" "}
        <a href={`tel:${clinic.phone.tel}`} dir="ltr">
          {clinic.phone.display}
        </a>
      </p>
    </form>
  );
}
