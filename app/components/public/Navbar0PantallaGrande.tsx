"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TypeProps {
    section: string;
    tipo: string;
    id: number;
}

export const navbar: TypeProps[] = [
    { id: 1, section: "Quienes Somos", tipo: "/quienes-somos" },
    { id: 2, section: "Categorías", tipo: "/categorias" },
    { id: 3, section: "Galería", tipo: "/galeria" },
    { id: 4, section: "Publicaciones", tipo: "/avisos" },
    { id: 5, section: "Contactanos", tipo: "/contacto" },
];

export default function Navbar0PantallaGrande() {
    const pathname = usePathname();

    return (
        <ul className="hidden sm:flex sm:w-160 md:w-180 m-auto flex-row items-center justify-center gap-4 p-2">
            {navbar.map((section) => {
                const isActive = pathname === section.tipo;

                return (
                    <li key={section.id}>
                        <Link
                            href={section.tipo}
                            className={`
                flex justify-center p-3 rounded-lg backdrop-blur
                transition-all duration-300 text-white cursor-pointer
                border
                ${isActive
                                    ? "border-gray-300 bg-white/10"
                                    : "border-white/30 hover:border-white hover:bg-white/10"
                                }
              `}
                        >
                            <p className="text-center">{section.section}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
