/*
  Warnings:

  - Added the required column `institute` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "institute" VARCHAR(255) NOT NULL;
