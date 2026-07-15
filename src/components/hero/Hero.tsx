import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { AvatarStack } from "@/design-system/ui/AvatarStack";
import { ArrowLeftIcon } from "@/design-system/icons";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* Full-bleed background photograph. The `flip-rtl` global utility
          mirrors horizontally on Persian pages so the doctor faces inward. */}
      <div className="hero__bg">
        <Image
          src="/images/dr-nasim-hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__bg-img flip-rtl"
        />
      </div>

      {/* Decorative warm washes */}
      <div
        aria-hidden
        className="hero__orb hero__orb--gold-tr"
      />
      <div
        aria-hidden
        className="hero__orb hero__orb--eyebrow-bl"
      />

      <Container>
        <div className="hero__inner">
          <div className="hero__content animate-fade-up">
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-rule" />
              <span>{t("eyebrow")}</span>
            </p>

            <h1 id="hero-title" className="hero__title">
              {t("title")}
            </h1>

            <p className="hero__description">{t("description")}</p>

            <div className="hero__actions">
              <Button variant="purple" size="lg">
                {t("primaryAction")}
                <ArrowLeftIcon size={16} />
              </Button>
              <Button variant="outline-light" size="lg">
                {t("secondaryAction")}
              </Button>
            </div>

            <div className="hero__patient-row">
              <AvatarStack count={5} size={36} />
              <div className="hero__patient-meta">
                <p className="hero__patient-count">+2000</p>
                <p className="hero__patient-label">{t("patients")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
