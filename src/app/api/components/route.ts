// app/api/components/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Assicurati che la connessione a Prisma sia corretta

// GET /api/components
export async function GET() {
  try {
    const components = await prisma.component.findMany({
      include: {
        examples: true, // Include anche gli ExampleComponent se necessario
      },
    });

    // Controlla se non ci sono componenti trovati
    if (components.length === 0) {
      return NextResponse.json(
        { message: "Nessun componente trovato." },
        { status: 404 } // Restituisce un errore 404 se non ci sono componenti
      );
    }

    return NextResponse.json(components, { status: 200 });
  } catch (error) {
    console.error("Errore nel recupero dei componenti:", error);

    // Restituisce un messaggio di errore più dettagliato
    return NextResponse.json(
      {
        error: `Errore nel recupero dei componenti: ${
          error instanceof Error ? error.message : error
        }`,
      },
      { status: 500 }
    );
  }
}
