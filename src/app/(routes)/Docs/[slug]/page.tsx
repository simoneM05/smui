// app/docs/[slug]/page.tsx
import { Metadata } from "next";
import { ComponentR } from "@/type";
import ClientPage from "./ClientPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
  };
}

const getComponents = async (slug: string) => {
  try {
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/components/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Errore nel fetch dei componenti");
    const component: ComponentR = await res.json();
    return component;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const comp = await getComponents(slug);

  if (!comp)
    return (
      <main className="flex flex-col items-center justify-center h-[60vh] text-center gap-4">
        <h1 className="text-3xl font-bold">Componente non trovato</h1>
        <p className="text-gray-500">Il componente {slug} non esiste;</p>
      </main>
    );

  // Passiamo i dati al Client Component
  return <ClientPage comp={comp} />;
};

export default Page;
