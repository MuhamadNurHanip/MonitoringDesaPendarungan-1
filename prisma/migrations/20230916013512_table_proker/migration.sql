/*
  Warnings:

  - Added the required column `penyelenggara` to the `Proker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sasaran` to the `Proker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahunAnggaran` to the `Proker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tujuan` to the `Proker` table without a default value. This is not possible if the table is not empty.
  - Made the column `jumlahAnggaran` on table `Proker` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tanggal` on table `Proker` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Proker" ADD COLUMN     "penyelenggara" TEXT NOT NULL,
ADD COLUMN     "sasaran" TEXT NOT NULL,
ADD COLUMN     "tahunAnggaran" INTEGER NOT NULL,
ADD COLUMN     "tujuan" TEXT NOT NULL,
ALTER COLUMN "jumlahAnggaran" SET NOT NULL,
ALTER COLUMN "tanggal" SET NOT NULL;
