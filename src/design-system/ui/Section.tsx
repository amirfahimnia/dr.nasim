import * as React from "react";
import { cn } from "@/lib/cn";

type SectionTone = "default" | "soft" | "dark" | "white";
type SectionSpacing = "md" | "lg" | "xl";

const toneStyles: Record<SectionTone, string> = {
  default: "bg-cream",
  soft: "bg-cream-soft",
  dark: "bg-ink text-cream",
  white: "bg-surface"
};

const spacingStyles: Record<SectionSpacing, string> = {
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
  xl: "py-24 sm:py-32"
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  as?: React.ElementType;
  divider?: boolean;
}

export function Section({
  className,
  tone = "default",
  spacing = "lg",
  as,
  divider,
  children,
  ...props
}: SectionProps) {
  const Component = (as ?? "section") as React.ElementType;
  return (
    <Component
      className={cn(
        "relative",
        toneStyles[tone],
        spacingStyles[spacing],
        divider && "border-t border-line/60",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
