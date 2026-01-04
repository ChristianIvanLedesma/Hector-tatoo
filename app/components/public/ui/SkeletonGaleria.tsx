export default function SkeletonGaleria() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-6 animate-pulse">
            
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-40 bg-white/10 rounded-xl backdrop-blur"
                    />
                ))}
            </div>
        </div>
    );
}
