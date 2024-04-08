/*
  Warnings:

  - You are about to drop the `GroupDeliveredAssignment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroupDeliveredAssignment" DROP CONSTRAINT "GroupDeliveredAssignment_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "GroupDeliveredAssignment" DROP CONSTRAINT "GroupDeliveredAssignment_groupId_fkey";

-- DropTable
DROP TABLE "GroupDeliveredAssignment";

-- CreateTable
CREATE TABLE "DeliveredAssignment" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "assignmentId" INTEGER NOT NULL,
    "deliveredAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "grade" DOUBLE PRECISION,
    "feedback" TEXT,

    CONSTRAINT "DeliveredAssignment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DeliveredAssignment" ADD CONSTRAINT "DeliveredAssignment_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveredAssignment" ADD CONSTRAINT "DeliveredAssignment_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
