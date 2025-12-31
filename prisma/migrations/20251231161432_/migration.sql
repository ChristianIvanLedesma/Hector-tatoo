-- CreateTable
CREATE TABLE "busquedaDeJugador" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "aviso" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "busquedaDeJugador_pkey" PRIMARY KEY ("id")
);
