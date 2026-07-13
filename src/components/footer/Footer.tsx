import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { brand } from "@/design-system/tokens";
import { PhoneIcon, InstagramIcon, TelegramIcon, WhatsappIcon } from "@/design-system/icons";

const NAV_KEYS = ["home", "services", "results", "articles", "about", "contact"] as const;

export async function Footer() {
  const tNav = await getTranslations("Navigation");
  const tF = await getTranslations("Footer");
  const locale = await getLocale();

  const year = new Date().getFullYear();
  const hrefFor = (key: (typeof NAV_KEYS)[number]) => {
    const slug = key === "home" ? "" : `#${key}`;
    return `/${locale}${slug}`;
  };

  return (
    <footer
      id="footer"
      className="relative bg-ink text-cream"
      aria-labelledby="footer-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <Container>
        <h2 id="footer-heading" className="sr-only">
          {brand.name} — footer
        </h2>

        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-soft" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M12 2c5 4 7 8 7 11a7 7 0 1 1-14 0c0-3 2-7 7-11Zm0 5.5c-2 3-3 5.5-3 7a3 3 0 0 0 6 0c0-1.5-1-4-3-7Z"
                  />
                </svg>
              </span>
              <span className="text-base font-semibold text-cream">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-cream/75">
              {tF("tagline")}
            </p>
            <p className="mt-3 text-xs text-cream/55">
              {tF("address")}
            </p>
            <p className="mt-1 text-xs text-cream/55">
              {tF("hours")}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
              {tF("sections.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${brand.phone.tel}`}
                  className="inline-flex items-center gap-2 text-cream/85 transition hover:text-cream"
                >
                  <PhoneIcon size={16} className="text-gold-soft" />
                  <span dir="ltr">{brand.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.socials.whatsapp}
                  className="inline-flex items-center gap-2 text-cream/85 transition hover:text-cream"
                >
                  <WhatsappIcon size={16} className="text-gold-soft" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.socials.telegram}
                  className="inline-flex items-center gap-2 text-cream/85 transition hover:text-cream"
                >
                  <TelegramIcon size={16} className="text-gold-soft" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.socials.instagram}
                  className="inline-flex items-center gap-2 text-cream/85 transition hover:text-cream"
                >
                  <InstagramIcon size={16} className="text-gold-soft" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
              {tF("sections.navigation")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <a
                    href={hrefFor(key)}
                    className="text-cream/75 transition hover:text-cream"
                  >
                    {tNav(`items.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
              {tF("sections.social")}
            </h3>
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              {brand.tagline[locale as "fa" | "en" | "de"] ??
                brand.tagline.en}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={brand.socials.instagram}
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/85 transition hover:bg-gold hover:text-ink"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={brand.socials.telegram}
                aria-label="Telegram"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/85 transition hover:bg-gold hover:text-ink"
              >
                <TelegramIcon size={18} />
              </a>
              <a
                href={brand.socials.whatsapp}
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream/10 text-cream/85 transition hover:bg-gold hover:text-ink"
              >
                <WhatsappIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* bottom strip */}
      <div className="border-t border-cream/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/55 sm:flex-row">
            <p>© {year} {brand.name}. {tF("rights")}</p>
            <p>
              {tF("credit")} ·{" "}
              <span className="text-cream/75">Dr. Nasim Studio</span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
