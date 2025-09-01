"use client";

import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertToolbar,
} from "@/components/ui/alert";
import {
  CheckCircleIcon,
  InfoIcon,
  MessageCircleIcon,
  ShieldAlertIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

// ===============================
// ALERT COMPONENTS
// ===============================

export function AlertDemo() {
  return (
    <div className="flex items-center gap-5">
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to this variant.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function Alert_Solid() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Alert
        close
        variant="default"
        className="text-green-"
        appearance="solid"
      >
        <MessageCircleIcon />
        <AlertTitle>Default alert.</AlertTitle>
      </Alert>

      <Alert close variant="info" appearance="solid">
        <InfoIcon />
        <AlertTitle>Informational alert.</AlertTitle>
      </Alert>

      <Alert close variant="success" appearance="solid">
        <CheckCircleIcon />
        <AlertTitle>Successful alert.</AlertTitle>
      </Alert>

      <Alert close variant="warning" appearance="solid">
        <TriangleAlertIcon />
        <AlertTitle>Warning alert.</AlertTitle>
      </Alert>

      <Alert close variant="destructive" appearance="solid">
        <ShieldAlertIcon />
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  );
}

export function Alert_Outline() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Alert close variant="default" appearance="outline">
        <MessageCircleIcon />
        <AlertTitle>Default alert.</AlertTitle>
      </Alert>

      <Alert close variant="info" appearance="outline">
        <InfoIcon />
        <AlertTitle>Informational alert.</AlertTitle>
      </Alert>

      <Alert close variant="success" appearance="outline">
        <CheckCircleIcon />
        <AlertTitle>Successful alert.</AlertTitle>
      </Alert>

      <Alert close variant="warning" appearance="outline">
        <TriangleAlertIcon />
        <AlertTitle>Warning alert.</AlertTitle>
      </Alert>

      <Alert close variant="destructive" appearance="outline">
        <ShieldAlertIcon />
        <AlertTitle>Error alert</AlertTitle>
      </Alert>
    </div>
  );
}

export function Alert_Size() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Alert close variant="default" size="sm" appearance="solid">
        <MessageCircleIcon />
        <AlertTitle>Default alert.</AlertTitle>
      </Alert>
      <Alert close variant="default" size="md" appearance="solid">
        <MessageCircleIcon />
        <AlertTitle>Default alert.</AlertTitle>
      </Alert>
      <Alert close variant="default" size="lg" appearance="solid">
        <MessageCircleIcon />
        <AlertTitle>Default alert.</AlertTitle>
      </Alert>
    </div>
  );
}

export function Alert_Extend() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Alert close variant="default" size="md" appearance="solid">
        <MessageCircleIcon />
        <AlertTitle>Extend alert</AlertTitle>
        <AlertDescription>
          Insert the alert description here. It would look better as two lines
          of text.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function Alert_Action() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Alert close variant="default" size="md" appearance="solid">
        <MessageCircleIcon />
        <AlertTitle>Extend alert</AlertTitle>
        <AlertDescription>
          Insert the alert description here. It would look better as two lines
          of text.
        </AlertDescription>
        <AlertToolbar>
          <Button apparance="ghost">Upgrade</Button>
          <Button apparance="ghost">Dissmis</Button>
        </AlertToolbar>
      </Alert>
    </div>
  );
}
