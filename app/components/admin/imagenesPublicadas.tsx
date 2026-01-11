import { PropsImg } from "@/app/(public)/galeria/page";
import Image from "next/image";
import { Trash } from "lucide-react";
import ModalEliminacionFotos from "./modalEliminacionFotos";



interface ImaPublicadas {
    imaPublicadas: PropsImg[];
    open: boolean;
    abrirModal: (img: PropsImg) => void;
    cerrarModal: () => void;
    confirmarEliminar: () => Promise<void>;
}


export default function CardAdminImgPublicadas({ imaPublicadas, open, abrirModal, cerrarModal, confirmarEliminar }: ImaPublicadas) {

    return (
        <>
            <h1 className="text-center text-white text-lg sm:text-xl font-semibold">Fotos Publicadas</h1>
            <ul
                className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl my-10  px-10 "
            >
                {imaPublicadas.map((imagenes) => {
                    const fechaFormateada = new Date(imagenes.createdAt).toLocaleDateString(
                        "es-AR",
                        {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        }
                    );

                    return (
                        <li
                            key={imagenes.id}
                            className="bg-white/10 backdrop-blur-md border border-red-500 rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
                        >
                            
                            <div className="relative w-full h-48 sm:h-52 md:h-56">
                                <Image
                                    src={imagenes.imagen}
                                    alt={imagenes.titulo}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw,
                    (max-width: 768px) 50vw,
                    (max-width: 1024px) 33vw,
                    25vw"
                                />
                            </div>


                            <div className="p-4 text-white flex flex-col gap-2">
                                <h3 className="text-base sm:text-lg font-semibold truncate">
                                    {imagenes.titulo}
                                </h3>

                                <span className="flex  justify-between text-sm text-gray-400 gap-2">
                                    <p>{fechaFormateada}</p>  
                                    <Trash
                                        className="hover:text-red-500 cursor-pointer"
                                        onClick={() => abrirModal(imagenes)}
                                    />
                                </span>
                            
                            </div>
                        </li>
                    );
                })}
            </ul>
            
            {/*  MODAL */}

            {open && (
            <ModalEliminacionFotos
                cerrarModal={cerrarModal} confirmarEliminar={confirmarEliminar} />
            )}
        </>

    );
}
