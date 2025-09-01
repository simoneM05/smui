"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./button";

const alertVariants = cva(
  "relative rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current transition-opacity duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground [&_svg:not([class*=size-])]:size-4",
        destructive:
          "text-foreground font-medium border-destructive/60 bg-destructive/20 [&>svg]:text-destructive [&_svg:not([class*=size-])]:size-4",
        success:
          "text-success-foreground bg-success border-success   [&>svg]:text-success-icon [&_svg:not([class*=size-])]:size-4 font-medium",
        warning:
          "text-warning-foreground bg-warning border-warning [&>svg]:text-warning-icon  [&_svg:not([class*=size-])]:size-4 font-medium",
        info: "text-info-foreground bg-info border-info  [&>svg]:text-info-icon [&_svg:not([class*=size-])]:size-4 font-medium",
      },
      appearance: {
        solid: "border-transparent",
        outline: "border-3 bg-transparent dark:bg-transparent",
        dashed: "border-3 border-dashed border-border bg-transparent",
      },

      size: {
        sm: "px-3 py-2 text-xs min-w-48",
        md: "px-4 py-3 text-sm min-w-64",
        lg: "px-6 py-4 text-base min-w-80",
      },

      lines: {
        single: "items-center",
        multiple: "items-start",
      },
    },
    defaultVariants: {
      variant: "default",
      appearance: "solid",
      size: "md",
      lines: "multiple",
    },
  }
);

type AlertProps = React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    close?: boolean;
    onClose?: () => void;
  };

export function Alert({
  className,
  variant,
  children,
  close,
  onClose,
  appearance,
  size,
  lines,
  ...props
}: AlertProps) {
  const gridCols = close
    ? "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr_auto] grid-cols-[0_1fr_auto]"
    : "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr]";

  return (
    <div
      data-slot="alert"
      role="alert"
      aria-live="polite"
      className={cn(
        alertVariants({ variant, appearance, size, lines }),
        gridCols,
        className
      )}
      {...props}
    >
      {children}
      {close && (
        <Button
          variant="invert"
          size="sm"
          aria-label="Close"
          data-slot="alert-close"
          onClick={onClose}
          className="col-start-3 row-start-1 group shrink-0 ml-2"
        >
          <X className="size-4 group-hover:opacity-100 opacity-40" />
        </Button>
      )}
    </div>
  );
}

export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 min-h-4 font-medium tracking-tight [.lines-single_&]:line-clamp-1 [.lines-single_&]:truncate",
        className
      )}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed [.lines-single_&]:line-clamp-1 [.lines-single_&]:truncate [.lines-single_&]:grid-cols-1",
        className
      )}
      {...props}
    />
  );
}

export function AlertToolbar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-toolbar"
      className={cn("col-start-2 flex gap-2 items-center mt-1", className)}
      {...props}
    />
  );
}

export function AlertContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("col-start-2 flex flex-col gap-1", className)}
      {...props}
    />
  );
}
