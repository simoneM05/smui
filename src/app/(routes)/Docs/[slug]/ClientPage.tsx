// app/docs/[slug]/ClientPage.tsx
"use client";

import { Header } from "../components/Header";
import { PreviewBase } from "../components/PreviewSection";
import { InstallationCommand } from "../components/installSection";
import ApiSection from "../components/ApiSection";
import CreditSection from "../components/CreditSection";
import { ComponentR } from "@/type";
import { useComponent } from "@/context/ComponentContext";
import React from "react";

type Props = {
  comp: ComponentR;
};

export default function ClientPage({ comp }: Props) {
  const { setComp } = useComponent();

  React.useEffect(() => {
    setComp(comp);
  }, [comp]);
  return (
    <main className="space-y-8 mx-[15%]">
      <Header />
      <PreviewBase />
      <InstallationCommand />
      <ApiSection />
      <CreditSection />
    </main>
  );
}
