import { getTranslations, getLocale } from "next-intl/server";

import { Container } from "@/design-system/ui/Container";
import { brand } from "@/design-system/tokens";
import Image from "next/image";
import {
  PhoneIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  CalendarIcon,
  ArrowLeftIcon
} from "@/design-system/icons";
import { cn } from "@/lib/cn";

const NAV_KEYS = [
  "services",
  "results",
  "articles",
  "about",
  "contact"
] as const;

const MARQUEE_KEYS = [
  "label1",
  "label2",
  "label3",
  "label4",
  "label5"
] as const;

/**
 * The "Signature" footer — an editorial closing panel rather than a generic
 * 4-column sitemap. Four visual moments stacked top → bottom:
 *
 *   1. Marquee strip — slow horizontal ticker of brand words (loops seamlessly,
 *      reverses on RTL so reading direction still feels native in Persian).
 *   2. Asymmetric hero — oversized display statement on the left, an elevated
 *      glassmorphic reservation card on the right, both lit by aurora orbs.
 *   3. Information grid — brand mark, address/hours as elegant cards, quick
 *      links + social pills (no boring `ul/ul/ul` columns).
 *   4. Fine-print bar with animated back-to-top affordance.
 *
 * Background is the existing ink surface but layered with:
 *   - three drifting radial orbs in nasim-purple + gold (very slow, motion-safe),
 *   - subtle CSS film-grain for a print-like feel.
 * All decorative layers are aria-hidden and pointer-events-none.
 */
