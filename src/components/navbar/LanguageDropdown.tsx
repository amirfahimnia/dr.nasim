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

  // Dropdown stays open across re-renders until an item is picked, so we close
  // it before navigation begins rather than waiting for an effect.
  const onItemSelect = React.useCallback(() => setOpen(false), []);

  const current = LOCALE_META[currentLocale];

  return (
    <div ref={rootRef} className="relative">
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
          "inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm font-medium",
          "border border-line bg-surface/70 text-ink",
          "transition-colors hover:bg-cream-soft",
          "backdrop-blur-sm"
        )}
      >
        <GlobeIcon size={16} className="text-ink/70" />
        <span aria-hidden className="hidden leading-none sm:inline">
          {current.native}
        </span>
        <span
          aria-hidden
          className="inline leading-none font-semibold tracking-wider sm:hidden"
        >
          {current.code}
        </span>
        <ChevronDownIcon
          size={14}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={t("menuLabel")}
          className={cn(
            "absolute end-0 z-50 mt-2 w-56 origin-top-end",
            "overflow-hidden rounded-2xl bg-surface shadow-lg",
            "ring-1 ring-line animate-fade-up"
          )}
          style={{ animationDuration: "180ms" }}
        >
          <p className="px-4 pt-3 pb-1 text-[11px] font-medium uppercase tracking-wider text-muted">
            {t("current")}
          </p>
          <ul className="pb-1.5">
            {routing.locales.map((loc) => {
              const meta = LOCALE_META[loc];
              const isActive = loc === currentLocale;
              return (
                <li key={loc}>
                  <Link
                    href={pathname}
                    locale={loc}
                    onClick={onItemSelect}
                    role="menuitem"
                    aria-current={isActive ? "true" : undefined}
                    lang={meta.iso}
                    dir={loc === "fa" ? "rtl" : "ltr"}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-cream-soft text-ink"
                        : "text-body hover:bg-cream-soft hover:text-ink"
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "grid h-7 w-9 place-items-center rounded-md text-[10.5px] font-semibold tracking-wider",
                        isActive
                          ? "bg-gold/15 text-gold-deep ring-1 ring-gold/30"
                          : "bg-cream-soft text-ink/70"
                      )}
                    >
                      {meta.code}
                    </span>
                    <span className="flex-1 text-start font-medium">
                      {meta.native}
                    </span>
                    {isActive ? (
                      <CheckIcon size={16} className="text-gold-deep" />
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
