import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        primary: "text-primary-foreground bg-primary hover:bg-primary/70",
        secondary:
          "text-secondary-foreground bg-secondary hover:bg-secondary/40",
        danger:
          "text-destructive-foreground bg-destructive hover:bg-destructive/90",
        invert: "text-primary bg-transparent",
        icon: "bg-transparent text-foreground ",
      },
      mode: {
        solid: "",
        outline: "bg-transparent border-2",
        dashed:
          "bg-transparent text-foreground border-foreground border-2 border-dashed",
        ghost:
          "bg-transparent hover:bg-accent text-foreground hover:text-foreground/80",
        link: "bg-transparent text-primary/70 hover:bg-transparent underline underline-offset-4 hover:text-primary",
      },

      size: {
        sm: "h-7 px-3 text-sm",
        md: "h-9 px-4 text-base",
        lg: "h-11 px-6 text-lg",
        icon: "size-8 rounded-full",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
        square: "rounded-none",
      },
      underline: {
        none: "",
        hidden: "hover:underline underline-offset-4 decoration-2",
        solid: "underline underline-offset-4 decoration-solid",
        dashed: "underline underline-offset-4 decoration-dashed decoration-2",
      },
      opacity: {
        full: "opacity-100",
        medium: "opacity-70 hover:opacity-80",
        low: "opacity-50 hover:opacity-60",
        none: "",
      },
    },
    compoundVariants: [
      {
        mode: "outline",
        variant: "primary",
        className: "border-primary text-primary hover:bg-primary/10",
      },
      {
        mode: "outline",
        variant: "secondary",
        className: "border-secondary text-secondary hover:bg-secondary/10",
      },
      {
        mode: "outline",
        variant: "danger",
        className:
          "border-destructive text-destructive hover:bg-destructive/10",
      },
      {
        variant: "danger",
        underline: "dashed",
        className: "decoration-destructive",
      },
    ],
    defaultVariants: {
      variant: "primary",
      mode: "solid",
      size: "md",
      shape: "rounded",
      underline: "none",
      opacity: "none",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
  className,
  variant,
  mode,
  size,
  shape,
  underline,
  opacity,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          mode,
          size,
          shape,
          underline,
          opacity,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
