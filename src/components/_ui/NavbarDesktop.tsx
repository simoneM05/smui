"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { ThemeSwitcher } from "./themeSwitch";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { SignedIn } from "@clerk/nextjs";
import { NavbarMobile } from "./NavbarMobile";
import { Skeleton } from "../ui/skeleton";

const links = [
  { href: "/", label: "Components" },
  { href: "/Ui-Kit", label: "Ui Kit" },
  { href: "/Docs", label: "Docs" },
];

// Navbar links
// NavbarLinksDesktop.tsx
const NavbarLinksDesktop = () => {
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return links.map((link) => (
      <NavigationMenuItem key={link.href}>
        <NavigationMenuLink
          className="hover:bg-transparent active:bg-transparent focus:bg-transparent"
          asChild
        >
          <Link href={link.href}>
            <Skeleton className="h-4 w-20" />
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    ));
  } // non renderizzare nulla sul server
  return (
    <>
      {links.map((link) => (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuLink
            className="text-md hover:bg-transparent active:bg-transparent focus:bg-transparent"
            asChild
          >
            <Link
              href={link.href}
              className={cn(
                "font-medium hover:text-foreground text-foreground/60 transition-colors",
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
          <NavigationMenuLink
            className="hover:bg-transparent active:bg-transparent focus:bg-transparent"
            asChild
          >
            <Link
              href="/Profile"
              className={cn(
                " font-medium hover:text-foreground text-foreground/60 transition-colors ",
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

// Desktop Navbar
const NavbarDesktop = () => (
  <div className="hidden md:flex w-full sticky top-0 z-50 items-center justify-between py-4 px-10 bg-background/70 backdrop-blur-sm border-b">
    <Link href="/" className="text-2xl font-bold">
      SMUI
    </Link>

    <NavigationMenu>
      <NavigationMenuList className="flex space-x-6">
        <NavbarLinksDesktop />
      </NavigationMenuList>
    </NavigationMenu>

    <div className="flex-shrink-0 flex items-center">
      <ThemeSwitcher />
      {/* <UserButtonProfile showName /> */}
    </div>
  </div>
);

// Mobile Navbar

// Navbar principale
const Navbar = () => (
  <>
    <NavbarDesktop />
    <NavbarMobile />
  </>
);

export default Navbar;
