"use client";
import { useState } from "react";
import Navbar0PantallaGrande from "./Navbar0PantallaGrande";
import NavbarMovile from "./NavbarMovile";



export default function Navbar() {
    const [open, setOpen] = useState(false);
    

    const toggleMenu =()=>{
        setOpen(prev=>!prev);
    }

    return (
        <>
           
            <Navbar0PantallaGrande />
            <NavbarMovile toggleMenu={toggleMenu} open={open} />
           
       </>
                
                
          
           
       
    );
}
