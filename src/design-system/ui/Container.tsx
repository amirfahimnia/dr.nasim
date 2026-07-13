import * as React from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-[1280px]"
};

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
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizeMap[size], className)}
      {...props}
    />
  );
}
