import { navbar } from "./Navbar0PantallaGrande";
import { Menu, X } from "lucide-react";

interface Props {
  toggleMenu: () => void;
  open: boolean;
}

export default function NavbarMovile({ toggleMenu, open }: Props) {
  return (
    <div className="sm:hidden relative">

      <div className="flex justify-end p-4">
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 text-white focus:outline-none select-none cursor-pointer"
        >
        
          <Menu size={28}
            className={`absolute transition-all duration-300
            ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
          />

          
          <X size={28}
            className={`absolute transition-all duration-300
            ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}
          />
        </button>
      </div>

      <ul
        className={`
          w-full top-16 
          bg-black/80 backdrop-blur rounded-xl p-4 space-y-3
          transform transition-all duration-300 ease-out
          ${open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}
        `}
      >
        {navbar.map((section) => (
          <li key={section.id}>
            <button
              className="w-full flex justify-center p-3 rounded-lg
              border border-white/30 hover:border-white
              hover:bg-white/10
              transition-all duration-200
              text-white select-none cursor-pointer"
            >
              {section.section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
