"use client"
import { useState,useEffect } from "react";
import CardImgPublicadas from "@/app/components/public/cardImgPublicadas";
import { toast } from "react-toastify";


export interface PropsImg{
id:number;
imagen:string;
titulo:string;
description:string;
createdAt:string;
}

export default function Galeria() {
    const [imaPublicadas, setImaPublicadas] = useState<PropsImg[]>([]);

    const obtenerImagenes=async()=>{
        try{
            const res = await fetch("/api/obtenerImagenesPublicadas");
            const data=await res.json();
            console.log("DATA IMAGENES 👉", data);
            setImaPublicadas(data);
        }catch(error:unknown){
            console.log("Error al obtener las Imagenes Publicadas")
            toast.error("Error al descargar las imagenes")

        }
    }

    useEffect(()=>{
        obtenerImagenes();
    },[])
    return (
       
        <CardImgPublicadas imaPublicadas={imaPublicadas}/>
    );
}