"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type PlaceholderTone = "warm" | "soft" | "ink" | "rose";
type PlaceholderKind = "portrait" | "service" | "abstract";

export interface PlaceholderImageProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onError"> {
  /** Accessible label for the image (also rendered as small caption if no src). */
  label?: string;
  /** Visual tone used for the SVG fallback. */
  tone?: PlaceholderTone;
  /** Which motif to draw when no `src` is provided. */
  kind?: PlaceholderKind;
  /** CSS `aspect-ratio` value, e.g. "4/5", "5/4", "1/1". Defaults to 4/5. */
  ratio?: string;
  /** Optional small chip-style category (e.g. service name). */
  badge?: string;

  /**
   * Optional image URL. When provided, a Next/Image is rendered with native
   * lazy-load + responsive `sizes`. If the file is missing the slot falls back
   * to the brand SVG motif so the layout never looks broken.
   *
   * Drop real photography at /public/images/... and pass e.g.:
   *   src="/images/hero.jpg"
   *   src="/images/before-after/rejuvenation-before.jpg"
   */
  src?: string;
}

const palettes: Record<
  PlaceholderTone,
  { a: string; b: string; ink: string; rim: string }
> = {
  warm: { a: "#f1ebe2", b: "#e8ddd0", ink: "#b4874f", rim: "#d4af7f" },
  soft: { a: "#fbf7f2", b: "#f1ebe2", ink: "#8aa68e", rim: "#c8d6cb" },
  ink: { a: "#3a342f", b: "#2b2622", ink: "#d4af7f", rim: "#6f6358" },
  rose: { a: "#f6e4d6", b: "#ecd6c3", ink: "#b8763e", rim: "#d4af7f" }
};

const IS_DEV = process.env.NODE_ENV !== "production";

function Portrait({ ink, rim }: { ink: string; rim: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      className="placeholder-image__motif"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={rim} stopOpacity="0.45" />
          <stop offset="100%" stopColor={ink} stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect width="200" height="250" fill="url(#bg-grad)" />
      <rect
        x="14"
        y="14"
        width="172"
        height="222"
        fill="none"
        stroke={rim}
        strokeWidth="0.6"
        strokeOpacity="0.5"
        rx="6"
      />
      <g opacity="0.85">
        <ellipse
          cx="100"
          cy="92"
          rx="34"
          ry="40"
          fill={ink}
          fillOpacity="0.55"
        />
        <path
          d="M52 250 C 52 178, 78 142, 100 142 C 122 142, 148 178, 148 250 Z"
          fill={ink}
          fillOpacity="0.45"
        />
        <path
          d="M64 250 C 64 195, 80 172, 100 172 C 120 172, 136 195, 136 250 Z"
          fill={rim}
          fillOpacity="0.6"
        />
      </g>
      <circle cx="115" cy="90" r="6" fill="#ffffff" fillOpacity="0.18" />
    </svg>
  );
}

function ServiceArt({ ink, rim }: { ink: string; rim: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="placeholder-image__motif"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="svc-grad" cx="0.5" cy="0.4" r="0.7">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor={rim} stopOpacity="0.25" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#svc-grad)" />
      <g opacity="0.7" fill="none" stroke={ink} strokeWidth="0.9">
        <circle cx="100" cy="100" r="42" />
        <circle cx="100" cy="100" r="28" />
        <circle cx="100" cy="100" r="14" />
      </g>
      <g opacity="0.45" fill={ink}>
        <circle cx="100" cy="58" r="6" />
        <circle cx="142" cy="100" r="6" />
        <circle cx="100" cy="142" r="6" />
        <circle cx="58" cy="100" r="6" />
      </g>
    </svg>
  );
}

function Abstract({ ink, rim }: { ink: string; rim: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="placeholder-image__motif"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="abs-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={rim} stopOpacity="0.5" />
          <stop offset="100%" stopColor={ink} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#abs-grad)" />
      <path
        d="M0 160 C 60 130, 100 150, 200 100 L 200 200 L 0 200 Z"
        fill={ink}
        fillOpacity="0.18"
      />
      <path
        d="M0 180 C 70 160, 130 175, 200 130 L 200 200 L 0 200 Z"
        fill={rim}
        fillOpacity="0.35"
      />
    </svg>
  );
}

/**
 * Image slot for sections that need photography.
 *
 * Two modes:
 *  1. `src` provided  → renders <next/image fill /> (lazy, responsive).
 *     If the asset 404s, swaps to the brand SVG motif so layouts never break.
 *  2. `src` undefined → renders the SVG motif directly.
 *
 * In development builds a tiny chip shows the public drop-in path as an
 * editor hint. That chip is removed from production via NODE_ENV check.
 */
export function PlaceholderImage({
  label,
  tone = "warm",
  kind = "portrait",
  ratio = "4/5",
  badge,
  src,
  className,
  style,
  ...props
}: PlaceholderImageProps) {
  const palette = palettes[tone];
  const [errored, setErrored] = React.useState(false);
  const showImg = Boolean(src) && !errored;

  return (
    <div
      role={showImg ? undefined : "img"}
      aria-label={label ?? "Photo placeholder"}
      className={cn("placeholder-image", className)}
      style={{ aspectRatio: ratio, ...style }}
      {...props}
    >
      {showImg ? (
        <Image
          src={src ?? ""}
          alt={label ?? ""}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setErrored(true)}
          className="placeholder-image__img"
        />
      ) : kind === "portrait" ? (
        <Portrait ink={palette.ink} rim={palette.rim} />
      ) : kind === "service" ? (
        <ServiceArt ink={palette.ink} rim={palette.rim} />
      ) : (
        <Abstract ink={palette.ink} rim={palette.rim} />
      )}

      {badge ? (
        <span className="placeholder-image__badge">{badge}</span>
      ) : null}

      {!showImg && label ? (
        <span className="placeholder-image__caption">{label}</span>
      ) : null}

      {IS_DEV && src ? (
        <span aria-hidden className="placeholder-image__dev-path">
          {src.replace(/^\/images\//, "")}
        </span>
      ) : null}
    </div>
  );
}
