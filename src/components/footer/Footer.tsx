import { getTranslations, getLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/design-system/ui/Container";
import { ButtonLink } from "@/design-system/ui/Button";
import { clinic } from "@/content/clinic";
import type { Locale } from "@/content/clinic";
import { services } from "@/content/services";
import {
  CalendarIcon,
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsappIcon
} from "@/design-system/icons";

const NAV_KEYS = [
  "home",
  "services",
  "about",
  "guests",
  "reviews",
  "contact"
] as const;

const MARQUEE_KEYS = [
  "label1",
  "label2",
  "label3",
  "label4",
  "label5"
] as const;

export async function Footer() {
  const tNav = await getTranslations("Navigation");
  const tF = await getTranslations("Footer");
  const locale = (await getLocale()) as Locale;

  const year = new Date().getFullYear();
  const marqueeItems = MARQUEE_KEYS.map((k) => tF(`marquee.${k}`));

  const hrefFor = (key: (typeof NAV_KEYS)[number]) => {
    if (key === "home") return `/${locale}`;
    if (key === "services") return `/${locale}/treatments`;
    if (key === "about") return `/${locale}/about`;
    if (key === "guests") return `/${locale}/guests`;
    return `/${locale}#${key}`;
  };

  const socials = [
    { href: clinic.socials.instagram, label: "Instagram", icon: InstagramIcon },
    { href: clinic.socials.telegram, label: "Telegram", icon: TelegramIcon },
    { href: clinic.socials.whatsapp, label: "WhatsApp", icon: WhatsappIcon }
  ];

  return (
    <footer id="footer" className="footer" aria-labelledby="footer-heading">
      <Container>
        {/* Brand + booking */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link href={`/${locale}`} className="footer__brand-link">
              <Image
                src="/images/logo.svg"
                alt=""
                width={72}
                height={48}
                unoptimized
                className="footer__brand-logo"
              />
              <span className="footer__brand-name">
                {clinic.doctor.short[locale]}
              </span>
            </Link>
            <p className="footer__tagline">{tF("tagline")}</p>
          </div>

          <div className="footer__booking">
            <ButtonLink
              href={`/${locale}/appointment`}
              variant="gold"
              size="md"
            >
              <CalendarIcon size={16} />
              {tNav("bookAppointment")}
            </ButtonLink>
            <a
              href={`tel:${clinic.phone.tel}`}
              className="footer__phone"
              dir="ltr"
            >
              <PhoneIcon size={15} />
              <span>{clinic.phone.display}</span>
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="footer__grid">
          <nav className="footer__col" aria-label={tF("sections.navigation")}>
            <h2 id="footer-heading" className="footer__heading">
              {tF("sections.navigation")}
            </h2>
            <ul className="footer__list">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <Link href={hrefFor(key)} className="footer__link">
                    {tNav(`items.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label={tF("sections.services")}>
            <h2 className="footer__heading">{tF("sections.services")}</h2>
            <ul className="footer__list">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${locale}/treatments/${service.slug}`}
                    className="footer__link"
                  >
                    {service.copy[locale].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">{tF("visitHeading")}</h2>
            <ul className="footer__details">
              <li className="footer__detail">
                <MapPinIcon size={16} />
                <span>
                  <span className="footer__detail-label">
                    {tF("addressLabel")}
                  </span>
                  <span className="footer__detail-value">
                    {clinic.address[locale]}
                  </span>
                </span>
              </li>
              <li className="footer__detail">
                <PhoneIcon size={16} />
                <span>
                  <span className="footer__detail-label">
                    {tF("sections.contact")}
                  </span>
                  <span className="footer__detail-value" dir="ltr">
                    {clinic.phone.display} · {clinic.mobile.display}
                  </span>
                </span>
              </li>
              <li className="footer__detail">
                <ClockIcon size={16} />
                <span>
                  <span className="footer__detail-label">
                    {tF("hoursLabel")}
                  </span>
                  <span className="footer__detail-value">
                    {clinic.hours[locale]}
                  </span>
                </span>
              </li>
            </ul>

            <div className="footer__socials">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer__social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Word band */}
      <div aria-hidden className="footer__marquee">
        <div className="footer__marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span key={i} className="footer__marquee-item">
                <span className="footer__marquee-sep">✦</span>
                <span>{item}</span>
              </span>
            )
          )}
        </div>
      </div>

      <div className="footer__fineprint">
        <Container>
          <div className="footer__fineprint-inner">
            <p className="footer__rights">
              © {year} {clinic.doctor.short[locale]}. {tF("rights")}
            </p>
            <a
              href={`/${locale}`}
              aria-label={tF("backToTopAria")}
              className="footer__top-link"
            >
              ↑
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
