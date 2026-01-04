-- CreateTable
CREATE TABLE "publicarImagenes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "publicarImagenes_pkey" PRIMARY KEY ("id")
);
