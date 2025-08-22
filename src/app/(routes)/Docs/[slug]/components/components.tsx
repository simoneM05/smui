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
import { ClipboardCheckIcon, ClipboardIcon, RotateCwIcon } from "lucide-react";

export const Preview = () => {
  const [copyed, setCopyed] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const { theme } = useTheme();

  const code = `
export const Header = ({ title }: { title: string }) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground font-medium">Components</p>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-sm text-foreground/40">qui ci sara la descrizione</p>
    </div>
  );
};
  `;

  const style = theme === "dark" ? oneDark : oneLight;

  return (
    <section>
      <Tabs defaultValue="Preview">
        <header className="flex items-center justify-between mb-2">
          <TabsList className="bg-muted" size="xs">
            <TabsTrigger size="xs" value="Preview">
              Preview
            </TabsTrigger>
            <TabsTrigger size="xs" value="Code">
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              comando
            </Button>
            <Button
              size="sm"
              variant="outline"
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
            <Button
              size="sm"
              variant="outline"
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
          </div>
        </header>

        <TabsContent value="Preview">
          <div className="p-4 border rounded-md bg-background">
            Preview content here
          </div>
        </TabsContent>

        <TabsContent className="scrollbar " value="Code">
          <SyntaxHighlighter
            showLineNumbers
            language="ts"
            wrapLines
            style={style}
            PreTag="div"
            CodeTag="code"
            className="p-4 text-md"
          >
            {code}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export const InstallationCommand = () => {};

export const Header = ({ title }: { title: string }) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground font-medium">Components</p>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-sm text-foreground/40">qui ci sara la descrizione</p>
    </div>
  );
};
