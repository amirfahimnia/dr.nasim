import * as React from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: React.ElementType;
}

export function Container({
  className,
  size = "xl",
  as,
  ...props
}: ContainerProps) {
  const Component = (as ?? "div") as React.ElementType;
  return (
    <Component
      className={cn("container", `container--${size}`, className)}
      {...props}
    />
  );
}
