"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NavbarAdmin from "@/app/components/admin/navbar";

export default function ProtectedAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status } = useSession();
    
   
    const router = useRouter();

    useEffect(() => {
        if (
            status === "unauthenticated" ||
            (session && session.user.role !== "ADMIN")
        ) {
            router.replace("/admin/login");
        }
    }, [status, session, router]);

    if (status === "loading") {
        return <p className="text-white">Cargando...</p>;
    }

    if (!session) return null;

    return (
        <>
            
            <main><NavbarAdmin />
                {children}</main> 
        </>
    );
}
