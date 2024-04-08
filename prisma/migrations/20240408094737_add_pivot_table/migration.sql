/*
  Warnings:

  - You are about to drop the column `groupId` on the `StudentClass` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentClass" DROP CONSTRAINT "StudentClass_groupId_fkey";

-- AlterTable
ALTER TABLE "StudentClass" DROP COLUMN "groupId";

-- CreateTable
CREATE TABLE "StudentGroup" (
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "StudentGroup_pkey" PRIMARY KEY ("studentId","classId","groupId")
);

-- AddForeignKey
ALTER TABLE "StudentGroup" ADD CONSTRAINT "StudentGroup_studentId_classId_fkey" FOREIGN KEY ("studentId", "classId") REFERENCES "StudentClass"("studentId", "classId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentGroup" ADD CONSTRAINT "StudentGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
