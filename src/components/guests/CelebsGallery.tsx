"use client";

import * as React from "react";
import Image from "next/image";

import { ArrowIcon, ArrowLeftIcon, CloseIcon } from "@/design-system/icons";

export type CelebItem = {
  /** Square 600×600 thumbnail used in the grid. */
  image: string;
  /** Full-size original shown in the lightbox. */
  full: string;
  name: string;
  alt: string;
};

type CelebsGalleryProps = {
  items: CelebItem[];
  labels: { close: string; prev: string; next: string };
};

/**
 * Photo grid that opens a simple lightbox: the full original image with the
 * guest's name, prev/next arrows, Esc to close, backdrop click to close.
 */
export function CelebsGallery({ items, labels }: CelebsGalleryProps) {
  const [index, setIndex] = React.useState<number | null>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const lastFocused = React.useRef<HTMLElement | null>(null);

  const close = React.useCallback(() => setIndex(null), []);
  const goPrev = React.useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + items.length) % items.length
      ),
    [items.length]
  );
  const goNext = React.useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );

  /* Keyboard + scroll lock while open, focus the close button */
  React.useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [index, close, goPrev, goNext]);

  /* Return focus to the thumbnail that opened the lightbox */
  React.useEffect(() => {
    if (index === null) {
      lastFocused.current?.focus();
      lastFocused.current = null;
    }
  }, [index]);

  const open = (i: number) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setIndex(i);
  };

  const item = index === null ? null : items[index];

  return (
    <>
      <ul className="celebs__grid" role="list">
        {items.map((celeb, i) => (
          <li key={celeb.image} className="celebs__item">
            <button
              type="button"
              className="celebs__card"
              onClick={() => open(i)}
              aria-label={`${celeb.name} — ${celeb.alt}`}
            >
              <span className="celebs__media">
                <Image
                  src={celeb.image}
                  alt={celeb.alt}
                  width={600}
                  height={600}
                  sizes="(max-width: 640px) 50vw, (max-width: 1099px) 33vw, 25vw"
                  className="celebs__img"
                />
                <span aria-hidden className="celebs__scrim" />
                <span className="celebs__caption">
                  <span aria-hidden className="celebs__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="celebs__name">{celeb.name}</span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {item && index !== null ? (
        <div
          className="celebs__modal"
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="celebs__modal-close"
            aria-label={labels.close}
            onClick={close}
          >
            <CloseIcon size={20} />
          </button>

          <button
            type="button"
            className="celebs__modal-nav celebs__modal-nav--prev"
            aria-label={labels.prev}
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ArrowLeftIcon size={20} className="flip-rtl" />
          </button>

          <figure
            className="celebs__modal-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.full}
              alt={item.alt}
              width={1280}
              height={1280}
              sizes="90vw"
              className="celebs__modal-img"
              priority
            />
            <figcaption className="celebs__modal-caption">
              <span aria-hidden className="celebs__modal-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="celebs__modal-name">{item.name}</span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="celebs__modal-nav celebs__modal-nav--next"
            aria-label={labels.next}
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ArrowIcon size={20} className="flip-rtl" />
          </button>
        </div>
      ) : null}
    </>
  );
}
