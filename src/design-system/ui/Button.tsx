import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "gold"
  | "purple"
  | "sage"
  | "ghost"
  | "ink"
  | "outline-light";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  gold: [
    "bg-gold text-surface shadow-sm",
    "hover:bg-gold-deep hover:shadow-md",
    "active:scale-[0.98]"
  ].join(" "),
  purple: [
    "bg-[var(--color-nasim-purple)] text-white shadow-sm",
    "hover:bg-[var(--color-nasim-purple-deep)] hover:shadow-md hover:shadow-[var(--color-nasim-purple-deep)]/20",
    "active:scale-[0.98]"
  ].join(" "),
  sage: [
    "bg-sage text-surface shadow-sm",
    "hover:bg-sage-deep hover:shadow-md",
    "active:scale-[0.98]"
  ].join(" "),
  ghost: [
    "bg-surface text-ink ring-1 ring-line",
    "hover:bg-cream-soft hover:ring-ink/20",
    "active:scale-[0.98]"
  ].join(" "),
  ink: [
    "bg-ink text-cream shadow-sm",
    "hover:bg-ink-soft hover:shadow-md",
    "active:scale-[0.98]"
  ].join(" "),
  "outline-light": [
    "bg-transparent text-ink ring-1 ring-ink/25",
    "hover:bg-ink hover:text-cream hover:ring-ink",
    "active:scale-[0.98]"
  ].join(" ")
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-6 text-[15px] rounded-full",
  lg: "h-14 px-8 text-base rounded-full"
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "purple", size = "md", type = "button", ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2",
          "font-medium tracking-tight",
          "transition-[background-color,box-shadow,transform,color] duration-200 ease-out",
          "disabled:opacity-50 disabled:pointer-events-none",
          "select-none whitespace-nowrap",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
