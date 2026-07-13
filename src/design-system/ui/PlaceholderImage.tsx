import * as React from "react";
import { cn } from "@/lib/cn";

type PlaceholderTone = "warm" | "soft" | "ink" | "rose";
type PlaceholderKind = "portrait" | "service" | "abstract";

export interface PlaceholderImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Caption for screen-readers (also shown as elegant italic text). */
  label?: string;
  /** Visual tone. */
  tone?: PlaceholderTone;
  /** Which motif to draw. */
  kind?: PlaceholderKind;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[4/5]", "aspect-square". */
  aspect?: string;
  /** Optional small chip-style category (e.g. service name). */
  badge?: string;
}

const palettes: Record<
  PlaceholderTone,
  { a: string; b: string; ink: string; rim: string }
> = {
  warm: {
    a: "#f1ebe2",
    b: "#e8ddd0",
    ink: "#b4874f",
    rim: "#d4af7f"
  },
  soft: {
    a: "#fbf7f2",
    b: "#f1ebe2",
    ink: "#8aa68e",
    rim: "#c8d6cb"
  },
  ink: {
    a: "#3a342f",
    b: "#2b2622",
    ink: "#d4af7f",
    rim: "#6f6358"
  },
  rose: {
    a: "#f6e4d6",
    b: "#ecd6c3",
    ink: "#b8763e",
    rim: "#d4af7f"
  }
};

function Portrait({ ink, rim }: { ink: string; rim: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      className="h-full w-full"
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
      {/* Subtle frame */}
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
      {/* Abstract portrait silhouette */}
      <g opacity="0.85">
        <ellipse cx="100" cy="92" rx="34" ry="40" fill={ink} fillOpacity="0.55" />
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
      {/* Light highlight on cheek */}
      <circle cx="115" cy="90" r="6" fill="#ffffff" fillOpacity="0.18" />
    </svg>
  );
}

function ServiceArt({
  ink,
  rim
}: {
  ink: string;
  rim: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
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
      {/* Abstract floral motif */}
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
      className="h-full w-full"
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
 * Elegant SVG-placeholder for portrait/photography slots while real
 * imagery is being prepared. Use the `label` slot to communicate what
 * the photo will depict; the rendered caption is purely decorative.
 */
export function PlaceholderImage({
  label,
  tone = "warm",
  kind = "portrait",
  aspect = "aspect-[4/5]",
  badge,
  className,
  ...props
}: PlaceholderImageProps) {
  const palette = palettes[tone];
  return (
    <div
      role="img"
      aria-label={label ?? "Photo placeholder"}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        aspect,
        className
      )}
      {...props}
    >
      {kind === "portrait" && <Portrait ink={palette.ink} rim={palette.rim} />}
      {kind === "service" && <ServiceArt ink={palette.ink} rim={palette.rim} />}
      {kind === "abstract" && <Abstract ink={palette.ink} rim={palette.rim} />}

      {badge ? (
        <span className="absolute start-3 top-3 inline-flex items-center rounded-full bg-surface/90 px-3 py-1 text-xs font-medium text-ink shadow-xs backdrop-blur">
          {badge}
        </span>
      ) : null}

      {label ? (
        <span className="absolute inset-x-0 bottom-0 block bg-gradient-to-t from-black/20 to-transparent px-4 py-3 text-xs italic text-surface/85">
          {label}
        </span>
      ) : null}
    </div>
  );
}
