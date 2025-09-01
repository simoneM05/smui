"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";

const sections = [
  {
    title: "Installation",
    id: "installation",
    children: [],
  },
  {
    title: "API Reference",
    id: "api-reference",
    children: [
      { title: "Components", id: "components" },
      { title: "Hooks", id: "hooks" },
    ],
  },
  {
    title: "Credits",
    id: "credits",
    children: [],
  },
];

const NavPage = () => {
  return (
    <NavigationMenu className="sticky font-normal top-30 px-20 flex flex-col gap-2 items-start">
      <h1 className="font-medium whitespace-nowrap">On this page</h1>
      <NavigationMenuList className="flex flex-col gap-0 items-start">
        {sections.map((section) => (
          <NavigationMenuItem
            key={section.id}
            className="flex flex-col items-start"
          >
            <Button
              appearance={"link"}
              className="text-md whitespace-nowrap p-0 no-underline hover:no-underline text-muted-foreground hover:text-foreground"
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {section.title}
            </Button>

            {/* Sottosezioni dinamiche */}
            {section.children.length > 0 && (
              <div className="ml-4 flex items-start flex-col gap-0">
                {section.children.map((child) => (
                  <Button
                    key={child.id}
                    appearance={"link"}
                    className="text-sm whitespace-nowrap p-0 no-underline hover:no-underline text-muted-foreground hover:text-foreground"
                    onClick={() => {
                      document.getElementById(child.id)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </Button>
                ))}
              </div>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavPage;
