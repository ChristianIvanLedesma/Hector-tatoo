import {  PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();



export async function POST(req:Request){

    try{
        const body = await req.json();
        const { nombre,apellido,correo,telefono,mensaje}=body 
        if (!nombre || !apellido || !correo || !telefono || !mensaje){
            return NextResponse.json({ message:"Debe completar todos los campos"},{status:400})
        }

        const nuevoMensaje= await prisma.contacto.create({
            data:{
                nombre,
                apellido,
                correo,
                telefono,
                mensaje
            }
        })
            return NextResponse.json(nuevoMensaje,{status:201})


    }catch(error:unknown){
        return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
    }

}



