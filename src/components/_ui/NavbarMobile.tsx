"use client";

import React, { useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitch";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
// import { SignedIn } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer"; // il tuo nuovo wrapper
import * as link from "@/utils/constants";
import { Separator } from "../ui/separetor";
import { Component } from "@/generated/prisma";

const NavbarLinksMobile = () => {
  const [docsLinks, setDocsLinks] = React.useState<
    { href: string; label: string }[]
  >([]);

  React.useEffect(() => {
    const fetchComponents = async () => {
      try {
        const res = await fetch("/api/components");
        if (!res.ok) throw new Error("Errore nel fetch dei componenti");
        const components = await res.json();

        const links = components.map((c: Component) => ({
          href: `/Docs/${c.name}`,
          label: c.name,
        }));

        setDocsLinks(links);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComponents();
  }, []);

  return (
    <>
      {link.mainLinks.map((link) => (
        <NavigationMenuItem key={link.label}>
          <NavigationMenuLink className="py-1" asChild>
            <Link
              href={link.href}
              className={cn(
                "text-base font-medium text-foreground transition-colors hover:bg-transparent active:bg-transparent focus:bg-transparent"
              )}
            >
              {link.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}

      <Separator className="bg-transparent p-2" />
      <p className="text-sm text-primary font-medium">Component UI</p>

      {docsLinks.map((link) => (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuLink className="py-1" asChild>
            <Link
              href={link.href}
              className={cn(
                "text-base font-medium text-foreground/50 transition-colors hover:bg-transparent active:bg-transparent focus:bg-transparent"
              )}
            >
              {link.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );
};

export const NavbarMobile = () => {
  const allowDrag = useRef(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop <= 0) {
      allowDrag.current = false;
      setTimeout(() => {
        allowDrag.current = true;
      }, 100); // buffer di 100ms
    }
  };
  return (
    <div className="md:hidden w-full sticky top-0 z-50">
      <div className="flex items-center justify-between py-4 px-6 bg-background/70 backdrop-blur-sm border-b relative">
        <div className="flex items-center shrink-0">
          <Drawer shouldScaleBackground={true} scrollLockTimeout={100}>
            <DrawerTrigger asChild>
              <button className="p-2">
                <Menu />
              </button>
            </DrawerTrigger>

            <DrawerContent className="max-h-[40vh] border-b-none border-r-none border-l-none">
              <DrawerTitle>
                <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
              </DrawerTitle>

              <div
                className="overflow-y-auto scrollbar"
                onScroll={handleScroll}
              >
                <NavigationMenu className="overflow-hidden">
                  <NavigationMenuList className="flex flex-col w-screen px-6 py-8  items-start">
                    <NavbarLinksMobile />
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </DrawerContent>
          </Drawer>

          <Link href="/" className="text-xl font-bold ml-2">
            SM
          </Link>
        </div>

        <div className="flex-shrink-0 flex items-center">
          <ThemeSwitcher />
          {/* <UserButtonProfile /> */}
        </div>
      </div>
    </div>
  );
};
