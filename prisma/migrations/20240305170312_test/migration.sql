-- DropForeignKey
ALTER TABLE "StudentClass" DROP CONSTRAINT "StudentClass_groupId_fkey";

-- AlterTable
ALTER TABLE "StudentClass" ALTER COLUMN "groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "StudentClass" ADD CONSTRAINT "StudentClass_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
