import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(
    _req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params; 

        const imageId = Number(id);

        if (isNaN(imageId)) {
            return NextResponse.json(
                { message: "ID inválido" },
                { status: 400 }
            );
        }

        const imagen = await prisma.publicarImagenes.findUnique({
            where: { id: imageId },
        });

        if (!imagen) {
            return NextResponse.json(
                { message: "Imagen no encontrada" },
                { status: 404 }
            );
        }

        await prisma.publicarImagenes.delete({
            where: { id: imageId },
        });

        return NextResponse.json(
            { message: "Imagen eliminada correctamente" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error DELETE imagen:", error);
        return NextResponse.json(
            { message: "Error al eliminar la imagen" },
            { status: 500 }
        );
    }
}
