// ===============================
// AVATAR COMPONENTS
// ===============================
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

// array di immagini disponibili
const avatarImages = [
  "/avatars/user1.jpg",
  "/avatars/user2.jpg",
  "/avatars/user3.jpg",
  "/avatars/user4.jpg",
  "/avatars/user5.jpg",
  "/avatars/user6.jpg",
  "/toothless.webp",
];

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-5">
      <Avatar>
        <AvatarImage src={avatarImages[0]} />
        <AvatarFallback size="sm">U1</AvatarFallback>
      </Avatar>
      <Avatar_Group_3_user />
      <Avatar_Grayscale />
    </div>
  );
}

export function Avatar_Rounded() {
  return (
    <div className="flex items-center gap-5">
      <Avatar size="md" rounded="pill">
        <AvatarImage src={avatarImages[3]} />
        <AvatarFallback size="md">U4</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="square">
        <AvatarImage src={avatarImages[1]} />
        <AvatarFallback size="sm">U2</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="none">
        <AvatarImage src={avatarImages[6]} />
        <AvatarFallback size="lg">TT</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Avatar_size() {
  return (
    <div className="flex items-center gap-5">
      <Avatar size="sm">
        <AvatarImage src={avatarImages[5]} />
        <AvatarFallback size="sm">U5</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src={avatarImages[4]} />
        <AvatarFallback size="md">U6</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={avatarImages[0]} />
        <AvatarFallback size="lg">U1</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Avatar_Scale() {
  return (
    <div className="flex items-center gap-5">
      <Avatar
        motionProps={{
          initial: { scale: 0 },
          animate: { scale: 1, transition: { duration: 0.4 } },
        }}
        size="md"
        rounded="pill"
      >
        <AvatarImage src={avatarImages[2]} />
        <AvatarFallback size="md">U3</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Avatar_Fallback() {
  return (
    <div className="flex items-center gap-5">
      <Avatar size="md" rounded="pill">
        <AvatarImage /> {/* senza src per testare fallback */}
        <AvatarFallback size="md">AB</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Avatar_Grayscale() {
  return (
    <div className="flex items-center gap-5">
      <Avatar size="md" rounded="pill" className="grayscale">
        <AvatarImage src={avatarImages[5]} />
        <AvatarFallback size="md">U2</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Avatar_Blur() {
  return (
    <div className="flex items-center gap-5">
      <Avatar size="md" rounded="pill" className="blur-xs">
        <AvatarImage src={avatarImages[6]} />
        <AvatarFallback size="md">TT</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function Avatar_Group() {
  return (
    <div className="flex items-center -space-x-2">
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[3]} />
        <AvatarFallback size="md">U4</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[6]} />
        <AvatarFallback size="md">TT</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[1]} />
        <AvatarFallback size="md">U2</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[5]} />
        <AvatarFallback size="md">U5</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[0]} />
        <AvatarFallback size="md">U1</AvatarFallback>
      </Avatar>
      <Button
        variant={"secondary"}
        shape={"pill"}
        size={"icon"}
        className="relative size-12 border-2 border-background hover:z-10"
      >
        5+
      </Button>
    </div>
  );
}

export function Avatar_Group_3_user() {
  return (
    <div className="flex items-center -space-x-2">
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[3]} />
        <AvatarFallback size="md">U4</AvatarFallback>
      </Avatar>
      <Avatar size="md" rounded="pill" className="hover:z-10">
        <AvatarImage src={avatarImages[1]} />
        <AvatarFallback size="md">U2</AvatarFallback>
      </Avatar>
      <Button
        variant={"secondary"}
        shape={"pill"}
        size={"icon"}
        className="relative size-12 border-2 border-background hover:z-10"
      >
        5+
      </Button>
    </div>
  );
}
