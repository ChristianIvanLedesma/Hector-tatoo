"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from 'lucide-react'


interface TypeProps {
    section: string;
    tipo: string;
    id: number;
}

export const navbar: TypeProps[] = [
    { id: 1, section: "Subir Aviso", tipo: "/admin/subir-aviso" },
    { id: 2, section: "Mis Mensajes", tipo: "/admin/mensajes" },
    { id: 3, section: "Categorias", tipo: "/admin/categorias" },
    { id: 4, section: "Publicar Imagen", tipo: "/admin/publicar-imagen" },
    { id: 5, section: "Administrar Sponsors", tipo: "/admin/sponsor" },
];

export default function NavbarAdmin() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const adminName = session?.user?.email ?? session?.user?.name ?? "Admin";

    return (
        <nav className="bg-white/10 backdrop-blur-md">
            <h1 className="flex items-center gap-2 text-sm sm:text-base px-3 py-6">
                <span className="absolute top-4 text-red-500 font-semibold">Admin</span>
                <span className="absolute top-4 left-16 text-white font-bold">{adminName}</span>
                <LogOut
                    className="absolute top-4 right-8 cursor-pointer text-sm text-red-500 hover:text-red-600 transition"
                    onClick={() => signOut({ callbackUrl: "/admin/login" })}

                />
            </h1>

            
            
            
          
           

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
