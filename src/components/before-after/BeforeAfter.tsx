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
      className="before-after"
      aria-labelledby="before-after-title"
    >
      <Container>
        <header className="before-after__header">
          <p className="before-after__eyebrow">
            <span className="before-after__eyebrow-rule" />
            {t("eyebrow")}
            <span className="before-after__eyebrow-rule" />
          </p>
          <h2 id="before-after-title" className="before-after__title">
            {t("title")}
          </h2>
          <p className="before-after__subtitle">{t("subtitle")}</p>
        </header>

        <ul className="before-after__list" role="list">
          {cases.map((c) => (
            <li key={c.slug} className="before-after__item">
              {/* Tile pair — the visual order between "before" and "after"
                  follows the document direction automatically. CSS handles
                  the divider via logical border-inline-start. */}
              <div className="before-after__pair">
                <div className="before-after__slot">
                  <PlaceholderImage
                    label={`Before — ${c.treatment}`}
                    tone="soft"
                    kind="service"
                    ratio="4/5"
                    src={`/images/before-after/${c.slug}-before.jpg`}
                    style={{ borderRadius: 0 }}
                  />
                  <span className="before-after__chip before-after__chip--before">
                    {t("before")}
                  </span>
                </div>
                <div className="before-after__slot">
                  <PlaceholderImage
                    label={`After — ${c.treatment}`}
                    tone="warm"
                    kind="service"
                    ratio="4/5"
                    src={`/images/before-after/${c.slug}-after.jpg`}
                    style={{ borderRadius: 0 }}
                  />
                  <span className="before-after__chip before-after__chip--after">
                    {t("after")}
                  </span>
                </div>
              </div>

              <div className="before-after__body">
                <div className="before-after__item-head">
                  <h3 className="before-after__item-title">
                    {c.treatment}
                  </h3>
                  <span className="before-after__item-duration">
                    {c.duration}
                  </span>
                </div>
                <p className="before-after__item-summary">{c.summary}</p>
                <a href="#contact" className="before-after__item-link">
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
