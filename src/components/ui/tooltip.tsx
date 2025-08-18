import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tooltipVariants = cva(
  "inline-block rounded-md text-medium px-4 py-1.5 text-sm ",
  {
    variants: {
      variant: {
        dark: "bg-background border border-border shadow-black/5 shadow-md text-foreground",
        light:
          "dark:border dark:border-border bg-zinc-950 text-white dark:bg-zinc-300 dark:text-black shadow-md shadow-black/5",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

function TooltipContent({
  className,
  sideOffset = 4,
  variant,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipVariants>) {
  return (
    <TooltipPrimitive.Content
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(tooltipVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
