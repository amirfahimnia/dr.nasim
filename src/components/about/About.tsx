import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { Button } from "@/design-system/ui/Button";
import { CheckIcon } from "@/design-system/icons";

type StatItem = { value: string; label: string };

export async function About() {
  const t = await getTranslations("About");
  const features = t.raw("features") as string[];
  const stats = t.raw("stats.items") as StatItem[];

  return (
    <section
      id="about"
      className="about"
      aria-labelledby="about-title"
    >
      {/* === Section backdrop === */}
      <Image
        src="/images/dr-nasim-about-bg.jpg"
        alt={t("imageAlt")}
        fill
        sizes="100vw"
        className="about__bg"
      />
      {/* Bottom ink wash — premium depth + stats-card contrast */}
      <div aria-hidden className="about__ink-wash" />

      {/* === Foreground: 12-col grid, text visual LEFT (RTL) + stats visual RIGHT ===
          `col-start-7` places text on visual LEFT in RTL (right in LTR).
          `col-start-1` places stats on visual RIGHT in RTL (left in LTR).
          `items-end` aligns the stats card's bottom edge with the text panel. */}
      <Container>
        <div className="about__grid">
          {/* TEXT — visual LEFT in RTL. Per-column cream/glass backdrop
              keeps it readable wherever the grid column lands. */}
          <div className="about__text-col">
            <div className="about__panel">
              <p className="about__eyebrow">
                <span className="about__eyebrow-rule" />
                {t("eyebrow")}
              </p>
              <h2 id="about-title" className="about__title">
                {t("title")}
              </h2>
              <p className="about__description">{t("description")}</p>

              <ul className="about__features" role="list">
                {features.map((feature) => (
                  <li key={feature} className="about__feature">
                    <span
                      className="about__feature-check"
                      aria-hidden
                    >
                      <CheckIcon size={12} />
                    </span>
                    <span className="about__feature-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="about__cta">
                <Button variant="gold" size="lg">
                  {t("cta")}
                </Button>
              </div>
            </div>
          </div>

          {/* STATS CARD — visual RIGHT in RTL, bottom-aligned via items-end */}
          <div className="about__stats-col">
            <ul
              dir="ltr"
              aria-label={t("stats.heading")}
              role="list"
              className="about__stats"
            >
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="about__stat"
                >
                  <span className="about__stat-value">
                    {stat.value}
                  </span>
                  <span className="about__stat-label">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
