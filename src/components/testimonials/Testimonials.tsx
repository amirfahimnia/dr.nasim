import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { QuoteIcon } from "@/design-system/icons";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const items = (t.raw("items") as Testimonial[]) ?? [];

  return (
    <section
      id="results"
      className="relative bg-cream py-20 sm:py-28"
      aria-labelledby="testimonials-title"
    >
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-eyebrow">
            <span className="h-px w-6 bg-eyebrow/50" />
            {t("eyebrow")}
            <span className="h-px w-6 bg-eyebrow/50" />
          </p>
          <h2
            id="testimonials-title"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-body">{t("subtitle")}</p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <figure
              key={item.name}
              className="flex h-full flex-col rounded-2xl bg-surface p-7 shadow-xs ring-1 ring-line/50 transition hover:shadow-md"
            >
              <QuoteIcon
                size={28}
                className="mb-4 text-gold/60"
                strokeWidth={1.4}
              />
              <blockquote className="flex-1">
                <p className="text-[15px] leading-7 text-ink/90 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-line/60 pt-5">
                <div className="text-start">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-xs text-body">{item.role}</p>
                </div>
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream-soft text-xs font-semibold text-gold-deep ring-1 ring-line/40"
                  aria-hidden
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
