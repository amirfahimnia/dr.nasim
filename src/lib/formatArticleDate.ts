import type { Locale } from "@/content/clinic";

const LOCALE_TAGS: Record<Locale, string> = {
  fa: "fa-IR",
  en: "en-GB",
  de: "de-DE"
};

/** Format an ISO date (YYYY-MM-DD) for display in the given locale. */
export function formatArticleDate(isoDate: string, locale: Locale): string {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}
