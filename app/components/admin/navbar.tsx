import Link from 'next/link'

interface TypeProps {
    section: string
    tipo: string
    id: number;
}

export const navbar: TypeProps[]= [
    { id: 1, section: "Subir Aviso", tipo:"subir-aviso" },
    { id: 2, section: "Mis Mensajes", tipo: "mensajes" }, 
    { id: 3, section: "categorias", tipo: "/" },
    { id: 4, section: "imagenes", tipo: "" },
    { id: 5, section: "albun", tipo: "/" },
    ]


export default function NavbarAdmin() {
    return (
        <nav className='bg-white/10'>
        <h1 className="w-85 text-white ml-auto p-2">Administrador</h1>
        <ul
            className="flex flex-col sm:flex-row gap-2 sm:gap-4 min-h-20 border-b border-white/20 backdrop-blur shadow p-2"
        >
            {navbar.map((section) => (
                <li key={section.id}>
                    <Link
                        href={section.tipo}
                        className="flex items-center justify-center px-4 py-2 text-white hover:bg-white/10 transition-all duration-300 rounded"
                    >
                        {section.section}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
    );
}
