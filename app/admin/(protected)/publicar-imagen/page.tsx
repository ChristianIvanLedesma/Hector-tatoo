"use client";

import { FormEvent, useState } from "react";
import FormularioPublicarImagen from "@/app/components/admin/form-Publicar-Imagen";
import { toast } from "react-toastify";

export interface PropsImagenes{
    titulo:string,
    imagen: File | null;
    description:string
}

export default function PublicarImagen() {
    const [datos, setDatos] = useState<PropsImagenes>({ titulo: "", imagen: null,description: "",});

    const submit = async (e: FormEvent) => {
        e.preventDefault();

        if (!datos.titulo || !datos.imagen) {
            toast.error("Título e imagen son obligatorios");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("titulo", datos.titulo);
            formData.append("imagen", datos.imagen);

            if (datos.description) {
                formData.append("descripcion", datos.description);
            }

            const res = await fetch("/api/publicar-imagenes", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error al publicar imagen");
            }

            toast.success("Imagen publicada correctamente");
            setDatos({ titulo: "", imagen: null, description: "" });

        } catch (error:unknown) {
            console.error(error);
            toast.error("Ocurrió un error al publicar");
        }
    };

    return (
        <FormularioPublicarImagen
            datos={datos}
            setDatos={setDatos}
            submit={submit}
        />
    );
}
