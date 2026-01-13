import { PrismaClient } from "@prisma/client";

import { NextResponse } from "next/server";
const prisma= new PrismaClient();
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const sponsors = await prisma.sponsor.findMany({
            orderBy: { id: "asc" },
            select: {
                id: true,
                empresa: true,
                imagen: true,
            },
        });

        return NextResponse.json(sponsors);
    } catch (error) {
        console.error("Error al obtener sponsors:", error);
        return NextResponse.json(
            { message: "Error al obtener sponsors" },
            { status: 500 }
        );
    }
}
