"use client";
import { Button } from "@/components/ui/button";
import { useComponent } from "@/context/ComponentContext";
import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CreditSection = () => {
  const { comp } = useComponent();

  // Skeleton mentre i dati non sono pronti
  if (!comp) {
    return (
      <ul className="list-disc pl-5 space-y-2 animate-pulse">
        <li className="text-lg font-medium flex items-center gap-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-4 w-16 rounded-md" />
        </li>
        <li className="text-lg font-medium flex items-center gap-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-4 w-16 rounded-md" />
        </li>
      </ul>
    );
  }

  // Se non ci sono crediti, mostro messaggio
  if (!comp.credits || comp.credits.length === 0) {
    return;
  }

  return (
    <ul className="list-disc pl-5 space-y-2">
      {comp.credits.map((c) => (
        <li key={c.id} className="text-lg font-medium flex items-center gap-2">
          Built with:
          <Button
            underline
            apparance="link"
            size="md"
            className="py-0 text-md text-blue-800 flex items-center gap-1"
          >
            <a href={c.href} target="_blank" rel="noopener noreferrer">
              {c.label}
            </a>
            <SquareArrowOutUpRight size={16} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default CreditSection;
