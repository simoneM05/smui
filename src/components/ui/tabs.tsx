import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Tabs as TabsPrimitive } from "radix-ui";

const tabsListVariants = cva("flex items-center shrink-0", {
  variants: {
    variant: {
      default: "bg-accent p-1",
      button: "",
      line: " border-b border-border",
    },
    shape: {
      default: "",
      pill: "",
    },
    size: {
      lg: "gap-2.5",
      md: "gap-2",
      sm: "gap-1.5",
      xs: "gap-1",
    },
  },
  compoundVariants: [
    { variant: "default", size: "lg", className: "p-1.5 gap-2.5" },
    { variant: "default", size: "md", className: "p-1 gap-2" },
    { variant: "default", size: "sm", className: "p-1 gap-1.5" },
    { variant: "default", size: "xs", className: "p-1 gap-1" },

    {
      variant: "default",
      size: "lg",
      shape: "default",
      className: "rounded-lg",
    },
    {
      variant: "default",
      size: "md",
      shape: "default",
      className: "rounded-lg",
    },
    {
      variant: "default",
      size: "sm",
      shape: "default",
      className: "rounded-md",
    },
    {
      variant: "default",
      size: "xs",
      shape: "default",
      className: "rounded-md",
    },

    {
      variant: "default",
      shape: "pill",
      className: "rounded-full ",
    },
    {
      variant: "button",
      shape: "pill",
      className: "rounded-full",
    },

    { variant: "line", size: "lg", className: "gap-9" },
    { variant: "line", size: "md", className: "gap-8" },
    { variant: "line", size: "sm", className: "gap-4" },
    { variant: "line", size: "xs", className: "gap-4" },
  ],
  defaultVariants: {
    variant: "default",
    size: "lg",
    shape: "default",
  },
});

const tabsTriggerVariants = cva(
  "shrink-0 cursor-pointer whitespace-nowrap p-4 inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:text-muted-foreground hover:[&_svg]:text-primary [&[data-state=active]_svg]:text-primary",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground data-[state=active]:bg-background hover:text-foreground data-[state=active]:text-foreground data-[state=active]:shadow-xs data-[state=active]:shadow-black/5",
        button:
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-accent-foreground hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-foreground",
        outline:
          "data-[state=active]:border-2 data-[state=active]:text-foreground data-[state=active]:border-muted-foreground text-muted-foreground bg-transparent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md transition-colors",
        line: "border-b-3 text-muted-foreground border-transparent data-[state=active]:border-primary data-[state=active]:text-primary hover:text-primary",
        none: "text-muted-foreground  hover:text-foreground data-[state=active]:text-foreground",
      },
      size: {
        lg: "gap-1.5 text-sm [&_svg:not([class*=size-])]:size-4",
        md: "gap-2 text-sm [&_svg:not([class*=size-])]:size-4",
        sm: "gap-1.5 text-xs [&_svg:not([class*=size-])]:size-3.5",
        xs: "gap-1 text-xs [&_svg:not([class*=size-])]:size-3.5",
      },
    },
    compoundVariants: [
      { variant: "default", size: "lg", className: "py-2.5 px-4 rounded-md" },
      { variant: "default", size: "md", className: "py-2 px-3 rounded-md" },
      { variant: "default", size: "sm", className: "py-1.5 px-2.5 rounded-sm" },
      { variant: "default", size: "xs", className: "py-1 px-2 rounded-sm" },

      { variant: "button", size: "lg", className: "py-2.5 px-4 rounded-lg" },
      { variant: "button", size: "md", className: "py-2 px-3 rounded-lg" },
      { variant: "button", size: "sm", className: "py-1.5 px-2.5 rounded-md" },
      { variant: "button", size: "xs", className: "py-1 px-2 rounded-md" },

      { variant: "outline", size: "lg", className: "py-1.5 px-4 rounded-lg" },
      { variant: "outline", size: "md", className: "py-1.5 px-3 rounded-lg" },
      { variant: "outline", size: "sm", className: "py-1.5 px-2.5 rounded-md" },
      { variant: "outline", size: "xs", className: "py-1.5 px-2 rounded-md" },

      { variant: "line", size: "lg", className: "py-3" },
      { variant: "line", size: "md", className: "py-2.5" },
      { variant: "line", size: "sm", className: "py-2" },
      { variant: "line", size: "xs", className: "py-1.5" },

      { variant: "none", size: "lg", className: "py-3" },
      { variant: "none", size: "md", className: "py-2.5" },
      { variant: "none", size: "sm", className: "py-2" },
      { variant: "none", size: "xs", className: "py-1.5" },
    ],

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
const tabsContentVariants = cva(
  "mt-5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root className={cn("", className)} {...props} />;
}

function TabsList({
  className,
  variant,
  size,
  shape,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      className={cn(tabsListVariants({ variant, shape, size }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(tabsTriggerVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content> &
  VariantProps<typeof tabsContentVariants>) {
  return (
    <TabsPrimitive.Content
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
