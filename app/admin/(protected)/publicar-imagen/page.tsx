"use client";

import { FormEvent, useState,useEffect } from "react";
import FormularioPublicarImagen from "@/app/components/admin/form-Publicar-Imagen";
import { toast } from "react-toastify";
import { getAnonId } from "@/app/utils/anonId";
import CardAdminImgPublicadas from "@/app/components/admin/imagenesPublicadas";

export interface PropsImagenes{
    titulo:string,
    imagen: File | null;
    description:string
}

export interface PropsImg {
    id: number;
    imagen: string;
    titulo: string;
    description: string;
    createdAt: string;
    likesCount: number;
    likedByMe: boolean;
}

export default function PublicarImagen() {
    const [datos, setDatos] = useState<PropsImagenes>({ titulo: "", imagen: null,description: "",});
    const [imaPublicadas, setImaPublicadas] = useState<PropsImg[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [imgSeleccionada, setImgSeleccionada] = useState<PropsImg | null>(null);
    const anonId = getAnonId();
    

    //subir fotos a galeria
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

    //obtener las fotos publicadas

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
        }, []);

        
    const confirmarEliminar = async (): Promise<void> => {
        if (!imgSeleccionada?.id) {
            toast.error("Imagen inválida");
            return;
        }

        try {
            const res = await fetch(
                `/api/eliminar-Imagenes/${imgSeleccionada.id}`,
                { method: "DELETE" }
            );

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Error al eliminar");
            }

            toast.success("Imagen eliminada correctamente");
            await obtenerImagenes();
        } catch (error: unknown) {
            console.error(error);
            toast.error("No se pudo eliminar la imagen");
        } finally {
            cerrarModal();
        }
    };



    const abrirModal = (img: PropsImg) => {
        setImgSeleccionada(img);
        setOpen(true);
    };

    const cerrarModal = () => {
        setOpen(false);
        setImgSeleccionada(null);
    };

    return (
        <>
            <FormularioPublicarImagen
                datos={datos}
                setDatos={setDatos}
                submit={submit}
            />
            <CardAdminImgPublicadas
                imaPublicadas={imaPublicadas}
                open={open}
                abrirModal={abrirModal}
                cerrarModal={cerrarModal}
                confirmarEliminar={confirmarEliminar}
            />

        </>
    );
}
