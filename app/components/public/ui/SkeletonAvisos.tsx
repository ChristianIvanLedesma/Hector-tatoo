
export default function SkeletonAvisos() {
    return (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-8 py-6 animate-pulse">
            {Array.from({ length: 4 }).map((_, i) => (
                <li
                    key={i}
                    className="relative flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg shadow-black/50"
                >
                    {/* Título */}
                    <div className="h-6 w-3/4 mx-auto mb-3 rounded bg-yellow-400/30" />

                    {/* Texto */}
                    <div className="space-y-2 mb-8">
                        <div className="h-4 w-full rounded bg-white/20" />
                        <div className="h-4 w-11/12 rounded bg-white/20" />
                        <div className="h-4 w-10/12 rounded bg-white/20" />
                    </div>

                    {/* Fecha */}
                    <div className="absolute bottom-2 right-2 h-3 w-24 rounded bg-white/20" />
                </li>
            ))}
        </ul>
    );
}
