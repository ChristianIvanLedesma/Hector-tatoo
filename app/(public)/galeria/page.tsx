"use client"
import { useState,useEffect } from "react";
import CardImgPublicadas from "@/app/components/public/cardImgPublicadas";
import { toast } from "react-toastify";
import SkeletonGaleria from "@/app/components/public/ui/SkeletonGaleria";
import { getAnonId } from "@/app/utils/anonId";


export interface PropsImg{
id:number;
imagen:string;
titulo:string;
description:string;
createdAt:string;
likesCount: number;
likedByMe: boolean;
}

export default function Galeria() {
    const [imaPublicadas, setImaPublicadas] = useState<PropsImg[]>([]);
    const [loading, setLoading] = useState(true);
    const [animateId, setAnimateId] = useState<number | null>(null);
    const anonId = getAnonId();

    const obtenerImagenes=async()=>{
        try{
            const res = await fetch("/api/obtenerImagenesPublicadas",{
                headers: {
                    "x-anon-id": anonId,
                },
            });
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
    }, [])

    //megusta
    const toggleLike = async (imagenId: number) => {
        try {
                const res = await fetch("/api/api-Megusta", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ imagenId, anonId }),
                });

                const data = await res.json();

                setImaPublicadas((prev) =>
                    prev.map((img) =>
                        img.id === imagenId
                            ? {
                                ...img,
                                likedByMe: data.liked,
                                likesCount: data.likesCount,
                            }
                            : img
                    )
                );
            } catch (error) {
                toast.error("Error al actualizar el like");
            }
        };

    if (loading) {
        return ( <SkeletonGaleria /> )
    }
    return (
       
        <CardImgPublicadas imaPublicadas={imaPublicadas} toggleLike={toggleLike} animateId={animateId} setAnimateId={setAnimateId}/>
    );
}