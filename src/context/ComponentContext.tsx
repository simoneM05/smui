"use client";
import { ComponentR } from "@/type";
import { createContext, useContext, ReactNode, useState } from "react";

type ComponentContextType = {
  comp: ComponentR | null; // può essere inizialmente null
  setComp: (comp: ComponentR) => void;
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
  const [comp, setComp] = useState<ComponentR | null>(null); // tipizzato correttamente
  return (
    <ComponentContext.Provider value={{ comp, setComp }}>
      {children}
    </ComponentContext.Provider>
  );
};
