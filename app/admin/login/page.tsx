"use client";

import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import FormularioLoginAdmin from "@/app/components/admin/form-Login";



export default function LoginAdmin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
   

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setLoading(false);

        if (res?.error) {
            toast.error("Error en sus credenciales")
            return;
        }

        if (res?.ok) {
            //renderizo para que me muestre en el el toast el email del admin
            const session = await getSession();

            toast.success(`Bienvenido ${session?.user?.email}`);
            setTimeout(() => {
                router.push("/admin");
            }, 1500);
            
        }
    };

    return (
        <FormularioLoginAdmin 
            login={login} 
            email={email} 
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword}
            loading={loading}
            />
    );
}
