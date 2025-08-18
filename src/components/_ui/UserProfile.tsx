"use client";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export const UserButtonProfile = ({
  showName = false,
}: {
  showName?: boolean;
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isLoaded, userId } = useAuth();

  useEffect(() => setMounted(true), []);

  const clerkTheme = resolvedTheme === "dark" ? dark : undefined;

  if (!mounted || !isLoaded) {
    return (
      <Skeleton
        className={cn(
          userId ? "w-10 h-10 rounded-full" : "w-18 h-10 rounded-md"
        )}
      />
    );
  }

  return (
    <div className="flex items-center mx-4 gap-2">
      <SignedOut>
        <Link href="/Login">
          <Button className="font-medium">Login</Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton
          showName={showName}
          appearance={{
            baseTheme: clerkTheme,
            elements: {
              userButtonTrigger: "shadow-none",
              userButtonAvatarBox: "scale-125",
            },
          }}
          userProfileProps={{
            appearance: { baseTheme: clerkTheme },
          }}
        />
      </SignedIn>
    </div>
  );
};
