/*
  Warnings:

  - Made the column `groupId` on table `StudentClass` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "StudentClass" DROP CONSTRAINT "StudentClass_groupId_fkey";

-- AlterTable
ALTER TABLE "StudentClass" ALTER COLUMN "groupId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "StudentClass" ADD CONSTRAINT "StudentClass_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
