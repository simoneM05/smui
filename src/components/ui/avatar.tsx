"use client";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, MotionProps } from "motion/react";

const AvatarVariant = cva(
  "inline-flex items-center justify-center text-sm font-medium overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-6 w-6 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-14 w-14 text-lg",
      },
      rounded: {
        none: "rounded-none",
        square: "rounded-md",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "pill",
    },
  }
);

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof AvatarVariant> {
  className?: string;
  motionProps?: MotionProps;
}

function Avatar({
  className,
  size,
  rounded,
  motionProps,
  ...props
}: AvatarProps) {
  return (
    <motion.div className="inline-flex" {...motionProps}>
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(AvatarVariant({ size, rounded }), className)}
        {...props}
      />
    </motion.div>
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  size,
  rounded,
  ...props
}: React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
  VariantProps<typeof AvatarVariant>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        AvatarVariant({ size, rounded }),
        "flex items-center justify-center bg-muted font-semibold",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
