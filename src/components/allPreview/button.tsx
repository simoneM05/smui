"use client";

// ===============================
// BUTTON COMPONENTS
// ===============================

import { UserIcon, MailIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button size="lg">Button</Button>;
}

export function Disable_Button() {
  return (
    <Button size="lg" disabled>
      Button
    </Button>
  );
}

export function Ghost_Button() {
  return (
    <div className="flex gap-5">
      <Button apparance="ghost" size="lg">
        Button
      </Button>
      <Button variant="danger" size="lg">
        Button
      </Button>
    </div>
  );
}

export function Outline_Button() {
  return (
    <div className="flex gap-5">
      <Button apparance="outline" size="lg">
        Button
      </Button>
      <Button variant="danger" size="lg">
        Button
      </Button>
      <Button variant="invert" size="lg">
        Button
      </Button>
    </div>
  );
}
export function Dashed_Button() {
  return (
    <div className="flex gap-5">
      <Button apparance="dashed" size="lg">
        Button
      </Button>
      <Button variant="danger" apparance={"dashed"} size="lg">
        Button
      </Button>
      <Button variant="invert" apparance={"dashed"} size="lg">
        Button
      </Button>
    </div>
  );
}

export function With_Icon_Button() {
  return (
    <div className="flex gap-5">
      <Button size="md">
        <UserIcon />
        <p className="font-medium">User</p>
      </Button>
      <Button apparance="outline" size="md">
        <MailIcon />
        <p className="font-medium">Mail</p>
      </Button>
      <Button apparance="ghost" size="md">
        <XIcon />
        <p className="font-medium">Close</p>
      </Button>
    </div>
  );
}

export function Notification_Button() {
  return (
    <div className="relative inline-block">
      <Button apparance="outline" size="icon">
        <MailIcon />
      </Button>
      <span className="absolute top-0 -right-0.5 -translate-x-1/4 -translate-y-1/4 h-2 w-2 bg-red-500 rounded-full animate-bounce"></span>
    </div>
  );
}

export function Icon_Only_Button() {
  return (
    <div className="flex gap-5">
      <Button size="icon">
        <UserIcon />
      </Button>
      <Button apparance="outline" size="icon">
        <MailIcon />
      </Button>
      <Button apparance="ghost" size="icon">
        <XIcon />
      </Button>
    </div>
  );
}
