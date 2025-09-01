"use client";

// ===============================
// CHECKBOX COMPONENTS
// ===============================

import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox />
      <Label>Accept terms and conditions</Label>
    </div>
  );
}

export function Checkbox_Disabled() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox disabled />
      <Label>Accept terms and conditions</Label>
    </div>
  );
}

export function Checkbox_Indeterminate() {
  const [checked, setChecked] = React.useState<"indeterminate" | boolean>(
    "indeterminate"
  );
  return (
    <div className="flex items-center gap-2">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <Label>Accept terms and conditions</Label>
    </div>
  );
}

export function Checkbox_Size() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <Checkbox size="sm" />
        <Label className="leading-none">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="md" />
        <Label className="leading-none">Medium</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox size="lg" />
        <Label className="leading-none">Large</Label>
      </div>
    </div>
  );
}
