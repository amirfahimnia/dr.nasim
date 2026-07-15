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
      className="testimonials"
      aria-labelledby="testimonials-title"
    >
      <Container>
        <header className="testimonials__header">
          <p className="testimonials__eyebrow">
            <span className="testimonials__eyebrow-rule" />
            {t("eyebrow")}
            <span className="testimonials__eyebrow-rule" />
          </p>
          <h2 id="testimonials-title" className="testimonials__title">
            {t("title")}
          </h2>
          <p className="testimonials__subtitle">{t("subtitle")}</p>
        </header>

        <div className="testimonials__list">
          {items.map((item, idx) => (
            <figure
              key={item.name}
              className="testimonials__card"
            >
              <QuoteIcon
                size={28}
                className="testimonials__quote-icon"
                strokeWidth={1.4}
              />
              <blockquote className="testimonials__quote">
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="testimonials__byline">
                <div className="testimonials__author">
                  <p className="testimonials__author-name">
                    {item.name}
                  </p>
                  <p className="testimonials__author-role">{item.role}</p>
                </div>
                <span className="testimonials__index" aria-hidden>
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
