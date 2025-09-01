"use client";

import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
export function PaginationDemo() {
  return (
    <div className="space-y-4">
      <Pagination>
        <PaginationContent>
          {/* First Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="md"
              className="disabled:opacity-50"
              aria-label="Prima pagina"
            >
              <ChevronLeft id="Previous" className="h-4 w-4" />
              <Label htmlFor="Previous">Previous</Label>
            </Button>
          </PaginationItem>
          {/* Previous Page */}
          <PaginationItem>
            <Button appearance={"ghost"} size="icon">
              1
            </Button>
            <Button variant={"invert"} appearance={"outline"} size="icon">
              2
            </Button>
            <Button appearance={"ghost"} size="icon">
              3
            </Button>
          </PaginationItem>
          {/* Last Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="md"
              className="disabled:opacity-50"
              aria-label="Ultima pagina"
            >
              <Label htmlFor="Next">Next</Label>
              <ChevronRight id="Next" className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
export function Pagination_Ellipsis() {
  return (
    <div className="space-y-4">
      <Pagination>
        <PaginationContent className="gap-1">
          {/* First Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Prima pagina"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          </PaginationItem>
          {/* Previous Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Pagina precedente"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button appearance={"ghost"} size="icon">
              1
            </Button>
            <Button variant={"invert"} appearance={"outline"} size="icon">
              2
            </Button>
            <Button appearance={"ghost"} size="icon">
              3
            </Button>
          </PaginationItem>
          <PaginationEllipsis />
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Pagina successiva"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
          {/* Last Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Ultima pagina"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
export function Pagination_Card() {
  return (
    <Card>
      <Pagination>
        <PaginationContent className="gap-1">
          {/* First Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Prima pagina"
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
          </PaginationItem>
          {/* Previous Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Pagina precedente"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button appearance={"ghost"} size="icon">
              1
            </Button>
            <Button variant={"invert"} appearance={"outline"} size="icon">
              2
            </Button>
            <Button appearance={"ghost"} size="icon">
              3
            </Button>
          </PaginationItem>
          <PaginationEllipsis />
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Pagina successiva"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
          {/* Last Page */}
          <PaginationItem>
            <Button
              appearance="ghost"
              size="icon"
              className="h-8 w-8 disabled:opacity-50"
              aria-label="Ultima pagina"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Card>
  );
}
