/*
  Warnings:

  - The primary key for the `StudentGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "StudentGroup" DROP CONSTRAINT "StudentGroup_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "StudentGroup_pkey" PRIMARY KEY ("id");
