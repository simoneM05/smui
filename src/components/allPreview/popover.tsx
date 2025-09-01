"use client";

import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button apparance={"outline"}>Apri Popover</Button>
      </PopoverTrigger>
      <PopoverContent side="top">
        <div className="relative">
          <h4 className="font-medium text-sm mb-2">Titolo Popover</h4>
          <p className="text-sm text-muted-foreground">
            Questo è il contenuto del popover, puoi metterci testo, bottoni o
            altri componenti.
          </p>
          <PopoverClose>
            <span className="sr-only">Chiudi</span>✕
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}
