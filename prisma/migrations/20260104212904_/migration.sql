-- CreateTable
CREATE TABLE "likeAnon" (
    "id" SERIAL NOT NULL,
    "imagenId" INTEGER NOT NULL,
    "anonId" TEXT NOT NULL,

    CONSTRAINT "likeAnon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "likeAnon_imagenId_anonId_key" ON "likeAnon"("imagenId", "anonId");

-- AddForeignKey
ALTER TABLE "likeAnon" ADD CONSTRAINT "likeAnon_imagenId_fkey" FOREIGN KEY ("imagenId") REFERENCES "publicarImagenes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
