"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Assuming you have Avatar components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Badge } from "../ui/badge";

// User data
const users = [
  {
    id: "1",
    name: "Aiden Murphy",
    availability: "online",
    avatar: "user1.jpg",
    status: "active",
    email: "aiden@example.com",
  },
  {
    id: "2",
    name: "Mia Thompson",
    availability: "away",
    avatar: "user2.jpg",
    status: "inactive",
    email: "mia@example.org",
  },
  {
    id: "3",
    name: "Ethan Rodriguez",
    availability: "busy",
    avatar: "user3.jpg",
    status: "active",
    email: "ethan@company.com",
  },
  {
    id: "4",
    name: "Olivia Brown",
    availability: "offline",
    avatar: "user4.jpg",
    status: "inactive",
    flag: "🇨🇦",
    email: "olivia@domain.net",
  },
  {
    id: "5",
    name: "Lucas Green",
    availability: "online",
    avatar: "user5.jpg",
    status: "active",
    email: "lucas@service.io",
  },
];

export function CardDemo() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Recent Users</CardTitle>
        <Button appearance="outline" size="sm">
          <Settings />
        </Button>
      </CardHeader>
      <CardContent className="py-1">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="flex items-center justify-between gap-2 py-2 border-b border-dashed last:border-none"
            >
              {/* Left: Avatar and User Info */}
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarImage
                    src={`/avatars/${user.avatar}`}
                    alt={user.name}
                  />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div>
                  <Link
                    href="#"
                    className="text-sm font-medium text-foreground hover:text-primary"
                  >
                    {user.name}
                  </Link>
                  <div className="text-sm font-normal text-muted-foreground">
                    {user.email}
                  </div>
                </div>
              </div>
              {/* Right: Status Badge */}
              <Badge
                appearance={"outline"}
                variant={user.status === "active" ? "success" : "secondary"}
              >
                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
              </Badge>
            </div>
          );
        })}
      </CardContent>
      <CardFooter className="justify-center">
        <Button appearance="link" underline>
          <Link href="#">Learn more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
