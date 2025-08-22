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
        ghost:
          "bg-transparent hover:bg-accent text-foreground hover:text-foreground/80",
        link: "bg-transparent text-primary hover:underline underline-offset-4",
        outline:
          "bg-transparent border border-border text-foreground hover:bg-accent/20",
        dashed:
          "bg-transparent border-2 border-dashed border-border text-foreground hover:bg-accent/50",
        none: "",
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
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "rounded",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
  className,
  variant,
  size,
  shape,
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
          size,
          shape,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
