
interface TypeProps{
    section:string
    id: number;
}
export const navbar: TypeProps[]= [
        { id:1 ,section: "Quienes Somos" },
        { id:2, section: "Categorías" }, 
        { id:3, section: "Galeria" },
        { id:4, section: "Busqueda de jugadores" },
        { id:5, section:"Contactanos" }
    ]

export default function Navbar0PantallaGrande() {

  return (
      <ul className="hidden sm:flex sm:w-160 md:w-180 m-auto flex-row items-center justify-center gap-4 p-2">


        {navbar.map((section)=>(
            <li
                key={section.id}
                className="flex justify-center  p-3 rounded-lg
             border border-white/30 hover:border-white
             hover:bg-white/10 backdrop-blur
             transition-all duration-300
             text-white cursor-pointer "
            >

                <p className="cursor-pointer text-center">
                    {section.section}
                </p>
            </li>
        ))}
    </ul>
  );
}
