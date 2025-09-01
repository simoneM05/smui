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
import { Category } from "@/generated/prisma";
import { useComponent } from "@/context/ComponentContext";
import { fetchComponents } from "@/lib/fetching";
import { Skeleton } from "../ui/skeleton";

const NavbarLinksMobile = () => {
  const { setComponents, components } = useComponent();
  const [docsLinks, setDocsLinks] = React.useState<
    { href: string; label: string; category: Category }[]
  >([]);

  React.useEffect(() => {
    if (components.length > 0) {
      setDocsLinks(
        components
          .map((c) => ({
            href: `/Docs/${c.name}`,
            label: c.name.replace("-", " "),
            category: c.category,
          }))
          .sort((a, b) => a.label.localeCompare(b.label))
      );
    } else {
      fetchComponents(setComponents, setDocsLinks);
    }

    // revalidate ogni 30 secondi
    const interval = setInterval(() => {
      fetchComponents(setComponents, setDocsLinks);
    }, 60000);

    // cleanup
    return () => clearInterval(interval);
  }, [components, setComponents]);

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

      {docsLinks.length === 0
        ? Array.from({ length: 16 }).map((_, i) => (
            <NavigationMenuItem key={i}>
              <Skeleton className="h-4 w-27 m-1" />
            </NavigationMenuItem>
          ))
        : docsLinks.map((link) => (
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
