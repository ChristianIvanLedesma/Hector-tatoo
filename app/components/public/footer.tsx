import Link from "next/link";
interface Type{
    id:number;
    seccion:string;
    href:string;
}

const link: Type[] =[   
                        { id: 1, seccion: "Quiénes Somos", href:"/quienes-somos"},
                        { id: 2, seccion: "Categorías", href:"/categorias"},
                        { id: 3, seccion: "Contacto", href:"/contacto"}
                    ]

export default function Footer() {
    return (
        <footer className="w-full min-h-20 bg-black/40 backdrop-blur border-t border-white/10 mt-20">   
            <div className="mx-auto flex flex-col items-center gap-4 px-2 py-4">
                <ul className="flex gap-6 text-sm">
                        {link.map((lin)=>(
                            <li key={lin.id}>
                                <Link href={lin.href} className="text-gray-300 hover:text-white transition">
                                    {lin.seccion}
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className="text-gray-500 text-xs text-center">
                    © {new Date().getFullYear()} Christian-Ledesma. Todos los derechos reservados.
                </div>
            </div>
            
        </footer>

    );
}
