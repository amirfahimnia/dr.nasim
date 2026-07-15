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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "gold",
      size = "md",
      type = "button",
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "button",
          `button--${variant}`,
          `button--${size}`,
          className
        )}
        {...props}
      />
    );
  }
);