export async function Footer() {
  const tNav = await getTranslations("Navigation");
  const tF = await getTranslations("Footer");
  const tCommon = await getTranslations("Common");
  const locale = await getLocale();

  const year = new Date().getFullYear();
  const hrefFor = (key: (typeof NAV_KEYS)[number]) => `/${locale}#${key}`;
  const marqueeItems = MARQUEE_KEYS.map((k) => tF(`marquee.${k}`));

  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-ink text-cream"
      aria-labelledby="footer-heading"
    >
      {/* ── Decorative background ─────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Aurora orbs — slow, omnidirectional drift. Motion-safe via global
            prefers-reduced-motion media query. */}
        <div className="animate-orb-drift absolute -top-48 start-[-12%] h-[30rem] w-[30rem] rounded-full bg-[var(--color-nasim-purple)]/35 blur-[120px]" />
        <div
          className="animate-orb-drift absolute top-[28%] end-[-12%] h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-[140px]"
          style={{ animationDelay: "-9s", animationDuration: "32s" }}
        />
        <div
          className="animate-orb-drift absolute bottom-[-12%] start-[28%] h-[24rem] w-[24rem] rounded-full bg-[var(--color-nasim-purple-deep)]/45 blur-[130px]"
          style={{ animationDelay: "-18s", animationDuration: "38s" }}
        />

        {/* Print-style grain */}
        <div className="bg-grain absolute inset-0 opacity-60 mix-blend-overlay" />

        {/* Top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-soft/45 to-transparent" />
      </div>

      <h2 id="footer-heading" className="sr-only">
        {brand.name} — {tF("sections.navigation")}
      </h2>

      <Container>
        {/* ── 1. Marquee strip ────────────────────────────────────────────── */}
        <div
          aria-hidden
          className="-mx-5 sm:-mx-8 lg:-mx-12 mb-16 flex overflow-hidden border-y border-cream/10 py-5"
        >
          <div className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap px-6 will-change-transform">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 text-[13px] font-medium uppercase tracking-[0.22em] text-cream/55"
                >
                  <span className="text-[var(--color-nasim-purple)]/80">
                    ✦
                  </span>
                  <span>{item}</span>
                </span>
              )
            )}
          </div>
        </div>

        {/* ── 2. Signature hero ───────────────────────────────────────────── */}
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Oversized display statement */}
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-soft">
              <span className="block h-px w-10 bg-gold-soft/70" />
              <span>{tF("signature.eyebrow")}</span>
            </p>

            <p className="mt-6 font-semibold leading-[0.95] tracking-tight text-cream text-[clamp(2.75rem,7.2vw,5.75rem)]">
              {tF("signature.title")}
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-cream/85 sm:text-lg">
              {tF("signature.note")}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-nasim-purple)] px-7 py-4 text-base font-medium text-white shadow-lg shadow-[var(--color-nasim-purple-deep)]/30 transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-nasim-purple-deep)] hover:shadow-xl hover:shadow-[var(--color-nasim-purple-deep)]/40"
              >
                <CalendarIcon size={18} />
                <span>{tNav("bookAppointment")}</span>
                <ArrowLeftIcon
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1"
                />
              </a>
              <a
                href={`tel:${brand.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-6 py-4 text-base text-cream/90 transition-all duration-200 hover:border-gold-soft hover:bg-cream/5 hover:text-cream"
              >
                <PhoneIcon size={18} className="text-gold-soft" />
                <span dir="ltr">{brand.phone.display}</span>
              </a>
            </div>
          </div>

          {/* Glassmorphic reservation card */}
          <div className="lg:col-span-5">
            <div className="group/cta relative overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.07] p-7 shadow-[0_24px_60px_-32px_rgba(146,63,114,0.55)] backdrop-blur-md sm:p-8">
              {/* internal gradient wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-nasim-purple)]/30 via-transparent to-gold/15"
              />
              {/* a single hair-thin gold line top edge */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-soft/60 to-transparent"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-soft">
                {tF("reservationCard.eyebrow")}
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-cream sm:text-3xl">
                {tF("reservationCard.title")}
              </p>
              <p className="mt-3 text-sm leading-7 text-cream/80">
                {tF("reservationCard.note")}
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-cream/12 bg-cream/[0.07] px-4 py-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-nasim-purple)]/30 text-[var(--color-nasim-purple)] ring-1 ring-[var(--color-nasim-purple)]/50">
                  <PhoneIcon size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70">
                    {tF("reservationCard.phoneLabel")}
                  </p>
                  <p
                    dir="ltr"
                    className="text-base font-medium tracking-tight text-cream"
                  >
                    {brand.phone.display}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className={cn(
                  "group/cta mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-4 text-base font-medium text-ink shadow-sm transition-all duration-300 hover:bg-gold-soft hover:shadow-md"
                )}
              >
                <span>{tNav("bookAppointment")}</span>
                <ArrowLeftIcon
                  size={16}
                  className="transition-transform duration-300 group-hover/cta:-translate-x-1 rtl:group-hover/cta:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ── 3. Information grid ─────────────────────────────────────────── */}
        <div className="mt-24 grid gap-12 border-t border-cream/10 pt-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt=""
                width={80}
                height={54}
                unoptimized
                className="h-10 w-auto brightness-150 drop-shadow-[0_0_6px_rgba(248,244,239,0.2)]"
              />
              <span className="text-lg font-semibold tracking-tight text-cream">
                {brand.name}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-cream/70">
              {brand.tagline[locale as "fa" | "en" | "de"] ??
                brand.tagline.en}
            </p>
          </div>

          {/* Address + Hours as elegant stacked cards */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-soft">
              {tF("visitHeading")}
            </h3>
            <ul className="mt-5 space-y-3">
              <li className="rounded-2xl border border-cream/10 bg-cream/[0.05] px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-cream/25 hover:bg-cream/[0.08]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                  {tF("addressLabel")}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-cream/85">
                  {tF("address")}
                </p>
              </li>
              <li className="rounded-2xl border border-cream/10 bg-cream/[0.05] px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-cream/25 hover:bg-cream/[0.08]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                  {tF("hoursLabel")}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-cream/85">
                  {tF("hours")}
                </p>
              </li>
            </ul>
          </div>

          {/* Quick links + social pills */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-soft">
              {tF("exploreHeading")}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <a
                    href={hrefFor(key)}
                    className="inline-flex items-center gap-2 text-cream/85 transition-colors duration-200 hover:text-gold-soft"
                  >
                    <span className="flip-rtl text-[var(--color-nasim-purple)]/70">
                      →
                    </span>
                    <span>{tNav(`items.${key}`)}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {[
                {
                  href: brand.socials.instagram,
                  label: "Instagram",
                  icon: InstagramIcon
                },
                {
                  href: brand.socials.telegram,
                  label: "Telegram",
                  icon: TelegramIcon
                },
                {
                  href: brand.socials.whatsapp,
                  label: "WhatsApp",
                  icon: WhatsappIcon
                }
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-4 py-2.5 text-xs font-medium text-cream/85 backdrop-blur-sm transition-all duration-200 hover:scale-[1.02] hover:border-[var(--color-nasim-purple)]/60 hover:bg-[var(--color-nasim-purple)]/20 hover:text-cream"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ── 4. Fine print + back-to-top ──────────────────────────────────── */}
      <div className="mt-20 border-t border-cream/10">
        <Container>
          <div className="flex flex-col items-start gap-4 py-7 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-cream/70">
              © {year} {brand.name}. {tF("rights")}
            </p>
            <div className="flex items-center gap-6">
              <p>
                {tF("credit")} ·{" "}
                <span className="text-cream/80">Dr. Nasim Studio</span>
              </p>
              <a
                href="#home"
                aria-label={tCommon("backToTop")}
                className="group inline-flex items-center gap-2 rounded-full border border-cream/15 px-3.5 py-2 text-cream/85 transition-all duration-200 hover:border-gold-soft hover:bg-cream/5 hover:text-cream"
              >
                <span className="uppercase tracking-[0.18em]">
                  {tCommon("backToTop")}
                </span>
                <span
                  aria-hidden
                  className="grid h-5 w-5 place-items-center rounded-full bg-cream/10 transition-transform duration-300 group-hover:-translate-y-0.5"
                >
                  ↑
                </span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
