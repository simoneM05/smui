import { Mail, Tag, XIcon } from "lucide-react";
import { Badge, BadgeButton } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge variant={"default"} size={"lg"}>
        Badge
      </Badge>
      <Badge variant={"success"} size={"lg"}>
        Badge
      </Badge>
      <Badge variant={"info"} size={"lg"}>
        Badge
      </Badge>
      <Badge variant={"destructive"} size={"lg"}>
        Badge
      </Badge>
      <Badge variant={"warning"} size={"lg"}>
        Badge
      </Badge>
    </div>
  );
}
export function Badge_Size() {
  return (
    <div className="flex gap-2 items-center">
      <Badge size={"xs"}>Badge</Badge>
      <Badge size={"sm"}>Badge</Badge>
      <Badge size={"md"}>Badge</Badge>
      <Badge size={"lg"}>Badge</Badge>
    </div>
  );
}

export function Badge_Rounded() {
  return (
    <div className="flex gap-2">
      <Badge shape={"square"}>Badge</Badge>
    </div>
  );
}

export function Badge_Outline() {
  return (
    <div className="flex gap-2">
      <Badge variant={"default"} size={"lg"} appearance="outline">
        Badge
      </Badge>
      <Badge variant={"success"} size={"lg"} appearance="outline">
        Badge
      </Badge>
      <Badge variant={"info"} size={"lg"} appearance="outline">
        Badge
      </Badge>
      <Badge variant={"destructive"} size={"lg"} appearance="outline">
        Badge
      </Badge>
      <Badge variant={"warning"} size={"lg"} appearance="outline">
        Badge
      </Badge>
    </div>
  );
}
export function Badge_Disabled() {
  return (
    <div className="flex gap-2">
      <Badge variant={"default"} disabled size={"lg"} appearance="outline">
        Badge
      </Badge>
    </div>
  );
}
export function Badge_As_Child() {
  return (
    <div className="flex gap-2">
      <Badge variant={"primary"} asChild size={"lg"} appearance="outline">
        <span>Badge</span>
      </Badge>
    </div>
  );
}

export function Badge_Button() {
  const variants = [
    "primary",
    "success",
    "info",
    "warning",
    "destructive",
  ] as const;

  return (
    <div className="flex flex-col items-center gap-6">
      {variants.map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <Badge variant={variant} appearance="ghost">
            Ghost
            <BadgeButton>
              <XIcon />
            </BadgeButton>
          </Badge>
          <Badge variant={variant}>
            Solid{" "}
            <BadgeButton>
              <XIcon />
            </BadgeButton>
          </Badge>
          <Badge variant={variant} appearance="outline">
            Outline
            <BadgeButton>
              <XIcon />
            </BadgeButton>
          </Badge>
        </div>
      ))}
    </div>
  );
}

export function Badge_Icon() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <Badge variant="primary" appearance="ghost">
          <Tag /> Ghost
        </Badge>
        <Badge variant="primary">
          <Mail /> Solid
        </Badge>
        <Badge variant="primary" appearance="outline">
          <Tag /> outline
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="success" appearance="ghost">
          <Tag /> Ghost
        </Badge>
        <Badge variant="success">
          <Mail /> Solid
        </Badge>
        <Badge variant="success" appearance="outline">
          <Tag /> outline
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="info" appearance="ghost">
          <Tag /> Ghost
        </Badge>
        <Badge variant="info">
          <Mail /> Solid
        </Badge>
        <Badge variant="info" appearance="outline">
          <Tag /> outline
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="warning" appearance="ghost">
          <Tag /> Ghost
        </Badge>
        <Badge variant="warning">
          <Mail /> Solid
        </Badge>
        <Badge variant="warning" appearance="outline">
          <Tag /> outline
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="destructive" appearance="ghost">
          <Tag /> Ghost
        </Badge>
        <Badge variant="destructive">
          <Mail /> Solid
        </Badge>
        <Badge variant="destructive" appearance="outline">
          <Tag /> outline
        </Badge>
      </div>
    </div>
  );
}

// export function BadgeIconDemo() {
//   return <BadgeIcon>Badge</BadgeIcon>;
// }
