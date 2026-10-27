"use client";

import * as React from "react";

import {
  ArrowIcon,
  ArrowLeftIcon,
  CalendarIcon
} from "@/design-system/icons";
import { cn } from "@/lib/cn";

/**
 * Persian (Solar Hijri) date picker for the `fa` locale.
 *
 * The native `input[type=date]` follows the visitor's *browser* language, so a
 * Persian-speaking visitor with an English browser gets a Gregorian calendar.
 * This picker builds the month grid from `Intl` with the `fa-IR` locale
 * (Persian calendar by default) — no date library needed.
 *
 * The value stays a Gregorian ISO string (`YYYY-MM-DD`), so validation, the
 * recap and the WhatsApp message upstream are untouched.
 */

type PersianParts = { y: number; m: number; d: number };

/** Gregorian date → Persian calendar parts, with Latin digits for parsing. */
const FA_LATN = new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
  year: "numeric",
  month: "numeric",
  day: "numeric"
});

const FA_MONTH = new Intl.DateTimeFormat("fa-IR", { month: "long" });

const FA_DATE_LONG = new Intl.DateTimeFormat("fa-IR", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

const FA_DATE_FULL = new Intl.DateTimeFormat("fa-IR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

const FA_NUM = new Intl.NumberFormat("fa-IR");

/** The Iranian week starts on Saturday (getDay() === 6). */
const WEEKDAYS = (() => {
  const saturday = new Date();
  saturday.setHours(12, 0, 0, 0);
  saturday.setDate(saturday.getDate() + ((6 - saturday.getDay() + 7) % 7));
  return Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat("fa-IR", { weekday: "short" }).format(
      addDays(saturday, index)
    )
  );
})();

/** Friday — the practice is closed (Saturday to Thursday only). */
const CLOSED_WEEKDAY = 5;

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function toISO(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function fromISO(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year || 1970, (month || 1) - 1, day || 1);
}

function persian(date: Date): PersianParts {
  let year = 0;
  let month = 0;
  let day = 0;

  for (const part of FA_LATN.formatToParts(date)) {
    if (part.type === "year") year = Number(part.value);
    if (part.type === "month") month = Number(part.value);
    if (part.type === "day") day = Number(part.value);
  }

  return { y: year, m: month, d: day };
}

const startCache = new Map<string, Date>();

/** Gregorian date of day 1 of a Persian month (found by scanning from ~Nowruz). */
function monthStart(year: number, month: number) {
  const cacheKey = `${year}-${month}`;
  const cached = startCache.get(cacheKey);
  if (cached) return cached;

  const target = year * 10000 + month * 100 + 1;
  // Persian year Y starts around 21 March of Gregorian year Y + 621, so
  // 1 March is always still in the previous (Esfand) month.
  let cursor = new Date(year + 621, 2, 1);

  for (let guard = 0; guard < 400; guard += 1) {
    const p = persian(cursor);
    if (p.y * 10000 + p.m * 100 + p.d >= target) break;
    cursor = addDays(cursor, 1);
  }

  startCache.set(cacheKey, cursor);
  return cursor;
}

function daysInMonth(year: number, month: number) {
  const start = monthStart(year, month);
  const nextYear = month === 12 ? year + 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const next = monthStart(nextYear, nextMonth);

  let count = 0;
  let cursor = start;
  while (toISO(cursor) !== toISO(next) && count < 32) {
    cursor = addDays(cursor, 1);
    count += 1;
  }
  return count;
}

function shiftMonth(year: number, month: number, delta: number) {
  const absolute = year * 12 + (month - 1) + delta;
  return { y: Math.floor(absolute / 12), m: (absolute % 12) + 1 };
}

export function PersianDatePicker({
  value,
  min,
  max,
  placeholder,
  invalid,
  onChange
}: {
  value: string;
  min: string;
  max: string;
  placeholder: string;
  invalid?: boolean;
  onChange: (iso: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(() => {
    const current = value ? persian(fromISO(value)) : persian(new Date());
    return { y: current.y, m: current.m };
  });
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

  const grid = React.useMemo(() => {
    const start = monthStart(view.y, view.m);
    const total = daysInMonth(view.y, view.m);
    // Column offset: Saturday = 0 … Friday = 6.
    const offset = (start.getDay() + 1) % 7;
    const todayISO = toISO(new Date());

    const days = Array.from({ length: total }, (_, index) => {
      const date = addDays(start, index);
      const iso = toISO(date);
      return {
        iso,
        label: FA_NUM.format(index + 1),
        full: FA_DATE_FULL.format(date),
        closed: date.getDay() === CLOSED_WEEKDAY,
        past: iso < min,
        future: iso > max,
        today: iso === todayISO,
        selected: iso === value
      };
    });

    return { start, offset, days };
  }, [view, value, min, max]);

  const monthLabel = `${FA_MONTH.format(grid.start)} ${FA_NUM.format(view.y)}`;
  const selectedLabel = value ? FA_DATE_LONG.format(fromISO(value)) : "";

  const select = (iso: string) => {
    onChange(iso);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className="booking__date" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        data-invalid={invalid ? "" : undefined}
        onClick={() => setOpen((current) => !current)}
        className="booking__input booking__date-trigger"
      >
        <span
          className={cn(
            !value && "booking__date-placeholder"
          )}
        >
          {selectedLabel || placeholder}
        </span>
        <CalendarIcon size={16} />
      </button>

      {open ? (
        <div className="booking__calendar" role="dialog" aria-label={monthLabel}>
          <div className="booking__calendar-head">
            <span className="booking__calendar-label">{monthLabel}</span>
            <span className="booking__calendar-nav">
              <button
                type="button"
                aria-label="ماه قبل"
                onClick={() =>
                  setView((current) => shiftMonth(current.y, current.m, -1))
                }
              >
                <ArrowLeftIcon size={14} className="flip-rtl" />
              </button>
              <button
                type="button"
                aria-label="ماه بعد"
                onClick={() =>
                  setView((current) => shiftMonth(current.y, current.m, 1))
                }
              >
                <ArrowIcon size={14} className="flip-rtl" />
              </button>
            </span>
          </div>

          <div className="booking__weekdays" aria-hidden="true">
            {WEEKDAYS.map((day) => (
              <span key={day} className="booking__weekday">
                {day}
              </span>
            ))}
          </div>

          <div className="booking__days">
            {Array.from({ length: grid.offset }, (_, index) => (
              <span
                key={`offset-${index}`}
                className="booking__day booking__day--empty"
                aria-hidden="true"
              />
            ))}

            {grid.days.map((day) => {
              const disabled = day.closed || day.past || day.future;
              return (
                <button
                  key={day.iso}
                  type="button"
                  disabled={disabled}
                  aria-pressed={day.selected}
                  aria-label={day.full}
                  className={cn(
                    "booking__day",
                    day.today && "booking__day--today",
                    day.selected && "booking__day--selected"
                  )}
                  onClick={() => select(day.iso)}
                >
                  {day.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
