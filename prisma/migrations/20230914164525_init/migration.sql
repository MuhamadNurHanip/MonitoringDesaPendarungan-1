/*
  Warnings:

  - A unique constraint covering the columns `[id,nama]` on the table `Funds` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Proker" DROP CONSTRAINT "Proker_fundsId_fkey";

-- AlterTable
ALTER TABLE "Proker" ADD COLUMN     "fundsName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Funds_id_nama_key" ON "Funds"("id", "nama");

-- AddForeignKey
ALTER TABLE "Proker" ADD CONSTRAINT "Proker_fundsId_fundsName_fkey" FOREIGN KEY ("fundsId", "fundsName") REFERENCES "Funds"("id", "nama") ON DELETE SET NULL ON UPDATE CASCADE;
