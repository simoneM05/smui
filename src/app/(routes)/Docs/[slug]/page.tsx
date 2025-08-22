import React from "react";
import { Header, Preview } from "./components/components";
import { Metadata } from "next";

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
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="space-y-8">
      <Header title={title} />
      <Preview />
      <section>Installation</section>
      <section>Example</section>
    </main>
  );
};

export default Page;
