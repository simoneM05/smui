"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, MinusIcon, Plus, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ================= Variants per Accordion Root =================
const accordionVariants = cva(
  "w-full border-2 py-4 px-2 border-border rounded-lg ",
  {
    variants: {
      variant: {
        default: "",
        primary: "border-primary text-primary",
        secondary: "border-secondary text-secondary",
        destructive: "border-destructive text-destructive",
      },
    },
    defaultVariants: {},
  }
);

// ================= Variants per AccordionItem =================
const accordionItemVariants = cva("transition-all rounded-lg p-2 m-2", {
  variants: {
    variant: {
      indicator:
        "relative rounded-none [&::after]:content-[''] [&::after]:block [&::after]:h-0.5 [&::after]:bg-border [&::after]:absolute [&::after]:left-1 [&::after]:right-1 [&::after]:bottom-0",
      solid: "dark:bg-accent/40 bg-accent",
      outline: "border-2",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

// ================= Variants per AccordionHeader =================
const accordionHeaderVariants = cva("flex", {
  variants: {
    variant: {
      default: "",
      primary: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// ================= Variants per AccordionTrigger =================
const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-2 gap-2.5 text-foreground font-medium transition-all [&[data-state=open]>svg]:rotate-180 cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
      },
      indicator: {
        arrow: "",
        plus: "[&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      indicator: "arrow",
    },
  }
);

// ================= Variants per AccordionContent =================
const accordionContentVariants = cva(
  "overflow-hidden duration-300 text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mt-2 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        primary: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// ================= Accordion Root =================
type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants>;

function Accordion({ className, children, variant, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      className={cn(accordionVariants({ variant }), className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

// ================= Accordion Item =================
type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
> &
  VariantProps<typeof accordionItemVariants>;

function AccordionItem({
  className,
  children,
  variant,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn(accordionItemVariants({ variant }), className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

// ================= Accordion Header =================
type AccordionHeaderProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Header
> &
  VariantProps<typeof accordionHeaderVariants>;

function AccordionHeader({
  className,
  children,
  variant,
  ...props
}: AccordionHeaderProps) {
  return (
    <AccordionPrimitive.Header
      className={cn(accordionHeaderVariants({ variant }), className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Header>
  );
}

// ================= Accordion Trigger =================
type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> &
  VariantProps<typeof accordionTriggerVariants>;

function AccordionTrigger({
  className,
  variant,
  indicator,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Trigger
      data-slot="accordion-trigger"
      className={cn(
        accordionTriggerVariants({ variant, indicator }),
        className
      )}
      {...props}
    >
      {children}
      {indicator === "arrow" && (
        <ChevronDownIcon
          className="size-4 shrink-0 transition-transform duration-200"
          strokeWidth={1}
        />
      )}

      {indicator === "plus" && (
        <PlusIcon
          className="size-4 shrink-0 transition-transform duration-200"
          strokeWidth={1}
        />
      )}
    </AccordionPrimitive.Trigger>
  );
}

// ================= Accordion Content =================
type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> &
  VariantProps<typeof accordionContentVariants> & {
    padded?: boolean;
  };

function AccordionContent({
  className,
  children,
  padded = false,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content {...props} asChild>
      <div className={cn(accordionContentVariants({}), className)}>
        <div className={cn(padded && "pb-4 pt-0")}>{children}</div>
      </div>
    </AccordionPrimitive.Content>
  );
}

// ================= Export =================
export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
