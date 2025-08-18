"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 max-w-md mx-auto">
      <Collapsible open={open} onOpenChange={setOpen}>
        {/* Trigger */}
        <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
          <span>{open ? "Chiudi dettagli" : "Apri dettagli"}</span>
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </CollapsibleTrigger>

        {/* Contenuto */}
        <CollapsibleContent open={open} className="mt-2  p-4 rounded-lg">
          <p className="p-3 mb-2 bg-accent text-accent-foreground rounded-2xl">
            Questo è il contenuto del collapsible. Puoi mettere qualsiasi cosa
            qui: testo, immagini, bottoni...
          </p>
          <p className="p-3 bg-accent text-accent-foreground rounded-2xl">
            E funziona perfettamente con gli stati React!
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
