-- CreateTable
CREATE TABLE "AssignmentReview" (
    "id" SERIAL NOT NULL,
    "reviewerId" INTEGER NOT NULL,
    "assignmentId" INTEGER NOT NULL,
    "feedback" TEXT,
    "grade" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3) NOT NULL,
    "isReviewed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "AssignmentReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupReview" (
    "id" SERIAL NOT NULL,
    "reviewerId" INTEGER NOT NULL,
    "feedback" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "GroupReview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AssignmentReview" ADD CONSTRAINT "AssignmentReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "GroupMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignmentReview" ADD CONSTRAINT "AssignmentReview_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "DeliveredAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupReview" ADD CONSTRAINT "GroupReview_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "GroupMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
