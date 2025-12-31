"use client"
import { useState,useEffect } from "react";

interface PropsMisAvisos{
    id:number;
    titulo:string;
    aviso:string;
    createdAt:string;
}
export default function BusquedaDeJugadores() {
    const[misAvisos,setMisAvisos]=useState<PropsMisAvisos[]>([]);

    const obtenerAvisos=async()=>{
        const res= await fetch("/api/avisos");
        const data=await res.json();
        setMisAvisos(data);
    }

    useEffect(()=>{
        obtenerAvisos();
    },[])

    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 py-6">
            {misAvisos.map((avisosPublicados) => (
                <li
                    key={avisosPublicados.id}
                    className="
        relative flex flex-col justify-center
        bg-white/10 backdrop-blur-md
        border border-white/20 rounded-xl
        p-6
        shadow-lg shadow-black/50
        hover:scale-105 hover:border-white/50 transition-all duration-300
      "
                >
                   
                    <p className="text-yellow-400 text-lg font-bold mb-2 text-center">
                        {avisosPublicados.titulo}
                    </p>

                    
                    <p className="text-white/90 text-sm md:text-base mb-6">
                        {avisosPublicados.aviso}
                    </p>

                   
                    <p className="absolute bottom-2 right-2 text-white/40 text-xs">
                        {new Date(avisosPublicados.createdAt).toLocaleDateString("es-AR", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                        })}
                    </p>
                </li>
            ))}
        </ul>



    );
}
