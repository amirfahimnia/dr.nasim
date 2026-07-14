import * as React from "react";
import { cn } from "@/lib/cn";

type IconProps = React.SVGAttributes<SVGElement> & {
  size?: number;
  strokeWidth?: number;
};

function withDefaults({
  size = 20,
  strokeWidth = 1.6,
  className,
  ...rest
}: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("shrink-0", className),
    "aria-hidden": true,
    ...rest
  };
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.29-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.57 2.79.7a2 2 0 0 1 1.72 2.03Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...withDefaults({ ...props, strokeWidth: 1.4 })}>
      <path d="M7 8h3v6H6V10a2 2 0 0 1 2-2Z" />
      <path d="M14 8h3v6h-4v-4a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M21.5 4.5L2.5 11.5l5.5 2 2.2 6 3.3-4 5 4 3-15Z" />
      <path d="M8 13.5l11-7" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <circle cx="12" cy="12" r="9.25" />
      <path d="M3 12h18" />
      <path d="M12 2.75c2.6 3 4 6 4 9.25s-1.4 6.25-4 9.25c-2.6-3-4-6-4-9.25s1.4-6.25 4-9.25Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  const p = withDefaults({ ...props, strokeWidth: props.strokeWidth ?? 1.8 });
  return (
    <svg {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-13.4 7L4 20l1.5-3a8.5 8.5 0 1 1 15-5.5Z" />
      <path d="M9 9.5c.3-.6.7-1 1.2-1 .4 0 .7.2 1 .7l.5 1.2c.1.3 0 .6-.3.9l-.5.6c.5.9 1.3 1.7 2.2 2.2l.6-.5c.3-.3.6-.4.9-.3l1.2.5c.5.3.7.6.7 1 0 .5-.4.9-1 1.2-.6.3-1.2.3-1.7.1a8.5 8.5 0 0 1-5.8-5.8c-.2-.5-.2-1.1.0-1.7Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...withDefaults(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}

/* ----- Service-tile icons (decorative, brand-coloured inline shapes) ----- */

export function FaceRejuvenationIcon(props: IconProps) {
  const p = withDefaults({ ...props, strokeWidth: 1.5 });
  return (
    <svg {...p}>
      <path d="M9 9.5h.01M15 9.5h.01" />
      <path d="M8.5 14c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2" />
      <path d="M4.5 12c0-4 3.3-7 7.5-7s7.5 3 7.5 7c0 4.5-3.5 8-7.5 8s-7.5-3.5-7.5-8Z" />
    </svg>
  );
}

export function FillerIcon(props: IconProps) {
  const p = withDefaults({ ...props, strokeWidth: 1.5 });
  return (
    <svg {...p}>
      <path d="M14.5 3.5l6 6L8 22l-6 .5.5-6Z" />
      <path d="M13 5l6 6" />
      <path d="M7 16h4" />
    </svg>
  );
}

export function BotoxIcon(props: IconProps) {
  const p = withDefaults({ ...props, strokeWidth: 1.5 });
  return (
    <svg {...p}>
      <path d="M9 3v3M15 3v3" />
      <path d="M7 8h10l-2 12H9Z" />
      <path d="M10 12h4" />
    </svg>
  );
}

export function LaserIcon(props: IconProps) {
  const p = withDefaults({ ...props, strokeWidth: 1.5 });
  return (
    <svg {...p}>
      <path d="M3 12h4l3-7 4 14 3-7h4" />
      <circle cx="20.5" cy="6.5" r="0.8" fill="currentColor" />
      <circle cx="3.5" cy="18.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function MesoPrpIcon(props: IconProps) {
  const p = withDefaults({ ...props, strokeWidth: 1.5 });
  return (
    <svg {...p}>
      <path d="M12 3c4 5 6 8.5 6 11.5a6 6 0 1 1-12 0C6 11.5 8 8 12 3Z" />
      <path d="M12 8v9" />
      <path d="M10 13l2 1 2-1" />
    </svg>
  );
}
