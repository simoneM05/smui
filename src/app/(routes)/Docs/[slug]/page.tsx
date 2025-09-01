// app/docs/[slug]/page.tsx
import { Metadata } from "next";
import { ComponentR } from "@/type";
import ClientPage from "./ClientPage";
import { useComponent } from "@/context/ComponentContext";

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

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  // Passiamo i dati al Client Component
  return <ClientPage comp={slug.toLowerCase()} />;
};

export default Page;
