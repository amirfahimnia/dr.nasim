"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { brand } from "@/design-system/tokens";
import { cn } from "@/lib/cn";
import {
  CalendarIcon,
  CloseIcon,
  MenuIcon
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


        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 lg:order-first"
          aria-label={brand.name}
        >
          <Image
            src="/images/logo.svg"
            alt=""
            width={80}
            height={54}
            unoptimized
            priority
            className="h-9 sm:h-10 w-auto"
          />
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

        {/* End-side cluster: language dropdown + appointment button + mobile hamburger */}
        <div className="flex items-center gap-2">
          <LanguageDropdown />
          <a
            href="#contact"
            aria-label={t("bookAppointment")}
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-cyan px-3 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-cyan-deep hover:shadow-md active:scale-[0.97] sm:gap-2 sm:px-4 sm:text-sm"
          >
            <CalendarIcon size={16} />
            <span className="leading-none">{t("shortBookAppointment")}</span>
          </a>
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

          </div>
        </div>
      ) : null}
    </header>
  );
}
