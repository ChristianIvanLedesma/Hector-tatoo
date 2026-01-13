"use client"

import { useState,useEffect } from "react";

interface TypeMensaje{
  id:number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  mensaje: string

}


export default function MisMensajes() {
  const [mensaje, setMensajes] = useState<TypeMensaje []>([]);


  const obtenerMisMensajes = async () => {
    try {
      const res = await fetch("/api/obtenerMensajes");

      if (!res.ok) {
        throw new Error("Error al obtener los mensajes");
      }

      const data = await res.json();
      setMensajes(data);
    } catch (error: unknown) {
      console.error("Error al obtener mensajes", error);
    }
  };



  useEffect(()=>{
    obtenerMisMensajes();
  },[])


  return (
    <>
    <h1 className="text-3xl text-center text-white my-9">Mensajes Recibidos</h1>
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6 px-4 sm:px-10">
      {mensaje.map((m) => (
        <li
          key={m.id}
          className="rounded-[15px] border border-white/20 bg-white/10 backdrop-blur
      p-4 shadow-lg transition hover:scale-[1.02] rounded-br-xs"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-yellow-500 font-semibold text-lg">{m.nombre} {m.apellido}</h3>
            <span className="text-xs text-red-500">#{m.id}</span>
          </div>

          <div className="space-y-1 text-sm ">
            <p>📧 <span className="font-medium text-green-500">{m.correo}</span></p>
            <p>📞 <span className="font-medium text-green-500">{m.telefono}</span></p>
          </div>

          <p className="whitespace-normal wrap-break-word mt-3 text-sm text-white/90 border-t border-white/20 pt-2">{m.mensaje}</p>
        </li>
      ))}
    </ul>
    </>

  );
}