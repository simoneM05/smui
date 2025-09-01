"use client";

import { ComponentR } from "@/type";
import { createContext, useContext, ReactNode, useState } from "react";

type ComponentContextType = {
  comp: ComponentR | null; // Componente attualmente selezionato
  setComp: (comp: ComponentR) => void; // Funzione per impostare il componente attualmente selezionato
  components: ComponentR[]; // Lista di tutti i componenti
  setComponents: (components: ComponentR[]) => void; // Funzione per impostare la lista di componenti
};

const ComponentContext = createContext<ComponentContextType | undefined>(
  undefined
);

export const useComponent = () => {
  const context = useContext(ComponentContext);
  if (!context)
    throw new Error("useComponent must be used within a ComponentProvider");
  return context;
};

export const ComponentProvider = ({ children }: { children: ReactNode }) => {
  const [comp, setComp] = useState<ComponentR | null>(null); // Componente attualmente selezionato
  const [components, setComponents] = useState<ComponentR[]>([]); // Lista di tutti i componenti

  return (
    <ComponentContext.Provider
      value={{ comp, setComp, components, setComponents }}
    >
      {children}
    </ComponentContext.Provider>
  );
};
