interface ModalProps {
    cerrarModal: () => void;
    confirmarEliminar: () => Promise<void>;
}

export default function ModalEliminacionFotos({ cerrarModal, confirmarEliminar, }: ModalProps) {
  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-red-500 rounded-xl p-6 w-full max-w-sm text-white">
                <h2 className="text-lg font-semibold mb-2">
                    ¿Eliminar imagen?
                </h2>

                <p className="text-sm text-gray-400 mb-6">
                    Esta acción no se puede deshacer.
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={cerrarModal}
                        className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={confirmarEliminar}
                        className="px-4 py-2 rounded bg-red-600 hover:bg-red-500"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
  )
}