"use client ";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MoreHorizontalIcon } from "lucide-react";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label="pagination"
      role="navigation"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn(
        "flex flex-row  whitespace-nowrap items-center gap-1",
        className
      )}
      {...props}
    />
  );
}

function PaginationItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li data-slot="pagination-item" className={cn("", className)} {...props} />
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="pagination-ellipsis"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon />
      <span className="sr-only">More pages</span>
    </li>
  );
}

export { Pagination, PaginationContent, PaginationItem, PaginationEllipsis };
