import NavbarAdmin from "../components/admin/navbar";
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            
            <main className="min-h-screen">
                <NavbarAdmin />
                {children}
            </main>
        </>
        
    );
}
