import {  PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET() {
    try {
        const mensaje = await prisma.contacto.findMany({
            orderBy: {
                createAt: "desc"
            }
        })
        return NextResponse.json(mensaje, { status: 200 })

    } catch (error: unknown) {
        console.error("GET /api/contacto error:", error);

        return NextResponse.json({ message: "Error en el servidor " }, { status: 500 })

    }

}