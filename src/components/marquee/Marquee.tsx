import { getTranslations } from "next-intl/server";

/**
 * Editorial word band — a slow horizontal ticker that separates the hero from
 * the service grid. Purely decorative (aria-hidden) and motion-safe.
 */
export async function Marquee() {
  const t = await getTranslations("Marquee");
  const words = (t.raw("words") as string[]) ?? [];
  const run = [...words, ...words];

  return (
    <div aria-hidden className="marquee">
      <div className="marquee__track">
        {[...run, ...run].map((word, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__word">{word}</span>
            <span className="marquee__sep">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
