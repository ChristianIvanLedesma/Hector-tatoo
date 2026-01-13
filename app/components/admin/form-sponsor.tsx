"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

interface TypeSponsor {
    empresa: string;
    imagen: File | null;
}

export default function FormSponsor() {
    const [datos, setDatos] = useState<TypeSponsor>({
        empresa: "",
        imagen: null,
    });

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!datos.empresa || !datos.imagen) {
            toast.error("Todos los campos son obligatorios");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("empresa", datos.empresa);
            formData.append("imagen", datos.imagen);

            const res = await fetch("/api/subir-Sponsor", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                toast.error("Error al conectar con la API");
                return;
            }

            toast.success("Sponsor publicado correctamente");
            setDatos({ empresa: "", imagen: null });

        } catch (error: unknown) {
            console.error("Error al publicar sponsor:", error);
            toast.error("Error al publicar el sponsor");
        }
    };

    return (
        <>
            <h1 className="text-3xl text-center text-white my-9">Publicar Sponsor</h1>
            <form
                onSubmit={submit}
                encType="multipart/form-data"
                className="max-w-md mx-auto mt-8 space-y-6 my-10 rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/20"
            >
                <label className="flex flex-col gap-2 text-sm font-medium text-white">
                    Empresa
                    <input
                        type="text"
                        value={datos.empresa}
                        onChange={(e) =>
                            setDatos({ ...datos, empresa: e.target.value })
                        }
                        placeholder="Nombre de la empresa"
                        className="rounded-lg bg-black/40 px-4 py-2 text-white
                        placeholder:text-white/50 border border-white/20
                        focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-white">
                    Imagen
                    <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) =>
                            setDatos({
                                ...datos,
                                imagen: e.target.files?.[0] || null,
                            })
                        }
                        className="file:mr-4 file:rounded-lg file:border-0
                        file:bg-red-600 file:px-4 file:py-2
                        file:text-sm file:font-semibold file:text-white
                        hover:file:bg-red-700 text-white cursor-pointer"
                    />
                </label>

                <button
                    type="submit"
                    className="w-full rounded-xl bg-red-600 py-2
                    text-white font-semibold
                    hover:bg-red-700 transition-colors duration-200"
                >
                    Enviar
                </button>
            </form>
        </>
    );
}
