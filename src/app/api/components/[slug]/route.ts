import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/components/[slug]
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } } // Cambiato da Promise a oggetto
) {
  try {
    const { slug } = params; // Ottieni il slug direttamente dai parametri

    // Recupera il componente dal database
    const component = await prisma.component.findUnique({
      where: { slug: slug.toLowerCase() },
      include: {
        examples: true, // Include gli ExampleComponent
        credits: true, // Include i Credits se necessario
      },
    });

    // Controlla se il componente non è stato trovato
    if (!component) {
      return NextResponse.json(
        { error: "Componente non trovato" },
        { status: 404 }
      );
    }

    // Restituisce il componente trovato
    return NextResponse.json(component, { status: 200 });
  } catch (error) {
    console.error("Errore nel recupero del componente:", error);

    // Restituisce un messaggio di errore dettagliato
    return NextResponse.json(
      {
        error: `Errore nel recupero del componente: ${
          error instanceof Error ? error.message : error
        }`,
      },
      { status: 500 }
    );
  }
}
