import * as React from "react";
import { cn } from "@/lib/cn";

type SectionTone = "default" | "soft" | "dark" | "white";
type SectionSpacing = "md" | "lg" | "xl";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  spacing?: SectionSpacing;
  as?: React.ElementType;
  divider?: boolean;
}

export function Section({
  className,
  tone = "soft",
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
        "section",
        `section--${tone}`,
        `section--${spacing}`,
        divider && "section--divider",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
