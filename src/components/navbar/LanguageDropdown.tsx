"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import {
  CheckIcon,
  ChevronDownIcon,
  GlobeIcon
} from "@/design-system/icons";

/**
 * Native-script labels per locale. These are culture-anchored, NOT translated —
 * they appear identical across every page UI so users always see their language
 * rendered correctly (e.g. Persian on the German page reads "فارسی").
 */
const LOCALE_META: Record<
  Locale,
  { native: string; code: "FA" | "EN" | "DE"; iso: string }
> = {
  fa: { native: "فارسی", code: "FA", iso: "fa-IR" },
  en: { native: "English", code: "EN", iso: "en-GB" },
  de: { native: "Deutsch", code: "DE", iso: "de-DE" }
};

export function LanguageDropdown() {
  const t = useTranslations("Navigation.languageDropdown");
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname() ?? "/";

  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  // Dropdown stays open across re-renders until an item is picked, so we
  // close it before navigation begins rather than waiting for an effect.
  const onItemSelect = React.useCallback(() => setOpen(false), []);

  const current = LOCALE_META[currentLocale];

  return (
    <div ref={rootRef} className="language-dropdown">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("label")}
        lang={current.iso}
        dir={currentLocale === "fa" ? "rtl" : "ltr"}
        className={cn(
          "language-dropdown__trigger",
          open && "language-dropdown__trigger--open"
        )}
      >
        <GlobeIcon
          size={16}
          className="language-dropdown__trigger-icon"
        />
        <span aria-hidden className="language-dropdown__trigger-name">
          {current.native}
        </span>
        <span aria-hidden className="language-dropdown__trigger-code">
          {current.code}
        </span>
        <ChevronDownIcon
          size={14}
          className="language-dropdown__trigger-caret"
        />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={t("menuLabel")}
          className="language-dropdown__menu"
        >
          <p className="language-dropdown__menu-eyebrow">{t("current")}</p>
          <ul className="language-dropdown__list">
            {routing.locales.map((loc) => {
              const meta = LOCALE_META[loc];
              const isActive = loc === currentLocale;
              return (
                <li key={loc} className="language-dropdown__item">
                  <Link
                    href={pathname}
                    locale={loc}
                    onClick={onItemSelect}
                    role="menuitem"
                    aria-current={isActive ? "true" : undefined}
                    lang={meta.iso}
                    dir={loc === "fa" ? "rtl" : "ltr"}
                    className={cn(
                      "language-dropdown__option",
                      isActive && "language-dropdown__option--active"
                    )}
                  >
                    <span
                      aria-hidden
                      className="language-dropdown__option-code"
                    >
                      {meta.code}
                    </span>
                    <span className="language-dropdown__option-name">
                      {meta.native}
                    </span>
                    {isActive ? (
                      <CheckIcon
                        size={16}
                        className="language-dropdown__option-check"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
