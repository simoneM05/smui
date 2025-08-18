"use client";

import React, { useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitch";
import { UserButtonProfile } from "./UserProfile";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { SignedIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer"; // il tuo nuovo wrapper
import { allLinks } from "@/utils/constants";

const NavbarLinksMobile = () => {
  const pathname = usePathname();
  return (
    <>
      {allLinks.map((link) => (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuLink asChild>
            <Link
              href={link.href}
              className={cn(
                "text-base font-medium hover:text-foreground text-foreground/70 transition-colors  hover:bg-transparent active:bg-transparent focus:bg-transparent",
                pathname === link.href && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
      <SignedIn>
        <NavigationMenuItem key="/Profile">
          <NavigationMenuLink asChild>
            <Link
              href="/Profile"
              className={cn(
                "text-base font-medium hover:text-foreground text-foreground/70 transition-colors hover:bg-transparent active:bg-transparent focus:bg-transparent",
                pathname === "/Profile" && "text-foreground"
              )}
            >
              Profile
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </SignedIn>
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

            <DrawerContent className="max-h-[40vh]">
              <DrawerTitle>
                <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
              </DrawerTitle>

              <div
                className="px-6 py-8 overflow-y-auto scrollbar-custom"
                onScroll={handleScroll}
              >
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col items-start">
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
          <UserButtonProfile />
        </div>
      </div>
    </div>
  );
};
