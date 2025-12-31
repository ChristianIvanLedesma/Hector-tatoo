import { ReactNode } from "react";
import "./globals.css"
import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className="bg-black" lang="en">
      <head>
        <title>Hector Tatoo </title>

        <meta name="description" content="Club Deportivo Héctor Tatoo. Fútbol 11 y Futsal. Un espacio de identidad, deporte y comunidad." />
        <meta name="keywords" content="Hector Tatoo, club deportivo, futsal, fútbol 11, club de barrio, deporte, comunidad" />
        <meta name="author" content="Club Deportivo Héctor Tatoo" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Hector Tatoo" />
        <meta property="og:description" content="Fútbol 11 y Futsal" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hector-tatoo.vercel.app/" />
        <meta property="og:image" content="/logo.png" />

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body >
        <div className="flex items-center justify-between gap-3 m-auto p-8 sm:w-138">
                <h1 className="text-3xl sm:text-center text-gray-200 text-shadow-gray-300 sm:text-5xl animate-pulse">
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