"use client";
import React from "react";

type CommandType = "npm" | "yarn" | "pnpm" | "bun";

interface CommandContextValue {
  command: CommandType;
  setCommand: (cmd: CommandType) => void;
}

const CommandContext = React.createContext<CommandContextValue | undefined>(
  undefined
);

export const CommandProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [command, setCommand] = React.useState<CommandType>("npm");

  // Leggi da localStorage lato client
  React.useEffect(() => {
    const saved = localStorage.getItem("command") as CommandType;
    if (saved) setCommand(saved);
  }, []);

  // Salva su localStorage quando cambia
  React.useEffect(() => {
    localStorage.setItem("command", command);
  }, [command]);

  return (
    <CommandContext.Provider value={{ command, setCommand }}>
      {children}
    </CommandContext.Provider>
  );
};

export const useCommand = () => {
  const ctx = React.useContext(CommandContext);
  if (!ctx) throw new Error("useCommand deve stare dentro CommandProvider");
  return ctx;
};
