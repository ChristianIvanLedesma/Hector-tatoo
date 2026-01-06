"use client"
import {FormEvent,useState } from "react";
import {toast} from "react-toastify"

export default function SubirAviso() {
    const [publicarAviso,setPublicarAviso]=useState({titulo:"",aviso:""})

    const subirAviso=async(e:FormEvent)=>{
        e.preventDefault();
        try{
            if(!publicarAviso.titulo || !publicarAviso.aviso){
                toast.error("Debe completar todos los campos");
                return
            }

            const res = await fetch("/api/avisos",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                }, body: JSON.stringify(publicarAviso)
                
            })
            if (!res.ok) {
                toast.error("Error al publicar el aviso");
                return
            }

            toast.success("Aviso publicado correctamente");

            
            setPublicarAviso({ titulo: "", aviso: "" });

        }catch (error: unknown) {
                console.error("Error al subir aviso:", error);
                toast.error("Ocurrió un error inesperado al publicar el aviso");
            }
    }

    

  return (
<>
    <h1 className="text-3xl text-center text-white my-9">Publicar Avisos</h1>
   <form 
    onSubmit={subirAviso}
    className="
    w-full
    max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
    mx-auto
    mt-10
    p-4 sm:p-6 md:p-8
    flex flex-col gap-5
    bg-white/10
    backdrop-blur
    border border-white/20
    rounded-2xl
    shadow-xl m-8
  "
   
   >
        
          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
            titulo
            <input 
                value={publicarAviso.titulo}
                onChange={(e)=>setPublicarAviso({...publicarAviso,titulo:e.target.value})}
                placeholder="Ingrese titulo"
                type="text"
                  className="
                    w-full
                    px-3 py-2 sm:py-2.5
                    rounded-md
                    bg-black/40
                    border border-white/20
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500
                    transition
                    "
             />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
              Aviso
              <input
                  value={publicarAviso.aviso}
                  onChange={(e)=>setPublicarAviso({...publicarAviso,aviso:e.target.value}) }
                  placeholder="Ingrese el Aviso..."
                  type="text"
                  className="
                    w-full
                    px-3 py-2 sm:py-2.5
                    rounded-md
                    bg-black/40
                    border border-white/20
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:ring-2 focus:ring-emerald-500
                    transition
                    "
                  
              />
          </label>

          <button
              type="submit"
              className="
                mt-2
                py-2.5
                rounded-lg
                bg-emerald-600 hover:bg-emerald-700
                text-white font-semibold
                transition
                disabled:opacity-50
            "
          >
              Publicar aviso
          </button>


   </form>
</>
  );
}