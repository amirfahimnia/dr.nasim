import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { brand } from "@/design-system/tokens";
import Image from "next/image";
import {
  PhoneIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  CalendarIcon,
  ArrowLeftIcon
} from "@/design-system/icons";

const NAV_KEYS = [
  "services",
  "results",
  "articles",
  "about",
  "contact"
] as const;

const MARQUEE_KEYS = [
  "label1",
  "label2",
  "label3",
  "label4",
  "label5"
] as const;

/**
 * The "Signature" footer — an editorial closing panel rather than a generic
 * 4-column sitemap. Four visual moments stacked top → bottom:
 *
 *   1. Marquee strip — slow horizontal ticker of brand words (loops seamlessly,
 *      reverses on RTL so reading direction still feels native in Persian).
 *   2. Asymmetric hero — oversized display statement on the left, an elevated
 *      glassmorphic reservation card on the right, both lit by aurora orbs.
 *   3. Information grid — brand mark, address/hours as elegant cards, quick
 *      links + social pills (no boring `ul/ul/ul` columns).
 *   4. Fine-print bar with animated back-to-top affordance.
 *
 * Background is the existing ink surface but layered with:
 *   - three drifting radial orbs in nasim-purple + gold (very slow, motion-safe),
 *   - subtle CSS film-grain for a print-like feel.
 * All decorative layers are aria-hidden and pointer-events-none.
 */
