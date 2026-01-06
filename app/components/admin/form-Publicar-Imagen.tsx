import { PropsImagenes } from "@/app/admin/(protected)/publicar-imagen/page";
import { Dispatch, FormEvent, SetStateAction } from "react";


interface PropsPublicarFotos{
    datos:PropsImagenes
    setDatos: Dispatch<SetStateAction<PropsImagenes>>
    submit: (e:FormEvent)=> void

}

export default function FormularioPublicarImagen({ datos, setDatos, submit }:PropsPublicarFotos) {
  return (
      <section className="w-full max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto pb-16 px-4">
          <h1 className="text-2xl sm:text-3xl text-center text-white my-8 font-semibold">Publicar Imágenes</h1>

          <form 
              onSubmit={submit}
              className="flex flex-col gap-5 bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg">

              <label className="flex flex-col gap-2 text-white text-sm">
                  Título
                  <input
                      value={datos.titulo}
                      onChange={(e)=>setDatos({...datos,titulo:e.target.value})}
                      type="text"
                      name="titulo"
                      placeholder="Ingrese título..."
                      className="rounded-md bg-transparent border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition" />
              </label>


              <label className="flex flex-col gap-2 text-white text-sm">
                  Imagen
                  <input
                      onChange={(e) =>
                          setDatos({ ...datos, imagen: e.target.files?.[0] || null })
                      }
                      accept="image/*"
                      type="file"
                      name="imagen"
                      className="rounded-md bg-transparent border border-white/20 px-3 py-2  text-white file:bg-white/10 file:text-white file:border-0 file:rounded file:px-3 hover:file:bg-white/20 transition cursor-pointer"
                  />
              </label>


              <label className="flex flex-col gap-2 text-white text-sm">
                  Descripción
                  <input
                      value={datos.description}
                      onChange={(e) => setDatos({ ...datos, description: e.target.value })}
                      type="text"
                      name="descripcion"
                      placeholder="Ingrese descripción..."
                      className="rounded-md bg-transparent border border-white/20 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition"
                  />

              </label>


              <button
                  type="submit"
                  className="mt-4 rounded-lg bg-white/90 text-black py-2 cursor-pointer font-semibold hover:bg-white transition active:scale-95"
              >
                  Publicar imagen
              </button>
          </form>
      </section>
  );
}