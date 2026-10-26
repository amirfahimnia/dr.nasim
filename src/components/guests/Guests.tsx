import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Container } from "@/design-system/ui/Container";

const PHOTOS = [
  { src: "/images/celebs/ashkan-orojian.webp", alt: "Ashkan Orojian" },
  { src: "/images/celebs/baggheri.webp", alt: "Bagheri" },
  { src: "/images/celebs/elham-shabani.webp", alt: "Elham Shabani" },
  { src: "/images/celebs/elnaz-habibi.webp", alt: "Elnaz Habibi" },
  { src: "/images/celebs/farahbakhsh.webp", alt: "Farahbakhsh" },
  { src: "/images/celebs/majid-mozafari.webp", alt: "Majid Mozafari" },
  { src: "/images/celebs/shabnam-moghadammi.webp", alt: "Shabnam Moghadammi" },
  { src: "/images/celebs/saed-and-gloria-1.webp", alt: "Saed and Gloria" },
  { src: "/images/celebs/Hossein-Pourkarimi.webp", alt: "Hossein Pourkarimi" },
  { src: "/images/celebs/barbod-1.webp", alt: "Barbod" }
] as const;

/**
 * Dark band of guest portraits — real photographs from the practice, drifting
 * slowly. Replaces the placeholder before/after grid: it is honest about what
 * the practice can actually show today.
 */
export async function Guests() {
  const t = await getTranslations("Guests");
  const run = [...PHOTOS, ...PHOTOS];

  return (
    <section
      id="guests"
      className="guests"
      aria-labelledby="guests-title"
    >
      <Container>
        <header className="guests__header">
          <p className="eyebrow guests__eyebrow">{t("eyebrow")}</p>
          <h2 id="guests-title" className="guests__title">
            {t("title")}
          </h2>
          <p className="guests__subtitle">{t("subtitle")}</p>
        </header>
      </Container>

      <div className="guests__rail">
        <div className="guests__rail-track">
          {run.map((photo, i) => (
            <figure key={`${photo.src}-${i}`} className="guests__item">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={220}
                height={220}
                sizes="180px"
                className="guests__img"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
