import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const anonId = req.headers.get("x-anon-id") || "";
        const imagenes = await prisma.publicarImagenes.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                likes: true,
            },
        });
        const response = imagenes.map((img) => ({
            id: img.id,
            titulo: img.titulo,
            imagen: img.imagen,
            description: img.description,
            createdAt: img.createdAt,
            likesCount: img.likes.length,
            likedByMe: img.likes.some((like) => like.anonId === anonId),
        }));

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error al obtener imágenes" },
            { status: 500 }
        );
    }
}
