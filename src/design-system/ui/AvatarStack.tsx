import * as React from "react";
import { cn } from "@/lib/cn";

export interface AvatarStackProps {
  /** Number of synthetic placeholder avatars to render (3–6 looks good). */
  count?: number;
  /** Optional size in px. */
  size?: number;
  className?: string;
}

const warmTones = ["#e9d4b8", "#d8b994", "#c8a47a", "#d4af7f", "#b4874f", "#ecd6c3"];

/**
 * Stacked decorative avatars used in social-proof clusters (e.g. hero
 * "patients" line). Synthetic SVGs keep the homepage clean while real
 * photography is being sourced. Each avatar is rimmed with the page
 * background to give the impression of overlapping circles.
 */
export function AvatarStack({
  count = 5,
  size = 36,
  className
}: AvatarStackProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: count }).map((_, i) => {
        const fill = warmTones[i % warmTones.length];
        return (
          <span
            key={i}
            className="relative inline-flex items-center justify-center rounded-full bg-cream shadow-xs ring-2 ring-cream"
            style={{
              width: size,
              height: size,
              // logical-positioning: negative margin end (right in LTR, left in RTL)
              marginInlineEnd: i === 0 ? 0 : -size * 0.32,
              zIndex: count - i
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 40 40" width={size} height={size}>
              <defs>
                <linearGradient id={`av-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={fill} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={fill} stopOpacity="0.55" />
                </linearGradient>
              </defs>
              <circle cx="20" cy="20" r="20" fill={`url(#av-${i})`} />
              <circle cx="20" cy="17" r="6.5" fill="#ffffff" fillOpacity="0.35" />
              <path
                d="M6 35 C 8 26, 14 22, 20 22 C 26 22, 32 26, 34 35 Z"
                fill="#ffffff"
                fillOpacity="0.25"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
