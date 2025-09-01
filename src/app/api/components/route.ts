// app/api/components/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/components
export async function GET() {
  try {
    const components = await prisma.component.findMany({
      include: {
        examples: true,
      },
    });

    return NextResponse.json(components, { status: 200 });
  } catch (error) {
    console.error("Errore nel recupero del componente:", error);
    return NextResponse.json(
      { error: "Errore nel recupero dei componenti" },
      { status: 500 }
    );
  }
}
