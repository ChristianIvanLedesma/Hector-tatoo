import Navbar from "../components/public/Navbar";
import Image from "next/image";

export default function PublicLayout({children,}:{children: React.ReactNode;}) {
    return (
        <>
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
        </>
    );
}
