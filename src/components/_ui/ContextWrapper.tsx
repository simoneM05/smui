import { CommandProvider } from "@/context/CommandContext";
import { ComponentProvider } from "@/context/ComponentContext";
import { DeviceProvider } from "@/context/DeviceContext";
import React from "react";

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComponentProvider>
      <DeviceProvider>
        <CommandProvider>{children}</CommandProvider>
      </DeviceProvider>
    </ComponentProvider>
  );
};

export default ContextWrapper;
