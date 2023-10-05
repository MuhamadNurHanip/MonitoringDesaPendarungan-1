-- CreateEnum
CREATE TYPE "RoleStatus" AS ENUM ('Rencana', 'Progress', 'Selesai');

-- CreateTable
CREATE TABLE "Proker" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "hambatan" TEXT,
    "evaluasi" TEXT,
    "fundsId" INTEGER,
    "status" "RoleStatus" NOT NULL DEFAULT 'Rencana',
    "jumlahAnggaran" INTEGER,
    "jumlahRealisasi" INTEGER,
    "tanggal" TIMESTAMP(3),
    "tanggalRealisasi" TIMESTAMP(3),
    "dokumentasi" TEXT,

    CONSTRAINT "Proker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Proker" ADD CONSTRAINT "Proker_fundsId_fkey" FOREIGN KEY ("fundsId") REFERENCES "Funds"("id") ON DELETE SET NULL ON UPDATE CASCADE;
