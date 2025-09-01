import React, { useEffect, useState, useRef } from "react";
import {
  animate,
  motion,
  UseInViewOptions,
  useMotionValue,
  useInView,
} from "motion/react";
import { cn } from "@/lib/utils";

interface CountingNumberProps {
  from?: number;
  to?: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  className?: string;
  once?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  onComplete?: () => void;
  format?: (value: number) => string;
}

export function CountingNumber({
  from = 0,
  to = 200,
  duration = 3,
  delay = 0,
  startOnView = true,
  className,
  once = false,
  inViewMargin,
  onComplete,
  format = (value) => Math.round(value).toString(),
  ...props
}: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: inViewMargin });
  const [hasAnimated, setHasAnimated] = useState(startOnView && isInView);
  const [count, setCount] = useState(from);
  const motionValue = useMotionValue(from);

  const shouldStart = !startOnView || (isInView && (!once || !hasAnimated));

  useEffect(() => {
    if (!shouldStart) return;
    setHasAnimated(true);
    const timeout = setTimeout(() => {
      const animation = animate(motionValue, to, {
        duration,
        onUpdate: (v) => setCount(v),
        onComplete,
      });
      return () => animation.stop();
    }, delay);
    return () => clearTimeout(timeout);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [shouldStart, to, from, delay, duration]);

  return (
    <motion.span
      ref={ref}
      className={cn(className, " font-semibold inline-block")}
      {...props}
    >
      {format ? format(count) : Math.round(count).toString()}
    </motion.span>
  );
}
