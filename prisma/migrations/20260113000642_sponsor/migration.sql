-- CreateTable
CREATE TABLE "sponsor" (
    "id" SERIAL NOT NULL,
    "imagen" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,

    CONSTRAINT "sponsor_pkey" PRIMARY KEY ("id")
);
