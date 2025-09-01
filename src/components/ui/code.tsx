"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy, CopyCheck } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {
  asChild?: boolean;
  showCopyButton?: boolean;
  copyText?: string;
}

const codeVariants = cva(
  "relative rounded-md bg-muted text-sm font-mono font-medium",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        destructive: "bg-destructive/10 text-destructive",
        outline: "bg-background border-border border text-foreground",
      },
      size: {
        default: "text-sm px-2.5 py-1.5",
        sm: "text-xs px-2 py-1",
        lg: "text-base px-3 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Code({
  className,
  children,
  variant,
  size,
  asChild = false,
  showCopyButton = false,
  copyText,
  ...props
}: CodeProps) {
  const [copy, copied] = React.useState(false);
  const Comp = asChild ? Slot : "code";
  const textToCopy = copyText || (typeof children === "string" && children);

  return (
    <span
      className={cn(className, "inline-flex items-center gap-2")}
      data-slot="code"
    >
      <Comp
        data-slot="code-element"
        className={cn(codeVariants({ variant, size }))}
        {...props}
      >
        {children}
      </Comp>
      {showCopyButton && textToCopy && (
        <Button
          appearance={"ghost"}
          size="icon"
          className="h-4 w-4 p-0 opacity-60 hover:opacity-100"
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
            copied(true);
            setTimeout(() => copied(false), 1000);
          }}
        >
          {copy ? <CopyCheck size={4} /> : <Copy size={4} />}
        </Button>
      )}
    </span>
  );
}
