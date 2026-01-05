import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { imagenId, anonId } = await req.json();
        if (!imagenId || !anonId) {
            return NextResponse.json({ message: "Datos incompletos" },{ status: 400 });
        }

        let liked = false;

        const existe = await prisma.likeAnon.findUnique({
            where: {
                imagenId_anonId: { imagenId, anonId },
            },
        });

        if (existe) { await prisma.likeAnon.delete({
                where: { id: existe.id },
            });
            liked = false;
        } else {
            await prisma.likeAnon.create({
                data: { imagenId, anonId },
            });
            liked = true;
        }

        const likesCount = await prisma.likeAnon.count({
            where: { imagenId },
        });

        return NextResponse.json({liked,likesCount,});
    } catch (error:unknown) {
        
        return NextResponse.json({ message: "Error al procesar el like" },{ status: 500 });
    }
}
