"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";

import { clinic } from "@/content/clinic";
import {
  ArrowLeftIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  SparkleIcon
} from "@/design-system/icons";
import { cn } from "@/lib/cn";

export type ServiceOption = { value: string; label: string };

type FormValues = {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  service: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  message: ""
};

/** Not a catalogue slug — the "I'm not sure yet" choice in the picker. */
const CONSULTATION = "consultation";

/** Practice hours are 10:00–20:00 (Saturday–Thursday): one slot per hour. */
const TIME_SLOTS = Array.from(
  { length: 10 },
  (_, index) => `${String(10 + index).padStart(2, "0")}:00`
);

/** Friday — the practice is closed (Saturday to Thursday only). */
const CLOSED_WEEKDAY = 5;

const STEP_COUNT = 3;
const LAST_STEP = STEP_COUNT - 1;

/** One icon per step: treatment → date & time → contact details. */
const STEP_ICONS = [SparkleIcon, CalendarIcon, PhoneIcon];

const DATE_LOCALES: Record<string, string> = {
  fa: "fa-IR",
  de: "de-DE",
  en: "en-GB"
};

function toISODate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function formatDate(iso: string, locale: string) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;

  try {
    return new Intl.DateTimeFormat(DATE_LOCALES[locale] ?? locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date(year, month - 1, day));
  } catch {
    return iso;
  }
}

