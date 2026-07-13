import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { PlaceholderImage } from "@/design-system/ui/PlaceholderImage";
import { AvatarStack } from "@/design-system/ui/AvatarStack";
import { ArrowLeftIcon } from "@/design-system/icons";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream pt-8 sm:pt-12 lg:pt-16"
      aria-labelledby="hero-title"
    >
      {/* Decorative gold wash — sits behind the layout */}
      <div
        className="pointer-events-none absolute -top-32 -end-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -start-32 h-[28rem] w-[28rem] rounded-full bg-eyebrow/10 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Image side — keeps "first" position so RTL flips it visually */}
          <div className="relative order-1 lg:order-1 animate-fade-up">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer glow frame */}
              <div
                aria-hidden
                className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-br from-gold/30 via-eyebrow/15 to-sage/20 blur-2xl"
              />
              <PlaceholderImage
                label="Dr. Nasim Gholami — board-certified aesthetic physician"
                tone="warm"
                kind="portrait"
                aspect="aspect-[4/5]"
                className="relative shadow-lg"
              />
              {/* Floating stat-card */}
              <div className="absolute -bottom-5 start-6 hidden rounded-2xl bg-surface/95 px-4 py-3 shadow-md ring-1 ring-line/60 backdrop-blur sm:flex sm:items-center sm:gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold-deep">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 2l2.5 6.5L21 10l-5 4.3L18 21l-6-3.7L6 21l2-6.7L3 10l6.5-1.5L12 2Z"
                    />
                  </svg>
                </span>
                <div className="text-start">
                  <p className="text-xs text-muted">Board certified</p>
                  <p className="text-sm font-semibold text-ink">
                    Aesthetic Medicine
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-2 lg:order-2 animate-fade-up">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-eyebrow">
              <span className="h-px w-8 bg-eyebrow/60" />
              <span>{t("eyebrow")}</span>
            </p>

            <h1
              id="hero-title"
              className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]"
            >
              {t("title")}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-body sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="gold" size="lg" className="gap-2">
                {t("primaryAction")}
                <ArrowLeftIcon size={16} />
              </Button>
              <Button variant="outline-light" size="lg">
                {t("secondaryAction")}
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <AvatarStack count={5} size={36} />
              <div className="text-start">
                <p className="text-2xl font-semibold tracking-tight text-ink">
                  +2000
                </p>
                <p className="-mt-0.5 text-sm text-body">{t("patients")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-16 sm:h-24" />
    </section>
  );
}
