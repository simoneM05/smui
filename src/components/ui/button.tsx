import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        primary: "text-primary-foreground bg-primary hover:bg-primary/40",
        secondary:
          "text-secondary-foreground bg-secondary hover:bg-secondary/40",
        danger:
          "text-destructive-foreground bg-destructive hover:bg-destructive/40",
        invert: "",
      },
      apparance: {
        solid: "",
        outline:
          "border-2 border-border hover:bg-accent/20 text-foreground bg-transparent",
        link: "bg-transparent hover:bg-trasparent text-blue-600 underline-offset-4 hover:underline",
        dashed: "border-2 bg-transparent border-dashed border-border",
        ghost: "bg-transparent",
      },
      size: {
        lg: "h-10 rounded-md px-4 text-sm gap-1.5 [&_svg:not([class*=size-])]:size-4",
        md: "h-8.5 rounded-md px-3 gap-1.5 text-[0.8125rem] [&_svg:not([class*=size-])]:size-4",
        sm: "h-7 rounded-md px-2.5 gap-1.25 text-xs [&_svg:not([class*=size-])]:size-3.5",
        icon: "size-8.5 rounded-md [&_svg:not([class*=size-])]:size-4 shrink-0",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
        square: "rounded-none",
      },
      underline: {
        true: "underline",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        apparance: "outline",
        class: "text-primary border-primary hover:bg-primary/10",
      },
      {
        variant: "secondary",
        apparance: "outline",
        class: "text-secondary border-secondary hover:bg-secondary/10",
      },
      {
        variant: "danger",
        apparance: "outline",
        class: "text-destructive border-destructive hover:bg-destructive/10",
      },
      {
        variant: "primary",
        apparance: "ghost",
        class: "text-primary bg-transparent hover:bg-primary/10",
      },
      {
        variant: "secondary",
        apparance: "ghost",
        class: "text-secondary bg-transparent hover:bg-secondary/10",
      },
      {
        variant: "danger",
        apparance: "ghost",
        class: "text-destructive bg-transparent hover:bg-destructive/10",
      },
      {
        variant: "primary",
        apparance: "dashed",
        class: "text-primary  border-primary hover:text-primary/70",
      },
      {
        variant: "secondary",
        apparance: "dashed",
        class: "text-secondary border-secondary hover:text-secondary/70",
      },
      {
        variant: "danger",
        apparance: "dashed",
        class: "text-destructive border-destructive hover:text-destructive/70",
      },
    ],
    defaultVariants: {
      variant: "primary",
      apparance: "solid",
      size: "md",
      shape: "rounded",
      underline: false,
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
  className,
  variant,
  size,
  apparance,
  underline,
  shape,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const resolvedVariant =
    apparance === "outline" && !variant ? "invert" : variant;

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant: resolvedVariant,
          size,
          shape,
          apparance,
          underline,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
