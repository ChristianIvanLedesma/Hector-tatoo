"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from 'lucide-react'
import { House } from "lucide-react";

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
        <nav className="relative bg-white/10 backdrop-blur-md">

            {/* Header */}
            <div className="relative flex items-center px-3 py-6 gap-3">
                {/* Admin */}
                <span className="text-red-500 font-semibold">Admin</span>
                <span className="text-white font-medium">{adminName}</span>

                {/* Ver sitio público */}
                <div className="relative ml-auto group sm:top-0">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-green-500 hover:text-white transition"
                    >
                        <House size={20} />
                        <span className="hidden sm:inline text-sm">Ver sitio</span>
                    </Link>

                    {/* Tooltip */}
                    <span
                        className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2
            whitespace-nowrap rounded bg-black/80 px-3 py-1 text-xs text-white
            opacity-0 group-hover:opacity-100 transition duration-200"
                    >
                        Ver sitio público
                    </span>
                </div>

                {/* Logout */}
                <div className="relative sm:mr-8  px-4 group top-1">
                    <button
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        className="text-red-500 hover:text-red-600 transition cursor-pointer"
                    >
                        <LogOut size={20} />
                    </button>

                    {/* Tooltip */}
                    <span
                        className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2
            whitespace-nowrap rounded bg-black/80 px-3 py-1 text-xs text-white
            opacity-0 group-hover:opacity-100 transition duration-200"
                    >
                        Salir
                    </span>
                </div>
            </div>


            
            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 min-h-20 border-b border-white/20 shadow p-2">
                {navbar.map((section) => {
                    const isActive = pathname === section.tipo;

                    return (
                        <li key={section.id}>
                            <Link
                                href={section.tipo}
                                className={`
                            flex items-center justify-center px-4 py-2 rounded transition-all duration-300
                            text-white hover:bg-white/10
                            ${isActive
                                        ? "border border-gray-400 bg-white/5"
                                        : "border border-transparent"}
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
