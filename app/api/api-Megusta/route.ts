import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();


export async function POST(req: Request) {
    const { imagenId, anonId } = await req.json();

    const existe = await prisma.likeAnon.findUnique({
        where: { imagenId_anonId: { imagenId, anonId } },
    });

    if (existe) {
        await prisma.likeAnon.delete({ where: { id: existe.id } });
    } else {
        await prisma.likeAnon.create({
            data: { imagenId, anonId },
        });
    }

    const totalLikes = await prisma.likeAnon.count({
        where: { imagenId },
    });

    return NextResponse.json({ totalLikes });
}
