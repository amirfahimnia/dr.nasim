import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { brand } from "@/design-system/tokens";
import { PhoneIcon } from "@/design-system/icons";

export async function CallToAction() {
  const t = await getTranslations("Cta");

  return (
    <section
      id="contact"
      className="cta"
      aria-labelledby="cta-title"
    >
      {/* Decorative backdrop */}
      <div aria-hidden className="cta__bg" />

      <div aria-hidden className="cta__orb cta__orb--gold-tl" />
      <div aria-hidden className="cta__orb cta__orb--sage-br" />

      <Container>
        <div className="cta__card">
          {/* Decorative floral motif — visible on md+ only */}
          <div aria-hidden className="cta__motif">
            <svg viewBox="0 0 100 100" className="cta__motif-svg">
              <g fill="none" stroke="currentColor" strokeWidth="0.7">
                <path d="M50 5 C 35 35 50 65 50 95" />
                <path d="M50 25 C 30 30 25 50 20 30" />
                <path d="M50 25 C 70 30 75 50 80 30" />
                <path d="M50 55 C 30 60 25 80 22 65" />
                <path d="M50 55 C 70 60 75 80 78 65" />
                <circle cx="35" cy="20" r="3.5" />
                <circle cx="65" cy="20" r="3.5" />
                <circle cx="30" cy="68" r="3" />
                <circle cx="70" cy="68" r="3" />
                <circle cx="50" cy="50" r="3.5" />
              </g>
            </svg>
          </div>

          <div className="cta__body">
            <h2 id="cta-title" className="cta__title">
              {t("title")}
            </h2>
            <p className="cta__description">{t("description")}</p>
          </div>

          <div className="cta__actions">
            <Button variant="gold" size="lg">
              {t("primaryAction")}
            </Button>
            <a
              href={`tel:${brand.phone.tel}`}
              className="cta__phone"
              aria-label={`${t("phoneLabel")} ${brand.phone.display}`}
            >
              <PhoneIcon size={16} />
              <span className="cta__phone-label">
                <span className="cta__phone-caption">{t("phoneLabel")}</span>
                <span dir="ltr" className="cta__phone-number">
                  {brand.phone.display}
                </span>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
