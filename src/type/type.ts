import {
  Component,
  CreditComponent,
  ExampleComponent,
} from "@/generated/prisma";

export type InstallCommands = {
  pnpm: string;
  npm: string;
  yarn: string;
  bun: string;
};

export type ComponentR = Component & {
  examples: Array<ExampleComponent>;
  credits: Array<CreditComponent>;
};
