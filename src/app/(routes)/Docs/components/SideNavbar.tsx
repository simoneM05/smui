"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { GetStartedLinks } from "@/utils";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Category, Component } from "@/generated/prisma";
import { Skeleton } from "@/components/ui/skeleton";

const SideNavbar = () => {
  const pathname = usePathname();
  const linkStarted = GetStartedLinks;

  const [docsLinks, setDocsLinks] = React.useState<
    { href: string; label: string; category: Category }[]
  >([]);

  const fetchComponents = async () => {
    try {
      const res = await fetch("/api/components");
      if (!res.ok) throw new Error("Errore nel fetch dei componenti");
      const components: Component[] = await res.json();

      const links = components
        .map((c) => ({
          href: `/Docs/${c.name}`,
          label: c.name.replace("-", " "),
          category: c.category,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

      setDocsLinks(links);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    // fetch iniziale
    fetchComponents();

    // revalidate ogni 30 secondi
    const interval = setInterval(() => {
      fetchComponents();
    }, 30000); // 30.000 ms = 30 secondi

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationMenu className="flex-col gap-2 text-left justify-start max-h-[80vh] no-scrollbar px-3 overflow-y-scroll">
      <NavigationMenuList className="flex flex-col gap-2 items-start">
        <h1 className="font-medium mt-5 mb-0.5 text-md text-popover-foreground">
          Get Started
        </h1>
        {linkStarted.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link
              href={item.href}
              className={cn(
                "text-md p-0 hover:no-underline font-medium text-muted-foreground hover:text-foreground",
                (pathname.split("/")[2]?.includes("-")
                  ? pathname.split("/")[2].replace("-", " ")
                  : pathname.split("/")[2]) === item.label && "text-foreground"
              )}
            >
              <motion.p
                whileHover={{ x: 10 }}
                animate={{
                  x:
                    (pathname.split("/")[2]?.includes("-")
                      ? pathname.split("/")[2].replace("-", " ")
                      : pathname.split("/")[2]) === item.label
                      ? 10
                      : 0,
                }}
              >
                {item.label}
              </motion.p>
            </Link>
          </NavigationMenuItem>
        ))}

        <h1 className="font-medium mt-5 mb-0.5 text-md text-popover-foreground">
          UI Components
        </h1>

        {docsLinks.length === 0
          ? Array.from({ length: 16 }).map((_, i) => (
              <NavigationMenuItem key={i}>
                <Skeleton className="h-4 w-27 m-1" />
              </NavigationMenuItem>
            ))
          : docsLinks.map(
              (item) =>
                item.category === "STATIC" && (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-md p-0 hover:no-underline font-medium text-muted-foreground hover:text-foreground",
                        (pathname.split("/")[2]?.includes("-")
                          ? pathname.split("/")[2].replace("-", " ")
                          : pathname.split("/")[2]) === item.label &&
                          "text-foreground"
                      )}
                    >
                      <motion.p
                        whileHover={{ x: 10 }}
                        animate={{
                          x:
                            (pathname.split("/")[2]?.includes("-")
                              ? pathname.split("/")[2].replace("-", " ")
                              : pathname.split("/")[2]) === item.label
                              ? 10
                              : 0,
                        }}
                      >
                        {item.label}
                      </motion.p>
                    </Link>
                  </NavigationMenuItem>
                )
            )}

        <h1 className="font-medium mt-5 mb-0.5 text-md whitespace-nowrap text-popover-foreground">
          Motion Components
        </h1>
        {docsLinks.length === 0
          ? Array.from({ length: 16 }).map((_, i) => (
              <NavigationMenuItem key={i}>
                <Skeleton className="h-4 w-27 m-1" />
              </NavigationMenuItem>
            ))
          : docsLinks.map(
              (item) =>
                item.category === "MOTION" && (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-md p-0 hover:no-underline font-medium text-muted-foreground hover:text-foreground",
                        (pathname.split("/")[2]?.includes("-")
                          ? pathname.split("/")[2].replace("-", " ")
                          : pathname.split("/")[2]) === item.label &&
                          "text-foreground"
                      )}
                    >
                      <motion.p
                        whileHover={{ x: 10 }}
                        animate={{
                          x:
                            (pathname.split("/")[2]?.includes("-")
                              ? pathname.split("/")[2].replace("-", " ")
                              : pathname.split("/")[2]) === item.label
                              ? 10
                              : 0,
                        }}
                      >
                        {item.label}
                      </motion.p>
                    </Link>
                  </NavigationMenuItem>
                )
            )}
        <h1 className="font-medium mt-5 mb-0.5 text-md whitespace-nowrap text-popover-foreground">
          UI Kit
        </h1>
        {docsLinks.length === 0
          ? Array.from({ length: 16 }).map((_, i) => (
              <NavigationMenuItem key={i}>
                <Skeleton className="h-4 w-27 m-1" />
              </NavigationMenuItem>
            ))
          : docsLinks.map(
              (item) =>
                item.category === "KIT" && (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-md p-0 hover:no-underline font-medium text-muted-foreground hover:text-foreground",
                        (pathname.split("/")[2]?.includes("-")
                          ? pathname.split("/")[2].replace("-", " ")
                          : pathname.split("/")[2]) === item.label &&
                          "text-foreground"
                      )}
                    >
                      <motion.p
                        whileHover={{ x: 10 }}
                        animate={{
                          x:
                            (pathname.split("/")[2]?.includes("-")
                              ? pathname.split("/")[2].replace("-", " ")
                              : pathname.split("/")[2]) === item.label
                              ? 10
                              : 0,
                        }}
                      >
                        {item.label}
                      </motion.p>
                    </Link>
                  </NavigationMenuItem>
                )
            )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SideNavbar;
