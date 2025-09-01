"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium leading-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary",
        success: "bg-success border-success text-success-foreground",
        warning: "bg-warning text-warning-foreground border-warning",
        info: "bg-info text-info-foreground border-info",
        primary: "bg-primary text-primary-foreground border-primary",
        secondary: "bg-secondary text-secondary-foreground border-secondary",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive",
      },
      appearance: {
        solid: "",
        outline: "border-2 font-semibold",
        ghost: "bg-transparent",
      },
      size: {
        lg: "rounded-md px-[0.5rem] h-7 min-w-7 gap-1.5 text-xs [&_svg]:size-3.5",
        md: "rounded-md px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&_svg]:size-3.5",
        sm: "rounded-sm px-[0.325rem] h-5 min-w-5 gap-1 text-[0.6875rem] leading-[0.75rem] [&_svg]:size-3",
        xs: "rounded-sm px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&_svg]:size-3",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-md",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        appearance: "outline",
        className: "bg-primary/30 text-primary-text",
      },
      {
        variant: "success",
        appearance: "outline",
        className: "bg-success/30 text-success-text",
      },
      {
        variant: "warning",
        appearance: "outline",
        className: "bg-warning/30 text-warning-text",
      },
      {
        variant: "info",
        appearance: "outline",
        className: "bg-info/30 text-info-text",
      },
      {
        variant: "primary",
        appearance: "outline",
        className: "bg-primary/30 text-primary",
      },
      {
        variant: "secondary",
        appearance: "outline",
        className: "bg-secondary/30 text-secondary-foreground",
      },
      {
        variant: "destructive",
        appearance: "outline",
        className: "bg-destructive/30 text-destructive",
      },
      {
        variant: "default",
        appearance: "ghost",
        className: "text-primary-text",
      },
      {
        variant: "success",
        appearance: "ghost",
        className: "text-success-text",
      },
      {
        variant: "warning",
        appearance: "ghost",
        className: "text-warning-text",
      },
      { variant: "info", appearance: "ghost", className: "text-info-text" },
      { variant: "primary", appearance: "ghost", className: "text-primary" },
      {
        variant: "secondary",
        appearance: "ghost",
        className: "text-secondary-foreground",
      },
      {
        variant: "destructive",
        appearance: "ghost",
        className: "text-destructive",
      },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "solid",
      size: "md",
      shape: "square",
      disabled: false,
    },
  }
);

const badgeButtonVariants = cva(
  "inline-flex items-center justify-center hover:cursor-pointer opacity-60 hover:opacity-100 rounded-full text-sm font-medium leading-none",
  {
    variants: { variant: { default: "" } },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  disabled?: boolean;
}

function Badge({
  className,
  variant,
  size,
  shape,
  appearance,
  asChild = false,
  disabled = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(
        badgeVariants({ variant, size, appearance, shape, disabled }),
        className
      )}
      {...props}
    />
  );
}

function BadgeButton({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof badgeButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge-button"
      className={cn(badgeButtonVariants({ variant, className }))}
      role="button"
      {...props}
    />
  );
}

export { Badge, BadgeButton };
