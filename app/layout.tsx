import { ReactNode } from "react";
import "./globals.css"
import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className="bg-black">
      <head>
        <title>Hector Tatoo</title>

      </head>
      <body >
        <div className="flex items-center justify-between gap-3 m-auto p-8 sm:w-138">
                <h1 className="text-3xl sm:text-center text-gray-500 text-shadow-gray-700 sm:text-5xl animate-pulse">
                  HECTOR TATOO
                </h1>
               
        
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={90}
                  height={60}
                  className="object-contain mr-3 "
                />
              </div>
        <Navbar /> 
         <main>{children}</main>
        
      </body>
    </html>
  );
}