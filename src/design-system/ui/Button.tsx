import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "gold"
  | "ink"
  | "cream"
  | "ghost"
  | "outline-light"
  | "outline-light-solid";
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

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Use the plain <a> tag instead of next/link (external links, tel:, wa.me). */
  external?: boolean;
}

/**
 * Anchor rendered with the shared `.button` styles. Internal routes go through
 * next/link; pass `external` for tel:/wa.me/social URLs so Next does not try
 * to prefetch them.
 */
export function ButtonLink({
  href,
  variant = "gold",
  size = "md",
  external,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn("button", `button--${variant}`, `button--${size}`, className);

  if (external) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes} {...props}>
      {children}
    </NextLink>
  );
}
