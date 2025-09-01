"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCommand } from "@/context/CommandContext";
import { useComponent } from "@/context/ComponentContext";
import { useDevice } from "@/context/DeviceContext";
import { InstallCommands } from "@/type";
import { ClipboardCheckIcon, ClipboardIcon } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const InstallationCommand = () => {
  const { comp } = useComponent();

  // Skeleton mentre il componente non è pronto
  if (!comp) {
    return (
      <section className="space-y-2 animate-pulse">
        <Skeleton className="h-5 w-48 rounded-md" />
        <div className="ml-2 flex gap-6">
          <Skeleton className="h-4 w-12 rounded-md" />
          <Skeleton className="h-4 w-20 rounded-md" />
        </div>
        <Skeleton className="h-20 w-full rounded-md" />
      </section>
    );
  }

  const commandList: InstallCommands = {
    pnpm: comp.pnpm,
    npm: comp.npm,
    yarn: comp.yarn,
    bun: comp.bun,
  };

  return (
    <section className="space-y-2">
      <h1 id="installation" className="text-2xl font-semibold">
        Installation
      </h1>
      <Tabs defaultValue="cli">
        <TabsList variant={"button"}>
          <TabsTrigger variant={"none"} className="text-lg" value="cli">
            CLI
          </TabsTrigger>
          <TabsTrigger variant={"none"} className="text-lg" value="manual">
            Manual
          </TabsTrigger>
        </TabsList>
        <TabsContent value="cli">
          <CLIinstallation comp={commandList} />
        </TabsContent>
        <TabsContent value="manual"></TabsContent>
      </Tabs>
    </section>
  );
};

export const CLIinstallation = ({ comp }: { comp: InstallCommands }) => {
  const { command, setCommand } = useCommand();
  const { deviceType } = useDevice();
  const [copied, setCopied] = React.useState(false);

  const currentCommand = comp[command];
  const tabSize = deviceType === "mobile" ? "md" : "lg";
  const packageManagers = ["npm", "pnpm", "yarn", "bun"] as const;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tabs
      className="bg-muted/50 shadow-md py-2 rounded-md"
      value={command}
      onValueChange={(val) => setCommand(val as typeof command)}
    >
      <TabsList
        variant="line"
        className="flex px-4 py-2 justify-between"
        size={tabSize}
      >
        <div className="flex items-center">
          {packageManagers.map((pm) => (
            <TabsTrigger key={pm} variant={"outline"} size={tabSize} value={pm}>
              {pm}
            </TabsTrigger>
          ))}
        </div>
        <Button apparance={"ghost"} onClick={handleCopy}>
          {copied ? (
            <ClipboardCheckIcon size={16} />
          ) : (
            <ClipboardIcon size={16} />
          )}
        </Button>
      </TabsList>
      {packageManagers.map((pm) => (
        <TabsContent
          className="font-normal overflow-clip whitespace-nowrap font-mono text-md"
          key={pm}
          value={pm}
        >
          <p className="px-5 py-2">{comp[pm]}</p>
        </TabsContent>
      ))}
    </Tabs>
  );
};
