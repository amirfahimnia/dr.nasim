"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { brand } from "@/design-system/tokens";
import { cn } from "@/lib/cn";
import { CloseIcon, MenuIcon } from "@/design-system/icons";
import { BookingCTA } from "@/components/navbar/BookingCTA";
import { LanguageDropdown } from "@/components/navbar/LanguageDropdown";

const NAV_KEYS = [
  "services",
  "results",
  "articles",
  "about",
  "contact"
] as const;

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
    return `/${locale}#${key}`;
  };

  const isActive = (key: (typeof NAV_KEYS)[number]) => {
    if (key === "services") return pathname === `/${locale}#services`;
    return pathname.includes(`#${key}`);
  };

  return (
    <header className={cn("navbar", scrolled && "navbar--scrolled")}>
      <div className="navbar__inner">
        <Link
          href={`/${locale}`}
          className="navbar__brand"
          aria-label={brand.name}
        >
          <Image
            src="/images/logo.svg"
            alt=""
            width={80}
            height={54}
            unoptimized
            priority
            className="navbar__brand-logo"
          />
          <span className="navbar__brand-name">{tBrand("brand")}</span>
        </Link>

        {/* Nav items — desktop */}
        <nav className="navbar__nav" aria-label="Primary">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              href={hrefFor(key)}
              className={cn(
                "navbar__nav-item",
                isActive(key) && "navbar__nav-item--active"
              )}
            >
              {t(`items.${key}`)}
            </Link>
          ))}
        </nav>

        {/* End-side cluster: language dropdown + appointment button + mobile hamburger */}
        <div className="navbar__actions">
          <LanguageDropdown />
          <BookingCTA />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="navbar__hamburger"
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
        <div id="primary-mobile-nav" className="navbar__drawer">
          <div className="navbar__drawer-card">
            <nav
              className="navbar__drawer-list"
              aria-label="Primary mobile"
            >
              {NAV_KEYS.map((key) => (
                <Link
                  key={key}
                  href={hrefFor(key)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "navbar__drawer-item",
                    isActive(key) && "navbar__drawer-item--active"
                  )}
                >
                  {t(`items.${key}`)}
                </Link>
              ))}
            </nav>

            {/* Bottom CTA — booking */}
            <div className="navbar__drawer-cta">
              <BookingCTA size="md" onClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
