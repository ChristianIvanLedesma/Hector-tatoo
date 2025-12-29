import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center gap-3 m-auto py-8">
        <h1 className="text-center text-gray-500 text-shadow-gray-700 text-5xl animate-pulse">
          HECTOR TATOO
        </h1>
       

        <Image
          src="/asd.png"
          alt="Logo"
          width={90}
          height={60}
          className="object-contain mr-3 "
        />
      </div>
      <Navbar />
    
    </>
  );
}
