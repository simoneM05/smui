"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch, SwitchIndicator, SwitchWrapper } from "@/components/ui/switch";
export function SwitchDemo() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {/* Switch semplice */}
      <SwitchWrapper>
        <Switch
          checked={checked}
          onCheckedChange={(val) => setChecked(!!val)}
          size="xl"
          shape="pill"
        />
        <SwitchIndicator state={checked ? "on" : "off"} />
      </SwitchWrapper>
    </div>
  );
}

export function Switch_Permanent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center space-x-2.5">
        <SwitchWrapper permanent={true}>
          <Switch size="xl" />
          <SwitchIndicator state="on">
            <SunIcon className="size-4 text-muted-foreground" />
          </SwitchIndicator>
          <SwitchIndicator state="off">
            <MoonIcon className="size-4 text-muted-foreground" />
          </SwitchIndicator>
        </SwitchWrapper>
      </div>
    </div>
  );
}
export function Switch_Icon() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center space-x-2.5">
        <SwitchWrapper>
          <Switch size="xl" />
          <SwitchIndicator state="on">
            <SunIcon className="size-4 text-primary-foreground" />
          </SwitchIndicator>
          <SwitchIndicator state="off">
            <MoonIcon className="size-4 text-muted-foreground" />
          </SwitchIndicator>
        </SwitchWrapper>
      </div>
    </div>
  );
}
export function Switch_Indicator() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center space-x-2.5">
        <SwitchWrapper>
          <Switch size="xl" />
          <SwitchIndicator state="on">
            <p className="font-medium">ON</p>
          </SwitchIndicator>
          <SwitchIndicator state="off">
            <p className="font-medium">OFF</p>
          </SwitchIndicator>
        </SwitchWrapper>
      </div>
    </div>
  );
}
export function Switch_Square() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center space-x-2.5">
        <SwitchWrapper>
          <Switch size="xl" shape="square" />
          <SwitchIndicator></SwitchIndicator>
        </SwitchWrapper>
      </div>
    </div>
  );
}
export function Switch_Disable() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center space-x-2.5">
        <SwitchWrapper>
          <Switch size="xl" disabled />
          <SwitchIndicator></SwitchIndicator>
        </SwitchWrapper>
      </div>
    </div>
  );
}

export function Switch_Size() {
  return (
    <SwitchWrapper>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex gap-6">
          <div className="flex items-center space-x-2">
            <Switch size="sm" />
            <label>Small</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch size={"md"} />
            <label>Medium</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch size="lg" />
            <label>Large</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch size="xl" />
            <label>XLarge</label>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center space-x-2">
            <Switch size="sm" shape="square" />
            <label>Small</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch size={"md"} shape="square" />
            <label>Medium</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch size="lg" shape="square" />
            <label>Large</label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch size="xl" shape="square" />
            <label>XLarge</label>
          </div>
        </div>
      </div>
    </SwitchWrapper>
  );
}
