/*
  Warnings:

  - You are about to drop the column `userId` on the `StudentClass` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentClass" DROP CONSTRAINT "StudentClass_userId_fkey";

-- AlterTable
ALTER TABLE "StudentClass" DROP COLUMN "userId";
