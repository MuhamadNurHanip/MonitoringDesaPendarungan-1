-- CreateEnum
CREATE TYPE "RoleUser" AS ENUM ('admin', 'pejabatdesa');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roleuser" "RoleUser" NOT NULL,
    "imgprofile" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
