import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { PlaceholderImage } from "@/design-system/ui/PlaceholderImage";
import { CheckIcon } from "@/design-system/icons";
import { brand } from "@/design-system/tokens";

export async function About() {
  const t = await getTranslations("About");
  const tagline = t.has("tagline") ? t("tagline") : brand.tagline.en;

  return (
    <section
      id="about"
      className="relative bg-cream-soft py-20 sm:py-28"
      aria-labelledby="about-title"
    >
      <Container>
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-[1fr_1.05fr]">
          {/* Content first in source order so RTL render flips visually */}
          <div className="order-2 lg:order-1">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-eyebrow">
              <span className="h-px w-6 bg-eyebrow/50" />
              {t("eyebrow")}
            </p>
            <h2
              id="about-title"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
            >
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-body sm:text-lg">
              {t("description")}
            </p>

            <ul
              className="mt-8 grid max-w-xl gap-3 sm:grid-cols-1"
              role="list"
            >
              {(
                t.raw("features") as string[]
              ).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl bg-surface/70 px-4 py-3 text-sm text-ink shadow-xs ring-1 ring-line/40 transition hover:shadow-sm"
                >
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep"
                    aria-hidden
                  >
                    <CheckIcon size={14} />
                  </span>
                  <span className="leading-6">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="outline-light" size="lg">
                {t("cta")}
              </Button>
            </div>
          </div>

          {/* Image to the visual end (right in LTR, left in RTL) */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sage/25 via-cream-light to-eyebrow/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-line/40 shadow-md">
                <PlaceholderImage
                  label="Dr. Nasim Gholami — in-clinic portrait"
                  tone="rose"
                  kind="portrait"
                  aspect="aspect-[4/5]"
                />
              </div>
              {/* Signature tag */}
              <div className="absolute -bottom-4 end-6 rounded-2xl bg-surface px-4 py-3 shadow-md ring-1 ring-line/50">
                <p className="text-xs italic text-muted">&ldquo;{tagline}&rdquo;</p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  Aesthetic Medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
