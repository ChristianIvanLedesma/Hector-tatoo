import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma= new PrismaClient();


export async function POST(req:Request){

    try{
        const body = await req.json();
        const {titulo,aviso}=body;

        if(!titulo || !aviso){
            return NextResponse.json({message:"Debe completar todos los campos"},{status:400})
        }
        const nuevoAviso= await prisma.busquedaDeJugador.create({
            data:{
                titulo,
                aviso
            }
        })
        
        
        return NextResponse.json(nuevoAviso, { status: 201 })

    }catch (error:unknown){
        
        return NextResponse.json({ error: "Error al crear la búsqueda" },{ status: 500 });

    }
}



export async function GET() {
    try {
        const aviso = await prisma.busquedaDeJugador.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(aviso, { status: 200 });

    } catch (error: unknown) {
        console.error("GET /api/avisos error:", error);

        return NextResponse.json([], { status: 200 });
    }
}
