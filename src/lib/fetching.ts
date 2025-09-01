import { Category } from "@/generated/prisma";
import { ComponentR } from "@/type";

export const fetchComponents = async (
  setComponents: (components: ComponentR[]) => void,
  setDocsLinks: (
    links: { href: string; label: string; category: Category }[]
  ) => void
) => {
  try {
    const res = await fetch("/api/components");
    if (!res.ok) throw new Error("Errore nel fetch dei componenti");
    const data: ComponentR[] = await res.json(); // Salva i dati in una variabile
    setComponents(data); // Imposta i componenti dallo stato
    const links = data
      .map((c) => ({
        href: `/Docs/${c.name}`,
        label: c.name.replace("-", " "),
        category: c.category,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));

    setDocsLinks(links);
  } catch (err) {
    console.error(err);
  }
};
