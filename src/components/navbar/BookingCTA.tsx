"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/cn";
import { CalendarIcon } from "@/design-system/icons";

type BookingCTASize = "sm" | "md";

interface BookingCTAProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: BookingCTASize;
}

/**
 * Locale-aware booking CTA. Plays `cta-attention-in` (a subtle scale +
 * cyan halo) exactly once on first intersection with the viewport. Reuses
 * the global `prefers-reduced-motion` media query to silence the
 * animation for users who opt out of motion.
 *
 * `sm` — header pill (h-9).
 * `md` — full-width drawer button (w-full).
 */
export function BookingCTA({
  className,
  onClick,
  size = "sm"
}: BookingCTAProps) {
  const t = useTranslations("Navigation");
  const ref = React.useRef<HTMLAnchorElement | null>(null);
  const firedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            el.classList.add("animate-cta-attention");
            io.disconnect();
          }
        }
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href="#contact"
      onClick={onClick}
      aria-label={t("bookAppointment")}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--color-cyan)] font-medium text-white shadow-sm",
        "transition-all duration-200 hover:bg-[var(--color-cyan-deep)] hover:shadow-md active:scale-[0.97]",
        size === "md"
          ? "w-full gap-2 px-4 py-3 text-base"
          : "h-9 px-3 text-xs sm:gap-2 sm:px-4 sm:text-sm",
        className
      )}
    >
      <CalendarIcon size={size === "md" ? 18 : 16} />
      <span className="leading-none">{t("shortBookAppointment")}</span>
    </a>
  );
}
