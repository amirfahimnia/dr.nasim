"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { ArrowIcon, ArrowRightIcon } from "@/design-system/icons";

export interface RailItem {
  slug: string;
  image: string;
  title: string;
  tagline: string;
  category: string;
}

interface ServicesRailProps {
  items: RailItem[];
  locale: string;
}

/** Pointer travel (px) before a press is treated as a drag, not a click. */
const DRAG_THRESHOLD = 6;

export function ServicesRail({ items, locale }: ServicesRailProps) {
  const t = useTranslations("Services");
  const trackRef = React.useRef<HTMLUListElement | null>(null);
  const dragRef = React.useRef({
    /** press started, waiting to cross the drag threshold */
    pending: false,
    /** threshold crossed — the rail owns the pointer now */
    active: false,
    startX: 0,
    startScroll: 0,
    moved: 0
  });

  const [dragging, setDragging] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  /**
   * Progress along the rail (0 → 1), measured from the physical position of
   * the first card so it behaves the same in LTR and RTL and across the
   * differing scrollLeft conventions.
   */
  const updateProgress = React.useCallback(() => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;

    const max = el.scrollWidth - el.clientWidth;
    if (max <= 1) {
      setProgress(1);
      return;
    }

    const elRect = el.getBoundingClientRect();
    const cardRect = first.getBoundingClientRect();
    const rtl = getComputedStyle(el).direction === "rtl";
    const offset = rtl
      ? cardRect.right - elRect.right
      : elRect.left - cardRect.left;

    const next = Math.min(1, Math.max(0, offset / max));
    setProgress((prev) =>
      Math.abs(prev - next) < 0.002 ? prev : next
    );
  }, []);

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateProgress();
    const observer = new ResizeObserver(() => updateProgress());
    observer.observe(el);
    window.addEventListener("resize", updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  // Mouse drag only — touch and trackpads keep native horizontal scrolling.
  // Capture is taken only once the pointer travels past DRAG_THRESHOLD, so a
  // plain press still delivers its click to the card link underneath.
  const onPointerDown = (event: React.PointerEvent<HTMLUListElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const el = trackRef.current;
    if (!el) return;

    dragRef.current = {
      pending: true,
      active: false,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      moved: 0
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;
    const el = trackRef.current;
    if (!el || (!drag.pending && !drag.active)) return;

    const delta = event.clientX - drag.startX;

    if (!drag.active) {
      if (Math.abs(delta) <= DRAG_THRESHOLD) return;
      drag.pending = false;
      drag.active = true;
      try {
        el.setPointerCapture(event.pointerId);
      } catch {
        /* capture is an enhancement — dragging still works without it */
      }
      setDragging(true);
      window.getSelection()?.removeAllRanges();
    }

    drag.moved = Math.max(drag.moved, Math.abs(delta));
    el.scrollLeft = drag.startScroll - delta;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLUListElement>) => {
    const drag = dragRef.current;
    const el = trackRef.current;

    if (!drag.active) {
      drag.pending = false;
      return;
    }

    drag.active = false;
    drag.pending = false;
    setDragging(false);
    if (el?.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  // A drag must not also fire the card link underneath the pointer.
  const onClickCapture = (event: React.MouseEvent) => {
    if (dragRef.current.moved > DRAG_THRESHOLD) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.moved = 0;
    }
  };

  return (
    <div className="services__rail-wrap">
      <ul
        ref={trackRef}
        role="list"
        onScroll={updateProgress}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        className={
          dragging ? "services__rail services__rail--dragging" : "services__rail"
        }
      >
        {items.map((item) => (
          <li key={item.slug} className="services__card">
            <Link
              href={`/${locale}/treatments/${item.slug}`}
              className="services__card-link"
              draggable={false}
            >
              <span className="services__card-media">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  draggable={false}
                  sizes="(max-width: 760px) 76vw, (max-width: 1100px) 40vw, 32vw"
                  className="services__card-img"
                />
                <span className="services__card-scrim" aria-hidden />
                <span className="services__card-category">
                  {item.category}
                </span>
                <span
                  aria-hidden
                  className="services__card-arrow services__card-arrow--light"
                >
                  <ArrowIcon size={16} />
                </span>
              </span>

              <span className="services__card-body">
                <span className="services__card-title">{item.title}</span>
                <span className="services__card-tagline">{item.tagline}</span>
                <span className="services__card-more">
                  {t("explore")}
                  <ArrowRightIcon size={14} />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* The horizontal line the cards ride on — fill mirrors scroll progress */}
      <div className="services__line" aria-hidden>
        <span
          className="services__line-fill"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
