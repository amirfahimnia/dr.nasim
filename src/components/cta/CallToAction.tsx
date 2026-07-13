import { getTranslations } from "next-intl/server";

import { Button } from "@/design-system/ui/Button";
import { brand } from "@/design-system/tokens";
import { PhoneIcon } from "@/design-system/icons";

export async function CallToAction() {
  const t = await getTranslations("Cta");

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24"
      aria-labelledby="cta-title"
    >
      {/* Decorative backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-cream-soft via-cream-light to-cream-soft"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 start-0 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 end-0 h-80 w-80 rounded-full bg-sage/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-surface/80 p-8 text-center shadow-sm ring-1 ring-line/50 backdrop-blur sm:p-12 md:flex-row md:justify-between md:text-start">
          {/* Decorative floral motif */}
          <div
            aria-hidden
            className="hidden h-32 w-32 shrink-0 md:block"
          >
            <svg viewBox="0 0 100 100" className="h-full w-full text-gold/45">
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

          <div className="flex-1">
            <h2
              id="cta-title"
              className="text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl"
            >
              {t("title")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-body md:mx-0">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button variant="gold" size="lg">
              {t("primaryAction")}
            </Button>
            <a
              href={`tel:${brand.phone.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage bg-surface px-6 py-2.5 text-sm font-medium text-ink transition hover:bg-sage hover:text-surface"
              aria-label={`${t("phoneLabel")} ${brand.phone.display}`}
            >
              <PhoneIcon size={16} />
              <span className="text-start">
                <span className="block text-xs font-normal text-body group-hover:text-surface/80">
                  {t("phoneLabel")}
                </span>
                <span dir="ltr" className="block">
                  {brand.phone.display}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
