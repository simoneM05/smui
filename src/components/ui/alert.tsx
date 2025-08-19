import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "./button";

// ================= Variants per Alert =================
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current transition-opacity duration-200",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-destructive/10 [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        success:
          "text-foreground bg-green-900 [&>svg]:text-green-500 *:data-[slot=alert-description]:text-green-800/90",
        warning:
          "text-foreground bg-yellow-900 [&>svg]:text-yellow-500 *:data-[slot=alert-description]:text-yellow-800/90",
        info: "text-foreground bg-blue-900 [&>svg]:text-blue-500 *:data-[slot=alert-description]:text-blue-800/90",
      },
      appearance: {
        solid: "border-transparent",
        outline: "border-2 border-border bg-transparent",
        dashed: "border-2 border-dashed border-border bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      appearance: "solid",
    },
  }
);

// ================= Alert Root =================
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
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      aria-live="polite"
      className={cn(alertVariants({ variant, appearance }), className)}
      {...props}
    >
      {children}
      {close && (
        <Button
          variant="ghost"
          size="sm"
          aria-label="Close"
          data-slot="alert-close"
          onClick={onClose}
          className="absolute top-2 right-2 group shrink-0"
        >
          <X className="size-4 group-hover:opacity-100 opacity-40" />
        </Button>
      )}
    </div>
  );
}

// ================= Sub-components =================
export function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
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
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
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
