import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const component = await prisma.component.findUnique({
      where: { slug: slug.toLowerCase() },
      include: {
        examples: true,
        credits: true,
      },
    });

    if (!component) {
      return NextResponse.json(
        { error: "Componente non trovato" },
        { status: 404 }
      );
    }
    return NextResponse.json(component, { status: 200 });
  } catch (error) {
    console.error("Errore nel recupero dei componenti:", error);
    return NextResponse.json(
      { error: "Errore nel recupero dei componenti" },
      { status: 500 }
    );
  }
}
