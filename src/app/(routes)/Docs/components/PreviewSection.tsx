"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  ClipboardCheckIcon,
  ClipboardIcon,
  RotateCwIcon,
  TerminalIcon,
} from "lucide-react";
import { useCommand } from "@/context/CommandContext";
import * as components from "@/components/allPreview";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDevice } from "@/context/DeviceContext";
import { useComponent } from "@/context/ComponentContext";
import { Skeleton } from "@/components/ui/skeleton";

export const PreviewBase = () => {
  const { comp } = useComponent();
  const { theme = "dark" } = useTheme();
  const { command } = useCommand();
  const { deviceType } = useDevice();

  const [copyed, setCopyed] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [demoName, setDemoName] = React.useState("");
  const [code, setCode] = React.useState("");
  const [commandComp, setCommandComp] = React.useState("");

  React.useEffect(() => {
    if (!comp) return;
    setDemoName(comp.demoName);
    setCode(comp.code);
    setCommandComp(comp[command] as string);
  }, [comp, command]);

  // Se comp non è ancora disponibile → Skeleton
  if (!comp) {
    return (
      <section className="flex-col gap-4 animate-pulse">
        <Tabs defaultValue="Preview">
          <header className="flex items-center justify-between mb-2">
            <TabsList className="bg-muted shadow-md" size="xs">
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-md" />
            </TabsList>

            <div className="flex m-2 gap-2">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </header>

          <TabsContent className="p-0 shadow-sm" value="Preview">
            <Skeleton className="h-[26rem] w-full rounded-md" />
          </TabsContent>

          <TabsContent className="p-0 shadow-sm" value="Code">
            <Skeleton className="h-[24rem] w-full rounded-md" />
          </TabsContent>
        </Tabs>

        <div className="flex flex-wrap items-center my-5 gap-2">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      </section>
    );
  }

  const style = theme === "dark" ? oneDark : oneLight;
  const buttonSize = deviceType === "mobile" ? "sm" : "md";
  const triggerSize = deviceType === "mobile" ? "xs" : "sm";

  const PreviewList = components as Record<string, React.FC>;
  const PreviewComponent = PreviewList[demoName] as React.FC;

  return (
    <section className="flex-col gap-4">
      <Tabs defaultValue="Preview">
        <header className="flex items-center justify-between mb-2">
          <TabsList className="bg-muted shadow-md" size="xs">
            <TabsTrigger size={triggerSize} value="Preview">
              Preview
            </TabsTrigger>
            <TabsTrigger size={triggerSize} value="Code">
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex m-2 gap-2">
            {deviceType === "mobile" ? (
              <Button variant="invert" apparance="outline" size="sm">
                <TerminalIcon size={16} />
              </Button>
            ) : (
              <Button
                size={buttonSize}
                variant="invert"
                apparance="outline"
                className="flex justify-between items-center max-w-[180px] whitespace-nowrap px-1"
                onClick={() => navigator.clipboard.writeText(comp[command])}
              >
                <span className="flex-1 overflow-hidden text-ellipsis text-right ml-2">
                  {commandComp}
                </span>
              </Button>
            )}

            <Button
              size={buttonSize}
              variant="invert"
              apparance="outline"
              onClick={() => {
                setReload(true);
                setTimeout(() => setReload(false), 1000);
              }}
            >
              <RotateCwIcon
                className={cn(reload && "animate-spin")}
                size={16}
              />
            </Button>

            <Tooltip delayDuration={500}>
              <TooltipTrigger asChild>
                <Button
                  size={buttonSize}
                  variant="invert"
                  apparance="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    setCopyed(true);
                    setTimeout(() => setCopyed(false), 2000);
                  }}
                >
                  {copyed ? (
                    <ClipboardCheckIcon size={16} />
                  ) : (
                    <ClipboardIcon size={16} />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy Code</TooltipContent>
            </Tooltip>
          </div>
        </header>

        <TabsContent className="p-0 shadow-sm" value="Preview">
          <div className="min-h-[26rem] overflow-clip p-[5rem] flex justify-center items-center border rounded-md bg-background">
            {PreviewComponent ? <PreviewComponent /> : <p>Preview not found</p>}
          </div>
        </TabsContent>

        <TabsContent className="p-0 shadow-sm gap-5" value="Code">
          <SyntaxHighlighter
            showLineNumbers
            language="ts"
            wrapLines
            style={style}
            PreTag="div"
            CodeTag="code"
            className="p-4 text-md h-[24rem] overflow-auto"
          >
            {code}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>

      <div className="flex flex-wrap items-center my-5 gap-2">
        <h1 className="font-semibold text-md mr-2">Example:</h1>
        <Button
          onClick={() => {
            setDemoName(comp.demoName);
            setCode(comp.code);
            setCommandComp(comp[command]);
          }}
          apparance="outline"
          variant={comp.demoName === demoName ? "primary" : "invert"}
          className={cn(
            "text-muted-foreground border-2",
            comp.demoName === demoName && "text-primary "
          )}
        >
          Base
        </Button>
        {comp.examples?.map((example) => (
          <Button
            key={example.id}
            onClick={() => {
              setDemoName(example.demoName);
              setCode(example.code);
              setCommandComp(example[command]);
            }}
            apparance="outline"
            variant={example.demoName === demoName ? "primary" : "invert"}
            className={cn(
              "text-muted-foreground border-2",
              example.demoName === demoName && "text-primary "
            )}
          >
            {example.name}
          </Button>
        ))}
      </div>
    </section>
  );
};
