"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Accordion",
    href: "/accordion",
    description: "Expandable panels for grouping content.",
  },
  {
    title: "Tabs",
    href: "/tabs",
    description: "Switch between tabbed sections of content.",
  },
  {
    title: "Tooltip",
    href: "/tooltip",
    description: "Show extra info on hover or focus.",
  },
];

function ListItem({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-2 no-underline hover:bg-accent hover:text-accent-foreground"
        >
          <div className="font-medium">{title}</div>
          {children && (
            <p className="text-muted-foreground text-sm">{children}</p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:grid-cols-2 md:w-[200px] lg:w-[300px]">
              <ListItem title="Introduction" href="/docs">
                Overview of the library and components.
              </ListItem>
              <ListItem title="Installation" href="/docs/installation">
                How to install dependencies.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Components */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid md:grid-cols-2 gap-2 md:w-[300px] lg:w-[400px]">
              {components.map((comp) => (
                <ListItem key={comp.href} title={comp.title} href={comp.href}>
                  {comp.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Simple Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
