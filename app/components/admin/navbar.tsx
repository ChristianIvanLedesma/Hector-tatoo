"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TypeProps {
    section: string;
    tipo: string;
    id: number;
}

export const navbar: TypeProps[] = [
    { id: 1, section: "Subir Aviso", tipo: "/admin/subir-aviso" },
    { id: 2, section: "Mis Mensajes", tipo: "/admin/mensajes" },
    { id: 3, section: "Categorias", tipo: "/" },
    { id: 4, section: "Publicar Imagen", tipo: "/admin/publicar-imagen" },
    { id: 5, section: "Album", tipo: "/" },
];

export default function NavbarAdmin() {
    const pathname = usePathname();

    return (
        <nav className="bg-white/10 backdrop-blur-md">
            <h1 className="text-white ml-auto p-2 font-semibold">Administrador</h1>

            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 min-h-20 border-b border-white/20 shadow p-2">
                {navbar.map((section) => {
                    const isActive = pathname === section.tipo;

                    return (
                        <li key={section.id}>
                            <Link
                                href={section.tipo}
                                className={`
                  flex items-center justify-center px-4 py-2 rounded transition-all duration-300
                  text-white
                  hover:bg-white/10
                  ${isActive
                                        ? "border border-gray-400 bg-white/5"
                                        : "border border-transparent"
                                    }
                `}
                            >
                                {section.section}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
