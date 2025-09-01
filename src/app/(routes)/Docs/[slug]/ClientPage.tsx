// app/docs/[slug]/ClientPage.tsx
"use client";

import { Header } from "../components/Header";
import { PreviewBase } from "../components/PreviewSection";
import { InstallationCommand } from "../components/installSection";
import ApiSection from "../components/ApiSection";
import CreditSection from "../components/CreditSection";
import { useComponent } from "@/context/ComponentContext";
import React from "react";

export default function ClientPage({ comp }: { comp: string }) {
  const { setComp, components } = useComponent();

  React.useEffect(() => {
    if (components.length > 0) {
      const component = components.find((c) => c.slug === comp);
      if (component) {
        setComp(component);
      }
    }
  });
  if (!comp)
    return (
      <main className="flex flex-col items-center justify-center h-[60vh] text-center gap-4">
        <h1 className="text-3xl font-bold">Componente non trovato</h1>
        <p className="text-gray-500">Il componente {comp} non esiste;</p>
      </main>
    );
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