export async function Footer() {
  const tNav = await getTranslations("Navigation");
  const tF = await getTranslations("Footer");
  const tCommon = await getTranslations("Common");
  const locale = await getLocale();

  const year = new Date().getFullYear();
  const hrefFor = (key: (typeof NAV_KEYS)[number]) => `/${locale}#${key}`;
  const marqueeItems = MARQUEE_KEYS.map((k) => tF(`marquee.${k}`));

  return (
    <footer
      id="footer"
      className="footer"
      aria-labelledby="footer-heading"
    >
      {/* Decorative background */}
      <div aria-hidden className="footer__bg">
        {/* Aurora orbs — slow, omnidirectional drift */}
        <div className="footer__orb footer__orb--purple-tr" />
        <div className="footer__orb footer__orb--gold-mr" />
        <div className="footer__orb footer__orb--purple-deep-bl" />

        {/* Print-style grain */}
        <div className="footer__grain" />

        {/* Top hairline */}
        <div className="footer__hairline" />
      </div>

      <h2 id="footer-heading" className="footer__heading">
        {brand.name} — {tF("sections.navigation")}
      </h2>

      <Container>
        {/* 1. Marquee strip */}
        <div aria-hidden className="footer__marquee">
          <div className="footer__marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span key={i} className="footer__marquee-item">
                  <span className="footer__marquee-bullet">✦</span>
                  <span>{item}</span>
                </span>
              )
            )}
          </div>
        </div>

        {/* 2. Signature hero */}
        <div className="footer__signature">
          {/* Oversized display statement */}
          <div className="footer__signature-text">
            <p className="footer__signature-eyebrow">
              <span className="footer__signature-eyebrow-rule" />
              <span>{tF("signature.eyebrow")}</span>
            </p>

            <p className="footer__signature-title">
              {tF("signature.title")}
            </p>

            <p className="footer__signature-note">
              {tF("signature.note")}
            </p>

            <div className="footer__signature-actions">
              <a href="#contact" className="footer__signature-cta">
                <CalendarIcon size={18} />
                <span>{tNav("bookAppointment")}</span>
                <ArrowLeftIcon
                  size={16}
                  className="footer__signature-cta-arrow flip-rtl"
                />
              </a>
              <a
                href={`tel:${brand.phone.tel}`}
                className="footer__signature-phone"
              >
                <PhoneIcon
                  size={18}
                  className="footer__signature-phone-icon"
                />
                <span dir="ltr" className="footer__signature-phone-number">
                  {brand.phone.display}
                </span>
              </a>
            </div>
          </div>

          {/* Glassmorphic reservation card */}
          <div className="footer__reservation">
            <div className="footer__reservation-card">
              {/* internal gradient wash */}
              <div
                aria-hidden
                className="footer__reservation-wash"
              />
              {/* a single hair-thin gold line top edge */}
              <div
                aria-hidden
                className="footer__reservation-hairline"
              />

              <p className="footer__reservation-eyebrow">
                {tF("reservationCard.eyebrow")}
              </p>
              <p className="footer__reservation-title">
                {tF("reservationCard.title")}
              </p>
              <p className="footer__reservation-note">
                {tF("reservationCard.note")}
              </p>

              <div className="footer__reservation-phone-row">
                <span className="footer__reservation-phone-icon">
                  <PhoneIcon size={18} />
                </span>
                <div>
                  <p className="footer__reservation-phone-label">
                    {tF("reservationCard.phoneLabel")}
                  </p>
                  <p
                    dir="ltr"
                    className="footer__reservation-phone-number"
                  >
                    {brand.phone.display}
                  </p>
                </div>
              </div>

              <a href="#contact" className="footer__reservation-cta">
                <span>{tNav("bookAppointment")}</span>
                <ArrowLeftIcon
                  size={16}
                  className="footer__reservation-cta-arrow flip-rtl"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Information grid */}
        <div className="footer__info">
          {/* Brand block */}
          <div className="footer__info-brand">
            <div className="footer__info-brand-row">
              <Image
                src="/images/logo.svg"
                alt=""
                width={80}
                height={54}
                unoptimized
                className="footer__info-brand-logo"
              />
              <span className="footer__info-brand-name">
                {brand.name}
              </span>
            </div>
            <p className="footer__info-brand-tagline">
              {brand.tagline[locale as "fa" | "en" | "de"] ??
                brand.tagline.en}
            </p>
          </div>

          {/* Address + Hours as elegant stacked cards */}
          <div className="footer__info-visit">
            <h3 className="footer__info-heading">
              {tF("visitHeading")}
            </h3>
            <ul className="footer__visit-list">
              <li className="footer__visit-item">
                <p className="footer__visit-item-label">
                  {tF("addressLabel")}
                </p>
                <p className="footer__visit-item-value">
                  {tF("address")}
                </p>
              </li>
              <li className="footer__visit-item">
                <p className="footer__visit-item-label">
                  {tF("hoursLabel")}
                </p>
                <p className="footer__visit-item-value">
                  {tF("hours")}
                </p>
              </li>
            </ul>
          </div>

          {/* Quick links + social pills */}
          <div className="footer__info-explore">
            <h3 className="footer__info-heading">
              {tF("exploreHeading")}
            </h3>
            <ul className="footer__explore-list">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <a href={hrefFor(key)} className="footer__explore-link">
                    <span className="footer__explore-link-arrow flip-rtl">
                      →
                    </span>
                    <span>{tNav(`items.${key}`)}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="footer__social-row">
              {[
                {
                  href: brand.socials.instagram,
                  label: "Instagram",
                  icon: InstagramIcon
                },
                {
                  href: brand.socials.telegram,
                  label: "Telegram",
                  icon: TelegramIcon
                },
                {
                  href: brand.socials.whatsapp,
                  label: "WhatsApp",
                  icon: WhatsappIcon
                }
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer__social-pill"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* 4. Fine print + back-to-top */}
      <div className="footer__fineprint">
        <Container>
          <div className="footer__fineprint-inner">
            <p className="footer__fineprint-rights">
              © {year} {brand.name}. {tF("rights")}
            </p>
            <div className="footer__fineprint-right">
              <p className="footer__fineprint-credit">
                {tF("credit")} ·{" "}
                <span>Dr. Nasim Studio</span>
              </p>
              <a
                href="#home"
                aria-label={tCommon("backToTop")}
                className="footer__top-link"
              >
                <span className="footer__top-link-label">
                  {tCommon("backToTop")}
                </span>
                <span aria-hidden className="footer__top-link-arrow">
                  ↑
                </span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
