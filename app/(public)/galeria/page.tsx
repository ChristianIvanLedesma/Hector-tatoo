"use client"
import { useState,useEffect } from "react";
import CardImgPublicadas from "@/app/components/public/cardImgPublicadas";
import { toast } from "react-toastify";
import SkeletonGaleria from "@/app/components/public/ui/SkeletonGaleria";


export interface PropsImg{
id:number;
imagen:string;
titulo:string;
description:string;
createdAt:string;
}

export default function Galeria() {
    const [imaPublicadas, setImaPublicadas] = useState<PropsImg[]>([]);
    const [loading, setLoading] = useState(true);

    const obtenerImagenes=async()=>{
        try{
            const res = await fetch("/api/obtenerImagenesPublicadas");
            const data=await res.json();
            setImaPublicadas(data);
        }catch(error:unknown){
            console.log("Error al obtener las Imagenes Publicadas")
            toast.error("Error al descargar las imagenes")

        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        obtenerImagenes();
    },[])

    if (loading) {
        return (
            <SkeletonGaleria />
        );
    }
    return (
       
        <CardImgPublicadas imaPublicadas={imaPublicadas}/>
    );
}