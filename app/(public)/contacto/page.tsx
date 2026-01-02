"use client"

import { FormEvent, useState } from "react";
import FormularioDeContacto from "@/app/components/public/formularioDeContacto";
import {toast}from "react-toastify";

export  interface PropsDatos {
nombre: string;
apellido:string;
correo:string;
telefono:string;
mensaje:string
}


export default function Contacto() {
  const [datos, setDatos] = useState<PropsDatos>({nombre:"",apellido:"",correo:"",telefono:"",mensaje:""});

    
    const submit=async(e:FormEvent)=>{
      e.preventDefault()
      try{
        if(!datos.nombre|| !datos.apellido || !datos.correo || !datos.telefono || !datos.mensaje){
          toast.error("Todos los campos son obligatorios");
          return
        }

          const nuevomensje= await fetch("/api/contacto",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
              
            },body:JSON.stringify(datos)

          });
          if (!nuevomensje.ok) {
            toast.error("Error al Enviar la consulta");
            return
          }

          toast.success("Se envio la consulta correctamente");
          setDatos({ nombre:"", apellido:"" ,correo:"" ,telefono:"", mensaje:"" })

      }catch(error: unknown) {
        console.error("Error al Enviar la consulta", error);
        toast.error("Error interno intente mas tarde");
      }

    }

    return (
      <>

      <FormularioDeContacto submit={submit} datos={datos} setDatos={setDatos}/>
      </>
    );
} 