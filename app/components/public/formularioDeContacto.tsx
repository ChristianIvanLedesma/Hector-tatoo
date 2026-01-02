import { PropsDatos } from "@/app/(public)/contacto/page";
import { Dispatch,SetStateAction,FormEvent } from "react";

interface PropsMensaje{
    datos: PropsDatos;
    setDatos: Dispatch<SetStateAction<PropsDatos>>;
    submit: (e: FormEvent) => void;
}

export default function FormularioDeContacto({ datos, setDatos, submit }: PropsMensaje) {
  return (
      <form onSubmit={submit}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto my-10 p-4 sm:p-6 md:p-8
                    flex flex-col gap-5 bg-white/10 backdrop-blur border border-white/20 rounded-2xl shadow-xl"
      >
          
          <h2 className="text-center text-white text-lg sm:text-xl font-semibold">
              Enviar Consulta
          </h2>

          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
              Nombre
              <input
                  value={datos.nombre}
                  onChange={(e) => setDatos({ ...datos, nombre: e.target.value })}
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="w-full px-3 py-2 sm:py-2.5 rounded-md bg-black/40 border border-white/20
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
              Apellido
              <input
                  value={datos.apellido}
                  onChange={(e) => setDatos({ ...datos, apellido: e.target.value })}
                  type="text"
                  placeholder="Ingrese su apellido"
                  className="w-full px-3 py-2 sm:py-2.5 rounded-md bg-black/40 border border-white/20
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
              Correo electrónico
              <input
                  value={datos.correo}
                  onChange={(e) => setDatos({ ...datos, correo: e.target.value })}
                  type="email"
                  placeholder="ejemplo@email.com"
                  className="w-full px-3 py-2 sm:py-2.5 rounded-md bg-black/40 border border-white/20
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
          </label>

          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
              Teléfono
              <input
                  value={datos.telefono}
                  onChange={(e) => setDatos({ ...datos, telefono: e.target.value })}
                  type="tel"
                  placeholder="11 2345 6789"
                  className="w-full px-3 py-2 sm:py-2.5 rounded-md bg-black/40 border border-white/20
                   text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
          </label>
          <label className="flex flex-col gap-1 text-white text-sm sm:text-base">
            Mensaje
                <input 
                    value={datos.mensaje}
                    onChange={(e)=>setDatos({...datos,mensaje:e.target.value})}
                    type="textarea"
                    placeholder="Escriba su mensaje"
                    className="w-full px-3 py-2 sm:py-2.5 rounded-md bg-black/40 border border-white/20
                    text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
          </label>

          <button
              type="submit"
              className="mt-3 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white font-semibold transition"
          >
              Enviar consulta
          </button>
      </form>

  );
}