import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { PlaceholderImage } from "@/design-system/ui/PlaceholderImage";
import { ArrowLeftIcon } from "@/design-system/icons";

interface CaseItem {
  slug: string;
  treatment: string;
  duration: string;
  summary: string;
}

const SLUGS = ["rejuvenation", "filler-cheek", "botox-forehead", "meso-hair"] as const;

/**
 * Before/After results gallery.
 *
 * Real photography drop-in: place matching JPG/WebP/AVIF assets at
 *   /public/images/before-after/<slug>-before.{jpg,webp,avif}
 *   /public/images/before-after/<slug>-after.{jpg,webp,avif}
 * and then extend `PlaceholderImage` to accept an `src` prop (already wired in
 * this component). Until then the brand-tinted SVG fallbacks render.
 */
export async function BeforeAfter() {
  const t = await getTranslations("BeforeAfter");
  const cases = (t.raw("cases") as Omit<CaseItem, "slug">[]).map(
    (c, i) => ({ ...c, slug: SLUGS[i] ?? `case-${i + 1}` })
  );

  return (
    <section
      id="before-after"
      className="relative bg-cream py-20 sm:py-28"
      aria-labelledby="before-after-title"
    >
      <Container>
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-eyebrow">
            <span className="h-px w-6 bg-eyebrow/50" />
            {t("eyebrow")}
            <span className="h-px w-6 bg-eyebrow/50" />
          </p>
          <h2
            id="before-after-title"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-body">{t("subtitle")}</p>
        </header>

        <ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
          role="list"
        >
          {cases.map((c) => (
            <li
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-xs ring-1 ring-line/50 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Grid flips naturally with parent dir: in /fa RTL the "بعد" tile
                  appears on the visual-start (right) and "قبل" on the visual-end. */}
              <div className="grid grid-cols-2 divide-x divide-line/60 rtl:divide-x-reverse">
                <div className="relative">
                  <PlaceholderImage
                    label={`Before — ${c.treatment}`}
                    tone="soft"
                    kind="service"
                    aspect="aspect-[4/5]"
                    src={`/images/before-after/${c.slug}-before.jpg`}
                    className="rounded-none"
                  />
                  <span className="absolute start-3 top-3 inline-flex items-center rounded-full bg-surface/85 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-ink shadow-xs ring-1 ring-line/40 backdrop-blur">
                    {t("before")}
                  </span>
                </div>
                <div className="relative">
                  <PlaceholderImage
                    label={`After — ${c.treatment}`}
                    tone="warm"
                    kind="service"
                    aspect="aspect-[4/5]"
                    src={`/images/before-after/${c.slug}-after.jpg`}
                    className="rounded-none"
                  />
                  <span className="absolute end-3 top-3 inline-flex items-center rounded-full bg-ink px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-cream shadow-xs">
                    {t("after")}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink">
                    {c.treatment}
                  </h3>
                  <span className="rounded-full bg-cream-soft px-3 py-1 text-xs font-medium text-eyebrow ring-1 ring-line/40">
                    {c.duration}
                  </span>
                </div>
                <p className="text-sm leading-6 text-body">{c.summary}</p>
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep transition hover:text-gold"
                >
                  {t("viewDetail")}
                  <ArrowLeftIcon size={14} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
