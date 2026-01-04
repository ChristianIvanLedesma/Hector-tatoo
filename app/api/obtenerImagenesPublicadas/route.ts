import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const imagenes = await prisma.publicarImagenes.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json(imagenes, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error al obtener imágenes" },
            { status: 500 }
        );
    }
}
