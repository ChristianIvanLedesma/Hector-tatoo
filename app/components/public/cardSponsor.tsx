"use client";
import { useState,useEffect } from "react";
import Image from "next/image";


interface TypeSponsor{
  id:number;
  imagen:string;
  
}

export default function Sponsor() {
  const[sponsor,setSponsor]=useState<TypeSponsor[]>([]);


  const obtenerSponsor=async()=>{
    try{
      const res = await fetch("/api/obtener-Sponsor");
      const data = await res.json();
      setSponsor(data);

    }catch(error:unknown){
      console.log("no se Obtuvieron los sponsor",error)
    }
    
  }

  useEffect(()=>{
    obtenerSponsor();
  },[])

    return (
        <>
        <section className="sponsor-wrapper"> 
          <div className="sponsor-container"> 
            <div className="sponsor-track"> 
              {[...sponsor,...sponsor].map((a, i) => (
                <div className="sponsor-item" key={i}> 
                <Image src={a.imagen} alt="sponsor" width={60} height={60} /> </div>))} 
            </div> 
          </div> 
          <style jsx>{`
              /* WRAPPER */
              .sponsor-wrapper {
                width: 100%;
                display: flex;
                justify-content: center;
              }

              /* CONTENEDOR */
              .sponsor-container {
                width: 85%;
                max-width: 500px;
                overflow: hidden;
                display: flex;
                align-items: center;
              }

              /* TRACK */
              .sponsor-track {
                display: flex;
                width: max-content;
                animation: scroll linear infinite;
              }

              /* ITEM */
              .sponsor-item {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 18px;
                flex-shrink: 0;
              }

              /* ANIMACIÓN */
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }

              /* 📱 MOBILE */
              @media (max-width: 640px) {
                .sponsor-container {
                  height: 70px;
                  width: 95%;
                }

                .sponsor-track {
                  animation-duration: 18s;
                }
              }

              /* 📱 TABLET */
              @media (max-width: 1023px) {
                .sponsor-container {
                  height: 105px;
                  width: 90%;
                }

                .sponsor-track {
                  animation-duration: 22s;
                }
              }

              /* 💻 DESKTOP */
              @media (min-width: 1024px) {
                .sponsor-container {
                  height: 110px;
                }

                .sponsor-track {
                  animation-duration: 28s;
                }
              }
            `}
          </style>

        </section>

        </>
    );
}
