"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { brand } from "@/design-system/tokens";
import { cn } from "@/lib/cn";
import {
  CloseIcon,
  MenuIcon,
  PhoneIcon
} from "@/design-system/icons";
import { LanguageDropdown } from "@/components/navbar/LanguageDropdown";

const NAV_KEYS = ["home", "services", "results", "articles", "about", "contact"] as const;

export function Navbar() {
  const t = useTranslations("Navigation");
  const tBrand = useTranslations("Navigation"); // same ns
  const locale = useLocale();
  const pathname = usePathname() ?? "";

  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer open
  React.useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const hrefFor = (key: (typeof NAV_KEYS)[number]) => {
    const slug =
      key === "home" ? "" : key === "services" ? "#services" : `#${key}`;
    return `/${locale}${slug}`;
  };

  const isActive = (key: (typeof NAV_KEYS)[number]) => {
    if (key === "home") return pathname === `/${locale}`;
    return pathname.includes(`#${key}`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-xs border-b border-line/40"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Phone CTA — visual left on LTR, right on RTL */}
        <a
          href={`tel:${brand.phone.tel}`}
          className="hidden items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-surface shadow-sm transition hover:bg-sage-deep hover:shadow-md sm:inline-flex"
          aria-label={brand.phone.display}
        >
          <PhoneIcon size={16} />
          <span dir="ltr">{brand.phone.display}</span>
        </a>

        {/* Brand logo — always centred on mobile, right-of-nav on desktop */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 lg:order-first"
          aria-label={brand.name}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 ring-1 ring-gold/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-deep" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2c5 4 7 8 7 11a7 7 0 1 1-14 0c0-3 2-7 7-11Zm0 5.5c-2 3-3 5.5-3 7a3 3 0 0 0 6 0c0-1.5-1-4-3-7Z"
              />
            </svg>
          </span>
          <span className="hidden text-[15px] font-semibold text-ink sm:inline">
            {tBrand("brand")}
          </span>
        </Link>

        {/* Nav items — desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={hrefFor(key)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                isActive(key)
                  ? "bg-cream-soft text-ink font-medium"
                  : "text-body hover:text-ink hover:bg-cream-soft/70"
              )}
            >
              {t(`items.${key}`)}
            </Link>
          ))}
        </nav>

        {/* End-side cluster: language dropdown + mobile hamburger */}
        <div className="flex items-center gap-2">
          <LanguageDropdown />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-soft text-ink lg:hidden"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls="primary-mobile-nav"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div
          id="primary-mobile-nav"
          className="absolute inset-x-0 top-full lg:hidden"
        >
          <div className="mx-4 mt-2 overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-line/60">
            <nav className="flex flex-col p-2" aria-label="Primary mobile">
              {NAV_KEYS.map((key) => (
                <Link
                  key={key}
                  href={hrefFor(key)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base transition-colors",
                    isActive(key)
                      ? "bg-cream-soft text-ink font-medium"
                      : "text-body hover:bg-cream-soft"
                  )}
                >
                  {t(`items.${key}`)}
                </Link>
              ))}
            </nav>
            <div className="border-t border-line/60 p-3">
              <a
                href={`tel:${brand.phone.tel}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-medium text-surface"
              >
                <PhoneIcon size={16} />
                <span dir="ltr">{brand.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
