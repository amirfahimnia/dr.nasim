import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { PageHero } from "@/components/page-hero/PageHero";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { services } from "@/content/services";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsappIcon
} from "@/design-system/icons";

export async function AppointmentPage({
  defaultService
}: {
  defaultService?: string;
}) {
  const t = await getTranslations("AppointmentPage");
  const tNav = await getTranslations("Navigation");
  const locale = (await getLocale()) as Locale;

  const options = services.map((service) => ({
    value: service.slug,
    label: service.copy[locale].title
  }));

  const socials = [
    { href: clinic.socials.instagram, label: "Instagram", icon: InstagramIcon },
    { href: clinic.socials.telegram, label: "Telegram", icon: TelegramIcon },
    { href: clinic.socials.whatsapp, label: "WhatsApp", icon: WhatsappIcon }
  ];

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

      <section className="appointment" aria-labelledby="appointment-title">
        <Container>
          <h2 id="appointment-title" className="appointment__title">
            {t("title")}
          </h2>

          <div className="appointment__grid">
            <div className="appointment__form-card">
              <AppointmentForm
                options={options}
                defaultValue={defaultService}
              />
            </div>

            <aside className="appointment__aside">
              <div className="appointment__panel">
                <p className="appointment__panel-eyebrow">
                  {t("contact.heading")}
                </p>

                <ul className="appointment__list">
                  <li className="appointment__item">
                    <MapPinIcon size={17} />
                    <span>
                      <span className="appointment__item-label">
                        {t("contact.addressLabel")}
                      </span>
                      <span className="appointment__item-value">
                        {clinic.address[locale]}
                      </span>
                    </span>
                  </li>
                  <li className="appointment__item">
                    <PhoneIcon size={17} />
                    <span>
                      <span className="appointment__item-label">
                        {t("contact.phoneLabel")}
                      </span>
                      <span
                        className="appointment__item-value"
                        dir="ltr"
                      >
                        {clinic.phone.display}
                      </span>
                      <span
                        className="appointment__item-value"
                        dir="ltr"
                      >
                        {clinic.mobile.display}
                      </span>
                    </span>
                  </li>
                  <li className="appointment__item">
                    <ClockIcon size={17} />
                    <span>
                      <span className="appointment__item-label">
                        {t("contact.hoursLabel")}
                      </span>
                      <span className="appointment__item-value">
                        {clinic.hours[locale]}
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="appointment__socials">
                  {socials.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="appointment__social"
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="appointment__discount">
                <span className="appointment__discount-value">10%</span>
                <p className="appointment__discount-text">{t("lead")}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
