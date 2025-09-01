import React from "react";
import { Code } from "../ui/code";

export function CodeDemo() {
  return <Code> npm install @smui/ui</Code>;
}
export function Code_Destructive() {
  return <Code variant={"destructive"}> npm install @smui/ui</Code>;
}
export function Code_Outline() {
  return <Code variant={"outline"}> npm install @smui/ui</Code>;
}

export function Code_Copy() {
  return <Code showCopyButton> npm install @smui/ui</Code>;
}

export default Code;