/**
 * Three-step booking request: treatment → date & time → contact details.
 * The last step hands the request to WhatsApp (or a phone call), so it
 * genuinely reaches the practice without a server of our own.
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

  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState<FormValues>({
    ...EMPTY,
    service: defaultValue ?? ""
  });
  const [errors, setErrors] = React.useState<Errors>({});
  const [sent, setSent] = React.useState(false);

  const headingRef = React.useRef<HTMLHeadingElement | null>(null);
  const dateRef = React.useRef<HTMLInputElement | null>(null);

  /* Chrome/Firefox only open the native calendar from the little icon, so
     open it for the user wherever they click inside the field. */
  const openDatePicker = () => {
    const input = dateRef.current;
    if (input && typeof input.showPicker === "function") {
      try {
        input.showPicker();
      } catch {
        /* not triggered by a user gesture — the icon still works */
      }
    }
  };

  const today = React.useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const minDate = toISODate(today);
  const maxDate = toISODate(new Date(today.getTime() + 90 * 86_400_000));

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

  const focusHeading = () => {
    requestAnimationFrame(() => headingRef.current?.focus());
  };

  const validate = (index: number): Errors => {
    const next: Errors = {};

    if (index === 0 && !values.service) {
      next.service = t("serviceRequired");
    }

    if (index === 1) {
      if (!values.date) {
        next.date = t("dateRequired");
      } else {
        const [year, month, day] = values.date.split("-").map(Number);
        const chosen = new Date(year, month - 1, day);

        if (Number.isNaN(chosen.getTime()) || chosen < today) {
          next.date = t("dateInvalid");
        } else if (chosen.getDay() === CLOSED_WEEKDAY) {
          next.date = t("closedDay");
        }
      }
    }

    if (index === 2) {
      if (!values.name.trim()) next.name = t("required");

      const digits = values.phone.replace(/[^\d]/g, "");
      if (digits.length < 10) next.phone = t("invalidPhone");
    }

    return next;
  };

  const goTo = (next: number) => {
    const bounded = Math.min(Math.max(next, 0), LAST_STEP);
    if (bounded === step) return;
    setStep(bounded);
    setErrors({});
    focusHeading();
  };

  const goNext = () => {
    const found = validate(step);
    setErrors(found);
    if (Object.keys(found).length === 0) goTo(step + 1);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(LAST_STEP);
    setErrors(found);
    if (Object.keys(found).length === 0) setSent(true);
  };

  const serviceLabel =
    values.service === CONSULTATION
      ? t("consultation")
      : (options.find((option) => option.value === values.service)?.label ??
        "—");

  const message = [
    `${t("service")}: ${serviceLabel}`,
    values.date ? `${t("date")}: ${formatDate(values.date, locale)}` : "",
    values.time ? `${t("time")}: ${values.time}` : "",
    `${t("name")}: ${values.name}`,
    `${t("phone")}: ${values.phone}`,
    values.message ? `${t("message")}: ${values.message}` : ""
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappHref = `${clinic.socials.whatsapp}?text=${encodeURIComponent(message)}`;

  if (sent) {
    return (
      <div className="booking__review" aria-live="polite">
        <p className="booking__review-eyebrow">{t("submit")}</p>
        <h3 className="booking__review-title">{t("successTitle")}</h3>
        <p className="booking__review-note">{t("successNote")}</p>

        <dl className="booking__summary">
          <div>
            <dt>{t("service")}</dt>
            <dd>{serviceLabel}</dd>
          </div>
          {values.date ? (
            <div>
              <dt>{t("date")}</dt>
              <dd>{formatDate(values.date, locale)}</dd>
            </div>
          ) : null}
          {values.time ? (
            <div>
              <dt>{t("time")}</dt>
              <dd dir="ltr">{values.time}</dd>
            </div>
          ) : null}
          <div>
            <dt>{t("name")}</dt>
            <dd>{values.name}</dd>
          </div>
          <div>
            <dt>{t("phone")}</dt>
            <dd dir="ltr">{values.phone}</dd>
          </div>
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
          onClick={() => {
            setSent(false);
            setStep(LAST_STEP);
          }}
          className="booking__edit"
        >
          {t("editRequest")}
        </button>
      </div>
    );
  }

  return (
    <form className="booking" onSubmit={onSubmit} noValidate>
      <p className="booking__sr" aria-live="polite">
        {t("stepOf", { current: step + 1, total: STEP_COUNT })}
      </p>

      <ol className="booking__steps">
        {(["treatment", "datetime", "details"] as const).map((key, index) => {
          const active = index === step;
          const done = index < step;
          return (
            <li key={key} className="booking__step-cell">
              <button
                type="button"
                className={cn(
                  "booking__step",
                  active && "booking__step--active",
                  done && "booking__step--done"
                )}
                aria-current={active ? "step" : undefined}
                disabled={index > step}
                onClick={() => goTo(index)}
              >
                <span className="booking__step-rail">
                  <span
                    className="booking__step-fill"
                    style={{ width: index <= step ? "100%" : "0%" }}
                  />
                </span>
                <span className="booking__step-meta">
                  <span className="booking__step-index" aria-hidden="true">
                    {done ? <CheckIcon size={12} /> : index + 1}
                  </span>
                  {React.createElement(STEP_ICONS[index], {
                    size: 25,
                    className: "booking__step-icon"
                  })}
                  <span className="booking__step-label">
                    {t(`stepsShort.${key}`)}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {step === 0 ? (
        <section className="booking__panel">
          <h3
            id="booking-step-title"
            className="booking__step-title"
            tabIndex={-1}
            ref={headingRef}
          >
            {t("steps.treatment")}
          </h3>

          <div className="booking__field">
            <label htmlFor="booking-service" className="booking__label">
              {t("service")}
            </label>
            <select
              id="booking-service"
              name="service"
              value={values.service}
              onChange={update("service")}
              aria-invalid={Boolean(errors.service)}
              className="booking__input booking__select"
            >
              <option value="">{t("servicePlaceholder")}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value={CONSULTATION}>{t("consultation")}</option>
            </select>
            {errors.service ? (
              <p className="booking__error">{errors.service}</p>
            ) : null}
          </div>
        </section>
      ) : null}

      {step === 1 ? (
        <section className="booking__panel">
          <h3 className="booking__step-title" tabIndex={-1} ref={headingRef}>
            {t("steps.datetime")}
          </h3>

          <div className="booking__field">
            <label htmlFor="booking-date" className="booking__label">
              {t("date")}
            </label>
            <input
              id="booking-date"
              name="date"
              type="date"
              ref={dateRef}
              min={minDate}
              max={maxDate}
              value={values.date}
              onClick={openDatePicker}
              onChange={update("date")}
              aria-invalid={Boolean(errors.date)}
              className="booking__input booking__input--ltr"
            />
            <p className="booking__hint">{t("dateHint")}</p>
            {errors.date ? (
              <p className="booking__error">{errors.date}</p>
            ) : null}
          </div>

          <fieldset className="booking__field booking__field--time">
            <legend className="booking__label">{t("time")}</legend>
            <div className="booking__times">
              {TIME_SLOTS.map((slot) => {
                const selected = values.time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    dir="ltr"
                    aria-pressed={selected}
                    className={cn(
                      "booking__time",
                      selected && "booking__time--selected"
                    )}
                    onClick={() => {
                      setValues((prev) => ({
                        ...prev,
                        time: selected ? "" : slot
                      }));
                    }}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <p className="booking__hint">
              <ClockIcon size={14} />
              {t("timeHint")}
            </p>
          </fieldset>
        </section>
      ) : null}

      {step === 2 ? (
        <section className="booking__panel">
          <h3 className="booking__step-title" tabIndex={-1} ref={headingRef}>
            {t("steps.details")}
          </h3>

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

          <div className="booking__recap">
            <span>
              <CalendarIcon size={14} />
              {values.date ? formatDate(values.date, locale) : "—"}
            </span>
            <span>
              <ClockIcon size={14} />
              {values.time || t("timeFlexible")}
            </span>
          </div>
        </section>
      ) : null}

      <div className="booking__nav">
        {step > 0 ? (
          <button
            type="button"
            className="button button--ghost button--lg"
            onClick={() => goTo(step - 1)}
          >
            <ArrowLeftIcon size={16} />
            {t("back")}
          </button>
        ) : null}

        {step < LAST_STEP ? (
          <button
            type="button"
            className="button button--gold button--lg"
            onClick={goNext}
          >
            {t("next")}
            <ArrowLeftIcon size={16} />
          </button>
        ) : (
          <button
            type="submit"
            className="button button--gold button--lg booking__submit"
          >
            <CalendarIcon size={17} />
            {t("submit")}
            <ArrowLeftIcon size={16} />
          </button>
        )}
      </div>

      <p className="booking__footnote" lang={locale}>
        {t("callInstead")}:{" "}
        <a href={`tel:${clinic.phone.tel}`} dir="ltr">
          {clinic.phone.display}
        </a>
      </p>
    </form>
  );
}
