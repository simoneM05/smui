"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <p>Show</p>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  );
}
export function Tooltip_Dark() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <p>Show</p>
      </TooltipTrigger>
      <TooltipContent variant={"dark"}>
        <p>Tooltip content</p>
      </TooltipContent>
    </Tooltip>
  );
}
export function Tooltip_Side() {
  const sides = ["top", "bottom", "left", "right"] as const;
  return (
    <div className="flex gap-4">
      {sides.map((s) => (
        <Tooltip key={s}>
          <TooltipTrigger>
            <p>{s}</p>
          </TooltipTrigger>
          <TooltipContent side={s}>
            <p>{s} tooltip</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
