/*
  Warnings:

  - You are about to drop the column `studentId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `courseCode` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the `StudentGroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classId` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SEMESTER" AS ENUM ('FALL', 'SPRING');

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_studentId_fkey";

-- DropForeignKey
ALTER TABLE "Group" DROP CONSTRAINT "Group_courseCode_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroup" DROP CONSTRAINT "StudentGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "StudentGroup" DROP CONSTRAINT "StudentGroup_studentId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "studentId";

-- AlterTable
ALTER TABLE "Group" DROP COLUMN "courseCode",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "classId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "StudentGroup";

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" "SEMESTER" NOT NULL,
    "courseCode" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentClass" (
    "studentId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    CONSTRAINT "StudentClass_pkey" PRIMARY KEY ("studentId","classId")
);

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_courseCode_fkey" FOREIGN KEY ("courseCode") REFERENCES "Course"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentClass" ADD CONSTRAINT "StudentClass_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentClass" ADD CONSTRAINT "StudentClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
